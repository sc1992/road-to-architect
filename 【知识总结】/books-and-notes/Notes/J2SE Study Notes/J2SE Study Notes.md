# J2SE Study Notes [^ history version] [^ reference]

@(Notes)[J2SE, Notes]

> VICTORY LOVES PREPARATION

[^ history version]: 
- 版本信息<br>
> 2017年2月10日 上午11:37:08
> 2017年2月8日 上午11:29:03
> 2017年2月7日 下午5:44:48
> 2017年2月6日 上午9:43:50
> 2016年8月23日 11:19
> 2016年8月23日 10:21
> 2015年7月20日
> 2015年3月10日

[^ reference]: 编程助手APP

[TOC]

***
## 〇、思维导图
- 暂缺；
- 目录结构需要进一步按照Java知识体系进行整理，然后整理出一套思维导图。


<br>
## 一、基础
### 1.1 Java基础
#### 1.1.1 Java SE Platform Structure
- `SUMMARY:`有必要进行各部分的总结。
- ![][1]
#### 1.1.2 简介以及开发环境配置
#### 1.1.3 一个完整的Java程序示例
#### 1.1.4 面向对象的特征有哪些？

#### 1.1.5 继承中的构造方法
- `SUMMARY:`“没有父，哪有子”
- 当类无构造方法的时候，`Java`会自动给类添加一个无参构造方法，但是当类有构造方法的时候，`Java`就不会默认添加一个无参数的构造方法；
- 子类中必须调用父类的构造方法（没有父，哪有子）。

> *注意*
> - 无论是隐式还是显式，子类必须调用父类中的构造方法。隐式的话也就说通过默认构造方法调用，显式的话也就说通过自己定义的构造方法进行调用。
> - 如果要手写调用父类构造方法，也就说`super()`，那么其必须放在子类构造方法的第一行。


#### 1.1.6 动态绑定（迟绑定或者多态）
- `SUMMARY:`在运行的时候，指向父类的指针重新指向了子类。

#### 1.1.7 数据类型
- `SUMMARY:`基本数据类型“四类八种”，引用数据类型三种。
- ![][19]

#### 1.1.8 注释
#### 1.1.9 标识符和关键字
#### 1.1.10 运算符
#### 1.1.11 内存空间的分配和回收
##### 1.1.11.1 内存分配
- `SUMMARY:`变量存储在堆栈中。
###### 1.1.11.1.1 堆
- 存放引用数据类型的实例。
###### 1.1.11.1.2 栈
- 存放简单数据类型变量（值和变量名）
- 存放引用数据类型的变量名以及它所指向实例的首地址。

##### 1.1.11.2 垃圾回收
- `Java`自动回收垃圾，但是却不精确。
- 有一个后台线程`gc`进行垃圾回收；
- 缺点：不能够精确地回收内存；
- *`eg.`代码实例：*

	``` java
	java.lang.System.gc();
	```
- 上面代码会建议系统回收内存，但是系统不一定会回应，会先去看内存时候够用，够用则不予理会，不够用才回去进行垃圾回收。

#### 1.1.12 局部变量、实例变量和静态变量
- 局部变量没有默认值，属性是有默认值的。
- *`EG.`实例：*`int`类型的属性默认值是`0`，而`Integer`类型的属性默认为`null`。

#### 1.1.13 包与导入语句剖析
#### 1.1.14 数组
#### 1.1.15 类和对象
#### 1.1.16 序列化 [^ Serialization Reference]
[^ Serialization Reference]: [百度百科][27]、[CSDN][28]

- **`SUMMARY:`序列化 （`Serialization`）是将对象的状态信息转换为可以存储或传输的形式的过程。**
- 序列化 （`Serialization`）是将对象的状态信息转换为可以存储或传输的形式的过程。在序列化期间，对象将其当前状态写入到临时或持久性存储区。以后，可以通过从存储区中读取或反序列化对象的状态，重新创建该对象。
- 序列化`ID`的作用 [^ Serialization ID Reference]：
[^ Serialization ID Reference]: [CSDN][29]

	- **`SUMMARY:` `java`的序列化机制是通过在运行时判断类的`serialVersionUID`来验证版本一致性的。**
	- 其实，这个序列化`ID`起着关键的作用，它决定着是否能够成功反序列化！简单来说，`java`的序列化机制是通过在运行时判断类的`serialVersionUID`来验证版本一致性的。在进行反序列化时，`JVM`会把传来的字节流中的`serialVersionUID`与本地实体类中的`serialVersionUID`进行比较，如果相同则认为是一致的，便可以进行反序列化，否则就会报序列化版本不一致的异常。
- *`EG.`实例代码：*

	``` java
	package com.cmc.demo.javase.serialization;
	
	import java.io.FileInputStream;
	import java.io.FileNotFoundException;
	import java.io.FileOutputStream;
	import java.io.IOException;
	import java.io.ObjectInputStream;
	import java.io.ObjectOutputStream;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	/**
	 *  对象序列化和反序列化Demo
	 * @author Thomas Lee
	 * @version 2017年4月5日 上午11:57:27
	 */
	public class ObjSerializationAndDeserializationDemo {
	
	    private static final Logger LOG = LoggerFactory.getLogger(ObjSerializationAndDeserializationDemo.class);
	
	    public static void main(String[] args) {
	        // 将Person对象序列化
	        serializePerson();
	        LOG.info("the result of deserialization: " + deserializePerson().toString());
	    }
	
	    /**
	     * 序列化Person对象，将其存储到 E:/hello.txt文件中
	     * @author Thomas Lee
	     * @version 2017年4月5日 上午11:57:38
	     */
	    private static void serializePerson() {
	        Person person = new Person();
	        person.setAge(30);
	        person.setName("SerializePerson");
	        try (ObjectOutputStream outputStream = new ObjectOutputStream(new FileOutputStream("E:/hello.txt"))) {
	            outputStream.writeObject(person);
	            LOG.info("序列化成功。");
	        } catch (FileNotFoundException e) {
	            LOG.error(e.getMessage(), e);
	        } catch (IOException e) {
	            LOG.error(e.getMessage(), e);
	        }
	    }
	
	    /**
	     * 执行反序列化过程生产Person对象
	     * @return 反序列化之后获取的对象
	     * @author Thomas Lee
	     * @version 2017年4月5日 上午11:58:51
	     */
	    private static Person deserializePerson() {
	        Person person = null;
	        try (ObjectInputStream inputStream = new ObjectInputStream(new FileInputStream("E:/hello.txt"))) {
	            try {
	                person = (Person) inputStream.readObject();
	                LOG.info("执行反序列化过程成功。");
	            } catch (ClassNotFoundException e) {
	                LOG.error(e.getMessage(), e);
	            }
	        } catch (FileNotFoundException e) {
	            LOG.error(e.getMessage(), e);
	        } catch (IOException e) {
	            LOG.error(e.getMessage(), e);
	        }
	        return person;
	    }
	
	}
	```
#### 1.1.17 static修饰符
#### 1.1.18 `final`关键字
- `SUMMARY:`被`final`修饰的变量、方法、类不能变相改变。
- 被修饰的变量不能被改变
- 被修饰的方法不能被重写
- 被修饰的类不能被继承

> *注意*
> -  final只针对内存地址有效，也就是说改变引用会导致编译期错误，但是其内容是可以变化的。

#### 1.1.19 访问权限控制
- *`img.` `java`中访问控制权限图表：<br>*![][22]

	> *注意*
	> -  **访问控制权限针对的是类的实例，也就说对象，而不是类本身。**

#### 1.1.20 接口
#### 1.1.21 包装类以及其拆箱装箱
- `SUMMARY:`自动实现基础数据类型和引用类型之间的转换。
##### 1.1.21.1 拆箱
- 把引用数据类型转为对应的基本数据类型

##### 1.1.21.2 装箱
- 把基本数据类型转换为对应的引用数据类型

> *注意*
> - `java`为了提高效率，`IntegerCache`类中有一个数组缓存了值从`-128`到`127`的`Integer`对象。当我们调用`Integer.valueOf（int i）`的时候，如果`i`的值是`>=-128`且`<=127`时，会直接从这个缓存中返回一个对象，否则就`new`一个`Integer`对象。
> - *源码：*
> ``` java
> public static Integer valueOf(int i)
> {
>     if(i >= -128 && i <= IntegerCache.high)
>         return IntegerCache.cache[i + 128];
>     else
>         return new Integer(i);
> }
> ```
> - 基本数据类型不允许对应的装箱类型变量的值是`null`（会报空指针异常）
> ``` java
> Integer a = null;
> int b = a;
> ```
>  ``` xml
> Exception in thread "main" java.lang.NullPointerException
>	at com.cmc.j2se.StreamDemo.main(StreamDemo.java:29)
> ```


#### 1.1.22 Object类浅析
#### 1.1.23 String、StringBuffer和StringBuilder
- `SUMMARY:`特殊的抽象类，主要偏向制定标准。

##### 1.1.23.1 String
- `SUMMARY:`使用了池化思想的不可改变的`Unicode`字符序列。
- 不可改变的`Unicode`字符序列；
- 池化思想，把需要共享的数据放在池中，用一个存储区域来存放一些公用资源以减少存储空间的开销；
- 在`String`类中，以字面值创建时，会到`Java`方法空间的串池中去查找，如果没有则会在串池里创建一个字符串对象，并返回其地址赋给对象变量，如果有就返回串池中字符串的地址，并把这个地址赋给对象变量；
- 如果是`new`，则会在堆空间中创建`String`类的对象，不会有上述的过程。

##### 1.1.23.2 StringBuffer
- `SUMMARY:`线程安全的可改变`Unicode`字符序列。
- 可改变的`Unicode`字符序列；
- 允许并发操作，是线程安全的；
- `String`类在进行字符串连接时会显得效率很低，就是因为它所产生的对象的属性是不能够修改的，当连接字符串时也就只能创建新的对象；
- 对于很多字符串连接时，应当使用`StringBuffer`类，使用这个类的对象来进行字符串连接时就不会有多余的中间对象生成，从而优化了效率。

##### 1.1.23.3 StringBuilder
- `SUMMARY:`非线程安全的可改变`Unicode`字符序列。
- 可改变的`Unicode`字符序列；
- 操作同`StringBuffer`，只是不支持并发操作，非线程安全的。

> *注意*
> - 长度可变选择`StringBuffer`或者`StringBuilder`；
> - 线程安全考虑`StringBuffer`、性能考虑`StringBuilder`。

#### 1.1.24 内部类
#### 1.1.25  异常
- `SUMMARY:`异常是`Java`提供的用于处理程序中的异常（实际生活中指的错误的一种）的一种机制。
- `Java`异常是`Java`提供的用于处理程序中的异常（实际生活中指的错误的一种）的一种机制；
- 设计良好的程序应该在异常发生的时候提供处理异常的方法，使程序不会因为异常的发生而阻断或产生不可预见的结果
- `Java`程序在运行中如果出现异常事件，则会产生一个异常类对象，该对象封装了异常事件的信息并将被提交给Java运行时系统，这个过程叫做抛出（`throw`）异常
- 当Java运行时系统接收到异常的时候，会寻找能处理这一异常的代码，并把当前的异常对象交给其处理，这一过程称为捕获（`catch`）异常
- 异常结构图<br>![][2]
- 上面就是异常的分类，`Throwable`是异常的祖先（`Object`是所有类的祖先，包括`Throwable`），其中`Error`抛出的是系统的错误（表示系统错误或低层资源的错误），不用程序员管，`Exception`抛出的是异常（由程序员导致的错误），**其中`RuntimeException`（系统会自动捕获）代表运行时常出现的异常，这类异常可以捕获也可以不捕获，其他的异常程序必须捕获。**
- 联系
	- 都继承`Throwable`类
- 区别
	- 异常
		- 可以是可被控制的（`checked`）或者是不可控制的（`unchecked`）
		- 表示一个由程序员导致的错误
		- 应该在应用程序级别进行处理
	- 错误
		- 总是不可控制的（`unchecked`）
		- 经常表示系统错误或者底层资源的错误
		- 一般程序员无法处理，也不需要进行处理
- 异常是一种错误（由程序员导致，但是这种错误是实际生活中的错误，不是程序语言中的错误，后者指系统错误或者		    底层资源的错误）

#### 1.1.26 断言（assert）
#### 1.1.27 “==”和equals
#### 1.1.28 Overload和Override
#### 1.1.29 抽象类和接口
##### 1.1.29.1 抽象类
- `SUMMARY:`人们在认识事物的时候，会把具有相同特征和行为的事物归为一个抽象类。主要偏向代码复用。
- `abstract`表示抽象的，是最重要的一个修饰符，可以修饰类和方法。分别叫做抽象方法和抽象类；
- **人们在认识事物的时候，会把具有相同特征和行为的事物归为一个抽象类。**比如动物就是一个很抽象的概念。当得到动物的实例时，总是某个具体物种的实例。所以说，在需要某个抽象类的实例时，只能够用某个具体类的实例来代替；
- 抽象类不能实例化，不能生成抽象类的对象，但能定义一个引用。

###### 1.1.29.1.1 修饰类
- **会使这个类成为一个抽象类，这个类将不能生成对象实例，但可以做为对象变量声明的类型，也就是编译时类型；**
- 抽象类就相当于一个类的半成品，需要子类继承并覆盖其中的抽象方法，这时子类才又创建实例的能力，**如果子类没有实现父类的抽象方法，那么子类也要为抽象类。**

###### 1.1.29.1.2 修饰方法
- 会使这个方法变成抽象方法，也就是只有声明而没有实现，需要子类继承实现；
- 抽象方法代表了某种标准，定义标准、定义功能，在子类中去实现功能（子类继承了父类并需要给出从父类继承的抽象方法的实现）。
- 方法一时间想不到怎么被实现，或有意要子类去实现而定义某种标准，这个方法可以被定义为抽象。

> *注意*
> - 有抽象方法的类一定是抽象类，但是抽象类中不一定都是抽象方法，**也可以全是具体方法。**
> - 当一个非抽象类继承自某个抽象类时，必须实现所继承抽象类的所有抽象方法，即**抽象类的第一个非抽象子类必须要实现其父类所有的抽象方法**。其中也包括了父类继承的抽象方法。
> - 一个类中只要包含有抽象方法，那么这个类就必须被定义成抽象类，反之，即使一个类不包含任何抽象方法，这个类仍然可以被定义成抽象类。
> - `abstract`和`final`不能同时使用，这两个关键字有着相反的含义。`abstract`修饰方法和类，就是想让别人重写或者是继承的，而**`final`是阻止重写和继承的**。`private`和`abstract`也不能同时修饰方法。因为**`private`阻止继承**，也就阻止了重写实现，与`abstract`的意义相违背。

##### 1.1.29.2 接口
- `SUMMARY:`特殊的抽象类，主要偏向制定标准。
###### 1.1.29.2.1 定义
- `SUMMARY:`接口从本质上说是一种特殊的抽象类。其中所有的方法和属性都是公开或者静态的。     
- 接口从本质上说是一种特殊的抽象类。
- 在接口中，所有的方法为公开、抽象的方法：`public abstract`；
- 在接口中，所有的属性都是公开、静态的常量：`public static final`；
- 接口与接口之间可以多继承，用`extends`，多个之间用逗号隔开；
- 接口中没有构造方法，不能用“`new`接口名”来实例化一个接口，但可以声明一个接口。

###### 1.1.29.2.2 实现
- 一个类实现一个接口必须实现接口中所有的方法，否则其为抽象类，**并且在实现类中的方法要加上`public`(不能省略)；**
- 类中的默认修饰符：`default`；
- 接口中的默认修饰符：`public`；
- 一个类除了继承另一个类外（只能继承一个类），还可以实现多个接口(接口之间用逗号分隔)。

###### 1.1.29.2.3 作用
- 间接实现多继承：用接口来实现多继承并不会增加类关系的复杂度。**因为接口不是类，与类不在一个层次上，是在类的基础上进行再次抽象；**
- **接口可以抽象出次要类型，分出主、次关系类型，符合看世界的一般方法；**
- 接口隔离，与封装性有关。一个对象都有多个方面，可以只展示其中几个方面，其他的都隐藏。因此可以看为“更高层次的封装”，把一个大接口做成若干个小接口；
- **通过接口制定标准（最重要的作用）；**
- 接口：制定标准；
- 接口的调用者：使用标准；
- 接口的实现类：实现标准；
- **解耦合作用：把使用标准和实现标准分开，使得标准的制定者和实现者解除偶合关系，具有极强的可移植性。**

###### 1.1.29.2.4 接口编程原则
- **尽量针对接口编程（能用接口就尽量用接口）；**
- **接口隔离原则（用若干个小接口取代一个大接口）。**

> *注意*
> - 接口中没有构造器，也没有`main`方法；
> - 在类的继承中，只能做单重继承，而实现接口时，一次则可以实现多个接口，每个接口间使用逗号“,”分隔。这时就可能出现常量或方法名冲突的情况，解决该问题时，如果常量冲突，则需要明确指定常量的接口，这可以通过“接口名.常量”实现。如果出现方法冲突时，则只要实现一个方法就可以了。

##### 1.1.29.3 区别
###### 1.1.29.3.1 语法
- `SUMMARY:`**接口中的方法都是抽象公开的，抽象类中的方法抽象、具体都行，接口中属性都是公开常量，抽象类中是普通成员变量。**
- 抽象类可以有构造方法，接口中不能有构造方法；
- 抽象类中可以有普通成员变量，接口中没有普通成员变量；
- 抽象类中可以包含非抽象的普通方法，接口中的所有方法必须都是抽象的，不能有非抽象的普通方法；
- 抽象类中的抽象方法的访问类型可以是`public`，`protected`和（默认类型，虽然`eclipse`下不报错，但应该也不行），但接口抽象方法只能是`public`类型的，并且默认即为`public abstract`类型；
- 抽象类中可以包含静态方法，接口中不能包含静态方法；
- 抽象类和接口中都可以包含静态成员变量，抽象类中的静态成员变量的访问类型可以任意，但接口中定义的变量只能是`public static final`类型，并且默认即为`public static final`类型；
- 一个类可以实现多个接口，但只能继承一个抽象类。

###### 1.1.29.3.2 应用
- `SUMMARY:`**接口在应用上主要作用在系统代码架构设计上，定义模块之间的通信契约，而抽象类主要偏向于代码重用。**
- 接口更多的是在系统架构设计方法发挥作用，主要用于定义模块之间的通信契约；
- 而抽象类在代码实现方面发挥作用，可以实现代码的重用；
- *`eg.`*模板方法设计模式是抽象类的一个典型应用，假设某个项目的所有Servlet类都要用相同的方式进行权限判断、记录访问日志和处理异常，那么就可以定义一个抽象的基类，让所有的`Servlet`都继承这个抽象基类，在抽象基类的`service`方法中完成权限判断、记录访问日志和处理异常的代码，在各个子类中只是完成各自的业务逻辑代码。

> *注意*
> - 这道题的思路是先从总体解释抽象类和接口的**基本概念**，然后再比较两者的**语法细节**，最后再说两者的**应用区别。**比较两者语法细节区别的条理是：**先从一个类中的构造方法、普通成员变量和方法（包括抽象方法），静态变量和方法，继承性等6个方面逐一去比较回答，接着从第三者继承的角度的回答，特别是最后用了一个典型的例子来展现自己深厚的技术功底。**

#### 1.1.30 class.forName作用
#### 1.1.31 ClassLoader加载class
#### 1.1.32 `equals()`和`hashCode()`
- `SUMMARY:`**通过hash算法，数据查询速度（通过将哈希码分组）大大提升，数据插入通过hash散列直接定位物理位置。equals相等，hashCode必定相等，反之则不是。**
- 通常想查找一个集合中是否包含某个对象，就是逐一取出每个元素与要查找的元素进行比较，当发现某个元素与要查找的对象进行`equals`方法比较的结果相等时，则停止继续查找并返回肯定的信息，否则返回否定的信息，如果一个集合中有很多元素譬如成千上万的元素，并且没有包含要查找的对象时，则意味着你的程序需要从该集合中取出成千上万个元素进行逐一比较才能得到结论，于是，有人就发明了一种哈希算法来提高从集合中查找元素的效率，这种方式**将集合分成若干个存储区域，每个对象可以计算出一个哈希码，可以将哈希码分组，每组分别对应某个存储区域，根据一个对象的哈希码就可以确定该对象应该存储的那个区域。**
- `hashCode`方法可以这样理解：**它返回的就是根据对象的内存地址换算出的一个值。这样一来，当集合要添加新的元素时，先调用这个元素的`hashCode`方法，就一下子能定位到它应该放置的物理位置上。如果这个位置上没有元素，它就可以直接存储在这个位置上，不用再进行任何比较了；如果这个位置上已经有元素了，就调用它的`equals`方法与新元素进行比较，相同的话就不存了，不相同就散列其它的地址。**这样一来实际调用`equals`方法的次数就大大降低了，几乎只需要一两次。
- 只有类的实例对象要被采用哈希算法进行存储和检索时，这个类才需要按要求覆盖`hashCode`方法，即使程序可能暂时不会用到当前类的`hashCode`方法，但是为它提供一个`hashCode`方法也不会有什么不好，没准以后什么时候又用到这个方法了，所以，通常要求`hashCode`方法和`equals`方法一并被同时覆盖。
- `equals()`相等的两个对象，`hashcode()`一定相等；`equals()`不相等的两个对象，却并不能证明他们的`hashcode()`不相等。换句话说，`equals()`方法不相等的两个对象，`hashcode()`有可能相等。反过来：`hashcode()`不等，一定能推出`equals()`也不等；`hashcode()`相等，`equals()`可能相等，也可能不等。
- **通常来说，一个类的两个实例对象用`equals`方法比较的结果相等时，它们的哈希码也必须相等，但反之则不成立，即`equals`方法比较结果不相等的对象可以有相同的哈希码，或者说哈希码相同的两个对象的`equals`方法比较的结果可以不等。**
- 当一个对象被存储进`hashset`集合中以后，就不能修改这个对象中的那些参与计算哈希值的字段了，否则，对象修改后的哈希值与最初存储进`hashset`集合时的哈希值就不同了，这种情况下，即使在`contains`方法使用该对象的当前引用作为的参数去`hashset`集合中检索对象，也将返回找不到对象的结果，这也会导致无法从`hashset`集合中单独删除当前对象，从而造成内存泄露，所谓的内存泄露也就说有一个对象不再被使用，但它一直占有内存空间，没有被释放。

#### 1.1.34 是否可以从一个static方法内发出对非static方法的调用

#### 1.1.35 重写规则
- `SUMMARY:`重写是建立在父类或者父接口的基础上的。
- 重写方法不能比被重写方法限制有更严格的访问级别；
- 参数列表必须与被重写方法的相同；
- 返回类型必须与被重写方法的返回类型相同；
- 重写方法不能抛出新的异常或者比被重写方法声明的检查异常更广的检查异常。但是可以抛出更少，更有限或者不抛出异常。
	- *`eg.`代码如下：* 
	``` java
	import java.io.*;
	
	public class Test {
	    public static void main(String[] args) {
	        Animal h = new Horse();
	        try {
	            h.eat();
	        } catch (Exception e) {
	        }
	    }
	}
	
	class Animal {
	    public void eat() throws Exception {
	        System.out.println("Animal is eating.");
	        throw new Exception();
	    }
	}
	
	class Horse extends Animal {
	    public void eat() throws IOException {
	        System.out.println("Horse is eating.");
	        throw new IOException();
	    }
	}
	```

	- 这个例子中，父类抛出了检查异常Exception，子类抛出的IOException是Exception的子类，也即是比被重写的方法抛出了更有限的异常，这是可以的。如果反过来，父类抛出IOException，子类抛出更为宽泛的Exception，那么不会通过编译的。

		> *注意*
		> - 这种限制只是针对检查异常，至于运行时异常RuntimeException及其子类不再这个限制之中。

- 不能重写被标识为`final`的方法；
- 如果一个方法不能被继承，则不能重写它。
	- 比较典型的就是父类的private方法。下例会产生一个有趣的现象。
		``` java
		public class Test {
		    public static void main(String[] args) {
		        //Animal h = new Horse();
		        Horse h = new Horse();
		        h.eat();
		    }
		}
		
		class Animal {
		    private void eat() {
		        System.out.println("Animal is eating.");
		    }
		}
		
		class Horse extends Animal {
		    public void eat() {
		        System.out.println("Horse is eating.");
		    }
		}
		```
	- 这段代码是能通过编译的，表面上看来违反了重写规则，但实际上那是一点巧合。`Animal`类的`eat()`方法不能被继承，因此`Horse`类中的`eat()`方法是一个全新的方法，不是重写也不是重载，只是一个只属于`Horse`类的全新的方法！这点让很多人迷惑了，但是也不是那么难以理解。*`eg.`下面代码：*
	``` java
	Animal horse = new Horse();
	horse.eat();
	```
	- 编译器会报错，为什么呢？`Horse`类的`eat()`方法是`public`的啊！应该可以调用啊！请牢记，**多态只看父类引用的方法，而不看子类对象的方法！**

#### 1.1.36 泛型 [^ genericity reference]
- **`SUMMARY:`一个“宽泛”的数据类型。**
- 起因
	- `JDK1.4`以前类型不明确，装入集合的类型都被当做`Object`对待，从而失去自己的实际类型；
	- 从集合中取出时往往需要转型，效率低，容易产生错误。
- 解决方法
	- 在定义集合的时候同时定义集合中对象的类型
- 优点
	- 增强程序的可读性和稳定性
- ![][4]

[^ genericity reference]: [博客园][3]、[CSDN][26]
#### 1.1.37 编程常识
- `a += b`  <==> `a = (a.Type) a + b`；
- 数组下标被用来计算元素位置与第一个元素之间的偏移量；
- 不同文件系统使用不同的符号表示行结束符
	- UNIX：\n
	- Windows：\r\n
	- Macos：\n\r

#### 1.1.38 递归 [^ recursion reference]
[^ recursion reference]: [百度百科][24]

- **`SUMMARY:`递归就是程序调用本身的过程。注意：需要一个终止条件。**
- 程序调用自身的编程技巧称为递归（`recursion`）；
- 递归做为一种算法在程序设计语言中广泛应用；
- 一个过程或函数在其定义或说明中有直接或间接调用自身的一种方法，它通常把一个大型复杂的问题层层转化为一个与原问题相似的规模较小的问题来求解，递归策略只需少量的程序就可描述出解题过程所需要的多次重复计算，大大地减少了程序的代码量；
- 递归的能力在于用有限的语句来定义对象的无限集合；
- 一般来说，递归需要有边界条件、递归前进段和递归返回段。当边界条件不满足时，递归前进；当边界条件满足时，递归返回。

### 1.2 多线程
- `SUMMARY:`线程可以看成是轻量级的进程，同一类线程共享代码和数据空间，每个线程有独立的运行栈和程序计数器（`PC`），线程切换开销小。
- *此处归纳了线程的基本知识，以后深入学习线程编程。可参考编程助手`APP`。*
#### 1.2.1 进程和线程
- 进程
	- 同一个操作系统中执行的一个子程序，包含了三部分：虚拟CPU、代码、数据；
	- 多进程指的是同一个操作系统中执行的多个冰心贵的子程序。可以提高CPU的使用率；
	- 进程有独立的进程空间（堆空间和栈空间）。
- 线程
	- 在同一个进程中执行的子程序流；
	- 多线程指的是同一个进行当中并发执行的多个子程序流。可以提高CPU的使用率；
	- 线程的堆空间是共享的，栈空间是独立的，线程消耗的资源比进程小，相互之间可以影响。

	> *注意*
	> - 多进程：在操作系统中能同时运行多个任务（程序）
	> - 多线程：在同一应用程序中有多个顺序流同时执行
	> - 多线程的同步：通过在代码上加`synchronized`修饰符。

	- *`eg.`*线程状态转换示意图：<br>![][13]
#### 1.2.2 线程编程的两种方法
##### 1.2.2.1 通过实现`Runnable`接口
- *`eg.` 代码实例：*
	``` java
	package com.cmc.j2se;
	
	/**
	 * 创建线程实例
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月7日 下午2:36:05
	 */
	public class ThreadDemo {
	
	    public static void main(String[] args) {
	        Thread myThread = new ThreadDemo().new MyThread();
	        myThread.start();
	    }
	
	    /**
	     * 集成Thread类
	     * @author Thomas Lee
	     * @version 2017年2月7日 下午2:43:52
	     */
	    class MyThread extends Thread {
	        @Override
	        public void run() {
	            super.run();
	            System.out.println("Mythread thread start...");
	        }
	    }
	
	}
	```

##### 1.2.2.2 通过继承`Thread`类
- *`eg.` 代码实例：*
	``` java
	package com.cmc.j2se;
	
	/**
	 * 创建线程实例
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月7日 下午2:36:05
	 */
	public class ThreadDemo {
	
	    public static void main(String[] args) {
	        Runnable runner = new ThreadDemo().new Runner();
	        Thread myThread = new Thread(runner);
	        myThread.start();
	    }
	
	    /**
	     * 实现Runnable接口
	     * @author Thomas Lee
	     * @version 2017年2月7日 下午2:43:39
	     */
	    class Runner implements Runnable {
	        @Override
	        public void run() {
	            System.out.println("Mythread thread start...");
	        }
	    }
	
	}
	```
	
#### 1.2.3 Thread中的一些方法
#### 1.2.4 线程的生命周期
#### 1.2.5 多线程的同步
#### 1.2.6 sleep()和wait()
#### 1.2.7 当一个线程进入对象的一个synchronized方法后，其他线程是否可以进入此对象的其他方法
#### 1.2.8 简述synchronized和java.util.concurrent.locks.Lock的异同

### 1.3 集合框架
- **`SUMMARY:` 大致可分为三大类：`Set`、`List`和`Map`，具体每个内部用两个标准进行分类，数组或者链表分类标准以及线程是否安全。**
- 具体实现原理有待深入了解和总结。
- ![][20]
- ![][21]
#### 1.3.1 基本概念
#### 1.3.2 Collection接口
- 最基本的集合接口，代表一组`Object`。

##### 1.3.2.1 Set
- 无序的，不允许有重复的元素的集合。

###### 1.3.2.1.1 HashSet
- `SUMMARY:` `HashSet`实现`Set`接口，由哈希表（实际上是一个`HashMap`实例）支持。它不保证`set`的迭代顺序，**特别是它不保证该顺序恒久不变**。此类允许使用`null`元素。
- `HashSet`实现`Set`接口，由哈希表（实际上是一个`HashMap`实例）支持。它不保证`set`的迭代顺序；特别是它不保证该顺序恒久不变。此类允许使用`null`元素。
- `Object`类中的`hashCode()`的方法是所有类都会继承的方法，这个方法会算出一个`Hash`码值返回，`HashSet`会用`Hash`码值去和数组长度取模，对象的模值（这个模值就是对象要存放在数组中的位置，和数组的下标相同）相同时才会判断数组中的元素和要加入的对象的内容是否相同，如果不同才会再找位置添加进去，相同则不允许添加；
- 如果数组中的元素和要加入的对象的`hashCode()`返回了相同的`Hash`码值，才会用`equals()`方法来判断两个对象的内容是否相同；
- `HashSet`的实现：
	- 对于`HashSet`而言，它是基于`HashMap`实现的，`HashSet`底层使用`HashMap`来保存所有元素，因此`HashSet`的实现比较简单，相关`HashSet`的操作，基本上都是直接调用底层`HashMap`的相关方法来完成。

	> *注意*
	> - 要存入`HashSet`的集合对象中的自定义类必须覆盖`hashCode()`、`equals()`两个方法，才能保证集合中元素不重复。

###### 1.3.2.1.2 TreeSet
- 可排序的`Set`；
- `SortedSet`接口是`Set`的子接口，`TreeSet`是`SortedSet`接口的实现类，他可以对集合中的元素进行排序；
- 将自定义类的对象存放在`TreeSet`中，这个类需要实现了`Comparable`接口，`TreeSet`可以自动过滤掉重复元素所以不在需要重载`hashCode()`方法，`TreeSet`会根据比较规则判断元素内容是否相同，不同则会存入，`TreeSet`会在元素存入时就进行排序。

###### 1.3.2.1.3 LinkedHashSet
##### 1.3.2.2 List
- 有序的、可重复的单元素集合。

###### 1.3.2.2.1 ArrayList
- `SUMMARY:`实质上是一个自动增长的数组、查询效率比较高，增删的效率比较低、非线程安全。
- **实质上是一个自动增长的数组**；
- **查询效率比较高，增删的效率比较低**，适用于查询比较频繁，增删动作较少的元素管理的集合；
- 加载大批量的数据时，先进行手动扩容（就是调用`ensureCapacity(int minCapacity)`方法），这样可以提高效率；
- `ArrayList`是`List`接口的可变数组的实现。实现了所有可选列表操作，并允许包括`null`在内的所有元素。除了实现`List`接口外，此类还提供一些方法来操作内部用来存储列表的数组的大小；
- 每个`ArrayList`实例都有一个容量，该容量是指用来存储列表元素的数组的大小。它总是至少等于列表的大小。随着向`ArrayList`中不断添加元 素，其容量也自动增长。自动增长会带来数据向新数组的重新拷贝，因此，如果可预知数据量的多少，可在构造`ArrayList`时指定其容量。在添加大量元素前，应用程序也可以使用`ensureCapacity`操作来增加`ArrayList`实例的容量，这可以减少递增式再分配的数量；
- 注意，此实现不是同步的。如果多个线程同时访问一个`ArrayList`实例，而其中至少一个线程从结构上修改了列表，那么它必须保持外部同步。

###### 1.3.2.2.2 LinkedList
- **底层是用双向循环链表来实现的**；
- **查询效率低，但是增删效率很高**，适用于增删动作的比较频繁，查询次数较少的元素管理的集合。

###### 1.3.2.2.3 ArrayList

#### 1.3.3 Map接口
- 提供`key`到`value`的映射。

##### 1.3.3.1 HashMap
- `SUMMARY:`实质上是基于哈希表的`Map`接口的实现（链表散列）、非线程安全。
- 基于哈希表的`Map`接口的实现，此实现提供所有可选的映射操作，并允许使用`null`值和`null`键；
- 非线程安全，不支持并发控制，允许空的键值对。
- `HashMap`是基于哈希表的`Map`接口的非同步实现。此实现提供所有可选的映射操作，并允许使用`null`值和`null`键。此类不保证映射的顺序，特别是它不保证该顺序恒久不变。
- `HashMap`的数据结构
	- 在`java`编程语言中，最基本的结构就是两种，一个是数组，另外一个是模拟指针（引用），所有的数据结构都可以用这两个基本结构来构造的，`HashMap`也不例外。`HashMap`实际上是一个“链表散列”的数据结构，即数组和链表的结合体。
- `HashMap`底层就是一个数组结构，数组中的每一项又是一个链表。当新建一个`HashMap`的时候，就会初始化一个数组。

##### 1.3.3.2 HashTable
- 同`HashMap`，一般不使用；
- 是线程安全，支持并发控制，不允许有空的键值对。

##### 1.3.3.3 TreeMap
##### 1.3.3.4 LinkedHashMap
- `SUMMARY:` `LinkedHashMap`是`Map`接口的哈希表和（双向）链接列表实现，具有可预知的迭代顺序。
- 概述
	- `LinkedHashMap`是`Map`接口的哈希表和链接列表实现，具有可预知的迭代顺序。此实现提供所有可选的映射操作，并允许使用`null`值和`null`键。此类不保证映射的顺序，特别是它不保证该顺序恒久不变。
	- `LinkedHashMap`实现与`HashMap`的不同之处在于，后者维护着一个运行于所有条目的双重链接列表。此链接列表定义了迭代顺序，该迭代顺序可以是插入顺序或者是访问顺序。
	- 注意，此实现不是同步的。如果多个线程同时访问链接的哈希映射，而其中至少一个线程从结构上修改了该映射，则它必须保持外部同步。
- 实现
	- 对于`LinkedHashMap`而言，它继承与`HashMap`、底层使用哈希表与双向链表来保存所有元素。其基本操作与父类`HashMap`相似，它通过重写父类相关的方法，来实现自己的链接列表特性。

#### 1.3.4 ArrayList、Vector和LinkedList的存储性能
- `ArrayList`和`Vector`都是使用**数组方式**存储数据，此数组元素数大于实际存储的数据以便增加和插入元素，它们都允许直接按序号索引元素，但是插入元素（**插在数组的中间部分**）涉及数组元素移动等内存操作，所以**索引数据快而插入数据慢**，`Vector`由于使用了`synchronized`方法（**线程安全**），通常**性能**上较`ArrayList`差，而`LinkedList`使用**双向链表**实现存储，按序号索引数据需要进行前向或后向遍历，但是插入数据时只需要记录本项的前后项即可，所以**插入速度较快**，`LinkedList`也是**线程不安全**的；
- `LinkedList`提供了一些方法，使得`LinkedList`可以**被当作堆栈和队列来使用**。

	``` java
	new LinkedList<String>().addFirst("First");
	new LinkedList<String>().addLast("Last");
	```


> *注意*
> - 遍历`iterator`增强`for`循环内部实质上调用了`interator`，除了简单的遍历，不建议使用增强`for`循环。
> - `Map`中`key`一般是`8`种基本类型的封装类或者是`String`类，拿自己自定义的类作为`Key`没有意义；
> - `Map`中`key`不可重复，`value`可以重复。


### 1.4 IO流
- `SUMMARY:`流是以规定顺序被读取一次的数据序列。
#### 1.4.1 输入、输出原理
- `Java`程序中，对于数据的输入、输出操作以“流”（`stream`）方式进行；
- `J2SE`提供了各种各样的“流”类，用以获取不同种类的数据；
- 程序中通过标准的方法输入或输出数据。
- *`eg.`流模型：*<br>![][5]

#### 1.4.2 流的概念以及基本分类
##### 1.4.2.1 输入流和输出流
- 输入流：读入到内存中的流。
- 输出流：从内存读出的流。

> *注意*
> -  “输入”、“输出”概念是相对于内存而言。

##### 1.4.2.2 字节流和字符流
- `SUMMARY:`一些可以用字符表示的字母、汉字等可以使用字符流，其他的都是用的字节流。
- 字节流：以字节为数据处理单位的流。
- 字符流：以字符为数据处理单位的流。

> *注意*
> -  按照处理数据单位不同分为字节流和字符流；
> - `Java`中以`stream`结尾的都是字节流，以`Reader`或者`Writer`结尾的都是字符流；
> - 使用字节流更好，因为硬盘上所有的文件都是以字节的形式进行传输或者保存的，包括图片等内容。但是字符只是在内存中才会形成的，所以在开发中，字节流使用的更为广泛。
> - 只要是处理纯文本的数据，优先考虑字符流，除此之外使用字节流；
> - 一些可以用字符表示的字母、汉字等可以使用字符流，其他的都是用的字节流。

##### 1.4.2.3 节点流
- 类别<br>![][6]
###### 1.4.2.3.1 字节流
- 从一个特定的数据源（节点，如：文件，内存）读写数据；
- *`eg.`代码实例：*
	``` java
	   /**
	     * FileInputStream和FileOutputStream实例
	     * 
	     * @author Thomas Lee
	     * @version 2017年2月6日 下午5:15:26
	     */
	    public void demoFileInputStreamAndFileOutputStream() throws IOException {
	        int data = 0;
	        FileInputStream fileInputStream = new FileInputStream(FILE_INPUT_PATH);
	        FileOutputStream fileOutputStream = new FileOutputStream(FILE_OUTPUT_PATH);
	        while (-1 != (data = fileInputStream.read())) {
	            fileOutputStream.write(data);
	        }
	        fileInputStream.close();
	        fileOutputStream.close();
	    }
	
	```
###### 1.4.2.3.2 字符流
- *`eg.`代码实例：*

	``` java
	  /**
	    * FileReader和FileWriter实例
	    * 
	    * @author Thomas Lee
	    * @version 2017年2月6日 下午5:19:25
	    */
	   public void demoFileReaderAndFileWriter() throws IOException {
	       FileReader fileReader = new FileReader(FILE_INPUT_PATH);
	       FileWriter fileWriter = new FileWriter(FILE_OUTPUT_PATH);
	       int data = 0;
	       while (-1 != (data = fileReader.read())) {
	           fileWriter.write(data);
	       }
	       fileReader.close();
	       fileWriter.close();
	   }
	```

##### 1.4.2.4 处理流
- “连接”在已经存在的流（节点流或者处理流）上。
- 类别<br> ![][7]
###### 1.4.2.4.1 缓冲流
- *`eg.`代码实例：*

	``` java
	    /**
	     * BufferedInputStream和BufferedOutputStream实例
	     * 
	     * @author Thomas Lee
	     * @version 2017年2月6日 下午5:22:43
	     * @throws IOException 
	     */
	    public void demoBufferedInputStreamAndBufferedOutputStream() throws IOException {
	        FileInputStream fileInputStream = new FileInputStream(FILE_INPUT_PATH);
	        BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
	        int data = 0;
	        while (-1 != (data = bufferedInputStream.read())) {
	            System.out.println((char) data);
	        }
	        bufferedInputStream.close();
	        fileInputStream.close();
	    }
	
	    /**
	     * BufferedReader和BufferedWriter实例
	     * 
	     * @author Thomas Lee
	     * @version 2017年2月7日 上午11:03:39
	     */
	    public void demoBufferedReaderAndBufferedWriter() throws IOException {
	        FileReader fileReader = new FileReader(FILE_INPUT_PATH);
	        FileWriter fileWriter = new FileWriter(FILE_OUTPUT_PATH);
	        BufferedReader bufferedReader = new BufferedReader(fileReader);
	        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
	        for (int i = 0; i < 100; i++) {
	            bufferedWriter.write(String.valueOf(Math.random()));
	            bufferedWriter.newLine();
	        }
	        bufferedWriter.flush();
	        String str = null;
	        while (null != (str = bufferedReader.readLine())) {
	            System.out.println(str);
	        }
	        bufferedReader.close();
	        bufferedWriter.close();
	        fileReader.close();
	        fileWriter.close();
	    }
	```
###### 1.4.2.4.2 转换流
###### 1.4.2.4.3 数据流
###### 1.4.2.4.4 Print流
- *`eg.`代码实例：*

	``` java
	    /**
	     * PrintStream和PrintWriter实例
	     * 
	     * @author Thomas Lee
	     * @version 2017年2月7日 下午1:23:12
	     */
	    public void demoPrintStreamAndPrintWriter() throws FileNotFoundException {
	        FileOutputStream fileOutputStream = new FileOutputStream(FILE_OUTPUT_PATH, true);
	        PrintStream printStream = new PrintStream(fileOutputStream);
	        System.setOut(printStream);
	        for (int i = 0; i < 100; i++) {
	            System.out.println(String.valueOf(Math.random()));
	        }
	    }
	```
###### 1.4.2.4.5 Object流

#### 1.4.3 四大基础流
- `SUMMARY:` `InputStream`、`OutputStream`、`Reader`和`Writer`。
- `J2SE`所提供的所有流类型都位于`java.io`包下，分别继承以下四种抽象流(都是抽象类)类型：<br>![][8]
##### 1.4.3.1 InputStream
- 读取字节流，通常用于处理二进制文件 [^ 字节流 reference]；
[^ 字节流 reference]: [百度百科][25]

- 继承自`InputStream`的流都是用于向程序中输入数据，且数据的单位为字节（`8bit`）；
- *`eg.`图表实例：*<br>![][9]
##### 1.4.3.2 OutputStream
- 继承自`OutputStream`的流是用于程序中输出数据（到硬盘），且数据的单位为字节（`8bit`）；
- *`eg.`图表实例：*<br>![][10]
##### 1.4.3.3 Reader
- 继承自`Reader`的流都是用于向程序中输入数据，且数据的单位都是字符（`16bit`，考虑到有的数据单位是`16bit`的，如：汉字）；
- *`eg.`图表实例：*<br>![][11]
##### 1.4.3.4 Writer
- 继承自`Writer`的流都是用于程序中输出数据，且数据单位为字符（`16bit`）；
- *`eg.`图表实例：*<br>![][12]

> *注意*
> - 图中深色为节点流，浅色为处理流

#### 1.4.4 常用流
#### 1.4.5 File类基本用法
#### 1.4.6 字节流例子
#### 1.4.7 TCP、UDP
#### 1.4.8 OutputStreamWriter和InputStreamReader
#### 1.4.9 管道流
#### 1.4.10 打印流
#### 1.4.11 输入输出重定向 
#### 1.4.12 BufferedReader的小例子
#### 1.4.13 Scanner类
#### 1.4.14 数据操作流（DataOuputStream和DataInputStream）
#### 1.4.15 合并流（SequenceInputStream）
#### 1.4.16 文件压缩类（ZipOutputStream）
#### 1.4.17 回退流（PushBackInputStream）
#### 1.4.18 对象序列化
#### 1.4.19 使用OutputStream向屏幕输出内容

#### 1.4.20 NIO
##### 1.4.20.1 简介
- `SUMMARY:` 为所有的原始类型提供缓存支持、非阻塞`IO`。
- `NIO`是`Non-blocking IO`的简称，在`jdk1.4`里提供的新`api` 。`Sun`官方标榜的特性如下： **为所有的原始类型提供（`Buffer`）缓存支持**。字符集编码解码解决方案；
- `Java NIO`和`IO`之间第一个最大的区别是，`IO`是面向流的，`NIO`是面向缓冲区的；
- `Channel`：一个新的原始`I/O`抽象。 支持锁和内存映射文件的文件访问接口。 提供多路（`non-bloking`） 非阻塞式的高伸缩性网络`I/O` 。
- 阻塞与非阻塞`IO`
	- `Java IO`的各种流是阻塞的。这意味着，当一个线程调用`read()`或`write()`时，该线程被阻塞，直到有一些数据被读取，或数据完全写入。该线程在此期间不能再干任何事情了。`Java NIO`的非阻塞模式，使一个线程从某通道发送请求读取数据，但是它仅能得到目前可用的数据，如果目前没有数据可用时，就什么都不会获取。而不是保持线程阻塞，所以直至数据变的可以读取之前，该线程可以继续做其他的事情。 非阻塞写也是如此。一个线程请求写入一些数据到某通道，但不需要等待它完全写入，这个线程同时可以去做别的事情。 线程通常将非阻塞IO的空闲时间用于在其它通道上执行`IO`操作，所以一个单独的线程现在可以管理多个输入和输出通道（`channel`）；

##### 1.4.20.2 通道和缓冲区
- 通道和缓冲区是`NIO`中的核心对象：
###### 1.4.20.2.1 通道
- `Channel`是一个对象，可以通过它读取和写入数据，相当于`IO`中的流；
- 通道和流的不同之处在于通道是双向的，而流是单向的，前者可以同时读写。

###### 1.4.20.2.2 缓冲区
- 实质上是一个数组（字节数组、整型数组和字符串数组之类的）；
- 每种基本数据类型都有缓冲区类型。

###### 1.4.20.2.3 读写
[^ flip reference]: [新浪博客][23]

- *`EG.`代码实例：* [^ flip reference]

	``` java
	    /**
	     * 通过NIO进行复制文件
	     * @param fromFile
	     * @param toFile
	     * @return
	     * @author Thomas Lee
	     * @version 2017年3月28日 下午3:16:21
	     */
	    public static boolean copyWithNIO(File fromFile, File toFile) {
	        // 可以把下面的两个ARM语句合并为一个语句块：try (FileInputStream fileInputStream = new FileInputStream(fromFile); FileOutputStream fileOutputStream = new FileOutputStream(toFile)) {
	        try (FileInputStream fileInputStream = new FileInputStream(fromFile)) {
	            try (FileOutputStream fileOutputStream = new FileOutputStream(toFile)) {
	                FileChannel inFileChannel = fileInputStream.getChannel();
	                FileChannel outFileChannel = fileOutputStream.getChannel();
	                ByteBuffer buffer = ByteBuffer.allocate(1024);
	                while (-1 != inFileChannel.read(
	                    buffer.flip();
	                    // 通过flip()方法设置，所以这次读取buffer的position（已经被flip()设置为0）limit（已经被flip()设置为数据的positin ）位置的
	                    outFileChannel.write(buffer);
	                    buffer.clear();
	                }
	                return true;
	            }
	        } catch (FileNotFoundException e) {
	            LOG.error(e.getMessage(), e);
	            return false;
	        } catch (IOException e) {
	            LOG.error(e.getMessage(), e);
	            return false;
	        }
	    }
	```

#### 1.4.21 观察者模式深度剖析
#### 1.4.22 网络七层协议以及其作用

### 1.5 网络编程
#### 1.5.1 基础知识
#### 1.5.2 基于URL的高层次Java网络编程
#### 1.5.3 基于Socket的低层次Java网络编程
- `SUMMARY:` `Socket`编程本质上是对`TCP`、`UDP`协议的封装。
- 两个`Java`应用程序可以通过一个的网络通信连接实现数据交换，这个双向连接的一端称为一个`Socket`；
- `Socket`通常用来实现`C\S`的连接；
- 基于`TCP`、`UDP`协议，本质是对`TCP/IP`、`UDP`的封装；
- 建立连接所需要的寻址信息为远程计算机的`IP`地址和端口号(`Port Number`)

##### 1.5.3.1 `TCP Socket`
- `TCP Sokcet`通信模型：<br>![][14] 
- *`eg.` 服务端代码实例：*
	``` java
	package com.cmc.socket.server;
	
	import java.io.DataInputStream;
	import java.io.IOException;
	import java.io.InputStream;
	import java.net.ServerSocket;
	import java.net.Socket;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	/**
	 * TCP Server Instance
	 *  
	 * @author Thomas
	 * @version 2017年1月19日 下午8:18:47
	 */
	public class TCPServer implements Server {
	
	    private static final int TCP_SERVER_PORT = 8888;
	    private static final Logger LOG = LoggerFactory.getLogger(TCPServer.class);
	
	    @Override
	    public void start() {
	        ServerSocket serverSocket = null;
	        try {
	            serverSocket = new ServerSocket(TCP_SERVER_PORT);
	            while (true) {
	                Socket socket = serverSocket.accept();
	                InputStream inputStream = socket.getInputStream();
	                DataInputStream dataInputStream = new DataInputStream(inputStream);
	                LOG.info(dataInputStream.readUTF());
	            }
	        } catch (IOException e) {
	            if (null != serverSocket) {
	                try {
	                    serverSocket.close();
	                } catch (IOException ce) {
	                    this.logError(ce);
	                }
	            }
	            this.logError(e);
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    public static void main(String[] args) {
	        new TCPServer().start();
	    }
	
	}
	```

- *`eg.` 客户端代码实例：*
	``` java
	package com.cmc.socket.client;
	
	import java.io.DataOutputStream;
	import java.io.IOException;
	import java.io.OutputStream;
	import java.net.Socket;
	import java.net.UnknownHostException;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	public class TCPClient implements Client {
	
	    private static final Logger LOG = LoggerFactory.getLogger(TCPClient.class);
	    private static final String SERVER_IP = "127.0.0.1";
	    private static final int SERVER_PORT = 8888;
	    private static final String MESSAGE = "Hello Server.";
	
	    @Override
	    public void send() {
	        try {
	            Socket socket = new Socket(SERVER_IP, SERVER_PORT);
	            OutputStream outputStream = socket.getOutputStream();
	            DataOutputStream dataOutputStream = new DataOutputStream(outputStream);
	            dataOutputStream.writeUTF(MESSAGE);
	            dataOutputStream.close();
	            outputStream.close();
	            socket.close();
	        } catch (UnknownHostException e) {
	            this.logError(e);
	        } catch (IOException e) {
	            this.logError(e);
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    public static void main(String[] args) {
	        new TCPClient().send();
	    }
	
	}
	```

##### 1.5.3.2 `UDP Socket`
- *`eg.` 服务端代码实例：*
	``` java
	package com.cmc.socket.server;
	
	import java.io.IOException;
	import java.net.DatagramPacket;
	import java.net.DatagramSocket;
	import java.net.SocketException;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	public class UDPServer implements Server {
	
	    private static final Logger LOG = LoggerFactory.getLogger(UDPServer.class);
	
	    private static final int UDP_SERVER_PORT = 9999;
	
	    @Override
	    public void start() {
	        DatagramSocket datagramSocket = null;
	        try {
	            datagramSocket = new DatagramSocket(UDP_SERVER_PORT);
	            byte[] buffer = new byte[1024];
	            DatagramPacket datagramPacket = new DatagramPacket(buffer, buffer.length);
	            while (true) {
	                datagramSocket.receive(datagramPacket);
	                this.log(new String(buffer, 0, datagramPacket.getLength()));
	            }
	        } catch (SocketException e) {
	            this.logError(e);
	        } catch (IOException e) {
	            this.logError(e);
	        } finally {
	            datagramSocket.close();
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    private void log(String msg) {
	        System.out.println(msg);
	    }
	
	    public static void main(String[] args) {
	        new UDPServer().start();
	    }
	
	}
	```

- *`eg.` 客户端代码实例：*
	``` java
	package com.cmc.socket.client;
	
	import java.io.IOException;
	import java.net.DatagramPacket;
	import java.net.DatagramSocket;
	import java.net.InetSocketAddress;
	import java.net.SocketException;
	import java.util.Date;
	import java.util.Timer;
	import java.util.TimerTask;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	public class UDPClient implements Client {
	
	    private static final Logger LOG = LoggerFactory.getLogger(UDPClient.class);
	
	    private static final String UDP_SERVER_IP = "127.0.0.1";
	    private static final int UDP_SERVER_PORT = 9999;
	    private static final String FIRST_MSG = "Hello, Server.";
	
	    /** 线程间隔时间1000ms */
	    public static final long THREAD_INTERNAL_TIME = 1000;
	
	    @Override
	    public void send() {
	        DatagramSocket datagramSocket;
	        try {
	            datagramSocket = new DatagramSocket();
	            byte[] buffer = new byte[1024];
	            buffer = FIRST_MSG.getBytes();
	            DatagramPacket datagramPacket = new DatagramPacket(buffer, buffer.length, new InetSocketAddress(UDP_SERVER_IP, UDP_SERVER_PORT));
	            datagramSocket.send(datagramPacket);
	            datagramSocket.close();
	        } catch (SocketException e) {
	            this.logError(e);
	        } catch (IOException e) {
	            this.logError(e);
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    public static void main(String[] args) {
	        javaSETimer(new UDPClient());
	    }
	
	    // http://batitan.iteye.com/blog/253483 
	    public static void javaSETimer(Client client) {
	        Timer timer = new Timer();
	        TimerTask timerTask = new TimerTask() {
	            public void run() {
	                client.send();
	            }
	        };
	        timer.schedule(timerTask, new Date(), THREAD_INTERNAL_TIME);
	    }
	
	}
	```
#### 1.5.4 Java编程规范

### 1.6 图形界面GUI
#### 1.6.1 基本概念
#### 1.6.2 建立图形用户界面的步骤
#### 1.6.3 容器Frames和Panels
#### 1.6.4 布局管理器
#### 1.6.5 AWT事件模型
#### 1.6.6 监听器、事件、事件源、事件注册深度剖析

### 1.7 反射 [^ reflect reference]
- `SUMMARY:`运行过程动态调用类的属性和方法。
- 暂时工作使用不到，不进行系统化总结。
[^ reflect reference]: [博客园][18]

#### 1.7.1 简介
#### 1.7.2 简单例子
#### 1.7.3 Reflection
#### 1.7.4 找出类的方法
#### 1.7.5 获取构造器的信息
#### 1.7.6 获取类的字段
#### 1.7.7 根据方法的名称来执行方法
#### 1.7.8 创建新的对象
#### 1.7.9 改变字段的值
#### 1.7.10 使用数组
#### 1.7.11 程序运行过程
- 动态加载类，动态调用类的方法就是反射。
- *`eg.`Java程序运行过程示意图：*<br>![][15]
#### 1.7.12 动态加载机制
- 并非一次加载，需要的时候加载（也就是说运行的时候动态加载）。
- *`eg.`代码实例：*

	``` java
	package com.cmc.j2se;
	
	import java.lang.reflect.Field;
	import java.lang.reflect.Modifier;
	
	/**
	 * Java Reflection 实例
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月16日 下午3:20:02
	 */
	public class ReflectionDemo {
	
	    public static void main(String[] args) throws ClassNotFoundException {
	        new ReflectionDemo().printClass("com.cmc.model.user.User");
	    }
	
	    /**
	     * 打印Class
	     * 
	     * @author Thomas Lee
	     * @version 2017年2月16日 下午5:35:43
	     */
	    public void printClass(String clazzQualifier) throws ClassNotFoundException {
	
	        /**
	         * 第一种方式；通过类的方法forName()获取
	         */
	        Class<?> clazzUser = Class.forName(clazzQualifier);
	
	        /**
	         * 第二种方式：通过类直接获取
	         * Class<?> clazzUser = User.class;
	         */
	
	        /**
	         * 第三种方式：通过对象获取
	         * User user = new User();
	         * Class<?> clazzUser = user.getClass(); 
	         */
	        Field[] userFields = clazzUser.getDeclaredFields();
	
	        StringBuilder sb = new StringBuilder();
	        sb.append(Modifier.toString(clazzUser.getModifiers()) + " class " + clazzUser.getSimpleName() + " {\n");
	        for (Field userField : userFields) {
	            sb.append("\t" + Modifier.toString(userField.getModifiers()) + " " + userField.getType().getSimpleName() + " " + userField.getName() + ";\n");
	        }
	        sb.append("}");
	
	        this.out(sb.toString());
	    }
	
	    private void out(String content) {
	        System.out.print(content);
	    }
	
	}
	```

#### 1.7.13 JDK ClassLoader
- 主要有四大类；
- 它们之间只是层次上的关系，并非继承关系<br>![][17]
- 类名`.class`是`Class`对象的句柄，每个被加载的类，在`JVM`中都会有一个`Class`对象与之相对应，如果要创建新的对象，直接使用`Class`对象的局部`class.forName`就可以了，不需要用`new`类名。
- 在`java`中，每个`class`都有一个相应的`Class`对象，当编写好一个类，编译完成后，在生成的`.class`文件中，就产生一个`class`对象，用来表示这个类的类型信息。获得`Class`实例的三中方式：
	- 利用对象调用`getClass()`方法获取该对象的`Class`实例
	- `forName()`，用类的名字获取一个`Class`实例
	- 运用`.class`的方式获取`Class`实例，对基本数据类型的封装类，还可以采用`.TYPE`来获取对应的基本数据类型的`Class`实例

##### 1.7.13.1 Bootstrap Class Loader
- `Implemented by native language`(不是`Java`语言写的，最基本的`classLoader`)
- `Load the core classes of jdk`

##### 1.7.13.2 Extension class loader
- `Load the class from jre/lib/ext`

##### 1.7.13.3 Application class loader
- `Load user-defined classes`
- `ClassLoader.getSystemClassLoader()`

##### 1.7.13.4 Other class loader
- `SecureClassLoader`
- `URLClassLoader`

> *注意*
> - `Class`类的实例表示正在运行的`Java`应用程序中的类和接口。

### 1.8 其他
#### 1.8.1 Eclispse常用快捷键
#### 1.8.2 如何成为Java高手
#### 1.8.3 Java初学者的30个常见的问题
#### 1.8.4 初学者都应该搞懂的问题
#### 1.8.5 十个常见的违规编码

<br>
## 二、进阶
### 2.1 多线程
#### 2.1.1 线程简介
#### 2.1.2 用Thread类创建线程
#### 2.1.3 使用Runnable接口创建线程
#### 2.1.4 线程的生命周期
#### 2.1.5 join方法的使用
#### 2.1.6 使用Synchronized块同步变量
#### 2.1.7 使用Synchronized同步类方法
#### 2.1.8 使用Synchronized同步方法
#### 2.1.9 从线程返回数据的两种方法
#### 2.1.10 向线程传递数据的三种方法
#### 2.1.11 慎重使用volatile关键字

### 2.2 集合框架
#### 2.2.1 ArrayList的实现原理 
#### 2.2.2 HashMap的实现原理
#### 2.2.3 HashSet的实现原理
#### 2.2.4 LinkedHashMap的实现原理 
#### 2.2.5 Stack、Queue和Map的遍历
#### 2.2.6 HashMap分析四篇连载
#### 2.2.7 集合框架总结

### 2.3 JVM
- `SUMMARY:`暂时不急于学习，有待总结。
- 参考`APP`：`Java`手册和`JVM Study Notes.md`.
#### 2.3.1 `Java`代码编译和执行的整个过程
#### 2.3.2 `JVM`内存管理以及垃圾回收机制

### 2.4 新特性


[1]: http://i1.piimg.com/567571/1a11150766a3485b.png
[2]: http://p1.bpimg.com/567571/c269e6eec3269286.png
[3]: http://www.cnblogs.com/iyangyuan/archive/2013/04/09/3011274.html
[4]: http://p1.bpimg.com/567571/d6e73d16d3b3de4b.png
[5]: http://p1.bpimg.com/567571/df8aecbce0513954.png
[6]: http://i1.piimg.com/567571/2bbdb13034ca4bf5.png
[7]: http://i1.piimg.com/567571/7aa6ef40fdedb968.png
[8]: http://i1.piimg.com/567571/e9105960cd2dcb94.png
[9]: http://i1.piimg.com/567571/902478df2257db59.png
[10]: http://p1.bpimg.com/567571/84d412e1383b8fb2.png
[11]: http://i1.piimg.com/567571/ab6a1763911efe21.png
[12]: http://p1.bpimg.com/567571/766827492f4bdac6.png
[13]: http://p1.bpimg.com/567571/c6c9841205293c20.png
[14]: http://i1.piimg.com/567571/fda1e7ac8b2f61ff.png
[15]: http://p1.bpimg.com/567571/172b155aed26079a.png
[16]: http://i1.piimg.com/567571/d48247be9e0f49d9.png
[17]: http://p1.bpimg.com/567571/6701ff44e3069608.png
[18]: http://www.cnblogs.com/rollenholt/archive/2011/09/02/2163758.html
[19]: http://p1.bpimg.com/567571/d948e84b10217793.png
[20]: http://i1.piimg.com/567571/222535dbb246dfb3.png
[21]: http://p1.bpimg.com/567571/ea3cd59d77e92390.jpg
[22]: http://i1.piimg.com/567571/410e498787c7d0d6.jpg
[23]: http://blog.sina.com.cn/s/blog_4bc179a80100xiy5.html
[24]: http://baike.baidu.com/link?url=Pxgs7hVDpFF6o4irOpt74wxj2HNc9xULzZ-20aVRaetTjCB2w6brmnNtfVtrPwL54n0dWfRY5bLJ7JF7xn_6pFv3XT6-ao4k9qme_u5kkwe
[25]: http://baike.baidu.com/link?url=J0R1UWMOTodf6bPojjrMwXAhMiFGjNYMVs0dE2hWg1iOjzV2QMQiOOEdVmyjufoeEHP0ycK3AY_1aW17osnMcPtlVTJ7AvUOIUcVeJ6HaEWLpgWz4AzmQ4tQ7ganMn-u
[26]: http://blog.csdn.net/lonelyroamer/article/details/7864531
[27]: http://baike.baidu.com/link?url=TYZ9fNuu_wBEDzf5IuD0eD7A7omPTOOOyGiV7pRf6xaCV9XMoC0HjZxH6wOZyZ8pOZ01BYj0QUtemj3Y2tOWmZWJFtLHGb5EHTgXHYbw2rWrYp1a7CvXN8W7HxZscut0
[28]: http://blog.csdn.net/liji_xc/article/details/47290695
[29]: http://blog.csdn.net/liji_xc/article/details/47302455