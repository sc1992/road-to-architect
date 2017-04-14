## RPC [^ RPC reference] Study Notes [^ history version]

@(Notes)[RPC]

> VICTORY LOVES PREPARATION.

[^ RPC reference]: [百度百科][1]、[CSDN][2]、[CSDN][3]、[CSDN][6]

[^ history version]: 
- 版本时间<br>
- 2017年1月22日 上午9:55:06

[TOC]

***

### 〇、思维导图

<br>
### 一、含义
- `SUMMARY：` 进程间通信方式，`C/S`模型，允许程序员像调用本地服务一样调用另一地址空间的过程或者方法。
- `RPC`（`Remote Procedure Call Protocol`）—— **远程过程调用协议**，是一种通过网络从远程计算机程序上请求服务，而不需要了解底层网络技术的协议。RPC协议假定某些传输协议的存在，如`TCP`或`UDP`，为通信程序之间携带信息数据。在`OSI`网络通信模型中，`RPC`跨越了传输层和应用层。`RPC`使得开发包括网络分布式多程序在内的应用程序更加容易。
- RPC采用客户机/服务器模式。请求程序就是一个客户机，而服务提供程序就是一个服务器。首先，客户机调用进程发送一个有进程参数的调用信息到服务进程，然后等待应答信息。在服务器端，进程保持睡眠状态直到调用信息到达为止。当一个调用信息到达，服务器获得进程参数，计算结果，发送答复信息，然后等待下一个调用信息，最后，客户端调用进程接收答复信息，获得进程结果，然后调用执行继续进行。
- （`RPC` 的全称是 `Remote Procedure Call` 是一种进程间通信方式。它允许程序调用另一个地址空间（通常是共享网络的另一台机器上）的过程或函数，而不用程序员显式编码这个远程调用的细节。即程序员无论是调用本地的还是远程的，本质上编写的调用代码基本相同。）

> *注意*
> - **RPC的主要功能目标是让构建分布式计算（应用）更容易，在提供强大的远程调用能力时不损失本地调用的语义简洁性。**为实现该目标，RPC 框架需提供一种透明调用机制让使用者不必显式的区分本地调用和远程调用，在前文《浅出篇》中给出了一种实现结构，基于 stub 的结构来实现。下面我们将具体细化 stub 结构的实现。
> - 服务化 [^ servitization reference]（SOA [^ SOA reference]），服务本质上来说就是指RPC，此“服务化”更多指的是对RPC的管理。
> - 单纯的RPC功能实现，其实很简单，无非就是client发起调用，中间某个组件（甚至就是client本身）拦截调用信息，序列化后将信息传输到server端，server端收到调用请求后反序列化，根据请求详细发起实际调用后返回响应传输回给client端。这样的RPC很常见，比如常见的存储过程调用就是一例。但是在一个复杂的业务环境，如何管理和协同这些大量的RPC才是最麻烦的事情。所以，在此谈的“服务化”更多指的是对RPC的管理。

[^ SOA reference]: [百度百科][8]

[^ servitization reference]: [酷勤网][7]

<br>
### 二、起源
- `SUMMARY：` 为了解决不同计算机语言在分布式计算的时候更加简单、高效。
- `RPC`这个概念术语在上世纪80年代由`Bruce Jay Nelson`提出。这里我们追溯下当初开发 RPC 的原动机是什么？在`Nelson`的论文 `Implementing Remote Procedure Calls`中他提到了几点：
1. 简单：`RPC`概念的语义十分清晰和简单，这样建立分布式计算就更容易;
2. 高效：过程调用看起来十分简单而且高效;
3. 通用：在单机计算中过程往往是不同算法部分间最重要的通信机制。 
通俗一点说，就是一般程序员对于本地的过程调用很熟悉，那么我们把`RPC`作成和本地调用完全类似，那么就更容易被接受，使用起来毫无障碍。`Nelson`的论文发表于30年前，其观点今天看来确实高瞻远瞩，今天我们使用的`RPC`框架基本就是按这个目标来实现的。

<br>
### 三、结构
- `SUMMARY：` 参见结构图。
- Nelson 的论文中指出实现 RPC 的程序包括 5 个部分：
	- User
	- User Stub
	- RPC Runtime
	- Server Stub
	- Server
- 关系如下图：![][4]
- `RPC`实现概念结构：![][5]
- 这里 user 就是 client 端，当 user 想发起一个远程调用时，它实际是通过本地调用 user-stub。user-stub 负责将调用的接口、方法和参数通过约定的协议规范进行编码并通过本地的 RPCRuntime 实例传输到远端的实例。远端 RPCRuntime 实例收到请求后交给 server-stub 进行解码后发起本地端调用，调用结果再返回给 user 端。

> *注意*
> - 存根类是一个类，它实现了一个接口，但是实现后的每个方法都是空的。如果一个接口有很多方法，如果要实现这个接口，就要实现所有的方法。但是一个类从业务来说，可能只需要其中一两个方法。如果直接去实现这个接口，除了实现所需的方法，还要实现其他所有的无关方法。而如果通过继承存根类就实现接口，就免去了这种麻烦
> - 每个远程对象都包含一个代理对象stub，当运行在本地Java虚拟机上的程序调用运行在远程Java虚拟机上的对象方法时，它首先在本地创建该对象的代理对象stub（一种面向对象吧）, 然后调用代理对象上匹配的方法。

<br>
### 四、实现
- `SUMMARY：` 应该从性能、是否跨语言平台、框架本身质量等角度进行考虑设计。
- Nelson 论文中给出的这个实现结构也成为后来大家参考的标准范本。大约 10 年前，我最早接触分布式计算时使用的 CORBAR 实现结构基本与此类似。CORBAR 为了解决异构平台的 RPC，使用了 IDL（Interface Definition Language）来定义远程接口，并将其映射到特定的平台语言中。后来大部分的跨语言平台 RPC 基本都采用了此类方式，比如我们熟悉的 Web Service（SOAP），近年开源的 Thrift 等。他们大部分都通过 IDL 定义，并提供工具来映射生成不同语言平台的 user-stub 和 server-stub，并通过框架库来提供 RPCRuntime 的支持。不过貌似每个不同的 RPC 框架都定义了各自不同的 IDL 格式，导致程序员的学习成本进一步上升（苦逼啊），Web Service 尝试建立业界标准，无赖标准规范复杂而效率偏低，否则 Thrift 等更高效的 RPC 框架就没必要出现了。
IDL 是为了跨平台语言实现 RPC 不得已的选择，要解决更广泛的问题自然导致了更复杂的方案。而对于同一平台内的 RPC 而言显然没必要搞个中间语言出来，例如 Java 原生的 RMI，这样对于 java 程序员而言显得更直接简单，降低使用的学习成本。目前市面上提供的 RPC 框架已经可算是五花八门，百家争鸣了。需要根据实际使用场景谨慎选型，需要考虑的选型因素我觉得至少包括下面几点：
<p>
1. 性能指标
2. 是否需要跨语言平台
3. 内网开放还是公网开放
4. 开源 RPC 框架本身的质量、社区活跃度

<br>
### X、注意事项

[1]: http://baike.baidu.com/link?url=x5B7lvoIhnYFGHxl-aBDU1e6fMoy6tGi5kBk4wAcQXhbrzt9jMcK9MLdvf15muBRuA0SqSnsSSA8KK8Z16bUT4c7tevXDNfOHmOX8fWW1XFVsU9d0O3yV8lqHcEp14bpWIHaArt1SiDd7FxaF8hHKuCI5_Z_kLdmg_jlqkPN2Ewu06HvTzxN8VTsq9B3U-rGX18P7inNnsrKf6S-JCnkRq
[2]: http://blog.csdn.net/mindfloating/article/details/39473807#comments
[3]: http://blog.csdn.net/mindfloating/article/details/39474123
[4]: http://p1.bpimg.com/1949/72a9d84907b148fd.png
[5]: http://i1.piimg.com/1949/8dfec1d192903bb1.png
[6]: http://blog.csdn.net/tanga842428/article/details/52159757
[7]: http://www.kuqin.com/shuoit/20140806/341530.html
[8]: http://baike.baidu.com/link?url=jtBndFy3epsEjwIcjg4RVoiPOFcn0necA6FGe1Z8dOj6I3mZV2OOG7wGIx7Ork7vt0xKZFza3gc26wONggWCG_