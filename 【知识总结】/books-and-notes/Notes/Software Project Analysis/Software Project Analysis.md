# Software Project Analysis [^ history version]

@(Notes)[Software Project, Analysis ]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
> 2017年04月1日 下午03:34:57

[TOC]

***

## 〇、思维导图
- **`SUMMARY:`**

> *注意*
> - 

<br>
## 一、简要介绍
- 软件项目分析，主要从业务和技术方面进行分析。

<br>
## 二、具体内容
### 2.1 重要项目
#### 2.1.1 业务介绍
- 医链信息管理平台（`yilian-admin`）
	- 主要做些用户权限管理、医责险管理、讲课管理、标准医院科室管理、医直播管理等。
- 医链客户端接口项目（`yilian-api`）
	- 主要做医链客户端的接口，远程会诊、讲课、病例等业务；
	- 使用`Dom4j`进行`XML`解析。
- 医链患者项目（`yilian-patient`）
	- 主要做患者管理。
- 医链定时项目（`yilian-task`）
	- 主要是一些定时任务，推送。
- 会诊和专家管理（`center-web`）
	- 新的框架，主要做会诊和专家管理，后序功能不断迭代。
#### 2.1.2 主要技术
- `Spring`；
- `MVC`框架，`Spring MVC`；
- `ORM`框架，`MyBatis`；
- 缓存、`Memcached`；
- 日志；
- 数据库，`MySQL`；
- 其他小技术，例如，`POI`、`JXL`、文件上传、`COS`对象存储、`HttpComponents`、`FckEditor`、`Velocity`、`FreeMarker`、`CheckStyle`、`Findbugs`、`SecureCRT`、`FileZilla`、`Bugclose`、`JSON`、`XML`、推送、短信、数据库连接池、加解密和`Redmine`[^ Redmine Reference] 项目管理系统等；
- 版本控制，`Git`、`SVN`；
- 权限控制（基于`URL`）；
- 制定了后台客户端交互标准（面向对象）；
- 前端知识，`HTML`、`CSS`、`JS`、`JQuery`、`Ajax`。

[^ Redmine Reference]: [百度百科][1]

### 2.2 其他项目
- 医链移动管理平台项目（`yilian-wap`）
- 医链微信项目（`yilian-weixin`）
- 新医链信息平台（`center-inner-web`）

<br>
## 三、注意事项

[1]: http://baike.baidu.com/link?url=_L-b3n2jsW6SX6VsA9K4IiiWLmb5aLPMgSeK364A_w5pNvu-ryZQXCUmy-I643jY5cZPHjVIWUj0Zx7Mmjkt3_