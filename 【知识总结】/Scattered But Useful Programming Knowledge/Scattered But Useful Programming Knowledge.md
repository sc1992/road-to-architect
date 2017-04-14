# Scattered But Useful Programming Knowledge[^ history version]
--- *Markdown Version*

@(SCATTER)[Notes, Markdown]

> VICTORY LOVES PREPARATION.

[^ history version]: 
- 版本时间信息
> 2017年04月14日 上午11:48:02
> 2017年02月18日 上午11:52:03
> 2016年09月28日 14:00
> 2016年09月13日 10:04

[TOC]

***

## 〇、个性标准
- 一般标准，参考《Study Notes Contents Format Criteria》；
- 每条记录都要标配**`SUMMARY：`**；
- 每条记录有参考就要标注；
- 每条记录最好有实例。

<br>
## 一、NOTES
### 1.1 断言 [^assert]
- **`SUMMARY：`程序设计中的一种（真假，默认判断真）判断逻辑。**
- 在程序设计中，断言（`assertion`）是一种放在程序中的一阶逻辑（如，一个结果为真或是假的逻辑判断式），目的是为了标示与验证程序开发者预期的结果——当程序运行到断言的位置时，对应的断言应该为真。若断言不为真时，程序会中止运行，并给出错误消息。
- *`eg.`断言在`Java`的使用：*
	``` java
	public class AssertExample {
	    public static void main(String[] args) {
	        /* 断言1结果为true，则继续往下执行 */
	        assert true;
	        System.out.println("断言1没有问题，Go！");
	 
	        /* 断言2结果为false，程序终止 */
	        assert false : "断言失败，此表达式的信息将会在抛出异常的时候输出！";
	        System.out.println("断言2有问题，此语句不会被执行！");
	    }
	}
	```
[^assert]: [Wiki](https://zh.wikipedia.org/wiki/%E6%96%B7%E8%A8%80_(%E7%A8%8B%E5%BC%8F))、[百度百科](http://baike.baidu.com/item/%E6%96%AD%E8%A8%80/13021995)

### 1.2 无侵入性（`non-invasiveness`）[^ non-invasiveness]
- **`SUMMARY：`程序设计中指，如果`A`不引用其类或者接口到`B`中，则此时`A`对`B`没有侵入性。**
- 不应当被迫引入框架特定的类和接口到你的业务/领域模型中。
- *`eg.`* `Spring Framework`是一个非侵入性的框架 —— *One of the central tenets of the Spring Framework is that of non-invasiveness; this is the idea that you should not be forced to introduce framework-specific classes and interfaces into your business/domain model.*
[^ non-invasiveness]: [Spring Framework](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/aop.html#aop-introduction-spring-defn)

### 1.3 图片存储多倍字节内容显示问题
- **`SUMMARY：`图片被写入了非单倍自己的字节内容，还是会显示图片本身内容，此时暂时不知道是有效字节是第一倍字节还是前面的字节被后面的覆盖了。**
- *`eg.` [SSM Project][1]*

### 1.4 Java接口异常实现
- **`SUMMARY：`实现类的异常范围要在接口定义的异常之内（含等于）。**

### 1.5 net.sf.json.JSONObject.put(String key, java.util.Map)
- `SUMMARY：`**`JSONObject`实现了`Map`，所以在存储的时候如果`value`是`Map`，则会进一步处理，而不是“所见即所得”。**

### 1.6 数据库unique key 和 NULL问题
- **`SUMMARY：`定义了`unique key`，不一定要使用，所以如果记录中插入了非`unique key`，则不应该报`unique key`相关错误，所以`NULL`值是不会判断`unique key`的。**

### 1.7 高内聚低耦合 [^ high cohesion and low coupling]
[^ high cohesion and low coupling]: [百度百科][2]

- **`SUMMARY：`好的内聚模块应当恰好做一件事情，好的耦合模块应该减少与其他模块的依赖（如，面向接口编程，这样就不会强依赖于具体的实现类，虽然强耦合了接口，但是从实际出发还是会考虑和实现类的耦合，而不是接口的耦合，因为实际情况也是关注具体业务）。**
- 内聚（`cohesion`）：内聚是从功能角度来度量模块内的联系，一个好的内聚模块应当恰好做一件事。它描述的是模块内的功能联系；
- 耦合（`coupling`）：耦合是软件结构中各模块之间相互连接的一种度量，耦合强弱取决于模块间接口的复杂程度、进入或访问一个模块的点以及通过接口的数据。

### 1.8 面向对象、面向组件和面向服务三种编程模式有什么区别？分别适用哪些领域的开发？以及公司成长带来的项目技术架构演化？ [^ OOP、CBD、SOA difference reference]
[^ OOP、CBD、SOA difference reference]: [知乎][3]

- **`SUMMARY：`随着企业逐渐变“大”，依次采用面向对象、面向组件和面向服务编程模式。**
- **无论什么系统变大了之后，就会有一系列问题。**
- 面向`XX`（对象、组件和服务）就是为了解决系统成长过程中遇到问题，而采用的一些范式。
*`eg.`*：你开始给一个企业做`MIS`系统。
- **`【企业很小的时候，采用面向对象】`** **当这个企业很小的时候**，用简单的面向对象编程，数据库`+`服务端`+`浏览器已经满足需求。不需要考虑面向组件开发和`SOA`。
- **`【企业长大到有一定规模的时候，采用面向组件】`**慢慢的，这个**企业长大了**，当初简单的`MIS`系统，变得越来越复杂和庞大。系统中有**很多重复功能的代码**。当这些功能模块的业务有变化时是你头疼的时候：代码中有很多地方要修改，遇到新员工，有时总是改不全。系统上线问题越来越多，需求响应时间也越来越长。经常被客户骂：他`X`的，这么简单的需求搞了半个月都上不了线。去年`xxx`两天就上线了。此时，你会**考虑怎么把系统中那些重复的代码统一起来。你会考虑到组件化，即“面向组件”。**你把一个个比较独立的业务模块约定好接口，开发成组件。以后再有类似的功能模块，直接调用这个组件，即节省开发成本，又容易维护。
- **`【企业成为了集团公司，采用面向服务】`**后来，企业**变成了集团公司**。已经上线了很多套各种各样的`MIS`系统。虽然**大部分系统都实现了组件化。但作为一个集团公司，仍然有很多共同的业务**，不同`MIS`系统中有很多功能重复的模块。此时又面临业务升级困难，难以使用的问题：一个需求可能要涉及很多套`MIS`系统的升级。同时每套系统都有独自的界面，客户录入一个数据，要打开`N`个页面，要登陆`N`次，叫苦不迭。各种数据不一致的问题接踵而来。
`SOA`来啦。**架构师把各个系统功能类似的模块抽象成服务，重复的模块再也没有了，不同系统间互相调用服务接口。以前要自己写一大堆代码，现在搞清楚接口，直接调用另一套MIS系统的服务接口就`OK`了**。也有了单点登陆，有了`portal`，有了搜索服务，有了知识库等等。
- **`【重要系统重点维护，双机、热备和负载均衡等】`**但是问题又来了：总有一些很重要的服务，所有的系统都会依赖它，它出一点问题，所有系统都停转。你开始考虑双机，热备，负载均衡。以前用的`IBM`的主机+`Oracle`数据库+`EMC`的存储，再后来买更贵的性能更好的。
- **`【使用开源产品、分布式，因为钱都给了收费产品】`**慢慢的你发现，企业挣的钱都他妈的给了`IOE`。你开始考虑分布式，开始考虑使用开源产品。
（先写到这儿）

### 1.9 Java应用架构的演化之路 [^ Java Architecture Evolution Reference]
[^ Java Architecture Evolution Reference]: [ImportNew][4]

### 1.10 分布式和集群 [^ 分布式和集群 reference]
[^ 分布式和集群 reference]: [知乎][5]

- 分布式
	- **`SUMMARY：`一个业务分拆多个子业务，部署在不同的服务器上，是一种工作方式。**
- 集群
	- **`SUMMARY：` 同一个业务，部署在多个服务器上，是一种物理形态。**

- *`eg.`概念示例：*
	- 小饭店原来只有一个厨师，切菜洗菜备料炒菜全干。后来客人多了，厨房一个厨师忙不过来，又请了个厨师，两个厨师都能炒一样的菜，这两个厨师的关系是集群。为了让厨师专心炒菜，把菜做到极致，又请了个配菜师负责切菜，备菜，备料，厨师和配菜师的关系是分布式，一个配菜师也忙不过来了，又请了个配菜师，两个配菜师关系是集群。

### 1.11 Java类中变量、块加载顺序
- **`SUMMARY：`先静态、后动态（块），最后构造方法完成对象的建立。**
- *`eg.`代码实例：*
	```
	package com.cmc.j2se;
	
	/**
	 * 类加载顺序
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月18日 上午11:55:54
	 */
	public class ClassLoadSequence { // 第一步，准备加载类
	
	    public static void main(String[] args) {
	        // 第四步，new一个类
	        new ClassLoadSequence();
	    }
	
	    // 第二步，静态变量和静态代码块，加载顺序由编写先后决定
	    static int num = 4;
	
	    {
	        num += 3;
	        // 第五步，按照顺序加载匿名代码块，代码块中有打印
	        System.out.println("b");
	    }
	
	    int a = 5; //6.第六步，按照顺序加载变量
	
	    // 第七步，按照顺序打印c
	    {
	        System.out.println("c");
	    }
	
	    // 第八步，最后加载构造函数，完成对象的建立
	    ClassLoadSequence() {
	        System.out.println("d");
	    }
	
	    // 第三步，静态块，因为有输出，故打印a
	    static {
	        System.out.println("a");
	    }
	
	    // 静态方法，调用的时候才加载，注意看，e没有加载
	    static void run() {
	        System.out.println("e");
	    }
	
	}
	```

	> *注意*
	> - 类中的静态属性会被加入到类对象（也可以叫做类的模板，是类的描述）的构造器中，静态方法也会被加入到类对象中；
	> - 当**第一次使用类时**，`JVM`会通过类加载器，加载类对象，从而**初始化静态属性**，并装入类的方法，包括静态方法和实例方法（**方法不会被调用，只是加载**，从这个意义上来说，静态方法和实例方法是类似的）；
	> - 当创建类的实例对象时，`JVM`会调用类的构造器，从而初始化类的属性。
	> - 为什么在类加载的时候会初始化静态变量不会调用静态方法？
	>  - 方法是对现实世界中对象行为的封装和抽象，虽然静态方法是属于类本身的（非类的实例对象），但是这个只是从语法调用上来说，方法被调用还是要涉及到实际世界中对象（`Java`世界中也可以是类）的交互，即**实际行为的发生才能促使（面向实际生活中对象的`Java`）方法被调用，方法调用是一个动态的过程**。而**静态变量（静态属性）则是类的属性（动态变量更偏向是一种对象的属性），那么类的生成必然伴随着其属性的生成**。

### 1.12 synchronized
- **`SUMMARY：` `Java`语言的关键字，修饰方法或代码块的时候，能够保证在同一时刻最多只有一个线程执行该段代码。**
- `Java`语言的关键字，当它用来修饰一个方法或者一个代码块的时候，能够保证在同一时刻最多只有一个线程执行该段代码；
- 为了解决线程并发问题。

### 1.13 语法和语义 [^ grammer and semantic reference]
[^ grammer and semantic reference]: [CSDN][6]、[天涯社区][7]

### 1.14 StackOverflowError [^ stackoverflowerror reference]
[^ stackoverflowerror reference]: [OSChina][8]

- **`SUMMARY：`栈溢出，当递归太深（往往是没有终止条件所致）的时候会出现。**
- java.lang.stackoverflow
	- Thrown when a stack overflow occurs because an application recurses too deeply.

### 1.14 classpath:和classpath*:
- **`SUMMARY：` `classpath:`从`class`目录下加载第一个对应的文件，`classpath*:`加载`class`目录下的所有文件。**
- **classpath:**
	- 只能从`class`目录下加载第一个对应的文件。
- **classpath*:**
	- 加载`class`目录下的所有文件。

<br>
## 二、注意事项

[1]: https://github.com/CountMCristo/SSM
[2]: http://baike.baidu.com/link?url=HC7C_GxgR7wqwpCl0isAsZIufXHCLEYDIl59Ux-HtCDt66kiNICqHIBo5hyZXb1vNS_j6ovGj9G_-TXRje189P6nMNFxfeLAuacKsA9Oxko6gmY1g0b9mLjWFL4GML41hmnEokErjboybypiRYXim_
[3]: https://www.zhihu.com/question/20478119/answer/25292423
[4]: http://www.importnew.com/19376.html
[5]: https://www.zhihu.com/question/20004877
[6]: http://blog.csdn.net/zjh0723/article/details/3601345
[7]: http://wenda.tianya.cn/question/7cdcfdf6d5c04e14?sort=t
[8]: http://tool.oschina.net/apidocs/apidoc?api=jdk_7u4