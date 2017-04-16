#  Web Server Study Notes [^ history version]

@(books-and-notes)[Web Server, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
> 2017年04月16日 下午03:31:38

[TOC]

***

<br>
## 〇、思维导图

<br>
## 一、简要介绍
- **`SUMMARY：`可持续发展重要方法。**

<br>
## 二、具体内容
### 2.1 反向代理 [^ reverse proxy reference]
[^ reverse proxy reference]: [百度百科][1]

- **`SUMMARY：`如下。**
 - **正向代理：代理内部网络对`Internet`的连接请求，从内到外；**
 - **反向代理：代理外部网络上的主机，访问内部网络，从外到内。**
- 通常的代理服务器，只用于代理内部网络对`Internet`的连接请求，客户机必须指定代理服务器，并将本来要直接发送到`Web`服务器上的`http`请求发送到代理服务器中。由于外部网络上的主机并不会配置并使用这个代理服务器，普通代理服务器也被设计为在`Internet`上搜寻多个不确定的服务器，而不是针对`Internet`上多个客户机的请求访问某一个固定的服务器，因此普通的`Web`代理服务器不支持外部对内部网络的访问请求。**当一个代理服务器能够代理外部网络上的主机，访问内部网络时，这种代理服务的方式称为反向代理服务。**此时代理服务器对外就表现为一个`Web`服务器，外部网络就可以简单把它当作一个标准的`Web`服务器而不需要特定的配置。不同之处在于，这个服务器没有保存任何网页的真实数据，所有的静态网页或者`CGI`程序，都保存在内部的`Web`服务器上。因此对反向代理服务器的攻击并不会使得网页信息遭到破坏，这样就增强了`Web`服务器的安全性。
- 反向代理方式和包过滤方式或普通代理方式并无冲突，因此可以在防火墙设备中同时使用这两种方式，其中反向代理用于外部网络访问内部网络时使用，正向代理或包过滤方式用于拒绝其他外部访问方式并提供内部网络对外部网络的访问能力。因此可以结合这些方式提供最佳的安全访问方式。

<br>
## 三、注意事项

[1]: http://baike.baidu.com/link?url=0BJLFZFFqhl1g-VRNO8T3U2VaAh00X5LwWd3Q1bjFwUrF4_uVCwcnlH0gLPddtIeVSX3qr2g7B9VjpKEc2tQ3p2Ch8G2A_EGc06uGnL6xiS_Tdc9wOOMJzoCJe_7v73W
