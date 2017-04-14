# Maven Study Notes [^ history version]

@(Notes)[Maven, notes]

> VICTORY LOVES PREPARATION

[^ history version]: 
> 版本信息：
> 2017年03月31日 下午10:04:30
> 2017年03月31日 下午03:03:52
> 2016年09月01日 22:57
> 2016年08月30日 09:20
> 2016年08月30日 09:20
> 2016年07月30日 10:53



[TOC]

***
## 〇、思维导图
- **`SUMMARY：`**
- *`IMG.`思维导图：*<br><br>![](http://i4.buimg.com/567571/e344c7a42d1c930f.png)

<br>
## 一、简要介绍
### 1.1 含义
- `Maven`是一个跨平台的项目管理工具（主要用于`Java`平台的项目构建、依赖管理）。

<br>
## 二、具体内容
### 2.1 功能
- *`IMG.` `Maven`功能图示：*<br>![图例](http://i1.piimg.com/567571/64805de1cfba5a34.png)
- `Jar`包的统一管理，多个项目可以只用一个`Jar`包（免得一个`Jar`复制了多份）；
- 自动化测试等等。

### 2.2 约定 
- `src/main/java`存放项目的`Java`文件；
- `src/main/resources`存放项目的`Java`资源文件；
- `src/test/java`存放测试文件；
- `src/test/resources`存放测试用的资源文件；
- `pom.xml`统一引用配置。

> *注意*
> - 如果一个`Maven`项目的命名按照上面的那样，就算没有具体指明目标文件是`classes`文件或者`test-classes`文件，时候`MVN`命令的时候也会默认把它们放到相应的`classes`或者`test-classes`文件中的。
 
### 2.3 命令
- `mvn compile`
	-  编译项目，生成`target`文件。
- `mvn clean`
	- 清理`target`文件。
- `mvn test`
	- 运行测试方法。
- `mvn package`
	- 根据`pom`文件中的`<packaging>`属性打包；
	- 可以根据配置的`<profile>`进行不同环境的打包 [^ maven profiles reference]。
		
		``` xml
		mvn package -DskipTest -P dev
		```
- `mvn install`
	- 打包并且把包放到本地仓库。
- `mvn archetype : create`
	- 创建`Maven`项目。

> **注意**
> - `eclipse update project` 更新项目依赖；
> - `mvn install / mvn package` 包含`mvn compile`和`mvn test`；
> - 经过`build`的项目文件没有更改过，`mvn compile`不会其作用，`mvn clean`之后才会进行重新编译。

[^ maven profiles reference]: [Coding][2] 

### 2.4 依赖
- 如果一个`Maven`项目依赖另一个，那么要配置好**`<dependency>`**{`<groupId>`、`<artifactId>`、`<version>`}，前提是依赖中指定的对象要`install`到仓库中；
- `Maven`的依赖具有传递性，也就是说如果引入一个`dependency`，那就引用了该`dependency`中引入的对象。

### 2.5 继承
- 被继承的`packaging`内容为`pom`，继承要使用`parent`标签标注继承对象属性。
- *`IMG.` `Maven`继承图示：* <br> ![fa](http://i4.buimg.com/567571/93cb481629c137f9.png)

### 2.6 坐标
- `<groupId>`、`<artifactId>`、`<version>`；
- 一般软件都会提供坐标，可以到相应软件的官网查看，也可以到吗`mvnrepository`进行查找。

### 2.7 仓库
- 本地库
- 中央库
- **私服**
	- Nexus文件，可网上下载，然后放到`webapp`下 ；
	- [使用Nexus搭建Maven私服][1]。
- 项目找`dependency`顺序
	- 本地库去看`maven`的`settings.xml`文件配置，根据配置选择私服还是中央库，默认找中央库；
	- 私服能够自动寻找中央库，也就是`settings.xml`配置了私服，但是其中没有其会默认去中央库查找。
	
### 2.8 执行原理
- `org.apache.maven.plugins`文件下有`maven`插件，所以可以使用`mvn compile`之类的命令
- *`IMG.` `Maven`执行原理：*<br>![](http://i4.buimg.com/567571/fc66a533a33f1fd6.png)

### 2.9 其他
- 使用<localRepository>标签设置本地库位置，默认`c:\users\用户名\.m2`文件夹下。
 
<br>
## 三、注意事项

[1]: http://www.cnblogs.com/quanyongan/archive/2013/04/24/3037589.html
[2]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/