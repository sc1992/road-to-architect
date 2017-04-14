# SQL [^ SQL Reference] Study Notes [^ history version]

@(Notes)[SQL, Notes]

> VICTORY LOVES PREPARATION.

[^ SQL Reference]: [�ٶȰٿ�][1]

[^ history version]: 
> �汾��Ϣ��
> 2017��04��06�� ����10:13:29


[TOC]

***
## ����˼ά��ͼ

<br>
## һ����Ҫ����
- **`SUMMARY��`�ṹ����ѯ���ԣ�`Structured Query Language`�����`SQL`����һ�����ݿ��ѯ�ͳ���������ԣ����ڹ����ϵ���ݿ�ϵͳ��**
- �ṹ����ѯ���ԣ�`Structured Query Language`�����`SQL`����һ������Ŀ�ĵı�����ԣ���һ�����ݿ��ѯ�ͳ���������ԣ����ڴ�ȡ�����Լ���ѯ�����º͹����ϵ���ݿ�ϵͳ��
- Ҳ�����ݿ�ű��ļ�����չ����

<br>
## ������������
### 2.1 ���� [^ SQL Index Reference]
[^ SQL Index Reference]: [Runoob][2]

- **`SUMMARY��`����������ȫ��ɨ�衣**
- `CREATE INDEX`��������ڱ��д���������
- �ڲ���ȡ�����������£�����ʹ���ݿ�Ӧ�ó�����Ը���ز������ݡ�

### 2.2 SQL�Ż�
- Ҫ���`SQL`����ִ��Ч�ʣ��ֶ�֮һ���Ǿ�������ȫ��ɨ�裬����ķ������ǽ���������
#### 2.2.1 �Ż����� [^ SQL Index Optimization Reference]
[^ SQL Index Optimization Reference]: [CSDN][3]

- ������`where`�Ӿ���ʹ��`is null`��`is not null`���ֶν����жϡ�
- ������`where`�Ӿ���ʹ��`!=`��`<>`������
- ������`where`�Ӿ���ʹ��`or`����������
- ����`in`��`not in`��
- ע��`like`��ͨ�����ʹ�á�
- ������`where`�Ӿ��ж��ֶν��б��ʽ������
- ������`where`�Ӿ��ж��ֶν��к���������
- ʹ�þ�����Ҫ���ֶδ���`*`��
- **���Ӳ�ѯ�У��� exists ���� in ��һ���õ�ѡ��**
	- *`EG.`ʵ�����룺*
		
		``` sql
		select name from a where id in (select id from b) 
		// ���Ϊ
		select name from a where exists (select 1 from b where id = a.id)
		```

<br>
## ����ע������

[1]: http://baike.baidu.com/link?url=Hr4RokAahlApOHlYQ3EMtSBgn13PMqgi-NLssOydOEcHbb67b6ATg3pLoRESIR6E7SUKR7cXHzXYiqj3eMu-WiiRt_l9MZBf69QDSUcILlpby6aKeFGbfjUFuWVcuiYAro2hs7r6dYEtRepAE55n0I3XtbElzh-TwD_YhYRjksg5NbA--TYTZWMOJ3hninKHKmu3knDK1BIh_c_rAZDh3a
[2]: http://www.runoob.com/sql/sql-create-index.html
[3]: http://blog.csdn.net/csdnstudent/article/details/40398245