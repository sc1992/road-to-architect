# Performance Optimization Study Notes [^ history version]

@(Notes)[Performance Optimization , notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
> 2017年04月17日 下午01:32:14
> 2017年04月16日 下午03:41:26
> 2017年03月30日 下午04:23:31

[^ Hibernate Reference]: [Hibernate.org][1]、[百度百科][2]

[TOC]

***
## 〇、思维导图

<br>
## 一、简要介绍
-  每个工具都有他试用的范围，需要根据我们的实际情况灵活应用；
-  而且每个问题都有很多方法，我们要多思考那些简单、可用、高效的方法。

<br>
## 二、具体内容
### 2.1 SQL优化 [^sql optimization]
[^sql optimization]: [CSDN][7]、[51CTO][8]、[GitHub][9]

- 要提高`SQL`语句的执行效率，手段之一就是尽量避免全表扫描，最常见的方法就是建立索引；
- 其他方式。

#### 2.1.1 优化索引 [^ SQL Index Optimization Reference]
[^ SQL Index Optimization Reference]: [CSDN][11]

- 避免在`where`子句中使用`is null`或`is not null`对字段进行判断；
- 避免在`where`子句中使用`!=`或`<>`操作符；
- 避免在`where`子句中使用`or`来链接条件；
 - **可以使用`union all `代替，前提是使用索引。**
 - 大多数`SQL`数据库的索引都是`B+Tree`之类的数据结构，这个结构是“有序”的，比如一个`integer字`段上的索引会按照这个字段的值进行排序，这种索引的优点在于可以支持`range query`，比如`where f>100`这样的条件可以充分有效的利用索引。但是这种结构也会带来一个问题——不同的两个字段的索引的顺序并不相同，比如`where f1>100 or f2<50`这样的条件，你只能顺序扫描`f1`和`f2`的索引，这时你无法同时用两个索引判断一条记录是否满足条件，所以为了做这样的过滤，**只能放弃其中一个索引，甚至做全表扫描；**
- 注意`like`中通配符的使用；
	- 而下面的语句执行效率要快的多，因为它使用了索引：

		``` sql
		select id from tabel where name like'UncleToo%'
		```
- 避免在`where`子句中对字段进行表达式操作；
- 避免在`where`子句中对字段进行函数操作。

#### 2.1.2 其他优化
- 连接查询要比`in`查询的效率要高；
- 少用`in`或`not in`，虽然对于`in`的条件会使用索引，不会全表扫描，但是在某些特定的情况，使用其他方法也许效果更好；
- **在子查询中，用exists代替in是一个好的选择；**
	- *`EG.`实例代码：*

		``` sql
		select name from a where id in ( select id from b ) 
		// 替代为
		select name from a where exists ( select 1 from b where id = a.id )
		```
	- *`EG.` `EXISTS`语法：*
	
		``` sql
		SELECT * FROM `user` u WHERE EXISTS ( SELECT 1 FROM designer d WHERE u.`name` = d.user_name );
	
		SELECT DISTINCT u.* FROM `user` u, designer d WHERE u.`name` = d.user_name;
		
		SELECT DISTINCT u.* FROM `user` u INNER JOIN designer d ON u.`name` = d.user_name;
		```
		- 具体原理，（猜测）应该是子查询（`SELECT 1 FROM designer d WHERE u.name = d.user_name`）获取了`user`表中符合条件的`primary key`。
- 使用`ORM`的时候，使用具体需要的字段代替`*`；
- 避免使用耗费资源的操作，带有`DISTINCT`，`UNION`，`MINUS`，`INTERSECT`，`ORDER BY`的`SQL`语句会启动`SQL`引擎 执行，耗费资源的排序（`SORT`）功能。`DISTINCT`需要一次排序操作, 而其他的至少需要执行两次排序；
- 使用临时表。

### 2.2 ORM优化

#### 2.2.1 Hibernate常见优化策略
- **`SUMMARY：`使用延迟加载、制定合理的缓存、设定合理的批处理参数以及优化抓取策略等方法，其余参考如下。**
- **使用延迟加载特性；**
	- 代理（`Proxy`）机制来实现延迟加载；
	- `load`延迟加载，`get`（不代理）不延迟加载。
- **制定合理的缓存策略（二级缓存、查询缓存）；**
- **优化抓取策略** [^ hibernate fetch strategy reference]
[^ hibernate fetch strategy reference]: [CSDN][1]

	- **`SUMMARY：`在同时需要使用两个关联实体数据的时候，直接通过`join`的形式获取所有数据，不用延迟加载。**
	- 在`HQL`语句中使用抓取连接查询，通过写一条`left join fetch`语句把相关联的两个实体的数据一次性从数据库中加载上来。这样可以在特定情况下（**同时需要使用到这两个实体的数据**）减少`SQL`的数量来提高查询效率。
		- 可以给单端关联的映射元素添加`fetch`属性：
			- `select`：作为默认值，它的策略是当需要使用到关联对象的数据时，另外单独发送一条`select`语句抓取当前对象的关联对象的数据。即延迟加载；
		    - `join`：它的策略是在同一条`select`语句使用连接来获得对象的数据和它关联对象的数据，此时关联对象的延迟加载失效。
- **设定合理的批处理参数（`batch_size`）** [^ hibernate batch reference];
[^ hibernate batch reference]: [CSDN][2]

	- 在没有设置批处理大小的前提下，如果批处理数据过大则会导致java.lang.OutOfMemory: Java heap space错误，有下面两种方式解决：
		- 通过代码`session.flush()`，`session.clear()`在处理一定批量的数据后手动刷新缓存；
		- 通过设置批处理大小解决：
		
			``` xml
			<property name="hibernate.jdbc.batch_size">50</property> //每50条语句提交一次 
			```
			
- 如果可以，选用`UUID`作为主键生成器；
- 进行合理的`O/R`映射设计；
- 如果可以，选用基于版本号的乐观锁替代悲观锁；
- 在开发过程中, 开启`hibernate.show_sql`选项查看生成的`SQL`，从而了解底层的状况；开发完成后关闭此选项；
- 考虑数据库本身的优化，合理的索引、恰当的数据分区策略等都会对持久层的性能带来可观的提升，但这些需要专业的`DBA`（数据库管理员）提供支持。

#### 2.2.2 MyBatis优化 [^ mybatis optimize reference]
[^ mybatis optimize reference]: [ITEye][5]

- **`SUMMARY：`延迟加载、缓存、批量操作、轻量化数据查询以及设置框架提供的其他优化设置，例如`enhancementEnabled="true"`启动`Java`字节码增强功能，提升`getter`和`setter`的调用效能，避免`Java`反射所带来的性能开销等。**
- **延迟加载**
- **缓存**
- **批量操作** [^ mybatis batch reference]
[^ mybatis batch reference]: [CSDN][3]

	``` xml
	// 批量插入
	<insert id="addTrainRecordBatch" parameterType="java.util.List">  
	
	    insert into t_train_record (add_time,emp_id,activity_id,flag)   
	    values  
	    <foreach collection="list" item="item" index="index" separator="," >  
	        (#{item.addTime},#{item.empId},#{item.activityId},#{item.flag})  
	    </foreach>  
	</insert> 
	```
- **轻量化数据查询**
	- 如果我们涉及到多表查询的时候我们首先会想到什么？自然是连接查询，分为内连接和外连接，这里不再细说几种连接查询。我们都知道连接查询要比`in`查询的效率要高，可是需要注意的是，如果我们是互联网企业，追求性能要高，采用分库分表，这样就要求我们要把一个连接查询拆成多条简单查询，此时用`in`就比较好了。
      
      ``` xml
		// 内连接
		select name,age,userRow from user as u inner join rol as r on u.userId=r.userId
		// in(多条语句)
		select name,age,userRow from user where userId in (select userRow,userId from rol) 
      ```

- 其他优化策略<br>![][4]

	``` xml
	<sqlMapConfig>
		<settings cacheModelsEnabled="true"
		lazyLoadingEnabled="true"
		enhancementEnabled="true"
		errorTracingEnabled="true"
		maxSessions="1024"
		maxTransactions="512"
		maxRequests="2048"
		useStatementNamespaces="true" />
	</sqlMapConfig>
	```

### 2.3 JVM优化 [^ JVM Optimize Reference]
[^ JVM Optimize Reference]: [博客园][14]

- **堆（`Heap`）和非堆（`Non-heap`）内存**
	- 按照官方的说法：**`Java`虚拟机具有一个堆，堆是运行时数据区域，所有类实例和数组的内存均从此处分配。堆是在 `Java`虚拟机启动时创建的。在`JVM`中堆之外的内存称为非堆内存（`Non-heap memory`）。**可以看出`JVM`主要管理两种类型的内存：堆和非堆。简单来说堆就是`Java`代码可及的内存，是留给开发人员使用的；非堆就是`JVM`留给自己用的，所以方法区、`JVM`内部处理或优化所需的内存（如`JIT`编译后的代码缓存）、每个类结构（如运行时常数池、字段和方法数据）以及方法和构造方法的代码都在非堆内存中。 
- **堆内存分配**
	- `JVM`初始分配的堆内存由`-Xms`指定，默认是物理内存的`1/64`；
	- `JVM`最大分配的堆内存由`-Xmx`指定，默认是物理内存的`1/4`。
	- 默认空余堆内存小于`40%`时，`JVM`就会增大堆直到`-Xmx`的最大限制；
	- 空余堆内存大于`70%`时，`JVM`会减少堆直到`-Xms`的最小限制。
	- 因此服务器一般设置`-Xms`、`-Xmx`相等以避免在每次`GC`后调整堆的大小。
	- 说明：如果`-Xmx`不指定或者指定偏小，应用可能会导致`java.lang.OutOfMemory`错误，此错误来自`JVM`，不是`Throwable`的，无法用`try...catch`捕捉。 
- **非堆内存分配**
	- `JVM`使用`-XX:PermSize`设置非堆内存初始值，默认是物理内存的`1/64`；
	- 由`XX:MaxPermSize`设置最大非堆内存的大小，默认是物理内存的`1/4`。
	- （还有一说：`MaxPermSize`缺省值和`-server -client`选项相关，`-server`选项下默认`MaxPermSize`为`64m`，`-client`选项下默认`MaxPermSize为32m`。这个我没有实验。）
	- `XX:MaxPermSize`设置过小会导致`java.lang.OutOfMemoryError: PermGen space`就是内存溢出。 
	- 说说为什么会内存溢出： 
		- 这一部分内存用于存放`Class`和`Meta`的信息，`Class`在被`Load`的时候被放入`PermGen space`区域，它和存放`Instance`的`Heap`区域不同。 
		- `GC`（`Garbage Collection`）不会在主程序运行期对`PermGen space`进行清理，所以如果你的`APP`会`LOAD`很多`CLASS`的话，就很可能出现`PermGen space`错误。
	   - 这种错误常见在`web`服务器对`JSP`进行`pre compile`的时候。

- -vmargs -Xms128M -Xmx512M -XX:PermSize=64M -XX:MaxPermSize=128M
	- `-vmargs`说明后面是`VM`的参数，所以后面的其实都是`JVM`的参数了。
- -Xms128m
	- `JVM`初始分配的堆内存。
- -Xmx512m
	- `JVM`最大允许分配的堆内存，按需分配。
- -XX:PermSize=64M
	- `JVM`初始分配的非堆内存。
- -XX:MaxPermSize=128M
	- `JVM`最大允许分配的非堆内存，按需分配。

- **具体优化方法**
	- 对整个堆进行整理，包括`Young`、`Tenured`和`Perm`。`Full GC`因为需要对整个堆进行回收，所以比`Scavenge GC`要慢，因此应该尽可能减少`Full GC`的次数。在对`JVM`调优的过程中，很大一部分工作就是对于`FullGC`的调节。有如下原因可能导致`Full GC`：
		 - 年老代（`Tenured`）被写满；
		 - 持久代（`Perm`）被写满；
		 - `System.gc()`被显示调用（当我们调用`System.gc()`的时候，其实并不会马上进行垃圾回收，甚至不一定会执行垃圾回收 [^ system.gc reference]）；
		 - 上一次`GC`之后`Heap`的各域分配策略动态变化。
	- 服务器一般设置`-Xms`、`-Xmx`相等以避免在每次`GC`后调整堆的大小。
			 
[^ system.gc reference]: [CSDN][12]

	> *注意* [^ various overflow or outofmemory reference]
	> - `StackOverFlowError`
	>  - 栈溢出，通常情况下是递归太深导致的。
	> - `java.lang.OutOfMemory`
	>  - 堆内存不够用。
	> - `java.lang.OutOfMemoryError:PermGen space`
	>  - 永久代内存不够用。
	> - `OutOfMemory`可以理解为申请内存的时候，内存不足，而`StackOverFlowError`可以理解为已经申请好具体的内存大小，只是在使用的时候溢出了，即超过了申请的内存空间大小。
	
 [^ various overflow or outofmemory reference]: [CSDN][15]、[GitHub][17]

### 2.4 代码优化 [^ java code optimization]
[^ java code optimization]: [博客园][18]

- 尽量使用`HashMap`、`ArrayList`、`StringBuilder`，除非线程安全需要，否则不推荐使用`Hashtable`、`Vector`、`StringBuffer`，后三者由于使用同步机制而导致了性能开销；
- 及时清除不再需要的会话；
- 不要创建一些不使用的对象，不要导入一些不使用的类；
- 字符串变量和字符串常量`equals`的时候将字符串常量写在前面，这样可以避免空指针异常；
- 使用最有效率的方式去遍历`Map`。

	``` java
	public static void main(String[] args)
	{
	    HashMap<String, String> hm = new HashMap<String, String>();
	    hm.put("111", "222");
	        
	    Set<Map.Entry<String, String>> entrySet = hm.entrySet();
	    Iterator<Map.Entry<String, String>> iter = entrySet.iterator();
	    while (iter.hasNext())
	    {
	        Map.Entry<String, String> entry = iter.next();
	        System.out.println(entry.getKey() + "\t" + entry.getValue());
	    }
	}
	```
- 结合`FindBugs`插件开发；
- 使用`CheckStyle`规范代码风格。

<br>
## 三、注意事项

[1]: http://blog.csdn.net/xueshuangshuang123/article/details/8462261
[2]: http://blog.csdn.net/xiazdong/article/details/7709068
[3]: http://blog.csdn.net/u010168160/article/details/51901445
[4]: http://i1.piimg.com/567571/94233b2c5c357af9.png
[5]: http://w800927.iteye.com/blog/1167844
[7]: http://blog.csdn.net/hguisu/article/details/5731629
[8]: http://database.51cto.com/art/200904/118526.htm
[9]: https://github.com/account4github/note/wiki/mysql%E4%BC%98%E5%8C%96
[10]: http://w3school.com.cn/sql/sql_create_index.asp
[11]: http://blog.csdn.net/csdnstudent/article/details/40398245
[12]: http://blog.csdn.net/yewei02538/article/details/52386642
[13]: http://www.importnew.com/15820.html
[14]: http://www.cnblogs.com/mingforyou/archive/2012/03/03/2378143.html
[15]: http://blog.csdn.net/u011983531/article/details/63250882
[16]: http://blog.csdn.net/yuezhiren/article/details/7948950
[17]: https://github.com/CountMCristo/framework-assembly-basis/tree/develop
[18]: http://www.cnblogs.com/xrq730/p/4865416.html
