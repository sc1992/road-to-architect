# SQL [^ SQL Reference] Study Notes [^ history version]

@(Notes)[SQL, Notes]

> VICTORY LOVES PREPARATION.

[^ SQL Reference]: [百度百科][1]

[^ history version]: 
> 版本信息：
> 2017年04月06日 上午10:13:29


[TOC]

***
## 〇、思维导图

<br>
## 一、简要介绍
- **`SUMMARY：`结构化查询语言（`Structured Query Language`）简称`SQL`，是一种数据库查询和程序设计语言，用于管理关系数据库系统。**
- 结构化查询语言（`Structured Query Language`）简称`SQL`，是一种特殊目的的编程语言，是一种数据库查询和程序设计语言，用于存取数据以及查询、更新和管理关系数据库系统；
- 也是数据库脚本文件的扩展名。

<br>
## 二、具体内容
### 2.1 索引 [^ SQL Index Reference]
[^ SQL Index Reference]: [Runoob][2]

- **`SUMMARY：`索引避免了全表扫描。**
- `CREATE INDEX`语句用于在表中创建索引；
- 在不读取整个表的情况下，索引使数据库应用程序可以更快地查找数据。

### 2.2 SQL优化
- 要提高`SQL`语句的执行效率，手段之一就是尽量避免全表扫描，最常见的方法就是建立索引。
#### 2.2.1 优化索引 [^ SQL Index Optimization Reference]
[^ SQL Index Optimization Reference]: [CSDN][3]

- 避免在`where`子句中使用`is null`或`is not null`对字段进行判断。
- 避免在`where`子句中使用`!=`或`<>`操作符
- 避免在`where`子句中使用`or`来链接条件
- 少用`in`或`not in`。
- 注意`like`中通配符的使用。
- 避免在`where`子句中对字段进行表达式操作。
- 避免在`where`子句中对字段进行函数操作。
- 使用具体需要的字段代替`*`；
- **在子查询中，用 exists 代替 in 是一个好的选择。**
	- *`EG.`实例代码：*
		
		``` sql
		select name from a where id in (select id from b) 
		// 替代为
		select name from a where exists (select 1 from b where id = a.id)
		```

<br>
## 三、注意事项

[1]: http://baike.baidu.com/link?url=Hr4RokAahlApOHlYQ3EMtSBgn13PMqgi-NLssOydOEcHbb67b6ATg3pLoRESIR6E7SUKR7cXHzXYiqj3eMu-WiiRt_l9MZBf69QDSUcILlpby6aKeFGbfjUFuWVcuiYAro2hs7r6dYEtRepAE55n0I3XtbElzh-TwD_YhYRjksg5NbA--TYTZWMOJ3hninKHKmu3knDK1BIh_c_rAZDh3a
[2]: http://www.runoob.com/sql/sql-create-index.html
[3]: http://blog.csdn.net/csdnstudent/article/details/40398245