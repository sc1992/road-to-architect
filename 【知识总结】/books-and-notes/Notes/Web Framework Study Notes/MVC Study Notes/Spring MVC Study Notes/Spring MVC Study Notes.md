# Spring MVC Study Notes [^ history version] [^ review date]

@(J2EE)[Spring, MVC, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 版本信息：
> 2017年04月23日 下午05:14:59
> 2017年04月12日 下午07:14:22
> 2017年04月10日 下午05:39:10
> 2017年04月06日 上午09:54:39
> 2017年02月16日 上午09:12:58
> 2017年02月15日 下午05:13:19
> 2015年12月16日
> 2015年07月14日
> 2015年07月05日

[^ review date]: 
> 复习时间：
> 2017年04月23日 下午05:14:59

[TOC]

***
## 〇、思维导图

<br>
## 一、简要介绍

<br>
## 二、MVC设计典范
- **`SUMMARY：` `MVC`比传统的非`MVC`架构模式更加符合“高内聚、低耦合”原则，更加能够解决复杂、规模比较大的项目。**

### 2.1 Model
- 领域模型。

### 2.2 View
- 内容显示。

### 2.3 Controller
- 业务逻辑。

<br>
## 三、HttpServletRequest和HttpServletResponse
- **`SUMMARY：`负责服务端和客户端之间信息交互。**

### 3.1 HttpServletRequest
- **`SUMMARY：`向`Web`服务器提供请求信息。**
- 官方定义
	-  `Extends the ServletRequest interface to provide request information for HTTP servlets.`
	- `The servlet container creates an HttpServletRequest object and passes it as an argument to the servlet's service methods (doGet, doPost, etc).`
- `request`是服务器端容器生成的一个用于保存客户端传递的参数以及其他的客户端信息；

	> *注意*
	> - `Controller`到`JSP`页面之间传递参数是属于服务端内部传递参数，使用的是`request`而不是`response`；
	> - `request.getRequestDispatcher(“view”).forward(request,response)`是将客户端的请求`forward`到`view`对应的页面或者链接，进一步处理。

### 3.2 HttpServletResponse
- **`SUMMARY：`用于传递服务器返回给客户端的信息。**
- `Extends the ServletResponse interface to provide HTTP-specific functionality in sending a response. For example, it has methods to access HTTP headers and cookies.`
- `The servlet container creates an HttpServletResponse object and passes it as an argument to the servlet's service methods (doGet, doPost, etc).`
- `response`是服务器端容器生成的用于给反馈给客户端相关的页面和参数信息。

	> *注意*
		> - 客户端可以是移动客户端（`Android`、`IOS`、`WP`等）。

<br>
## 四、核心原理
- **`SUMMARY：`关键在`DispatchServlet`的调度，处理服务器交付的请求，找到`Controller`，然后把返回结果输出给服务器。**
![][1]

	> *注意*
		> - `Spring`中的`Bean`默认都是`Singleton`的，被多线程请求共享，要注意线程安全。

<br>
## 五、注解详解
- **`SUMMARY：`参考`Spring Study Notes.docx`。**

<br>
## 六、转发和重定向
- **`SUMMARY：`转发是同一次请求，重定向是新的请求。**

### 6.1 转发
- 控制器中直接返回

	``` java 
	return "forward:user.do?method=register";
	```
- 过滤器中操作

	``` java
	request.getRequestDispatcher("").forward(request, response);
	```
### 6.2 重定向
- 控制器中直接返回

	``` java 
	return "redirect:https://www.baidu.com";
	```
- 过滤器中操作
	
	``` java
	((HttpServletResponse) response).sendRedirect("");
	```
<br>
## 七、文件上传
- **`SUMMARY：`参考[`SSM`][2]项目。**

<br>
## 八、拦截器和过滤器
- **`SUMMARY：`参考[`SSM`][2]项目。**

<br>
## 九、数据校验 [^ Spring MVC Data Validation]
[^ Spring MVC Data Validation]: [ITEye][3]

<br>
## 十、MappingJackson2HttpMessageConverter
- **`SUMMARY：`可以把变量转换为`JSON`数据格式。**
- `Implementation of HttpMessageConverter that can read and write JSON using Jackson 2.x's`；
- `This converter can be used to bind to typed beans, or untyped HashMap instances`.
- *`EG.` `MappingJackson2HttpMessageConverter`源码：*

	``` java
	/*
	 * Copyright 2002-2014 the original author or authors.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 *      http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 */
	
	package org.springframework.http.converter.json;
	
	import java.io.IOException;
	
	import com.fasterxml.jackson.core.JsonGenerator;
	import com.fasterxml.jackson.databind.ObjectMapper;
	
	import org.springframework.http.MediaType;
	
	/**
	 * Implementation of {@link org.springframework.http.converter.HttpMessageConverter HttpMessageConverter} that
	 * can read and write JSON using <a href="http://wiki.fasterxml.com/JacksonHome">Jackson 2.x's</a> {@link ObjectMapper}.
	 *
	 * <p>This converter can be used to bind to typed beans, or untyped {@link java.util.HashMap HashMap} instances.
	 *
	 * <p>By default, this converter supports {@code application/json} and {@code application/*+json}.
	 * This can be overridden by setting the {@link #setSupportedMediaTypes supportedMediaTypes} property.
	 *
	 * <p>The default constructor uses the default configuration provided by {@link Jackson2ObjectMapperBuilder}.
	 *
	 * <p>Compatible with Jackson 2.1 and higher.
	 *
	 * @author Arjen Poutsma
	 * @author Keith Donald
	 * @author Rossen Stoyanchev
	 * @author Juergen Hoeller
	 * @author Sebastien Deleuze
	 * @since 3.1.2
	 */
	public class MappingJackson2HttpMessageConverter extends AbstractJackson2HttpMessageConverter {
	
		private String jsonPrefix;
	
	
		/**
		 * Construct a new {@link MappingJackson2HttpMessageConverter} using default configuration
		 * provided by {@link Jackson2ObjectMapperBuilder}.
		 */
		public MappingJackson2HttpMessageConverter() {
			this(Jackson2ObjectMapperBuilder.json().build());
		}
	
		/**
		 * Construct a new {@link MappingJackson2HttpMessageConverter} with a custom {@link ObjectMapper}.
		 * You can use {@link Jackson2ObjectMapperBuilder} to build it easily.
		 * @see Jackson2ObjectMapperBuilder#json()
		 */
		public MappingJackson2HttpMessageConverter(ObjectMapper objectMapper) {
			super(objectMapper, new MediaType("application", "json", DEFAULT_CHARSET),
					new MediaType("application", "*+json", DEFAULT_CHARSET));
		}
	
		/**
		 * Specify a custom prefix to use for this view's JSON output.
		 * Default is none.
		 * @see #setPrefixJson
		 */
		public void setJsonPrefix(String jsonPrefix) {
			this.jsonPrefix = jsonPrefix;
		}
	
		/**
		 * Indicate whether the JSON output by this view should be prefixed with ")]}', ". Default is false.
		 * <p>Prefixing the JSON string in this manner is used to help prevent JSON Hijacking.
		 * The prefix renders the string syntactically invalid as a script so that it cannot be hijacked.
		 * This prefix should be stripped before parsing the string as JSON.
		 * @see #setJsonPrefix
		 */
		public void setPrefixJson(boolean prefixJson) {
			this.jsonPrefix = (prefixJson ? ")]}', " : null);
		}
	
	
		@Override
		protected void writePrefix(JsonGenerator generator, Object object) throws IOException {
			if (this.jsonPrefix != null) {
				generator.writeRaw(this.jsonPrefix);
			}
			String jsonpFunction =
					(object instanceof MappingJacksonValue ? ((MappingJacksonValue) object).getJsonpFunction() : null);
			if (jsonpFunction != null) {
				generator.writeRaw(jsonpFunction + "(");
			}
		}
	
		@Override
		protected void writeSuffix(JsonGenerator generator, Object object) throws IOException {
			String jsonpFunction =
					(object instanceof MappingJacksonValue ? ((MappingJacksonValue) object).getJsonpFunction() : null);
			if (jsonpFunction != null) {
				generator.writeRaw(");");
			}
		}
	
	}
	```
## 十一、配置说明
- **`SUMMARY：`可以通过特定的注解批量注入需要的`Bean`。**

### 11.1 context:annotation-config和context:component-scan
- **`SUMMARY：` `<context:annotation-config>`激活基本的注解，如 `@Required`、`@Autowired`和`@Resource `等。**
- **`SUMMARY：` 具有`<context:annotation-config>`的功能以及在指定的`package`下扫描以及注册`Bean`。**
- `<context:annotation-config>`和`<context:component-scan>`
	- `<context:annotation-config>`[^ annotation-config reference]
		- activates the Spring infrastructure for various annotations to be detected in bean classes: Spring’s `@Required` and `@Autowired`, as well as JSR 250’s `@PostConstruct`, `@PreDestroy `and `@Resource `(if available), and JPA’s `@PersistenceContext` and `@PersistenceUnit` (if available). Alternatively, you can choose to activate the individual BeanPostProcessors for those annotations explicitly.
			- **This element does not activate processing of Spring’s `@Transactional` annotation. Use the <tx:annotation-driven/> element for that purpose.**
	   -  用于激活那些已经在`Spring`容器里注册过的`bean`（无论是通过`xml`的方式还是通过`package sanning`的方式）上面的注解。
	- `<context:component-scan>`
    	- 除了具有`<context:annotation-config>`的功能之外，`<context:component-scan>`还可以在指定的`package`下扫描以及注册`javabean `。
    
[^ annotation-config reference]: [Spring][10]

### 11.2 mvc:annotation-driven
- **`SUMMARY：`注入`@Controller`和`@RequestMapping`对应的`Bean`以及设置消息转换器。**
- 默认注入`RequestMappingHandlerMapping`（`@Controller`）和`RequestMappingHandlerAdapter`（`@RequestMapping`）
- 设置消息转换器（`message-converters`）

	``` xml
	<mvc:annotation-driven>
			<mvc:message-converters>
				<bean class="org.springframework.http.converter.StringHttpMessageConverter">
					<property name="supportedMediaTypes">
						<list>
							<value>text/html; charset=UTF-8</value>
							<value>application/json;charset=UTF-8</value>
						</list>
					</property>
				</bean>
				<!-- 从spring mvc 3.1开始，JSON映射使用MappingJackson2HttpMessageConverter  -->
				<bean class="org.springframework.http.converter.json.MappingJackson2HttpMessageConverter">
					<property name="supportedMediaTypes">
						<list>
							<value>text/html; charset=UTF-8</value>
							<value>application/json;charset=UTF-8</value>
						</list>
					</property>
				</bean>
			</mvc:message-converters>
		</mvc:annotation-driven>
	```

	> *注意*
	> - `@Controller`和`@RequestMapping`对应的`Bean`是默认被注入的。

[1]: http://p1.bpimg.com/567571/ac85d05af98f3417.png
[2]: https://coding.net/u/Recognizer/p/SSM/git
[3]: http://jinnianshilongnian.iteye.com/blog/1733708
[10]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#xsd-config-body-schemas-context-ac