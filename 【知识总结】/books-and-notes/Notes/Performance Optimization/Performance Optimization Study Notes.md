# Performance Optimization Study Notes [^ history version]

@(Notes)[Performance Optimization , notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
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
### 2.1 SQL优化

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

### 2.3 JVM优化

### 2.4 代码优化

<br>
## 三、注意事项

[1]: http://blog.csdn.net/xueshuangshuang123/article/details/8462261
[2]: http://blog.csdn.net/xiazdong/article/details/7709068
[3]: http://blog.csdn.net/u010168160/article/details/51901445
[4]: http://i1.piimg.com/567571/94233b2c5c357af9.png
[5]: http://w800927.iteye.com/blog/1167844


