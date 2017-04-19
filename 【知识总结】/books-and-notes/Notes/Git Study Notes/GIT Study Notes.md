# GIT Study Notes[^ history version]

@(Tools)[GIT, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
> 2017年04月19日 上午10:27:04
> 2017年04月12日 下午07:48:04
> 2016年09月21日 11:22
> 2016年09月12日 16:55
> 2016年09月07日 18:29
> 2016年09月02日 11:32
> 2016年08月28日 10:16
> 2016年06月03日 10:42


[TOC]

***
## 〇、思维导图
![](http://i1.piimg.com/567571/dcd95355556a325a.png)

## 一、简介
- 是一个**开源分布式版本控制系统**，用于敏捷高效地处理任何或小或大的项目；
- 是`Linus Torvalds`为了帮助管理`Linux`内核开发而开发的一个开放源码的版本控制软件；
- 与常用的版本控制工具`CVS`，`Subversion`等不同，它采用了**分布式版本库**的方式，**不必服务器端软件支持**；
- 不仅是版本控制系统，也是内容管理系统（`CMS`），工作管理系统等。

	> *注意*
	> - “分布式”的特性指的是版本库的分布式，也就是说`GIT`可以在本地创建版本库（不像`SVN`不能提交版本到本地库）。
		
<br>
## 二、GIT和SVN区别
- **核心区别** `GIT`是分布式的，`SVN`不是；
- **存储方式** `GIT`把内容按元数据方式存储，而`SVN`是按文件；
	- 文件存储方式：所有的资源控制系统都是把文件的元信息隐藏在一个类似`.svn`,`.cvs`等的文件夹里。
- **分支** `GIT`分支和`SVN`的分支不同：分支在`SVN`中一点不特别，就是版本库中的另外的一个目录；
- `GIT`没有一个全局的版本号，而`SVN`有：目前为止这是跟`SVN`相比`GIT`缺少的最大的一个特征；
- **内容完整性** `GIT`的内容完整性要优于`SVN`：*`GIT`的内容存储使用的是`SHA-1`哈希算法。这能确保代码内容的完整性，确保在遇到磁盘故障和网络问题时降低对版本库的破坏。*

<br>
## 三、安装和配置【略】

<br>
## 四、工作流程【重点】
- 从远程版本库上克隆完整的`GIT`仓库（包括代码和版本信息）到本地；
-  **在本地根据不同的开发目的，创建分支，修改代码**；
-  在本地自己创建的分支上提交代码；
-  在本地合并分支；
-  把远程版本库上最新版的代码`fetch`下来，然后跟自己的主分支合并；
-  *如果没有主开发者，可以直接把代码`push`到远程版本库*
-  生成补丁（`patch`），把补丁发送给主开发者；
- 	看主开发者的反馈，如果主开发者发现两个一般开发者之间有冲突（他们之间可以合作解决的冲突），就会要求他们先解决冲突，然后再由其中一个人提交。如果主开发者可以自己解决，或者没有冲突，就通过；
-  一般开发者之间解决冲突的方法，开发者之间可以使用`pull`命令解决冲突，解决完冲突之后再向主开发者提交补丁。
-  *`IMG.` `Git`工作流程示意图：* <br/> ![](http://i4.buimg.com/567571/790a1994fe980106.jpg)

<br>
## 五、工作区、暂存区和版本库【重点】
### 5.1 工作区
- `GIT`仓库同级目录。
### 5.2 暂存区
- **一般存放在`GIT`目录下的`index`文件（`.git/index`）中，所以我们把暂存区有时也叫作索引（*`index`*）**。
### 5.3 本地库
- 工作区有一个隐藏目录`.git`。

	> *注意*
	> - `git add`是把文件添加到暂存区（索引），需要进一步`commit`更新到本地版本库中；
	> - `git reset HEAD`、`git rm --cached<file>`、`git checkout`、`git checkout HEAD`[命令详细][2]
	> - 解决冲突之后的文件直接`commit`的话，不会默认加入到暂存区（*没有冲突的时候直接`commit`会默认把文件加入到暂存区*），需要执行`git add`命令手动加入暂存区
	> - 远程库和本地进行比较的时候是比较的本地库，而不是本地工作区，所以冲突是指本地库和远程库之间的冲突，而不是工作区和远程库之间

<br>
## 六、命令 [^GIT orders]
- `git add` 
	- 添加到暂存区/索引
- `git fetch`
	- 下载远程版本库内容
- `git merge`
	- 合并分支到当前分支
- `git pull`
	- `git fetch` + `git merge`
- `git reset HEAD`
	- 取消已经缓存的内容
- `git status`
	- 查看需要添加到暂存区和已经添加到暂存区但是还没有提交的文件
- `git remote [-v]`
	- 显示目前项目的远程仓库
- `git remote add aop git@git.coding.net:**co**/AOP.git`
	- 添加远程仓库，其中`aop`是自定义的远程仓库名称
- `git pull aop master`
	- 从远程仓库`aop`中的`master`分支pull新的数据
- `git push aop master`
	- `push`新的数据到到远程仓库`aop` 的`master`分支
- ` git checkout [<options>] [<branch>] -- <file>...`
	- 默认从本地仓库中检出文件，可以通过指定具体的`branch`检出远程的文件
- `git`查看远程分支、本地分支、创建分支、把分支推到远程`repository`、删除本地分支 [^ git branch reference]
- 忽略文件 [^ Git Ignore Reference]
	- 把文件内容添加到`.gitignore`文件中。
	
		``` xml
		target/
		.classpath
		```
    - 注意：例如，
	    - 其中`target/`前面可以加`/`（代表了项目路径），也可以不加；
	    - `target/`也可以不加`/`，如果此时`target`是文件夹，则会忽略其下的所有文件，如果其是文件，则回忽略它。

- `git push origin --delete <branchName>`
	- 删除远程分支。

	> *注意*
	> - `GIT`命令不区分大小写
	> - `git merge`的时候不仅`merge`的代码，而且`merge`了`commit`记录（*显而易见，但是初手容易忽略*）
	
[^GIT orders]: [Git基本操作][4]、[Git查看提交历史][5]、[Git标签][6]、[操作远程分支][10]

[^ git branch reference]: [CSDN][8]

[^ Git Ignore Reference]: [CSDN][9]

<br>
## 七、分支【GIT的“必杀技特性”】
- 合并不仅仅是简单的文件添加、移除的操作，也会合并修改（*当在合并修改的时候出现冲突就要解决冲突*）；
- 其他
	- 分支作用
		- **使用分支意味着你可以从开发主线上分离开来，然后在不影响主线的同时继续工作。** **`即在没有合并之前，分支上的内容相互独立。`**
	- **解决冲突【`pull/fetch/merge`-> `手动解决冲突（即冲突“三元素”直接包括的内容）` -> `git add` -> `git commit`】**
	-	`pull/fetch`（从远程到本地）或者`git merge`（本地版本库之间合并，一般不会出现冲突），有可能出现冲突（会用`<<<<<<HEAD`、`======`、`>>>>>local`这三者标注冲突内容，详细见下面分析），那么就要手动解决，然后要git add告诉GIT冲突已经解决了（此时如果直接`commit`，会提醒有冲突要先解决才能`commit`（**普通没有冲突的文件如果过需要`commit`可以直接提交，这时候`commit`中包含了更新版本库，对于冲突文件必须要先添加到的索引中才可以`commit`**））
	- `<<<<<HEAD`、`======`、`>>>>>local`含义和作用
		- `<<<<HEAD`（索引）和`====`之间代表索引里面指向的内容，而`====`和`>>>>local`（本地）之间代表的则是本地内容

	> *注意*
	> - `git pull`的时候如果有代码没有`commit`到本地库，那么是会提示工作区有文件没有提交，导致`git pull`失败
		
<br>
## 八、远程仓库
- *如果你想通过`GIT`分享你的代码或者与其他开发人员合作，你就需要将数据放到一台其他开发人员能够连接的服务器上*

	> *注意*
	> - 需要部署公钥是本地`Git`仓库和远程仓库之间进行`SSH`加密传输；
	> - [GIT代码托管平台。][7]

<br>
## 九、名词概念
- `HEAD`、`master`和`origin`。 [^ head master origin reference]
- `HEAD`
	- `which commit is my repo currently pointing at.`
[^ head master origin reference]: [ITEye][11]

<br>
## 十、版本回滚
### 10.1 git reset [^ git reset reference]
[^ git reset reference]: [百度经验][12]、[CSDN][13]

### 10.2 git revert
### 10.3 git reset和git revert的区别 [^ difference between git revert and git reset]
[^ difference between git revert and git reset]: [mtxcxin][14]


[1]: http://www.cnblogs.com/quanyongan/archive/2013/04/24/3037589.html
[2]: http://www.runoob.com/git/git-tutorial.html
[3]: http://www.runoob.com/git/git-tutorial.html
[4]: http://www.runoob.com/git/git-basic-operations.html
[5]: http://www.runoob.com/git/git-commit-history.html
[6]: http://www.runoob.com/git/git-tag.html
[7]: http://www.open-open.com/lib/view/open1420704561390.html
[8]: http://blog.csdn.net/arkblue/article/details/9568249/
[9]: http://blog.csdn.net/benkaoya/article/details/7932370
[10]: http://zengrong.net/post/1746.htm
[11]: http://aigo.iteye.com/blog/2273750
[12]: http://jingyan.baidu.com/article/f71d60377c24601ab641d19c.html
[13]: http://blog.csdn.net/ikscher/article/details/44488165
[14]: http://blog.mtxcxin.cn/blog/git%E5%A6%82%E4%BD%95%E5%9B%9E%E6%BB%9A%E8%BF%9C%E7%A8%8B%E4%BB%93%E5%BA%93.html