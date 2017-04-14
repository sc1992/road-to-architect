# 基于URL拦截实现 Study Notes [^ history version]

@(Notes)[基于URL拦截实现, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 2017年03月18日 下午08:31:45

[TOC]

***
## 〇、思维导图
- **`SUMMARY：`**

> *注意*
> -  


## 一、简介
- **`SUMMARY：`将系统操作的每个`url`配置在权限表中，将权限对应到角色，将角色分配给用户，用户访问系统功能通过`Filter`进行过滤，过滤器获取到用户访问的`url`，只要访问的`url`是用户分配角色中的`url`则放行继续访问。**
- 基于`url`拦截是企业中常用的权限管理方法，实现思路是：
	- 将系统操作的每个`url`配置在权限表中，将权限对应到角色，将角色分配给用户，用户访问系统功能通过`Filter`进行过滤，过滤器获取到用户访问的`url`，只要访问的`url`是用户分配角色中的`url`则放行继续访问。
- *`img.`如下图：*<br>![][7]


<br>		 
## 二、实现

### 2.1 环境准备
- `jdk：1.7.0_72`；
- `web`容器：`tomcat7`；
- 系统框架：`springmvc3.2.0` + `mybatis3.2.7`；
- 前台`UI`：`jquery` `easyUI1.2.2`。

### 2.2 数据库
- 数据表
	- 用户表；
	- 角色表；
	- 权限表；
	- 角色权限关系表；
	- 用户角色关系表。
- 脚本，
	- 先导入`shiro_sql_talbe.sql`；
	- 再导入`shiro-sql_table_data.sql`。

### 2.3 ActiveUser用户身份类
- 用户登陆成功记录`activeUser`信息并将`activeUser`存入`session`。
	
	``` java
	public class ActiveUser implements java.io.Serializable {
	
		private String userid;//用户id
		private String usercode;// 用户账号
		private String username;// 用户名称
	
		private List<SysPermission> menus;// 菜单
		private List<SysPermission> permissions;// 权限
	}
	```

### 2.4 anonymousURL.properties
- `anonymousURL.properties`公开访问地址，无需身份认证即可访问。

### 2.5 commonURL.properties
- `commonURL.properties`公共访问地址，身份认证通过无需分配权限即可访问。

### 2.6 用户认证拦截器
- **`SUMMARY：`使用拦截器对用户身份认证进行拦截，如果用户没有登陆则跳转到登陆页面。**
- 使用`springmvc`拦截器对用户身份认证进行拦截，如果用户没有登陆则跳转到登陆页面；
- 本功能也可以使用`filter`实现 。
- *`eg.`实例代码：*

	``` java
	public class LoginInterceptor implements HandlerInterceptor {
	
		// 在进入controller方法之前执行
		// 使用场景：比如身份认证校验拦截，用户权限拦截，如果拦截不放行，controller方法不再执行
		@Override
		public boolean preHandle(HttpServletRequest request,
				HttpServletResponse response, Object handler) throws Exception {
	
			// 校验用户访问是否是公开资源地址(无需认证即可访问)
			List<String> open_urls = ResourcesUtil.gekeyList("anonymousURL");
	
			// 用户访问的url
			String url = request.getRequestURI();
			for (String open_url : open_urls) {
				if (url.indexOf(open_url) >= 0) {
					// 如果访问的是公开 地址则放行
					return true;
				}
			}
	
			// 校验用户身份是否认证通过
			HttpSession session = request.getSession();
			ActiveUser activeUser = (ActiveUser) session.getAttribute("activeUser");
			if (activeUser != null) {
				// 用户已经登陆认证，放行
				return true;
			}
			// 跳转到登陆页面
			request.getRequestDispatcher("/WEB-INF/jsp/login.jsp").forward(request,
					response);
			return false;
	}
	```

### 2.7 用户授权拦截器
- **`SUMMARY：` 使用拦截器对用户访问`url`进行拦截，如果用户访问的`url`没有分配权限，则跳转到无权操作提示页面。**
- 使用`springmvc`拦截器对用户访问`url`进行拦截，如果用户访问的`url`没有分配权限则跳转到无权操作提示页面（`refuse.jsp`），本功能也可以使用`filter`实现。

	``` java
	public class PermissionInterceptor implements HandlerInterceptor {
	
		// 在进入controller方法之前执行
		// 使用场景：比如身份认证校验拦截，用户权限拦截，如果拦截不放行，controller方法不再执行
		// 进入action方法前要执行
		@Override
		public boolean preHandle(HttpServletRequest request,
				HttpServletResponse response, Object handler) throws Exception {
			// TODO Auto-generated method stub
			// 用户访问地址：
			String url = request.getRequestURI();
	
			// 校验用户访问是否是公开资源地址(无需认证即可访问)
			List<String> open_urls = ResourcesUtil.gekeyList("anonymousURL");
			// 用户访问的url
			for (String open_url : open_urls) {
				if (url.indexOf(open_url) >= 0) {
					// 如果访问的是公开 地址则放行
					return true;
				}
			}
			//从 session获取用户公共访问地址（认证通过无需分配权限即可访问）
			List<String> common_urls = ResourcesUtil.gekeyList("commonURL");
			// 用户访问的url
			for (String common_url : common_urls) {
				if (url.indexOf(common_url) >= 0) {
					// 如果访问的是公共地址则放行
					return true;
				}
			}
			// 从session获取用户权限信息
	
			HttpSession session = request.getSession();
	
			ActiveUser activeUser = (ActiveUser) session.getAttribute("activeUser");
	
			// 取出session中权限url
			// 获取用户操作权限
			List<SysPermission> permission_list = activeUser.getPermissions();
			// 校验用户访问地址是否在用户权限范围内
			for (SysPermission sysPermission : permission_list) {
				String permission_url = sysPermission.getUrl();
				if (url.contains(permission_url)) {
					return true;
				}
			}
	
			// 跳转到页面
			request.getRequestDispatcher("/WEB-INF/jsp/refuse.jsp").forward(
					request, response);
			return false;
		}
	```
- ![][8]
- ![][9]
- ![][10]
- ![][11]
- ![][12]
### 2.8 用户登录
- **`SUMMARY：` 用户输入用户账号和密码登陆，登陆成功将用户的身份信息（用户账号、密码、权限菜单、权限`url`等）记入`activeUser`类，并写入`session`。**
- 用户输入用户账号和密码登陆，登陆成功将用户的身份信息（用户账号、密码、权限菜单、权限`url`等）记入`activeUser`类，并写入`session`。

#### 2.8.1 Controller
- *`eg.`实例代码：*
	```
		// 用户登陆提交
		@RequestMapping("/loginsubmit")
		public String loginsubmit(HttpSession session,String usercode,String password,String randomcode) throws Exception{
	
			// 校验验证码
			// 从session获取正确的验证码
			String validateCode = (String)session.getAttribute("validateCode");
			if(!randomcode.equals(validateCode)){
				// 抛出异常：验证码错误
				throw new CustomException("验证码错误 ！");
			}
			// 用户身份认证
			ActiveUser activeUser = sysService.authenticat(usercode, password);
			
			// 记录session，实际应用中session的key值必须做到对应账号唯一性
			session.setAttribute("activeUser", activeUser);
			
			return "redirect:first.action";
		}
	```

#### 2.8.2 Service接口
- *`eg.`实例代码：*
	``` java
	/**
		 * 
		 * <p>
		 * Title: authenticat
		 * </p>
		 * <p>
		 * Description:用户认证
		 * </p>
		 * 
		 * @param usercode
		 *            用户账号
		 * @param password
		 *            用户密码
		 * @return ActiveUser 用户身份信息
		 * @throws Exception
		 */
		public ActiveUser authenticat(String usercode, String password)
				throws Exception;
	
		// 根据账号查询用户
		public SysUser findSysuserByUsercode(String usercode) throws Exception;
	
		// 根据用户id获取权限
		public List<SysPermission> findSysPermissionList(String userid)
				throws Exception;
	
		// 根据用户id获取菜单
		public List<SysPermission> findMenuList(String userid) throws Exception;
	```

- 级联删除<br>![][13]

<br>		 
## 三、注意事项

[1]: http://p1.bqimg.com/567571/54b2418e0b075833.png
[2]: http://p1.bpimg.com/567571/ad146caef66b2cb5.png
[3]: http://p1.bpimg.com/567571/9e4db83b9e83f8a0.png
[4]: http://i1.piimg.com/567571/c39ab9132a5f4127.png 
[5]: http://p1.bpimg.com/567571/12f44b42d778b688.png
[6]: http://i1.piimg.com/567571/2bde80d6c4869e03.png
[7]: http://p1.bpimg.com/567571/40267c542c4fd55e.png
[8]: http://p1.bpimg.com/567571/5d66b324984610e1.png
[9]: http://i1.piimg.com/567571/7fec4c594acdedf5.png
[10]: http://p1.bpimg.com/567571/823f46490953b2fc.png
[11]: http://i1.piimg.com/567571/be7d7b25d9c7488d.png
[12]: http://i1.piimg.com/567571/29c8c56fe447bc1b.png
[13]: http://i1.piimg.com/567571/619c5030a8f33896.png