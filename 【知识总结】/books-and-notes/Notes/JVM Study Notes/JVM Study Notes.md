# JVM [^ JVM Reference] Study Notes [^ history version]

@(Notes)[JVM, Notes]

> VICTORY LOVES PREPARATION

[^ JVM Reference]: [百度百科][2]、[ImportNew][3]

[TOC]

***

## 〇、思维导图

<br>
## 一、简介
- **`SUMMARY：`  `Java` `Virtual` `Machine`，是实现`Java`语言平台无关性的关键。**
- `JVM`是`Java` `Virtual` `Machine`（`Java`虚拟机）的缩写，`JVM`是一种用于计算设备的规范，它是一个虚构出来的计算机，是通过在实际的计算机上仿真模拟各种计算机功能来实现的；
- `Java`语言的一个非常重要的特点就是与**平台无关性**。而使用`Java`虚拟机是实现这一特点的关键。一般的高级语言如果要在不同的平台上运行，至少需要编译成不同的目标代码。而引入`Java`语言虚拟机后，`Java`语言在不同平台上运行时不需要重新编译。`Java`语言使用`Java`虚拟机屏蔽了与具体平台相关的信息，使得`Java`语言编译程序只需生成在`Java`虚拟机上运行的目标代码（字节码），就可以在多种平台上不加修改地运行。`Java`虚拟机在**执行字节码时，把字节码解释成具体平台上的机器指令执行**。这就是`Java`的能够**一次编译，到处运行**的原因。
-  *`img.` `JVM`核心内部组件：* <br>![][4]

[^ history version]: 
- 版本信息<br>
> 2017年03月12日 下午01:17:55

<br>
## 二、调优 [^ JVM optimize]
[^ JVM optimize]: [ITEYE][1]、[CSDN][5]

### 2.1 名词介绍
- 虚拟机中的共划分为三个代：年轻代（`Young` `Generation`）、年老代（`Old` `Generation`）和永久代（`Permanent` `Generation`）。其中持久代主要存放的是`Java`类的类信息，与垃圾收集要收集的`Java`对象关系不大。年轻代和年老代的划分是对垃圾收集影响比较大的。

#### 2.1.1 年轻代
- **`SUMMARY：`所有新生成的对象首先都是放在年轻代的。年轻代的目标就是尽可能快速的收集掉那些生命周期短的对象。**
- 所有新生成的对象首先都是放在年轻代的。年轻代的目标就是尽可能快速的收集掉那些生命周期短的对象。
- 年轻代分三个区。一个`Eden`区，两个`Survivor`区(一般而言)。大部分对象在`Eden`区中生成。当`Eden`区满时，还存活的对象将被复制到`Survivor`区（两个中的一个），当这个`Survivor`区满时，此区的存活对象将被复制到另外一个`Survivor`区，当这个`Survivor`去也满了的时候，从第一个`Survivor`区复制过来的并且此时还存活的对象，将被复制“年老区(`Tenured`)”。需要注意，`Survivor`的两个区是对称的，没先后关系，所以同一个区中可能同时存在从`Eden`复制过来 对象，和从前一个`Survivor`复制过来的对象，而复制到年老区的只有从第一个`Survivor`去过来的对象。而且，`Survivor`区总有一个是空的。同时，根据程序需要，`Survivor`区是可以配置为多个的（多于两个），这样可以增加对象在年轻代中的存在时间，减少被放到年老代的可能。

#### 2.1.2 老年代
- **`SUMMARY：`用于存放年轻代中经历了多次垃圾回收后仍然存活的对象。**
- 在年轻代中经历了`N`次垃圾回收后仍然存活的对象，就会被放到年老代中。因此，可以认为年老代中存放的都是一些生命周期较长的对象。

#### 2.1.3 永久代
- **`SUMMARY：`用于存放静态文件，如`Java`类、方法等，垃圾回收对其没有显著影响。**
- 用于存放静态文件，如`Java`类、方法等，对垃圾回收没有显著影响；
- 有些应用可能动态生成或者调用一些`class`，例如`Hibernate`等，在这种时候需要设置一个比较大的持久代空间来存放这些运行过程中新增的类；
- 持久代大小通过`-XX:MaxPermSize`进行设置。

#### 2.1.4 GC
##### 2.1.4.1 Scavenge GC
- **`SUMMARY：` 一般情况下，当新对象生成，并且在`Eden`申请空间失败时，就会触发`Scavenge GC`。**
- 一般情况下，当新对象生成，并且在`Eden`申请空间失败时，就会触发`Scavenge GC`，对`Eden`区域进行`GC`，清除非存活对象，并且把尚且存活的对象移动到`Survivor`区。然后整理`Survivor`的两个区。这种方式的`GC`是对年轻代的`Eden`区进行，不会影响到年老代。因为大部分对象都是从`Eden`区开始的，同时`Eden`区不会分配的很大，所以`Eden`区的`GC`会频繁进行。因而，一般在这里需要使用速度快、效率高的算法，使`Eden`去能尽快空闲出来。

##### 2.1.4.2 Full GC
- **`SUMMARY：` 对整个堆进行整理，在对`JVM`调优的过程中，很大一部分工作就是对于`FullGC`的调节。**
- 对整个堆进行整理，包括`Young`、`Tenured`和`Perm`。`Full GC`因为需要对整个对进行回收，所以比`Scavenge GC`要慢，因此应该尽可能减少`Full GC`的次数。在对`JVM`调优的过程中，很大一部分工作就是对于`FullGC`的调节。有如下原因可能导致`Full GC`：
 - 年老代（`Tenured`）被写满；
 - 持久代（`Perm`）被写满；
 - `System.gc()`被显示调用（当我们调用`System.gc()`的时候，其实并不会马上进行垃圾回收，甚至不一定会执行垃圾回收 [^ system.gc reference]）；
[^ system.gc reference]: [CSDN][6]

 - 上一次`GC`之后`Heap`的各域分配策略动态变化。

### 2.x 实际应用

#### 2.x.1 Eclispe性能调优
- Xms512m
	- 设置初始内存大小。
- Xmx512m
	- 设置最大可用内存大小。
- XX:PermSize=96m
	- 设置永久代大小。
- XX:MaxPermSize=96m
	- 设置永久代最大大小。
- `Java`程序超过代的大小可能会报`StackOverFlowError`错误。


[1]: http://unixboy.iteye.com/blog/174173/
[2]: http://baike.baidu.com/link?url=QkLVI9AkFYNj0J26xPlmS_wjyzGq18BsxtNRra5ua66IMO15Uw_WWciQNEHPe1mdcgQmWjKdqfGLw97Sp2Zti_
[3]: http://www.importnew.com/17770.html
[4]: http://p1.bpimg.com/567571/7c016c900e43dde1.png
[5]: http://blog.csdn.net/defonds/article/details/6289236
[6]: http://blog.csdn.net/yewei02538/article/details/52386642