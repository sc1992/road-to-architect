# Spring Study Notes [^ history version]

@(J2EE)[Spring [^Spring Framework], Notes]

[^Spring Framework]: [Spring Framework][2]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 2017年04月05日 下午01:41:44
> 2017年04月05日 上午11:36:39
> 2017年02月15日 下午02:42:32
> 2017年02月15日 下午01:37:40
> 2017年02月13日 下午04:36:27
> 2016年12月29日 15:42
> 2016年09月08日 10:15
> 2016年09月07日 18:29
> 2016年09月02日 11:32
> 2016年08月28日 10:16
> 2016年06月03日 10:42
> 2016年01月26日 00:00 
> 2016年01月21日 00:00
> 2015年12月28日 00:00
> 2015年12月01日 00:00
> 2015年11月03日 00:00
> 2015年07月31日 00:00

[TOC]

***
## 〇、思维导图
![](http://i4.buimg.com/567571/a11e5009099bc413.png)

## 一、简介
### 1.1 架构图 [^Spring Framework Architecture]
- **`SUMMARY：` `Spring`是一个分层的`JavaSE`、`JavaEE`一站式（`full-stack`）轻量级开源框架。**
- 有必要简要介绍各个模块用处。
![](http://i4.buimg.com/567571/2aa77a8ed1703b69.png)
[^Spring Framework Architecture]: [Spring Framwork Architecture](http://i4.buimg.com/567571/552745504060d16d.png)

> *注意*
> - “一站式”（**提供完整的服务**）：让顾客享受到一次性完成或一步到位的便捷（俗称一条龙服务），不再需要东奔西走，节省了时间，提高了效率，以适应现代人快节奏、高效率的要求。

<br>
### 1.2 [两大特性][1]
#### 1.2.1 控制反转（`IoC`）
- **`SUMMARY：`对象的（创建和维护）控制权从类本身（或者程序员 ）移交给了`Spring`容器。**
	- 应用本身不负责对象的创建和维护，而是交给外部容器（*特指`Spring`容器，下同*）进行控制。这样控制（*对象的创建和维护*）权就由应用转移到了外部容器。
#### 1.2.2 依赖注入（`DI`）
- **`SUMMARY：` 对象依赖`Spring`容器进行注入。**
	- 在运行期，由外部容器动态地将依赖对象注入到组件中的过程。

### 1.3 优点
#### 1.3.1 **高内聚、低耦合**
- **`SUMMARY：`通过控制反转和依赖注入使其本身高内聚、低耦合。**
- `Spring`通过容器自动注入`Bean`，这样的话就不用类本身`new`需要的对象，减少了个性，提高了共性，降低了与其他具体类之间的耦合），进一步实现了软件各层，包括控制层、业务层、持久层、领域层、视图层之间的解耦。

#### 1.3.2 众多服务
 - **`SUMMARY：`提供了众多的服务，包括事务管理服务、`JMS`服务等。**
- 事务管理服务（*声明式事务*）；
- `JMS`服务；
- `Spring Core`服务；
- 持久化服务等。

	> *注意*
	> - 当我们使用容器提供的服务的时候，如事物管理服务，此时开发人员就不需要手工控制服务，不需要处理事务其他复杂的操作（如，事物传播等）。

#### 1.3.3 AOP技术
- **`SUMMARY：`提供了`AOP`技术，容易实现权限拦截和运行监控等功能。**
- 使用它很容易实现**权限拦截、运行监控**等功能；
#### 1.3.4 众多辅助类
- **`SUMMARY：`提供了众多的辅助类。**
- `Spring`提供了众多的辅助类，`EG`：
	- 上下文辅助类，`ClassPathXMLApplicationContext`；
	- `JDBC`辅助类，`JdbcTemplate`。

#### 1.3.5 对主流应用框架提供集成支持
- **`SUMMARY：`对主流应用框架提供了集成支持。**
- 对主流应用框架提供了集成支持：
	- `Hibernate`；
	- `Mybatis`；
	- `Hibernate`；
	- `Struts`等。

### 1.4 缺点
- **`SUMMARY：`配置文件，中断了应用程序的逻辑，使代码变得不完整，不直观，此时单从源码无法完全把握应用的所有行为。**
- 因为`Spring`框架是分层的，一层的不好可以用另一层代替，例如`XML`被注解代替等，所以缺点不是很多；
- **中断了应用程序的逻辑，使代码变得不完整，不直观。此时单从源码无法完全把握应用的所有行为；**
- 将原本应该代码化的逻辑配置化，增加了出错的机会以及额外的负担；
- **通常来说，维护代码要比维护配置文件，或者配置文件+代码的混合体要容易的多；**
- 调试阶段不直观，后期的`bug`对应阶段，不容易判断问题所在。

	> *注意*
	> - 高内聚：内聚是从功能角度来度量模块内的联系，**一个好的内聚模块应当恰好做一件事**。它描述的是模块内的功能联系；
	> - 低耦合：耦合是软件结构中各模块之间相互连接的一种度量，耦合强弱取决于模块间接口的复杂程度、进入或访问一个模块的点以及通过接口的数据。*`eg.`* 面向接口编程就降低了对实现类的耦合，这样在更换实现类的时候不需要修改代码。

<br>
## 二、注解
### 2.1 `@Autowired`
- `@Autowired`是先根据变量的名字在容器中找与名字相同的`id`的`bean`（此时类型也必须符合，当然如果`Spring`自动转换了，那也是行的，例如，`int`自动转换为`double`）；
- 如果不符合上面，那就按照类型找，如果找到了且只有一个该类型`bean`，则注入，找到多个同类型的`bean`则报错，找不到也会报错（要求至少有一个匹配）。
### 2.2 `@Resource`
- 按照名称进行注入，如果没有则报错。
### 2.3 `@Qualifier`
- 名称限定词。

<br>
## 三、Bean
### 3.1 Bean的管理
- 通过`<context:component-scan base-package=”” />`或者手动配置`Bean`把类纳入`Spring`的管理。
- 注解解析：
	- `@Component`：
		- 泛指组件，标注的类都会纳入`Spring`容器管理。
	- `@Controller`：
		- 标注`Controller`层。
	- `@Service`：
		- 标注`Service`层。
	- `@Repository`：
		- 标注`Dao`层。
	- `@Qualifier`：
		- 只使用`@Autowired`注解进行注入的时候要求匹配的`bean`有且只有一个，当有多个的时候`Spring`允许通过`@Qualifier`注解进行具体`Bean`名称的指定，这样`@Autowired`和`@Qualifier`结合就从`byType`注入方式变成了`byName`，当没有一个`bean`匹配的时候可以使用`@Autowired(Require = false)`，此时并不一定需要注入标注的`bean`。

> *注意*
> - `@Componet`是`@Controller`、`@Service`和`@Repository`的统称，作用（暂时）和后三者相同，都是通过注解方式把`Bean`纳入`Spring`容器管理，但是为什么要使用后三者呢，这是为了以后对后三者进行功能上的扩展。

### [3.2 Bean的注入][3] [^ spring bean injection reference]
[^ spring bean injection reference]: [ITEYE][9]

#### 3.2.1 基于`setter`方法注入 [^Spring Bean Injection_Setter]
-  配置`<bean>`的子标签`<property>`子标签；
-  被注入的类中设置相应的`setter`方法。
- *`eg.`代码示例：*
	``` java
	public class SimpleMovieLister {
	    /** the SimpleMovieLister has a dependency on the MovieFinder */
	    private MovieFinder movieFinder;
	    
	    /* a setter method so that the Spring container can inject a MovieFinder */
	    public void setMovieFinder(MovieFinder movieFinder) {
	        this.movieFinder = movieFinder;
	    }
	
	    /* business logic that actually uses the injected MovieFinder is omitted... */
	}
	```	
	``` xml
	<bean id="simpleMovieLister" class="cn.com.ucmed.demo.SimpleMovieListener">
		<property name="movieFinder" ref="movieFinder" />
	</bean>
	
	<bean id="movieFinder" class="cn.com.ucmed.demo.MovieFinder" />
	```

#### 3.2.2 基于构造方法注入 [^Spring Bean Injection_Constructor]
- 配置`<bean>`的子标签`<constructor-arg>`子标签;
- 被注入的类中设置相应的构造方法。
- *`eg.`代码示例：*
	``` java
	public class SimpleMovieLister {
	    /* the SimpleMovieLister has a dependency on a MovieFinder */
	    private MovieFinder movieFinder;
	    
	    /* a constructor so that the Spring container can inject a MovieFinder */
	    public SimpleMovieLister(MovieFinder movieFinder) {
	        this.movieFinder = movieFinder;
	    }
	    
	    /* business logic that actually uses the injected MovieFinder is omitted... */
}
	```
	
	``` xml
	<bean id="simpleMovieListener" class="cn.com.ucmed.demo.SimpleMovieListener">
		<constructor-arg ref="movieFinder"/>
	</bean>
		
	<bean id="movieFinder" class="cn.com.ucmed.demo.MovieFinder" />
	```
		
	> *注意*
	> - 注入依赖对象可以采用手动装配（属性注入、集合注入、构造方法注入、注解注入）和自动装配，实际使用中建议使用手动注入；
	> - `<context:component-scan base-package=”” />`包含了`<context:annotation-config/>`。

####  3.2.3 基于工厂方法注入
##### 3.2.3.1 静态工厂方法注入
- *`eg.`代码实例：*
``` java
<!-- 静态工厂的方法注入 -->
<bean id="random" class="com.cmc.dp.StaticFactoryBean" factory-method="createRandom" />
```
- 该`bean`直接返回`com.cmc.dp.StaticFactoryBean.createRandom()`方法返回的值。
	
##### 3.2.3.2 实例工厂方法注入
- *`eg.`代码实例：*
``` java
<!-- 实例工厂的方法注入 -->
<bean id="factoryBean" class="com.cmc.dp.FactoryBean" />
<bean id="random1" factory-bean="factoryBean" factory-method="createRandom" />
```
- 该`bean`直接返回`com.cmc.dp.FactoryBean`对象的`createRandom()`方法返回的值。
	
> *注意*
> - 静态工厂方法注入不需要实例化`bean`，所以可以直接在`bean`生命上调用`factory-method`，而实例工厂方法注入的时候需要对象，所以需要通过`factory-bean=""`来来引用的。
	
[^Spring Bean Injection_Constructor]: [Spring Constructor-based dependency injection](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#beans-constructor-injection)

[^Spring Bean Injection_Setter]: [Spring Setter-based dependency injection](http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#beans-setter-injection)

### 3.3 Bean的作用域
- `singleton`（*单例*）、`prototype`（*原型*）；
- 默认情况下`bean`都是`singleton`的（*可以通过指定`bean`的属性`scope`的值进行修改，也可以在`beans`节点进行批量设置*）。

> *注意*
> - `scope`为`singleton`的`bean`可以通过`init-lazy`属性（*`true` | `false`*）修改类实例化的时间。*此时不管有没有设置`init-lazy`，如果设置`init-method`属性，则会在加载容器的时候执行`init-method`指定的方法，在`bean`被销毁（*关闭容器的时候*）的时候执行`destory-method`方法；*
> - `singleton`的`bean`在容器加载的时候就会进行实例化，而`prototype`的则会在使用`bean`的时候才会被实例化；
> - 可以通过延迟加载`bean`，减少容器初始化的负担，但是如果其配置或者内部（如，连接数据库）发生错误，就不能在容器加载的时候被检测到。

<br>	
## 四、AOP
### 4.1 简介
- **`SUMMARY：`面向切面的编程。**
- `AOP`（`Aspect-Oriented Programming`，面向切面编程），可以说是`OOP`（`Object-Oriented Programing`，面向对象编程）的补充和完善。`OOP`引入封装、继承和多态性等概念来建立一种对象层次结构，用以模拟公共行为的一个集合。当我们需要为分散的对象引入公共行为的时候，`OOP`则显得无能为力。也就是说，`OOP`允许你定义从上到下的关系，但并不适合定义从左到右的关系。例如日志功能。日志代码往往水平地散布在所有对象层次中，而与它所散布到的对象的核心功能毫无关系。对于其他类型的代码，如安全性、异常处理和透明的持续性也是如此。这种散布在各处的无关的代码被称为横切（`cross-cutting`）代码，在`OOP`设计中，它导致了大量代码的重复，而不利于各个模块的重用；
- 而`AOP`技术则恰恰相反，它利用一种称为“横切”的技术，剖解开封装的对象内部，并将那些影响了多个类的公共行为封装到一个可重用模块，并将其名为`aspect`，即切面。**所谓*切面*，简单地说，就是将那些与业务无关，却为业务模块所共同调用的逻辑或责任封装起来，便于减少系统的重复代码，降低模块间的耦合度，并有利于未来的可操作性和可维护性。**`AOP`代表的是一个横向的关系，如果说*对象*是一个空心的圆柱体，其中封装的是对象的属性和行为；那么面向方面编程的方法，就仿佛一把利刃，将这些空心圆柱体剖开，以获得其内部的消息。而剖开的切面，也就是所谓的*切面*了。然后它又以巧夺天功的妙手将这些剖开的切面复原，不留痕迹。
### 4.2 示意图 
- **`SUMMARY：`参考代理模式（`Proxy Pattern`）。**
<br> ![](http://i4.buimg.com/567571/262fabe61e3fdbe0.png)
### 4.3 实现
- **`SUMMARY：`根据实际情况（有没有接口）自动使用`JDK Proxy`和`CGLIB`两种代理方式。**
#### 4.3.1 基于JDK中的Proxy技术的代理
- **`SUMMARY：`通过在运行期间创建一个接口的实现类来完成对目标对象的代理，所以被代理的类必须实现接口。**
- `JDK`动态代理，只能对实现了接口的类生成代理，而不能针对类，该目标类型实现的接口都将被代理。原理是通过在运行期间创建一个接口的实现类来完成对目标对象的代理。

##### 4.3.1.1 `JDKProxyFactory` 
``` java
package com.cmc.demo.factory;

import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

import org.apache.commons.lang.StringUtils;

/**
 * 使用JDK实现AOP
 * 
 * @author Recognizer
 * @version 2016年09月13日 10:20
 */
public class JDKProxyFactory implements InvocationHandler {

	private Object target;

	public Object createProxyInstance(Object target) {
		this.target = target;
		return Proxy.newProxyInstance(target.getClass().getClassLoader(), target.getClass().getInterfaces(), this);
	}

	@Override
	public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
		if (null != args[0] && StringUtils.equals("Xiao Ming", args[0].toString())) {
			args[0] = "Xiao Wang";
			return method.invoke(this.target, args);
		}
		return null;
	}

}
```
	
##### 4.3.1.2 `UserServiceImpl` 
``` java
package com.cmc.demo.aop;

public class UserServiceImpl implements UserService {

	@Override
	public boolean save(String info) {
		/* business logic is omitted... */
		System.out.println(info);
		return true;
	}
	
	public boolean get() {
		return false;
	}

}
```
	
##### 4.3.1.3 `JDKProxyFacotyTest`
``` java
package com.cmc.demo.factory;

import org.junit.Test;

import com.cmc.demo.aop.UserService;
import com.cmc.demo.aop.UserServiceImpl;

public class JDKProxyFactoryTest {

	@Test
	public void testCreateProxyInstance() throws Exception {
		JDKProxyFactory factory = new JDKProxyFactory();
		UserService userService = (UserService) factory.createProxyInstance(new UserServiceImpl());
		userService.save("Xiao Ming");
	}
	
}
```
``` java
输出结果：Xiao Wang
```

#### 4.3.2 使用`CGLIB`实现`AOP`
- **`SUMMARY：`通过生成要实现代理类的子类进行代理，所以被代理的类不能声明为`final`。**
- 针对类实现代理，对是否实现接口并无要求。原理是对指定的类生成一个子类，覆盖其中的方法，因为是继承，所以被代理的类或方法不能声明为`final`。
##### 4.3.2.1 `CGLIBProxy`
``` java
package com.cmc.service.proxybean;

import java.lang.reflect.Method;

import org.springframework.cglib.proxy.Enhancer;
import org.springframework.cglib.proxy.MethodInterceptor;
import org.springframework.cglib.proxy.MethodProxy;

/**
 * CGLIB Proxy
 * 
 * @author HT.LCB
 * @since 2016年11月21日 下午2:45:21
 */
public class CGLIBProxy implements MethodInterceptor {

    private Object target;

    public Object getInstance(Object target) {
        this.target = target;
        Enhancer enhancer = new Enhancer();
        enhancer.setSuperclass(this.target.getClass());
        enhancer.setCallback(this);
        return enhancer.create();
    }

    @Override
    public Object intercept(Object obj, Method method, Object[] args, MethodProxy proxy) throws Throwable {
        Object rst = null;
        System.out.println("before method.");
        rst = proxy.invokeSuper(obj, args);
        System.out.println("after method.");
        return rst;
    }

    public static void main(String[] args) {
        ProxyBeanService proxyBeanServiceCGLibProxy = (ProxyBeanService) new CGLibProxy().getInstance(new ProxyBeanServiceImpl());
        proxyBeanServiceCGLibProxy.save("LCB");
    }

}
```
> *注意*
> - `Spring AOP`使用两种代理方式（`JDK Proxy`和`CGLIB`）的策略：
>  - 如果目标对象实现了接口，默认情况下会采用`JDK`的动态代理实现`AOP`；
>  - 如果目标对象实现了接口，可以强制使用`CGLIB`实现`AOP`；
>  - 如果目标对象没有实现了接口，必须采用`CGLIB`库；
>  - `Spring`会自动在`JDK`动态代理和`CGLIB`之间转换。

	
### 4.4 AOP名词简介
#### 4.4.1 切面（`aspect`）
- **`SUMMARY：`就是系统的横切关注点，封装为拦截的类，*`eg.`*`AopInterceptor `。**
- 一个关注点的模块化，这个关注点可能会横切多个对象。
#### 4.4.2 连接点（`joinpoint`）
- **`SUMMARY：`要拦截的方法，*`eg.`*例子中符合条件的方法。**
- 在程序执行过程中某个特定的点，比如某方法调用的时候或者处理异常的时候。在`Spring AOP`中，一个连接点总是表示一个方法的执行。
#### 4.4.3 切入点（`pointcut`）
- **`SUMMARY：`匹配连接点（要拦截方法）的断言。**
- 匹配连接点的断言。通知和一个切入点表达式关联，并在满足这个切入点的连接点上运行（例如，当执行某个特定名称的方法时）。切入点表达式如何和连接点匹配是`AOP`的核心：`Spring`缺省使用`AspectJ`切入点语法。
#### 4.4.4 通知（`advice`）
- **`SUMMARY：`在拦截方法之后进行处理的方法。**
- 在切面的某个特定的连接点上执行的动作；
- 包含**前置**、**后置**、**返回**、**环绕**和**异常**通知。
##### 4.4.4.1 前置通知（`Before advice`）
- 在某连接点之前执行的通知，但这个通知不能阻止连接点之前的执行流程（除非它抛出一个异常）。
##### 4.4.4.2 后置通知（`After advice`）
- 在方法正常执行通过之后执行的通知。
##### 4.4.4.3 返回通知（`After returning advice`）
- 在某连接点正常完成并返回后执行的通知，*`eg.`*一个方法没有抛出任何异常，正常返回。
##### 4.4.4.4 环绕通知（`Around Advice`）
- 包围一个连接点的通知，如方法调用。这是最强大的一种通知类型。环绕通知可以在方法调用前后完成自定义的行为。它也会选择是否继续执行连接点或直接返回它自己的返回值或抛出异常来结束执行。
##### 4.4.4.5 异常通知（`After throwing advice`）
- 在方法抛出异常退出时执行的通知。
#### 4.4.5 目标对象（`target`）
- **`SUMMARY：`被一个或者多个切面所通知的对象。**
- 被一个或者多个切面所通知的对象。也被称做被通知（`advised`）对象。 既然`Spring AOP`是通过运行时代理实现的，这个对象永远是一个被代理（`proxied`）对象。

	> *注意*
	> - `Spring`普通的对象就是`bean`的简单对象，`AOP`相关对象是通过运行时代理实现的，那么该对象就是代理对象。

#### 4.4.6 织入（`weave`）
- **`SUMMARY：`把切面连接到需要被通知的对象上。**
- 把切面连接到其它的应用程序类型或者对象上，并创建一个被通知的对象。这些可以在编译时（例如使用`AspectJ`编译器），类加载时和运行时完成。`Spring`和其他纯`Java AOP`框架一样，在运行时完成织入。
#### 4.4.7 引入（`introduction`）
- **`SUMMARY：`给代理的对象添加额外的方法或者属性。**
- 用来给一个类型声明额外的方法或属性（也被称为连接类型声明（`inter-type declaration`））。`Spring`允许引入新的接口（以及一个对应的实现）到任何被代理的对象。例如，你可以使用引入来使一个`bean`实现`IsModified`接口，以便简化缓存机制。
### 4.5 实例
#### 4.5.1 实例（基于注解版本）
- `Beans.xml`
	``` xml
	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
		xmlns:context="http://www.springframework.org/schema/context"
		xmlns:mvc="http://www.springframework.org/schema/mvc"
		xmlns:aop="http://www.springframework.org/schema/aop"
		xsi:schemaLocation="
		http://www.springframework.org/schema/beans 
		http://www.springframework.org/schema/beans/spring-beans.xsd
		http://www.springframework.org/schema/context 
		http://www.springframework.org/schema/context/spring-context-3.0.xsd
		http://www.springframework.org/schema/mvc 
		http://www.springframework.org/schema/mvc/spring-mvc-3.0.xsd
		http://www.springframework.org/schema/aop
		http://www.springframework.org/schema/aop/spring-aop.xsd"
		default-autowire="byName">
		
		<aop:aspectj-autoproxy />
	
		<bean id="aopInteceptor" class="com.cmc.interceptors.AopInterceptor" />
		
		<bean id="loginService" class="com.cmc.service.login.LoginServiceImpl" />
		<bean id="userService" class="com.cmc.service.user.UserServiceImpl" />
			
	</beans>
	```

- `AopInterceptor`
	``` java
	package com.cmc.interceptors;
	
	import org.aspectj.lang.ProceedingJoinPoint;
	import org.aspectj.lang.annotation.After;
	import org.aspectj.lang.annotation.AfterReturning;
	import org.aspectj.lang.annotation.AfterThrowing;
	import org.aspectj.lang.annotation.Around;
	import org.aspectj.lang.annotation.Aspect;
	import org.aspectj.lang.annotation.Before;
	import org.aspectj.lang.annotation.Pointcut;
	
	@Aspect
	public class AopInterceptor {
	
		/**
		 * 切入点
		 * 1. execution执行
		 * 2. 第一个*代表返回任何类型
		 * 3. 拦截包和类
		 * 4. 第二个*是代表所有方法
		 * 5. 方法中所有类型的参数
		 */
		@Pointcut("execution(* com.cmc.service.user.UserServiceImpl.*(..))")
		private void anyMethod() {
		}
	
		/** 前置通知，满足切入点（anyMethod）而且方法参数是一个String类型 */
		@Before("anyMethod() && args(name)")
		public void beforeAnyMethod(String name) {
			System.out.println("前置通知" + name);
		}
	
		/** 返回通知，满足切入点，并且获取返回值 */
		@AfterReturning(pointcut = "anyMethod()", returning = "result")
		public void afterReturningAnyMethod(String result) {
			System.out.println("后置通知" + result);
		}
	
		/** 后置通知 */
		@After("anyMethod()")
		public void afterAnyMethod() {
			System.out.println("最终通知");
		}
	
		/** 例外通知，并且获取例外 */
		@AfterThrowing(pointcut = "anyMethod()", throwing = "e")
		public void throwAnyMethod(Exception e) {
			System.out.println("例外通知" + e);
		}
	
		/** 环绕通知 */
		@Around("anyMethod()")
		public Object aroundAnyMethod(ProceedingJoinPoint pjp) throws Throwable {
			System.out.println("进入方法");
			Object result = pjp.proceed();
			System.out.println("退出方法");
			return result;
		}
	
	}
	```
		
> *注意*
> - `AOP`切面编程就是在常规的`JAVA`类的方法（*往往是不同类中相同的方法*）前后加入自定义的方法。

<br>		 
## 五、事务
### 5.1 介绍
#### 5.1.1 含义
- **`SUMMARY：`操作数据库的程序执行单元。**
- 参考`Database Study Notes`。
### 5.2 实例
1. 引入事务`spring-tx`的`dtd`文件；
2. 配置`JDBC`；
3. 启动事务`<tx:annotation-driven />`；
4. *`eg.`*实例：
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

[^ CSDN Reference]: [CSDN][8]


> *注意*
> - `@Transactional`注解可以标注类和方法；
> - 一般情况下，运行期例外（`unchecked`例外，也就是说该异常系统不会捕获）`RuntimeException`事务会回滚的，否则（`checked`例外，该异常系统会捕获）事务不会回滚，当然可以通过属性指定所有异常都要回滚(*`rollbackFor`*)或者某些异常不需要回滚(*`noRollbackFor`*)；
> - `Spring`事务只在其定义的`WebApplicationContext` [^Spring Web MVC WebApplicationContext] （通过`ClassPathXmlApplicationContext`加载环境）起作用，`Spring Web MVC`中典型的上下文层级关系如下： 
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

<br>
## 六、Spring Task [^ Spring Task Reference]
- **`SUMMARY：`定时任务的一种。**
- [Spring Cron][6]
[^ Spring Task Reference]: [Spring Framework Reference][7]、[私塾在线][5]

- *`eg.`*代码实例：
	- `ssm-service.xml`
	
		``` xml
		<?xml version="1.0" encoding="UTF-8"?>
		<beans xmlns="http://www.springframework.org/schema/beans"
			xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" 
			xmlns:context="http://www.springframework.org/schema/context"
			xmlns:mvc="http://www.springframework.org/schema/mvc"
			xmlns:aop="http://www.springframework.org/schema/aop"
			xmlns:p="http://www.springframework.org/schema/p"
			xmlns:task="http://www.springframework.org/schema/task"
			xsi:schemaLocation="
			http://www.springframework.org/schema/beans 
			http://www.springframework.org/schema/beans/spring-beans.xsd
			http://www.springframework.org/schema/context 
			http://www.springframework.org/schema/context/spring-context.xsd
			http://www.springframework.org/schema/mvc 
			http://www.springframework.org/schema/mvc/spring-mvc.xsd
			http://www.springframework.org/schema/task 
			http://www.springframework.org/schema/task/spring-task-3.0.xsd
			http://www.springframework.org/schema/aop
			http://www.springframework.org/schema/aop/spring-aop.xsd">
			
			<task:annotation-driven /> 
			<context:component-scan base-package="com.cmc.service.task" />
			 
		</beans> 
		```
	- `Task.java`
	``` java
	package com.cmc.service.task;
	
	import org.apache.log4j.Logger;
	import org.springframework.scheduling.annotation.Scheduled;
	import org.springframework.stereotype.Service;
	
	/**
	 * 定时任务
	 * 
	 * Spring Task
	 * 
	 * @author HT.LCB
	 * @since 2016年12月19日 下午1:31:23
	 */
	@Service
	public class Task {
	
	    private static final Logger LOG = Logger.getLogger(Task.class);
	
	    @Scheduled(cron = "* * * * * ?")
	    public void sayHi() {
	        LOG.debug("inside task ===>");
	        System.out.println("Hi~");
	    }
	
	}
	```

<br>
## 七、使用Spring框架实现RESTful [^ Spring RESTful Reference]
[^ Spring RESTful Reference]: [ImportNew][12]

<br>
## 八、其他
### 7.1 配置
- `<context:annotation-config>`和`<context:component-scan>`
	- `<context:annotation-config>`[^ annotation-config reference]
		- activates the Spring infrastructure for various annotations to be detected in bean classes: Spring’s `@Required` and `@Autowired`, as well as JSR 250’s `@PostConstruct`, `@PreDestroy `and `@Resource `(if available), and JPA’s `@PersistenceContext` and `@PersistenceUnit` (if available). Alternatively, you can choose to activate the individual BeanPostProcessors for those annotations explicitly.
			- **This element does not activate processing of Spring’s `@Transactional` annotation. Use the <tx:annotation-driven/> element for that purpose.**
	   -  用于激活那些已经在`Spring`容器里注册过的`bean`（无论是通过`xml`的方式还是通过`package sanning`的方式）上面的注解。
	- `<context:component-scan>`
    	- 除了具有`<context:annotation-config>`的功能之外，`<context:component-scan>`还可以在指定的`package`下扫描以及注册`javabean `。
    
[^ annotation-config reference]: [Spring][10]

### 7.2 杂项
- 事务是相对于一个`Connection`而言的，两个`Connection`不可能共用一个事务;
- 轻量级应用和重量级应用
	- 根据一个应用提供的服务(已经打开，没有打开的不算，因为有的容器的功能是默认关闭的)的多少来确定
- *The use of `<context:component-scan>` implicitly enables the functionality of `<context:annotation-config>`. There is usually no need to include the `<context:annotation-config>` element when using `<context:component-scan>`.*
- 获取`properties`中的键值对：

	``` java
	Constants.class.getClassLoader().getResourceAsStream("config.properties");
	```
	
### 7.3 兼容
- `Spring3`和`jdk8`不兼容，需要`Spring4`，或者`jdk7`。

### 7.4 `<context:property-placeholder>`标签使用漫谈 [^ context placeholder reference]
[^ context placeholder reference]: [CSDN][11]

[1]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#overview-dependency-injection
[2]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/
[3]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#beans-dependencies
[4]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#mvc-servlet
[5]: http://sishuok.com/forum/posts/list/7260.html
[6]: http://www.cnblogs.com/liuyitian/p/4108391.html
[7]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#scheduling
[8]: http://blog.csdn.net/xiaoyu714543065/article/details/8211265
[9]: http://blessht.iteye.com/blog/1162131
[10]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#xsd-config-body-schemas-context-ac
[11]: http://blog.csdn.net/Rickesy/article/details/50791534
[12]: http://www.importnew.com/5163.html