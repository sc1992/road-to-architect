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
[^ SQL Index Reference]: [Runoob][10]

- **`SUMMARY：`索引避免了全表扫描。**
- `CREATE INDEX`语句用于在表中创建索引；
- 在不读取整个表的情况下，索引使数据库应用程序可以更快地查找数据。

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
- 少用`in`或`not in`；
- 注意`like`中通配符的使用；
- 避免在`where`子句中对字段进行表达式操作；
- 避免在`where`子句中对字段进行函数操作。

### 4.2 其他优化
- 连接查询要比`in`查询的效率要高；
- **在子查询中，用exists代替in是一个好的选择;**
	- *`EG.`实例代码：*

		``` sql
		select name from a where id in ( select id from b ) 
		// 替代为
		select name from a where exists ( select 1 from b where id = a.id )
		```
- 使用`ORM`的时候，使用具体需要的字段代替`*`；

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
[10]: http://www.runoob.com/sql/sql-create-index.html
[11]: http://blog.csdn.net/csdnstudent/article/details/40398245