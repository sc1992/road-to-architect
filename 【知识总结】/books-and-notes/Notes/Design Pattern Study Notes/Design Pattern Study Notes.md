# Design Pattern [^ Design Pattern reference] Study Notes [^ history version]

@(Notes)[Design Pattern, Notes]

> VICTORY LOVES PREPARATION.

[^ Design Pattern reference]: [菜鸟教程][1]

[^ history version]: 
> 版本信息：
> 2017年04月19日 下午02:06:36
> 2017年02月17日 下午04:26:44

[TOC]

***
## 〇、思维导图

<br>
## 一、简介
- **`SUMMARY:`设计模式代表了最佳实践，提高了代码的重用性、可靠性以及增强阅读性。**
- 设计模式（`Design Pattern`）代表了**最佳实践**，通常被有经验的面向对象的软件开发人员所采用；
- 设计模式是软件开发人员在软件开发过程中面临的一般问题的解决方案。这些解决方案是众多软件开发人员经过相当长的一段时间的试验和错误总结出来的；
- 设计模式是一套被反复使用的、多数人知晓的、经过分类编目的、代码设计经验的总结；
- 使用设计模式是为了重用代码、让代码更容易被他人理解、保证代码可靠性。 毫无疑问，设计模式于己于他人于系统都是多赢的，设计模式使代码编制真正工程化，设计模式是软件工程的基石，如同大厦的一块块砖石一样；
- 项目中合理地运用设计模式可以完美地解决很多问题，每种模式在现实中都有相应的原理来与之对应，每种模式都描述了一个在我们周围不断重复发生的问题，以及该问题的核心解决方案，这也是设计模式能被广泛应用的原因。

	> *注意*
	> - 设计模式主要是基于以下两个面向对象设计原则：
	>  - **对接口编程而不是对实现编程；**
	>  - **优先使用对象组合而不是继承。**

<br>
## 二、基本原则（`SOLID`原则）
- **`SUMMARY:` 设计模式基本原则可以概括为符合单一职责的面向接口编程。**
### 2.1 单一职责原则（`SRP`）
- **`SUMMARY:`一个类应该只有一个变化的原因。**
- `Single Responsibility Principle`；
- 一个类应该只有一个原因引起变化；
- 所谓职责是指类变化的原因。**如果一个类有多于一个的动机被改变，那么这个类就具有多于一个的职责。**而单一职责原则就是指一个类或者模块应该有且只有一个改变的原因。

### 2.2 开放闭合原则（`OCP`）
- **`SUMMARY:`对扩展开放，对修改关闭，是面向对象原则的核心，同时也是软件设计所追求的目标。**
- `Open Close Principle`；
- 是所有面向对象原则的核心。**软件设计本身所追求的目标就是封装变化、降低耦合**，而开放封闭原则正是对这一目标的最直接体现。其他的设计原则，很多时候是为实现这一目标服务的，例如以`Liskov`替换原则实现最佳的、正确的继承层次，就能保证不会违反开放封闭原则；
- 对扩展开放，对修改关闭。在程序需要进行拓展的时候，不能去修改原有的代码，实现一个热插拔的效果。简言之，是为了使程序的扩展性好，易于维护和升级。想要达到这样的效果，我们需要使用接口和抽象类，后面的具体设计中我们会提到这点。

### 2.3 里氏替换原则（`LSP`）
- **`SUMMARY:`任何基类可以出现的地方，子类一定可以出现，是继承复用的基石，是对实现抽象化的具体步骤的规范。**
- `Liskov Substitution Principle`；
- 里氏代换原则是面向对象设计的基本原则之一。 里氏代换原则中说，任何基类可以出现的地方，子类一定可以出现。`LSP`是继承复用的基石，只有当派生类可以替换掉基类，且软件单位的功能不受到影响时，基类才能真正被复用，而派生类也能够在基类的基础上增加新的行为。里氏代换原则是对开闭原则的补充。实现开闭原则的关键步骤就是抽象化，而基类与子类的继承关系就是抽象化的具体实现，所以里氏代换原则是对实现抽象化的具体步骤的规范；
- `LSP`作为`OO`的高层原则，主张使用**抽象**（`Abstraction`）和**多态**（`Polymorphism`）将设计中的**静态结构改为动态结构，维持设计的封闭性**。**抽象**是语言提供的功能，**多态**由继承语义实现。

### 2.4 接口隔离原则（`ISP`）
- **`SUMMARY:`一个类对另一个类的依赖应该建立在最小的接口上。**
- `Interface Segregation Principle`；
- 客户端不应该依赖它不需要的接口；
- 一个类对另一个类的依赖应该建立在最小的接口上；
- 使用多个隔离的接口，比使用单个接口要好。它还有另外一个意思是：降低类之间的耦合度。由此可见，其实设计模式就是从大型软件架构出发、便于升级和维护的软件设计思想，它强调降低依赖，降低耦合。

### 2.5 依赖倒置原则（`DIP`）
- **`SUMMARY:`具体实现应该依赖抽象，而不是抽象依赖具体实现。**
- `Dependence Inversion Principle`；
- 高层次的模块不应该依赖于低层次的模块，他们都应该依赖于抽象；
- 抽象不应该依赖于具体实现，具体实现应该依赖于抽象；
- 是开闭原则的基础，具体思想：
	- **针对接口编程**；
	- **依赖于抽象而不依赖于具体**。

<br>
## 三、分类
### 3.1 创建型模式
#### 3.1.1 单例模式（`Singleton Pattern`）【常用】
- **`SUMMARY:` `Singleton Pattern`，保证一个类只有一个实例。**
- 单例模式（`Singleton Pattern`）是`Java`中最简单的设计模式之一；
- 这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式；
- 这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建；
- 提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。

	> *注意*
	> - 单例类只能有一个实例；
	> - 单例类必须自己创建自己的唯一实例；
	> - 单例类必须给所有其他对象提供这一实例。
	
##### 3.1.1.1 介绍
###### 3.1.1.1.1 意图
- 保证一个类仅有一个实例，并提供一个访问它的全局访问点。
###### 3.1.1.1.2 解决问题
- 一个全局使用的类频繁地创建与销毁。
###### 3.1.1.1.3 关键代码
- 构造函数是私有的。
###### 3.1.1.1.4 应用实例
- 一个党只能有一个主席；
- 一些设备管理器常常设计为单例模式，比如一个电脑有两台打印机，在输出的时候就要处理不能两台打印机打印同一个文件。
###### 3.1.1.1.5 优点
- 在内存里只有一个实例，减少了内存的开销，尤其是频繁的创建和销毁实例（比如管理学院首页页面缓存）；
- 避免对资源的多重占用（比如写文件操作）。
###### 3.1.1.1.6 缺点
- 没有接口，不能继承，与单一职责原则冲突，一个类应该只关心内部逻辑，而不关心外面怎么样来实例化。
###### 3.1.1.1.7 使用场景
- 当您想控制实例数目，节省系统资源的时候，*`eg.`使用场景：*
	- 要求生产唯一序列号；
	- 创建的一个对象需要消耗的资源过多，比如`I/O`与数据库的连接等。

###### 3.1.1.1.8 注意事项
- `getInstance()`方法中需要使用同步锁`synchronized (Singleton.class)`防止多线程同时进入造成 `instance`被多次实例化。

##### 3.1.1.2 实现
*`img.`用例图：*<br>![][2]
###### 3.1.1.2.1 线程不安全懒汉式
- **`SUMMARY:` 线程不安全、延迟加载型。**
- 是否延迟初始化
	- 是
- 是否多线程安全
	- 否
- 实现难度
	- 易
- 描述
	- 这种方式是最基本的实现方式，这种实现最大的问题就是不支持多线程。因为没有加锁`synchronized`，所以*严格意义上它并不算单例模式*；
	- 这种方式`lazy loading`很明显，不要求线程安全，在多线程不能正常工作。
- *`eg.`代码实例：*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * 创建型模式：单例模式
	 * 
	 * <p> 线程不安全懒汉式
	 * <p> 这种方式是最基本的实现方式，这种实现最大的问题就是不支持多线程。因为没有加锁<code>synchronized</code>，所以严格意义上它并不算单例模式。
	 * 
	 * <ul>
	 * <li> 是否延迟初始化：是
	 * <li> 是否多线程安全：否
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月18日 下午2:23:44
	 */
	public class SingletonPattern1 {
	
	    private static SingletonPattern1 instance;
	
	    private SingletonPattern1() {
	    }
	
	    public static SingletonPattern1 getInstance() {
	        if (null == instance) {
	            instance = new SingletonPattern1();
	        }
	        return instance;
	    }
	
	}
	```

###### 3.1.1.2.2 线程安全懒汉式
- **`SUMMARY:` 线程安全、延迟加载型。**
- 是否延迟初始化
	- 是
- 是否多线程安全
	- 是
- 实现难度
	- 易
- 描述
	- 这种方式具备很好的`lazy loading`，能够在多线程中很好的工作，但是，效率很低，`99%`情况下不需要同步；
	- 优点：第一次调用才初始化，避免内存浪费；
	- 缺点：必须加锁`synchronized`才能保证单例，但加锁会影响效率。
- *`eg.`代码实例：*	
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * 创建型模式：单例模式
	 * 
	 * <p> 线程安全懒汉式
	 * <p> 这种方式具备很好的lazy loading，能够在多线程中很好的工作，但是，效率很低，99%情况下不需要同步。
	 * 
	 * <ul>
	 * <li> 是否延迟初始化：是
	 * <li> 是否多线程安全：是
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月18日 下午2:23:44
	 */
	public class SingletonPattern2 {
	
	    private static SingletonPattern2 instance;
	
	    private SingletonPattern2() {
	    }
	
	    public static synchronized SingletonPattern2 getInstance() {
	        if (null == instance) {
	            instance = new SingletonPattern2();
	        }
	        return instance;
	    }
	
	}
	```

###### 3.1.1.2.3 饿汉式
- **`SUMMARY:` 线程安全、不延迟加载型。**
- 是否延迟初始化
	- 否
- 是否多线程安全
	- 是
- 实现难度
	- 易
- 描述
	- 这种方式比较常用，但容易产生垃圾对象；
	- 优点：没有加锁，执行效率会提高；
	- 缺点：类加载时就初始化，浪费内存；
	- 它基于`classloder`机制避免了多线程的同步问题，不过，`instance`在类装载时就实例化，虽然导致类装载的原因有很多种，在单例模式中大多数都是调用`getInstance()`方法， 但是也不能确定有其他的方式（或者其他的静态方法）导致类装载，这时候初始化`instance`显然没有达到`lazy loading`的效果。
- *`eg.`代码实例：*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * 创建型模式：单例模式
	 * 
	 * <p> 饿汉式
	 * <p> 这种方式比较常用，但容易产生垃圾对象。
	 * 
	 * <ul>
	 * <li> 是否延迟初始化：否
	 * <li> 是否多线程安全：是
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月18日 下午2:23:44
	 */
	public class SingletonPattern3 {
	
	    private static SingletonPattern3 instance = new SingletonPattern3();
	
	    private SingletonPattern3() {
	    }
	
	    public static SingletonPattern3 getInstance() {
	        return instance;
	    }
	
	}
	```

###### 3.1.1.2.4 双检锁/双重校验锁（`DCL`，即 `double-checked locking`）
- **`SUMMARY:` 双重校验延迟加载、线程安全型。**
- 是否延迟初始化
	- 是
- 是否多线程安全
	- 是
- 实现难度
	- 高
- 描述
	- 这种方式采用双锁机制，安全且在多线程情况下能保持高性能；
	- `getInstance()`的性能对应用程序很关键。
- *`eg.`代码实例：*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * 创建型模式：单例模式
	 * 
	 * <p> 双检锁/双重校验锁（DCL，即 double-checked locking）
	 * <p> 这种方式采用双锁机制，安全且在多线程情况下能保持高性能。
	 * 
	 * <ul>
	 * <li> 是否延迟初始化：是
	 * <li> 是否多线程安全：是
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月18日 下午2:23:44
	 */
	public class SingletonPattern4 {
	
	    private volatile static SingletonPattern4 instance;
	
	    private SingletonPattern4() {
	    }
	
	    public static SingletonPattern4 getInstance() {
	        if (null == instance) {
	            synchronized (SingletonPattern4.class) {
	                if (null == instance) {
	                    instance = new SingletonPattern4();
	                }
	            }
	        }
	        return instance;
	    }
	
	    public static void main(String[] args) {
	        System.out.println(SingletonPattern6.INSTANCE.INSTANCE);
	    }
	
	}
```

###### 3.1.1.2.5 登记式/静态内部类
- **`SUMMARY:` 使用静态内部类型。**
- 是否延迟初始化
	- 是
- 是否多线程安全
	- 是
- 实现难度
	- 一般
- 描述
	- 这种方式能达到双检锁方式一样的功效，但实现更简单。对静态域使用延迟初始化，应使用这种方式而不是双检锁方式。这种方式只适用于静态域的情况，双检锁方式可在实例域需要延迟初始化时使用；
	- 这种方式同样利用了`classloder`机制来保证初始化`instance`时只有一个线程，它跟第`3`种方式不同的是：第`3`种方式只要`Singleton`类被装载了，那么`instance`就会被实例化（没有达到`lazy loading`效果），而这种方式是`Singleton`类被装载了，`instance`不一定被初始化。因为`SingletonHolder`类没有被主动使用，只有显示通过调用`getInstance`方法时，才会显示装载`SingletonHolder`类，从而实例化 `instance`。想象一下，如果实例化`instance`很消耗资源，所以想让它延迟加载，另外一方面，又不希望在 `Singleton`类加载时就实例化，因为不能确保`Singleton`类还可能在其他的地方被主动使用从而被加载，那么这个时候实例化`instance`显然是不合适的。这个时候，这种方式相比第`3`种方式就显得很合理。
- *`eg.`代码实例：*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * 创建型模式：单例模式
	 * 
	 * <p> 登记式/静态内部类
	 * <p> 这种方式能达到双检锁方式一样的功效，但实现更简单。对静态域使用延迟初始化，应使用这种方式而不是双检锁方式。这种方式只适用于静态域的情况，双检锁方式可在实例域需要延迟初始化时使用。
	这种方式同样利用了 classloder 机制来保证初始化 instance 时只有一个线程，它跟第 3 种方式不同的是：第 3 种方式只要 Singleton 类被装载了，那么 instance 就会被实例化（没有达到 lazy loading 效果），而这种方式是 Singleton 类被装载了，instance 不一定被初始化。因为 SingletonHolder 类没有被主动使用，只有显示通过调用 getInstance 方法时，才会显示装载 SingletonHolder 类，从而实例化 instance。想象一下，如果实例化 instance 很消耗资源，所以想让它延迟加载，另外一方面，又不希望在 Singleton 类加载时就实例化，因为不能确保 Singleton 类还可能在其他的地方被主动使用从而被加载，那么这个时候实例化 instance 显然是不合适的。这个时候，这种方式相比第 3 种方式就显得很合理。
	 * 
	 * <ul>
	 * <li> 是否延迟初始化：是
	 * <li> 是否多线程安全：是
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月18日 下午2:23:44
	 */
	public class SingletonPattern5 {
	
	    private SingletonPattern5() {
	    }
	
	    private static class SingletonHolder {
	        private static final SingletonPattern5 INSTANCE = new SingletonPattern5();
	    }
	
	    public static final SingletonPattern5 getInstance() {
	        return SingletonHolder.INSTANCE;
	    }
	
	}
	```

###### 3.1.1.2.6 枚举
- **`SUMMARY:` 使用枚举。**
- 是否延迟初始化
	- 否
- 是否多线程安全
	- 是
- 实现难度
	- 易
- 描述
	- 这种实现方式还没有被广泛采用，但这是实现单例模式的最佳方法。它更简洁，自动支持序列化机制，绝对防止多次实例化；
	- 这种方式是`Effective Java`作者`Josh Bloch`提倡的方式，它不仅能避免多线程同步问题，而且还自动支持序列化机制，防止反序列化重新创建新的对象，绝对防止多次实例化。不过，由于`JDK1.5`之后才加入 `enum`特性，用这种方式写不免让人感觉生疏，在实际工作中，也很少用；
	- 不能通过`reflection attack`来调用私有构造方法。
- *`eg.`代码实例：*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * 创建型模式：单例模式
	 * 
	 * <p> 枚举
	 * <p> 这种实现方式还没有被广泛采用，但这是实现单例模式的最佳方法。它更简洁，自动支持序列化机制，绝对防止多次实例化。
	 * <ul>
	 * <li> 是否延迟初始化：是
	 * <li> 是否多线程安全：是
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月18日 下午2:23:44
	 */
	public enum SingletonPattern6 {
	
	    INSTANCE;
	
	    public void whateverMethod() {
	    }
	
	}
	```

	> *注意*
	> - 一般情况下，不建议使用第`1`种和第`2`种懒汉方式，建议使用第`3`种饿汉方式。只有在要明确实现`lazy loading`效果时，才会使用第`5`种登记方式。如果涉及到反序列化创建对象时，可以尝试使用第`6`种枚举方式。如果有其他特殊的需求，可以考虑使用第`4`种双检锁方式。


#### 3.1.2 工厂模式（`Factory Pattern`）【常用】
- **`SUMMARY:` `Factory Pattern`，通过使用一个共同的接口来指向新创建的对象，不会对客户端暴露创建逻辑。**
- 工厂模式（`Factory Pattern`）是`Java`中最常用的设计模式之一；
- 属于创建型模式，它提供了一种创建对象的最佳方式；
- 在创建对象的时候**通过使用一个共同的接口来指向新创建的对象，不会对客户端暴露创建逻辑**。

##### 3.1.2.1 介绍
###### 3.1.2.1.1 意图
- 定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类；
- 使创建过程延迟到子类进行（*但是不会对子类暴露创建逻辑*）。

###### 3.1.2.1.2 解决问题
- 主要解决接口选择的问题。

###### 3.1.2.1.3 关键代码
- 创建过程在其子类执行。

###### 3.1.2.1.4 应用实例
- 需要一辆汽车，可以直接从工厂里面提货。*而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现*；
- `Hibernate`更换数据库，只需换方言和驱动就可以。

###### 3.1.2.1.5 优点
- **扩展性高**，如果想增加一个产品，只要扩展一个工厂中元素的类即可；
- **屏蔽产品的具体实现，调用者只关心产品的接口。**

###### 3.1.2.1.6 缺点
- 每次增加产品时，都需要增加具体类和对象实现工厂，**使得系统中类的个数成倍增加，在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。**

###### 3.1.2.1.7 使用场景
- **日志记录器**
	- 记录可能记录到本地硬盘、系统事件、远程服务器等，用户可以选择记录日志到什么地方。
- **数据库访问**
	- 当用户不知道最后系统采用哪一类数据库，以及数据库可能有变化时。

###### 3.1.2.1.8 注意事项
- **`SUMMARY:` `Factory Pattern`，对象的复杂创建过程适合使用工厂模式，而简单创建，特别是只需要通过`new`就可以完成创建的对象，无需使用工厂模式。**
- **作为一种创建类模式，在任何需要生成复杂对象的地方，都可以使用工厂方法模式。**有一点需要注意的地方就是**复杂对象适合使用工厂模式，而简单对象，特别是只需要通过`new`就可以完成创建的对象，无需使用工厂模式。**如果使用工厂模式，就需要引入一个工厂类，会增加系统的复杂度。

##### 3.1.2.2 实现
- *`img.`用例图：*
<br>![][3]
- `Shape.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public interface Shape {
	
	    /**
	     * 画图形
	     * 
	     * @author Thomas Lee
	     * @version 2017年2月20日 上午9:51:42
	     */
	    public void draw();
	
	}
	```
- `Rectangle.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class Rectangle implements Shape {
	
	    @Override
	    public void draw() {
	        System.out.println("draw a rectangle.");
	    }
	
	}
	``` 

- `Circle.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class Circle implements Shape {
	
	    @Override
	    public void draw() {
	        System.out.println("draw a circle.");
	    }
	
	}
	``` 

- `Square.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class Square implements Shape {
	
	    @Override
	    public void draw() {
	        System.out.println("draw a square.");
	    }
	
	}
	``` 

- `ShapeFactoryImpl.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class ShapeFactoryImpl implements ShapeFactory {
	
	    private static final String ERR_MSG_ARG_NON_SUPPORT_SHAPE = "不支持的形状。";
	
	    @Override
	    public Shape getShape(ShapeEnum shapeEnum) {
	        if (shapeEnum.equals(ShapeEnum.RECTANGLE)) {
	            return new Rectangle();
	        } else if (shapeEnum.equals(ShapeEnum.CIRCLE)) {
	            return new Circle();
	        } else if (shapeEnum.equals(ShapeEnum.SQUARE)) {
	            return new Square();
	        } else {
	            System.out.println(ERR_MSG_ARG_NON_SUPPORT_SHAPE);
	            return null;
	        }
	    }
	    
	}
	```

- `ShapeFactoryDemo.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class FactoryPatternDemo {
	
	    public static void main(String[] args) {
	        ShapeFactory shapeFactory = new ShapeFactoryImpl();
	        Shape rectangle = shapeFactory.getShape(ShapeEnum.RECTANGLE);
	        Shape circle = shapeFactory.getShape(ShapeEnum.CIRCLE);
	        Shape square = shapeFactory.getShape(ShapeEnum.SQUARE);
	        rectangle.draw();
	        circle.draw();
	        square.draw();
	    }
	
	}
	``` 
- `输出`

	``` java
	draw a rectangle.
	draw a circle.
	draw a square.
	```

#### 3.1.3 抽象工厂模式（`Abstract Factory Pattern`）
- **`SUMMARY:` `Abstract Factory Pattern`，工厂的工厂。**
- 围绕一个超级工厂（其他工厂的工厂）创建其他工厂；
- 这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式；
- 在抽象工厂模式中，接口是负责创建一个相关对象的工厂，不需要显式指定它们的类。每个生成的工厂都能按照工厂模式提供对象。

#### 3.1.4 建造者模式（`Builder Pattern`）

#### 3.1.5 原型模式（`Prototype Pattern`）【常用】
- **`SUMMARY:` `Abstract Factory Pattern`，用于创建重复的对象，同时又能保证性能（见例子）。**
- 原型模式（`Prototype Pattern`）是用于创建重复的对象，同时又能保证性能；
- 这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式；
- 这种模式是实现了一个原型接口，该接口用于创建当前对象的克隆；
- 当直接创建对象的代价比较大时，则采用这种模式；
- *`EG.`例如：*
	- **一个对象需要在一个高代价的数据库操作之后被创建；**
	- **我们可以缓存该对象，在下一个请求时返回它的克隆，在需要的时候更新数据库，以此来减少数据库调用。**

### 3.2 结构型模式
#### 3.2.1 适配器模式（`Adapter Pattern`）【常用】
- **`SUMMARY:` `Adapter Pattern`，是一种“补救”模式，把两个不兼容的类（`A`和`B`）连接起来，然后在`B`中需要适配的方法内部通过实现其（接口的）适配器调用`A`。**
- 适配器模式（`Adapter Pattern`）是作为两个不兼容的接口之间的桥梁；
- *属于结构型模式*，它结合了两个独立接口的功能；
- 涉及到一个单一的类，该类负责加入独立的或不兼容的接口功能；

##### 3.2.1.1 介绍
###### 3.2.1.1.1 意图
- 将一个类的接口转换成客户希望的另外一个接口；
- 使得原本由于接口不兼容而不能一起工作的那些类可以一起工作。

###### 3.2.1.1.2 解决问题
- 主要解决在软件系统中，常常要将一些"现存的对象"放到新的环境中，而新环境要求的接口是现对象不能满足的。

###### 3.2.1.1.3 关键代码
- 适配器继承或依赖已有的对象，实现想要的目标接口。

###### 3.2.1.1.4 应用实例
- 美国电器`110V`，中国`220V`，就要有一个适配器将`110V`转化为`220V`；
- `JAVA JDK 1.1`提供了`Enumeration`接口，而在`1.2`中提供了`Iterator`接口，想要使用`1.2`的`JDK`，则要将以前系统的`Enumeration`接口转化为`Iterator`接口，这时就需要适配器模式。

###### 3.2.1.1.5 优点
- 让两个没有关联的类一起运行；
- 提高了类的复用；
- 增加了类的透明度； 
- 灵活性好。

###### 3.2.1.1.6 缺点
- 过多地使用适配器，会让系统非常零乱，不易整体进行把握；
	- *`eg.`*明明看到调用的是`A`接口，其实内部被适配成了`B`接口的实现，一个系统如果太多出现这种情况，无异于一场灾难。因此如果不是很有必要，可以不使用适配器，而是直接对系统进行重构；
- 由于`JAVA`最多继承一个类，所以至多只能适配一个适配者类，而且目标类必须是抽象类。

###### 3.2.1.1.7 使用场景
- 有动机地修改一个正常运行的系统的接口，这时应该考虑使用适配器模式。

###### 3.2.1.1.8 注意事项
- 适配器不是在详细设计时添加的，而是解决正在服役的项目的问题。

##### 3.2.1.1 实现
- 有一个`MediaPlayer`接口和一个实现了`MediaPlayer`接口的实体类`AudioPlayer`。默认情况下，`AudioPlayer`可以播放`mp3`格式的音频文件。
- 有另一个接口`AdvancedMediaPlayer`和实现了`AdvancedMediaPlayer`接口的实体类。该类可以播放`vlc`和`mp4`格式的文件。
- 要让`AudioPlayer`播放其他格式的音频文件。为了实现这个功能，需要创建一个实现了 `MediaPlayer`接口的适配器类`MediaAdapter`，并使用`AdvancedMediaPlayer`对象来播放所需的格式。
- `AudioPlayer`使用适配器类`MediaAdapter`传递所需的音频类型，不需要知道能播放所需格式音频的实际类。`AdapterPatternDemo`，演示类使用`AudioPlayer`类来播放各种格式。
- *`img.`用例图：*<br>![][4]
- `MediaPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public interface MediaPlayer {
	
	    public void play(String audioType, String fileName);
	
	}
	```

- `AdvancedMediaPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public interface AdvancedMediaPlayer {
	
	    public void playVlc(String fileName);
	
	    public void playMp4(String fileName);
	
	}
	```

- `Mp4Player.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class Mp4Player implements AdvancedMediaPlayer {
	
	    @Override
	    public void playVlc(String fileName) {
	        /* do nothing... */
	    }
	
	    @Override
	    public void playMp4(String fileName) {
	        System.out.println("Playing mp4 file. Name: " + fileName);
	    }
	
	}
	```

- `VlcPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class VlcPlayer implements AdvancedMediaPlayer {
	
	    @Override
	    public void playVlc(String fileName) {
	        System.out.println("Playing vlc file. Name: " + fileName);
	    }
	
	    @Override
	    public void playMp4(String fileName) {
	        /* do nothing... */
	    }
	
	}
	```

- `MediaAdapter.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class MediaAdapter implements MediaPlayer {
	
	    AdvancedMediaPlayer advancedMusicPlayer;
	
	    public MediaAdapter(String audioType) {
	        if (audioType.equalsIgnoreCase("vlc")) {
	            advancedMusicPlayer = new VlcPlayer();
	        } else if (audioType.equalsIgnoreCase("mp4")) {
	            advancedMusicPlayer = new Mp4Player();
	        }
	    }
	
	    @Override
	    public void play(String audioType, String fileName) {
	        if (audioType.equalsIgnoreCase("vlc")) {
	            advancedMusicPlayer.playVlc(fileName);
	        } else if (audioType.equalsIgnoreCase("mp4")) {
	            advancedMusicPlayer.playMp4(fileName);
	        }
	    }
	
	}
	```

- `AudioPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class AudioPlayer implements MediaPlayer {
	
	    // 不使用MediaAdapter直接使用AdvancedMusicPlayer对象不符合接口隔离原则和单一职责原则，因为如果是在MP3和vlc这两个条件的时候生成两个AdvancedMusicPlayer对象，然后分别进行调用，这样也能达到目的，但是相对于“目前的类不支持MP3和vlc播放”的情况，应该生成一个接口（适配MP3和vlc的接口），这样才符合接口隔离原则，即最小接口（MP3和vlc合一才是最小接口），同时两者合一也是当前业务下不可分离的职责。例如AdvancedMusicPlayer中又添加一个高级的播放方式，“直接生成两个AdvancedMusicPlayer对象”的方式则需要修改AudioPlayer的代码，实际上该种方式就是组合关系，而后者通过MediaAdapter就是聚合关系，根据关系强弱（泛化 = 实现 > 组合 > 聚合 > 关联 > 依赖），选择后者。
	    MediaAdapter mediaAdapter;
	
	    @Override
	    public void play(String audioType, String fileName) {
	    
	        // 播放mp3音乐文件的内置支持
	        if (audioType.equalsIgnoreCase("mp3")) {
	            System.out.println("Playing mp3 file. Name: " + fileName);
	        }
	
	        // mediaAdapter提供了播放其他文件格式的支持
	        else if (audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {
	            mediaAdapter = new MediaAdapter(audioType);
	            mediaAdapter.play(audioType, fileName);
	        } else {
	            System.out.println("Invalid media. " + audioType + " format not supported");
	        }
	    }
	
	}
	```

- `AdapterPatternDemo.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class AdapterPatternDemo {
	
	    public static void main(String[] args) {
	        AudioPlayer audioPlayer = new AudioPlayer();
	        audioPlayer.play("mp3", "beyond the horizon.mp3");
	        audioPlayer.play("mp4", "alone.mp4");
	        audioPlayer.play("vlc", "far far away.vlc");
	        audioPlayer.play("avi", "mind me.avi");
	    }
	
	}
	```


#### 3.2.2 桥接模式（`Bridge Pattern`）【常用】
- **`SUMMARY:` `Bridge Pattern`，通过提供抽象化（`Shape`）与实现化（`RedCircle`和`GreenCircle`）之间的桥接结构（`DrawAPI`）来实现二者的解耦，使它们都可以独立的变化。**
- 桥接（`Bridge`）是用于把抽象化与实现化解耦，使得二者可以独立变化；
- 属于结构型模式；
- 它通过提供抽象化和实现化之间的桥接结构，来实现二者的解耦；
- 涉及到一个作为桥接的接口，使得实体类的功能独立于接口实现类，这两种类型的类可被结构化改变而互不影响。
- *`img.`用例图：*<br>![][15]

	``` java
	package com.cmc.dp.pattern.bridge;
	
	public abstract class Shape {
	
	    protected DrawAPI drawAPI;
	
	    /* （聚合）依赖抽象的DrawAPI，而不是依赖具体类RecCircle和GreenCircle */
	    protected Shape(DrawAPI drawAPI) {
	        this.drawAPI = drawAPI;
	    }
	
	    public abstract void draw();
	
	}
	```

#### 3.2.3 组合模式（`Composite Pattern`）【常用】
- **`SUMMARY:` `Composite Pattern`，依据树形结构把一组相似的对象当作一个单一的对象。**
- **迭代器模式是对其进行遍历的模式；**
- 部分整体模式，是用于把一组相似的对象当作一个单一的对象，依据树形结构来组合对象，用来表示部分以及整体层次；
- 属于结构型模式，它创建了对象组的树形结构；
- 创建了一个包含自己对象组的类。该类提供了修改相同对象组的方式。
- *`img.`用例图：*<br>![][5]

	``` java
	package com.cmc.dp.pattern.composite;
	
	public class CompositePatternDemo {
	
	    public static void main(String[] args) {
	        Employee CEO = new Employee("John", "CEO", 30000);
	
	        Employee headSales = new Employee("Robert", "Head Sales", 20000);
	
	        Employee headMarketing = new Employee("Michel", "Head Marketing", 20000);
	
	        Employee clerk1 = new Employee("Laura", "Marketing", 10000);
	        Employee clerk2 = new Employee("Bob", "Marketing", 10000);
	
	        Employee salesExecutive1 = new Employee("Richard", "Sales", 10000);
	        Employee salesExecutive2 = new Employee("Rob", "Sales", 10000);
	
	        CEO.add(headSales);
	        CEO.add(headMarketing);
	
	        headSales.add(salesExecutive1);
	        headSales.add(salesExecutive2);
	
	        headMarketing.add(clerk1);
	        headMarketing.add(clerk2);
	
	        //打印该组织的所有员工
	        System.out.println(CEO);
	        for (Employee headEmployee : CEO.getSubordinates()) {
	            System.out.println(headEmployee);
	            for (Employee employee : headEmployee.getSubordinates()) {
	                System.out.println(employee);
	            }
	        }
	    }
	
	}
	``` 

#### 3.2.4 装饰器模式（`Decorator Pattern`）
- **`SUMMARY:` `Decorator Pattern`，在不改变现有对象结构的条件下，向其添加新的功能。**
- 装饰器模式（`Decorator Pattern`）允许向一个现有的对象添加新的功能，同时又不改变其结构；
- 属于结构型模式，它是作为现有的类的一个包装；
- 这种模式创建了一个装饰类，用来包装原有的类，并在保持类方法签名完整性的前提下，提供了额外的功能。
- *`img.`用例图：*<br>![][6]

	``` java
	package com.cmc.dp.pattern.decorator;
	
	public class RedShapeDecorator extends ShapeDecorator {
	
	    public RedShapeDecorator(Shape decoratedShape) {
	        super(decoratedShape);
	    }
	
	    @Override
	    public void draw() {
	        decoratedShape.draw();
	        // 添加新的功能
	        setRedBorder(decoratedShape);
	    }
	
	    private void setRedBorder(Shape decoratedShape) {
	        System.out.println("Border Color: Red");
	    }
	
	}
	```

#### 3.2.5 门面模式（`Facade Pattern`）【常用】
- **`SUMMARY:` `Facade Pattern`，向客户端提供一个可以访问系统的统一接口，隐藏了系统的复杂性。**
- 外观模式（`Facade Pattern`）隐藏系统的复杂性，并向客户端提供了一个客户端可以访问系统的接口；
- 属于结构型模式，它向现有的系统添加一个接口，来隐藏系统的复杂性；
- 这种模式涉及到一个单一的类，该类提供了客户端请求的简化方法和对现有系统类方法的委托调用。
- *`img.`用例图：*<br>![][7]

	``` java
	public class ShapeMaker {
	   private Shape circle;
	   private Shape rectangle;
	   private Shape square;
	
	   public ShapeMaker() {
	      circle = new Circle();
	      rectangle = new Rectangle();
	      square = new Square();
	   }
	
	   public void drawCircle(){
	      circle.draw();
	   }
	   public void drawRectangle(){
	      rectangle.draw();
	   }
	   public void drawSquare(){
	      square.draw();
	   }
	}
	```

#### 3.2.6 享元模式（`Flyweight Pattern`）
#### 3.2.7 代理模式（`Proxy Pattern`）【常用】
- **`SUMMARY:` `Proxy Pattern`，一个类提供一种代理用来控制该类的访问。**
- 在代理模式（`Proxy Pattern`）中，一个类代表另一个类的功能；
- 属于结构型模式；
- 创建**具有现有对象的对象，以便向外界提供功能接口；**
- 为其他对象提供一种代理以控制对这个对象的访问。
- *`img.`用例图：*<br>![][8]

	``` java
	package com.cmc.dp.pattern.proxy;
	
	public class ProxyImage implements Image {
	
	    private RealImage realImage;
	    private String fileName;
	
	    public ProxyImage(String fileName) {
	        this.fileName = fileName;
	    }
	
	    @Override
	    public void display() {
	        if (realImage == null) {
	            realImage = new RealImage(fileName);
	        }
	        realImage.display();
	    }
	
	}
	```

### 3.3 行为型模式
#### 3.3.1 责任链模式（`Chain of Responsibility Pattern`）【常用】
- **`SUMMARY:` `Chain of Responsibility Pattern`，每个接收者都包含对另一个接收者的引用，如果当前的对象不能处理请求，那么它会把请求传给下一个接收者，依此类推。**
- 责任链模式（`Chain of Responsibility Pattern`）为请求创建了一个接收者对象的链；
- 属于行为型模式；
- 通常每个接收者都包含对另一个接收者的引用。如果一个对象不能处理该请求，那么它会把相同的请求传给下一个接收者，依此类推；
- 处理过滤器；
- 避免请求发送者与接收者耦合在一起，让多个对象都有可能接收请求，将这些对象连接成一条链，并且沿着这条链传递请求，直到有对象处理它为止。
- *`img.`用例图：*<br>![][9]
	
	``` java
	package com.cmc.dp.pattern.chainofresponsibility;
	
	public class ChainPatternDemo {
	
	    private static AbstractLogger getChainOfLoggers() {
	
	        AbstractLogger errorLogger = new ErrorLogger(AbstractLogger.ERROR);
	        AbstractLogger fileLogger = new FileLogger(AbstractLogger.DEBUG);
	        AbstractLogger consoleLogger = new ConsoleLogger(AbstractLogger.INFO);
	
	        errorLogger.setNextLogger(fileLogger);
	        fileLogger.setNextLogger(consoleLogger);
	
	        return errorLogger;
	    }
	
	    public static void main(String[] args) {
	        AbstractLogger loggerChain = getChainOfLoggers();
	        loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");
	        loggerChain.logMessage(AbstractLogger.DEBUG, "This is an debug level information.");
	        loggerChain.logMessage(AbstractLogger.ERROR, "This is an error information.");
	    }
	
	}
	```

#### 3.3.2 命令模式（`Command Pattern`）【常用】
- **`SUMMARY:` `Command Pattern`，把命令包裹在对象中，并传给调用对象。降低请求和实现耦合度。**
- 命令模式（`Command Pattern`）是一种数据驱动的设计模式；
- 属于行为型模式；
- 请求以命令的形式包裹在对象中，并传给调用对象。调用对象寻找可以处理该命令的合适的对象，并把该命令传给相应的对象，该对象执行命令；
- 将一个请求封装成一个对象，从而可以用不同的请求对客户进行参数化。
- *`img.`用例图：*<br>![][10]

	``` java
	import java.util.ArrayList;
	import java.util.List;
	
	   public class Broker {
	   private List<Order> orderList = new ArrayList<Order>(); 
	
	   public void takeOrder(Order order){
	      orderList.add(order);		
	   }
	
	   public void placeOrders(){
	      for (Order order : orderList) {
	         order.execute();
	      }
	      orderList.clear();
	   }
	}
	```

#### 3.3.3 解释器模式（`Interpreter Pattern`）
#### 3.3.4 迭代器模式（`Iterator Pattern`）【常用】
- **`SUMMARY:` `Iterator Pattern`，提供一种方法顺序访问一个聚合对象中各个元素，而又无须暴露该对象的内部表示。**
- 迭代器模式（`Iterator Pattern`）用于顺序访问集合对象的元素，不需要知道集合对象的底层表示；
- 是`Java`和`.Net`编程环境中非常常用的设计模式；
- 迭代器模式属于行为型模式；
- 提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。
- *`img.`用例图：*<br>![][11]

	``` java
	package com.cmc.dp.pattern.iterator;
	
	public class NameRepository implements Container {
	
	    public String names[] = { "Robert", "John", "Julie", "Lora" };
	
	    @Override
	    public Iterator getIterator() {
	        return new NameIterator();
	    }
	
	    private class NameIterator implements Iterator {
	
	        int index;
	
	        @Override
	        public boolean hasNext() {
	            if (index < names.length) {
	                return true;
	            }
	            return false;
	        }
	
	        @Override
	        public Object next() {
	            if (this.hasNext()) {
	                return names[index++];
	            }
	            return null;
	        }
	    }
	
	}
	```

#### 3.3.5 中介者模式（`Mediator Pattern`）【常用】
- **`SUMMARY:` `Mediator Pattern`，用一个中介对象来封装一系列的对象交互，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。**
- 中介者模式（`Mediator Pattern`）是用来降低多个对象和类之间的通信复杂性；
- 提供了一个中介类，该类通常处理不同类之间的通信，并支持松耦合，使代码易于维护；
- 属于行为型模式；
- 用一个中介对象来**封装一系列的对象交互**，中介者使各对象不需要显式地相互引用，从而使其耦合松散，而且可以独立地改变它们之间的交互。
- *`img.`用例图：*<br>![][12]

	``` java
	package com.cmc.dp.pattern.mediator;
	
	public class User {
	
	    private String name;
	
	    public String getName() {
	        return name;
	    }
	
	    public void setName(String name) {
	        this.name = name;
	    }
	
	    public User(String name) {
	        this.name = name;
	    }
	
	    public void sendMessage(String message) {
	        // ChatRoom是中介者类
	        ChatRoom.showMessage(this, message);
	    }
	
	}
	```

#### 3.3.6 备忘录模式（`Memento Pattern`）
#### 3.3.7 观察者模式（`Observer Pattern`）【常用】
- **`SUMMARY:` `Observer Pattern`， 定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新。**
-  定义对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都得到通知并被自动更新；
- 属于行为型模式。
- *`img.`用例图：*<br>![][13]

#### 3.3.8 状态模式（`State Pattern`）
#### 3.3.9 策略模式（`Strategy Pattern`）【常用】
- **`SUMMARY:` `Strategy Pattern`，定义一系列的算法，把它们一个个封装起来，并且使它们可以在运行时被替换。**
- 在策略模式（`Strategy Pattern`）中，一个类的行为或其算法可以在运行时更改；
- 把一个策略封装成一个对象，和命令模式（把一个命令封装成一个对象）有点像；
- 属于行为型模式；
- 创建表示各种策略的对象和一个行为随着策略对象改变而改变的`context`对象。策略对象改变`context`对象的执行的算法。
- *`img.`用例图：*<br>![][14]

	``` java
	package com.cmc.dp.pattern.strategy;
	
	public class StrategyPatternDemo {
	
	    public static void main(String[] args) {
	        Context context = new Context(new OperationAdd());
	        System.out.println("10 + 5 = " + context.executeStrategy(10, 5));
	
	        context = new Context(new OperationSubstract());
	        System.out.println("10 - 5 = " + context.executeStrategy(10, 5));
	
	        context = new Context(new OperationMultiply());
	        System.out.println("10 * 5 = " + context.executeStrategy(10, 5));
	    }
	
	}
	```

#### 3.3.10 模板模式（`Template Pattern`）
- **`SUMMARY:`一个抽象类公开定义了执行它的方法的方式/模板，它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。**
- 在模板模式（`Template Pattern`）中，一个抽象类公开定义了执行它的方法的方式/模板，它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。
- 如`Servlet`的`service()`方法：
	- `Tomcat`容器实际调用的是这个`service()`法。`service()`方法的实现就是根据`http`求情的类型（`get`、`post`等），将处理委派给`doGet`、`doPost`等方法，由这些子类的方法来最终处理浏览器的请求。
- *`EG.`实例代码：*

	``` java
	public abstract class Game {
	
	   abstract void initialize();
	   abstract void startPlay();
	   abstract void endPlay();
	
	   // 模板方法
	   public final void play(){
	
	      // 初始化游戏
	      initialize();
	      // 开始游戏
	      startPlay();
	      // 结束游戏
	      endPlay();
	   }
	   
	}
	```
#### 3.3.11 访问者模式（`Visitor Pattern`）【常用】

### 3.4 Java EE型模式

<br>
## 四、常用模式（357模式）
- **`SUMMARY:`单（`shan`）工原，五结四（适）桥朱（组）门戴（代），观摩（模） 碟（迭）中策责命。**
- 三创，单工原；五结，适桥组门代；七行，责命迭中观策模。

### 4.1 创建型
#### 4.1.1 单例模式
#### 4.1.2 工厂模式
#### 4.1.3 原型模式

### 4.2 结构型
#### 4.2.1 适配器模式
#### 4.2.2 桥接模式
#### 4.2.3 组合模式
#### 4.2.4 门面模式
#### 4.2.5 代理模式

### 4.3 行为型
#### 4.3.1 责任链模式
#### 4.3.2 命令模式
#### 4.3.3 迭代器模式
#### 4.3.4 中介者模式
#### 4.3.5 观察者模式
#### 4.3.6 策略模式
#### 4.3.7 访问者模式

<br>
## 五、实际工作中使用的模式
- 单例模式
- 工厂模式
- 代理模式
- 门面模式
- 责任链模式

[1]: http://www.runoob.com/design-pattern/design-pattern-tutorial.html
[2]: http://p1.bqimg.com/567571/47d43f8d17d24672.jpg
[3]: http://p1.bpimg.com/567571/36eeeaa0ad53fb2b.jpg
[4]: http://i1.piimg.com/567571/494aac60a80bac8f.jpg
[5]: http://p1.bpimg.com/567571/fe2078f7a36dbe96.jpg
[6]: http://p1.bqimg.com/567571/d0cf0b6ab67ee7a2.jpg
[7]: http://p1.bqimg.com/567571/b92697ece0cb53e3.jpg
[8]: http://i1.piimg.com/567571/7c37dd50324683d4.jpg
[9]: http://i1.piimg.com/567571/5f80ac650e8bb432.jpg
[10]: http://p1.bpimg.com/567571/672e6b0fd3ed939d.jpg
[11]: http://p1.bqimg.com/567571/3aa5cfca788c79c5.jpg
[12]: http://p1.bpimg.com/567571/1a0ed882691d39e5.jpg
[13]: http://p1.bpimg.com/567571/e5bdc6f2befa416d.jpg
[14]: http://i1.piimg.com/567571/ee2dfc87aed49b0b.jpg
[15]: http://p1.bpimg.com/567571/36135f4fe3c10399.jpg