## Web服务器的工作原理（一）[^history version][^references]

@(**服务器**)[Web服务器, Notes]

[^references]: [HowToDoInJava][5]

> VICTORY LOVES PREPARATION

[^history version]: 
> 2016年10月23日 21:22
> 2016年06月02日 09:42
> 2016年05月15日 15:40

[TOC]

***
### 〇、思维导图
![](http://i4.buimg.com/567571/a11e5009099bc413.png)

<br>
### 一、web服务器、应用服务器和web容器
#### 1.1 web服务器
- `SUMMARY：`驻留于因特网上，可以向浏览器等Web客户端提供文档的计算机的程序。
- 在`Mosaic`浏览器（通常被认为是第一个图形化的web浏览器）和超链接内容的初期，演变出了“web服务器”的新概念，它通过HTTP协议来提供静态页面内容和图片服务。在那个时候，大多数内容都是静态的，并且HTTP 1.0只是一种传送文件的方式。但在不久后web服务器提供了`CGI`功能。这意味着我们可以为每个web请求启动一个进程来产生动态内容。现在，HTTP协议已经很成熟了并且web服务器变得更加复杂，拥有了像缓存、安全和session管理这些附加功能。随着技术的进一步成熟，我们从Kiva和NetDynamics学会了公司专属的基于Java的服务器端技术。这些技术最终全都融入到我们今天依然在大多数应用开发里使用的JSP中。<br>![](http://p1.bqimg.com/567571/899f6c2041f6156e.gif)

#### 1.2 应用服务器
- `SUMMARY：`通过各种协议把商业逻辑曝露给客户端的计算机程序。
- 在同一时期，应用服务器已经存在并发展很长一段时间了。一些公司为Unix开发了Tuxedo（面向事务的中间件）、TopEnd、Encina等产品，这些产品都是从类似IMS和CICS的主机应用管理和监控环境衍生而来的。大部分的这些产品都指定了“封闭的”产品专用通信协议来互连胖客户机(“fat” client)和服务器。在90年代，这些传统的应用服务器产品开始嵌入HTTP通信功能，刚开始要利用网关来实现。不久后它们之间的界线开始变得模糊了。
  <br>
同时，web服务器越来越成熟，可以处理更高的负载、更多的并发和拥有更好的特性；应用服务器开始添加越来越多的基于HTTP的通信功能。所有的这些导致了web服务器与应用服务器的界线变得更窄了。
<br>
目前，“应用服务器”和“web服务器”之间的界线已经变得模糊不清了。但是人们还把这两个术语区分开来，作为强调使用。
<br>
当有人说到“web服务器”时，你通常要把它认为是以HTTP为核心、web UI为向导的应用。当有人说到“应用服务器”时，你可能想到“高负载、企业级特性、事务和队列、多通道通信（HTTP和更多的协议）”。但现在提供这些需求的基本上都是同一个产品。

#### 1.3 web容器
- `SUMMARY：`处理客户端请求的服务程序。在Java方面，web容器一般是指`Servlet`容器。<br>![](http://p1.bpimg.com/567571/ae7c8eff077ccf82.jpg)
- Servlet容器是与Java Servlet交互的web容器的组件。web容器负责管理Servlet的生命周期、把URL映射到特定的Servlet、确保URL请求拥有正确的访问权限和更多类似的服务。综合来看，Servlet容器就是用来运行你的Servlet和维护它的生命周期的运行环境。

<br>
### 二、Servlet
- `SUMMARY：` Servlet是能够根据请求动态生成内容的服务端组件。
- Servlet是一个在javax.servlet包里定义的接口。它为Servlet的生命周期声明了三个基本方法——`init()`、`service()`和`destroy()`。每个Servlet都要实现这些方法（在SDK里定义或者用户定义）并在它们的生命周期的特定时间由服务器来调用这些方法。
<br>
类加载器通过懒加载（`lazy-loading`）或者预加载（`eager loading`）自动地把Servlet类加载到容器里。**每个请求都拥有自己的线程，而一个Servlet对象可以同时为多个线程服务。**当Servlet对象不再被使用时，它就会被JVM当做垃圾回收掉。
<br>
- 懒加载的Servlet<br>![](http://p1.bpimg.com/567571/7e8c23b4118f62ee.jpg)![](http://p1.bpimg.com/567571/0ae11523a99fcc9c.jpg)
<br>
- 预加载的Servlet<br>![](http://p1.bpimg.com/567571/852ddbd64f5698e4.jpg)![](http://p1.bpimg.com/567571/f8ebf0ff1e95af0b.jpg)

<br>
### 三、ServletContext
- `SUMMARY：` Servlet的上下文环境。
- 当Servlet容器启动时，它会部署并加载所有的web应用。当web应用被加载时，Servlet容器会一次性为每个应用创建Servlet上下文（ServletContext）并把它保存在内存里。Servlet容器会处理web应用的web.xml文件，并且一次性创建在web.xml里定义的Servlet、Filter和Listener，同样也会把它们保存在内存里。当Servlet容器关闭时，它会卸载所有的web应用和ServletContext，所有的Servlet、Filter和Listner实例都会被销毁。 
	
	从Java文档可知，ServletContext定义了一组方法，Servlet使用这些方法来与它的Servlet容器进行通信。例如，用来获取文件的`MIME`类型、转发请求或者编写日志文件。在web应用的部署文件（`deployment descriptor`）标明“分布式”的情况下，web应用的每一个虚拟机都拥有一个上下文实例。在这种情况下，不能把Servlet上下文当做共享全局信息的变量（因为它的信息已经不具有全局性了）。可以使用外部资源来代替，比如数据库。

<br>
### 四、ServletRequest和ServletResponse
- `SUMMARY：`封装请求和响应数据。
- Servlet容器包含在web服务器中，web服务器监听来自特定端口的HTTP请求，这个端口通常是80。当客户端（使用web浏览器的用户）发送一个HTTP请求时，Servlet容器会创建新的HttpServletRequest和HttpServletResponse对象，并且把它们传递给已经创建的Filter和URL模式与请求URL匹配的Servlet实例的方法，所有的这些都使用同一个线程。

	request对象提供了获取HTTP请求的所有信息的入口，比如请求头和请求实体。response对象提供了控制和发送HTTP响应的便利方法，比如设置响应头和响应实体（通常是JSP生成的HTML内容）。当HTTP响应被提交并结束后，request和response对象都会被销毁。

<br>
### 五、Session和Cookie
- `SUMMARY：`存储特定用户会话所需的属性及配置信息 | 为了辨别用户身份、进行 session 跟踪而储存在用户本地终端上的数据。
- 当客户端第一次访问web应用或者第一次使用request.getSession()获取HttpSession时，Servlet容器会创建Session，生成一个long类型的唯一ID（你可以使用session.getId()获取它）并把它保存在服务器的内存里。Servlet容器同样会在HTTP响应里设置一个Cookie，cookie的名是JSESSIONID并且cookie的值是session的唯一ID。

	根据HTTP cookie规范（正规的web浏览器和web服务器必须遵守的约定），在cookie的有效期间，客户端（web浏览器）之后的请求都要把这个cookie返回给服务器。Servlet容器会利用带有名为JSESSIONID的cookie检测每一个到来的HTTP请求头，并使用cookie的值从服务器内容里获取相关的HttpSession。

	HttpSession会一直存活着，除非超过一段时间没使用。你可以在web.xml里设定这个时间段，**默认时间段是30分钟**。因此，如果客户端已经超过30分钟没有访问web应用的话，Servlet容器就会销毁Session。之后的每一个请求，即使带有特定的cookie，都再也不会访问到同一个Session了。servletcontainer会创建一个新的Session。
	
	另外，**在客户端的session cookie拥有一个默认的存活时间，这个时间与浏览器的运行时间相同。**因此，当用户关闭浏览器后（所有的标签或者窗口），客户端的Session就会被销毁。重新打开浏览器后，与之前的Session关联的cookie就再也不会被发送出去了。再次使用request.getSession()会返回一个全新的HttpSession并且使用一个全新的session ID来设置cookie。
<br>
- 现有的Session<br>![](http://p1.bpimg.com/567571/41d89deb046023fd.jpg)
<br>
- 新的Session<br>![](http://p1.bpimg.com/567571/bce2eb397bfd84fa.jpg)

<br>
### 六、线程安全
- `SUMMARY：`不应该使用Servlet或者Filter的实例变量来存放任何的请求或者会话范围内的数据。
- 所有的请求都在共享Servlet和Filter，这是Java的一个很棒的特性，它是多线程的并且不同的线程（即HTTP请求）可以使用同一个实例。否则，对每一个请求都重新创建一个实体会耗费很多的资源。<br>![](http://p1.bpimg.com/567571/49ba6f2eb1184a63.jpg)
因此为了线程安全，不应该使用`Servlet`或者`Filter`的实例变量来存放任何的请求或者会话范围内的数据。这些数据会被其他`Session`的所有请求共享。`eg:`
	``` java
	public class MyServlet extends HttpServlet
	{
	    private Object thisIsNOTThreadSafe; //Don't to this
	 
	    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException
	    {
	        Object thisIsThreadSafe;
	 
	        thisIsNOTThreadSafe = request.getParameter("foo"); // BAD!! Shared among all requests!
	        thisIsThreadSafe = request.getParameter("foo"); // OK, this is thread safe.
	    }
	}
	```

<br>		

## ELSE
 
### 七、声明式事务问题
1. 引入事务`spring-tx`的`dtd`文件；
2. 配置`JDBC`；
3. 启动事务`<tx:annotation-driven />`；
4. *实例*
	- `db.xml`
	``` xml
	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xmlns:p="http://www.springframework.org/schema/p"
		xmlns:context="http://www.springframework.org/schema/context"
		xmlns:tx="http://www.springframework.org/schema/tx"
		xsi:schemaLocation="
        http://www.springframework.org/schema/beans 
        http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
        http://www.springframework.org/schema/context 
        http://www.springframework.org/schema/context/spring-context-3.0.xsd
        http://www.springframework.org/schema/tx 
        http://www.springframework.org/schema/tx/spring-tx-3.0.xsd"
		default-autowire="byName">
	
	<bean id="dataSource" class="org.apache.commons.dbcp.BasicDataSource"
		destroy-method="close">
		<property name="driverClassName">
			<value>${jdbc.driver}</value>
		</property>
		<property name="url">
			<value>${jdbc.url}</value>
		</property>
		<property name="username">
			<value>${jdbc.username}</value>
		</property>
		<property name="password">
			<value>${jdbc.password}</value>
		</property>
		<property name="maxActive">
			<value>1800</value>
		</property>
		<property name="maxIdle">
			<value>1800</value>
		</property>
		<property name="minIdle">
			<value>16</value>
		</property>
		<property name="validationQuery" value="SELECT 1" />
		<property name="testOnBorrow" value="true" />
	</bean>

	<!--Transaction Manager -->
	<bean id="transactionManager" class="org.springframework.jdbc.datasource.DataSourceTransactionManager">
			 <property name="dataSource" ref="dataSource" />
	</bean>

	<tx:annotation-driven transaction-manager="transactionManager"/>
	```
	- `PersonServiceImpl`
	``` java
	@Transactional
	public class PersonServiceImpl implements PersonService {
	
		  /* business logic is omitted... */
		  
	}
	```
	
> *注意*
> - `@Transactional`注解可以标注类和方法；
> - 一般情况下，运行期例外（`unchecked`例外，也就是说该异常系统不会捕获）`RuntimeException`事务会回滚的，否则（`checked`例外，该异常系统会捕获）事务不会回滚，当然可以通过属性指定所有异常都要回滚(*`rollbackFor`*)或者某些异常不需要回滚(*`noRollbackFor`*)；
> - Spring事务只在其定义的`WebApplicationContext`[^Spring Web MVC WebApplicationContext]中起作用，`Spring Web MVC`中典型的上下文层级关系如下： 
[^Spring Web MVC WebApplicationContext]: [Spring WebApplicationContext][4]

> **- 典型配置**
> <p>
>![](http://i2.buimg.com/567571/256a7e1756a72f9a.png)
> - `Servlet WebApplicationContext`对应`org.springframework.web.servlet.DispatcherServlet`加载内容
> - `Root WebAplicationContext`对应`org.springframework.web.context.ContextLoaderListener`加载内容
> <p>
> **- 单上下文配置**
> <p>
>![](http://i2.buimg.com/567571/ed1dfbb70939bd66.png)
> - 设置`org.springframework.web.servlet.DispatcherServlet`的初始参数`contextConfigLocation`为空即可

[1]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#overview-dependency-injection
[2]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
[3]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#beans-dependencies
[4]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#mvc-servlet
[5]: http://howtodoinjava.com/for-fun-only/a-birds-eye-view-on-how-web-servers-work/