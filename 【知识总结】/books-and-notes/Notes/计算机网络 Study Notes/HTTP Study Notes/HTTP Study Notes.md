# HTTP [^ HTTP Reference] Study Notes [^ history version]

@(Notes)[HTTP , Notes]

> VICTORY LOVES PREPARATION.

[^ HTTP Reference]: [W3][1]、[百度百科][2]、[BlogJava][3]

[^ history version]: 
> 2017年03月15日 下午04:49:13

[TOC]

***
## 〇、思维导图
> *注意*
> - 

<br>
## 一、简介
- **`SUMMARY：`超文本传输协议（`HTTP`，`HyperText` `Transfer` `Protocol`），规定网络文本传输协议，使网络中的计算机能够处理文本信息，是互联网上应用最为广泛的一种网络协议。**
- 超文本传输协议（`HTTP`，`HyperText` `Transfer` `Protocol`）是互联网上应用最为广泛的一种网络协议。所有的`WWW`文件都必须遵守这个标准。设计`HTTP`最初的目的是为了提供一种发布和接收`HTML`页面的方法。`1960`年美国人`Ted` `Nelson`构思了一种通过计算机处理文本信息的方法，并称之为超文本（`hypertext`），这成为了`HTTP`超文本传输协议标准架构的发展根基。`Ted` `Nelson`组织协调万维网协会（`World` `Wide` `Web` `Consortium`）和互联网工程工作小组（`Internet` `Engineering` `Task` `Force`）共同合作研究，最终发布了一系列的`RFC`，其中著名的`RFC 2616`定义了`HTTP 1.1`。

<br>
## 二、Content-Type（Mime-Type）[^ Content-Type Reference]
[^ Content-Type Reference]: [OSChina][4]

- **`SUMMARY：`定义网络文件的类型和网页的编码，决定文件接收方将以什么形式、什么编码读取这个文件。**
- 一般是指网页中存在的`Content-Type`，用于**定义网络文件的类型和网页的编码，决定文件接收方将以什么形式、什么编码读取这个文件；**
- 网络上数据的交互通过流（字节码）的方式。
- *`eg.`实例：*
	- 这就是经常看到一些`jsp`网页点击的结果却是下载到的一个文件或一张图片的原因。

<br>
## 三、TCP/UDP常见端口 [^ Port Reference]
[^ Port Reference]: [OSChina][6]、[IANA][5]

- Port numbers are assigned in various ways, based on three ranges: System
Ports (0-1023), User Ports (1024-49151), and the Dynamic and/or Private
Ports (49152-65535).

[1]: https://www.w3.org/Protocols/
[2]: http://baike.baidu.com/link?url=l57rtqTnpF5-wa4Jx9yuskZIudXQ5nZ-Js069DvnFrD2Lk5UH99obXNf47132V2rtRlTpzxh3Ichy9JsPJeQx_
[3]: http://www.blogjava.net/zjusuyong/articles/304788.html
[4]: http://tool.oschina.net/commons
[5]: https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml
[6]: http://tool.oschina.net/commons?type=7