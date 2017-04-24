# Spring MVC Study Notes [^ history version] [^ review date]

@(J2EE)[Spring, MVC, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> �汾��Ϣ��
> 2017��04��23�� ����05:14:59
> 2017��04��12�� ����07:14:22
> 2017��04��10�� ����05:39:10
> 2017��04��06�� ����09:54:39
> 2017��02��16�� ����09:12:58
> 2017��02��15�� ����05:13:19
> 2015��12��16��
> 2015��07��14��
> 2015��07��05��

[^ review date]: 
> ��ϰʱ�䣺
> 2017��04��23�� ����05:14:59

[TOC]

***
## ����˼ά��ͼ

<br>
## һ����Ҫ����

<br>
## ����MVC��Ƶ䷶
- **`SUMMARY��` `MVC`�ȴ�ͳ�ķ�`MVC`�ܹ�ģʽ���ӷ��ϡ����ھۡ�����ϡ�ԭ�򣬸����ܹ�������ӡ���ģ�Ƚϴ����Ŀ��**

### 2.1 Model
- ����ģ�͡�

### 2.2 View
- ������ʾ��

### 2.3 Controller
- ҵ���߼���

<br>
## ����HttpServletRequest��HttpServletResponse
- **`SUMMARY��`�������˺Ϳͻ���֮����Ϣ������**

### 3.1 HttpServletRequest
- **`SUMMARY��`��`Web`�������ṩ������Ϣ��**
- �ٷ�����
	-  `Extends the ServletRequest interface to provide request information for HTTP servlets.`
	- `The servlet container creates an HttpServletRequest object and passes it as an argument to the servlet's service methods (doGet, doPost, etc).`
- `request`�Ƿ��������������ɵ�һ�����ڱ���ͻ��˴��ݵĲ����Լ������Ŀͻ�����Ϣ��

	> *ע��*
	> - `Controller`��`JSP`ҳ��֮�䴫�ݲ��������ڷ�����ڲ����ݲ�����ʹ�õ���`request`������`response`��
	> - `request.getRequestDispatcher(��view��).forward(request,response)`�ǽ��ͻ��˵�����`forward`��`view`��Ӧ��ҳ��������ӣ���һ������

### 3.2 HttpServletResponse
- **`SUMMARY��`���ڴ��ݷ��������ظ��ͻ��˵���Ϣ��**
- `Extends the ServletResponse interface to provide HTTP-specific functionality in sending a response. For example, it has methods to access HTTP headers and cookies.`
- `The servlet container creates an HttpServletResponse object and passes it as an argument to the servlet's service methods (doGet, doPost, etc).`
- `response`�Ƿ��������������ɵ����ڸ��������ͻ�����ص�ҳ��Ͳ�����Ϣ��

	> *ע��*
		> - �ͻ��˿������ƶ��ͻ��ˣ�`Android`��`IOS`��`WP`�ȣ���

<br>
## �ġ�����ԭ��
- **`SUMMARY��`�ؼ���`DispatchServlet`�ĵ��ȣ���������������������ҵ�`Controller`��Ȼ��ѷ��ؽ���������������**
![][1]

	> *ע��*
		> - `Spring`�е�`Bean`Ĭ�϶���`Singleton`�ģ������߳�������Ҫע���̰߳�ȫ��

<br>
## �塢ע�����
- **`SUMMARY��`�ο�`Spring Study Notes.docx`��**

<br>
## ����ת�����ض���
- **`SUMMARY��`ת����ͬһ�������ض������µ�����**

### 6.1 ת��
- ��������ֱ�ӷ���

	``` java 
	return "forward:user.do?method=register";
	```
- �������в���

	``` java
	request.getRequestDispatcher("").forward(request, response);
	```
### 6.2 �ض���
- ��������ֱ�ӷ���

	``` java 
	return "redirect:https://www.baidu.com";
	```
- �������в���
	
	``` java
	((HttpServletResponse) response).sendRedirect("");
	```
<br>
## �ߡ��ļ��ϴ�
- **`SUMMARY��`�ο�[`SSM`][2]��Ŀ��**

<br>
## �ˡ��������͹�����
- **`SUMMARY��`�ο�[`SSM`][2]��Ŀ��**

<br>
## �š�����У�� [^ Spring MVC Data Validation]
[^ Spring MVC Data Validation]: [ITEye][3]

<br>
## ʮ��MappingJackson2HttpMessageConverter
- **`SUMMARY��`���԰ѱ���ת��Ϊ`JSON`���ݸ�ʽ��**
- `Implementation of HttpMessageConverter that can read and write JSON using Jackson 2.x's`��
- `This converter can be used to bind to typed beans, or untyped HashMap instances`.
- *`EG.` `MappingJackson2HttpMessageConverter`Դ�룺*

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
## ʮһ������˵��
- **`SUMMARY��`����ͨ���ض���ע������ע����Ҫ��`Bean`��**

### 11.1 context:annotation-config��context:component-scan
- **`SUMMARY��` `<context:annotation-config>`���������ע�⣬�� `@Required`��`@Autowired`��`@Resource `�ȡ�**
- **`SUMMARY��` ����`<context:annotation-config>`�Ĺ����Լ���ָ����`package`��ɨ���Լ�ע��`Bean`��**
- `<context:annotation-config>`��`<context:component-scan>`
	- `<context:annotation-config>`[^ annotation-config reference]
		- activates the Spring infrastructure for various annotations to be detected in bean classes: Spring��s `@Required` and `@Autowired`, as well as JSR 250��s `@PostConstruct`, `@PreDestroy `and `@Resource `(if available), and JPA��s `@PersistenceContext` and `@PersistenceUnit` (if available). Alternatively, you can choose to activate the individual BeanPostProcessors for those annotations explicitly.
			- **This element does not activate processing of Spring��s `@Transactional` annotation. Use the <tx:annotation-driven/> element for that purpose.**
	   -  ���ڼ�����Щ�Ѿ���`Spring`������ע�����`bean`��������ͨ��`xml`�ķ�ʽ����ͨ��`package sanning`�ķ�ʽ�������ע�⡣
	- `<context:component-scan>`
    	- ���˾���`<context:annotation-config>`�Ĺ���֮�⣬`<context:component-scan>`��������ָ����`package`��ɨ���Լ�ע��`javabean `��
    
[^ annotation-config reference]: [Spring][10]

### 11.2 mvc:annotation-driven
- **`SUMMARY��`ע��`@Controller`��`@RequestMapping`��Ӧ��`Bean`�Լ�������Ϣת������**
- Ĭ��ע��`RequestMappingHandlerMapping`��`@Controller`����`RequestMappingHandlerAdapter`��`@RequestMapping`��
- ������Ϣת������`message-converters`��

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
				<!-- ��spring mvc 3.1��ʼ��JSONӳ��ʹ��MappingJackson2HttpMessageConverter  -->
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

	> *ע��*
	> - `@Controller`��`@RequestMapping`��Ӧ��`Bean`��Ĭ�ϱ�ע��ġ�

[1]: http://p1.bpimg.com/567571/ac85d05af98f3417.png
[2]: https://coding.net/u/Recognizer/p/SSM/git
[3]: http://jinnianshilongnian.iteye.com/blog/1733708
[10]: http://docs.spring.io/spring/docs/current/spring-framework-reference/htmlsingle/#xsd-config-body-schemas-context-ac