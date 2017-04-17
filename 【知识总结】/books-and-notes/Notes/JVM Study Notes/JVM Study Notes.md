# JVM [^ JVM Reference] Study Notes [^ history version]

@(Notes)[JVM, Notes]

> VICTORY LOVES PREPARATION.

[^ JVM Reference]: [百度百科][2]、[ImportNew][3]

[^ history version]: 
> 版本信息：
> 2017年04月17日 上午10:00:20
> 2017年03月12日 下午01:17:55

[TOC]

***

## 〇、思维导图

<br>
## 一、简介
- **`SUMMARY：`  `Java` `Virtual` `Machine`，是实现`Java`语言平台无关性的关键。**
- `JVM`是`Java` `Virtual` `Machine`（`Java`虚拟机）的缩写，`JVM`是一种用于计算设备的规范，它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的；
- `Java`语言的一个非常重要的特点就是与**平台无关性**。而使用`Java`虚拟机是实现这一特点的关键。一般的高级语言如果要在不同的平台上运行，至少需要编译成不同的目标代码。而引入`Java`语言虚拟机后，`Java`语言在不同平台上运行时不需要重新编译。`Java`语言使用`Java`虚拟机屏蔽了与具体平台相关的信息，使得`Java`语言编译程序只需生成在`Java`虚拟机上运行的目标代码（字节码），就可以在多种平台上不加修改地运行。`Java`虚拟机在**执行字节码时，把字节码解释成具体平台上的机器指令执行**。这就是`Java`的能够**一次编译，到处运行**的原因。
-  *`img.` `JVM`核心内部组件：* <br>![][4]

<br>
## 二、调优 [^ JVM optimize]
[^ JVM optimize]: [ITEYE][1]、[CSDN][5]

### 2.1 名词介绍
- 虚拟机中的共划分为三个代：年轻代（`Young` `Generation`）、年老代（`Old` `Generation`）和永久代（`Permanent` `Generation`）。其中持久代主要存放的是`Java`类的类信息，与垃圾收集要收集的`Java`对象关系不大。年轻代和年老代的划分是对垃圾收集影响比较大的。

#### 2.1.1 年轻代
- **`SUMMARY：`所有新生成的对象首先都是放在年轻代的。年轻代的目标就是尽可能快速的收集掉那些生命周期短的对象。**
- 所有新生成的对象首先都是放在年轻代的。年轻代的目标就是尽可能快速的收集掉那些生命周期短的对象。
- 年轻代分三个区。一个`Eden`区，两个`Survivor`区(一般而言)。大部分对象在`Eden`区中生成。当`Eden`区满时，还存活的对象将被复制到`Survivor`区（两个中的一个），当这个`Survivor`区满时，此区的存活对象将被复制到另外一个`Survivor`区，当这个`Survivor`去也满了的时候，从第一个`Survivor`区复制过来的并且此时还存活的对象，将被复制“年老区(`Tenured`)”。需要注意，`Survivor`的两个区是对称的，没先后关系，所以同一个区中可能同时存在从`Eden`复制过来 对象，和从前一个`Survivor`复制过来的对象，而复制到年老区的只有从第一个`Survivor`去过来的对象。而且，`Survivor`区总有一个是空的。同时，根据程序需要，`Survivor`区是可以配置为多个的（多于两个），这样可以增加对象在年轻代中的存在时间，减少被放到年老代的可能。

#### 2.1.2 年老代
- **`SUMMARY：`用于存放年轻代中经历了多次垃圾回收后仍然存活的对象。**
- 在年轻代中经历了`N`次垃圾回收后仍然存活的对象，就会被放到年老代中。因此，可以认为年老代中存放的都是一些生命周期较长的对象。

#### 2.1.3 永久代
- **`SUMMARY：`用于存放静态文件，如`Java`类、方法等，垃圾回收对其没有显著影响。**
- 用于存放静态文件，如`Java`类、方法等，对垃圾回收没有显著影响；
- 有些应用可能动态生成或者调用一些`class`，例如`Hibernate`等，在这种时候需要设置一个比较大的持久代空间来存放这些运行过程中新增的类；
- 持久代大小通过`-XX:MaxPermSize`进行设置。

#### 2.1.4 GC [^ GC Reference]
[^ GC Reference]: [ImportNew][7]

- **`SUMMARY：` `GC`是垃圾收集的意思，自动回收不需要的对象。有分代复制垃圾回收、标记垃圾回收和增量垃圾回收等机制。**
- `GC`是垃圾收集的意思，内存处理是编程人员容易出现问题的地方，忘记或者错误的内存回收会导致程序或系统的不稳定甚至崩溃，`Java`提供的`GC`功能可以自动监测对象是否超过作用域从而达到自动回收内存的目的，`Java`语言没有提供释放已分配内存的显示操作方法；
- `Java`程序员不用担心内存管理，因为垃圾收集器会自动进行管理。要请求垃圾收集，可以调用下面的方法之一：
	- `System.gc()`
	- `Runtime.getRuntime().gc() `，但`JVM`可以屏蔽掉显示的垃圾回收调用。
- 垃圾回收可以有效的防止内存泄露，有效的使用可以使用的内存；
- 垃圾回收器通常是作为一个单独的低优先级的线程运行，不可预知的情况下对内存堆中已经死亡的或者长时间没有使用的对象进行清除和回收，程序员不能实时的调用垃圾回收器对某个对象或所有对象进行垃圾回收；
- 在`Java`诞生初期，垃圾回收是`Java`最大的亮点之一，因为服务器端的编程需要有效的防止内存泄露问题，然而时过境迁，如今`Java`的垃圾回收机制已经成为被诟病的东西；
- 移动智能终端用户通常觉得`iOS`的系统比`Android`系统有更好的用户体验，其中一个深层次的原因就在于`Android`系统中垃圾回收的不可预知性。
- **垃圾回收机制**
	- **分代复制垃圾回收**
		- **`SUMMARY：`根据`Java`对象的生命周期将堆内存划分为不同的区域（一般是一个`Eden`和两个`Survivor`，其中`Survivor`的个数可以设置）在垃圾收集过程中，可能会将对象移动到不同区域进行回收。**
		- 标准的`Java`进程既有栈又有堆。
		- 栈保存了原始型局部变量，堆保存了要创建的对象。
		- `Java`平台对堆内存回收和再利用的基本算法被称为标记和清除，但是`Java`对其进行了改进，采用“分代式垃圾收集”。这种方法会跟`Java`对象的生命周期将堆内存划分为不同的区域，在垃圾收集过程中，可能会将对象移动到不同区域：
			- 伊甸园（`Eden`）：
				- 这是对象最初诞生的区域，并且对大多数对象来说，这里是它们唯一存在过的区域。
			- 幸存者乐园（`Survivor`）：
				- 从伊甸园幸存下来的对象会被挪到这里。
			- 年老代（`Tenured`）：
				- 这是足够老的幸存对象的归宿。年轻代收集（`Minor-GC`）过程是不会触及这个地方的。当年轻代收集不能把对象放进终身颐养园时，就会触发一次完全收集（`Major-GC`），这里可能还会牵扯到压缩，以便为大对象腾出足够的空间。
	- **标记垃圾回收** [^ 标记垃圾回收 Reference]
		- **`SUMMARY：`当内存耗尽时，程序将会被挂起，垃圾回收开始执行。当所有的未引用对象被清理完毕时，程序才会继续执行。**
		- 标记清除算法是一种垃圾回收算法，它是第一个可以回收被循环引用的数据结构的垃圾回收算法；
		- 现在仍旧有许多常用的垃圾回收技术使用各种各样的标记清除算法的变体；
		- 在使用标记清除算法时，未引用对象并不会被立即回收。取而代之的做法是，垃圾对象将一直累计到内存耗尽为止。**当内存耗尽时，程序将会被挂起，垃圾回收开始执行。当所有的未引用对象被清理完毕时，程序才会继续执行；**
		- 标记清除算法又被叫做追踪式垃圾收集器，这是因为这种算法追踪被程序所引用的所有对象。在程序中可以直接访问的对象是指通过堆栈上的本地变量或者任意静态变量说引用的对象。从垃圾回收的角度来看,这种对象，叫做根（`roots`）。如果一个对象是被另外的可（直接或者间接）访问的对象中的域引用，则这个对象可以被间接访问。可访问的对象被称为可用的（live），其他的对象被称为垃圾（`garbage`）。
	- 增量垃圾回收
	- 其他

[^ 标记垃圾回收 Reference]: [CSDN][10]

##### 2.1.4.1 MinroGC
- **`SUMMARY：` 从年轻代空间（包括 `Eden`和`Survivor`区域）回收内存被称为`Minor GC`，一般情况下，当新对象生成，并且在`Eden`申请空间失败时，就会触发`Scavenge GC`。**
- 一般情况下，当新对象生成，并且在`Eden`申请空间失败时，就会触发`Scavenge GC`，对`Eden`区域进行`GC`，清除非存活对象，并且把尚且存活的对象移动到`Survivor`区。然后整理`Survivor`的两个区。这种方式的`GC`是对年轻代的`Eden`区进行，不会影响到年老代。因为大部分对象都是从`Eden`区开始的，同时`Eden`区不会分配的很大，所以`Eden`区的`GC`会频繁进行。因而，一般在这里需要使用速度快、效率高的算法，使`Eden`去能尽快空闲出来。

##### 2.1.4.2 Major GC
- `Major GC`是清理年老代。

##### 2.1.4.3 Full GC
- **`SUMMARY：` 对整个堆进行整理，包括年轻代和老年代，在对`JVM`调优的过程中，很大一部分工作就是对于`FullGC`的调节。**
- 对整个堆进行整理，包括`Young`、`Tenured`和`Perm`。`Full GC`因为需要对整个堆进行回收，所以比`Scavenge GC`要慢，因此应该尽可能减少`Full GC`的次数。在对`JVM`调优的过程中，很大一部分工作就是对于`FullGC`的调节。有如下原因可能导致`Full GC`：
 - 年老代（`Tenured`）被写满；
 - 持久代（`Perm`）被写满；
 - `System.gc()`被显示调用（当我们调用`System.gc()`的时候，其实并不会马上进行垃圾回收，甚至不一定会执行垃圾回收 [^ system.gc reference]）；
[^ system.gc reference]: [CSDN][6]

 - 上一次`GC`之后`Heap`的各域分配策略动态变化。

### 2.2 实际应用

#### 2.2.1 性能调优 [^ JVM Optimize Reference]
[^ JVM Optimize Reference]: [博客园][8]

- **堆（`Heap`）和非堆（`Non-heap`）内存**
	- 按照官方的说法：**`Java`虚拟机具有一个堆，堆是运行时数据区域，所有类实例和数组的内存均从此处分配。堆是在 `Java`虚拟机启动时创建的。在`JVM`中堆之外的内存称为非堆内存（`Non-heap memory`）。**可以看出`JVM`主要管理两种类型的内存：堆和非堆。简单来说堆就是`Java`代码可及的内存，是留给开发人员使用的；非堆就是`JVM`留给自己用的，所以方法区、`JVM`内部处理或优化所需的内存（如`JIT`编译后的代码缓存）、每个类结构（如运行时常数池、字段和方法数据）以及方法和构造方法的代码都在非堆内存中。 
- **堆内存分配**
	- `JVM`初始分配的堆内存由`-Xms`指定，默认是物理内存的`1/64`；
	- `JVM`最大分配的堆内存由`-Xmx`指定，默认是物理内存的`1/4`。
	- 默认空余堆内存小于`40%`时，`JVM`就会增大堆直到`-Xmx`的最大限制；
	- 空余堆内存大于`70%`时，`JVM`会减少堆直到`-Xms`的最小限制。
	- 因此服务器一般设置`-Xms`、`-Xmx`相等以避免在每次`GC`后调整堆的大小。
	- 说明：如果`-Xmx`不指定或者指定偏小，应用可能会导致`java.lang.OutOfMemory`错误，此错误来自`JVM`，不是`Throwable`的，无法用`try...catch`捕捉。 
- **非堆内存分配**
	- `JVM`使用`-XX:PermSize`设置非堆内存初始值，默认是物理内存的`1/64`；
	- 由`XX:MaxPermSize`设置最大非堆内存的大小，默认是物理内存的`1/4`。
	- （还有一说：`MaxPermSize`缺省值和`-server -client`选项相关，`-server`选项下默认`MaxPermSize`为`64m`，`-client`选项下默认`MaxPermSize为32m`。这个我没有实验。）
	- `XX:MaxPermSize`设置过小会导致`java.lang.OutOfMemoryError: PermGen space`就是内存溢出。 
	- 说说为什么会内存溢出： 
		- 这一部分内存用于存放`Class`和`Meta`的信息，`Class`在被`Load`的时候被放入`PermGen space`区域，它和存放`Instance`的`Heap`区域不同。 
		- `GC`（`Garbage Collection`）不会在主程序运行期对`PermGen space`进行清理，所以如果你的`APP`会`LOAD`很多`CLASS`的话，就很可能出现`PermGen space`错误。
	   - 这种错误常见在`web`服务器对`JSP`进行`pre compile`的时候。

- -vmargs -Xms128M -Xmx512M -XX:PermSize=64M -XX:MaxPermSize=128M
	- `-vmargs`说明后面是`VM`的参数，所以后面的其实都是`JVM`的参数了。
- -Xms128m
	- `JVM`初始分配的堆内存。
- -Xmx512m
	- `JVM`最大允许分配的堆内存，按需分配。
- -XX:PermSize=64M
	- `JVM`初始分配的非堆内存。
- -XX:MaxPermSize=128M
	- `JVM`最大允许分配的非堆内存，按需分配。

- **具体优化方法**
	- 对整个堆进行整理，包括`Young`、`Tenured`和`Perm`。`Full GC`因为需要对整个堆进行回收，所以比`Scavenge GC`要慢，因此应该尽可能减少`Full GC`的次数。在对`JVM`调优的过程中，很大一部分工作就是对于`FullGC`的调节。有如下原因可能导致`Full GC`：
		 - 年老代（`Tenured`）被写满；
		 - 持久代（`Perm`）被写满；
		 - `System.gc()`被显示调用（当我们调用`System.gc()`的时候，其实并不会马上进行垃圾回收，甚至不一定会执行垃圾回收 [^ system.gc reference]）；
		 - 上一次`GC`之后`Heap`的各域分配策略动态变化。
	- 服务器一般设置`-Xms`、`-Xmx`相等以避免在每次`GC`后调整堆的大小。
			 
[^ system.gc reference]: [CSDN][6]

	> *注意* [^ various overflow or outofmemory reference]
	> - `StackOverFlowError`
	>  - 栈溢出，通常情况下是递归太深导致的。
	> - `java.lang.OutOfMemory`
	>  - 堆内存不够用。
	> - `java.lang.OutOfMemoryError:PermGen space`
	>  - 永久代内存不够用。
	> - `OutOfMemory`可以理解为申请内存的时候，内存不足，而`StackOverFlowError`可以理解为已经申请好具体的内存大小，只是在使用的时候溢出了，即超过了申请的内存空间大小。
	
 [^ various overflow or outofmemory reference]: [CSDN][9]、[GitHub][11]

<br>
## 三、其他
- 释放资源之后把变量赋值为`null`能够加快垃圾回收。


[1]: http://unixboy.iteye.com/blog/174173/
[2]: http://baike.baidu.com/link?url=QkLVI9AkFYNj0J26xPlmS_wjyzGq18BsxtNRra5ua66IMO15Uw_WWciQNEHPe1mdcgQmWjKdqfGLw97Sp2Zti_
[3]: http://www.importnew.com/17770.html
[4]: http://p1.bpimg.com/567571/7c016c900e43dde1.png
[5]: http://blog.csdn.net/defonds/article/details/6289236
[6]: http://blog.csdn.net/yewei02538/article/details/52386642
[7]: http://www.importnew.com/15820.html
[8]: http://www.cnblogs.com/mingforyou/archive/2012/03/03/2378143.html
[9]: http://blog.csdn.net/u011983531/article/details/63250882
[10]: http://blog.csdn.net/yuezhiren/article/details/7948950
[11]: https://github.com/CountMCristo/framework-assembly-basis/tree/develop