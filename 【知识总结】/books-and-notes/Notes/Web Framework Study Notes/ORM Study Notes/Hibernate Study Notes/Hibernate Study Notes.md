# Hibernate [^ Hibernate Reference] tudy Notes [^ history version]

@(Notes)[Hibernate, notes]

> VICTORY LOVES PREPARATION

[^ history version]: 
> �汾��Ϣ��
> 2017��04��05�� ����04:39:15
> 2017��03��24�� ����10:49:56
> 2017��03��20�� ����08:23:42

[^ Hibernate Reference]: [Hibernate.org][1]��[�ٶȰٿ�][2]

[TOC]

***
## ����˼ά��ͼ
- **`SUMMARY��`**

> *ע��*
> - 

<br>
## һ�����
- **`SUMMARY��` `Hibernate`��һ����Դ�Ķ����ϵӳ���ܡ�**
- `Hibernate`��һ������Դ����Ķ����ϵӳ���ܣ�����`JDBC`�����˷ǳ��������Ķ����װ��ʹ��`Java`����Ա��������������ʹ�ö�����˼ά���������ݿ⣻
- `Hibernate`����Ӧ�����κ�ʹ��`JDBC`�ĳ��ϣ��ȿ�����`Java`�Ŀͻ��˳���ʹ�ã�Ҳ������`Servlet/JSP`��`Web`Ӧ����ʹ�ã�
- ��߸���������ǣ�`Hibernate`������Ӧ��`EJB`��`J2EE`�ܹ���ȡ��`CMP`��������ݳ־û������Ρ�

<br>
## ����ʵ�� [^ Demo  Reference]
[^ Demo  Reference]: [Coding.net][10]

<br>
## ����What and Why O/R Mapping
- **`SUMMARY��` Ϊ�˼����ݿ�������������ر�̡�**
- `Object` `and` `Relational` `Mapping(ORM)`������`Bean` `Entity`����ϵ����ϵ���ݿ⣩ӳ�䣻
- `JDBC`�������ݿ�ܷ�����ͨ��`ORM`���������򻯲�����
- `SQL`��д�����������ģ�
- `O/R` `Mapping`��Խ���ݿ�ƽ̨�����Ե�ʹ�á�

<br>
## �ġ�����ORM���
- `Hibernate`
- `Toplink`
- `JDO`
- `iBatis`
- `MyBatis`
- `xorm`

> *ע��*
> - `JPA`��
>  - `Java` `Persistence` `API`
>  - ��һ�ֳ־û�������׼��

<br>
## �塢���Ľӿں���
### 5.1 Session
### 5.2 SessionFactory
### 5.3 Transaction
### 5.4 Query
### 5.5 Criteria
### 5.6 Configuration

<br>
## ����ʵ����������״̬ [^ Hibernate Three Status Reference]
[^ Hibernate Three Status Reference]: [CSDN][3]��[CSDN][11]

- **`SUMMARY��` ˲ʱ״̬���־�״̬���ѹ�״̬��**
- *`img.`ʵ����������״̬��*<br>![][6]
- *`img.`ʵ�����֮�������*<br>![][7]
<br>
- �������ڴ�����ݿ�����ݿ�֮���һ��ӳ�伯�ϣ�������Զ������ݿ�������ݵ�ͬ����

### 6.1 ˲ʱ״̬��Transient��
- **`SUMMARY��`��`session`�����к����ݿ��ж�û�еĶ���*`eg.`*�ոձ�����������״̬��**
- �ոձ�����������״̬��

### 6.2 �־�״̬��Persistent��
- **`SUMMARY��`��`session`�����к����ݿ��ж��еĶ���**
- ��`Session`����ʱ��״̬���ܹ������ݿ�ͬ����ͬ��������ʵ�������޸��ˣ���Ȼ�������`save`��`update`�ȷ�������������`commit`��ʱ��ᵼ�����ݿ������ݵı仯����

	> *ע��*
	> - ��Ϊ��`session`�������м�¼�����Դ�ʱ״̬�ĸı�����ջ����ʱ�򶼻�ͬ�������ݿ⡣

### 6.3 �й�״̬��Detached��
- **`SUMMARY��`�����ݿ����м�¼��������`session`������û�еĶ���**
- ��ȥ��`Session`������������`Session`�ѹرգ���Ȼ���������ݿ��Ӧ�ļ�¼�����ǲ���ͬ����

	> *ע��*
	> - �йܶ������Ϻ�˲ʱ������ͬ��ֻ�Ǳ�˲ʱ�������һ�����ݿ��¼��

### 6.4 ת������
- *`img.`ת��ͼ���£�*<br><br>![][4]
- `transient`״̬��
	- ������`new`һ�������ʱ�򣬾���`transient`״̬�����������ص��������ݿ���û����֮��Ӧ�ļ�¼��Ҳû�����뵽`Session`�Ĺ�����ʱ���Ա��������մ������
- `persistent`״̬��
	- �����Ƕ�`transient`�������`save()`��`saveOrUpdate()`֮��������`persistent`״̬�������ݿ�������֮��Ӧ�ļ�¼��������`session`�Ĺ���`session`��һ��������ţ�`session`���Ļ���ͨ��Ҳ��һ�����档��`save()`��ʱ���ŵ�������һ�ݣ��������Ϊ`session`���и�`map`������ŵ���`map`���棬�ж����������ˣ��������ջ����ǻ��ղ������ġ�����`delete()`������
- `detached`״̬��
	- ��`persistent`���󾭹�`evict()`��`close()`��`clear()`����������������̬Ҳ����`detached`״̬��`detached`����֮�ǽ�������ļ�¼�����ˣ����ݿ���ļ�¼��û����û������`session`������ʱ���Ա��������յ���û�ж���������������Ϊ�����ݿ��������ü�¼û�������Կ��Ե���`update()`��`saveOrUpdate()`��`lock()`�ȷ�����������֮���ֻص�`persistent`״̬��

<br>
## �ߡ�ID���ɲ��� [^ ID Generate Strategy Reference]
[^ ID Generate Strategy Reference]: [����԰][12]

- **`SUMMARY��`����`Increment`��`Identity`��`Sequence`��`UUID`��`Native`�Ȳ��ԡ�**

### 7.1 Increment
- **`SUMMARY��`�����ݿ���ȡ��������ֵ��Ȼ���`1`�����뵽���ݿ��С�**
- `int`���ͣ�����һ����¼����һ����Ⱥ���������ʹ�ã�
- ��`Hibernate`�����ݿ���ȡ�����������ֵ��ÿ��`session`ֻȡ`1`�Σ����Ը�ֵΪ������ÿ������Ϊ`1`�����ڴ��������������������ڵײ�����ݿ⣬��˿��Կ����ݿ⡣

### 7.2 Identity
- **`SUMMARY��`�������ݿ�Ĺ��ܣ��������ݵ�ʱ�����ݿ��Զ���`1`��**
- `int`���ͣ����ݿ⣨���֣��Զ������ֶΡ�

### 7.3 Sequence
- **`SUMMARY��`��Ҫ֧��`sequence`���Ƶ����ݿ⣬���ݿ�����`ID`��**
- `int`���ͣ����ݿ⣨���֣�����`ID`ֵ��`oracle`���á�

### 7.4 UUID
- **`SUMMARY��`����`UUID`�������ݿ⡣**
- `String`���ͣ�`universal` `unique` `identification`��ȫ����Ψһ����ݱ�ʶ��

	> *ע��*
	> - ��׼��`UUID`��`36`λ��`eg.` `4bf20ae0-7557-44af-937a-1fcfa358c860`������`Hibernate`���м��`-`ȥ���ˣ�����`Hibernate`��`UUID`��`32`λ��

### 7.5 Native
- **`SUMMARY��` `int`���ͣ����ݿ��Զ�ѡ��`identity`��`sequence`����`hilo`�㷨����`ID`��**
- `int`���ͣ����ݿ��Զ�ѡ��`identity`��`sequence`����`hilo`�㷨����`ID`��

<br>
## �ˡ���ϵӳ�� [^ Relational Mapping Reference]
[^ Relational Mapping Reference]: [CSDN][15]

### 8.1 ����
- **`SUMMARY��`�����������`A`���п��Է��ʵ�`B`�����ݣ���`B`���з��ʲ���`A`������ݡ�**
#### 8.1.1 һ��һ
#### 8.1.2 һ�Զ�
#### 8.1.3 ���һ
#### 8.1.4 ��Զ�
### 8.2 ˫��
- **`SUMMARY��`���`A`��`B`˫���������`A`���п��Է���`B`�����ݣ���֮��ɡ�**
#### 8.2.1 һ��һ
#### 8.2.2 һ�Զࡢ���һ
#### 8.2.3 ��Զ�

> *ע��*
> - `inverse`���Կ�������һ�Զ�Ͷ�Զ�˫������ϣ�`inverse`����Ĭ��Ϊ`false`��Ϊ`false`��ʾ���˿���ά����ϵ�����`inverse`Ϊ`true`���򱾶˲���ά����ϵ���ύ����һ��ά����ϵ������ʧЧ������һ�Զ����ӳ������ͨ���ڶ��һ��ά����ϵ����һ��һ��ʧЧ��**�������޸�һ��һ�ˣ��Ͳ����漰�����һ�˵����ݸ���**��*`eg.`����ʵ����*
>
>	``` xml
>	<set name="students"inverse="true">  
>	       <key column="classesid"/>  
>	      <one-to-many class="com.hibernate.Student"/>  
>	</set>  
>	```

<br>
## �š�Hibernate��ѯ
- **`SUMMARY��`����`NativeSQL`��`HQL`��`QBC`��`QBE`�Ȳ�ѯ��䡣**
- ��˳������Խ��ǰ��ΧԽ��

### 9.1 NativeSQL
- **`SUMMARY��`ʹ��`SQL`�����в�ѯ��**
- ���ز�ѯ��䣬���ÿ�ƽ̨���񣬲����õ��Ǻ���Ҫ����Ϊ��������ġ�
- *`eg.`����ʵ����*

	``` java
	/**
	    * NaviteSQL
	    * 
	    * <h4>ע�⣺</h4>
	    * <ul>
	    * <li>��������SQLQuery��������Query��</li>
	    * <li>��ѯ��������Bean Entity�����Ƕ�Ӧ�ı�����</li>
	    * <li>addEntity(Entity.class)ָ�����صľ���Bean Entity.</li>
	    * </ul>
	    * @author Thomas Lee
	    * @version 2017��3��22�� ����10:33:20
	    */
	   public void testNativeSQL() {
	       Session session = sessionFactory.getCurrentSession();
	       String sql = "select * from designer";
	       SQLQuery query = session.createSQLQuery(sql);
	       query.addEntity(Designer.class);
	       @SuppressWarnings("unchecked")
	       Iterator<Designer> iDesigner = query.iterate();
	       while (iDesigner.hasNext()) {
	           Designer designer = iDesigner.next();
	           LOG.info(designer.toString());
	       }
	   }
	```

### 9.2 HQL
- **`SUMMARY��`ʹ��`Hibernate`��ѯ�����в�ѯ������`Dialect`֮��������ò�ͬ�����ݿ⡣**
- `Hibernate`�Ĳ�ѯ���ԣ�����`Dialect`֮��������ò�ͬ�����ݿ⣬�����������ݿ��ѯ������
- *`eg.`����ʵ����*
	
	``` java
	/**
	    * HQL
	    * @author Thomas Lee
	    * @version 2017��3��22�� ����11:35:02
	    */
	   public void testHQL() {
	       String hql = "from Designer";
	       Session session = sessionFactory.getCurrentSession();
	       Query query = session.createQuery(hql);
	       @SuppressWarnings("unchecked")
	       Iterator<Designer> iDesigner = query.iterate();
	       while (iDesigner.hasNext()) {
	           Designer designer = iDesigner.next();
	           LOG.info(designer.toString());
	       }
	   }
	```

### 9.3 QBC
- **`SUMMARY��`ʹ��`Hibernate`��`Criterion`���в�ѯ��**
- `Query` `By` `Criterion`��
- *`eg.`����ʵ����*

	``` java
	/**
	    * QBC��Query By Criterion
	    * @author Thomas Lee
	    * @version 2017��3��22�� ����11:35:40
	    */
	   public void testQBC() {
	       Session session = sessionFactory.getCurrentSession();
	       Criteria criteria = session.createCriteria(Designer.class).add(Restrictions.gt("id", 2));
	       @SuppressWarnings("unchecked")
	       List<Designer> designers = criteria.list();
	       Iterator<Designer> iDesigner = designers.iterator();
	       while (iDesigner.hasNext()) {
	           Designer designer = iDesigner.next();
	           LOG.info(designer.toString());
	       }
	   }
	```

### 9.4 QBE
- **`SUMMARY��`ʹ��`Hibernate`��`Criterion`�е�`Example`���в�ѯ��**
- `Query` `By` `Example`��`QBC`��һ���֡�
- *`eg.`����ʵ����*

	``` java
	/**
	    * QBE��Query By Example
	    * @author Thomas Lee
	    * @version 2017��3��22�� ����11:36:18
	    */
	   public void testQBE() {
	       Session session = sessionFactory.getCurrentSession();
	
	       Designer designer = new Designer();
	       designer.setAge(10);
	       Example example = Example.create(designer);
	
	       Criteria criteria = session.createCriteria(Designer.class).add(Restrictions.gt("id", 2)).add(Restrictions.lt("id", 5)).add(example);
	       @SuppressWarnings("unchecked")
	       List<Designer> designers = criteria.list();
	       Iterator<Designer> iDesigner = designers.iterator();
	       while (iDesigner.hasNext()) {
	           LOG.info(iDesigner.next().toString());
	       }
	
	   }
	```

> *ע��*
> - ����ע�������������ע�ͣ�
> - ʹ��`HQL`��ʱ��Ҫʹ�õ�����ϵ��ǿ�ҽ��飩��`eg.` `Group.user.name`��

<br>
## ʮ��Hibernate����
- **`SUMMARY��` `Hibernate`���棬�ӿ����ѯ�ٶȡ�**
- Ϊ�˰ѱ���Ӧ�ô���Ӳ���ϵ���Ϣ�����ڴ��������ٵ�һ���ڴ�ռ䣻
- `Hibernate`��һ���־ò��ܣ����������������ݿ⣻
- Ϊ�˽���Ӧ�ó������������Դ���ʵ�Ƶ�Σ��Ӷ����Ӧ�ó�����������ܣ�
- �����ڵ������Ƕ���������Դ�е����ݵĸ��ƣ�Ӧ�ó���������ʱ�ӻ����д���ݣ����ض���ʱ�̻��¼���ͬ���������������Դ�����ݡ�

### 10.1 һ������
- **`SUMMARY��` `Session`����Ļ��档**
- ����`session`����Ļ��棻
- һ������Ĭ���ṩ������Ҫ�������ļ��н������á�

### 10.2 ��������
- **`SUMMARY��` `SessionFactory`����Ļ��档**
- `sessionFactory`����Ļ��棬��Խ`session`���ڣ���������`session`����Ļ���ļ��ϣ�Ϊ��ʹ`session`���𻺴�֮���ܹ������棻
- ����������Ҫ��`hibernate.cfg.xml`�н������ã������Լ������ĸ����棬��ѯ�ĵ�����
- **ʲô���������ʺϴ�ŵ��ڶ��������У�**
	- ���ٱ��޸ĵ����ݣ�
	- ���Ǻ���Ҫ�����ݣ��������ż�����������ݣ�
	- ���ᱻ�������ʵ����ݣ�
	- �������ݡ�
- **���ʺϴ�ŵ��ڶ�����������ݣ�**
	- �������޸ĵ����ݣ�
	- ���Բ�������ֲ������ʵ����ݣ���������ݣ����Բ�������ֲ�����
	- ������Ӧ�ù�������ݡ�
- ��������Ҫʹ��`@Cache`ע���`Bean` `Entity`���б�ע��
- `load`��`iterate`Ĭ��ʹ�ö������棨������ӺͲ�ѯ�Ȳ�������
- `list`Ĭ��ʹ�ö����������������ݣ���ѯ��ʱ��ʹ�ã�
- `query`ʹ�ò��˶�������
	- ��Ϊÿ�εĲ�ѯ�����ܿ��ܲ�ͬ��������û��̫����ô�����Ҫ�򿪲�ѯ���棨�������棩��

### 10.4 ��ѯ���棨�������棩
- **`SUMMARY��` ��ѯ������Ҫ������ͨ���Խ������ʵ������`ID`��**
	- **��ѯ��ͨ���Ե�ʱ�򣬻��ȵ���ѯ������ȡ�����û�У����ѯ���ݿ⣻**
	- **��ѯʵ���ʱ�򣬻��ȵ���ѯ������ȡ`ID`������У������`ID`�����棨һ�� / ��������ȡʵ�壬���������ȡ����ʵ�壬�ٲ�ѯ���ݿ⡣**
- `Hibernate`�Ĳ�ѯ��������Ҫ�����**��ͨ���Խ�����Ļ��棬 ������ʵ�����Ľ����ֻ����`id`**��
- ��һ�����棬��������Ͳ�ѯ���涼�򿪵����������ѯ����ʱ�����ģ�
	- **��ѯ��ͨ����**�����ȵ���ѯ������ȡ�����û�У����ѯ���ݿ⣻
	- **��ѯʵ��**�����ȵ���ѯ������ȡ`id`������У������`id`�����棨һ��/��������ȡʵ�壬���������ȡ����ʵ�壬�ٲ�ѯ���ݿ⡣
- ��Ҫ�Ľ�����Ӳ�̣�
- ��ѯ����ֻ����������ѯ���һ���������ʹ�ã�
- ��Ҫ��`hibernate.cfg.xml`�н������ã��������ڶ������棻
- ����`Query`��`setCacheable(true)`����ָ��ʹ�ò�ѯ���档

### 10.5 �����㷨 [^ Cache Algorithm Reference]
[^ Cache Algorithm Reference]: [Cache Study Notes][13]

- ���������ݱ�����֮���ĸ�������Ҫ���������㷨��

#### 10.5.1 LRU
- `Least` `Recently` `Used`
- �������ʹ�õı�������ʱ��&Ƶ�ʷ��棩

#### 10.5.2 LFU
- `Least` `Frequently` `Used`��Ƶ�ʸߵͣ�
- ���ٱ�ʹ�ã�Ƶ�ʷ��棩

#### 10.5.3 FIFO
- `First` `In` `First` `Out`
- �������ȶ�����˳���棩

> *ע��*
> - ����ο�`Cache` `Study` `Notes`��

<br>
## ʮһ�������Ż�
### 11.1 1+N���⣨���͵������⣩
- **��������**
	- `Hibernate`���û�Ҫȡ�����������Ķ���ı�����ݵ�ʱ���籾���е�`Topic`��`Category`����ʱ�û�����ֻȡ��`Topic`����Ϣ��������Ϊ`Topic`��`Category`��`ManyToOne`�Ĺ�ϵ�����Ե�������ȡ`Topic`��ͬʱȥȡ�˴�����`Category`��Ϣ����������õĲ�ѯ��
- **�������**
	- `ManyToOne`���óټ���
		- **`SUMMARY��` `fetch=FetchType.LAZY`��**
		- *`eg.`����ʵ����*
	``` 
	@ManyToOne(cascade = CascadeType.ALL, fetch=FetchType.LAZY)
	```
		-  `ManyToOne`��`OneToMany`��`ManyToMany`�жԹ���������ӳٵ��ö����־û�����ʱ�������ѹ����Ķ���ʵ�ʶ����������ӳٵ����ʳ־û�����Ĺ�����������ʱ���������ݿⷢ�ɶ�������
	- ��`Entity`�����`@BatchSize(size = int)`ע����������������Լ��涨��������Ĵ���Ԫ��С
		- **`SUMMARY��` ����ɾ�������º������������ݡ�**
		- `Batch` `Size`���趨�����ݿ��������ɾ�����������º����������ʱ������δ�С���е��൱������`Buffer`��������С����˼��
		- `Batch` `Size`Խ�����������������ݿⷢ��`sql`�Ĵ���Խ�٣��ٶȾ�Խ�졣
		- *`eg.`ʵ����*
			- �ǵ�`Batch Size=0`��ʱ��ʹ��`Hibernate`��`Oracle`���ݿ�ɾ��`1`������¼��Ҫ`25`�룬`Batch Size = 50`��ʱ��ɾ��������Ҫ`5`�룡
	- ʹ��`join` `fetch`
		- **`SUMMARY��` �ڹ�������ץȡʱ���������͹���������һ�����������`sql`ͬʱ��ѯ�����������γɶ�β�ѯ�����ṩһ������ץȡ�Ļ��ᣬ�����Ͳ����ڷ��ӳټ��ز�ѯ`parent`�����ʱ�򣬷�����`N`��`child`����Ĳ�ѯ��䡣**
		- ʹ��`session.createCriteria(Entity.class)`����Ϊ`createCriteria()`Ĭ��ʹ�ñ����ӽ������ݵĲ�ѯ����
		- ʹ��`session.createQuery(��from Topic t left join fetch t.category c��)`���Լ�д`join` `fetch`��`sql`���

- http://blog.knowsky.com/186347.htm

<br>
## ʮ�������÷���
- **`SUMMARY��`����ֱ�Ӳ鿴Դ���Ӧ��`JavaDoc`��**
### 12.1 getCurrentSession() �� openSession()
- `getCurrentSession()`
	- ȡ��ǰ�������е�`session`�����û�д���һ���µģ�
- `openSession()`
	- ��������������û���µ�`session`���ᴴ��һ���µ�`session`��

### 12.2 get() �� load()
- `load()`
	- ���ص��Ǵ�����󣬵ȵ������õ���������ݲŷ���sql��䣬**�ӳټ���**��
	- Return the persistent instance of the given entity class with the given identifier, assuming that the instance exists. This method might return a proxied instance that is initialized on-demand, when a non-identifier method is accessed. 
	- You should not use this method to determine if an instance exists (use get() instead). Use this only to retrieve an instance that you assume exists, where non-existence would be an actual error.
- `get()`
	- getֱ�Ӵ����ݿ���أ�**�����ӳټ���**��
	- Return the persistent instance of the given entity class with the given identifier, or null if there is no such persistent instance. (If the instance is already associated with the session, return that instance. This method never returns an uninitialized instance.)

### 12.3 list() �� iterate() [^ list() and iterate() Reference]
[^ list() and iterate() Reference]: [CSDN][14]

- `list()`
	- Return the query results as a List. If the query contains multiple results pre row, the results are returned in an instance of Object[].
- `iterate()`
	- Return the query results as an Iterator. If the query contains multiple results pre row, the results are returned in an instance of Object[].
	-  Entities returned as results are initialized on demand. **The first SQL query returns identifiers only**.

<br>
## ʮ��������ע��
### 13.1 @GeneratedValue
- Ĭ���൱��`native`���ԣ�������`table`�����������ȣ����Բ���`API`����ʿ����`Hibernate`��Ƶ

<br>
## ʮ�ġ�hibernate.cfg.xml�е�hbm2ddl.auto���� [^ hbm2ddl.auto Reference]
[^ hbm2ddl.auto Reference]: [����԰][5]

### 14.1 validate
- **`SUMMARY��`����`hibernate`ʱ����֤�������ݿ��ṹ��**
- ÿ�μ���`hibernate`ʱ����֤�������ݿ��ṹ��ֻ������ݿ��еı���бȽϣ����ᴴ���±����ǻ������ֵ��

### 14.2 update
- **`SUMMARY��`��һ�μ���`hibernate`ʱ����`model`����Զ��������Ľṹ��ǰ�����Ƚ��������ݿ⣩���Ժ����`hibernate`ʱ����`model`���Զ����±�ṹ����ʹ��ṹ�ı��˵����е�����Ȼ���ڲ���ɾ����ǰ���С�**
- ��õ����ԣ���һ�μ���`hibernate`ʱ����`model`����Զ��������Ľṹ��ǰ�����Ƚ��������ݿ⣩���Ժ����`hibernate`ʱ����`model`���Զ����±�ṹ����ʹ��ṹ�ı��˵����е�����Ȼ���ڲ���ɾ����ǰ���У�
- **Ҫע����ǵ����𵽷������󣬱�ṹ�ǲ��ᱻ���Ͻ��������ģ���Ҫ��Ӧ�õ�һ������������Ż�**��

### 14.3 create
- **`SUMMARY��`ÿ�μ���`hibernate`ʱ����ɾ����һ�ε����ɵı�Ȼ��������`model`���������������±�**
- ÿ�μ���`hibernate`ʱ����ɾ����һ�ε����ɵı�Ȼ��������`model`���������������±���������û���κθı�ҲҪ����ִ�У�����ǵ������ݿ�����ݶ�ʧ��һ����Ҫԭ��

### 14.4 create-drop
- **`SUMMARY��`����`hibernate`ʱ����`model`�����ɱ�����`sessionFactory`�رյ�ʱ�򣬱���Զ�ɾ����**
- ÿ�μ���`hibernate`ʱ����`model`�����ɱ�����`sessionFactory`�رյ�ʱ�򣬱���Զ�ɾ����

<br>
## ʮ�塢����
- �����ݿ��ֶκ�`Entity`�е�������ͬ���൱����`get`�����ϼ���`@Basic`ע�⣬��ͬ��ʱ��Ҫ��`get`��������д`@Column(name = �����ݿ��ֶ����ơ�)`����ָ����
- ����`Bean` `Entity`������ӳ�䵽���ݿ���ֶε�ʱ����Լ���`@Transient`ע�͡�
- `Bean` `Entity`��`java.util.Date`���͵�����Ĭ�ϱ��浽���ݿ��Ϊ����+ʱ���룬����ʹ��`@Temporary`ע�ͽ��б��浽���ݿ����ֶε����ڸ�ʽ���á�
- `Annotation`ӳ��λ��
	- Ӧ�÷���`get`�����ϣ��������`field`�л��ƻ�`field`��˽�л���ͨ��`Java`������ƣ���
- `Hiernate`������뼶��
	- ����`hibernate.cfg.xml`�е�����`hibernate.connection.isolation` `=` `2` ��`read-committed`��Ĭ��������뼶�𣩡�
	- ���������������뼶������ã�����������ʹ�õ����ݿ������Ĭ�����á�

<br>
## ʮ������ȱ��
- **`SUMMARY��`�����Ķ���/��ϵӳ���������������˸���Ȼ�����������ӽ����־û�`Java`Ӧ���е����ݣ������������ݿ⡣**
- `Hibernate`��������ݿ�Ĺ���ֻ����`XML`�ļ������ü��ɣ����е�`HQL`��������ʹ�õ����ݿ��޹أ���ֲ�Ժܺã�
- `Hibernate`�������Ķ���/��ϵӳ�������������ṩ�˶���״̬����`state management`���Ĺ��ܣ�ʹ�����߲�����Ҫ���ײ����ݿ�ϵͳ��ϸ�ڡ�Ҳ����˵������ڳ�����`JDBC/SQL`�־ò㷽������Ҫ����`SQL`��䣬`Hibernate`�����˸���Ȼ�����������ӽ����־û�`Java`Ӧ���е����ݡ�

<br>
## ʮ�ߡ�����
- **`SUMMARY��`����Ļ�����ԡ��ӳټ��ء������`O/R`ӳ����ƺ�ʹ��������ȡ�**
- �ƶ�����Ļ�����ԣ�
- ����ʹ���ӳټ������ԣ�
- ���ú����`Session`������ƣ�
- ʹ������ץȡ���趨����������������`batch_size`��;
- ���к����`O/R`ӳ����ơ�

[1]: http://hibernate.org/orm/
[2]: http://baike.baidu.com/link?url=er2grHpQchpD-KlvqyMWo-r8kT97qtEj_qltajwuKdhR2uDpq9UleMvwnl-pAYxEeoqlQJ89XZOEKlb92TsILiflkbkAM2R_Frw3u8p0NYi
[3]: http://blog.csdn.net/xiazdong/article/details/7574732
[4]: http://i1.piimg.com/519918/29a5f9f5fdfcedcd.png
[5]: http://www.cnblogs.com/feilong3540717/archive/2011/12/19/2293038.html
[6]: http://i4.buimg.com/567571/b45fe19ca4c98c15.png
[7]: http://i1.piimg.com/567571/d6937f3fd758c5d2.png
[8]: http://blog.csdn.net/fg2006/article/details/6436517
[9]: http://blog.csdn.net/fg2006/article/details/6436517
[10]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git
[11]: http://blog.csdn.net/fg2006/article/details/6436517
[12]: http://www.cnblogs.com/hoobey/p/5508992.html
[13]: https://coding.net/u/Recognizer/p/baidu-cloud-career/git/tree/develop/%E3%80%90%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91/%E3%80%90%E7%9F%A5%E8%AF%86%E6%80%BB%E7%BB%93%E3%80%91/books-and-notes/Notes/Cache%20Study%20Notes
[14]: http://blog.csdn.net/u013125680/article/details/40862693
[15]: http://blog.csdn.net/huangaigang6688/article/details/7761310