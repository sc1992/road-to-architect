# MyBatis [^ MyBatis Reference] Study Notes [^ history version]

@(J2EE)[MyBatis, Notes]

[^ MyBatis Reference]: [GitHub][1]、[百度百科][2]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 2017年04月05日 下午02:25:38
> 2017年03月17日 上午10:38:53
> 2017年03月16日 下午06:39:12
> 2017年03月16日 上午09:15:29
> 2017年03月08日 下午02:24:07
> 2017年03月06日 上午11:11:22

[TOC]

***
## 〇、思维导图

<br>
## 一、架构图	

<br>
## 二、基础知识

- **`SUMMARY：` `MyBatis`是支持定制化`SQL`、存储过程以及高级映射的优秀的持久层框架。**
- `MyBatis`是支持定制化`SQL`、存储过程以及高级映射的优秀的持久层框架。`MyBatis`避免了几乎所有的`JDBC`代码和手动设置参数以及获取结果集。`MyBatis`可以对配置和原生`Map`使用简单的 `XML`或注解，将接口和`Java`的`POJOs`（`Plain Old Java Objects`，普通的`Java`对象）映射成数据库中的记录。
- `MyBatis`是一个持久层框架，`Apache`的顶级项目（托管到`GitHub`）：
	- 让程序员把主要的精力放在`SQL`逻辑上，通过`MyBatis`提供的映射方式，自由灵活地生成（半自动化，大部分需要程序员写`SQL`）满足需求的`SQL`；
		- `MyBatis`可以将向`PreparedStatement`中输入的参数自动进行输入映射（**输入映射**），将查询结果灵活映射成`Java`对象（**输出映射**）。

### 2.1 对原生态JDBC程序问题总结
#### 2.1.1 PreparedStatement
- **`SUMMARY：`数据库预编译语句，把编译的结果存放在数据库中的缓存中，下次如果`statement`相同的话就可以利用缓。**
- 是数据库预编译的`statement`（数据库语句）；
- 把编译的结果存放在数据库中的缓存中，下次如果`statement`相同的话就可以利用缓存。

#### 2.1.2 问题
- **`SUMMARY：`数据库连接浪费、硬编码、预编译，修改配置文件不用 。**
- **数据库连接，使用的时候就创建，不使用就立即释放**，
	- 缺点
		- 对数据库造成频繁的打开和关闭，浪费数据库资源，降低性能。
	- 解决方案
		- 可以使用**数据库连接池**解决该问题。
- **将`SQL`语句硬编码到`Java`代码中，不利于系统的维护**，
	- 缺点
		- 如果`SQL`语句修改，重新编译`Java`代码。
	- 解决方案
		- **将`SQL`写在配置文件中，即使`SQL`变化也不用再重新编译`Java`代码，只是需要的时候进行加载配置文件**。
- **向`PreparedStatement`中设置参数，对占位符位置和设置的参数，硬编码到了`Java`代码中**，
	- 缺点
		- 不利于系统维护。
	- 解决方案
		- 把占位符的位置信息和参数写在配置文件中。
- **从`ResultSet`中遍历结果集数据时，存在硬编码**，
	- 解决方案
		- 将查询的结果集自动映射到`Java`对象。
	
> *注意*
> - 可以使用数据库连接池解决频繁打开和关闭数据库造成的资源浪费；
> - 写在配置文件中的`SQL`，即使`SQL`变化也不用再重新编译`Java`代码，只是需要的时候进行加载配置文件。

### 2.2 框架原理（重点）
- **`SUMMARY：` 通过`MyBatis`提供的映射方式，自由灵活地生成（半自动化，大部分需要程序员写`SQL`）满足需求的`SQL`，让程序员把主要的精力放在`SQL`逻辑上。**
- `MyBatis`是一个持久层框架，托管到`GitHub`的`Apache`的顶级项目，
	- `MyBatis`可以将向`PreparedStatement`中输入的参数自动进行输入映射，将查询结果灵活映射成`Java`对象（输出映射）；
	- 通过`MyBatis`提供的映射方式，自由灵活地生成（**半自动化，大部分需要程序员写`SQL`**）满足需求的`SQL`，让程序员把主要的精力放在`SQL`逻辑上。
- *`img.` `Mybatis`原理图：*<br>![][3]

### 2.3 入门程序 [^ MyBatis Demo Reference]
[^ MyBatis Demo Reference]: [Coding][6]

- 参考 [framework-assembly-basis][6]。

### 2.4 开发Dao的两种方法
#### 2.4.1 原始Dao开发方法（重点）
- **`SUMMARY：`通过`SqlSessionFactory`生成`SqlSession` 。**
- 思路
	- 通过`SqlSessionFactory`生成`SqlSession`；
	- `sqlSession.commit()`。
- 存在的问题
	- `DAO`接口的实现类中的方法中存在大量的模板方法（重复的方法，如`sqlSession.commit()`），增加了工作量；
	- 存在硬编码，*`eg.`*调用`SqlSession`方法的时候进行了`Statement`的`id`硬编码；
	- 由于`SqlSession`方法使用了泛型，调用`SqlSession`方法传入变量的时候即使变量类型传入错误，在编译阶段也不会报错，不利于程序员开发。

#### 2.4.2 MyBatis的Mapper接口（重点）
- **`SUMMARY：`生成`Mapper`接口的代理对象。**
- 思路
	- 需要写`Mapper`接口；
	- 需要写`mapper.xml`映射文件；
	- `MyBatis`自动生成`Mapper`接口实现类的代理对象（前提是符合其开发规范）；
	- 规范（4个规则，其实就是利用反射机制，实现具体的功能）：
		- 在`mapper.xml`中的`namespace`要等于`mapper`接口（`mapper.java`）的地址（包+类）；
		- `mapper.java`接口中的方法名和`mapper.xml`中的`statement`的`id`一致；
		- `mapper.java`接口中方法的输入参数类型和`statement`中的`parameterType`指定的类型一致；
		- `mapper.java`接口中返回值的类型和`statement`中的`resultType`的类型一致。
- 注意
	- 代理对象内部调用`selectOne`和`selectList`的机制：
		- 如果`mapper`方法返回的单个`POJO`对象，则代理对象内部会通过`selectOne`查询数据库；
		- 如果`mapper`方法返回的多个`POJO`对象，则代理对象内部会通过`selectList`查询数据库。
	
### 2.5 全局配置
- **`SUMMARY：`配置`MyBatis` `ORM`操作相关参数。**
[^ Global Configuration Reference]: [mybatis.org.][7]

#### 2.5.1 properties（属性）
- 将一些特定属性的配置放在单独的`properties`文件中，只需要在`MyBatis`全局配置文件（以下值`SqlMapConfig.xml`文件）中加载即可，不需要杂糅在`SqlMapConfig.xml`文件中，造成相关属性在`SqlMapConfig.xml`文件中的硬编码。
#### 2.5.2 settings（全局配置参数）[^ Global Configuration Reference]
- `MyBatis`框架运行的时候可以调整的一些运行参数，比如开启二级缓存，开启延迟加载。
- *`eg.`代码实例：*
	``` xml
	<?xml version="1.0" encoding="UTF-8" ?>
	<!-- Copyright 2009-2012 The MyBatis Team Licensed under the Apache License, 
		Version 2.0 (the "License"); you may not use this file except in compliance 
		with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
		Unless required by applicable law or agreed to in writing, software distributed 
		under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES 
		OR CONDITIONS OF ANY KIND, either express or implied. See the License for 
		the specific language governing permissions and limitations under the License. -->
	<!DOCTYPE configuration
		PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
		"http://mybatis.org/dtd/mybatis-3-config.dtd">
	
	<configuration>
		
		<settings>
			<!-- 全局的映射器启用或禁用缓存. -->
			<setting name="cacheEnabled" value="true" />
			<!-- 全局启用或禁用延迟加载. 当禁用时, 所有关联对象都会即时加载. -->
			<setting name="lazyLoadingEnabled" value="true" />
			<!-- 允许或不允许多种结果集从一个单独的语句中返回（需要适合的驱动）. -->
			<setting name="multipleResultSetsEnabled" value="true" />
			<!-- 使用列标签代替列名。不同的驱动在这方便表现不同。参考驱动文档或充分测试两种方法来决定所使用的驱动. -->
			<setting name="useColumnLabel" value="true" />
			<!-- 允许JDBC支持生成的键。需要适合的驱动。如果设置为true则这个设置强制生成的键被使用，尽管一些驱动拒绝兼容但仍然有效（比如 Derby）. -->
			<setting name="useGeneratedKeys" value="false" />
			<!-- 配置默认的执行器。SIMPLE执行器没有什么特别之处。REUSE执行器重用预处理语句。BATCH执行器重用语句和批量更新. -->
			<setting name="defaultExecutorType" value="REUSE" />
			<!-- 设置超时时间，它决定驱动等待一个数据库响应的时间. -->
			<setting name="defaultStatementTimeout" value="100" />
			<setting name="safeRowBoundsEnabled" value="false" />
			<setting name="mapUnderscoreToCamelCase" value="false" />
			<setting name="localCacheScope" value="SESSION" />
			<setting name="jdbcTypeForNull" value="OTHER" />
			<setting name="lazyLoadTriggerMethods" value="equals,clone,hashCode,toString" />
		</settings>
		
		<!-- MyBatis Plugins Configuration.
			<plugins>
				<plugin interceptor="com.github.pagehelper.PageHelper">
					<property name="offsetAsPageNum" value="true" />
					<property name="rowBoundsWithCount" value="true" />
					<property name="pageSizeZero" value="true" />
					<property name="reasonable" value="true" />
					<property name="params" value="pageNum=start;pageSize=limit;" />
					<property name="supportMethodsArguments" value="true" />
					<property name="returnPageInfo" value="check" />
				</plugin>
			</plugins>
			-->
	</configuration>
	```

#### 2.5.3 typeAliases（类型别名）
- 针对`parameterType`和`resultType`指定的类型定义一些别名，方便开发，因为一些名称过长；
- 例如：`int`默认是`java.lang.Integer`的别名。

#### 2.5.4 typeHandles（类型处理器）
- `MyBatis`中通过`typeHandler`完成`JDBC`和`Java`类型的转换；
- 通常情况下，`MyBatis`所提供的类型处理器已经满足了平时的编程使用，不需要程序员进行自定义。

#### 2.5.5 objectFactory（对象工厂）
#### 2.5.6 plugins（插件）
#### 2.5.7 environments（环境）
#### 2.5.8 mappers（映射器）
- ![][8]
#### 2.5.9 属性加载顺序
- 先加载`<properties>`标签体内的属性；
- 然后读取`<properties>`标签中`resource`或者`URL`加载的属性，会覆盖已经读取的同名属性；
- 最后读取`parameterType`传递的属性，会覆盖已经读取的同名属性。

### 2.6 框架核心（重点）
#### 2.6.1 输入映射
- **`SUMMARY：`通过`parameterType`制定输入参数的类型，类型可以是简单类型、`HashMap`、`POJO`。**
##### 2.6.1.1 parameterType
- 通过`parameterType`制定输入参数的类型，类型可以是简单类型、`HashMap`、`POJO`类型，
	- 传递`POJO`的包装对象
		- 需求
			- 完成用户信息的综合查询，需要传入复杂的查询条件，*`eg.`例如：*用户信息、商品信息等。
		- 解决方案
			- 建议使用自定义包装类型的`POJO`，把复杂的查询条件包装进去，有利于系统的维护（系统架构师必知）。

#### 2.6.2 输出映射
- **`SUMMARY：`通过`resultType`和`resultMap`。**
##### 2.6.2.1 resultType
- **`SUMMARY：`输出`POJO`对象、`POJO`列表、简单数据类型。**
- 输出`POJO`对象、`POJO`列表、简单数据类型；
- 使用`resultType`进行输出映射的时候，只有查询出来的列名和`POJO`中的属性名称一致，该列才可以映射成功；
- 如果查询出来的列名和`POJO`中的属性名称全部不一样，则不会查询出`POJO`对象；
- 只要查询出来的列名和`POJO`中的属性有一个一致，就会创建`POJO`对象，对象中一致的属性才能取到值，其他的都为默认值。
- 注意
	- 不管输出的是`POJO`单个对象还是`POJO`的对象列表，在`mapper.xml`中`resultType`指定的类型都是`POJO`，但是`mapper.java`中的返回类型就分别是`POJO`和`List<POJO>`，生成的动态代理对象是根据`mapper`方法的返回值的类型来确定具体调用`selectOne`（返回单个对象）还是`selectList`（返回集合对象）方法。

##### 2.6.2.2 resultMap
- **`SUMMARY：`完成相对于`resultType`更为高级且复杂的输出结果映射。**
- 完成高级以及复杂的输出结果映射；
- 使用方法：
	- 如果查询出来的列名和`POJO`的属性名称不一致，则可以通过定义一个`resultMap`对列名和属性名称之间做一个映射：
		- 定义`resultMap`；
		- 使用`resultMap`作为`Statement`的输出映射类型。
- 实例
	- 参考`MyBatis` `Study` `Notes.docx`。
	- `SelectKey`
	
	``` java
	@SelectKey(statement="SELECT LAST_INSERT_ID()", keyProperty="id", before=false, resultType=Integer.class)
	```

### 2.7 动态SQL（重点）
- **`SUMMARY：`通过表达式进行判断，对`SQL`进行灵活拼接、组装等操作。**
- （`MyBatis`核心）通过表达式进行判断，对`SQL`进行灵活拼接、组装等操作。
- *`eg.`代码实例：*

	```
	<select id="selectByPermId" parameterType="long" resultMap="BaseResultMap">
		SELECT *
		FROM permission
		WHERE 1=1
			<if test="null!=permId and ''!=permId">
				AND perm_id = #{permId}
			</if>
	</select>
	```

### 2.8 SQL片段
- **`SUMMARY：`分解复杂的`SQL`语句，方便`SQL`语句的复用。**
- 分解复杂的`SQL`语句，方便程序；
- 将上边实现的动态`SQL`判断代码块抽取出来，组成一个`SQL`片段，其他的`statement`中就可以引用该公共的`SQL`片段。
- 定义`SQL`片段：<br>![][9]
- 引用`SQL`片段：<br>![][10]

### 2.9 `<foreach>`标签
- **`SUMMARY：` 向`SQL`传递数组或者是`List`。**
- 向`SQL`传递数组或者是`List`，`MyBatis`使用`<foreach>`标签进行解析；
- `select * from user where （id=1 or id=3 or id=5）`或者`select * from user where id in(1, 3, 5)`。<br>![][11]<br><br>![][12]<br><br>![][13]

### 2.10  MyBatis和Hibernate本质区别和应用场景
- **`SUMMARY：` `Mybatis`是一个不完全的`ORM`框架，需要程序员自己写`SQL`（当然，其也提供部分`SQL`操作），适用于需求变化较多的项目；`Hibernate`是一个标准的ORM框架（对象关系映射），适用于需求变化不多的中小型项目。**
- **MyBatis**
	- **本质**
		- 专注于`SQL`本身，需要程序员自己编写`SQL`语句，`SQL`修改、优化比较方便；
		- 是一个不完全的`ORM`框架，虽然需要程序员自己写`SQL`，但是`MyBatis`也可以实现映射（输入映射和输出映射）。
	- **应用场景**
		- **适用于需求变化较多的项目**，比如：互联网项目。
- **Hibernate**
	- **本质**
		- 是一个标准的`ORM`框架（对象关系映射）。入门门槛较高，`SQL`语句自动生成，不需要程序员手动写（当然也可以自定义），对`SQL`语句进行了优化，修改比较困难。
	- **应用场景**
		- 适用于**需求变化不多的中小型项目**，*`eg.`：*后台管理系统、`ERP`、`ORM`、`OA`等。
- **扩展**
	- 企业进行技术选型：低成本、高回报作为技术选型的原则，根据项目组的技术力量进行选择。

### 2.11 优缺点
#### 2.11.1 优点
- 简单易学：
	- `MyBatis`本身就很小且简单；
	- 没有任何第三方依赖，最简单安装只要两个`jar`文件以及配置几个`SQL`映射文件，易于学习，易于使用，通过文档和源代码，可以比较完全的掌握它的设计思路和实现。
- 灵活：
	- `MyBatis`不会对应用程序或者数据库的现有设计强加任何影响；
	- `SQL`写在`XML`里，便于统一管理和优化；
	- 通过`SQL`基本上可以实现我们不使用数据访问框架可以实现的所有功能。
- 解除`SQL`与程序代码的耦合：
	- 通过提供`DAL`层，将业务逻辑和数据访问逻辑分离，使系统的设计更清晰，更易维护，更易单元测试。
- 提供映射标签，支持对象与数据库的`ORM`字段关系映射 ；
- 提供对象关系映射标签，支持对象关系组建维护；
- 提供`XML`标签，支持编写动态`SQL`。

#### 2.11.2 缺点
- 编写`SQL`语句时工作量很大，尤其是字段多、关联表多时，更是如此；
- `SQL`语句依赖于数据库，导致数据库移植性差，不能更换数据库；
- 框架还是比较简陋，功能尚有缺失，虽然简化了数据绑定代码，但是整个底层数据库查询实际还是要自己写的，工作量也比较大，而且不太容易适应快速数据库修改；
	- 不支持级联更新、级联删除；
- 编写动态`SQL`时，不方便调试，尤其逻辑复杂时；
- 二级缓存机制不佳。

	> *注意*
	> - `MyBatis`的优点同样是`MyBatis`的缺点，正因为`MyBatis`使用简单，数据的可靠性、完整性的瓶颈便更多依赖于程序员对`SQL`的使用水平上了；
	> - `SQL`写在`XML`里，虽然方便了修改、优化和统一浏览，但可读性很低，调试也非常困难，也非常受限；
	> - `MyBatis`没有`Hibernate`那么强大，但是`MyBatis`最大的优点就是简单小巧易于上手，方便浏览修改`SQL`语句。
	> - Hibernate的查询会将表中的所有字段查询出来，这一点会有性能消耗。Hibernate也可以自己写SQL来指定需要查询的字段，但这样就破坏了Hibernate开发的简洁性。而Mybatis的SQL是手动编写的，所以可以按需求指定查询的字段。

#### 2.11.3 与Hibernate对比
- `MyBatis`优势
	- `MyBatis`可以进行更为细致的`SQL`优化，可以减少查询字段；
	- `MyBatis`容易掌握，而`Hibernate`门槛较高。
- `Hibernate`优势
	- `Hibernate`的`DAO`层开发比`MyBatis`简单，`Mybatis`需要维护`SQL`和结果映射；
	- `Hibernate`对对象的维护和缓存要比`MyBatis`好，对增删改查的对象的维护要方便；
	- `Hibernate`数据库移植性很好，`MyBatis`的数据库移植性不好，不同的数据库需要写不同SQL；
	- `Hibernate`有更好的二级缓存机制，可以使用第三方缓存。`MyBatis`本身提供的缓存机制不佳：
		- *`EG.` `MyBatis`二级缓存在实际操作中不建议使用：*
			- `MyBatis`二级缓存是相对于`namespace`下的缓存，如果不同的`namespace`下面有功能相似的查询，其中这样使用了不同的二级缓存，就有可能造成脏数据，导致数据不一致。

### 2.12 调优 [^ mybatis optimize reference]
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


<br>
## 三、高级知识
### 3.1 订单商品数据模型分析
- 参考`Mybatis` `Study` `Notes.docx`。

### 3.2 高级映射
- **`SUMMARY：` `OneToOne`、`OneToMany` 和`ManyToMany`映射。**
#### 3.2.1 OneToOne
##### 3.2.1.1 ResultType
<br>![][14]<br><br>![][15]
##### 3.2.1.2 ResultMap
<br>![][16]<br><br>![][17]
- `resultMap`可以实现延迟加载，而`resultType`无法实现延迟加载。
#### 3.2.2 OneToMany && ManyToOne
##### 3.2.2.1 ResultMap
<br>![][18]<br><br>![][19]
#### 3.2.3 ManyToMany
##### 3.2.3.1 ResultMap
<br>![][20]<br><br>![][21]
### 3.3 延迟加载
- **`SUMMARY：` 因为`association`、`collection`具备延迟加载功能。**
- `resultMap`可以实现高级映射（使用`association`、`collection`实现`OneToOne`以及`OneToMany`映射）的延迟加载，因为`association`、`collection`具备延迟加载功能。<br>![][22]

### 3.4 查询缓存 [^ Query Cache Reference]
[^ Query Cache Reference]: [CSDN][23]

- **`SUMMARY：` `MyBatis`提供一级缓存和二级缓存功能，用于减轻数据库压力，提高数据库性能。**
- 用于减轻数据库压力，提高数据库性能；
- `MyBatis`提供一级缓存和二级缓存功能。
- <br>![][30]

#### 3.4.1 一级缓存
- **`SUMMARY：` `SqlSession`内部进行缓存，只要当前`Session`不关闭，同样的查询就会利用一级缓存。**
- 在操作数据库的时候需要构造`SqlSession`对象，在对象中有一个数据结构（`HashMap`）用于存储缓存数据，不同的`SqlSession`对象之间的缓存数据区域是互相不影响的，即`SqlSession`是一级缓存，其数据只在自己的缓存区域中，和其他`SqlSession`不共用；
- `MyBatis`默认支持一级缓存；
- `SQLSession`对象关闭之后，其缓存就会自动清空，此时有相同的查询也没有对应的缓存。；
- 具体参考`MyBatis` `Study` `Notes.docx`。

#### 3.4.2 二级缓存
- **`SUMMARY：` 同一个`namespace`的`mapper`，多个`SqlSession`之间共用数据，如果开启了二级缓存，一级缓存`close()`之后会把查询结果缓存到二级缓存，下次相同的查询（此时一级缓存已经提交，不存在，所以使用的是二级缓存），就会使用缓存中数据。**
- `mapper`（`namespace`）级别的缓存，多个`SqlSession`去操作同一个`Mapper`的`SQL`语句，其数据会缓存在二级缓存中，即同一个`namespace`的`mapper`是二级缓存，这样多个`SqlSession`之间共用数据；
- 第一次发起查询的时候，查询结果会自动保存在缓存中，第二次查询（同样的查询）的时候如果缓存中有则会直接使用缓存中的数据，如果没有的话会直接查询数据库。此时“没有”出现的有两种情况，一是查询的语句是第一次查询，二是`SqlSession`对象调用了`commit()`操作（可能是执行了插入、更新、删除操作），这样的话就会清空（`flush`）`SqlSession`中的缓存（一级缓存），此时就不能直接从一级缓存中取数据了，这样做的目的是让缓存中存储的信息是最新的，避免脏读；
- `MyBatis`支持事务机制，而且默认是打开的，所以`SQL`的插入、更新、删除操需要进行`commit`操作（先`flush`缓存再同步到数据库中），失败的话就`rollback`（遵循事务的原子性）；
- `sqlSession`如果不`close()`的话是不会写到二级缓存当中的，其数据只会保存在一级缓存当中；
- 刷新二级缓存（清空二级缓存）：
	- 在与`mapper`的同一`namespace`中，如果有其他`CRUD`操作数据后没有执行刷新（`commit`操作）则会出现脏读的情况；
	- 设置`statement`中的属性`flushCache`的值为`true`即可；
	- 默认情况下`statement`的`flushCache`属性的值为`true`。
<br>![][24]<br><br>![][25]<br><br>![][26]<br><br>![][27]

### 3.5 和Spring的整合 [^ MyBatis Demo Reference]

### 3.6 逆向工程 [^ MyBatis Reverse Engineering Reference]
[^ MyBatis Reverse Engineering Reference]: [Coding_MyBatis_Annotation-Reverse-Engineering-Project][28]、[Coding_MyBatis_XML-Reverse-Engineering-Project][29]

<br>
## 四、其他
- `LIKE '%' #{name} '%'`预编译`SQL`，建议使用 [^ Mybatis Like Reference]，此中的`%`和`#{name}`之间要有空格，否则查询的条件就不是根据`#{name}`进行模糊查询了（已经验证，待找原因）； 
- `Provider`中方法参数映射问题：
	- 一个参数的`@SelectProvider`方法：
		- 对于只有一个参数的情况，可以在`Provider`中直接使用参数名称，不可以直接使用`Map<String, Object>`作为参数；
		- 但是如果参数被`@Param`修饰，那么`Provider`中对应的方法参数形式必须为`Map<String, Object>`。
	- 两个或者两个以上参数的`@SelectProvider`方法：
		- 在超过一个参数情况下，`Provider`必须接受`Map<String, Object>`作为方法的参数，如果参数使用`@Param`注解，那么参数在可以通过`map.get(@Param`定义的字符串)获取；如果参数没有使用`@Param`注解，那么参数在`Map`中以参数的顺序为`key`进行查询。
- `select`在数据库没有对应记录的时候，如果返回的是对象，则结果是`null`；如果返回的是`List<?>`，则结果是`[]`（内容为空，而不是`null`，亦即空指针，原理：这个需要看`MyBatis`的源码）。

[^ Mybatis Like Reference]: [ITEye][4]

[1]: https://github.com/mybatis/mybatis-3
[2]: http://baike.baidu.com/link?url=gtrdQbHklN6ccRZLVDbAY6vUE0HQWRXveBQyR_W6IjVi4pUQVKs4rzEOJca2Rm9wzbrv3XvMTi7EDWYjj1ogsK
[3]: http://p1.bpimg.com/567571/2c7cac3395c7ca74.png
[4]: http://happyqing.iteye.com/blog/2172397
[5]: http://www.programgo.com/article/29663194854/
[6]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git
[7]: http://www.mybatis.org/mybatis-3/zh/configuration.html
[8]: http://i1.piimg.com/567571/e28e07e3e164dde0.png
[9]: http://i1.piimg.com/567571/48507658d95ce44d.png
[10]: http://i1.piimg.com/567571/77ee5defdfa274e4.png
[11]: http://i1.piimg.com/567571/5f11bd341aafc0ae.png
[12]: http://i1.piimg.com/567571/ae4b31bda4dcd652.png
[13]: http://i1.piimg.com/567571/c87a4944b5e9254c.png
[14]: http://i1.piimg.com/567571/82cde846fca99bdb.png
[15]: http://i1.piimg.com/567571/44e41ac0c850072f.png
[16]: http://p1.bpimg.com/567571/8959c88ef3593562.png
[17]: http://i1.piimg.com/567571/4e7707bb9cb7984a.png
[18]: http://p1.bpimg.com/567571/6c007a58a48d8d02.png
[19]: http://i1.piimg.com/567571/1c680e59af4af68e.png
[20]: http://p1.bqimg.com/567571/a8c8213bba7c0989.png
[21]: http://p1.bqimg.com/567571/46bb4b44ec1f0454.png
[22]: http://i1.piimg.com/567571/bfc9ededb28d2a9b.png
[23]: http://blog.csdn.net/sun_aichao/article/details/46455649
[24]: http://p1.bqimg.com/567571/add3eb7f35184410.png
[25]: http://p1.bqimg.com/567571/a590105283ba24fa.png
[26]: http://p1.bqimg.com/567571/c1b835b976680d36.png
[27]: http://p1.bqimg.com/567571/abd7edb5a43c7d9a.png
[28]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/generator
[29]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/src/main/resources/config/mybatis/generator
[30]: http://p1.bqimg.com/567571/878fe686ba9ca5a8.png