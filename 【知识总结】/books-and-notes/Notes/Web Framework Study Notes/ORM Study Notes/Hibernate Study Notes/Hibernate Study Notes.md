# Hibernate [^ Hibernate Reference] tudy Notes [^ history version]

@(Notes)[Hibernate, notes]

> VICTORY LOVES PREPARATION

[^ history version]: 
> 版本信息：
> 2017年04月05日 下午04:39:15
> 2017年03月24日 上午10:49:56
> 2017年03月20日 下午08:23:42

[^ Hibernate Reference]: [Hibernate.org][1]、[百度百科][2]

[TOC]

***
## 〇、思维导图
- **`SUMMARY：`**

> *注意*
> - 

<br>
## 一、简介
- **`SUMMARY：` `Hibernate`是一个开源的对象关系映射框架。**
- `Hibernate`是一个开放源代码的对象关系映射框架，它对`JDBC`进行了非常轻量级的对象封装，使得`Java`程序员可以随心所欲的使用对象编程思维来操纵数据库；
- `Hibernate`可以应用在任何使用`JDBC`的场合，既可以在`Java`的客户端程序使用，也可以在`Servlet/JSP`的`Web`应用中使用；
- 最具革命意义的是，`Hibernate`可以在应用`EJB`的`J2EE`架构中取代`CMP`，完成数据持久化的重任。

<br>
## 二、实例 [^ Demo  Reference]
[^ Demo  Reference]: [Coding.net][10]

<br>
## 三、What and Why O/R Mapping
- **`SUMMARY：` 为了简化数据库操作、面向对象地编程。**
- `Object` `and` `Relational` `Mapping(ORM)`，对象（`Bean` `Entity`）关系（关系数据库）映射；
- `JDBC`操作数据库很繁琐，通过`ORM`建立关联简化操作；
- `SQL`编写不是面向对象的；
- `O/R` `Mapping`跨越数据库平台，方言的使用。

<br>
## 四、常见ORM框架
- `Hibernate`
- `Toplink`
- `JDO`
- `iBatis`
- `MyBatis`
- `xorm`

> *注意*
> - `JPA`：
>  - `Java` `Persistence` `API`
>  - 是一种持久化操作标准。

<br>
## 五、核心接口和类
### 5.1 Session
### 5.2 SessionFactory
### 5.3 Transaction
### 5.4 Query
### 5.5 Criteria
### 5.6 Configuration

<br>
## 六、实体对象的三种状态 [^ Hibernate Three Status Reference]
[^ Hibernate Three Status Reference]: [CSDN][3]、[CSDN][11]

- **`SUMMARY：` 瞬时状态、持久状态和脱管状态。**
- *`img.`实体对象的三种状态：*<br>![][6]
- *`img.`实体对象之间的区别：*<br>![][7]
<br>
- 缓存是内存和数据库和数据库之间的一个映射集合，缓存会自动和数据库进行数据的同步。

### 6.1 瞬时状态（Transient）
- **`SUMMARY：`在`session`缓存中和数据库中都没有的对象，*`eg.`*刚刚被创建出来的状态。**
- 刚刚被创建出来的状态。

### 6.2 持久状态（Persistent）
- **`SUMMARY：`在`session`缓存中和数据库中都有的对象。**
- 被`Session`管理时的状态，能够和数据库同步（同步，就是实体内容修改了，虽然不会调用`save`、`update`等方法，但是事务`commit`的时候会导致数据库中数据的变化）。

	> *注意*
	> - 因为在`session`缓存中有记录，所以此时状态的改变在清空缓存的时候都会同步到数据库。

### 6.3 托管状态（Detached）
- **`SUMMARY：`在数据库中有记录，但是在`session`缓存中没有的对象。**
- 过去被`Session`管理，但是现在`Session`已关闭，虽然存在与数据库对应的记录，但是不能同步。

	> *注意*
	> - 托管对象本质上和瞬时对象相同，只是比瞬时对象多了一个数据库记录。

### 6.4 转化过程
- *`img.`转化图如下：*<br><br>![][4]
- `transient`状态：
	- 当我们`new`一个对象的时候，就是`transient`状态，最显著的特点是在数据库中没有与之对应的记录。也没有纳入到`Session`的管理，随时可以被垃圾回收处理掉。
- `persistent`状态：
	- 当我们对`transient`对象进行`save()`，`saveOrUpdate()`之后对象进入`persistent`状态，在数据库中有与之对应的记录。纳入了`session`的管理，`session`和一级缓存绑定着，`session`级的缓存通常也叫一级缓存。当`save()`的时候会放到缓存里一份，可以理解为`session`里有个`map`，对象放到了`map`里面，有对象引用他了，垃圾回收机制是回收不了它的。调用`delete()`，进入
- `detached`状态：
	- 当`persistent`对象经过`evict()`，`close()`，`clear()`方法处理，进入游离态也就是`detached`状态。`detached`对象之是将缓存里的记录清理了，数据库里的记录并没清理，没有纳入`session`管理，随时可以被垃圾回收掉。没有对象引用他～。因为在数据库里有引用记录没清理，所以可以调用`update()`，`saveOrUpdate()`，`lock()`等方法，调方法之后又回到`persistent`状态。

<br>
## 七、ID生成策略 [^ ID Generate Strategy Reference]
[^ ID Generate Strategy Reference]: [博客园][12]

- **`SUMMARY：`包含`Increment`、`Identity`、`Sequence`、`UUID`、`Native`等策略。**

### 7.1 Increment
- **`SUMMARY：`从数据库中取出最大的数值，然后加`1`，存入到数据库中。**
- `int`类型，插入一条记录自增一，集群的情况不能使用；
- 由`Hibernate`从数据库中取出主键的最大值（每个`session`只取`1`次），以该值为基础，每次增量为`1`，在内存中生成主键，不依赖于底层的数据库，因此可以跨数据库。

### 7.2 Identity
- **`SUMMARY：`利用数据库的功能，插入数据的时候数据库自动加`1`。**
- `int`类型，数据库（部分）自动递增字段。

### 7.3 Sequence
- **`SUMMARY：`需要支持`sequence`机制的数据库，数据库生成`ID`。**
- `int`类型，数据库（部分）产生`ID`值，`oracle`常用。

### 7.4 UUID
- **`SUMMARY：`生成`UUID`存入数据库。**
- `String`类型，`universal` `unique` `identification`，全宇宙唯一的身份标识。

	> *注意*
	> - 标准的`UUID`是`36`位，`eg.` `4bf20ae0-7557-44af-937a-1fcfa358c860`，但是`Hibernate`将中间的`-`去掉了，所以`Hibernate`的`UUID`是`32`位。

### 7.5 Native
- **`SUMMARY：` `int`类型，数据库自动选择`identity`、`sequence`或者`hilo`算法生成`ID`。**
- `int`类型，数据库自动选择`identity`、`sequence`或者`hilo`算法生成`ID`。

<br>
## 八、关系映射 [^ Relational Mapping Reference]
[^ Relational Mapping Reference]: [CSDN][15]

### 8.1 单向
- **`SUMMARY：`单向关联是在`A`类中可以访问到`B`类数据，在`B`类中访问不到`A`类的数据。**
#### 8.1.1 一对一
#### 8.1.2 一对多
#### 8.1.3 多对一
#### 8.1.4 多对多
### 8.2 双向
- **`SUMMARY：`如果`A`和`B`双向关联，则`A`类中可以访问`B`类数据，反之亦可。**
#### 8.2.1 一对一
#### 8.2.2 一对多、多对一
#### 8.2.3 多对多

> *注意*
> - `inverse`属性可以用在一对多和多对多双向关联上，`inverse`属性默认为`false`，为`false`表示本端可以维护关系，如果`inverse`为`true`，则本端不能维护关系，会交给另一端维护关系，本端失效。所以一对多关联映射我们通常在多的一端维护关系，让一的一端失效。**所以在修改一的一端，就不会涉及到多的一端的数据更新**。*`eg.`代码实例：*
>
>	``` xml
>	<set name="students"inverse="true">  
>	       <key column="classesid"/>  
>	      <one-to-many class="com.hibernate.Student"/>  
>	</set>  
>	```

<br>
## 九、Hibernate查询
- **`SUMMARY：`包含`NativeSQL`、`HQL`、`QBC`、`QBE`等查询语句。**
- 按顺序排序，越靠前范围越大。

### 9.1 NativeSQL
- **`SUMMARY：`使用`SQL`语句进行查询。**
- 本地查询语句，不好跨平台服务，不常用但是很重要，因为是最基本的。
- *`eg.`代码实例：*

	``` java
	/**
	    * NaviteSQL
	    * 
	    * <h4>注意：</h4>
	    * <ul>
	    * <li>创建的是SQLQuery，而不是Query；</li>
	    * <li>查询对象不再是Bean Entity，而是对应的表明；</li>
	    * <li>addEntity(Entity.class)指定返回的具体Bean Entity.</li>
	    * </ul>
	    * @author Thomas Lee
	    * @version 2017年3月22日 上午10:33:20
	    */
	   public void testNativeSQL() {
	       Session session = sessionFactory.getCurrentSession();
	       String sql = "select * from designer";
	       SQLQuery query = session.createSQLQuery(sql);
	       query.addEntity(Designer.class);
	       @SuppressWarnings("unchecked")
	       Iterator<Designer> iDesigner = query.iterate();
	       while (iDesigner.hasNext()) {
	           Designer designer = iDesigner.next();
	           LOG.info(designer.toString());
	       }
	   }
	```

### 9.2 HQL
- **`SUMMARY：`使用`Hibernate`查询语句进行查询，设置`Dialect`之后可以适用不同的数据库。**
- `Hibernate`的查询语言，设置`Dialect`之后可以适用不同的数据库，面向对象的数据库查询方法。
- *`eg.`代码实例：*
	
	``` java
	/**
	    * HQL
	    * @author Thomas Lee
	    * @version 2017年3月22日 上午11:35:02
	    */
	   public void testHQL() {
	       String hql = "from Designer";
	       Session session = sessionFactory.getCurrentSession();
	       Query query = session.createQuery(hql);
	       @SuppressWarnings("unchecked")
	       Iterator<Designer> iDesigner = query.iterate();
	       while (iDesigner.hasNext()) {
	           Designer designer = iDesigner.next();
	           LOG.info(designer.toString());
	       }
	   }
	```

### 9.3 QBC
- **`SUMMARY：`使用`Hibernate`的`Criterion`进行查询。**
- `Query` `By` `Criterion`。
- *`eg.`代码实例：*

	``` java
	/**
	    * QBC，Query By Criterion
	    * @author Thomas Lee
	    * @version 2017年3月22日 上午11:35:40
	    */
	   public void testQBC() {
	       Session session = sessionFactory.getCurrentSession();
	       Criteria criteria = session.createCriteria(Designer.class).add(Restrictions.gt("id", 2));
	       @SuppressWarnings("unchecked")
	       List<Designer> designers = criteria.list();
	       Iterator<Designer> iDesigner = designers.iterator();
	       while (iDesigner.hasNext()) {
	           Designer designer = iDesigner.next();
	           LOG.info(designer.toString());
	       }
	   }
	```

### 9.4 QBE
- **`SUMMARY：`使用`Hibernate`的`Criterion`中的`Example`进行查询。**
- `Query` `By` `Example`，`QBC`的一部分。
- *`eg.`代码实例：*

	``` java
	/**
	    * QBE，Query By Example
	    * @author Thomas Lee
	    * @version 2017年3月22日 上午11:36:18
	    */
	   public void testQBE() {
	       Session session = sessionFactory.getCurrentSession();
	
	       Designer designer = new Designer();
	       designer.setAge(10);
	       Example example = Example.create(designer);
	
	       Criteria criteria = session.createCriteria(Designer.class).add(Restrictions.gt("id", 2)).add(Restrictions.lt("id", 5)).add(example);
	       @SuppressWarnings("unchecked")
	       List<Designer> designers = criteria.list();
	       Iterator<Designer> iDesigner = designers.iterator();
	       while (iDesigner.hasNext()) {
	           LOG.info(iDesigner.next().toString());
	       }
	
	   }
	```

> *注意*
> - 部分注意事项请见代码注释；
> - 使用`HQL`的时候要使用导航关系（强烈建议），`eg.` `Group.user.name`。

<br>
## 十、Hibernate缓存
- **`SUMMARY：` `Hibernate`缓存，加快其查询速度。**
- 为了把本来应该存在硬盘上的信息存在内存中所开辟的一块内存空间；
- `Hibernate`是一个持久层框架，经常访问物理数据库；
- 为了降低应用程序对物理数据源访问的频次，从而提高应用程序的运行性能；
- 缓存内的数据是对物理数据源中的数据的复制，应用程序在运行时从缓存读写数据，在特定的时刻或事件会同步缓存和物理数据源的数据。

### 10.1 一级缓存
- **`SUMMARY：` `Session`级别的缓存。**
- 就是`session`级别的缓存；
- 一级缓存默认提供，不需要在配置文件中进行启用。

### 10.2 二级缓存
- **`SUMMARY：` `SessionFactory`级别的缓存。**
- `sessionFactory`级别的缓存，跨越`session`存在，就是所有`session`级别的缓存的集合，为了使`session`级别缓存之间能够共享缓存；
- 二级缓存需要在`hibernate.cfg.xml`中进行配置（启用以及启用哪个缓存，查询文档）；
- **什么样的数据适合存放到第二级缓存中？**
	- 很少被修改的数据；
	- 不是很重要的数据，允许出现偶尔并发的数据；
	- 不会被并发访问的数据；
	- 常量数据。
- **不适合存放到第二级缓存的数据？**
	- 经常被修改的数据；
	- 绝对不允许出现并发访问的数据，如财务数据，绝对不允许出现并发；
	- 与其他应用共享的数据。
- 二级缓存要使用`@Cache`注解对`Bean` `Entity`进行标注；
- `load`和`iterate`默认使用二级缓存（包含添加和查询等操作）；
- `list`默认使用二级缓存进行添加数据，查询的时候不使用；
- `query`使用不了二级缓存
	- 因为每次的查询条件很可能不同，缓存结果没有太大的用处，需要打开查询缓存（三级缓存）。

### 10.4 查询缓存（三级缓存）
- **`SUMMARY：` 查询缓存主要缓存普通属性结果集和实体对象的`ID`。**
	- **查询普通属性的时候，会先到查询缓存中取，如果没有，则查询数据库；**
	- **查询实体的时候，会先到查询缓存中取`ID`，如果有，则根据`ID`到缓存（一级 / 二级）中取实体，如果缓存中取不到实体，再查询数据库。**
- `Hibernate`的查询缓存是主要是针对**普通属性结果集的缓存， 而对于实体对象的结果集只缓存`id`**。
- 在一级缓存，二级缓存和查询缓存都打开的情况下作查询操作时这样的：
	- **查询普通属性**，会先到查询缓存中取，如果没有，则查询数据库；
	- **查询实体**，会先到查询缓存中取`id`，如果有，则根据`id`到缓存（一级/二级）中取实体，如果缓存中取不到实体，再查询数据库。
- 主要的介质是硬盘；
- 查询缓存只有在两个查询语句一样的情况下使用；
- 需要在`hibernate.cfg.xml`中进行配置，其依赖于二级缓存；
- 调用`Query`的`setCacheable(true)`方法指明使用查询缓存。

### 10.5 缓存算法 [^ Cache Algorithm Reference]
[^ Cache Algorithm Reference]: [Cache Study Notes][13]

- 缓存中数据饱和了之后哪个对象需要被丢弃的算法、

#### 10.5.1 LRU
- `Least` `Recently` `Used`
- 最近很少使用的被丢弃（时间&频率方面）

#### 10.5.2 LFU
- `Least` `Frequently` `Used`（频率高低）
- 最少被使用（频率方面）

#### 10.5.3 FIFO
- `First` `In` `First` `Out`
- 早来的先丢弃（顺序方面）

> *注意*
> - 具体参考`Cache` `Study` `Notes`。

<br>
## 十一、性能优化
### 11.1 1+N问题（典型的面试题）
- **问题描述**
	- `Hibernate`中用户要取出两个关联的对象的表格数据的时候，如本例中的`Topic`和`Category`，此时用户本想只取出`Topic`的信息，但是因为`Topic`和`Category`是`ManyToOne`的关系，所以导致了在取`Topic`的同时去取了大量的`Category`信息，造成了无用的查询。
- **解决方案**
	- `ManyToOne`设置迟加载
		- **`SUMMARY：` `fetch=FetchType.LAZY`。**
		- *`eg.`代码实例：*
	``` 
	@ManyToOne(cascade = CascadeType.ALL, fetch=FetchType.LAZY)
	```
		-  `ManyToOne`、`OneToMany`和`ManyToMany`中对关联对象的延迟调用读出持久化对象时，并不把关联的对象实际读出，而是延迟到访问持久化对象的关联对象属性时，才向数据库发成读操作。
	- 在`Entity`上添加`@BatchSize(size = int)`注解进行批量操作，自己规定批量处理的处理单元大小
		- **`SUMMARY：` 批量删除、更新和批量插入数据。**
		- `Batch` `Size`是设定对数据库进行批量删除，批量更新和批量插入的时候的批次大小，有点相当于设置`Buffer`缓冲区大小的意思。
		- `Batch` `Size`越大，批量操作的向数据库发送`sql`的次数越少，速度就越快。
		- *`eg.`实例：*
			- 是当`Batch Size=0`的时候，使用`Hibernate`对`Oracle`数据库删除`1`万条记录需要`25`秒，`Batch Size = 50`的时候，删除仅仅需要`5`秒！
	- 使用`join` `fetch`
		- **`SUMMARY：` 在关联对象抓取时，主体对象和关联对象用一句外键关联的`sql`同时查询出来，不会形成多次查询，其提供一个主动抓取的机会，这样就不会在非延迟加载查询`parent`对象的时候，发出了`N`条`child`对象的查询语句。**
		- 使用`session.createCriteria(Entity.class)`，因为`createCriteria()`默认使用表连接进行数据的查询操作
		- 使用`session.createQuery(“from Topic t left join fetch t.category c”)`，自己写`join` `fetch`的`sql`语句

- http://blog.knowsky.com/186347.htm

<br>
## 十二、常用方法
- **`SUMMARY：`可以直接查看源码对应的`JavaDoc`。**
### 12.1 getCurrentSession() 和 openSession()
- `getCurrentSession()`
	- 取当前上下文中的`session`，如果没有创建一个新的；
- `openSession()`
	- 无论上下文中有没有新的`session`都会创建一个新的`session`。

### 12.2 get() 和 load()
- `load()`
	- 返回的是代理对象，等到真正用到对象的内容才发出sql语句，**延迟加载**。
	- Return the persistent instance of the given entity class with the given identifier, assuming that the instance exists. This method might return a proxied instance that is initialized on-demand, when a non-identifier method is accessed. 
	- You should not use this method to determine if an instance exists (use get() instead). Use this only to retrieve an instance that you assume exists, where non-existence would be an actual error.
- `get()`
	- get直接从数据库加载，**不会延迟加载**。
	- Return the persistent instance of the given entity class with the given identifier, or null if there is no such persistent instance. (If the instance is already associated with the session, return that instance. This method never returns an uninitialized instance.)

### 12.3 list() 和 iterate() [^ list() and iterate() Reference]
[^ list() and iterate() Reference]: [CSDN][14]

- `list()`
	- Return the query results as a List. If the query contains multiple results pre row, the results are returned in an instance of Object[].
- `iterate()`
	- Return the query results as an Iterator. If the query contains multiple results pre row, the results are returned in an instance of Object[].
	-  Entities returned as results are initialized on demand. **The first SQL query returns identifiers only**.

<br>
## 十三、常用注释
### 13.1 @GeneratedValue
- 默认相当于`native`策略，其他（`table`、联合主键等）可以参照`API`和马士兵的`Hibernate`视频

<br>
## 十四、hibernate.cfg.xml中的hbm2ddl.auto属性 [^ hbm2ddl.auto Reference]
[^ hbm2ddl.auto Reference]: [博客园][5]

### 14.1 validate
- **`SUMMARY：`加载`hibernate`时，验证创建数据库表结构。**
- 每次加载`hibernate`时，验证创建数据库表结构，只会和数据库中的表进行比较，不会创建新表，但是会插入新值。

### 14.2 update
- **`SUMMARY：`第一次加载`hibernate`时根据`model`类会自动建立起表的结构（前提是先建立好数据库），以后加载`hibernate`时根据`model`类自动更新表结构，即使表结构改变了但表中的行仍然存在不会删除以前的行。**
- 最常用的属性，第一次加载`hibernate`时根据`model`类会自动建立起表的结构（前提是先建立好数据库），以后加载`hibernate`时根据`model`类自动更新表结构，即使表结构改变了但表中的行仍然存在不会删除以前的行；
- **要注意的是当部署到服务器后，表结构是不会被马上建立起来的，是要等应用第一次运行起来后才会**。

### 14.3 create
- **`SUMMARY：`每次加载`hibernate`时都会删除上一次的生成的表，然后根据你的`model`类再重新来生成新表。**
- 每次加载`hibernate`时都会删除上一次的生成的表，然后根据你的`model`类再重新来生成新表，哪怕两次没有任何改变也要这样执行，这就是导致数据库表数据丢失的一个重要原因。

### 14.4 create-drop
- **`SUMMARY：`加载`hibernate`时根据`model`类生成表，但是`sessionFactory`关闭的时候，表就自动删除。**
- 每次加载`hibernate`时根据`model`类生成表，但是`sessionFactory`关闭的时候，表就自动删除。

<br>
## 十五、其他
- 若数据库字段和`Entity`中的属性相同，相当于在`get`方法上加上`@Basic`注解，不同的时候要在`get`方法上面写`@Column(name = “数据库字段名称”)`进行指定。
- 不想`Bean` `Entity`的属性映射到数据库的字段的时候可以加上`@Transient`注释。
- `Bean` `Entity`中`java.util.Date`类型的数据默认保存到数据库的为日期+时分秒，可以使用`@Temporary`注释进行保存到数据库中字段的日期格式设置。
- `Annotation`映射位置
	- 应该放在`get`方法上，如果放在`field`中会破坏`field`的私有化（通过`Java`反射机制）。
- `Hiernate`事务隔离级别
	- 设置`hibernate.cfg.xml`中的属性`hibernate.connection.isolation` `=` `2` （`read-committed`，默认事务隔离级别）。
	- 如果不进行事务隔离级别的设置，则是依赖于使用的数据库引擎的默认设置。

<br>
## 十六、优缺点
- **`SUMMARY：`完整的对象/关系映射解决方案，采用了更自然的面向对象的视角来持久化`Java`应用中的数据，不依赖于数据库。**
- `Hibernate`与具体数据库的关联只需在`XML`文件中配置即可，所有的`HQL`语句与具体使用的数据库无关，移植性很好；
- `Hibernate`是完整的对象/关系映射解决方案，它提供了对象状态管理（`state management`）的功能，使开发者不再需要理会底层数据库系统的细节。也就是说，相对于常见的`JDBC/SQL`持久层方案中需要管理`SQL`语句，`Hibernate`采用了更自然的面向对象的视角来持久化`Java`应用中的数据。

<br>
## 十七、调优
- **`SUMMARY：`合理的缓存策略、延迟加载、合理的`O/R`映射设计和使用批处理等。**
- 制定合理的缓存策略；
- 尽量使用延迟加载特性；
- 采用合理的`Session`管理机制；
- 使用批量抓取，设定合理的批处理参数（`batch_size`）;
- 进行合理的`O/R`映射设计。

[1]: http://hibernate.org/orm/
[2]: http://baike.baidu.com/link?url=er2grHpQchpD-KlvqyMWo-r8kT97qtEj_qltajwuKdhR2uDpq9UleMvwnl-pAYxEeoqlQJ89XZOEKlb92TsILiflkbkAM2R_Frw3u8p0NYi
[3]: http://blog.csdn.net/xiazdong/article/details/7574732
[4]: http://i1.piimg.com/519918/29a5f9f5fdfcedcd.png
[5]: http://www.cnblogs.com/feilong3540717/archive/2011/12/19/2293038.html
[6]: http://i4.buimg.com/567571/b45fe19ca4c98c15.png
[7]: http://i1.piimg.com/567571/d6937f3fd758c5d2.png
[8]: http://blog.csdn.net/fg2006/article/details/6436517
[9]: http://blog.csdn.net/fg2006/article/details/6436517
[10]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git
[11]: http://blog.csdn.net/fg2006/article/details/6436517
[12]: http://www.cnblogs.com/hoobey/p/5508992.html
[13]: https://coding.net/u/Recognizer/p/baidu-cloud-career/git/tree/develop/%E3%80%90%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91/%E3%80%90%E7%9F%A5%E8%AF%86%E6%80%BB%E7%BB%93%E3%80%91/books-and-notes/Notes/Cache%20Study%20Notes
[14]: http://blog.csdn.net/u013125680/article/details/40862693
[15]: http://blog.csdn.net/huangaigang6688/article/details/7761310