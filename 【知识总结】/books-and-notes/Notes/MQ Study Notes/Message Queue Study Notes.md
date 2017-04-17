# Message Queue Study Notes [^ history version]

@(Notes)[MQ, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
> 2017年04月17日 下午03:42:08


[TOC]

***

## 〇、思维导图

<br>
## 一、消息中间件在分布式系统中的作用介绍
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

## 三、activemq [^ activemq reference] 的安装与使用
[^ activemq reference]: [博客园][54]、[Coding][55]、[CSDN][58]

- 发布/订阅模式除了能够提供**一对多**的消息专递方式之外，还提供了消息持久化的特性，它允许订阅者在上线后接收离线时的消息，关于这部分特性，以及“发布/订阅”的应用场景打算在以后的文章中慢慢阐述。

## 四、注意事项

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