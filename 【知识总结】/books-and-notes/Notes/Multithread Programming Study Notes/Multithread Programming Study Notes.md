# Multithread [^ multithread reference] Programming Study Notes [^ history version]

@(Notes)[Multithread, Notes]

> VICTORY LOVES PREPARATION.

[^ multithread reference]: [百度百科][1]

[^ history version]: 
- 版本信息
> 2017年04月14日 下午04:49:05

[TOC]

***

## 〇、思维导图

<br>
## 一、简要说明
- 线程是进程中的一个实体，是被系统独立调度和分配的基本单位；
- 一个进程可以有多个线程，一个线程必须有一个父进程；
- 线程自己不拥有系统资源，只有运行必须的一些数据结构，但它可以与同属一个进程的其他线程共享进程所拥有的全部资源；
- 一个线程可以创建和撤销另一个线程，同一个进程中的多个线程之间可以并发执行。

<br>
## 二、具体内容
### 2.1 volatile
- **`SUMMARY：`保证修改的值会立即被更新到主存中。**
- 当一个共享变量被`volatile`修饰时，它会保证修改的值会立即被更新到主存，当有其他线程需要读取时，它会去内存中读取新值；
- 而普通的共享变量不能保证可见性，因为普通共享变量被修改之后，什么时候被写入主存是不确定的，当其他线程去读取时，此时内存中可能还是原来的旧值，因此无法保证可见性。

	> *注意*
	> - 另外，通过`synchronized`和`Lock`也能够保证可见性，`synchronized`和`Lock`能保证同一时刻只有一个线程获取锁然后执行同步代码，并且在释放锁之前会将对变量的修改刷新到主存当中。因此可以保证可见性。

<br>
## 三、注意事项

[1]: http://baike.baidu.com/link?url=clBRd3kEybcLhX042gVfLAJuMjdQOP6XaDa3jhA084gDDfD8j1rcsfs5ZKZ6nrJWtmlnnAcUMxoJKC3y3Cd93EOdURJHTYa_XFd4fZJc44afa6p8O4s-3DJo_A6wSQ1T