# JavaScript Study Notes [^ History Version]

@(Notes)[Javascript, notes]

> VICTORY LOVES PREPARATION

[^ History Version]: 
> 版本信息：
> 2017年03月21日 下午05:14:46

[TOC]

## 〇、思维导图
- **`SUMMARY：`**

> *注意*
> -

<br>
## 一、简介
- **`SUMMARY：`**

<br>
## 二、与后端交互数据格式标准
- **`SUMMARY：`通过`JSON`进行交互。**

<br>
## 三、遍历JSON数据
- **`SUMMARY：`通过`JSON`进行交互。**
- *`eg.`示例代码：*

	``` javascript
	var params = $('#params').val();
	// json2.complete.js
	var jParams = JSON.parse(params);
	var paramsForTrans = '';
	for(var key in jParams){
		paramsForTrans += key + '=' + jParams[key] + '&'
	}
	paramsForTrans = paramsForTrans.substring(0, paramsForTrans.length - 1); 
	```

