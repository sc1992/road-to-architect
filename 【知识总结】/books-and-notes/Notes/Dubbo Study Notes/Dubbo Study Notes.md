# Dubbo [^ Dubbo reference] Study Notes [^ history version]

> VICTORY LOVES PREPARATION.

[^ Dubbo reference]: [OsChina][5]

[^ history version]: 
> 版本信息：
> 2017年03月11日 下午04:33:09
> 2017年03月02日 下午11:12:50
> 2017年02月19日 下午02:38:41
> 2017年02月12日 上午11:57:19
> 2017年02月28日 下午08:49:30
> 2017年03月07日 下午08:35:58

[TOC]

***
## 〇、思维导图

<br>
## 一、基础篇

### 1.1 课程介绍
- **`SUMMARY:` `Dubbo`是一个优秀的高性能服务框架。**
- 数据量暴增，分布式应用系统开发是大数据时代的趋势；
- ![][2]

	> *注意：*
	> - 服务框架：基于`SOA`（`Service Oriented Architecture`）的框架，面向`Service`进行开发，应用于分布式系统架构。

### 1.2 使用`Dubbo`对传统工程进行服务化改造思路介绍
- **`SUMMARY:`单工程修改成多工程（父工程和子工程）。**
- `Maven`工程的父项目如何建立；
- 工程依赖工程问题；
- 普通`MVC`工程如何改造成`Dubbo`工程：<br>![][1]

### 1.3 `ZooKeeper`注册中心的安装
- **`SUMMARY:` `ZooKeeper`是一个开源的分布式应用程序协调服务，其余参考`PDF`教程。**
- `ZooKeeper`是一个分布式的，开放源码的分布式应用程序协调服务，是`Google`的`Chubby`一个开源的实现，是`Hadoop`和`Hbase`的重要组件。它是一个为分布式应用提供一致性服务的软件，提供的功能包括：
	- 配置维护；
	- 域名服务；
	- 分布式同步；
	- 组服务等。
- ![][3]
- 安装过程参考`PDF`教程；
- 注册中心作用
	- 
 
	> *注意：*
	> - `ZooKeeper`
	>  - 分布式应用协调服务。
	> - `Redis`
	>  - 高性能`KV`存储。
  
### 1.4 使用`Dubbo`对传统工程进行服务化改造后的服务调用测试

### 1.5 使用`Dubbo`进行规模服务化前的工程结构优化
- **`SUMMARY:`单工程拆解成多工程。**
- 使用`Dubbo`是为了实现系统的分布式服务化；
- 分布式服务架构的项目特点
	- 多个服务；
	- 多种类型的工程；
	- 工程间需要相互调用；
	- 如何实现工程间解耦（高内聚、低耦合）；
	- 工程该怎么拆分；
	- 如何对大量的工程进行合理有效地管理（高级篇：持续集成Hudson）。
	
### 1.6 `Dubbo`管理控制台的安装
- **`SUMMARY:`参考网上资料即可，大致就是`tomcat`部署`dubbo admin`。**
- ![][4]
- `dubbo-admin-*.war`的部署，注意修改注册中心地址。

### 1.7 使用`maven`构建`dubbo`服务的可执行`jar`包
- **`SUMMARY:三种方式。`**
- `Dubbo`服务的运行方式：<br>![][6]
- `ClassPathXmlApplicationContext`
-  [优雅停机][7]
-  `Maven`构建的时候，本地库有`jar`的话就把本地的`jar`拷贝的当前工程，否则从公共库和私有库拷贝到当前工程。

### 1.8 在linux操作系统上手工部署dubbo服务
- **`SUMMARY:具体步骤内容参照下面，脚本参照Dubbo项目。`**
- 守护进程（终端退出，进程也不会退出）`java –jar xxx.jar &`
- ![][8]
- ![][9]
- ![][10]
- ![][11]
- ![][12]
- ![][13]
- ![][14]

### 1.9 构建dubbo服务消费者web应用的war包并在tomcat中部署
- ![][15]

### 1.10 Dubbo监控中心的介绍与简易监控中心的安装
- ![][16]
- ![][17]
- ![][18]
- ![][19]
- ![][20]

### 1.11 持续集成篇--搭建敏捷高效的持续集成管理平台
- ![][21]
- ![][22]
- ![][23]
- ![][24]
- ![][25]
- ![][26]
- ![][27]

### 1.12 持续集成篇--svn版本管理系统的安装（centos+subversion+apache+jsvnadmin）

### 1.13 持续集成篇--svn版本管理系统的使用（centos+subversion+apache+jsvnadmin+tortoisesvn）

### 1.14 持续集成篇--maven私有库和本地库的安装与配置（sonatype nexus + maven）
- ![][28]
- ![][29]
- ![][30]
- ![][31]

### 1.15 持续集成篇--sonarqube代码质量管理平台的介绍与安装
- ![][32]
- ![][33]
- ![][34]
- ![][35]
- ![][36]
- ![][37]
- 安装mysql服务，同时更换其引擎为InnoDB、设置缓存池大小和查询缓存大小（SQL服务器调优），SonarQube质量报告相对应的数据比较大

### 1.16 持续集成篇--sonarqube代码质量管理平台的配置与使用
- ![][38]
- ![][39]
- ![][40]
- ![][41]
- ![][42]
- Sonar maven profile/配置
- 规则可以从已经提供的java（220条）中选择，然后自定义自己项目的规则集合。
- 问题跟踪处理好是质量管理的核心

### 1.17 持续集成篇--hudson持续集成服务器的安装与配置

### 1.18 持续集成篇--hudson持续集成服务器的使用（自动化编译、分析、打包、部署）

<br>
## 二、高级篇

### 2.1 基于dubbo的分布式系统架构介绍（以第三方支付系统架构为例）
- **`SUMMARY:熟知工具使用，架构思想需要（通过理论和实践）慢慢熔炼。`**
*`IMG.`第三方支付系统：*<br><br>![][43]
<p>

- ![][44]

<p>

- ![][45]

<p>

- ![][46]

<p>

- ![][47]

### 2.2 消息中间件在分布式系统中的作用介绍
- **`SUMMARY：消息中间件是在分布式系统中完成消息的发送和接收的基础软件。`**
- `MOM`，`Message-Oriented Middleware`，消息中间件；
- 消息中间件是在分布式系统中完成消息的发送和接收的基础软件；
- **消息**是在两台计算机间传送的**数据单位**：
	- 消息可以非常简单，例如只包含**文本字符串**；
	- 也可以更复杂，可能包含嵌入**对象**。
- **业务中直接调用非业务服务（即业务耦合非业务功能）的缺点：**
	- **`SUMMARY：如果同步调用的话会影响到当前业务的执行过程，无论是在时效上还是准确度上。`**
	- 直接调用多个服务，不仅增加了对服务的耦合性，有可能在时效性上太差：
		- 如果调用服务中的一个失败，可能出现很多情况，而使用消息中间件，直接调用消息中间件，让消息中间件（同时，不用一个一个地，节省时间）投递到相关服务。
	- **如果投递失败，消息中间件可以重新发送投递（超时重发和失败重发机制）**。
- 消息中间件处理并发（队列）；
- **`JMS`（`Java Messaging Service`）`Java`消息服务是`Java`平台上有关面向消息中间件（`MOM`）的技术规范**；
- 它便于消息系统中的`Java`应用程序进行消息交换，并且通过提供标准的产生、发送、接收消息的接口简化企业应用的开发；
- 也就是说它定义看一系列规范，然后大家按照这种规范来开发自己消息服务，当然，现在有好多开源的来供大家使用了，常用的有：
	- `Apache ActiveMQ`；
	- `RabbitMQ`；
	- `Redis`；
	- `Jafka/Kafka`等。
- `Java`消息服务应用程序结构支持两种通信模式：**点对点或队列模型、发布者/订阅者模型：**
	- **点对点或队列模型**意思是一个生产者向一个特定的**队列（`QUEUE`）**发布消息，一个消费者从该队列中读取消息；
	- **`SUMMARY：`点对点或队列模型是一个消息生产者向一个特定的队列（`QUEUE`）发布消息，一个消息消费者从该队列中读取消息。**
	- 有且只有一个消费者将获得消息；
	- 生产者不需要在接收者消费该消息期间处于运行状态，接收者也同样不需要在消息发送时处于运行状态。<br>![][59]
	- **发布者/订阅者模型** [^ Publish/Subscribe Pattern Reference] 则是向一个特定的**消息主题（`TOPIC`）**发布消息，`0`或`n`个订阅者可能对接收来自特定消息主题的消息感兴趣；
[^ Publish/Subscribe Pattern Reference]: [CSDN][61]、[CSDN][62]

	- **`SUMMARY：`发布者/订阅者模型是消息发布者向一个特定的消息主题（`TOPIC`）发布消息，消息订阅者获取消息。**
	- 在这种模型下，发布者和订阅者彼此不知道对方。**多个消费者可以获得消息，在发布者和订阅者之间存在时间依赖性**；
	- 发布者需要建立一个订阅（`subscription`），以便客户能够订阅；
	- **订阅者必须保持持续的活动状态以接收消息，除非订阅者建立了持久的订阅（`subscriptionDurable`，具体参考 [framework-assembly-basis][63] 项目）**。<br>![][60]

	> *注意：*
	> - 在计算机科学中，消息队列和邮箱是用于进程间通信或同一进程内的线程间通信的软件工程组件。他们使用一个队列来传播消息 —— 传递控制或者内容。
	> - `Message Broker` - The message-oriented middleware server that hosts messaging destinations (i.e., queues and topics) for the purposes of asynchronous communication. Sometimes known as a queue manager 
	> - `Message Queue` - A messaging destination that uses a queue data structure to hold messages and is hosted by the message broker. The alternative to a queue is a topic which provides publish/subscribe semantics. 

- ![][48]

<p>

- ![][49]

<p>

- ![][50]

<p>

- ![][51]

<p>

- ![][52]

<p>

- ![][53]

### 2.3 activemq [^ activemq reference] 的安装与使用
[^ activemq reference]: [博客园][54]、[Coding][55]、[CSDN][58]

- 发布/订阅模式除了能够提供**一对多**的消息专递方式之外，还提供了消息持久化的特性，它允许订阅者在上线后接收离线时的消息，关于这部分特性，以及“发布/订阅”的应用场景打算在以后的文章中慢慢阐述。

### 2.4 redis [^ redis reference] 的安装与使用
[^ redis reference]: [redis][56]、[百度百科][57]

- **`SUMMARY:` 开源数据存储，主要应用于数据库、缓存和消息代理。**
- Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.
- 缓存中间件很大程度上的用途是为了**缓存热点数据，提高系统性能**；
- 

### 2.5 fastdfs分布式文件系统_01安装
- **`SUMMARY：`开源分布式文件系统，支持常用的文件功能，如存储、访问、同步，能够负载均衡。**
- FastDFS是一个开源的分布式文件系统，对文件进行管理，功能包括：文件存储、文件同步、文件访问（文件上传、文件下载）等，解决了大容量存储和负载均衡的问题。特别适合以文件为载体的在线服务，如相册网站、视频网站等等；
- 能提供一个文件访问链接，`eg.`*img10.360buyimg.com/vclist/s390x130_jfs/t3214/363/8067817330/15052/8ffe4844/58bf6995N548fc39b.jpg!q90。*

### 2.6 fastdfs分布式文件系统_02使用
### 2.7 简易版支付系统介绍
### 2.8 简易版支付系统部署(单节点)
### 2.9 dubbo服务集群
### 2.10 dubbo分布式服务子系统的划分
### 2.11 dubbo服务接口的设计原则
### 2.12 dubbo服务启动依赖检查
### 2.13 dubbo负载均衡策略
### 2.14 dubbo线程模型（结合linux线程数限制配置的实战经验分享）
### 2.15 dubbo直连提供者（开发调试）
### 2.16 dubbo服务只订阅（开发调试）
### 2.17 dubbo服务只注册

<br>
## 三、高可用架构篇

### 3.1 zookeeper集群的安装、配置、高可用测试
### 3.2 zookeeper集群的升级、迁移
### 3.3 activemq高可用集群(zookeeper+leveldb)安装、配置、高可用测试
### 3.4 redis集群的安装（redis3+centos）
### 3.5 redis集群的高可用测试（含jedis客户端的使用）
### 3.6 redis集群的扩展测试
### 3.7 keepalived+nginx实现高可用web负载均衡
### 3.8 fastdfs集群的安装
### 3.9 fastdfs集群的配置
### 3.10 fastdfs集群的使用（结合简易版支付系统）.avi
### 3.11 使用redis3.0集群实现tomcat集群的session共享

[1]: http://i1.piimg.com/567571/a5ee06d9477a4395.png
[2]: http://i1.piimg.com/567571/b90272d2a94c26a6.png
[3]: http://i1.piimg.com/567571/bfc7103196426474.png
[4]: http://p1.bqimg.com/567571/c8fec9f0d6543c87.png
[5]: http://www.oschina.net/p/dubbo
[6]: http://p1.bqimg.com/567571/ce9e8828bfb8f0a1.png
[7]: http://dubbo.io/User+Guide-zh.htm#UserGuide-zh-%E4%BC%98%E9%9B%85%E5%81%9C%E6%9C%BA
[8]: http://i1.piimg.com/567571/8229abf8b2161dbe.png
[9]: http://p1.bpimg.com/567571/dfa14a7ecf8323ab.png
[10]: http://p1.bpimg.com/567571/502d84a189db2c71.png
[11]: http://i1.piimg.com/567571/fd0b158baa45d5ef.png
[12]: http://i1.piimg.com/567571/6fb97cdcf449c8a5.png
[13]: http://i1.piimg.com/567571/a283267e61d18c70.png
[14]: http://p1.bqimg.com/567571/805e037b86708032.png
[15]: http://i1.piimg.com/567571/9441497c756173f7.png
[16]: http://p1.bqimg.com/567571/7fd5432bc80b0c12.png
[17]: http://i1.piimg.com/567571/dca82d260b45ce2f.png
[18]: http://i1.piimg.com/567571/2ea94896be24a0ed.png
[19]: http://p1.bpimg.com/567571/7d2228c2945b3269.png
[20]: http://p1.bqimg.com/567571/0267a1515a12b3bd.png
[21]: http://p1.bpimg.com/567571/840eddd1a0d75f51.png
[22]: http://p1.bqimg.com/567571/0ccb8d670bfd6169.png
[23]: http://p1.bqimg.com/567571/ffc3bac8c3a8e801.png
[24]: http://i1.piimg.com/567571/582530c20d96565e.png
[25]: http://i1.piimg.com/567571/1a0b539f19782d53.png
[26]: http://i1.piimg.com/567571/3aa3885dc976ee8f.png
[27]: http://i1.piimg.com/567571/e30d702a4895a6eb.png
[28]: http://p1.bqimg.com/1949/b994a90a6085e807.png
[29]: http://p1.bqimg.com/1949/323f1a3a286eac84.png
[30]: http://p1.bqimg.com/1949/c3251895f9ac4d1e.png
[31]: http://p1.bqimg.com/1949/e75ffc7f45576b48.png
[32]: http://p1.bpimg.com/1949/e5cae8cd9fc63d38.png
[33]: http://p1.bpimg.com/1949/41bb7bb208adb635.png
[34]: http://p1.bpimg.com/1949/5598797906e6f056.png
[35]: http://p1.bpimg.com/1949/cc7de467be8c8bbb.png
[36]: http://p1.bpimg.com/1949/dbce68fefafc7413.png
[37]: http://p1.bpimg.com/1949/b6703dbea36708d4.png
[38]: http://p1.bqimg.com/567571/9ac699544d060357.png
[39]: http://p1.bqimg.com/567571/ca15b4f15217d1ff.png
[40]: http://p1.bqimg.com/567571/202e8ad7fd62e311.png
[41]: http://p1.bqimg.com/567571/9c977e8d42c894b6.png
[42]: http://p1.bpimg.com/567571/2e961c1d0dea000b.png
[43]: http://i1.piimg.com/567571/804e733344c41b0b.png
[44]: http://p1.bpimg.com/567571/8b08c64a85a60021.png
[45]: http://p1.bpimg.com/567571/fefe977402b809f8.png
[46]: http://p1.bqimg.com/567571/ef0ad8daf482cc77.png
[47]: http://p1.bpimg.com/567571/d661df4c32e6f22c.png
[48]: http://p1.bpimg.com/567571/22ff242455de0ebd.png
[49]: http://p1.bqimg.com/567571/987c5279e6263e88.png
[50]: http://p1.bpimg.com/567571/e2c4d74ebe336fe4.png
[51]: http://p1.bqimg.com/567571/d8efc17ebe210f67.png
[52]: http://p1.bqimg.com/567571/642ded8d6055fb30.png
[53]: http://i1.piimg.com/567571/7c8e46c87d68c02f.png
[54]: http://www.cnblogs.com/mafly/p/activemq_think.html
[55]: https://coding.net/u/Recognizer/p/BaiduCloud_Career/git/tree/develop/%E3%80%90%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91/%E3%80%90%E7%9F%A5%E8%AF%86%E6%80%BB%E7%BB%93%E3%80%91/books-and-notes/Notes/Dubbo%20Study%20Notes/docx/activemq%203%20%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8
[56]: https://redis.io/
[57]: http://baike.baidu.com/link?url=A7OuY-SUIOm3CbKzDyluJSndk6wu53JTz8oSYuZu-rh7SKapWoscjeuey34iiYmVeqkiaL6cd63GRcPKl_Ekq_
[58]: http://blog.csdn.net/jspamd/article/details/51908456
[59]: http://i1.piimg.com/567571/d18b52398388a00a.jpg
[60]: http://p1.bqimg.com/567571/9e15915daf9f212d.jpg
[61]: http://blog.csdn.net/zhu_tianwei/article/details/46303943
[62]: http://blog.csdn.net/wangdongsong1229/article/details/8219536
[63]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/
