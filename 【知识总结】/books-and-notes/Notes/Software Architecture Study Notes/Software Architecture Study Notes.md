# Software Architecture [^ Software Architecture Reference] Study Notes [^ history version]

@(Notes)[Software Architecture, Notes]

> VICTORY LOVES PREPARATION.

[^ Software Architecture Reference]: [ImportNew][1]

[^ history version]: 
> 2017年3月14日 下午2:33:43

[TOC]

***
## 〇、思维导图

<br>
## 一、简要介绍

<br>
## 二、具体内容
### 2.1 持续集成平台
- 持续集成平台不只是`CI`服务器，是一系列软件开发管理工具的组合：
- 源码版本管理：`GIT`、`SVN`；
- 项目构建工具：`Maven`、`Ant`；
- 代码质量管理：`Sonar`（`CheckStyle`、`FindBugs`、`PMD`等）；
- 持续集成引擎：`Jenkins`、`Hudson`、`Apache Continuum`等；
- 应用持续部署：操作系统、`JDK`、`Tomcat`、`JBoss`等；
- 实施持续集成过程中要用到的其他各种工具、各种插件等。

### 2.2 分布式系统架构
- 高可用、高性能、可扩展、便于运维管理以及符合系统检测要求等；
- 消息队列：`ActiveMQ`；
- 分布式缓存：`Redis`；
- 分布式文件系统：`FastDFS`；
- 反向代理服务器：`Nginx`、`Apache`；
- 集群与负载均衡：`Keepalived`、`HAproxy`、`LVS`；
- 应用服务器：`JBoss`、`Tomcat`；
- 数据库：`MySQL`、`Oracle`、`DB2`；
- 数据库分布式处理系统（集群、分库、分表）：`Cobar`；
- 容器引擎：`Docker`；
- 系统日志管理：`Logstash`；
- 分布式系统监控：`Zabbix`；
- 其他：`CA`证书、密码键盘、防篡改系统等。

### 2.3 Jeesite [^ Jeesite reference]
[^ Jeesite reference]: [GitHub][2]

#### 2.3.1 后端
- 核心框架：`Spring Framework 4.1`；
- 安全框架：`Apache Shiro 1.2`；
- 视图框架：`Spring MVC 4.1`；
- 服务端验证：`Hibernate Validator 5.2`；
- 布局框架：`SiteMesh 2.4`；
- 工作流引擎：`Activiti 5.21`；
- 任务调度：`Spring Task 4.1`；
- 持久层框架：`MyBatis 3.2`；
- 数据库连接池：`Alibaba Druid 1.0`；
- 缓存框架：`Ehcache 2.6`、`Redis`；
- 日志管理：`SLF4J 1.7`、`Log4j`；
- 工具类：`Apache Commons`、`Jackson 2.2`、`Xstream 1.4`、`Dozer 5.3`、`POI 3.9`。

#### 2.3.2 前端
- `JS`框架：`jQuery 1.9`；
- `CSS`框架：`Twitter Bootstrap 2.3.1`；
- 客户端验证：`JQuery Validation Plugin 1.11`；
- 富文本在线编辑：`CKEditor`；
- 在线文件管理：`CKFinder`；
- 动态页签：`Jerichotab`；
- 手机端框架：`Jingle`；
- 数据表格：`jqGrid`；
- 对话框：`jQuery jBox`；
- 下拉选择框：`jQuery Select2`；
- 树结构控件：`jQuery zTree`；
- 日期控件： `My97DatePicker`。

<br>
## 三、注意事项

[1]: http://www.importnew.com/19376.html
[2]: https://github.com/thinkgem/jeesite
