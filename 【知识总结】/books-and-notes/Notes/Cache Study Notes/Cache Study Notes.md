# Cache Study Notes [^historyversion]

@(Notes)[Cache，Notes]

>VICTORY LOVES PREPARATION.

[^historyversion]:
> 版本信息：
> 2017年03月24日 下午03:27:07
> 2017年01月12日 下午01:40:25

[TOC]

***
##〇、思维导图

<br>
## 一、为什么需要缓存？
- **`SUMMARY:`为了缓存热点数据，减少交互时间、提高吞吐量，增加系统性能。**
- **一般情况下，一个网站，或者一个应用，它的一般形式是，浏览器请求应用服务器，应用服务器做一堆计算后再请求数据库，数据库收到请求后再作一堆计算后把数据返回给应用服务器，应用服务器再作一堆计算后把数据返回给浏览器。这个是一个标准流程；**
- **缓存中间件很大程度上的用途是为了缓存热点数据，提高系统性能**。
- 但是随着互连网的普及，上网的人越来越多，网上的信息量也越来越多，在这两个越来越多的情况下，我们的应用需要支撑的并发量就越来越多。然后我们的应用服务器和数据库服务器所做的计算也越来越多，但是往往我们的应用服务器资源是有限的，数据库每秒钟接受请求的次数也是有限的；
- 如何利用有限的资源来提供尽可能大的吞吐量呢？一个办法：
	- 减少计算量，缩短请求流程（减少网络`IO`或者硬盘`IO`）。
- 这时候缓存就可以大展手脚了。缓存的基本原理就是打破上图中所描绘的标准流程，在这个标准流程中，任何一个环节都可以被切断。请求可以从缓存里取到数据直接返回。这样不但节省了时间，提高了响应速度，而且也节省了硬件资源。可以让我们有限的硬件资源来服务更多的用户。

	> *注意*
	> - **提高吞吐量的方法有增加服务器资源、减少计算量和缩短请求流程（缓存在这里，但是也间接减少了计算量）等。**

<br>
## 二、缓存可以作用于什么地方？
- **`SUMMARY:`缓存可以作用于请求的任一环节，常见的有浏览器、`APP`和数据库（内存数据库）等。**
- *`FOLLOW.`理论上来将，请求的任何一个环节都是缓存可以作用的地方：*
	- **第一个环节**，浏览器，如果数据存在浏览器上，那么对用户来说速度是最快的，因为这个时候根本无需网络请求；
	- **第二个环节**，浏览器和`APP`之间，如果缓存加在这个地方，那么缓存对`APP`来说是透明的。而且这个缓存中存放的是完整的页面；
	- **第三个节点**，`APP`中本身就有几个层次，那么缓存也可以放在不同的层次上，这一部分是情况或者场景比较复杂的部分。选择缓存时需要谨慎；
	- **第四个环节**，数据库中也可以有缓存，比如说`MySQL`的`QueryCache`。
- 那么也就是说在整个请求流程的任何一点，我们都可以加缓存。但是是所有的数据都可以放进缓存的吗。当然不是，需要放进缓存的数据总是有一些特征的，要清楚的判断数据是否可以被缓存，可以被怎样缓存就必须要从数据的变化特征下手。
- 数据有哪些变化特征?
	- 最简单的就是两种，变和不变。我们都知道，不会变化的数据不需要每次都进行计算。问题是难道所有的数据理论上来讲都会变化，变化是世界永恒的主题。也就是说我们把数据分为变和不变两种是不对的，那么就让我们再加一个条件：时间。那么我们就可以把数据特征总结为一段时间内变或者不变。那么根据这个数据特征，我们就可以在合适的位置和合适的缓存类型中缓存该数据。
-  缓存有三个作用范围，事务、应用、集群：
	-  事务级缓存在`session`中有效；
	-  应用级缓存在多个`session`中可共享，因此尽可能只在`read` `only`型应用中使用；
	-  集群缓存就需要在各个节点上进行缓存同步。

	> *注意*
	> - 并不是所有数据都可以进行缓存的，我们要缓存那些合理的一段时间内不变的经常被用到（或者虽然没有被经常用到，但是业务需求）的数据。

<br>
## 三、缓存有哪些属性？
- **`SUMMARY:`缓存有命中率和最大元素等属性。**
- 从面向对象的角度来看，缓存就是一个对象，那么是对象，必然有属性。
- *`FOLLOW.`那么下面我们来探讨一下缓存有哪些属性：*

### 3.1 命中率
- **`SUMMARY:`命中率是指请求缓存次数和缓存返回正确结果次数的比例。**
- 命中率是指请求缓存次数和缓存返回正确结果次数的比例；
- 比例越高，就证明缓存的使用率越高；
- 命中率问题是缓存中的一个非常重要的问题，我们都希望自己缓存的命中率能达到`100%`，但是往往事与愿违，而且缓存命中率是衡量缓存有效性的重要指标。

### 3.2 最大元素
- **`SUMMARY:`最大元素是指缓存中可以存放的元素最大数量值。**
- 缓存中可以存放的最大元素得数量，一旦缓存中元素数量超过这个值，那么将会起用缓存清空策略，根据不同的场景合理的设置最大元素值往往可以一定程度上提高缓存的命中率。从而更有效的时候缓存。

<br>
## 四、缓存介质
- 从硬件介质上来将无非就是两种，内存和硬盘（对应应用层的程序来讲不用考虑寄存器等问题）。但是往往我们不会从硬件上来划分，一般的划分方法是从技术上划分，可以分成几种，内存、硬盘文件、数据库。

### 4.1 从技术上划分
#### 4.1.1 内存
- 将缓存放在内存中是最快的选择，任何程序直接操作内存都比操作硬盘要快的多，但是如果你的数据要考虑到宕机的问题，因为放在内存中的数据我们称之为没有持久化的数据，如果硬盘上没有备份，宕机之后，很难或者无法恢复。

#### 4.1.2 硬盘
- 一般来说，很多缓存框架会结合使用内存和硬盘，比如给内存分配的空间有满了之后，会让用户选择把需要退出内存空间的数据持久化到硬盘。当然也选择直接把数据放一份到硬盘（内存中一份，硬盘中一份，宕机也不怕）。也有其他的缓存是直接把数据放到硬盘上。


#### 4.1.3 数据库
- 说到数据库，可能有的人会想，之前不是讲到要减少数据库查询的次数，减少数据库计算的压力吗，现在怎么又用数据库作为缓存的介质了呢。这是因为数据库又很多种类型，比如`BerkleyDB`，这种数据库不支持`sql`语句，没有`sql`引擎，只是`key`和`value`的存储结构，所以速度非常的快，在当代一般的pc上，每秒中十几w次查询都是没有问题的（当然这个是根据业务特征来决定的，如果您访问的数据在分布上是均匀的，那可不能保证这个速度了）。

### 4.2 从与应用耦合程度进行划分
#### 4.2.1 Local Cache
- **`SUMMARY:` `Localcache`是指包含在应用之内的缓存组件。**
- `Localcache`是指包含在应用之中的缓存组件；
- 典型的`localcache`有`ehcache`，`oscache`；
- `Localcache`最大的优点是应用和`cache`的时候是在同一个进程内部，请求缓存非常快速，完全不需要网络开销等。所以单应用，不需要集群或者集群情况下`cachenode`不需要相互通知的情况下使用`localcache`比较合适。这也是`java`中`ehcache`和`oscache`这么流行的原因。但是`Localcache`是有一定的缺点的，一般这种缓存框架（比如`java`中的`ehcache`或者`oscache`）都是`localcache`。也就是跟着应用程序走的，多个**应用程序无法直接共享缓存**，应用集群的情况下这个问题更加明显，当然也有的缓存组件提供了集群节点相互通知缓存更新的功能，但是由于这个是广播，或者是环路更新，在缓存更新频繁的情况下会导致网络`io`开销非常大，严重的时候会影响应用的正常运行。而且如果缓存中数据量较大得情况下使用`localcache`意味着每个应用都有一份这么大得缓存，着绝对是对内存的浪费。`Local Cache`最大的优点是应用和`cache`的时候是在同一个进程内部，请求缓存非常快速，完全不需要网络开销等。所以单应用，不需要集群或者集群情况下`cachenode`不需要相互通知的情况下使用`localcache`比较合适。这也是`java`中`ehcache`和`oscache`这么流行的原因。

#### 4.2.2 Remote Cache
- **`SUMMARY:` `Remote Cache`指和应用解耦，在应用之外的缓存组件。**
- `Remote Cache`指和应用解耦在应用之外的缓存组件；
- `Remote Cache`有大名鼎鼎的`memcached`；
- 集群或者分布式的情况下各个应用都可以共享`memcached`中的数据，这些应用都通过`socket`和基于`tcp/ip`协议上层的`memcached`协议直接连接到`memcached`，有一个`app`更新了`memcached`中的值，所有的应用都能拿到最新的值。虽然这个时候多了很多了网络上的开销，但是往往这种方案要比`localcache`广播或环路更新`cache`节点要普遍的多，而且性能也比后者高。由于数据只需要保存一份，所以也提高了内存的使用率。

> *注意*
> - 通过以上分析可以看出，不管是`Local Cache`，还是`Remote Cache`在缓存领域都有自己的一席之地，所以在选择或者使用缓存时一定要根据缓存的特征和我们的业务场景准确判断使用何种缓存。这样才能充分发挥缓存的功能。缓存的使用是架构师的必备技能，好的架构师能够根据数据的类型，业务的场景来准确的判断出使用何种类型的缓存，并且如何使用这种类型的缓存。在缓存的世界里也没有银弹，目前还没有一种缓存可以解决任何的业务场景或者数据类型，如果这种技术出现了，那架构师就又更不值钱了。

<br>
## 五、常见缓存框架
### 5.1 EhCache [^ ehcache reference]
[^ ehcache reference]: [百度百科][1]、[ehcache.org][5]

- **`SUMMARY:` `EhCache`是一个快速、简单、使用广泛的开源分布式缓存框架。**

#### 5.1.1 简介
- Ehcache is an open source, standards-based cache that boosts performance, offloads your database, and simplifies scalability. It's the most widely-used Java-based cache because it's robust, proven, full-featured, and integrates with other popular libraries and frameworks. Ehcache scales from in-process caching, all the way to mixed in-process/out-of-process deployments with terabyte-sized caches.
- `EhCache`是一个纯`Java`的进程内缓存框架，具有快速、精干等特点，是`Hibernate`中默认的`CacheProvider`；
- `Ehcache`是一种广泛使用的开源`Java`分布式缓存。

#### 5.1.2 特点
- 快速；
- 简单；
- 多种缓存策略；
- 两种缓存介质：
	- 内存和磁盘，因此无需担心容量问题；
- 缓存数据会在虚拟机重启的过程中写入磁盘；
- **可以通过`RMI`、可插入`API`等方式进行分布式缓存；**
- 具有缓存和缓存管理器的侦听接口；
- 支持多缓存管理器实例，以及一个实例的多个缓存区域；
- 提供`Hibernate`的缓存实现；
- 可以对页面、对象、数据进行缓存；
- 同时支持集群/分布式缓存；
- 提供基于`Filter`的`Cache`，该`Filter`可以缓存响应的内容并采用`Gzip`压缩提高响应速度。

#### 5.1.3 实例
*`EG.` 实例代码如下:*
- `echcache.xml`
	``` xml
	<?xml version="1.0" encoding="UTF-8"?>
	<!-- @reference echcache-failsafe.xml -->
	<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"  
		xsi:noNamespaceSchemaLocation="http://ehcache.org/ehcache.xsd">
		<!--  
			name：Cache的唯一标识  
			maxElementsInMemory：内存中最大缓存对象数  
			maxElementsOnDisk：磁盘中最大缓存对象数，若是0表示无穷大  
			eternal：Element是否永久有效，一但设置了，timeout将不起作用  
			overflowToDisk：配置此属性，当内存中Element数量达到maxElementsInMemory时，Ehcache将会Element写到磁盘中  
			timeToIdleSeconds：设置Element在失效前的允许闲置时间。仅当element不是永久有效时使用，可选属性，默认值是0，也就是可闲置时间无穷大  
			timeToLiveSeconds：设置Element在失效前允许存活时间。最大时间介于创建时间和失效时间之间。仅当element不是永久有效时使用，默认是0.，也就是element存活时间无穷大   
			diskPersistent：是否缓存虚拟机重启期数据  
			diskExpiryThreadIntervalSeconds：磁盘失效线程运行时间间隔，默认是120秒  
			diskSpoolBufferSizeMB：这个参数设置DiskStore（磁盘缓存）的缓存区大小。默认是30MB。每个Cache都应该有自己的一个缓冲区  
			memoryStoreEvictionPolicy：当达到maxElementsInMemory限制时，Ehcache将会根据指定的策略去清理内存。默认策略是LRU（最近最少使用）。你可以设置为FIFO（先进先出）或是LFU（较少使用）
	
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
			配置自定义缓存（用于缓存页面）
			maxElementsInMemory：缓存中允许创建的最大对象数
			eternal：缓存中对象是否为永久的，如果是，超时设置将被忽略，对象从不过期。
			timeToIdleSeconds：缓存数据的钝化时间，也就是在一个元素消亡之前，两次访问时间的最大时间间隔值，这只能在元素不是永久驻留时有效，如果该值是 0 就意味着元素可以停顿无穷长的时间。
			timeToLiveSeconds：缓存数据的生存时间，也就是一个元素从构建到消亡的最大时间间隔值，这只能在元素不是永久驻留时有效，如果该值是0就意味着元素可以停顿无穷长的时间。
			overflowToDisk：内存不足时，是否启用磁盘缓存。
			memoryStoreEvictionPolicy：缓存满了之后的淘汰算法。
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

- 测试类
	``` java
	CacheManager cacheManager = CacheManager.create();	
	Cache cache = cacheManager.getCache("sample");
	Element element = new Element("name", "Thomas");
	cache.put(element);
	cache.get("name");
	// Rst is: [ key = name, value=Thomas, version=1, hitCount=1, CreationTime = 1484538236648, LastAccessTime = 1484538241090 ]
	```

> *注意*
> - EH`CAC`HE，回文；
> - 和`Spring`的集成比较简单，需要的话可迅速集成。

### 5.2 Memcached [^ Memcached Reference]
[^ Memcached Reference]: [百度百科][2]、[memcached.org][4]

#### 5.2.1 简介
- **`SUMMARY:` `Memcached`是一个高性能的分布式对象缓存系统。**
- Free & open source, high-performance, distributed memory object caching system, generic in nature, but intended for use in speeding up dynamic web applications by alleviating database load.
- Memcached is an in-memory key-value store for small chunks of arbitrary data (strings, objects) from results of database calls, API calls, or page rendering.
- Memcached is simple yet powerful. Its simple design promotes quick deployment, ease of development, and solves many problems facing large data caches. Its API is available for most popular languages.
- `Memcached`是一个高性能的分布式内存对象缓存系统，用于动态`Web`应用以减轻数据库负载。它通过在内存中缓存数据和对象来减少读取数据库的次数，从而提高动态、数据库驱动网站的速度。`Memcached`基于一个存储键/值对的`hashmap`。其守护进程（`daemon `）是用`C`写的，但是客户端可以用任何语言来编写，并通过`memcached`协议与守护进程通信。
#### 5.2.2 特点
- 通过配置节点的方式实现分布式。

#### 5.2.3 实例
- *`EG.` 实例代码如下：*


	``` java
	package com.cmc.tmp;
	
	import java.util.Date;
	
	import com.danga.MemCached.MemCachedClient;
	import com.danga.MemCached.SockIOPool;
	
	public class MemcachedTest {
	
	    protected static MemCachedClient memcachedClient = new MemCachedClient();
	    protected static MemcachedTest memcachedTest = new MemcachedTest();
	
	    /* 设置与缓存服务器的连接池 */
	    static {
	
	        // 服务器列表和其权重
	        String[] servers = { "127.0.0.1:11211" };
	        Integer[] weights = { 3 };
	
	        // 设置服务器信息
	        SockIOPool pool = SockIOPool.getInstance();
	        pool.setServers(servers);
	        pool.setWeights(weights);
	
	        // 设置初始连接数、最小和最大连接数以及最大处理时间
	        pool.setInitConn(5);
	        pool.setMinConn(5);
	        pool.setMaxConn(250);
	        pool.setMaxIdle(1000 * 60 * 60 * 6);
	
	        // 设置主线程的睡眠时间
	        pool.setMaintSleep(30);
	
	        // 设置TCP的参数，连接超时等
	        pool.setNagle(false);
	        pool.setSocketTO(3000);
	        pool.setSocketConnectTO(0);
	
	        // 初始化连接池
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
#### 5.3.1 简介
- **`SUMMARY:` 开源数据存储，主要应用于数据库、缓存和消息代理。**
- Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker. It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs and geospatial indexes with radius queries. Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster

#### 5.3.2 特点
#### 5.3.3 实例 [^ Redis Demo Reference]
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
	     * 直接通过Jedis进行缓存测试 
	     * @author Thomas Lee
	     * @version 2017年3月12日 下午12:36:37
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
	     * 通过@ContextConfiguration进行Spring和Redis集成测试
	     * @author Thomas Lee
	     * @version 2017年3月12日 下午12:35:52
	     */
	    @Test
	    public void testSpringRedis() {
	        // 通过ClassPathXmlApplicationContext加载Spring容器
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

### 5.4 缓存比较 [^ Cache Comparison Reference]
[^ Cache Comparison Reference]: [CSDN][6]、[博客园][7]

- 有待深入研究。
- ehcache
	- **`SUMMARY:`是纯Java编写的，通信是通过RMI方式，适用于基于java技术的项目。**
	- 是纯Java编写的，通信是通过RMI方式，适用于基于java技术的项目
	- ehcache直接在jvm虚拟机中缓存，速度快，效率高；但是缓存共享麻烦，集群分布式应用不方便。
	- 效率高。功能强大。
	- 只适用于java体系，只能用java编写客户端；
	- 如果是单个应用或者对缓存访问要求很高的应用，用ehcache
	- Ehcache被广泛的运用于其他的开源项目。
- memcache
	- **`SUMMARY:`服务器端是c编写的，客户端有多个语言的实现，分布式缓存。**
	- memcached服务器端是c编写的，客户端有多个语言的实现
	- 功能不完善，相对于Ehcache效率低
	- 简洁，灵活，所有支持socket的语言都能编写其客户端
- redis
	- **`SUMMARY:`如果对数据持久化和数据同步有所要求，那么推荐你选择Redis。**
	- 如果对数据持久化和数据同步有所要求，那么推荐你选择Redis
	- redis是通过socket访问到缓存服务，效率比ecache低，比数据库要快很多，处理集群和分布式缓存方便，有成熟的方案。
	- 如果是大型系统，存在缓存共享、分布式部署、缓存内容很大的，建议用redis
	- 丰富的数据类型
	- 高性能

## 六、清空策略
- 如果元素数量超过最大缓存数量 ，则缓存会采用缓存清空策略。

### 6.1 FIFO
- **`SUMMARY:`最先进来的首先被清理。**
- `First In, First Out`，最先进入缓存的数据在缓存空间不够情况下（超出最大元素限制时）会被首先清理出去。

### 6.2 LFU
- **`SUMMARY:`一直以来最少被使用的元素首先被清理。**
- `Less Frequently Used`，一直以来最少被使用的元素会被被清理掉。这就要求缓存的元素有一个`hit`属性，在缓存空间不够得情况下，`hit`值最小的将会被清出缓存。

### 6.3 LRU
- **`SUMMARY:`离当前时间最远的缓存首先被清理。**
- `Least Recently Used`，最近最少使用的（最老的元素），缓存的元素有一个时间戳，当缓存容量满了，而又需要腾出地方来缓存新的元素的时候，那么现有缓存元素中时间戳离当前时间最远的元素将被清除缓存。


<br>
## X、注意事项

[1]: http://baike.baidu.com/link?url=oNPMIAKfSp2ntqHEfuSwTAQq3ayghltA-Y53tmpKcZWtmo-CDhjc1AUEuEB9WAuUWDzIXxg6Wdt5bnxyfihpVq
[2]: http://baike.baidu.com/link?url=I7Sc2yDk5Q2BTb37_wi-VK1VpIkFWv7s07UALh8V9rI0975ZU4H2nh4U7jFwO7Zv0Nly8AMmQUEI-dS2RG3-UZkg1kj-lUa8426-1iYkw1m
[3]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/
[4]: http://memcached.org/
[5]: http://www.ehcache.org/
[6]: http://blog.csdn.net/chenleixing/article/details/47035367
[7]: http://www.cnblogs.com/tyyf/p/5505269.html