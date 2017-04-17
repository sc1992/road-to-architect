# Linux Study Notes [^ history version]

@(J2EE)[Linux, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 2017年3月3日 上午11:06:02

[TOC]

***
## 〇、思维导图

> *注意*
> - 
<br>
## 一、简介
- **`SUMMARY：` 。**

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
## 二、 /usr，/usr/local/ 、/opt以及其他目录 [^ linux directory reference]
[^ linux directory reference]: [Linux公社][2]、[CSDN][3]

- **`SUMMARY：`类比`Windows`目录。**
- `/usr`：系统级的目录，可以理解为`C:/Windows/`；
- `/usr/lib`理解为`C:/Windows/System32`；
- `/usr/local`：用户级的程序目录，可以理解为`C:/Progrem Files/`。用户自己编译的软件默认会安装到这个目录下；
- `/opt`：用户级的程序目录，可以理解为`D:/Software`，`opt`有可选的意思，这里可以用于放置第三方大型软件（或游戏），当你不需要时，直接`rm -rf`掉即可。在硬盘容量不够时，也可将`/opt`单独挂载到其他磁盘上使用；
- `/usr/src`：系统级的源码目录；
- `/usr/local/src`：用户级的源码目录。

<br>
## 三、 环境变量
- `/etc/profile`配置文件
- `export JAVA_HOME=/opt/jdk1.8.0_45`

<br>
## 四、其他
### 4.1 查看进程占用了哪个端口 [^ linux show process port reference]
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