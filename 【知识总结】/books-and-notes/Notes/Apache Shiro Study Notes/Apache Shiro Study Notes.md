# Apache Shiro Study Notes [^ history version]

@(Notes)[Shiro, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
> 2017年03月20日 上午09:34:42
> 2017年03月19日 下午10:36:03
> 2017年03月18日 下午06:49:52
> 2017年03月12日 下午09:41:12

[TOC]

***
## 〇、思维导图

<br>	
## 一、简介
### 1.1 概念
- **`SUMMARY：` 一种`JAVA`安全框架（功能强大、使用简单），提供认证、授权、加密以及会话管理的全面安全解决方案。**
- 一种`JAVA`安全框架（功能强大、使用简单），提供（全面的）认证、授权、加密以及会话管理的解决方案；
- 主要管理应用程序中与安全相关的全部，同时尽可能支持多种实现方式；
- `Shiro`是建立在完善的接口驱动设计和面向对象原则之上的，除了提供默认的实现方式之外，还支持各种自定义行为；
- `apache`旗下一个开源框架，它将软件系统的安全认证相关的功能抽取出来，实现用户身份认证，权限授权、加密、会话管理等功能，组成了一个通用的安全认证框架。

### 1.2 优点
- **`SUMMARY：` 功能强大、使用简单。**
- 既然`Shiro`将安全认证相关的功能抽取出来组成一个框架，使用`Shiro`就可以非常快速的完成认证、授权等功能的开发，降低系统成本。
- `Shiro`使用广泛，`Shiro`可以运行在`Web`应用，非`Web`应用，集群分布式应用中越来越多的用户开始使用`Shiro`。
- `Java`领域中`Spring` `Security`(原名`Acegi`)也是一个开源的权限管理框架，但是`Spring` `Security`依赖`Spring`运行，而`Shiro`就相对独立，最主要是因为`Shiro`使用简单、灵活，所以现在越来越多的用户选择`Shiro`。

### 1.3 架构
- *`img.` `Shiro`架构图如下：*<br><br>![][1]

#### 1.3.1 Subject
- **`SUMMARY：`即主体，用于记录当前操作的用户信息。**
- `Subject`即主体，外部应用与`subject`进行交互，`subject`记录了当前操作用户；
- 将用户的概念理解为当前操作的主体，可能是一个**通过浏览器请求的用户，也可能是一个运行的程序**。
- 在`shiro`中是一个接口，接口中定义了很多认证授相关的方法，外部程序通过`subject`进行认证授，而`subject`是通过`SecurityManager`安全管理器进行认证授权。

#### 1.3.2 SecurityManager
- **`SUMMARY：`负责对`subject`进行安全管理。**
- `SecurityManager`即安全管理器，对全部的`subject`进行安全管理，它是`shiro`的核心，负责对所有的`subject`进行安全管理；
- 通过`SecurityManager`可以完成`subject`的认证、授权等；
- 实质上是一个接口，继承了`Authenticator`, `Authorizer`, `SessionManager`这三个接口，通过`Authenticator`进行认证，通过`Authorizer`进行授权，通过`SessionManager`进行会话管理等。

#### 1.3.3 Authenticator
- **`SUMMARY：`认证器，对用户身份进行认证。**
- `Authenticator`即认证器，对用户身份进行认证；
- 是一个接口，`shiro`提供`ModularRealmAuthenticator`实现类，通过`ModularRealmAuthenticator`基本上可以满足大多数需求，也可以自定义认证器。

#### 1.3.4 Authorizer
- **`SUMMARY：`判断用户是否有操作权限。**
- 即授权器，用户通过认证器认证通过，在访问功能时需要通过授权器判断用户是否有此功能的操作权限。

#### 1.3.5 Realm
- **`SUMMARY：`获取用户权限数据，完成具体认证授权过程。**
- `Realm`即领域，相当于`datasource`数据源；
- `securityManager`进行安全认证需要通过`Realm`获取用户权限数据，比如：
	- 如果用户身份数据在数据库那么`realm`就需要从数据库获取用户身份信息。

	> *注意*
	> - 不要把`realm`理解成只是从数据源取数据，在`realm`中还有认证授权校验的相关的代码。

#### 1.3.6 SessionManager
- **`SUMMARY：` `shiro`会话管理。**
- `sessionManager`即会话管理，`shiro`框架定义了一套会话管理，它不依赖`web`容器的`session`，所以`shiro`可以使用在非`web`应用上，也可以将分布式应用的会话集中在一点管理，此特性可使它实现单点登录。

#### 1.3.7 SessionDAO
- **`SUMMARY：` 会话`DAO`。**
- `SessionDAO`即会话`DAO`，是对`session`会话操作的一套接口，比如：
	- 要将`session`存储到数据库，可以通过`jdbc`将会话存储到数据库。

#### 1.3.8 CacheManager
- **`SUMMARY：` 缓存管理器。**
- `CacheManager`即缓存管理，将用户权限数据存储在缓存，这样可以提高性能。

#### 1.3.9 Cryptography
- **`SUMMARY：` 密码管理器。**
- `Cryptography`即密码管理，`shiro`提供了一套加密/解密的组件，方便开发。比如提供常用的散列、加/解密等功能。

<br>	
## 二、认证
### 2.1 认证流程 
- *`img.` `Shiro`认证流程：*<br><br>![][2]

### 2.2 入门程序（登录和退出）
#### 2.2.1 shiro.ini
- **`SUMMARY：` 可以通过`.ini`直接获取认证信息，后期通过数据库获取。**
- 通过`Shiro.ini`配置文件初始化`SecurityManager`环境。

	``` xml
	[users]
	zhang=123
	lisi=123
	```

#### 2.2.2 代码
- *`img.`实例代码：*
	``` java
	    // 用户登陆、用户退出
		@Test
		public void testLoginLogout() {
	
			// 构建SecurityManager工厂，IniSecurityManagerFactory可以从ini文件中初始化SecurityManager环境
			Factory<SecurityManager> factory = new IniSecurityManagerFactory(
					"classpath:shiro.ini");
	
			// 通过工厂创建SecurityManager
			SecurityManager securityManager = factory.getInstance();
			
			// 将securityManager设置到运行环境中
			SecurityUtils.setSecurityManager(securityManager);
	
			// 创建一个Subject实例，该实例认证要使用上边创建的securityManager进行
			Subject subject = SecurityUtils.getSubject();
	
			// 创建token令牌，记录用户认证的身份和凭证即账号和密码 
			UsernamePasswordToken token = new UsernamePasswordToken("zhang", "123");
	
			try {
				// 用户登陆
				subject.login(token);
			} catch (AuthenticationException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	
			// 用户认证状态
	
			Boolean isAuthenticated = subject.isAuthenticated();
	
			System.out.println("用户认证状态：" + isAuthenticated);
	
			// 用户退出
	
			subject.logout();
	
			isAuthenticated = subject.isAuthenticated();
	
			System.out.println("用户认证状态：" + isAuthenticated);
	
		}
	```

#### 2.2.3 执行流程
1. 创建`token`令牌，`token`中有用户提交的认证信息即账号和密码；
2. 执行`subject.login(token)`，最终由`securityManager`通过`Authenticator`进行认证；
3. `Authenticator`的实现`ModularRealmAuthenticator`调用`realm`从`ini`配置文件取用户真实的账号和密码，这里使用的是`IniRealm`（`shiro`自带），**后期可以通过在自定义中的`realm`通过从数据库获取账号信息进行比较**；
4. `IniRealm`先根据`token`中的账号去ini中找该账号，如果找不到则给`ModularRealmAuthenticator`返回`null`，如果找到则匹配密码，匹配密码成功则认证通过。

#### 2.2.4 常见的异常
- `UnknownAccountException`，未知账号异常。
- `IncorrectCredentialsException`，凭证错误异常
- `DisabledAccountException`，账号被禁异常。
- `LockedAccountException`，账号被锁异常。
- `ExcessiveAttemptsException`，登录次数过多异常。
- `ExpiredCredentialsException`，凭证过期异常。

### 2.3 自定义Realm
- 上边的程序使用的是`Shiro`自带的`IniRealm`，`IniRealm`从`ini`配置文件中读取用户的信息，大部分情况下需要从系统的数据库中读取用户信息，所以需要自定义`realm`。

#### 2.3.1 shiro提供的realm
- *`img.` `Shiro`提供的`Realm`：*<br><br>![][3]
- 最基础的是`Realm`接口，`CachingRealm`负责缓存处理，`AuthenticationRealm`负责认证，`AuthorizingRealm`负责授权，**通常自定义的`realm`继承`AuthorizingRealm`**。

#### 2.3.2 自定义realm
- *`eg.`代码实例：*

	``` java
	public class CustomRealm extends AuthorizingRealm {
	
		@Override
		public String getName() {
			return "customRealm1";
		}
	
		// 支持UsernamePasswordToken
		@Override
		public boolean supports(AuthenticationToken token) {
			return token instanceof UsernamePasswordToken;
		}
	
		// 认证
		@Override
		protected AuthenticationInfo doGetAuthenticationInfo(
				AuthenticationToken token) throws AuthenticationException {
			
			// 从token中 获取用户身份信息
			String username = (String) token.getPrincipal();
			//拿username从数据库中查询
			// ....
			// 如果查询不到则返回null
			if(!username.equals("zhang")){//这里模拟查询不到
				return null;
			}
			
			// 获取从数据库查询出来的用户密码 
			String password = "123";//这里使用静态数据模拟。。
			
			// 返回认证信息由父类AuthenticatingRealm进行认证
			SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(
					username, password, getName());
	
			return simpleAuthenticationInfo;
		}
	
		// 授权
		@Override
		protected AuthorizationInfo doGetAuthorizationInfo(
				PrincipalCollection principals) {
			// TODO Auto-generated method stub
			return null;
		}
	
	}
	```

#### 2.3.3 shiro-realm.ini
- *`eg.`代码实例：*

	``` xml
		[main]
		# 自定义 realm
		customRealm=cn.itcast.shiro.authentication.realm.CustomRealm
		# 将realm设置到securityManager
		securityManager.realms=$customRealm
	```

### 2.4 散列算法
- **`SUMMARY：`用于生成一段文本的摘要信息，散列算法不可逆，一般散列算法需要提供一个`salt`（盐）与原始内容生成摘要信息。**
- 散列算法一般用于生成一段文本的摘要信息，散列算法不可逆，将内容可以生成摘要，无法将摘要转成原始内容。散列算法常用于对密码进行散列，常用的散列算法有`MD5`、`SHA`；
一般散列算法需要提供一个`salt`（盐）与原始内容生成摘要信息，这样做的目的是为了安全性，比如：`111111`的`md5`值是：`96e79218965eb72c92a549dd5a330112`，拿着`96e79218965eb72c92a549dd5a330112`去`md5`破解网站很容易进行破解，如果要是对`111111`和`salt`（盐，一个随机数）进行散列，这样虽然密码都是`111111`加不同的盐会生成不同的散列值。

#### 2.4.1 例子
- *`eg.`代码实例：*
	
	``` java
		//md5加密，不加盐
		String password_md5 = new Md5Hash("111111").toString();
		System.out.println("md5加密，不加盐="+password_md5);
		
		//md5加密，加盐，一次散列
		String password_md5_sale_1 = new Md5Hash("111111", "eteokues", 1).toString();
		System.out.println("password_md5_sale_1="+password_md5_sale_1);
		String password_md5_sale_2 = new Md5Hash("111111", "uiwueylm", 1).toString();
		System.out.println("password_md5_sale_2="+password_md5_sale_2);
		//两次散列相当于md5(md5())
	
		//使用SimpleHash
		String simpleHash = new SimpleHash("MD5", "111111", "eteokues",1).toString();
		System.out.println(simpleHash);
	```

#### 2.4.2 在realm中使用
- 实际应用是将盐和散列后的值存在数据库中，自动`realm`从数据库取出盐和加密后的值由`shiro`完成密码校验。

##### 2.4.2.1 自定义Realm
- *`eg.`代码实例：*

	``` java
		@Override
		protected AuthenticationInfo doGetAuthenticationInfo(AuthenticationToken token) throws AuthenticationException {
			//用户账号
			String username = (String) token.getPrincipal();
			//根据用户账号从数据库取出盐和加密后的值
			//..这里使用静态数据
			//如果根据账号没有找到用户信息则返回null，shiro抛出异常“账号不存在”
			
			//按照固定规则加密码结果 ，此密码 要在数据库存储，原始密码 是111111，盐是eteokues
			String password = "cb571f7bd7a6f73ab004a70322b963d5";
			//盐，随机数，此随机数也在数据库存储
			String salt = "eteokues";
			
			//返回认证信息
			SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(
					username, password, ByteSource.Util.bytes(salt),getName());

			return simpleAuthenticationInfo;
		}
	```

##### 2.4.2.2 Realm配置
- 配置`shiro-cryptography.ini`
- *`eg.`代码实例：*

	``` java
		[main]
		# 定义凭证匹配器
		credentialsMatcher=org.apache.shiro.authc.credential.HashedCredentialsMatcher
		# 散列算法
		credentialsMatcher.hashAlgorithmName=md5
		# 散列次数
		credentialsMatcher.hashIterations=1
		
		# 将凭证匹配器设置到realm
		customRealm=cn.itcast.shiro.authentication.realm.CustomRealm2
		customRealm.credentialsMatcher=$credentialsMatcher
		securityManager.realms=$customRealm
	```

<br>	
## 三、授权
### 3.1 授权流程
- *`img.`授权流程：*<br><br>![][4]

### 3.2 授权方式
#### 3.2.1 编程式
- *`eg.`实例代码：*

	``` java
	Subject subject = SecurityUtils.getSubject();
	// 有权限
	if(subject.hasRole(“admin”)) {
	// 无权限
	} else {
	}
	```

#### 3.2.2 注解式
- *`eg.`实例代码：*

	``` java
	// 有权限
	@RequiresRoles("admin")
	public void hello() {
	}
	```

#### 3.2.3 标签式
- *`eg.`实例代码：*

	``` javascript
	<shiro:hasRole name="admin">
	<!— 有权限 —>
	</shiro:hasRole>
	```

### 3.3 授权测试

#### 3.3.1 shiro-permission.ini
- 创建存放权限的配置文件`shiro-permission.ini`，如下：

	``` xml
		[users]
		# 用户zhang的密码是123，此用户具有role1和role2两个角色
		zhang=123,role1,role2
		wang=123,role2
		
		[roles]
		# 角色role1对资源user拥有create、update权限
		role1=user:create, user:update
		# 角色role2对资源user拥有create、delete权限
		role2=user:create, user:delete
		# 角色role3对资源user拥有create权限
		role3=user:create
	```

- 在`ini`文件中用户、角色、权限的配置规则是：“用户名=密码，角色1，角色2...” “角色=权限1，权限2...”，首先根据用户名找角色，再根据角色找权限，角色是权限集合。

#### 3.3.2 权限字符串规则
- 权限字符串的规则是：“资源标识符：操作：资源实例标识符”，意思是对哪个资源的哪个实例具有什么操作，“:”是资源/操作/实例的分割符，权限字符串也可以使用*通配符。
- *`eg.`实例：*

	``` xml
		用户创建权限：user:create，或user:create:*
		用户修改实例001的权限：user:update:001
		用户实例001的所有权限：user：*：001
	```

#### 3.3.3 测试代码
- 测试代码同认证代码，注意`ini`地址改为`shiro-permission.ini`，主要学习下边授权的方法，注意：在用户认证通过后执行下边的授权代码。

	``` java
	@Test
	public void testPermission() {

		// 从ini文件中创建SecurityManager工厂
		Factory<SecurityManager> factory = new IniSecurityManagerFactory(
				"classpath:shiro-permission.ini");

		// 创建SecurityManager
		SecurityManager securityManager = factory.getInstance();

		// 将securityManager设置到运行环境
		SecurityUtils.setSecurityManager(securityManager);

		// 创建主体对象
		Subject subject = SecurityUtils.getSubject();

		// 对主体对象进行认证
		// 用户登陆
		// 设置用户认证的身份(principals)和凭证(credentials)
		UsernamePasswordToken token = new UsernamePasswordToken("zhang", "123");
		try {
			subject.login(token);
		} catch (AuthenticationException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		// 用户认证状态
		Boolean isAuthenticated = subject.isAuthenticated();

		System.out.println("用户认证状态：" + isAuthenticated);

		// 用户授权检测 基于角色授权
		// 是否有某一个角色
		System.out.println("用户是否拥有一个角色：" + subject.hasRole("role1"));
		// 是否有多个角色
		System.out.println("用户是否拥有多个角色：" + subject.hasAllRoles(Arrays.asList("role1", "role2")));
		
		// subject.checkRole("role1");
		// subject.checkRoles(Arrays.asList("role1", "role2"));

		// 授权检测，失败则抛出异常
		// subject.checkRole("role22");

		// 基于资源授权
		System.out.println("是否拥有某一个权限：" + subject.isPermitted("user:delete"));
		System.out.println("是否拥有多个权限：" + subject.isPermittedAll("user:create:1",	"user:delete"));
		
		//检查权限
		subject.checkPermission("sys:user:delete");
		subject.checkPermissions("user:create:1","user:delete");
		

	}
	```

#### 3.3.4 基于角色的授权
- *`eg.`实例代码：*

	``` java
	// 用户授权检测 基于角色授权
	// 是否有某一个角色
	System.out.println("用户是否拥有一个角色：" + subject.hasRole("role1"));
	// 是否有多个角色
	System.out.println("用户是否拥有多个角色：" + subject.hasAllRoles(Arrays.asList("role1", "role2")));

	// 对应的check方法：
	subject.checkRole("role1");
	subject.checkRoles(Arrays.asList("role1", "role2"));
	```

- 上边`check`方法如果授权失败则抛出异常：

	``` xml
	org.apache.shiro.authz.UnauthorizedException: Subject does not have role [.....]
	```

#### 3.3.5 基于资源的授权
- *`eg.`实例代码：*

	``` java
	// 基于资源授权
	System.out.println("是否拥有某一个权限：" + subject.isPermitted("user:delete"));
	System.out.println("是否拥有多个权限：" + subject.isPermittedAll("user:create:1",	"user:delete"));
	
	// 对应的check方法：
	subject.checkPermission("sys:user:delete");
	subject.checkPermissions("user:create:1","user:delete");
	```
- 上边`check`方法如果授权失败则抛出异常：

	``` xml
	org.apache.shiro.authz.UnauthorizedException: Subject does not have permission [....]
	```

### 3.4 自定义Realm
- 大部分情况是要从数据库获取权限数据，这里直接实现基于资源的授权。

#### 3.4.1 realm代码 
- 在认证章节写的自定义`realm`类中完善`doGetAuthorizationInfo`方法，此方法需要完成：
	- 根据用户身份信息从数据库查询权限字符串，由`shiro`进行授权。

	``` java
	// 授权
	@Override
	protected AuthorizationInfo doGetAuthorizationInfo(PrincipalCollection principals) {
		// 获取身份信息
		String username = (String) principals.getPrimaryPrincipal();
		// 根据身份信息从数据库中查询权限数据
		// ...这里使用静态数据模拟
		List<String> permissions = new ArrayList<String>();
		permissions.add("user:create");
		permissions.add("user:delete");
		
		// 将权限信息封闭为AuthorizationInfo
		SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
		for(String permission : permissions){
			simpleAuthorizationInfo.addStringPermission(permission);
		}
		
		return simpleAuthorizationInfo;
	}
	```

#### 3.4.2 shiro-realm.ini
- `ini`配置文件还使用认证阶段使用的，不用改变。
- 思考：`shiro-permission.ini`中的`[roles]`为什么不需要了？？

#### 3.4.3 授权执行流程
1. 执行`subject.isPermitted("user:create")`；
2. `securityManager`通过`ModularRealmAuthorizer`进行授权；
3. `ModularRealmAuthorizer`调用`realm`获取权限信息；
4. `ModularRealmAuthorizer`再通过`permissionResolver`解析权限字符串，校验是否匹配。

<br>	
## 四、项目集成
### 4.1 与Spring Web整合
- `shiro`与`springweb`项目整合在“基于`url`拦截实现的工程”基础上整合，基于`url`拦截实现的工程的技术架构是`springmvc` + `mybatis`，整合注意两点：
	- `shiro`与`spring`整合
	- 加入`shiro`对`web`应用的支持

#### 4.1.1 取消原Spring MVC认证和授权拦截器
- 去掉`springmvc.xml`中配置的`LoginInterceptor`和`PermissionInterceptor`拦截器。

#### 4.1.2 web.xml添加Shiro Filter
- *`eg.`代码实例：*

	``` xml
	!-- shiro过虑器，DelegatingFilterProxy通过代理模式将spring容器中的bean和filter关联起来 -->
	<filter>
		<filter-name>shiroFilter</filter-name>
		<filter-class>org.springframework.web.filter.DelegatingFilterProxy</filter-class>
		<!-- 设置true由servlet容器控制filter的生命周期 -->
		<init-param>
			<param-name>targetFilterLifecycle</param-name>
			<param-value>true</param-value>
		</init-param>
		<!-- 设置spring容器filter的bean id，如果不设置则找与filter-name一致的bean-->
		<init-param>
			<param-name>targetBeanName</param-name>
			<param-value>shiroFilter</param-value>
		</init-param>
	</filter>
	<filter-mapping>
		<filter-name>shiroFilter</filter-name>
		<url-pattern>/*</url-pattern>
	</filter-mapping>
	```

#### 4.1.3 applicationContext.xml
- *`eg.`代码实例：*

	``` xml
	<!-- Shiro 的Web过滤器 -->
	<bean id="shiroFilter" class="org.apache.shiro.spring.web.ShiroFilterFactoryBean">
		<property name="securityManager" ref="securityManager" />
		<!-- loginUrl认证提交地址，如果没有认证将会请求此地址进行认证，请求此地址将由formAuthenticationFilter进行表单认证 -->
		<property name="loginUrl" value="/login.action" />
		<property name="unauthorizedUrl" value="/refuse.jsp" />
		<!-- 过虑器链定义，从上向下顺序执行，一般将/**放在最下边 -->
		<property name="filterChainDefinitions">
			<value>
				<!-- 退出拦截，请求logout.action执行退出操作 -->
				/logout.action = logout
				<!-- 无权访问页面 -->
				/refuse.jsp = anon
				<!-- roles[XX]表示有XX角色才可访问 -->
				/item/list.action = roles[item],authc
				/js/** anon
				/images/** anon
				/styles/** anon
				/validatecode.jsp anon
				/item/* authc
				<!-- user表示身份认证通过或通过记住我认证通过的可以访问 -->
				/** = authc
			</value>
		</property>
	</bean>
	
	<!-- 安全管理器 -->
	<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">
		<property name="realm" ref="userRealm" />
	</bean>
	
	<!-- 自定义 realm -->
	<bean id="userRealm" class="cn.itcast.ssm.realm.CustomRealm1">
	</bean>
	```

- `securityManager`：这个属性是必须的。
- `loginUrl`：没有登录认证的用户请求将跳转到此地址进行认证，不是必须的属性，不输入地址的话会自动寻找项目`web`项目的- 根目录下的`/login.jsp`页面。
- `unauthorizedUrl`：没有权限默认跳转的页面。

#### 4.1.4 自定义realm
- 此`realm`先不从数据库查询权限数据，当前需要先将`shiro`整合完成，在上边章节定义的`realm`基础上修改。
- *`eg.`代码实例：*

	``` java
	public class CustomRealm1 extends AuthorizingRealm {
	
		@Override
		public String getName() {
			return "customRealm";
		}
	
		// 支持什么类型的token
		@Override
		public boolean supports(AuthenticationToken token) {
			return token instanceof UsernamePasswordToken;
		}
	
		// 认证
		@Override
		protected AuthenticationInfo doGetAuthenticationInfo(
				AuthenticationToken token) throws AuthenticationException {
	
			// 从token中 获取用户身份信息
			String username = (String) token.getPrincipal();
			// 拿username从数据库中查询
			// ....
			// 如果查询不到则返回null
			if (!username.equals("zhang")) {// 这里模拟查询不到
				return null;
			}
	
			// 获取从数据库查询出来的用户密码
			String password = "123";// 这里使用静态数据模拟。。
			
			// 根据用户id从数据库取出菜单
			//...先用静态数据
			List<SysPermission> menus = new ArrayList<SysPermission>();;
			
			SysPermission sysPermission_1 = new SysPermission();
			sysPermission_1.setName("商品管理");
			sysPermission_1.setUrl("/item/queryItem.action");
			SysPermission sysPermission_2 = new SysPermission();
			sysPermission_2.setName("用户管理");
			sysPermission_2.setUrl("/user/query.action");
			
			menus.add(sysPermission_1);
			menus.add(sysPermission_2);
			
			// 构建用户身份信息
			ActiveUser activeUser = new ActiveUser();
			activeUser.setUserid(username);
			activeUser.setUsername(username);
			activeUser.setUsercode(username);
			activeUser.setMenus(menus);
	
			// 返回认证信息由父类AuthenticatingRealm进行认证
			SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(
					activeUser, password, getName());
	
			return simpleAuthenticationInfo;
		}
	
		// 授权
		@Override
		protected AuthorizationInfo doGetAuthorizationInfo(
				PrincipalCollection principals) {
			// 获取身份信息
			ActiveUser activeUser = (ActiveUser) principals.getPrimaryPrincipal();
			//用户id
			String userid = activeUser.getUserid();
			// 根据用户id从数据库中查询权限数据
			// ....这里使用静态数据模拟
			List<String> permissions = new ArrayList<String>();
			permissions.add("item:query");
			permissions.add("item:update");
	
			// 将权限信息封闭为AuthorizationInfo
	
			SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
			for (String permission : permissions) {
				simpleAuthorizationInfo.addStringPermission(permission);
			}
	
			return simpleAuthorizationInfo;
		}
	
	}
	```

#### 4.1.5 登录
- *`eg.`代码实例：*

	``` java
	// 用户登陆提交
	@RequestMapping("/login")
	public String loginsubmit(Model model, HttpServletRequest request)
			throws Exception {
	
		// shiro在认证过程中出现错误后将异常类路径通过request返回
		String exceptionClassName = (String) request.getAttribute("shiroLoginFailure");
		if(null != exceptionClassName){
			if (UnknownAccountException.class.getName().equals(exceptionClassName)) {
				throw new CustomException("账号不存在");
			} else if (IncorrectCredentialsException.class.getName().equals(
					exceptionClassName)) {
				throw new CustomException("用户名/密码错误");
			} else if("randomCodeError".equals(exceptionClassName)){
				throw new CustomException("验证码错误");
			} else{
				throw new Exception();//最终在异常处理器生成未知错误
			}
		}
		return "login";
		
	}
	```

#### 4.1.6 首页
- 由于`session`由`shiro`管理，需要修改首页的`controller`方法，将`session`中的数据通过`model`传到页面。
- *`eg.`代码实例：*

	``` java
	//系统首页
	@RequestMapping("/first")
	public String first(Model model)throws Exception{
		
		//主体
		Subject subject = SecurityUtils.getSubject();
		//身份
		ActiveUser activeUser = (ActiveUser) subject.getPrincipal();
		model.addAttribute("activeUser", activeUser);
		return "/first";
	}
	```

#### 4.1.7 退出
- 由于使用`shiro`的`sessionManager`，不用开发退出功能，使用`shiro`的`logout`拦截器即可。
- *`eg.`代码实例：*

	``` xml
	<!-- 退出拦截，请求logout.action执行退出操作 -->
	/logout.action = logout
	```

#### 4.1.8 无权限refuse.jsp
- 当用户无操作权限，`shiro`将跳转到`refuse.jsp`页面。

#### 4.1.9 shiro过滤器总结
- *`img.` `Shrio`过滤器：*<br><br>![][5]
- anon
	- 例子`/admins/**=anon`没有参数，表示可以匿名使用。
- authc
	- 例如`/admins/user/**=authc`表示需要认证(登录)才能使用，`FormAuthenticationFilter`是表单认证，没有参数 
- roles
	- 例子`/admins/user/*=roles[admin]`,参数可以写多个，多个时必须加上引号，并且参数之间用逗号分割，当有多个参数时，例如`admins/user/*=roles["admin,guest"]`，每个参数通过才算通过，相当于`hasAllRoles()`方法。
- perms
	- 例子`/admins/user/*=perms[user:add:*]`，参数可以写多个，多个时必须加上引号，并且参数之间用逗号分割，例如`/admins/user/*=perms["user:add:*,user:modify:*"]`，当有多个参数时必须每个参数都通过才通过，想当于`isPermitedAll()`方法。
- rest
	- 例子`/admins/user/*=rest[user]`，根据请求的方法，相当于`/admins/user/*=perms[user:method]`，其中`method`为`post`，`get`，`delete`等。
- port
	- 例子`/admins/user/**=port[8081]`，当请求的`url`的端口不是`8081`是跳转到`schemal://serverName:8081?queryString`，其中`- schmal`是协议`http`或`https`等，`serverName`是你访问的`host`，`8081`是`url`配置里`port`的端口，`queryString`是你访问的`url`里的`？`后面的参数。
- authcBasic
	- 例如`/admins/user/**=authcBasic`没有参数表示`httpBasic`认证
- ssl
	- 例子`/admins/user/**=ssl`没有参数，表示安全的`url`请求，协议为`https`
- user
	- 例如`/admins/user/**=user`没有参数表示必须存在用户, 身份认证通过或通过记住我认证通过的可以访问，当登入操作时不做检查

> *注意*
> - `anon`，`authcBasic`，`auchc`，`user`是认证过滤器，
> - `perms`，`roles`，`ssl`，`rest`，`port`是授权过滤器

<br>
### 4.2 认证
#### 4.2.1 添加凭证匹配器
- 添加凭证匹配器实现`md5`加密校验。
- 修改`applicationContext-shiro.xml`：

	``` xml
	<!-- 凭证匹配器 -->
	<bean id="credentialsMatcher"
		class="org.apache.shiro.authc.credential.HashedCredentialsMatcher">
		<property name="hashAlgorithmName" value="md5" />
		<property name="hashIterations" value="1" />
	</bean>

	<!-- 自定义 realm -->
	<bean id="userRealm" class="cn.itcast.ssm.realm.CustomRealm1">
		<property name="credentialsMatcher" ref="credentialsMatcher" />
	</bean>
	```

#### 4.2.2 修改realm认证方法
- 修改`realm`代码从数据库中查询用户身份信息，将`sysService`注入`realm`。

	``` java
	public class CustomRealm1 extends AuthorizingRealm {
	
		@Autowired
		private SysService sysService;
	
		@Override
		public String getName() {
			return "customRealm";
		}
	
		// 支持什么类型的token
		@Override
		public boolean supports(AuthenticationToken token) {
			return token instanceof UsernamePasswordToken;
		}
	
		@Override
		protected AuthenticationInfo doGetAuthenticationInfo(
				AuthenticationToken token) throws AuthenticationException {
			// 从token中获取用户身份
			String usercode = (String) token.getPrincipal();
	
			SysUser sysUser = null;
			try {
				sysUser = sysService.findSysuserByUsercode(usercode);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
	
			// 如果账号不存在
			if (sysUser == null) {
				return null;
			}
	
			// 根据用户id取出菜单
			List<SysPermission> menus = null;
			try {
				menus = sysService.findMenuList(sysUser.getId());
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			// 用户密码
			String password = sysUser.getPassword();
			// 盐
			String salt = sysUser.getSalt();
			
			// 构建用户身体份信息
			ActiveUser activeUser = new ActiveUser();
			activeUser.setUserid(sysUser.getId());
			activeUser.setUsername(sysUser.getUsername());
			activeUser.setUsercode(sysUser.getUsercode());
			activeUser.setMenus(menus);
			
			SimpleAuthenticationInfo simpleAuthenticationInfo = new SimpleAuthenticationInfo(
					activeUser, password, ByteSource.Util.bytes(salt),getName());
			
			return simpleAuthenticationInfo;
		}
	
		.....
	
	}
	```

### 4.3 授权
#### 4.3.1 修改realm授权方法
- 修改`realm`代码从数据库中查询权限信息，将`sysService`注入`realm`：

	``` java
	public class CustomRealm1 extends AuthorizingRealm {
	
		@Autowired
		private SysService sysService;
	
		@Override
		public String getName() {
			return "customRealm";
		}
	
		// 支持什么类型的token
		@Override
		public boolean supports(AuthenticationToken token) {
			return token instanceof UsernamePasswordToken;
		}
	
	
		@Override
		protected AuthorizationInfo doGetAuthorizationInfo(
				PrincipalCollection principals) {
			
			// 身份信息
			ActiveUser activeUser = (ActiveUser) principals.getPrimaryPrincipal();
			// 用户id
			String userid = activeUser.getUserid();
			// 获取用户权限
			List<SysPermission> permissions = null;
			try {
				permissions = sysService.findSysPermissionList(userid);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			// 构建shiro授权信息
			SimpleAuthorizationInfo simpleAuthorizationInfo = new SimpleAuthorizationInfo();
			for(SysPermission sysPermission : permissions){
				simpleAuthorizationInfo.addStringPermission(sysPermission.getPercode());
			}
			
			return simpleAuthorizationInfo;	
		}
	
	}
	```

#### 4.3.2 对Controller开启AOP
- 在`springmvc.xml`中配置`shiro`注解支持，可在`controller`方法中使用`shiro`注解配置权限：

	``` xml
	<!-- 开启aop，对类代理 -->
	<aop:config proxy-target-class="true"></aop:config>
	<!-- 开启shiro注解支持 -->
	<bean class="org.apache.shiro.spring.security.interceptor.AuthorizationAttributeSourceAdvisor">
		<property name="securityManager" ref="securityManager" />
	</bean>
	```
#### 4.3.3 权限注解控制
- 商品查询`controller`方法添加权限（`item:query`）：

	``` java
	// 查询商品列表
	@RequestMapping("/queryItem")
	@RequiresPermissions("item:query")
	public ModelAndView queryItem() throws Exception {
	```
- 上边代码`@RequiresPermissions("item:query")`表示必须拥有`item:query`权限方可执行。

#### 4.3.4 JSP标签控制
- *`eg.`示例：*

	``` xml
	<shiro:hasPermission name="item:update">
		<a href="${pageContext.request.contextPath }/item/editItem.action?id=${item.id}">修改</a>
	</shiro:hasPermission>
	```
- 其他页面引擎也可以控制。

### 4.4 缓存
- `shiro`每次授权都会通过`realm`获取权限信息，为了提高访问速度需要添加缓存，第一次从`realm`中读取权限数据，之后不再读取，这里`Shiro`和`Ehcache`整合。

#### 4.4.1 添加EhCache的jar包 
#### 4.4.2 配置cacheManager
- 在`applicationContext-shiro.xml`中配置缓存管理器：

	``` xml
	<!-- 安全管理器 -->
	<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">
		<property name="realm" ref="userRealm" />
		<property name="cacheManager" ref="cacheManager"/>
	</bean>
	
	<!-- 缓存管理器 -->
	<bean id="cacheManager" class="org.apache.shiro.cache.ehcache.EhCacheManager">
	   	<property name="cacheManagerConfigFile" value="classpath:shiro-ehcache.xml"/>
	   </bean>
	```

#### 4.4.3 配置shrio-echcache.xml
- *`eg.`实例代码：*

	``` xml
	<ehcache xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
		xsi:noNamespaceSchemaLocation="../config/ehcache.xsd">
		<!--diskStore：缓存数据持久化的目录 地址  -->
		<diskStore path="F:\develop\ehcache" />
		<defaultCache 
			maxElementsInMemory="1000" 
			maxElementsOnDisk="10000000"
			eternal="false" 
			overflowToDisk="false" 
			diskPersistent="false"
			timeToIdleSeconds="120"
			timeToLiveSeconds="120" 
			diskExpiryThreadIntervalSeconds="120"
			memoryStoreEvictionPolicy="LRU">
		</defaultCache>
	</ehcache>
	```

#### 4.4.4 清空缓存
- 当用户权限修改后，用户再次登陆`shiro`会自动调用`realm`从数据库获取权限数据，如果在修改权限后想立即清除缓存则可以调用`realm`的`clearCache`方法清除缓存。
- `realm`中定义`clearCached`方法：

	``` java
	// 清除缓存
	public void clearCached() {
		PrincipalCollection principals = SecurityUtils.getSubject().getPrincipals();
		super.clearCache(principals);
	}
	```
- 在权限修改后调用`realm`中的方法，`realm`已经由`spring`管理，所以从`spring`中获取`realm`实例，调用`clearCached`方法。

### 4.5 session管理
- 在`applicationContext-shiro.xml`中配置`sessionManager`：

	``` xml
	<!-- 安全管理器 -->
	<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">
		<property name="realm" ref="userRealm" />
		<property name="sessionManager" ref="sessionManager" />
	</bean>
	<!-- 会话管理器 -->
   <bean id="sessionManager" class="org.apache.shiro.web.session.mgt.DefaultWebSessionManager">
       <!-- session的失效时长，单位毫秒 -->
       <property name="globalSessionTimeout" value="600000"/>
       <!-- 删除失效的session -->
       <property name="deleteInvalidSessions" value="true"/>
   </bean>
	```

### 4.6 验证码
#### 4.6.1 自定义FormAuthenticationFilter
- 需要在验证账号和名称之前校验验证码。

	``` java
	public class MyFormAuthenticationFilter extends FormAuthenticationFilter {
		protected boolean onAccessDenied(ServletRequest request,
				ServletResponse response, Object mappedValue) throws Exception {
	
			// 校验验证码
			// 从session获取正确的验证码
			HttpSession session = ((HttpServletRequest)request).getSession();
			//页面输入的验证码
			String randomcode = request.getParameter("randomcode");
			//从session中取出验证码
			String validateCode = (String) session.getAttribute("validateCode");
			if (randomcode!=null && validateCode!=null) {
				if (!randomcode.equals(validateCode)) {
					// randomCodeError表示验证码错误 
					request.setAttribute("shiroLoginFailure", "randomCodeError");
					//拒绝访问，不再校验账号和密码 
					return true; 
				}
			}
			return super.onAccessDenied(request, response, mappedValue);
		}
	}
	```

#### 4.6.2 FormAuthenticationFilter配置
- 修改`applicationContext-shiro.xml`中对`FormAuthenticationFilter`的配置。
- 在`shiroFilter`中添加`filters`：

	``` xml
	<bean id="shiroFilter" class="org.apache.shiro.spring.web.ShiroFilterFactoryBean">
		<property name="filters">
			<map>
				<!-- FormAuthenticationFilter是基于表单认证的过虑器 -->
				<entry key="authc" value-ref="formAuthenticationFilter" />
			</map>
		</property>
	.....
	.....
	```
- `formAuthenticationFilter`定义：

``` xml
	<!-- 基于Form表单的身份验证过滤器，不配置将也会注册此过虑器，表单中的用户账号、密码及loginurl将采用默认值，建议配置 -->
	<bean id="formAuthenticationFilter" class="org.apache.shiro.web.filter.authc.MyFormAuthenticationFilter ">
		<!-- 表单中账号的input名称 -->
		<property name="usernameParam" value="username" />
		<!-- 表单中密码的input名称 -->
		<property name="passwordParam" value="password" />
	 </bean>
```

#### 4.6.3 登录页面
- 添加验证码：

	``` xml
	<TR>
		<TD>验证码：</TD>
		<TD><input id="randomcode" name="randomcode" size="8" /> <img
			id="randomcode_img" src="${baseurl}validatecode.jsp" alt=""
			width="56" height="20" align='absMiddle' /> <a
			href=javascript:randomcode_refresh()>刷新</a></TD>
	</TR>
	```

#### 4.6.4 配置validatecode.jsp匿名访问
- 修改`applicationContext-shiro.xml`：

	``` xml
	/validatecode.jsp anon
	```

### 4.7 记住我
- 用户登陆选择“自动登陆”本次登陆成功会向`cookie`写身份信息，下次登陆从`cookie`中取出身份信息实现自动登陆。

#### 4.7.1 用户身份实现java.io.Serializable接口

#### 4.7.2 配置rememberMeManager
- *`eg.`实例代码：*

	``` xml
	<!-- 安全管理器 -->
	<bean id="securityManager" class="org.apache.shiro.web.mgt.DefaultWebSecurityManager">
		<property name="realm" ref="userRealm" />
		<property name="sessionManager" ref="sessionManager" />
		<property name="cacheManager" ref="cacheManager"/>
		<!-- 记住我 -->
		<property name="rememberMeManager" ref="rememberMeManager"/>
	</bean>
	
	<!-- rememberMeManager管理器 -->
	<bean id="rememberMeManager" class="org.apache.shiro.web.mgt.CookieRememberMeManager">
		<property name="cookie" ref="rememberMeCookie" />
	</bean>
	<!-- 记住我cookie -->
	<bean id="rememberMeCookie" class="org.apache.shiro.web.servlet.SimpleCookie">
		<constructor-arg value="rememberMe" />
		<!-- 记住我cookie生效时间30天 -->
		<property name="maxAge" value="2592000" />
	</bean>
	```

#### 4.7.3 FormAuthenticationFilter配置
- 修改`formAuthenticationFitler`添加页面中“记住我`checkbox`”的`input`名称：

	``` xml
	<bean id="formAuthenticationFilter"
		class="cn.itcast.ssm.shiro.MyFormAuthenticationFilter">
		<!-- 表单中账号的input名称 -->
		<property name="usernameParam" value="usercode" />
		<!-- 表单中密码的input名称 -->
		<property name="passwordParam" value="password" />
		<property name="rememberMeParam" value="rememberMe"/>
	</bean>
	```

#### 4.7.4 登录页面
- 在`login.jsp`中添加“记住我”`checkbox`。

	``` xml
	<TR>
		<TD></TD>
		<TD>
		<input type="checkbox" name="rememberMe" />自动登陆
		</TD>
	</TR>
	```
	
[1]: http://p1.bqimg.com/567571/5df46aae957541c2.png
[2]: http://p1.bpimg.com/567571/2e485006ef07db5c.png
[3]: http://p1.bpimg.com/567571/27dbc9e741bee104.png
[4]: http://p1.bpimg.com/567571/1ae384c2b9362959.png
[5]: http://p1.bpimg.com/567571/186f450f94864abb.png