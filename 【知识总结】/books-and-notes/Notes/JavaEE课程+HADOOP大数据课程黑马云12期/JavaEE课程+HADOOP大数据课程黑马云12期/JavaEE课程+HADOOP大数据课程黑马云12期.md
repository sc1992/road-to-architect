## JavaEE课程+HADOOP大数据课程黑马云12期 [^ history version][^ 参考SSM]
--- *Markdown Version，详情参考各节课程笔记*

@(Notes)[JavaEE, 大数据, Notes, Markdown]

> VICTORY LOVES PREPARATION.

[^ history version]: 
- 版本时间信息<br>
- 2016年12月21日 11:06<br>
- 2016年12月05日 09:50

[^ 参考SSM]: [项目SSM][48]（部分知识代码已经整理到SSM）

[TOC]

***

### 〇、思维导图
- 一般标准，参考《Study Notes Contents Format Criteria》；

<br>
### 一、Day48_电力系统框架搭建
#### - 泛型转换
- `SUMMARY：`代码简约之道
- 方法封装使用，实际项目中因为增删改查都是基本操作，所以可以利用Java的封装特性组装成公共类和接口，然后通过继承和多态进行调用

#### - 使用Maven划分开发、测试和生产环境 【Need To 深化 Maven Study Notes】
- `SUMMARY：`方便不同环境的部署
- 配置参考

	``` xml
	<profiles>
        <profile>
            <id>test</id>
            <properties>
                <runtime.env>src/main/resources/test</runtime.env>
                <final.name>test</final.name>
            </properties>
        </profile>
        <profile>
            <id>dev</id>
            <activation>
                <activeByDefault>true</activeByDefault>
            </activation>
            <properties>
                <runtime.env>src/main/resources/dev</runtime.env>
                <final.name>dev</final.name>
            </properties>
        </profile>
        <profile>
            <id>production</id>
            <properties>
                <runtime.env>src/main/resources/production</runtime.env>
                <final.name>production</final.name>
            </properties>
        </profile>
    </profiles>
	```

<br>
### 二、Day49_运行监控、CK插件整合、进度条
#### - Jquery-ZTree
- `SUMMARY：`树结构菜单插件
- 树插件，常用于菜单列表

> *注意*
> - 这部分偏向于前端，用到的时候再进行集成。

#### - 运行监控
- `SUMMARY：`定时任务
- 使用`Spring Quartz` | `Spring Task`| `JavaSE Timer` | `JavaSE Thread`
- 业务问题
	- 站点实时运行情况数据越累越多问题，可以只关注一定时间内的数据，其他数据定时删除或进行转储
	- 如果表格中的内容过多（此时表格的大小和内容无关，即表格大小固定），显示不全，此时可以通过鼠标移动到内容上显示更多内容
- *`eg`.*定时任务代码`Demo`：
	``` java
	package com.cmc.utils;

	import java.util.Date;
	import java.util.Timer;
	import java.util.TimerTask;

	/**
	 * 定时任务工具类
	 * 
	 * @author HT.LCB
	 * @since 2016年12月19日 上午10:24:26
	 */
	public class TaskUtil {

	    /** 线程间隔时间1000ms */
	    public static final long THREAD_INTERNAL_TIME = 1000;
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> JavaSE Thread Start<<<<<<<<<<<<<<<<<<<<<<<<<< */
	
	    public static void JavaSEThread() {
	        Thread myThread = new Thread(new TaskUtil().new MyRunner());
	        myThread.start();
	    }
	
	    class MyRunner implements Runnable {
	
	        public void run() {
	            try {
	                while (true) {
	                    System.out.println("Hello~");
	                    Thread.sleep(THREAD_INTERNAL_TIME);
	                }
	            } catch (InterruptedException e) {
	                e.printStackTrace();
	            }
	        }
	    }
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> JavaSE Thread End<<<<<<<<<<<<<<<<<<<<<<<<<< */
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> JavaSE Timer Start<<<<<<<<<<<<<<<<<<<<<<<<<< */
	
	    // http://batitan.iteye.com/blog/253483 
	    public static void JavaSETimer() {
	        Timer timer = new Timer();
	        TimerTask timerTask = new TimerTask() {
	            public void run() {
	                System.out.println("Hello~");
	            }
	        };
	        timer.schedule(timerTask, new Date(), THREAD_INTERNAL_TIME);
	    }
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> JavaSE Timer End<<<<<<<<<<<<<<<<<<<<<<<<<< */
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> Spring Task Start<<<<<<<<<<<<<<<<<<<<<<<<<< */
	
	    // 参考Task类
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> Spring Task End<<<<<<<<<<<<<<<<<<<<<<<<<< */
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> Spring Quartz Start<<<<<<<<<<<<<<<<<<<<<<<<<< */
	
	    // 暂时不集成
	
	    /* >>>>>>>>>>>>>>>>>>>>>>>>>> Spring Quartz End<<<<<<<<<<<<<<<<<<<<<<<<<< */
	}
	```
	``` xml
    <!-- 启用 Spring Task -->
	<task:annotation-driven /> 
	<context:component-scan base-package="com.cmc.service.task" /> 
    ```
    ``` java
    package com.cmc.service.task;

	import org.apache.log4j.Logger;
	import org.springframework.scheduling.annotation.Scheduled;
	import org.springframework.stereotype.Service;
	
	/**
	 * 定时任务
	 * 
	 * Spring Task
	 * 
	 * @author HT.LCB
	 * @since 2016年12月19日 下午1:31:23
	 */
	@Service
	public class Task {
	
	    private static final Logger LOG = Logger.getLogger(Task.class);
	
	    @Scheduled(cron = "* * * * * ?")
	    public void sayHi() {
	        LOG.debug("inside task ===>");
	        System.out.println("Hi~");
	    }
	
	}
    ```
    
#### - 富文本编辑器
- `SUMMARY：`支持富文本（基本的`Microsoft Office Word`样式的文本。简而言之，富文本就是不仅仅是单纯的文字，还包含了文字相关的样式）编辑
- 含义
	- （`Rich Text Format`）即RTF格式，又称多文本格式，是由微软公司开发的跨平台文档格式。
- 使用`CKEditor`|`FCKEditor`

> *注意*
> - 这部分偏向于前端，用到的时候在进行集成。

#### - 项目中使用文本编辑器，数据库字段过长问题解决方案
- `SUMMARY：`项目中大文本字段处理方法
- 大文本字段`BOLB`（`Binary Large Object`）、`CLOB`（`Character Large Object`）（流）（具体实现）
- 截串存取（设计理念），放到一个专门用于截串的表格中

> *注意*
> - 不同的数据库都会有`BOLB`和`CLOB`，但是名称可能不同。eg. `MySQL`数据库中`BLOB`还是`BLOB`，但是`CLOB`为`TEXT`。

#### - JS进度条
- `SUMMARY：`用于显示业务功能进度
- 应用场景
	- 文件上传、下载
	- 数据的导入、导出
	- 大批量数据的CRUD
	- 远程数据访问
	
> *注意*
> - 这部分偏向于前端，用到的时候在进行集成；
> - 进度条是用于显示业务功能进度的，但是如果不需要显示进度，可以使用前端等待层。

<br>
### 三、Day50_数据字典[^ 数据字典 reference]
#### - 数据字典表结构
- `SUMMARY：`基本维护下面几个属性和字段。
- 主键
- 数据类型
- 数据项的值
- 数据项的编号

#### - 数据字典作用
- `SUMMARY：`对数据进行定义和描述。对数据的数据项、数据结构、数据流、数据存储、处理逻辑、外部实体等进行定义和描述，其目的是对数据流程图中的各个元素做出详细的说明。
- 贯穿系统的所有数据项，在开发过程中，动态地维护系统数据项
- 保障数据的安全
- 方便数据统计

#### - 实例
- *`eg.`*数据字典简单实例：
- ![实例][2]
- 数据项的编号是为了保证数据的安全（业务操作中使用的都是编号，而不是实际代表的含义）

#### - 数据字典操作的特点
- 数据类型、数据项的编号和数据项的值不能为空
- 数据类型一致的情况下，数据项的编号和数据项的值不能重复
- 数据项的编号为了方便排序，应该采用integer类型

#### - `SessionFactory`替代`hibernate.cfg.xml`配置
- `SUMMARY：`
- ![实例][3]
- 可在`sessionFactory`中直接配置`Hibernate`的其他属性，省略`hibernate.cfg.xml`文件

[^ 数据字典 reference]: [百度百科][49]

<br>
### 四、Day51_用户管理
#### - 文件下载
- `SUMMARY：`下载也就是对应`servlet`的响应（`response`），所以只要设置响应即可。
- `JavaWeb`形式，亦即`Servlet`
	- `HttpServletResponse`中设置`header`的参数`content-disposition`[^ http header content-disposition reference]
	- 文件需要点击下载，而不是通过浏览器“下载”，所以要把文件形式的输出流写在response里面返回
	- *`eg.`* `servlet`文件下载实例：
		``` java
		package com.cmc.web.user;

		import java.io.ByteArrayOutputStream;
		import java.io.IOException;
		
		import javax.servlet.ServletOutputStream;
		import javax.servlet.http.HttpServletResponse;
		
		import org.springframework.stereotype.Controller;
		import org.springframework.web.bind.annotation.RequestMapping;
		import org.springframework.web.bind.annotation.RequestMethod;
		
		import com.cmc.utils.ExcelUtil;
		
		/**
		 * 公共控制器
		 * 
		 * <p>存放控制器用到的公共部分.
		 * 
		 * @author Thomas Lee
		 * @since 2016年11月20日 下午8:12:08
		 */
		@Controller
		@RequestMapping(value = "/common")
		public class CommonController {
		
		    /**
		     * 文件下载
		     * 
		     * @author Thomas Lee
		     * @since 2016年12月21日 下午2:40:00
		     */
		    @RequestMapping(value = "downloadfile.htm", method = RequestMethod.POST)
		    public void downloadFile(HttpServletResponse res) throws IOException {
		        String[][] data = new String[3][3];
		        data[0][0] = "name";
		        data[0][1] = "sex";
		        data[0][2] = "age";
		        for (int x = 1; x < 3; x++) {
		            for (int y = 0; y < 3; y++) {
		                data[x][y] = String.valueOf(x * y);
		            }
		        }
		        ByteArrayOutputStream byteArrayOutputStream = ExcelUtil.create(data);
		
		        ServletOutputStream servletOutputStream = res.getOutputStream();
		
		        res.reset();
		        // 若类型为“attachment”，则是以附件的形式进行下载，若类型为“inline”，则系统会使用对应格式的默认程序打开文件
		        res.addHeader("Content-Disposition", "attachment;filename=statistics.xls");
		        res.addHeader("Content-Length", "");
		        res.setContentType("application/octet-stream");
		        servletOutputStream.write(byteArrayOutputStream.toByteArray());
		        servletOutputStream.flush();
		        servletOutputStream.close();
		        byteArrayOutputStream.close();
		    }
		
		}
		```
- `Web`框架形式
	- `Struts2`框架`com.struts2.filedownload.FileDownload`
	- `Spring MVC`暂时没发现框架提供的下载类，一般直接通过`Servlet`形式进行下载

[^ http header content-disposition reference]: [HttpServletResponse Header Content-Disposition Reference](http://www.ietf.org/rfc/rfc1806.txt)

<br>
### 五、Day52_角色管理
#### - 数据库false|true数据类型
- `SUMMARY：`数据库支持布尔类型存储，存储形式为`1`和`0`。
-
> *注意*
> - `MySQL`数据库`1`代表`true`，`0`和非数字代表`false`，非`1`或者`0`数字既不是`true`也不是`false`。

#### - 角色实例
- `SUMMARY：`
- ![角色实例][5]
- 用户不直接和权限挂钩，而是通过角色进行过度，因为实际使用中权限可能很多，如果新建一个用户就要绑定很多权限，比较麻烦，一个用户的权限不会经常变动，所以就把不同用户的权限封装成“角色”，这样就实现复用
- 角色实际上就是权限的封装（集合）

#### - 表格设计
- `SUMMARY：`关系表（存储业务实体之间如一对一、一对多等关系的表）的建立关键点在于不能增加业务表（排除了关系表）中的记录，如一对多关系中，需要在“多”方新增“一”方的主键，构成其外键。
- 设计原理
	- 尽量少的冗余
	- 多对多关系，建立有一张关系表
	- 一对一关系，一个表中添加另一个表的主键
	- 一对多关系，“多”方添加“一”方的主键
- 用户表
- 角色表![][6]
- 权限表![][8] ![][7] 
- 用户角色关联表
- 角色权限关联表 ![][9]

#### - 数据校验
- `SUMMARY：`为了数据的安全性、完整性等进行的判断，常见的如**空值校验**。
- 分类（按照前后端划分）
	- 后台校验
		- 后台直接校验
		- Ajax校验
	- 前台校验
		- JS校验
	- 校验原则
		- 数据不是很重要的时候，可以只使用前台校验；数据比较重要的时候，既要做前台校验，也要做后台校验![][10]
- 实例

	``` java
	// 数据校验：后台校验
	Args.check(StringUtils.isNotEmpty(dto.getName()), "用户姓名");
	```
	
	``` java
	/**
     * 数据校验：后端（通过AJAX）间接校验
     * 
     * @author Thomas Lee
     * @since 2016年12月22日 上午10:16:56
     */
    @ResponseBody
    @RequestMapping(method = RequestMethod.POST, params = "action=existstheuser")
    public AjaxGeneralResult existsTheUser(String userId) {

        /* business logic is omitted. */

        return new Random().nextBoolean() ? AjaxGeneralResult.getSuccessRst() : AjaxGeneralResult.getFailureRst();
    }
```
	
	``` javascript
	/**
	 * 数据校验：前端校验
	 * 
	 * @author Thomas Lee
	 * @since 2016年12月22日 上午10:23:26
	 */
	function existsTheUser() {
		var name = $("#name").val();
		if ('' == name) {
			alert("前填写用户姓名！");
			return false;
		}
	}
	```
	

<br>
### 六、Day53_ztree动态生成&权限控制
#### - 验证码
- `SUMMARY：`
- ![][11]
- ![][15]
- 实例
	``` java
	package com.cmc.utils;

	import java.util.Random;
	
	/**
	 * 验证码工具
	 * 
	 * <p>目前只提供两种验证码生成方式，有需要继续迭代。
	 * 
	 * @author Thomas Lee
	 * @since 2016年12月28日 上午11:48:02
	 */
	public class CaptchaUtil {
	
	    /** 验证码字符集（大写小字母 + 数字） */
	    private static final char[] CAPTCHA_SETS = { 
	        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
	        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
	        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
	        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 
	        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' };
	
	    /**
	     * 获取位数为四的数字验证码
	     * 
	     * @author Thomas Lee
	     * @since 2016年12月28日 上午11:51:21
	     */
	    public static String get4Digits() {
	        String rst = "";
	        Random random = new Random();
	        for (int i = 0; i < 4; i++) {
	            rst += random.nextInt(10);
	        }
	        return rst;
	    }
	
	    /**
	     * 获取位数为四的数字和字母验证码
	     * 
	     * @author Thomas Lee
	     * @since 2016年12月28日 下午3:31:30
	     */
	    public static String get4DigitsAndLetters() {
	        String rst = "";
	        Random random = new Random();
	        for (int i = 0; i < 4; i++) {
	            rst += CAPTCHA_SETS[random.nextInt(62)];
	        }
	        return rst;
	    }
	
	    public static void main(String[] args) {
	    }
	
	}
	```



#### - 记住我
- `SUMMARY：`
- ![][12]
- ![][14]
- 处理中文
- 代码
	
	``` java
	/**
     * 普通“记住我”功能
     * 
     * @author Thomas Lee
     * @since 2016年12月28日 下午3:52:41
     */
    @ResponseBody
    @RequestMapping(value = "rememberme.htm", method = RequestMethod.POST)
    public AjaxGeneralResult rememberMe(HttpServletRequest req, HttpServletResponse res) {
        try {
            String username = req.getParameter("username");
            String password = req.getParameter("password");
            String rememberMeEnum = req.getParameter("rememberMeEnum");

            RememberMe rememberMe = RememberMe.parseCode(rememberMeEnum);
            if (null == rememberMe) {
                LOG.error("记住我功能的枚举数值超出范围！");
                return AjaxGeneralResult.getFailureRst();
            }

            Cookie cUsername = new Cookie("username", username);
            Cookie cPassword = new Cookie("password", password);
            if (RememberMe.YES.equals(rememberMe)) {
                cUsername.setMaxAge(COOKIE_MAX_AGE);
                cPassword.setMaxAge(COOKIE_MAX_AGE);
                cUsername.setPath(req.getContextPath() + "/");
                cPassword.setPath(req.getContextPath() + "/");
            } else {
                cUsername.setMaxAge(-1);
                cPassword.setMaxAge(-1);
            }
            res.addCookie(cUsername);
            res.addCookie(cPassword);

            return AjaxGeneralResult.getSuccessRst();
        } catch (Exception e) {
            LOG.error("", e);
            return AjaxGeneralResult.getFailureRst();
        }
    }
	```

#### - 细颗粒权限控制
- `SUMMARY：`
- ![][16]
- ![][17]
- 根据用户角色限定用户访问
- 细颗粒度权限控制（使用拦截器，控制URL）

#### - 粗颗粒度权限控制（使用过滤器，控制session，使用代理）
- `SUMMARY：`

#### - 使用拦截器添加异常处理和日志备份
- `SUMMARY：`

<br>
### 七、Day54_项目webservice改造&报表导出基础
#### - 需求实例
- `SUMMARY：`
- ![][18] 
- ![][19]
- 因为现在使用`Spring Framework`提供服务端的API（伪`webservice`），暂时不使用`webservice`，所以此部分的相关视频暂时不学。

<br>
### 八、Day55_Lucene在检索中的应用
#### - 学习内容结构图
- `SUMMARY：`
- ![][20]

#### - 使用Lucene业务需求
- `SUMMARY：`
- ![][21]

#### - Lucene相关包
- `SUMMARY：`
- ![][22]

#### - Lucene原理图
- `SUMMARY：`
- ![][23]
- ![][24]

#### - Lucene开发原理图
- `SUMMARY：`
- ![][25]
- ![][26]
- ![][27]
- ![][28]
- ![][29]
- ![][30]
- ![][31]
- ![][32]
- ![][33]
- ![][34]
- ![][35]
- ![][36]


#### - 高亮器
- `SUMMARY：`

#### - 参考视频
- `SUMMARY：`

#### - 删除索引
- `SUMMARY：`

<br>
### 九、Day56_POI导出JXL导入
#### - 需求实例
- `SUMMARY：`
- ![][37]
- 代码实例

	``` java
		package com.cmc.utils;
	
	import java.io.ByteArrayOutputStream;
	import java.io.File;
	import java.io.IOException;
	import java.util.ArrayList;
	import java.util.List;
	
	import jxl.Sheet;
	import jxl.Workbook;
	import jxl.read.biff.BiffException;
	
	import org.apache.poi.hssf.usermodel.HSSFCellStyle;
	import org.apache.poi.hssf.usermodel.HSSFFont;
	import org.apache.poi.hssf.usermodel.HSSFRow;
	import org.apache.poi.hssf.usermodel.HSSFSheet;
	import org.apache.poi.hssf.usermodel.HSSFWorkbook;
	import org.apache.poi.hssf.util.HSSFColor;
	
	import com.cmc.model.user.User;
	
	/**
	 * Microsoft Office Excel Utilities
	 * 
	 * <p>有待全部使用POI替换JXL
	 * 
	 * @author Thomas Lee
	 * @since 2016年11月20日 下午8:09:35
	 */
	public class ExcelUtil {
	
	    /**
	     * 导出（POI）
	     * 
	     * @param data   传入的字符串二维数组
	     * @return
	     */
	    public static ByteArrayOutputStream create(String[][] data) {
	        HSSFWorkbook workbook = new HSSFWorkbook();
	        HSSFSheet sheet = workbook.createSheet("统计表");
	        HSSFCellStyle cellStyle = workbook.createCellStyle();
	
	        HSSFFont font = workbook.createFont();
	        font.setColor(HSSFColor.BLUE.index);
	        cellStyle.setFont(font);
	        cellStyle.setWrapText(true);
	        cellStyle.setFillPattern(HSSFCellStyle.SOLID_FOREGROUND);
	        cellStyle.setIndention((short) 10);
	        cellStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);
	        cellStyle.setVerticalAlignment(HSSFCellStyle.VERTICAL_CENTER);
	        cellStyle.setBorderLeft((short) 10);
	
	        for (int x = 0; x < data.length; x++) {
	            HSSFRow row = sheet.createRow(x);
	            for (int y = 0; y < data[x].length; y++) {
	                row.createCell(y).setCellValue(data[x][y]);
	            }
	        }
	        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
	        try {
	            workbook.write(byteArrayOutputStream);
	        } catch (IOException e) {
	            e.printStackTrace();
	        } finally {
	            try {
	                workbook.close();
	            } catch (IOException e) {
	                e.printStackTrace();
	            }
	        }
	        return byteArrayOutputStream;
	    }
	
	    /**
	     * 导入
	     * 
	     * @param file
	     * @return
	     */
	    public static List<User> read(File file) {
	        List<User> users = new ArrayList<User>();
	        Workbook book = null;
	        try {
	            book = Workbook.getWorkbook(file);
	        } catch (BiffException | IOException e) {
	            e.printStackTrace();
	            return null;
	        }
	        Sheet sheet = book.getSheet(0);
	        for (int x = 0; x < sheet.getRows(); x++) {
	            User user = new User();
	            user.setName(sheet.getCell(0, x).getContents());
	            user.setSex(sheet.getCell(1, x).getContents());
	            users.add(user);
	        }
	        book.close();
	        return users;
	    }
	
	}
	```

#### - 核心类
- `SUMMARY：`
- ![][38]

#### - 注意点
- `SUMMARY：`
- ![][40]
- POI和JXL都可以导入和导出，但是JXL（貌似是韩国人开发的）操作导入比较容易

<br>
### 十、Day57_项目分析
#### - [JFreeChart][41]  [^ JFreeChart Reference]
- `SUMMARY：`是`JAVA`平台上的一个开放的图表绘制类库。
- `JFreeChart`是`JAVA`平台上的一个开放的图表绘制类库。它完全使用JAVA语言编写，是为`applications`, `applets`, `servlets` 以及`JSP`等使用所设计。`JFreeChart`可生成饼图（`pie charts`）、柱状图（`bar charts`）、散点图（`scatter plots`）、时序图（`time series`）、甘特图（`Gantt charts`）等多种图表，并且可以产生`PNG`和`JPEG`格式的输出，还可以与`PDF`和`EXCEL`关联。
- DEMO
	- JFreeChart**Demo**.jar(打开Jar文件，右键通过java打开，或者java -jar file)，里面有DEMO![][43]
	- 具体代码有待整合到SSM项目中，然后再次进行文档归纳；
	- 代码实例
	
	``` java
	package com.cmc.utils;

	import java.awt.Font;
	
	import org.jfree.chart.ChartFactory;
	import org.jfree.chart.ChartFrame;
	import org.jfree.chart.JFreeChart;
	import org.jfree.chart.StandardChartTheme;
	import org.jfree.chart.axis.CategoryAxis;
	import org.jfree.chart.axis.DateAxis;
	import org.jfree.chart.axis.DateTickUnit;
	import org.jfree.chart.labels.ItemLabelAnchor;
	import org.jfree.chart.labels.ItemLabelPosition;
	import org.jfree.chart.labels.StandardXYItemLabelGenerator;
	import org.jfree.chart.plot.CategoryPlot;
	import org.jfree.chart.plot.PlotOrientation;
	import org.jfree.chart.plot.XYPlot;
	import org.jfree.chart.renderer.xy.XYItemRenderer;
	import org.jfree.chart.renderer.xy.XYLineAndShapeRenderer;
	import org.jfree.chart.title.TextTitle;
	import org.jfree.data.category.DefaultCategoryDataset;
	import org.jfree.data.general.DefaultPieDataset;
	import org.jfree.data.time.Month;
	import org.jfree.data.time.TimeSeries;
	import org.jfree.data.time.TimeSeriesCollection;
	import org.jfree.ui.TextAnchor;
	
	/**
	 * JFreeChart 工具类
	 * 
	 * @author Thomas Lee
	 * @since 2016年12月28日 下午5:22:11
	 */
	public class JFreeChartUtil {
	
	    public static void createPieChart() {
	        DefaultPieDataset dpd = new DefaultPieDataset(); //建立一个默认的饼图
	        dpd.setValue("管理人员", 25); //输入数据
	        dpd.setValue("市场人员", 25);
	        dpd.setValue("开发人员", 45);
	        dpd.setValue("其他人员", 10);
	
	        // 创建主题样式
	        StandardChartTheme standardChartTheme = new StandardChartTheme("CN");
	        // 设置标题字体
	        standardChartTheme.setExtraLargeFont(new Font("隶书", Font.BOLD, 20));
	        // 设置图例的字体
	        standardChartTheme.setRegularFont(new Font("宋书", Font.PLAIN, 15));
	        // 设置轴向的字体
	        standardChartTheme.setLargeFont(new Font("宋书", Font.PLAIN, 15));
	        // 应用主题样式
	        ChartFactory.setChartTheme(standardChartTheme);
	
	        JFreeChart chart = ChartFactory.createPieChart("某公司人员组织数据图", dpd, true, true, false);
	        // 可以查具体的API文档,第一个参数是标题，第二个参数是一个数据集，第三个参数表示是否显示Legend，第四个参数表示是否显示提示，第五个参数表示图中是否存在URL
	
	        ChartFrame chartFrame = new ChartFrame("某公司人员组织数据图", chart);
	        // chart要放在Java容器组件中，ChartFrame继承自java的JFrame类。该第一个参数的数据是放在窗口左上角的，不是正中间的标题。
	        chartFrame.pack(); //以合适的大小展现图形
	        chartFrame.setVisible(true);//图形是否可见
	    }
	
	    public static void createBarChart() {
	        DefaultCategoryDataset dataset = new DefaultCategoryDataset();
	        dataset.setValue(10, "a", "管理人员");
	        dataset.setValue(20, "b", "市场人员");
	        dataset.setValue(40, "c", "开发人员");
	        dataset.setValue(15, "d", "其他人员");
	
	        // 创建主题样式
	        StandardChartTheme standardChartTheme = new StandardChartTheme("CN");
	        // 设置标题字体
	        standardChartTheme.setExtraLargeFont(new Font("隶书", Font.BOLD, 20));
	        // 设置图例的字体
	        standardChartTheme.setRegularFont(new Font("宋书", Font.PLAIN, 15));
	        // 设置轴向的字体
	        standardChartTheme.setLargeFont(new Font("宋书", Font.PLAIN, 15));
	        // 应用主题样式
	        ChartFactory.setChartTheme(standardChartTheme);
	        JFreeChart chart = ChartFactory.createBarChart("hi", "人员分布", "人员数量", dataset, PlotOrientation.VERTICAL, true, true, false); //创建一个JFreeChart
	        chart.setTitle(new TextTitle("某公司组织结构图", new Font("宋体", Font.BOLD + Font.ITALIC, 20)));//可以重新设置标题，替换“hi”标题
	        CategoryPlot plot = (CategoryPlot) chart.getPlot();//获得图标中间部分，即plot
	        CategoryAxis categoryAxis = plot.getDomainAxis();//获得横坐标
	        categoryAxis.setLabelFont(new Font("微软雅黑", Font.BOLD, 12));//设置横坐标字体
	
	        ChartFrame chartFrame = new ChartFrame("某公司人员组织数据图", chart);
	        // chart要放在Java容器组件中，ChartFrame继承自java的JFrame类。该第一个参数的数据是放在窗口左上角的，不是正中间的标题。
	        chartFrame.pack(); //以合适的大小展现图形
	        chartFrame.setVisible(true);//图形是否可见
	    }
	
	    public static void createLineChart() {
	        // A网站的访问量统计  
	        TimeSeries timeSeries = new TimeSeries("A网站访问量统计", Month.class);
	        // 添加数据  如果你是从数据库中获取数据，你就写个循环塞值就行了。  
	        timeSeries.add(new Month(1, 2013), 100);
	        timeSeries.add(new Month(2, 2013), 200);
	        timeSeries.add(new Month(3, 2013), 300);
	        timeSeries.add(new Month(4, 2013), 400);
	        timeSeries.add(new Month(5, 2013), 560);
	        timeSeries.add(new Month(6, 2013), 600);
	        timeSeries.add(new Month(7, 2013), 750);
	        timeSeries.add(new Month(8, 2013), 890);
	        timeSeries.add(new Month(9, 2013), 120);
	        timeSeries.add(new Month(10, 2013), 400);
	        timeSeries.add(new Month(11, 2013), 1200);
	        timeSeries.add(new Month(12, 2013), 1600);
	
	        // B网站的访问量统计  
	        //如果有更多的就继续添加就行了  
	        TimeSeries timeSeries2 = new TimeSeries("B网站访问量统计", Month.class);
	        // 添加数据  
	        timeSeries2.add(new Month(1, 2013), 50);
	        timeSeries2.add(new Month(2, 2013), 100);
	        timeSeries2.add(new Month(3, 2013), 150);
	        timeSeries2.add(new Month(4, 2013), 200);
	        timeSeries2.add(new Month(5, 2013), 220);
	        timeSeries2.add(new Month(6, 2013), 300);
	        timeSeries2.add(new Month(7, 2013), 340);
	        timeSeries2.add(new Month(8, 2013), 400);
	        timeSeries2.add(new Month(9, 2013), 450);
	        timeSeries2.add(new Month(10, 2013), 500);
	        timeSeries2.add(new Month(11, 2013), 70);
	        timeSeries2.add(new Month(12, 2013), 800);
	
	        // 定义时间序列的集合  
	        TimeSeriesCollection lineDataset = new TimeSeriesCollection();
	        lineDataset.addSeries(timeSeries);
	        lineDataset.addSeries(timeSeries2);
	
	        // 创建主题样式
	        StandardChartTheme standardChartTheme = new StandardChartTheme("CN");
	        // 设置标题字体
	        standardChartTheme.setExtraLargeFont(new Font("隶书", Font.BOLD, 20));
	        // 设置图例的字体
	        standardChartTheme.setRegularFont(new Font("宋书", Font.PLAIN, 15));
	        // 设置轴向的字体
	        standardChartTheme.setLargeFont(new Font("宋书", Font.PLAIN, 15));
	        // 应用主题样式
	        ChartFactory.setChartTheme(standardChartTheme);
	        JFreeChart chart = ChartFactory.createTimeSeriesChart("访问量统计时间折线图", "月份", "访问量", lineDataset, true, true, true);
	
	        //设置主标题  
	        chart.setTitle(new TextTitle("A,B网站访问量统计对比图", new Font("隶书", Font.ITALIC, 15)));
	        //设置子标题  
	        TextTitle subtitle = new TextTitle("2016年度", new Font("黑体", Font.BOLD, 12));
	        chart.addSubtitle(subtitle);
	        chart.setAntiAlias(true);
	
	        //设置时间轴的范围。  
	        XYPlot plot = (XYPlot) chart.getPlot();
	        DateAxis dateaxis = (DateAxis) plot.getDomainAxis();
	        dateaxis.setDateFormatOverride(new java.text.SimpleDateFormat("M月"));
	        dateaxis.setTickUnit(new DateTickUnit(DateTickUnit.MONTH, 1));
	
	        //设置曲线是否显示数据点  
	        XYLineAndShapeRenderer xylinerenderer = (XYLineAndShapeRenderer) plot.getRenderer();
	        xylinerenderer.setBaseShapesVisible(true);
	
	        //设置曲线显示各数据点的值  
	        XYItemRenderer xyitem = plot.getRenderer();
	        xyitem.setBaseItemLabelsVisible(true);
	        xyitem.setBasePositiveItemLabelPosition(new ItemLabelPosition(ItemLabelAnchor.OUTSIDE12, TextAnchor.BASELINE_CENTER));
	        xyitem.setBaseItemLabelGenerator(new StandardXYItemLabelGenerator());
	        xyitem.setBaseItemLabelFont(new Font("Dialog", 1, 12));
	        plot.setRenderer(xyitem);
	
	        ChartFrame chartFrame = new ChartFrame("某公司人员组织数据图", chart);
	        // chart要放在Java容器组件中，ChartFrame继承自java的JFrame类。该第一个参数的数据是放在窗口左上角的，不是正中间的标题。
	        chartFrame.pack(); //以合适的大小展现图形
	        chartFrame.setVisible(true);//图形是否可见
	    }
	
	    public static void main(String[] args) {
	        createLineChart();
	    }
	
	}
	```
	
- 整合具体项目策略
	- 使用JFreeChart整合具体项目策略：把形成的chart转化为图片，然后页面进行引用。

- 注意
	- 可以使用反编译工具，反编译DEMO，然后直接使用。

[^ JFreeChart Reference]: [百度百科][42]

#### - [FCF报表][46]
- `SUMMARY：`
- ![][44]
- 实例![][45]

#### - 电力系统项目开发流程说明
- `SUMMARY：`
- ![][47]
- 需要的话到时候就可以直接参考一下
- 项目中最重要的一步是项目设计，而不是编码

#### - 数据库设计（源数据）
- `SUMMARY：`
- 数据库设计实例，需要可以参考。

#### - 电力系统项目开发流程说明（设计+测试+发布+维护+验收）
- `SUMMARY：`
- 设计思想（做这个东西，用到什么，如果知道具体怎么用更好了），比单纯的编程好（薪水，前途）多了

#### - 注意
- 参考“电力系统技术总结笔记（10天）”文档

<br>
### X、注意事项

[1]: https://github.com/CountMCristo/SSM
[2]: http://i1.piimg.com/567571/d6d8fd7f3eb9da60.png
[3]: http://i1.piimg.com/567571/dffe578d841af9a3.png
[4]: http://p1.bpimg.com/567571/3aa43dd150d5c25b.png
[5]: http://p1.bqimg.com/567571/c7c12346e87f640d.png
[6]: http://p1.bpimg.com/567571/5ae98857d0f8d029.png
[7]: http://p1.bpimg.com/567571/2d87a4b906871f25.png
[8]: http://p1.bpimg.com/567571/f263a7c55d50e140.png
[9]: http://p1.bpimg.com/567571/f7648146f72f4694.png
[10]: http://p1.bpimg.com/567571/0a5cb4d4b988c754.png
[11]: http://p1.bpimg.com/567571/9145afb22ce3a8fe.png
[12]: http://p1.bpimg.com/567571/abb16b0bb1969d16.png
[13]: http://p1.bpimg.com/567571/d6721cba8e0d18d9.png
[14]: http://p1.bqimg.com/567571/0979649a1598b7a9.png
[15]: http://p1.bqimg.com/567571/8e29a450ce108bde.png
[16]: http://p1.bqimg.com/567571/52bc4198d23bc2d9.png
[17]: http://p1.bqimg.com/567571/94fc753894104c93.png
[18]: http://p1.bqimg.com/567571/646749262b9f8132.png
[19]: http://p1.bqimg.com/567571/94fe40510776d3e0.png
[20]: http://p1.bqimg.com/567571/ebcb4ebd9bdc0ca7.png
[21]: http://i1.piimg.com/567571/a4b5476f0f9d5384.png
[22]: http://i1.piimg.com/567571/e0656cd2d19aef54.png
[23]: http://i1.piimg.com/567571/8c8b10954c28c7b2.png
[24]: http://i1.piimg.com/567571/28cc2e76c727b0d2.png
[25]: http://i1.piimg.com/567571/a0e491d4d23abe7b.png
[26]: http://p1.bqimg.com/567571/4b043bbb892445f6.png
[27]: http://p1.bqimg.com/567571/75364b7489f3e0f8.png
[28]: http://p1.bqimg.com/567571/4707d68f63529d41.png
[29]: http://p1.bqimg.com/567571/e2b62ffba20ede37.png
[30]: http://p1.bqimg.com/567571/9d48e47d0daca60b.png
[31]: http://p1.bqimg.com/567571/6b5407ce84c1b043.png
[32]: http://p1.bqimg.com/567571/45f263ce5390ac7b.png
[33]: http://p1.bqimg.com/567571/2f2175692ed46083.png
[34]: http://p1.bqimg.com/567571/5c516f44296e48ab.png
[35]: http://p1.bqimg.com/567571/9a7c201432bafcfb.png
[36]: http://p1.bqimg.com/567571/098012240b025dfd.png
[37]: http://p1.bpimg.com/567571/90e002e1dc97118a.png
[38]: http://p1.bpimg.com/567571/eb77854532045f5e.png
[39]: http://p1.bpimg.com/567571/ea77fe364dd4a44c.png
[40]: http://p1.bpimg.com/567571/cdd136c8edaa2c06.png
[41]: http://www.jfree.org/jfreechart/index.html
[42]: http://baike.baidu.com/link?url=Po4Na7QZnuCiPy0OUzDsSoz-vTxGvhPHx6uxNAYl0bZ5zOd3HAp_2yMuTVCyZUgPcgd9VE7waMb6U4wa-mF0aooV_RBoCVLKKLhu4qu8ISW
[43]: http://p1.bpimg.com/567571/b8072c551bf6476d.png
[44]: http://p1.bpimg.com/567571/94c0bc466b10b046.png
[45]: http://p1.bpimg.com/567571/4492c57c8edf5e08.png
[46]: http://www.fusioncharts.com/
[47]: http://p1.bqimg.com/567571/d8829ff41edfc261.png
[48]: https://coding.net/u/Recognizer/p/SSM/git
[49]: http://baike.baidu.com/link?url=Zz60huBnNNQEyz1IyxwGLpwZ2HE4Ub8YoaRSEyK7QycVBhzqNlW0r1WI9vuum9-fqfUc6-8P6_r_qg1MSeLB-mERWvZMR0ODQAc4ltMxhihQAVL5qFmlCN_gG2x0Lo9x