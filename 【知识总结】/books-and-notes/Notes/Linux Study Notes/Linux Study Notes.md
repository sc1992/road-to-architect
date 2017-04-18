# Linux [^ linux reference] Study Notes [^ history version]

@(Notes)[Linux, Notes]

> VICTORY LOVES PREPARATION.

[^ linux reference]: [Runoob][7]

[^ history version]: 
> 版本信息：
> 2017年04月18日 下午03:31:53
> 2017年03月03日 上午11:06:02

[TOC]

***
## 〇、思维导图

<br>
## 一、简介

<br>
## 二、SSH免密登录Linux [^ ssh linux reference]
[^ ssh linux reference]: [百度经验][1]

- **`SUMMARY：`配置`authorized_keys`。**
- 在`~`目录下`ssh-keygen -t rsa`生成`.ssh`目录；
-  配置`/etc/ssh/sshd_config`；
-  复制自己的`ssh` `key`到`.ssh`目录下的`authorized_keys`；
-  重启`sshd`服务，`systemctl` `restart` `sshd.service`。
- 非`root`用户还有时候成功不了，原因未搞清楚。

<br>
## 三、 /usr，/usr/local/ 、/opt以及其他目录 [^ linux directory reference]
[^ linux directory reference]: [Linux公社][2]、[CSDN][3]

- **`SUMMARY：`类比`Windows`目录。**
- `/usr`：系统级的目录，可以理解为`C:/Windows/`；
- `/usr/lib`理解为`C:/Windows/System32`；
- `/usr/local`：用户级的程序目录，可以理解为`C:/Progrem Files/`。用户自己编译的软件默认会安装到这个目录下；
- `/opt`：用户级的程序目录，可以理解为`D:/Software`，`opt`有可选的意思，这里可以用于放置第三方大型软件（或游戏），当你不需要时，直接`rm -rf`掉即可。在硬盘容量不够时，也可将`/opt`单独挂载到其他磁盘上使用；
- `/usr/src`：系统级的源码目录；
- `/usr/local/src`：用户级的源码目录。

<br>
## 四、 环境变量
- `/etc/profile`配置文件
- `export JAVA_HOME=/opt/jdk1.8.0_45`

<br>
## 五、命令 [^ linux orders refernece]
[^ linux orders refernece]: [Runoob][8]

### 5.1 nohup [^ nohup reference]
[^ nohup reference]: [博客园][5]

- 在应用`Unix/Linux`时，我们一般想让某个程序在后台运行，于是我们将常会用`&`在程序结尾来让程序自动运行。
- *`EG.`实例命令：*

	``` bash
	nohup java -jar hello.jar &
	```


### 5.2 ps [^ ps reference]
[^ ps reference]: [新浪微博][6]、[Runoob][9]

<br>
## 六、其他
### 6.1 查看进程占用了哪个端口 [^ linux show process port reference]
[^ linux show process port reference]: [脚本之家][4]

- *`EG.`命令如下：*

	``` bash
	$ ps -ef | grep Name
	$ netstat -nap | grep pid  
	```

[1]: http://jingyan.baidu.com/article/2fb0ba4043124a00f2ec5f0f.html
[2]: http://www.linuxidc.com/Linux/2013-01/77368.htm
[3]: http://blog.csdn.net/aqxin/article/details/48324377
[4]: http://www.jb51.net/LINUXjishu/331682.html
[5]: http://www.cnblogs.com/allenblogs/archive/2011/05/19/2051136.html
[6]: http://blog.sina.com.cn/s/blog_4af3b94f0101lhpu.html
[7]: http://www.runoob.com/linux/linux-tutorial.html
[8]: http://www.runoob.com/linux/linux-command-manual.html
[9]: http://www.runoob.com/linux/linux-comm-ps.html