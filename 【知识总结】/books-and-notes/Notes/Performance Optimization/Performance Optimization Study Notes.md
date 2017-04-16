# Performance Optimization Study Notes [^ history version]

@(Notes)[Performance Optimization , notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> �汾��Ϣ��
> 2017��04��16�� ����03:41:26
> 2017��03��30�� ����04:23:31

[^ Hibernate Reference]: [Hibernate.org][1]��[�ٶȰٿ�][2]

[TOC]

***
## ����˼ά��ͼ

<br>
## һ����Ҫ����
-  ÿ�����߶��������õķ�Χ����Ҫ�������ǵ�ʵ��������Ӧ�ã�
-  ����ÿ�����ⶼ�кܶ෽��������Ҫ��˼����Щ�򵥡����á���Ч�ķ�����

<br>
## ������������
### 2.1 SQL�Ż�

### 2.2 ORM�Ż�

#### 2.2.1 Hibernate�����Ż�����
- **`SUMMARY��`ʹ���ӳټ��ء��ƶ�����Ļ��桢�趨���������������Լ��Ż�ץȡ���Եȷ���������ο����¡�**
- **ʹ���ӳټ������ԣ�**
	- ����`Proxy`��������ʵ���ӳټ��أ�
	- `load`�ӳټ��أ�`get`�����������ӳټ��ء�
- **�ƶ�����Ļ�����ԣ��������桢��ѯ���棩��**
- **�Ż�ץȡ����** [^ hibernate fetch strategy reference]
[^ hibernate fetch strategy reference]: [CSDN][1]

	- **`SUMMARY��`��ͬʱ��Ҫʹ����������ʵ�����ݵ�ʱ��ֱ��ͨ��`join`����ʽ��ȡ�������ݣ������ӳټ��ء�**
	- ��`HQL`�����ʹ��ץȡ���Ӳ�ѯ��ͨ��дһ��`left join fetch`���������������ʵ�������һ���Դ����ݿ��м��������������������ض�����£�**ͬʱ��Ҫʹ�õ�������ʵ�������**������`SQL`����������߲�ѯЧ�ʡ�
		- ���Ը����˹�����ӳ��Ԫ�����`fetch`���ԣ�
			- `select`����ΪĬ��ֵ�����Ĳ����ǵ���Ҫʹ�õ��������������ʱ�����ⵥ������һ��`select`���ץȡ��ǰ����Ĺ�����������ݡ����ӳټ��أ�
		    - `join`�����Ĳ�������ͬһ��`select`���ʹ����������ö�������ݺ���������������ݣ���ʱ����������ӳټ���ʧЧ��
- **�趨����������������`batch_size`��** [^ hibernate batch reference];
[^ hibernate batch reference]: [CSDN][2]

	- ��û�������������С��ǰ���£�������������ݹ�����ᵼ��java.lang.OutOfMemory: Java heap space�������������ַ�ʽ�����
		- ͨ������`session.flush()`��`session.clear()`�ڴ���һ�����������ݺ��ֶ�ˢ�»��棻
		- ͨ�������������С�����
		
			``` xml
			<property name="hibernate.jdbc.batch_size">50</property> //ÿ50������ύһ�� 
			```
			
- ������ԣ�ѡ��`UUID`��Ϊ������������
- ���к����`O/R`ӳ����ƣ�
- ������ԣ�ѡ�û��ڰ汾�ŵ��ֹ��������������
- �ڿ���������, ����`hibernate.show_sql`ѡ��鿴���ɵ�`SQL`���Ӷ��˽�ײ��״����������ɺ�رմ�ѡ�
- �������ݿⱾ����Ż��������������ǡ�������ݷ������Եȶ���Գ־ò�����ܴ����ɹ۵�����������Щ��Ҫרҵ��`DBA`�����ݿ����Ա���ṩ֧�֡�

#### 2.2.2 MyBatis�Ż� [^ mybatis optimize reference]
[^ mybatis optimize reference]: [ITEye][5]

- **`SUMMARY��`�ӳټ��ء����桢�������������������ݲ�ѯ�Լ����ÿ���ṩ�������Ż����ã�����`enhancementEnabled="true"`����`Java`�ֽ�����ǿ���ܣ�����`getter`��`setter`�ĵ���Ч�ܣ�����`Java`���������������ܿ����ȡ�**
- **�ӳټ���**
- **����**
- **��������** [^ mybatis batch reference]
[^ mybatis batch reference]: [CSDN][3]

	``` xml
	// ��������
	<insert id="addTrainRecordBatch" parameterType="java.util.List">  
	
	    insert into t_train_record (add_time,emp_id,activity_id,flag)   
	    values  
	    <foreach collection="list" item="item" index="index" separator="," >  
	        (#{item.addTime},#{item.empId},#{item.activityId},#{item.flag})  
	    </foreach>  
	</insert> 
	```
- **���������ݲ�ѯ**
	- ��������漰������ѯ��ʱ���������Ȼ��뵽ʲô����Ȼ�����Ӳ�ѯ����Ϊ�����Ӻ������ӣ����ﲻ��ϸ˵�������Ӳ�ѯ�����Ƕ�֪�����Ӳ�ѯҪ��`in`��ѯ��Ч��Ҫ�ߣ�������Ҫע����ǣ���������ǻ�������ҵ��׷������Ҫ�ߣ����÷ֿ�ֱ�������Ҫ������Ҫ��һ�����Ӳ�ѯ��ɶ����򵥲�ѯ����ʱ��`in`�ͱȽϺ��ˡ�
      
      ``` xml
		// ������
		select name,age,userRow from user as u inner join rol as r on u.userId=r.userId
		// in(�������)
		select name,age,userRow from user where userId in (select userRow,userId from rol) 
      ```

- �����Ż�����<br>![][4]

	``` xml
	<sqlMapConfig>
		<settings cacheModelsEnabled="true"
		lazyLoadingEnabled="true"
		enhancementEnabled="true"
		errorTracingEnabled="true"
		maxSessions="1024"
		maxTransactions="512"
		maxRequests="2048"
		useStatementNamespaces="true" />
	</sqlMapConfig>
	```

### 2.3 JVM�Ż�

### 2.4 �����Ż�

<br>
## ����ע������

[1]: http://blog.csdn.net/xueshuangshuang123/article/details/8462261
[2]: http://blog.csdn.net/xiazdong/article/details/7709068
[3]: http://blog.csdn.net/u010168160/article/details/51901445
[4]: http://i1.piimg.com/567571/94233b2c5c357af9.png
[5]: http://w800927.iteye.com/blog/1167844


