# Performance Optimization Study Notes [^ history version]

@(Notes)[Performance Optimization , notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> �汾��Ϣ��
> 2017��04��17�� ����01:32:14
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
### 2.1 SQL�Ż� [^sql optimization]
[^sql optimization]: [CSDN][7]��[51CTO][8]��[GitHub][9]

- Ҫ���`SQL`����ִ��Ч�ʣ��ֶ�֮һ���Ǿ�������ȫ��ɨ�裬����ķ������ǽ���������
- ������ʽ��

#### 2.1.1 �Ż����� [^ SQL Index Optimization Reference]
[^ SQL Index Optimization Reference]: [CSDN][11]

- ������`where`�Ӿ���ʹ��`is null`��`is not null`���ֶν����жϣ�
- ������`where`�Ӿ���ʹ��`!=`��`<>`��������
- ������`where`�Ӿ���ʹ��`or`������������
 - **����ʹ��`union all `���棬ǰ����ʹ��������**
 - �����`SQL`���ݿ����������`B+Tree`֮������ݽṹ������ṹ�ǡ����򡱵ģ�����һ��`integer��`���ϵ������ᰴ������ֶε�ֵ�������������������ŵ����ڿ���֧��`range query`������`where f>100`�������������Գ����Ч�������������������ֽṹҲ�����һ�����⡪����ͬ�������ֶε�������˳�򲢲���ͬ������`where f1>100 or f2<50`��������������ֻ��˳��ɨ��`f1`��`f2`����������ʱ���޷�ͬʱ�����������ж�һ����¼�Ƿ���������������Ϊ���������Ĺ��ˣ�**ֻ�ܷ�������һ��������������ȫ��ɨ�裻**
- ע��`like`��ͨ�����ʹ�ã�
	- ����������ִ��Ч��Ҫ��Ķ࣬��Ϊ��ʹ����������

		``` sql
		select id from tabel where name like'UncleToo%'
		```
- ������`where`�Ӿ��ж��ֶν��б��ʽ������
- ������`where`�Ӿ��ж��ֶν��к���������

#### 2.1.2 �����Ż�
- ���Ӳ�ѯҪ��`in`��ѯ��Ч��Ҫ�ߣ�
- ����`in`��`not in`����Ȼ����`in`��������ʹ������������ȫ��ɨ�裬������ĳЩ�ض��������ʹ����������Ҳ��Ч�����ã�
- **���Ӳ�ѯ�У���exists����in��һ���õ�ѡ��**
	- *`EG.`ʵ�����룺*

		``` sql
		select name from a where id in ( select id from b ) 
		// ���Ϊ
		select name from a where exists ( select 1 from b where id = a.id )
		```
	- *`EG.` `EXISTS`�﷨��*
	
		``` sql
		SELECT * FROM `user` u WHERE EXISTS ( SELECT 1 FROM designer d WHERE u.`name` = d.user_name );
	
		SELECT DISTINCT u.* FROM `user` u, designer d WHERE u.`name` = d.user_name;
		
		SELECT DISTINCT u.* FROM `user` u INNER JOIN designer d ON u.`name` = d.user_name;
		```
		- ����ԭ�����²⣩Ӧ�����Ӳ�ѯ��`SELECT 1 FROM designer d WHERE u.name = d.user_name`����ȡ��`user`���з���������`primary key`��
- ʹ��`ORM`��ʱ��ʹ�þ�����Ҫ���ֶδ���`*`��
- ����ʹ�úķ���Դ�Ĳ���������`DISTINCT`��`UNION`��`MINUS`��`INTERSECT`��`ORDER BY`��`SQL`��������`SQL`���� ִ�У��ķ���Դ������`SORT`�����ܡ�`DISTINCT`��Ҫһ���������, ��������������Ҫִ����������
- ʹ����ʱ��

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

### 2.3 JVM�Ż� [^ JVM Optimize Reference]
[^ JVM Optimize Reference]: [����԰][14]

- **�ѣ�`Heap`���ͷǶѣ�`Non-heap`���ڴ�**
	- ���չٷ���˵����**`Java`���������һ���ѣ���������ʱ��������������ʵ����������ڴ���Ӵ˴����䡣������ `Java`���������ʱ�����ġ���`JVM`�ж�֮����ڴ��Ϊ�Ƕ��ڴ棨`Non-heap memory`����**���Կ���`JVM`��Ҫ�����������͵��ڴ棺�ѺͷǶѡ�����˵�Ѿ���`Java`����ɼ����ڴ棬������������Աʹ�õģ��ǶѾ���`JVM`�����Լ��õģ����Է�������`JVM`�ڲ�������Ż�������ڴ棨��`JIT`�����Ĵ��뻺�棩��ÿ����ṹ��������ʱ�����ء��ֶκͷ������ݣ��Լ������͹��췽���Ĵ��붼�ڷǶ��ڴ��С� 
- **���ڴ����**
	- `JVM`��ʼ����Ķ��ڴ���`-Xms`ָ����Ĭ���������ڴ��`1/64`��
	- `JVM`������Ķ��ڴ���`-Xmx`ָ����Ĭ���������ڴ��`1/4`��
	- Ĭ�Ͽ�����ڴ�С��`40%`ʱ��`JVM`�ͻ������ֱ��`-Xmx`��������ƣ�
	- ������ڴ����`70%`ʱ��`JVM`����ٶ�ֱ��`-Xms`����С���ơ�
	- ��˷�����һ������`-Xms`��`-Xmx`����Ա�����ÿ��`GC`������ѵĴ�С��
	- ˵�������`-Xmx`��ָ������ָ��ƫС��Ӧ�ÿ��ܻᵼ��`java.lang.OutOfMemory`���󣬴˴�������`JVM`������`Throwable`�ģ��޷���`try...catch`��׽�� 
- **�Ƕ��ڴ����**
	- `JVM`ʹ��`-XX:PermSize`���÷Ƕ��ڴ��ʼֵ��Ĭ���������ڴ��`1/64`��
	- ��`XX:MaxPermSize`�������Ƕ��ڴ�Ĵ�С��Ĭ���������ڴ��`1/4`��
	- ������һ˵��`MaxPermSize`ȱʡֵ��`-server -client`ѡ����أ�`-server`ѡ����Ĭ��`MaxPermSize`Ϊ`64m`��`-client`ѡ����Ĭ��`MaxPermSizeΪ32m`�������û��ʵ�顣��
	- `XX:MaxPermSize`���ù�С�ᵼ��`java.lang.OutOfMemoryError: PermGen space`�����ڴ������ 
	- ˵˵Ϊʲô���ڴ������ 
		- ��һ�����ڴ����ڴ��`Class`��`Meta`����Ϣ��`Class`�ڱ�`Load`��ʱ�򱻷���`PermGen space`�������ʹ��`Instance`��`Heap`����ͬ�� 
		- `GC`��`Garbage Collection`�������������������ڶ�`PermGen space`������������������`APP`��`LOAD`�ܶ�`CLASS`�Ļ����ͺܿ��ܳ���`PermGen space`����
	   - ���ִ��󳣼���`web`��������`JSP`����`pre compile`��ʱ��

- -vmargs -Xms128M -Xmx512M -XX:PermSize=64M -XX:MaxPermSize=128M
	- `-vmargs`˵��������`VM`�Ĳ��������Ժ������ʵ����`JVM`�Ĳ����ˡ�
- -Xms128m
	- `JVM`��ʼ����Ķ��ڴ档
- -Xmx512m
	- `JVM`����������Ķ��ڴ棬������䡣
- -XX:PermSize=64M
	- `JVM`��ʼ����ķǶ��ڴ档
- -XX:MaxPermSize=128M
	- `JVM`����������ķǶ��ڴ棬������䡣

- **�����Ż�����**
	- �������ѽ�����������`Young`��`Tenured`��`Perm`��`Full GC`��Ϊ��Ҫ�������ѽ��л��գ����Ա�`Scavenge GC`Ҫ�������Ӧ�þ����ܼ���`Full GC`�Ĵ������ڶ�`JVM`���ŵĹ����У��ܴ�һ���ֹ������Ƕ���`FullGC`�ĵ��ڡ�������ԭ����ܵ���`Full GC`��
		 - ���ϴ���`Tenured`����д����
		 - �־ô���`Perm`����д����
		 - `System.gc()`����ʾ���ã������ǵ���`System.gc()`��ʱ����ʵ���������Ͻ����������գ�������һ����ִ���������� [^ system.gc reference]����
		 - ��һ��`GC`֮��`Heap`�ĸ��������Զ�̬�仯��
	- ������һ������`-Xms`��`-Xmx`����Ա�����ÿ��`GC`������ѵĴ�С��
			 
[^ system.gc reference]: [CSDN][12]

	> *ע��* [^ various overflow or outofmemory reference]
	> - `StackOverFlowError`
	>  - ջ�����ͨ��������ǵݹ�̫��µġ�
	> - `java.lang.OutOfMemory`
	>  - ���ڴ治���á�
	> - `java.lang.OutOfMemoryError:PermGen space`
	>  - ���ô��ڴ治���á�
	> - `OutOfMemory`�������Ϊ�����ڴ��ʱ���ڴ治�㣬��`StackOverFlowError`�������Ϊ�Ѿ�����þ�����ڴ��С��ֻ����ʹ�õ�ʱ������ˣ���������������ڴ�ռ��С��
	
 [^ various overflow or outofmemory reference]: [CSDN][15]��[GitHub][17]

### 2.4 �����Ż� [^ java code optimization]
[^ java code optimization]: [����԰][18]

- ����ʹ��`HashMap`��`ArrayList`��`StringBuilder`�������̰߳�ȫ��Ҫ�������Ƽ�ʹ��`Hashtable`��`Vector`��`StringBuffer`������������ʹ��ͬ�����ƶ����������ܿ�����
- ��ʱ���������Ҫ�ĻỰ��
- ��Ҫ����һЩ��ʹ�õĶ��󣬲�Ҫ����һЩ��ʹ�õ��ࣻ
- �ַ����������ַ�������`equals`��ʱ���ַ�������д��ǰ�棬�������Ա����ָ���쳣��
- ʹ������Ч�ʵķ�ʽȥ����`Map`��

	``` java
	public static void main(String[] args)
	{
	    HashMap<String, String> hm = new HashMap<String, String>();
	    hm.put("111", "222");
	        
	    Set<Map.Entry<String, String>> entrySet = hm.entrySet();
	    Iterator<Map.Entry<String, String>> iter = entrySet.iterator();
	    while (iter.hasNext())
	    {
	        Map.Entry<String, String> entry = iter.next();
	        System.out.println(entry.getKey() + "\t" + entry.getValue());
	    }
	}
	```
- ���`FindBugs`���������
- ʹ��`CheckStyle`�淶������

<br>
## ����ע������

[1]: http://blog.csdn.net/xueshuangshuang123/article/details/8462261
[2]: http://blog.csdn.net/xiazdong/article/details/7709068
[3]: http://blog.csdn.net/u010168160/article/details/51901445
[4]: http://i1.piimg.com/567571/94233b2c5c357af9.png
[5]: http://w800927.iteye.com/blog/1167844
[7]: http://blog.csdn.net/hguisu/article/details/5731629
[8]: http://database.51cto.com/art/200904/118526.htm
[9]: https://github.com/account4github/note/wiki/mysql%E4%BC%98%E5%8C%96
[10]: http://w3school.com.cn/sql/sql_create_index.asp
[11]: http://blog.csdn.net/csdnstudent/article/details/40398245
[12]: http://blog.csdn.net/yewei02538/article/details/52386642
[13]: http://www.importnew.com/15820.html
[14]: http://www.cnblogs.com/mingforyou/archive/2012/03/03/2378143.html
[15]: http://blog.csdn.net/u011983531/article/details/63250882
[16]: http://blog.csdn.net/yuezhiren/article/details/7948950
[17]: https://github.com/CountMCristo/framework-assembly-basis/tree/develop
[18]: http://www.cnblogs.com/xrq730/p/4865416.html
