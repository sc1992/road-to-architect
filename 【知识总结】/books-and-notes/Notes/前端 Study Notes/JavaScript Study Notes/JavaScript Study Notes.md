# JavaScript Study Notes [^ History Version]

@(Notes)[Javascript, notes]

> VICTORY LOVES PREPARATION

[^ History Version]: 
> �汾��Ϣ��
> 2017��03��21�� ����05:14:46

[TOC]

## ����˼ά��ͼ
- **`SUMMARY��`**

> *ע��*
> -

<br>
## һ�����
- **`SUMMARY��`**

<br>
## �������˽������ݸ�ʽ��׼
- **`SUMMARY��`ͨ��`JSON`���н�����**

<br>
## ��������JSON����
- **`SUMMARY��`ͨ��`JSON`���н�����**
- *`eg.`ʾ�����룺*

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

