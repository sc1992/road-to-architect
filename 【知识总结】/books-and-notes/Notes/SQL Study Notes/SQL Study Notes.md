# SQL [^ reference] Study Notes [^ history version]

@(Notes)[SQL, Notes]

> VICTORY LOVES PREPARATION.

[^ reference]: [W3School][1]、[菜鸟教程][2]

[^ history version]: 
> 版本信息：
> 2017年04月16日 下午05:02:10
> 2017年04月06日 上午10:13:29
> 2016年09月29日 09:20

[TOC]

***
## 〇、思维导图

## 一、简介
- **`SUMMARY：`结构化查询语言（`Structured Query Language`）简称`SQL`，是一种数据库查询和程序设计语言，用于管理关系数据库系统。**
- 结构化查询语言（`Structured Query Language`）简称`SQL`，是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统；
- 也是数据库脚本文件的扩展名。

	> *注意*
	> - `SQL`是一门`ANSI`的标准计算机语言，但是大部分`SQL`数据库程序都拥有它们自己的私有扩展。

<br>
## 二、语法
### 2.1 基础语法 [^ grammar reference]
[^ grammar reference]: [W3School][1]

#### 2.1.1 SELECT
- *`EG.`实例：*

	``` sql
	1. SELECT 列名称 FROM 表名称
	2. SELECT * FROM 表名称
	```
	
#### 2.1.2 INSERT
- *`EG.`实例：*

	``` sql
	1. INSERT INTO 表名称 VALUES (值1, 值2,....)
	2. INSERT INTO 表名称 (列1, 列2,...) VALUES (值1, 值2,....)
	``` 
	
#### 2.1.3 UPDATE
- *`EG.`实例：*

	``` sql
	1. UPDATE 表名称 SET 列名称 = 新值
	``` 
	
#### 2.1.4 DELETE
- *`EG.`实例：*
	
	``` sql
	1. DELETE FROM 表名称
	``` 

	> *注意*
	> - `SQL`语句对大小写不敏感；
	> - 上面的语法都是最基本的形式。

### 2.2 高级语法 [^ advanced grammar reference]
[^ advanced grammar reference]: [W3School][3]

### 2.3 函数 [^ sql function reference]
[^ sql function reference]: [W3School][4]

## 三、索引 [^ SQL Index Reference]
[^ SQL Index Reference]: [W3School][10]、[脚本之家][12]

- 索引本质是一种数据结构，通过对其查询的优化来快速定位数据位置；
- 使用`B-tree`进行查询，综合效率较高。

### 3.1 作用
- **`SUMMARY：`索引避免了全表扫描。**
- `CREATE INDEX`语句用于在表中创建索引；
- 在不读取整个表的情况下，索引使数据库应用程序可以更快地查找数据。

### 3.2 类型
- **`SUMMARY：` `Primary`、`Unique`和允许重复的索引三种。**
- 在创建索引时，可以规定索引能否包含重复值。如果不包含，则索引应该创建为`PRIMARY KEY`或`UNIQUE`索引。对于单列惟一性索引，这保证单列不包含重复的值。对于多列惟一性索引，保证多个值的组合不重复。
- `PRIMARY KEY`索引和`UNIQUE`索引非常类似。事实上，`PRIMARY KEY`索引仅是一个具有名称`PRIMARY`的`UNIQUE`索引。这表示一个表只能包含一个`PRIMARY KEY`，因为一个表中不可能具有两个同名的索引。
	
	> *注意*
	> - `primary key`也是一个索引。
	
### 3.3 创建
- 在执行`CREATE TABLE`语句时可以创建索引，也可以单独用`CREATE INDEX`或`ALTER TABLE`来为表增加索引。
- **ALTER TABLE**

	``` sql
	ALTER TABLE table_name ADD INDEX index_name (column_list)
	ALTER TABLE table_name ADD UNIQUE (column_list)
	ALTER TABLE table_name ADD PRIMARY KEY (column_list)
	```
- **CREATE INDEX**

	``` sql
	CREATE INDEX index_name ON table_name (column_list)
	CREATE UNIQUE INDEX index_name ON table_name (column_list)
	```

### 3.4 删除
- 可利用`ALTER TABLE`或`DROP INDEX`语句来删除索引。类似于`CREATE INDEX`语句，`DROP INDEX`可以在`ALTER TABLE`内部作为一条语句处理，语法如下：

	``` sql
	DROP INDEX index_name ON talbe_name
	ALTER TABLE table_name DROP INDEX index_name
	ALTER TABLE table_name DROP PRIMARY KEY
	```
- 其中，前两条语句是等价的，删除掉`table_name`中的索引`index_name`。第`3`条语句只在删除`PRIMARY KEY`索引时使用，因为一个表只可能有一个`PRIMARY KEY`索引，因此不需要指定索引名。如果没有创建`PRIMARY KEY`索引，但表具有一个或多个`UNIQUE`索引，则`MySQL`将删除第一个`UNIQUE`索引。如果从表中删除了某列，则索引会受到影响。对于多列组合的索引，如果删除其中的某列，则该列也会从索引中删除。如果删除组成索引的所有列，则整个索引将被删除。

### 3.5 查看
- *`EG.`查看索引：*

	``` sql
	show index from tblname;
	show keys from tblname;
	```

	> *注意*
	> - 更新一个包含索引的表需要比更新一个没有索引的表更多的时间，这是由于索引本身也需要更新。因此，理想的做法是仅仅在常常被搜索的列（以及表）上面创建索引；

### 3.6 应用
- 使用`explain`查看索引使用情况 [^ mysql explain reference]
[^ mysql explain reference]: [红黑联盟][13]

	``` sql
	EXPLAIN (
		SELECT
			*
		FROM
			`user`
		WHERE
			id = 1
	)
	```

- `possible_keys`
	- 显示可能应用在这张表中的索引。如果为空，没有可能的索引。可以为相关的域从`WHERE`语句中选择一个合适的语句
- `key`
	-  实际使用的索引。如果为`NULL`，则没有使用索引。很少的情况下，`MYSQL`会选择优化不足的索引。这种情况下，可以在`SELECT`语句中使用`USE INDEX（indexname）`来强制使用一个索引或者用`IGNORE INDEX（indexname）`来强制`MYSQL`忽略索引。

- **单列索引：**
	- `ALTER TABLE people ADD INDEX lname (lname)`;
	- 将`lname`列建索引，这样就把范围限制在`lname='Liu'`的结果集`1`上，之后扫描结果集`1`，产生满足`fname='Zhiqun'`的结果集`2`，再扫描结果集`2`，找到`age=26`的结果集`3`，即最终结果。
	- 由于建立了`lname`列的索引，与执行表的完全扫描相比，效率提高了很多，但我们要求扫描的记录数量仍旧远远超过了实际所需 要的。虽然我们可以删除`lname`列上的索引，再创建`fname`或者`age`列的索引，但是，不论在哪个列上创建索引搜索效率仍旧相似。

- **多列索引：**
	- 为了提高搜索效率，我们需要考虑运用多列索引，由于索引文件以`B－Tree`格式保存，所以我们不用扫描任何记录，即可得到最终结果。
	
		> *注意*
		> - **在`mysql`中执行查询时，只能使用一个索引，如果我们在`lname, fname, age`上分别建索引，执行查询时，只能使用一个索引，`mysql`会选择一个最严格（获得结果集记录数最少）的索引。**

- **最左前缀：**
	- 顾名思义，就是最左优先，上例中我们创建了`lname_fname_age`多列索引，相当于创建了（`lname`）单列索引，（`lname, fname`）组合索引以及（`lname, fname, age`）组合索引。
	
		> *注意*
		> - **在创建多列索引时，要根据业务需求，`where`子句中使用最频繁的一列放在最左边。**

- **组合索引：**
	- `ALTER TABLE people ADD INDEX lname_fname_age (lame, fname, age)`;
	- 为什么要创建组合索引呢？这么简单的情况直接创建一个`order_id`的索引不就行了吗？
	- 如果只有一个`order_id`索引，没什么问题，会用到这个索引，然后`mysql`要去磁盘上的表里面取到`product_id`；
	- 如果有组合索引的话，`mysql`可以完全从索引中取到`product_id`，速度自然会快；
	- 再多说几句组合索引的最左优先原则；
	- **组合索引的第一个字段必须出现在查询组句中，这个索引才会被用到；**
	- 如果有一个组合索引(`col_a,col_b,col_c`)；
	- 下面的情况都会用到这个索引：
		
		``` sql
		col_a = "some value";
		col_a = "some value" and col_b = "some value";
		col_a = "some value" and col_b = "some value" and col_c = "some value";
		col_b = "some value" and col_a = "some value" and col_c = "some value";
		``` 
		
	- 对于最后一条语句，`mysql`会自动优化成第三条。

<br>
## 四、优化 [^sql optimization]
[^sql optimization]: [CSDN][7]、[51CTO][8]、[GitHub][9]

- 要提高`SQL`语句的执行效率，手段之一就是尽量避免全表扫描，最常见的方法就是建立索引；
- 其他方式。

### 4.1 优化索引 [^ SQL Index Optimization Reference]
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

### 4.2 其他优化
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

<br>
## 四、注意

[^ Database Norm]: [百度百科][5]、[博客园][6]

[1]: http://www.w3school.com.cn/sql/index.asp
[2]: http://www.runoob.com/sql/sql-tutorial.html
[3]: http://www.w3school.com.cn/sql/sql_top.asp
[4]: http://www.w3school.com.cn/sql/sql_functions.asp
[5]: http://baike.baidu.com/link?url=VsLEChHk_XwvTQaej_2EbCJZg8xezJH0V5BuE49lutcNeM0hfC6shUcadRsRRJyWN2XTQZLGmhz7OO-S53J5va
[6]: http://www.cnblogs.com/linjiqin/archive/2012/04/01/2428695.html
[7]: http://blog.csdn.net/hguisu/article/details/5731629
[8]: http://database.51cto.com/art/200904/118526.htm
[9]: https://github.com/account4github/note/wiki/mysql%E4%BC%98%E5%8C%96
[10]: http://w3school.com.cn/sql/sql_create_index.asp
[11]: http://blog.csdn.net/csdnstudent/article/details/40398245
[12]: http://www.jb51.net/article/73372.htm
[13]: http://www.2cto.com/database/201501/369135.html