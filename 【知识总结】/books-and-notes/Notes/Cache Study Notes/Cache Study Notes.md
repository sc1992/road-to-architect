# Cache Study Notes [^historyversion]

@(Notes)[Cache��Notes]

>VICTORY LOVES PREPARATION.

[^historyversion]:
> �汾��Ϣ��
> 2017��03��24�� ����03:27:07
> 2017��01��12�� ����01:40:25

[TOC]

***
##����˼ά��ͼ

<br>
## һ��Ϊʲô��Ҫ���棿
- **`SUMMARY:`Ϊ�˻����ȵ����ݣ����ٽ���ʱ�䡢���������������ϵͳ���ܡ�**
- **һ������£�һ����վ������һ��Ӧ�ã�����һ����ʽ�ǣ����������Ӧ�÷�������Ӧ�÷�������һ�Ѽ�������������ݿ⣬���ݿ��յ����������һ�Ѽ��������ݷ��ظ�Ӧ�÷�������Ӧ�÷���������һ�Ѽ��������ݷ��ظ�������������һ����׼���̣�**
- **�����м���ܴ�̶��ϵ���;��Ϊ�˻����ȵ����ݣ����ϵͳ����**��
- �������Ż��������ռ�����������Խ��Խ�࣬���ϵ���Ϣ��ҲԽ��Խ�࣬��������Խ��Խ�������£����ǵ�Ӧ����Ҫ֧�ŵĲ�������Խ��Խ�ࡣȻ�����ǵ�Ӧ�÷����������ݿ�����������ļ���ҲԽ��Խ�࣬�����������ǵ�Ӧ�÷�������Դ�����޵ģ����ݿ�ÿ���ӽ�������Ĵ���Ҳ�����޵ģ�
- ����������޵���Դ���ṩ�����ܴ���������أ�һ���취��
	- ���ټ������������������̣���������`IO`����Ӳ��`IO`����
- ��ʱ�򻺴�Ϳ��Դ�չ�ֽ��ˡ�����Ļ���ԭ����Ǵ�����ͼ�������ı�׼���̣��������׼�����У��κ�һ�����ڶ����Ա��жϡ�������Դӻ�����ȡ������ֱ�ӷ��ء�����������ʡ��ʱ�䣬�������Ӧ�ٶȣ�����Ҳ��ʡ��Ӳ����Դ���������������޵�Ӳ����Դ�����������û���

	> *ע��*
	> - **����������ķ��������ӷ�������Դ�����ټ������������������̣��������������Ҳ��Ӽ����˼��������ȡ�**

<br>
## �����������������ʲô�ط���
- **`SUMMARY:`��������������������һ���ڣ����������������`APP`�����ݿ⣨�ڴ����ݿ⣩�ȡ�**
- *`FOLLOW.`������������������κ�һ�����ڶ��ǻ���������õĵط���*
	- **��һ������**���������������ݴ���������ϣ���ô���û���˵�ٶ������ģ���Ϊ���ʱ�����������������
	- **�ڶ�������**���������`APP`֮�䣬��������������ط�����ô�����`APP`��˵��͸���ġ�������������д�ŵ���������ҳ�棻
	- **�������ڵ�**��`APP`�б�����м�����Σ���ô����Ҳ���Է��ڲ�ͬ�Ĳ���ϣ���һ������������߳����Ƚϸ��ӵĲ��֡�ѡ�񻺴�ʱ��Ҫ������
	- **���ĸ�����**�����ݿ���Ҳ�����л��棬����˵`MySQL`��`QueryCache`��
- ��ôҲ����˵�������������̵��κ�һ�㣬���Ƕ����Լӻ��档���������е����ݶ����ԷŽ�������𡣵�Ȼ���ǣ���Ҫ�Ž����������������һЩ�����ģ�Ҫ������ж������Ƿ���Ա����棬���Ա���������ͱ���Ҫ�����ݵı仯�������֡�
- ��������Щ�仯����?
	- ��򵥵ľ������֣���Ͳ��䡣���Ƕ�֪��������仯�����ݲ���Ҫÿ�ζ����м��㡣�������ѵ����е�������������������仯���仯��������������⡣Ҳ����˵���ǰ����ݷ�Ϊ��Ͳ��������ǲ��Եģ���ô���������ټ�һ��������ʱ�䡣��ô���ǾͿ��԰����������ܽ�Ϊһ��ʱ���ڱ���߲��䡣��ô��������������������ǾͿ����ں��ʵ�λ�úͺ��ʵĻ��������л�������ݡ�
-  �������������÷�Χ������Ӧ�á���Ⱥ��
	-  ���񼶻�����`session`����Ч��
	-  Ӧ�ü������ڶ��`session`�пɹ�����˾�����ֻ��`read` `only`��Ӧ����ʹ�ã�
	-  ��Ⱥ�������Ҫ�ڸ����ڵ��Ͻ��л���ͬ����

	> *ע��*
	> - �������������ݶ����Խ��л���ģ�����Ҫ������Щ�����һ��ʱ���ڲ���ľ������õ���������Ȼû�б������õ�������ҵ�����󣩵����ݡ�

<br>
## ������������Щ���ԣ�
- **`SUMMARY:`�����������ʺ����Ԫ�ص����ԡ�**
- ���������ĽǶ��������������һ��������ô�Ƕ��󣬱�Ȼ�����ԡ�
- *`FOLLOW.`��ô����������̽��һ�»�������Щ���ԣ�*

### 3.1 ������
- **`SUMMARY:`��������ָ���󻺴�����ͻ��淵����ȷ��������ı�����**
- ��������ָ���󻺴�����ͻ��淵����ȷ��������ı�����
- ����Խ�ߣ���֤�������ʹ����Խ�ߣ�
- �����������ǻ����е�һ���ǳ���Ҫ�����⣬���Ƕ�ϣ���Լ�������������ܴﵽ`100%`��������������ԸΥ�����һ����������Ǻ���������Ч�Ե���Ҫָ�ꡣ

### 3.2 ���Ԫ��
- **`SUMMARY:`���Ԫ����ָ�����п��Դ�ŵ�Ԫ���������ֵ��**
- �����п��Դ�ŵ����Ԫ�ص�������һ��������Ԫ�������������ֵ����ô�������û�����ղ��ԣ����ݲ�ͬ�ĳ���������������Ԫ��ֵ��������һ���̶�����߻���������ʡ��Ӷ�����Ч��ʱ�򻺴档

<br>
## �ġ��������
- ��Ӳ�������������޷Ǿ������֣��ڴ��Ӳ�̣���ӦӦ�ò�ĳ����������ÿ��ǼĴ��������⣩�������������ǲ����Ӳ���������֣�һ��Ļ��ַ����ǴӼ����ϻ��֣����Էֳɼ��֣��ڴ桢Ӳ���ļ������ݿ⡣

### 4.1 �Ӽ����ϻ���
#### 4.1.1 �ڴ�
- ����������ڴ���������ѡ���κγ���ֱ�Ӳ����ڴ涼�Ȳ���Ӳ��Ҫ��Ķ࣬��������������Ҫ���ǵ�崻������⣬��Ϊ�����ڴ��е��������ǳ�֮Ϊû�г־û������ݣ����Ӳ����û�б��ݣ�崻�֮�󣬺��ѻ����޷��ָ���

#### 4.1.2 Ӳ��
- һ����˵���ܶ໺���ܻ���ʹ���ڴ��Ӳ�̣�������ڴ����Ŀռ�������֮�󣬻����û�ѡ�����Ҫ�˳��ڴ�ռ�����ݳ־û���Ӳ�̡���ȻҲѡ��ֱ�Ӱ����ݷ�һ�ݵ�Ӳ�̣��ڴ���һ�ݣ�Ӳ����һ�ݣ�崻�Ҳ���£���Ҳ�������Ļ�����ֱ�Ӱ����ݷŵ�Ӳ���ϡ�


#### 4.1.3 ���ݿ�
- ˵�����ݿ⣬�����е��˻��룬֮ǰ���ǽ���Ҫ�������ݿ��ѯ�Ĵ������������ݿ�����ѹ����������ô�������ݿ���Ϊ����Ľ������ء�������Ϊ���ݿ��ֺܶ������ͣ�����`BerkleyDB`���������ݿⲻ֧��`sql`��䣬û��`sql`���棬ֻ��`key`��`value`�Ĵ洢�ṹ�������ٶȷǳ��Ŀ죬�ڵ���һ���pc�ϣ�ÿ����ʮ��w�β�ѯ����û������ģ���Ȼ����Ǹ���ҵ�������������ģ���������ʵ������ڷֲ����Ǿ��ȵģ��ǿɲ��ܱ�֤����ٶ��ˣ���

### 4.2 ����Ӧ����ϳ̶Ƚ��л���
#### 4.2.1 Local Cache
- **`SUMMARY:` `Localcache`��ָ������Ӧ��֮�ڵĻ��������**
- `Localcache`��ָ������Ӧ��֮�еĻ��������
- ���͵�`localcache`��`ehcache`��`oscache`��
- `Localcache`�����ŵ���Ӧ�ú�`cache`��ʱ������ͬһ�������ڲ������󻺴�ǳ����٣���ȫ����Ҫ���翪���ȡ����Ե�Ӧ�ã�����Ҫ��Ⱥ���߼�Ⱥ�����`cachenode`����Ҫ�໥֪ͨ�������ʹ��`localcache`�ȽϺ��ʡ���Ҳ��`java`��`ehcache`��`oscache`��ô���е�ԭ�򡣵���`Localcache`����һ����ȱ��ģ�һ�����ֻ����ܣ�����`java`�е�`ehcache`����`oscache`������`localcache`��Ҳ���Ǹ���Ӧ�ó����ߵģ����**Ӧ�ó����޷�ֱ�ӹ�����**��Ӧ�ü�Ⱥ��������������������ԣ���ȻҲ�еĻ�������ṩ�˼�Ⱥ�ڵ��໥֪ͨ������µĹ��ܣ�������������ǹ㲥�������ǻ�·���£��ڻ������Ƶ��������»ᵼ������`io`�����ǳ������ص�ʱ���Ӱ��Ӧ�õ��������С���������������������ϴ�������ʹ��`localcache`��ζ��ÿ��Ӧ�ö���һ����ô��û��棬�ž����Ƕ��ڴ���˷ѡ�`Local Cache`�����ŵ���Ӧ�ú�`cache`��ʱ������ͬһ�������ڲ������󻺴�ǳ����٣���ȫ����Ҫ���翪���ȡ����Ե�Ӧ�ã�����Ҫ��Ⱥ���߼�Ⱥ�����`cachenode`����Ҫ�໥֪ͨ�������ʹ��`localcache`�ȽϺ��ʡ���Ҳ��`java`��`ehcache`��`oscache`��ô���е�ԭ��

#### 4.2.2 Remote Cache
- **`SUMMARY:` `Remote Cache`ָ��Ӧ�ý����Ӧ��֮��Ļ��������**
- `Remote Cache`ָ��Ӧ�ý�����Ӧ��֮��Ļ��������
- `Remote Cache`�д���������`memcached`��
- ��Ⱥ���߷ֲ�ʽ������¸���Ӧ�ö����Թ���`memcached`�е����ݣ���ЩӦ�ö�ͨ��`socket`�ͻ���`tcp/ip`Э���ϲ��`memcached`Э��ֱ�����ӵ�`memcached`����һ��`app`������`memcached`�е�ֵ�����е�Ӧ�ö����õ����µ�ֵ����Ȼ���ʱ����˺ܶ��������ϵĿ����������������ַ���Ҫ��`localcache`�㲥��·����`cache`�ڵ�Ҫ�ձ�Ķ࣬��������Ҳ�Ⱥ��߸ߡ���������ֻ��Ҫ����һ�ݣ�����Ҳ������ڴ��ʹ���ʡ�

> *ע��*
> - ͨ�����Ϸ������Կ�����������`Local Cache`������`Remote Cache`�ڻ����������Լ���һϯ֮�أ�������ѡ�����ʹ�û���ʱһ��Ҫ���ݻ�������������ǵ�ҵ�񳡾�׼ȷ�ж�ʹ�ú��ֻ��档�������ܳ�ַ��ӻ���Ĺ��ܡ������ʹ���Ǽܹ�ʦ�ıر����ܣ��õļܹ�ʦ�ܹ��������ݵ����ͣ�ҵ��ĳ�����׼ȷ���жϳ�ʹ�ú������͵Ļ��棬�������ʹ���������͵Ļ��档�ڻ����������Ҳû��������Ŀǰ��û��һ�ֻ�����Խ���κε�ҵ�񳡾������������ͣ�������ּ��������ˣ��Ǽܹ�ʦ���ָ���ֵǮ�ˡ�

<br>
## �塢����������
### 5.1 EhCache [^ ehcache reference]
[^ ehcache reference]: [�ٶȰٿ�][1]��[ehcache.org][5]

- **`SUMMARY:` `EhCache`��һ�����١��򵥡�ʹ�ù㷺�Ŀ�Դ�ֲ�ʽ�����ܡ�**

#### 5.1.1 ���
- Ehcache is an open source, standards-based cache that boosts performance, offloads your database, and simplifies scalability. It's the most widely-used Java-based cache because it's robust, proven, full-featured, and integrates with other popular libraries and frameworks. Ehcache scales from in-process caching, all the way to mixed in-process/out-of-process deployments with terabyte-sized caches.
- `EhCache`��һ����`Java`�Ľ����ڻ����ܣ����п��١����ɵ��ص㣬��`Hibernate`��Ĭ�ϵ�`CacheProvider`��
- `Ehcache`��һ�ֹ㷺ʹ�õĿ�Դ`Java`�ֲ�ʽ���档

#### 5.1.2 �ص�
- ���٣�
- �򵥣�
- ���ֻ�����ԣ�
- ���ֻ�����ʣ�
	- �ڴ�ʹ��̣�������赣���������⣻
- �������ݻ�������������Ĺ�����д����̣�
- **����ͨ��`RMI`���ɲ���`API`�ȷ�ʽ���зֲ�ʽ���棻**
- ���л���ͻ���������������ӿڣ�
- ֧�ֶ໺�������ʵ�����Լ�һ��ʵ���Ķ����������
- �ṩ`Hibernate`�Ļ���ʵ�֣�
- ���Զ�ҳ�桢�������ݽ��л��棻
- ͬʱ֧�ּ�Ⱥ/�ֲ�ʽ���棻
- �ṩ����`Filter`��`Cache`����`Filter`���Ի�����Ӧ�����ݲ�����`Gzip`ѹ�������Ӧ�ٶȡ�

#### 5.1.3 ʵ��
*`EG.` ʵ����������:*
- `echcache.xml`
	``` xml
	<?xml version="1.0" encoding="UTF-8"?>
	<!-- @reference echcache-failsafe.xml -->
	<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
		xsi:noNamespaceSchemaLocation="http://ehcache.org/ehcache.xsd">
		<!--  
			name��Cache��Ψһ��ʶ  
			maxElementsInMemory���ڴ�����󻺴������  
			maxElementsOnDisk����������󻺴������������0��ʾ�����  
			eternal��Element�Ƿ�������Ч��һ�������ˣ�timeout����������  
			overflowToDisk�����ô����ԣ����ڴ���Element�����ﵽmaxElementsInMemoryʱ��Ehcache����Elementд��������  
			timeToIdleSeconds������Element��ʧЧǰ����������ʱ�䡣����element����������Чʱʹ�ã���ѡ���ԣ�Ĭ��ֵ��0��Ҳ���ǿ�����ʱ�������  
			timeToLiveSeconds������Element��ʧЧǰ������ʱ�䡣���ʱ����ڴ���ʱ���ʧЧʱ��֮�䡣����element����������Чʱʹ�ã�Ĭ����0.��Ҳ����element���ʱ�������   
			diskPersistent���Ƿ񻺴����������������  
			diskExpiryThreadIntervalSeconds������ʧЧ�߳�����ʱ������Ĭ����120��  
			diskSpoolBufferSizeMB�������������DiskStore�����̻��棩�Ļ�������С��Ĭ����30MB��ÿ��Cache��Ӧ�����Լ���һ��������  
			memoryStoreEvictionPolicy�����ﵽmaxElementsInMemory����ʱ��Ehcache�������ָ���Ĳ���ȥ�����ڴ档Ĭ�ϲ�����LRU���������ʹ�ã������������ΪFIFO���Ƚ��ȳ�������LFU������ʹ�ã�
	
			<defaultCache overflowToDisk="true" eternal="false"/>  
			<diskStore path="E:/ehcache" />
	
			<cache name="zzugxy" overflowToDisk="true" eternal="false"  
			timeToIdleSeconds="300" timeToLiveSeconds="600" maxElementsInMemory="1000"  
			maxElementsOnDisk="10" diskPersistent="true" diskExpiryThreadIntervalSeconds="300"  
			diskSpoolBufferSizeMB="100" memoryStoreEvictionPolicy="LRU" />  
			-->
			
		<diskStore path="java.io.tmpdir"/>
	 	
		<defaultCache 
			maxElementsInMemory="10000" 
			eternal="false" 
			timeToIdleSeconds="30" 
			timeToLiveSeconds="30" 
			overflowToDisk="false" />
			
		<cache name="sample" 
			maxElementsInMemory="10000" 
			eternal="false" 
			timeToIdleSeconds="30" 
			timeToLiveSeconds="30" 
			overflowToDisk="false" />
		<!-- 
			�����Զ��建�棨���ڻ���ҳ�棩
			maxElementsInMemory������������������������
			eternal�������ж����Ƿ�Ϊ���õģ�����ǣ���ʱ���ý������ԣ�����Ӳ����ڡ�
			timeToIdleSeconds���������ݵĶۻ�ʱ�䣬Ҳ������һ��Ԫ������֮ǰ�����η���ʱ������ʱ����ֵ����ֻ����Ԫ�ز�������פ��ʱ��Ч�������ֵ�� 0 ����ζ��Ԫ�ؿ���ͣ�������ʱ�䡣
			timeToLiveSeconds���������ݵ�����ʱ�䣬Ҳ����һ��Ԫ�شӹ��������������ʱ����ֵ����ֻ����Ԫ�ز�������פ��ʱ��Ч�������ֵ��0����ζ��Ԫ�ؿ���ͣ�������ʱ�䡣
			overflowToDisk���ڴ治��ʱ���Ƿ����ô��̻��档
			memoryStoreEvictionPolicy����������֮�����̭�㷨��
			-->
		<cache name="SimplePageCachingFilter" 
			maxElementsInMemory="10000" 
			eternal="false"
			overflowToDisk="false" 
			timeToIdleSeconds="900" 
			timeToLiveSeconds="1800"
			memoryStoreEvictionPolicy="LFU" />
	</ehcache>
	```

- ������
	``` java
	CacheManager cacheManager = CacheManager.create();	
	Cache cache = cacheManager.getCache("sample");
	Element element = new Element("name", "Thomas");
	cache.put(element);
	cache.get("name");
	// Rst is: [ key = name, value=Thomas, version=1, hitCount=1, CreationTime = 1484538236648, LastAccessTime = 1484538241090 ]
	```

> *ע��*
> - EH`CAC`HE�����ģ�
> - ��`Spring`�ļ��ɱȽϼ򵥣���Ҫ�Ļ���Ѹ�ټ��ɡ�

### 5.2 Memcached [^ Memcached Reference]
[^ Memcached Reference]: [�ٶȰٿ�][2]��[memcached.org][4]

#### 5.2.1 ���
- **`SUMMARY:` `Memcached`��һ�������ܵķֲ�ʽ���󻺴�ϵͳ��**
- Free & open source, high-performance, distributed memory object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load.
- Memcached is an in-memory key-value store for small chunks of arbitrary data (strings, objects) from results of database calls, API calls, or page rendering.
- Memcached is simple yet powerful. Its simple design promotes quick deployment, ease of development, and solves many problems facing large data caches. Its API is available for most popular languages.
- `Memcached`��һ�������ܵķֲ�ʽ�ڴ���󻺴�ϵͳ�����ڶ�̬`Web`Ӧ���Լ������ݿ⸺�ء���ͨ�����ڴ��л������ݺͶ��������ٶ�ȡ���ݿ�Ĵ������Ӷ���߶�̬�����ݿ�������վ���ٶȡ�`Memcached`����һ���洢��/ֵ�Ե�`hashmap`�����ػ����̣�`daemon `������`C`д�ģ����ǿͻ��˿������κ���������д����ͨ��`memcached`Э�����ػ�����ͨ�š�
#### 5.2.2 �ص�
- ͨ�����ýڵ�ķ�ʽʵ�ֲַ�ʽ��

#### 5.2.3 ʵ��
- *`EG.` ʵ���������£�*


	``` java
	package com.cmc.tmp;
	
	import java.util.Date;
	
	import com.danga.MemCached.MemCachedClient;
	import com.danga.MemCached.SockIOPool;
	
	public class MemcachedTest {
	
	    protected static MemCachedClient memcachedClient = new MemCachedClient();
	    protected static MemcachedTest memcachedTest = new MemcachedTest();
	
	    /* �����뻺������������ӳ� */
	    static {
	
	        // �������б����Ȩ��
	        String[] servers = { "127.0.0.1:11211" };
	        Integer[] weights = { 3 };
	
	        // ���÷�������Ϣ
	        SockIOPool pool = SockIOPool.getInstance();
	        pool.setServers(servers);
	        pool.setWeights(weights);
	
	        // ���ó�ʼ����������С������������Լ������ʱ��
	        pool.setInitConn(5);
	        pool.setMinConn(5);
	        pool.setMaxConn(250);
	        pool.setMaxIdle(1000 * 60 * 60 * 6);
	
	        // �������̵߳�˯��ʱ��
	        pool.setMaintSleep(30);
	
	        // ����TCP�Ĳ��������ӳ�ʱ��
	        pool.setNagle(false);
	        pool.setSocketTO(3000);
	        pool.setSocketConnectTO(0);
	
	        // ��ʼ�����ӳ�
	        pool.initialize();
	    }
	
	    private MemcachedTest() {
	    }
	
	    public static MemcachedTest getInstance() {
	        return memcachedTest;
	    }
	
	    public boolean add(String key, Object value) {
	        return memcachedClient.add(key, value);
	    }
	
	    public boolean add(String key, Object value, Date expiry) {
	        return memcachedClient.add(key, value, expiry);
	    }
	
	    public boolean replace(String key, Object value) {
	        return memcachedClient.replace(key, value);
	    }
	
	    public boolean replace(String key, Object value, Date expiry) {
	        return memcachedClient.replace(key, value, expiry);
	    }
	
	    public Object get(String key) {
	        return memcachedClient.get(key);
	    }
	
	    public static void main(String[] args) {
	        MemcachedTest cache = MemcachedTest.getInstance();
	        cache.add("memcache", "sam");
	        System.out.print("memcache  : " + cache.get("memcache"));
	    }
	
	}
	```
	
### 5.3 Redis
#### 5.3.1 ���
- **`SUMMARY:` ��Դ���ݴ洢����ҪӦ�������ݿ⡢�������Ϣ����**
- Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster

#### 5.3.2 �ص�
#### 5.3.3 ʵ�� [^ Redis Demo Reference]
[^ Redis Demo Reference]: [Coding][3]

- `spring-redis.xml`

	``` xml
	<?xml version="1.0" encoding="UTF-8"?>
	<beans xmlns="http://www.springframework.org/schema/beans"
		xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:p="http://www.springframework.org/schema/p"
		xmlns:context="http://www.springframework.org/schema/context"
		xsi:schemaLocation="
		http://www.springframework.org/schema/beans 
		http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
		http://www.springframework.org/schema/context 
		http://www.springframework.org/schema/context/spring-context-3.0.xsd"
		default-lazy-init="true">
		
		<!-- configurate jedis pool. -->
		<bean id="jedisPoolConfig" class="redis.clients.jedis.JedisPoolConfig">
			<property name="testWhileIdle" value="true" />
			<property name="maxTotal" value="${redis.maxTotal}" />
			<property name="maxIdle" value="${redis.maxIdle}" />
		</bean>
	      
		<!-- configurate shard jedis pool. -->  
		<bean id="shardedJedisPool" class="redis.clients.jedis.ShardedJedisPool">
			<constructor-arg index="0" ref="jedisPoolConfig" />
			<constructor-arg>
				<list>
					<bean class="redis.clients.jedis.JedisShardInfo">
						<constructor-arg index="0" value="${redis.host}" />
						<constructor-arg index="1" value="${redis.port}" type="int" />
					</bean>
				</list>
			</constructor-arg>
		</bean>
		
	</beans>
	```
	
- `RedisTest.java`

	``` java
	package com.cmc.cache.redis;
	
	import org.junit.Test;
	import org.junit.runner.RunWith;
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.test.context.ContextConfiguration;
	import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
	
	import redis.clients.jedis.Jedis;
	import redis.clients.jedis.ShardedJedis;
	import redis.clients.jedis.ShardedJedisPool;
	
	@RunWith(SpringJUnit4ClassRunner.class)
	@ContextConfiguration({ "classpath:config/spring-context.xml" })
	public class RedisTest {
	
	    private static final Logger LOG = LoggerFactory.getLogger(RedisTest.class);
	
	    @Autowired
	    private ShardedJedisPool shardedJedisPool;
	
	    /**
	     * ֱ��ͨ��Jedis���л������ 
	     * @author Thomas Lee
	     * @version 2017��3��12�� ����12:36:37
	     */
	    @Test
	    public void testRedis() {
	        Jedis jedis = null;
	        try {
	            jedis = new Jedis("192.168.98.128", 6379);
	            String key = "name";
	            String value = "lcb";
	            jedis.set(key, value);
	            LOG.info(jedis.get(key));
	        } catch (Exception e) {
	            LOG.error(e.getMessage(), e);
	        } finally {
	            if (null != jedis) {
	                jedis.close();
	            }
	        }
	    }
	
	    /**
	     * ͨ��@ContextConfiguration����Spring��Redis���ɲ���
	     * @author Thomas Lee
	     * @version 2017��3��12�� ����12:35:52
	     */
	    @Test
	    public void testSpringRedis() {
	        // ͨ��ClassPathXmlApplicationContext����Spring����
	        // ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("/config/spring-context.xml");
	        // context.start();
	
	        // ShardedJedisPool shardedJedisPool = (ShardedJedisPool) context.getBean("shardedJedisPool");
	        ShardedJedis jedis = shardedJedisPool.getResource();
	        String key = "name";
	        String value = "lcb";
	        jedis.set(key, value);
	        LOG.info(jedis.get(key));
	        // context.stop();
	        // context.close();
	    }
	
	}
	```

### 5.4 ����Ƚ� [^ Cache Comparison Reference]
[^ Cache Comparison Reference]: [CSDN][6]��[����԰][7]

- �д������о���
- ehcache
	- **`SUMMARY:`�Ǵ�Java��д�ģ�ͨ����ͨ��RMI��ʽ�������ڻ���java��������Ŀ��**
	- �Ǵ�Java��д�ģ�ͨ����ͨ��RMI��ʽ�������ڻ���java��������Ŀ
	- ehcacheֱ����jvm������л��棬�ٶȿ죬Ч�ʸߣ����ǻ��湲���鷳����Ⱥ�ֲ�ʽӦ�ò����㡣
	- Ч�ʸߡ�����ǿ��
	- ֻ������java��ϵ��ֻ����java��д�ͻ��ˣ�
	- ����ǵ���Ӧ�û��߶Ի������Ҫ��ܸߵ�Ӧ�ã���ehcache
	- Ehcache���㷺�������������Ŀ�Դ��Ŀ��
- memcache
	- **`SUMMARY:`����������c��д�ģ��ͻ����ж�����Ե�ʵ�֣��ֲ�ʽ���档**
	- memcached����������c��д�ģ��ͻ����ж�����Ե�ʵ��
	- ���ܲ����ƣ������EhcacheЧ�ʵ�
	- ��࣬������֧��socket�����Զ��ܱ�д��ͻ���
- redis
	- **`SUMMARY:`��������ݳ־û�������ͬ������Ҫ����ô�Ƽ���ѡ��Redis��**
	- ��������ݳ־û�������ͬ������Ҫ����ô�Ƽ���ѡ��Redis
	- redis��ͨ��socket���ʵ��������Ч�ʱ�ecache�ͣ������ݿ�Ҫ��ܶ࣬����Ⱥ�ͷֲ�ʽ���淽�㣬�г���ķ�����
	- ����Ǵ���ϵͳ�����ڻ��湲���ֲ�ʽ���𡢻������ݺܴ�ģ�������redis
	- �ḻ����������
	- ������

## ������ղ���
- ���Ԫ������������󻺴����� ���򻺴����û�����ղ��ԡ�

### 6.1 FIFO
- **`SUMMARY:`���Ƚ��������ȱ�����**
- `First In, First Out`�����Ƚ��뻺��������ڻ���ռ䲻������£��������Ԫ������ʱ���ᱻ���������ȥ��

### 6.2 LFU
- **`SUMMARY:`һֱ�������ٱ�ʹ�õ�Ԫ�����ȱ�����**
- `Less Frequently Used`��һֱ�������ٱ�ʹ�õ�Ԫ�ػᱻ������������Ҫ�󻺴��Ԫ����һ��`hit`���ԣ��ڻ���ռ䲻��������£�`hit`ֵ��С�Ľ��ᱻ������档

### 6.3 LRU
- **`SUMMARY:`�뵱ǰʱ����Զ�Ļ������ȱ�����**
- `Least Recently Used`���������ʹ�õģ����ϵ�Ԫ�أ��������Ԫ����һ��ʱ������������������ˣ�������Ҫ�ڳ��ط��������µ�Ԫ�ص�ʱ����ô���л���Ԫ����ʱ����뵱ǰʱ����Զ��Ԫ�ؽ���������档


<br>
## X��ע������

[1]: http://baike.baidu.com/link?url=oNPMIAKfSp2ntqHEfuSwTAQq3ayghltA-Y53tmpKcZWtmo-CDhjc1AUEuEB9WAuUWDzIXxg6Wdt5bnxyfihpVq
[2]: http://baike.baidu.com/link?url=I7Sc2yDk5Q2BTb37_wi-VK1VpIkFWv7s07UALh8V9rI0975ZU4H2nh4U7jFwO7Zv0Nly8AMmQUEI-dS2RG3-UZkg1kj-lUa8426-1iYkw1m
[3]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/
[4]: http://memcached.org/
[5]: http://www.ehcache.org/
[6]: http://blog.csdn.net/chenleixing/article/details/47035367
[7]: http://www.cnblogs.com/tyyf/p/5505269.html