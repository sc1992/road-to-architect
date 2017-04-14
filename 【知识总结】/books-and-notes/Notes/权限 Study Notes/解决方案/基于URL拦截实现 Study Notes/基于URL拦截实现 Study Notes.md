# ����URL����ʵ�� Study Notes [^ history version]

@(Notes)[����URL����ʵ��, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 2017��03��18�� ����08:31:45

[TOC]

***
## ����˼ά��ͼ
- **`SUMMARY��`**

> *ע��*
> -  


## һ�����
- **`SUMMARY��`��ϵͳ������ÿ��`url`������Ȩ�ޱ��У���Ȩ�޶�Ӧ����ɫ������ɫ������û����û�����ϵͳ����ͨ��`Filter`���й��ˣ���������ȡ���û����ʵ�`url`��ֻҪ���ʵ�`url`���û������ɫ�е�`url`����м������ʡ�**
- ����`url`��������ҵ�г��õ�Ȩ�޹�������ʵ��˼·�ǣ�
	- ��ϵͳ������ÿ��`url`������Ȩ�ޱ��У���Ȩ�޶�Ӧ����ɫ������ɫ������û����û�����ϵͳ����ͨ��`Filter`���й��ˣ���������ȡ���û����ʵ�`url`��ֻҪ���ʵ�`url`���û������ɫ�е�`url`����м������ʡ�
- *`img.`����ͼ��*<br>![][7]


<br>		 
## ����ʵ��

### 2.1 ����׼��
- `jdk��1.7.0_72`��
- `web`������`tomcat7`��
- ϵͳ��ܣ�`springmvc3.2.0` + `mybatis3.2.7`��
- ǰ̨`UI`��`jquery` `easyUI1.2.2`��

### 2.2 ���ݿ�
- ���ݱ�
	- �û���
	- ��ɫ��
	- Ȩ�ޱ�
	- ��ɫȨ�޹�ϵ��
	- �û���ɫ��ϵ��
- �ű���
	- �ȵ���`shiro_sql_talbe.sql`��
	- �ٵ���`shiro-sql_table_data.sql`��

### 2.3 ActiveUser�û������
- �û���½�ɹ���¼`activeUser`��Ϣ����`activeUser`����`session`��
	
	``` java
	public class ActiveUser implements java.io.Serializable {
	
		private String userid;//�û�id
		private String usercode;// �û��˺�
		private String username;// �û�����
	
		private List<SysPermission> menus;// �˵�
		private List<SysPermission> permissions;// Ȩ��
	}
	```

### 2.4 anonymousURL.properties
- `anonymousURL.properties`�������ʵ�ַ�����������֤���ɷ��ʡ�

### 2.5 commonURL.properties
- `commonURL.properties`�������ʵ�ַ�������֤ͨ���������Ȩ�޼��ɷ��ʡ�

### 2.6 �û���֤������
- **`SUMMARY��`ʹ�����������û������֤�������أ�����û�û�е�½����ת����½ҳ�档**
- ʹ��`springmvc`���������û������֤�������أ�����û�û�е�½����ת����½ҳ�棻
- ������Ҳ����ʹ��`filter`ʵ�� ��
- *`eg.`ʵ�����룺*

	``` java
	public class LoginInterceptor implements HandlerInterceptor {
	
		// �ڽ���controller����֮ǰִ��
		// ʹ�ó��������������֤У�����أ��û�Ȩ�����أ�������ز����У�controller��������ִ��
		@Override
		public boolean preHandle(HttpServletRequest request,
				HttpServletResponse response, Object handler) throws Exception {
	
			// У���û������Ƿ��ǹ�����Դ��ַ(������֤���ɷ���)
			List<String> open_urls = ResourcesUtil.gekeyList("anonymousURL");
	
			// �û����ʵ�url
			String url = request.getRequestURI();
			for (String open_url : open_urls) {
				if (url.indexOf(open_url) >= 0) {
					// ������ʵ��ǹ��� ��ַ�����
					return true;
				}
			}
	
			// У���û�����Ƿ���֤ͨ��
			HttpSession session = request.getSession();
			ActiveUser activeUser = (ActiveUser) session.getAttribute("activeUser");
			if (activeUser != null) {
				// �û��Ѿ���½��֤������
				return true;
			}
			// ��ת����½ҳ��
			request.getRequestDispatcher("/WEB-INF/jsp/login.jsp").forward(request,
					response);
			return false;
	}
	```

### 2.7 �û���Ȩ������
- **`SUMMARY��` ʹ�����������û�����`url`�������أ�����û����ʵ�`url`û�з���Ȩ�ޣ�����ת����Ȩ������ʾҳ�档**
- ʹ��`springmvc`���������û�����`url`�������أ�����û����ʵ�`url`û�з���Ȩ������ת����Ȩ������ʾҳ�棨`refuse.jsp`����������Ҳ����ʹ��`filter`ʵ�֡�

	``` java
	public class PermissionInterceptor implements HandlerInterceptor {
	
		// �ڽ���controller����֮ǰִ��
		// ʹ�ó��������������֤У�����أ��û�Ȩ�����أ�������ز����У�controller��������ִ��
		// ����action����ǰҪִ��
		@Override
		public boolean preHandle(HttpServletRequest request,
				HttpServletResponse response, Object handler) throws Exception {
			// TODO Auto-generated method stub
			// �û����ʵ�ַ��
			String url = request.getRequestURI();
	
			// У���û������Ƿ��ǹ�����Դ��ַ(������֤���ɷ���)
			List<String> open_urls = ResourcesUtil.gekeyList("anonymousURL");
			// �û����ʵ�url
			for (String open_url : open_urls) {
				if (url.indexOf(open_url) >= 0) {
					// ������ʵ��ǹ��� ��ַ�����
					return true;
				}
			}
			//�� session��ȡ�û��������ʵ�ַ����֤ͨ���������Ȩ�޼��ɷ��ʣ�
			List<String> common_urls = ResourcesUtil.gekeyList("commonURL");
			// �û����ʵ�url
			for (String common_url : common_urls) {
				if (url.indexOf(common_url) >= 0) {
					// ������ʵ��ǹ�����ַ�����
					return true;
				}
			}
			// ��session��ȡ�û�Ȩ����Ϣ
	
			HttpSession session = request.getSession();
	
			ActiveUser activeUser = (ActiveUser) session.getAttribute("activeUser");
	
			// ȡ��session��Ȩ��url
			// ��ȡ�û�����Ȩ��
			List<SysPermission> permission_list = activeUser.getPermissions();
			// У���û����ʵ�ַ�Ƿ����û�Ȩ�޷�Χ��
			for (SysPermission sysPermission : permission_list) {
				String permission_url = sysPermission.getUrl();
				if (url.contains(permission_url)) {
					return true;
				}
			}
	
			// ��ת��ҳ��
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
### 2.8 �û���¼
- **`SUMMARY��` �û������û��˺ź������½����½�ɹ����û��������Ϣ���û��˺š����롢Ȩ�޲˵���Ȩ��`url`�ȣ�����`activeUser`�࣬��д��`session`��**
- �û������û��˺ź������½����½�ɹ����û��������Ϣ���û��˺š����롢Ȩ�޲˵���Ȩ��`url`�ȣ�����`activeUser`�࣬��д��`session`��

#### 2.8.1 Controller
- *`eg.`ʵ�����룺*
	```
		// �û���½�ύ
		@RequestMapping("/loginsubmit")
		public String loginsubmit(HttpSession session,String usercode,String password,String randomcode) throws Exception{
	
			// У����֤��
			// ��session��ȡ��ȷ����֤��
			String validateCode = (String)session.getAttribute("validateCode");
			if(!randomcode.equals(validateCode)){
				// �׳��쳣����֤�����
				throw new CustomException("��֤����� ��");
			}
			// �û������֤
			ActiveUser activeUser = sysService.authenticat(usercode, password);
			
			// ��¼session��ʵ��Ӧ����session��keyֵ����������Ӧ�˺�Ψһ��
			session.setAttribute("activeUser", activeUser);
			
			return "redirect:first.action";
		}
	```

#### 2.8.2 Service�ӿ�
- *`eg.`ʵ�����룺*
	``` java
	/**
		 * 
		 * <p>
		 * Title: authenticat
		 * </p>
		 * <p>
		 * Description:�û���֤
		 * </p>
		 * 
		 * @param usercode
		 *            �û��˺�
		 * @param password
		 *            �û�����
		 * @return ActiveUser �û������Ϣ
		 * @throws Exception
		 */
		public ActiveUser authenticat(String usercode, String password)
				throws Exception;
	
		// �����˺Ų�ѯ�û�
		public SysUser findSysuserByUsercode(String usercode) throws Exception;
	
		// �����û�id��ȡȨ��
		public List<SysPermission> findSysPermissionList(String userid)
				throws Exception;
	
		// �����û�id��ȡ�˵�
		public List<SysPermission> findMenuList(String userid) throws Exception;
	```

- ����ɾ��<br>![][13]

<br>		 
## ����ע������

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