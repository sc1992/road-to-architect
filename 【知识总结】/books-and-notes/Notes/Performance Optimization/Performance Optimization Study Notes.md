# Performance Optimization Study Notes [^ history version]

@(Notes)[Performance Optimization , notes]

> VICTORY LOVES PREPARATION

[^ history version]: 
> 版本信息：
> 2017年03月30日 下午04:23:31

[^ Hibernate Reference]: [Hibernate.org][1]、[百度百科][2]

[TOC]

***
## 〇、思维导图
- **`SUMMARY：`**

> *注意*
> - 

<br>
## 一、简要介绍

<br>
## 二、具体内容

### 2.1 简述Hibernate常见优化策略。
- **`SUMMARY：`如下。**
- 制定合理的缓存策略（二级缓存、查询缓存）；
- 采用合理的`Session`管理机制；
- 尽量使用延迟加载特性；
- 设定合理的批处理参数；
- 如果可以，选用`UUID`作为主键生成器；
- 如果可以，选用基于版本号的乐观锁替代悲观锁；
- 在开发过程中, 开启`hibernate.show_sql`选项查看生成的`SQL`，从而了解底层的状况；开发完成后关闭此选项；
- 考虑数据库本身的优化，合理的索引、恰当的数据分区策略等都会对持久层的性能带来可观的提升，但这些需要专业的`DBA`（数据库管理员）提供支持。

<br>
## 二、注意事项




