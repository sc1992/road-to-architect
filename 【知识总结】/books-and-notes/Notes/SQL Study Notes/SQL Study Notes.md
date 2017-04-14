## SQL Study Notes[^ history version][^ reference]

@(Books and Notes)[SQL]

> VICTORY LOVES PREPARATION

[^ reference]: [W3School][1]、[菜鸟教程][2]

[^ history version]: 
- 版本时间信息<br>
> 2016年09月29日 09:20

[TOC]

***
### 〇、思维导图
![](http://i1.piimg.com/567571/dcd95355556a325a.png)
***

### 一、简介
- `SUMMARY:` `SQL`是一种操作关系型数据库的标准计算机语言。
- 结构化查询语言(`Structured Query Language`)，简称`SQL`，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统。

> *注意*
> - SQL 是一门 ANSI 的标准计算机语言，但是大部分 SQL 数据库程序都拥有它们自己的私有扩展。

<br>
### 二、语法
##### [- 基础语法][1]
###### `SELECT`
``` sql
1. SELECT 列名称 FROM 表名称
2. SELECT * FROM 表名称
```
###### `INSERT`
``` sql
1. INSERT INTO 表名称 VALUES (值1, 值2,....)
2. INSERT INTO 表名称 (列1, 列2,...) VALUES (值1, 值2,....)
``` 
###### `UPDATE`
``` sql
1. UPDATE 表名称 SET 列名称 = 新值
``` 
###### `DELETE`
``` sql
1. DELETE FROM 表名称
``` 

> *注意*
> - `SQL`语句对大小写不敏感；
> - 上面的语法都是最基本的形式。

##### [- 高级语法][3]
##### [- 函数][4]

<br>
### 三、优化[^sql optimization]

[^sql optimization]: [CSDN][7]、[51CTO][8]、[GitHub][9]

<br>
### 四、注意
##### - 数据库范式[^ Database Norm]
- 设计关系数据库时，遵从不同的规范要求，设计出合理的关系型数据库，这些规范要求被称为范式，各种范式呈递次规范，越高的范式数据库冗余越小。
- 目前关系数据库有六种范式：第一范式（1NF）、第二范式（2NF）、第三范式（3NF）、巴斯-科德范式（BCNF）、第四范式(4NF）和第五范式（5NF，又称完美范式）。

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