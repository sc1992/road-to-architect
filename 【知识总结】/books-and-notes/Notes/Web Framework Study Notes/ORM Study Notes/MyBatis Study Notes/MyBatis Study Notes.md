# MyBatis [^ MyBatis Reference] Study Notes [^ history version]

@(J2EE)[MyBatis, Notes]

[^ MyBatis Reference]: [GitHub][1]��[�ٶȰٿ�][2]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> 2017��04��05�� ����02:25:38
> 2017��03��17�� ����10:38:53
> 2017��03��16�� ����06:39:12
> 2017��03��16�� ����09:15:29
> 2017��03��08�� ����02:24:07
> 2017��03��06�� ����11:11:22

[TOC]

***
## ����˼ά��ͼ

<br>
## һ���ܹ�ͼ	

<br>
## ��������֪ʶ

- **`SUMMARY��` `MyBatis`��֧�ֶ��ƻ�`SQL`���洢�����Լ��߼�ӳ�������ĳ־ò��ܡ�**
- `MyBatis`��֧�ֶ��ƻ�`SQL`���洢�����Լ��߼�ӳ�������ĳ־ò��ܡ�`MyBatis`�����˼������е�`JDBC`������ֶ����ò����Լ���ȡ�������`MyBatis`���Զ����ú�ԭ��`Map`ʹ�ü򵥵� `XML`��ע�⣬���ӿں�`Java`��`POJOs`��`Plain Old Java Objects`����ͨ��`Java`����ӳ������ݿ��еļ�¼��
- `MyBatis`��һ���־ò��ܣ�`Apache`�Ķ�����Ŀ���йܵ�`GitHub`����
	- �ó���Ա����Ҫ�ľ�������`SQL`�߼��ϣ�ͨ��`MyBatis`�ṩ��ӳ�䷽ʽ�������������ɣ����Զ������󲿷���Ҫ����Աд`SQL`�����������`SQL`��
		- `MyBatis`���Խ���`PreparedStatement`������Ĳ����Զ���������ӳ�䣨**����ӳ��**��������ѯ������ӳ���`Java`����**���ӳ��**����

### 2.1 ��ԭ��̬JDBC���������ܽ�
#### 2.1.1 PreparedStatement
- **`SUMMARY��`���ݿ�Ԥ������䣬�ѱ���Ľ����������ݿ��еĻ����У��´����`statement`��ͬ�Ļ��Ϳ������û���**
- �����ݿ�Ԥ�����`statement`�����ݿ���䣩��
- �ѱ���Ľ����������ݿ��еĻ����У��´����`statement`��ͬ�Ļ��Ϳ������û��档

#### 2.1.2 ����
- **`SUMMARY��`���ݿ������˷ѡ�Ӳ���롢Ԥ���룬�޸������ļ����� ��**
- **���ݿ����ӣ�ʹ�õ�ʱ��ʹ�������ʹ�þ������ͷ�**��
	- ȱ��
		- �����ݿ����Ƶ���Ĵ򿪺͹رգ��˷����ݿ���Դ���������ܡ�
	- �������
		- ����ʹ��**���ݿ����ӳ�**��������⡣
- **��`SQL`���Ӳ���뵽`Java`�����У�������ϵͳ��ά��**��
	- ȱ��
		- ���`SQL`����޸ģ����±���`Java`���롣
	- �������
		- **��`SQL`д�������ļ��У���ʹ`SQL`�仯Ҳ���������±���`Java`���룬ֻ����Ҫ��ʱ����м��������ļ�**��
- **��`PreparedStatement`�����ò�������ռλ��λ�ú����õĲ�����Ӳ���뵽��`Java`������**��
	- ȱ��
		- ������ϵͳά����
	- �������
		- ��ռλ����λ����Ϣ�Ͳ���д�������ļ��С�
- **��`ResultSet`�б������������ʱ������Ӳ����**��
	- �������
		- ����ѯ�Ľ�����Զ�ӳ�䵽`Java`����
	
> *ע��*
> - ����ʹ�����ݿ����ӳؽ��Ƶ���򿪺͹ر����ݿ���ɵ���Դ�˷ѣ�
> - д�������ļ��е�`SQL`����ʹ`SQL`�仯Ҳ���������±���`Java`���룬ֻ����Ҫ��ʱ����м��������ļ���

### 2.2 ���ԭ���ص㣩
- **`SUMMARY��` ͨ��`MyBatis`�ṩ��ӳ�䷽ʽ�������������ɣ����Զ������󲿷���Ҫ����Աд`SQL`�����������`SQL`���ó���Ա����Ҫ�ľ�������`SQL`�߼��ϡ�**
- `MyBatis`��һ���־ò��ܣ��йܵ�`GitHub`��`Apache`�Ķ�����Ŀ��
	- `MyBatis`���Խ���`PreparedStatement`������Ĳ����Զ���������ӳ�䣬����ѯ������ӳ���`Java`�������ӳ�䣩��
	- ͨ��`MyBatis`�ṩ��ӳ�䷽ʽ�������������ɣ�**���Զ������󲿷���Ҫ����Աд`SQL`**�����������`SQL`���ó���Ա����Ҫ�ľ�������`SQL`�߼��ϡ�
- *`img.` `Mybatis`ԭ��ͼ��*<br>![][3]

### 2.3 ���ų��� [^ MyBatis Demo Reference]
[^ MyBatis Demo Reference]: [Coding][6]

- �ο� [framework-assembly-basis][6]��

### 2.4 ����Dao�����ַ���
#### 2.4.1 ԭʼDao�����������ص㣩
- **`SUMMARY��`ͨ��`SqlSessionFactory`����`SqlSession` ��**
- ˼·
	- ͨ��`SqlSessionFactory`����`SqlSession`��
	- `sqlSession.commit()`��
- ���ڵ�����
	- `DAO`�ӿڵ�ʵ�����еķ����д��ڴ�����ģ�巽�����ظ��ķ�������`sqlSession.commit()`���������˹�������
	- ����Ӳ���룬*`eg.`*����`SqlSession`������ʱ�������`Statement`��`id`Ӳ���룻
	- ����`SqlSession`����ʹ���˷��ͣ�����`SqlSession`�������������ʱ��ʹ�������ʹ�������ڱ���׶�Ҳ���ᱨ�������ڳ���Ա������

#### 2.4.2 MyBatis��Mapper�ӿڣ��ص㣩
- **`SUMMARY��`����`Mapper`�ӿڵĴ������**
- ˼·
	- ��Ҫд`Mapper`�ӿڣ�
	- ��Ҫд`mapper.xml`ӳ���ļ���
	- `MyBatis`�Զ�����`Mapper`�ӿ�ʵ����Ĵ������ǰ���Ƿ����俪���淶����
	- �淶��4��������ʵ�������÷�����ƣ�ʵ�־���Ĺ��ܣ���
		- ��`mapper.xml`�е�`namespace`Ҫ����`mapper`�ӿڣ�`mapper.java`���ĵ�ַ����+�ࣩ��
		- `mapper.java`�ӿ��еķ�������`mapper.xml`�е�`statement`��`id`һ�£�
		- `mapper.java`�ӿ��з���������������ͺ�`statement`�е�`parameterType`ָ��������һ�£�
		- `mapper.java`�ӿ��з���ֵ�����ͺ�`statement`�е�`resultType`������һ�¡�
- ע��
	- ��������ڲ�����`selectOne`��`selectList`�Ļ��ƣ�
		- ���`mapper`�������صĵ���`POJO`�������������ڲ���ͨ��`selectOne`��ѯ���ݿ⣻
		- ���`mapper`�������صĶ��`POJO`�������������ڲ���ͨ��`selectList`��ѯ���ݿ⡣
	
### 2.5 ȫ������
- **`SUMMARY��`����`MyBatis` `ORM`������ز�����**
[^ Global Configuration Reference]: [mybatis.org.][7]

#### 2.5.1 properties�����ԣ�
- ��һЩ�ض����Ե����÷��ڵ�����`properties`�ļ��У�ֻ��Ҫ��`MyBatis`ȫ�������ļ�������ֵ`SqlMapConfig.xml`�ļ����м��ؼ��ɣ�����Ҫ������`SqlMapConfig.xml`�ļ��У�������������`SqlMapConfig.xml`�ļ��е�Ӳ���롣
#### 2.5.2 settings��ȫ�����ò�����[^ Global Configuration Reference]
- `MyBatis`������е�ʱ����Ե�����һЩ���в��������翪���������棬�����ӳټ��ء�
- *`eg.`����ʵ����*
	``` xml
	<?xml version="1.0" encoding="UTF-8" ?>
	<!-- Copyright 2009-2012 The MyBatis Team Licensed under the Apache License, 
		Version 2.0 (the "License"); you may not use this file except in compliance 
		with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 
		Unless required by applicable law or agreed to in writing, software distributed 
		under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES 
		OR CONDITIONS OF ANY KIND, either express or implied. See the License for 
		the specific language governing permissions and limitations under the License. -->
	<!DOCTYPE configuration
		PUBLIC "-//mybatis.org//DTD Config 3.0//EN"
		"http://mybatis.org/dtd/mybatis-3-config.dtd">
	
	<configuration>
		
		<settings>
			<!-- ȫ�ֵ�ӳ�������û���û���. -->
			<setting name="cacheEnabled" value="true" />
			<!-- ȫ�����û�����ӳټ���. ������ʱ, ���й������󶼻ἴʱ����. -->
			<setting name="lazyLoadingEnabled" value="true" />
			<!-- �����������ֽ������һ������������з��أ���Ҫ�ʺϵ�������. -->
			<setting name="multipleResultSetsEnabled" value="true" />
			<!-- ʹ���б�ǩ������������ͬ���������ⷽ����ֲ�ͬ���ο������ĵ����ֲ������ַ�����������ʹ�õ�����. -->
			<setting name="useColumnLabel" value="true" />
			<!-- ����JDBC֧�����ɵļ�����Ҫ�ʺϵ��������������Ϊtrue���������ǿ�����ɵļ���ʹ�ã�����һЩ�����ܾ����ݵ���Ȼ��Ч������ Derby��. -->
			<setting name="useGeneratedKeys" value="false" />
			<!-- ����Ĭ�ϵ�ִ������SIMPLEִ����û��ʲô�ر�֮����REUSEִ��������Ԥ������䡣BATCHִ��������������������. -->
			<setting name="defaultExecutorType" value="REUSE" />
			<!-- ���ó�ʱʱ�䣬�����������ȴ�һ�����ݿ���Ӧ��ʱ��. -->
			<setting name="defaultStatementTimeout" value="100" />
			<setting name="safeRowBoundsEnabled" value="false" />
			<setting name="mapUnderscoreToCamelCase" value="false" />
			<setting name="localCacheScope" value="SESSION" />
			<setting name="jdbcTypeForNull" value="OTHER" />
			<setting name="lazyLoadTriggerMethods" value="equals,clone,hashCode,toString" />
		</settings>
		
		<!-- MyBatis Plugins Configuration.
			<plugins>
				<plugin interceptor="com.github.pagehelper.PageHelper">
					<property name="offsetAsPageNum" value="true" />
					<property name="rowBoundsWithCount" value="true" />
					<property name="pageSizeZero" value="true" />
					<property name="reasonable" value="true" />
					<property name="params" value="pageNum=start;pageSize=limit;" />
					<property name="supportMethodsArguments" value="true" />
					<property name="returnPageInfo" value="check" />
				</plugin>
			</plugins>
			-->
	</configuration>
	```

#### 2.5.3 typeAliases�����ͱ�����
- ���`parameterType`��`resultType`ָ�������Ͷ���һЩ���������㿪������ΪһЩ���ƹ�����
- ���磺`int`Ĭ����`java.lang.Integer`�ı�����

#### 2.5.4 typeHandles�����ʹ�������
- `MyBatis`��ͨ��`typeHandler`���`JDBC`��`Java`���͵�ת����
- ͨ������£�`MyBatis`���ṩ�����ʹ������Ѿ�������ƽʱ�ı��ʹ�ã�����Ҫ����Ա�����Զ��塣

#### 2.5.5 objectFactory�����󹤳���
#### 2.5.6 plugins�������
#### 2.5.7 environments��������
#### 2.5.8 mappers��ӳ������
- ![][8]
#### 2.5.9 ���Լ���˳��
- �ȼ���`<properties>`��ǩ���ڵ����ԣ�
- Ȼ���ȡ`<properties>`��ǩ��`resource`����`URL`���ص����ԣ��Ḳ���Ѿ���ȡ��ͬ�����ԣ�
- ����ȡ`parameterType`���ݵ����ԣ��Ḳ���Ѿ���ȡ��ͬ�����ԡ�

### 2.6 ��ܺ��ģ��ص㣩
#### 2.6.1 ����ӳ��
- **`SUMMARY��`ͨ��`parameterType`�ƶ�������������ͣ����Ϳ����Ǽ����͡�`HashMap`��`POJO`��**
##### 2.6.1.1 parameterType
- ͨ��`parameterType`�ƶ�������������ͣ����Ϳ����Ǽ����͡�`HashMap`��`POJO`���ͣ�
	- ����`POJO`�İ�װ����
		- ����
			- ����û���Ϣ���ۺϲ�ѯ����Ҫ���븴�ӵĲ�ѯ������*`eg.`���磺*�û���Ϣ����Ʒ��Ϣ�ȡ�
		- �������
			- ����ʹ���Զ����װ���͵�`POJO`���Ѹ��ӵĲ�ѯ������װ��ȥ��������ϵͳ��ά����ϵͳ�ܹ�ʦ��֪����

#### 2.6.2 ���ӳ��
- **`SUMMARY��`ͨ��`resultType`��`resultMap`��**
##### 2.6.2.1 resultType
- **`SUMMARY��`���`POJO`����`POJO`�б����������͡�**
- ���`POJO`����`POJO`�б����������ͣ�
- ʹ��`resultType`�������ӳ���ʱ��ֻ�в�ѯ������������`POJO`�е���������һ�£����вſ���ӳ��ɹ���
- �����ѯ������������`POJO`�е���������ȫ����һ�����򲻻��ѯ��`POJO`����
- ֻҪ��ѯ������������`POJO`�е�������һ��һ�£��ͻᴴ��`POJO`���󣬶�����һ�µ����Բ���ȡ��ֵ�������Ķ�ΪĬ��ֵ��
- ע��
	- �����������`POJO`����������`POJO`�Ķ����б���`mapper.xml`��`resultType`ָ�������Ͷ���`POJO`������`mapper.java`�еķ������;ͷֱ���`POJO`��`List<POJO>`�����ɵĶ�̬��������Ǹ���`mapper`�����ķ���ֵ��������ȷ���������`selectOne`�����ص������󣩻���`selectList`�����ؼ��϶��󣩷�����

##### 2.6.2.2 resultMap
- **`SUMMARY��`��������`resultType`��Ϊ�߼��Ҹ��ӵ�������ӳ�䡣**
- ��ɸ߼��Լ����ӵ�������ӳ�䣻
- ʹ�÷�����
	- �����ѯ������������`POJO`���������Ʋ�һ�£������ͨ������һ��`resultMap`����������������֮����һ��ӳ�䣺
		- ����`resultMap`��
		- ʹ��`resultMap`��Ϊ`Statement`�����ӳ�����͡�
- ʵ��
	- �ο�`MyBatis` `Study` `Notes.docx`��
	- `SelectKey`
	
	``` java
	@SelectKey(statement="SELECT LAST_INSERT_ID()", keyProperty="id", before=false, resultType=Integer.class)
	```

### 2.7 ��̬SQL���ص㣩
- **`SUMMARY��`ͨ�����ʽ�����жϣ���`SQL`�������ƴ�ӡ���װ�Ȳ�����**
- ��`MyBatis`���ģ�ͨ�����ʽ�����жϣ���`SQL`�������ƴ�ӡ���װ�Ȳ�����
- *`eg.`����ʵ����*

	```
	<select id="selectByPermId" parameterType="long" resultMap="BaseResultMap">
		SELECT *
		FROM permission
		WHERE 1=1
			<if test="null!=permId and ''!=permId">
				AND perm_id = #{permId}
			</if>
	</select>
	```

### 2.8 SQLƬ��
- **`SUMMARY��`�ֽ⸴�ӵ�`SQL`��䣬����`SQL`���ĸ��á�**
- �ֽ⸴�ӵ�`SQL`��䣬�������
- ���ϱ�ʵ�ֵĶ�̬`SQL`�жϴ�����ȡ���������һ��`SQL`Ƭ�Σ�������`statement`�оͿ������øù�����`SQL`Ƭ�Ρ�
- ����`SQL`Ƭ�Σ�<br>![][9]
- ����`SQL`Ƭ�Σ�<br>![][10]

### 2.9 `<foreach>`��ǩ
- **`SUMMARY��` ��`SQL`�������������`List`��**
- ��`SQL`�������������`List`��`MyBatis`ʹ��`<foreach>`��ǩ���н�����
- `select * from user where ��id=1 or id=3 or id=5��`����`select * from user where id in(1, 3, 5)`��<br>![][11]<br><br>![][12]<br><br>![][13]

### 2.10  MyBatis��Hibernate���������Ӧ�ó���
- **`SUMMARY��` `Mybatis`��һ������ȫ��`ORM`��ܣ���Ҫ����Ա�Լ�д`SQL`����Ȼ����Ҳ�ṩ����`SQL`������������������仯�϶����Ŀ��`Hibernate`��һ����׼��ORM��ܣ������ϵӳ�䣩������������仯�������С����Ŀ��**
- **MyBatis**
	- **����**
		- רע��`SQL`������Ҫ����Ա�Լ���д`SQL`��䣬`SQL`�޸ġ��Ż��ȽϷ��㣻
		- ��һ������ȫ��`ORM`��ܣ���Ȼ��Ҫ����Ա�Լ�д`SQL`������`MyBatis`Ҳ����ʵ��ӳ�䣨����ӳ������ӳ�䣩��
	- **Ӧ�ó���**
		- **����������仯�϶����Ŀ**�����磺��������Ŀ��
- **Hibernate**
	- **����**
		- ��һ����׼��`ORM`��ܣ������ϵӳ�䣩�������ż��ϸߣ�`SQL`����Զ����ɣ�����Ҫ����Ա�ֶ�д����ȻҲ�����Զ��壩����`SQL`���������Ż����޸ıȽ����ѡ�
	- **Ӧ�ó���**
		- ������**����仯�������С����Ŀ**��*`eg.`��*��̨����ϵͳ��`ERP`��`ORM`��`OA`�ȡ�
- **��չ**
	- ��ҵ���м���ѡ�ͣ��ͳɱ����߻ر���Ϊ����ѡ�͵�ԭ�򣬸�����Ŀ��ļ�����������ѡ��

### 2.11 ��ȱ��
#### 2.11.1 �ŵ�
- ����ѧ��
	- `MyBatis`����ͺ�С�Ҽ򵥣�
	- û���κε�������������򵥰�װֻҪ����`jar`�ļ��Լ����ü���`SQL`ӳ���ļ�������ѧϰ������ʹ�ã�ͨ���ĵ���Դ���룬���ԱȽ���ȫ�������������˼·��ʵ�֡�
- ��
	- `MyBatis`�����Ӧ�ó���������ݿ���������ǿ���κ�Ӱ�죻
	- `SQL`д��`XML`�����ͳһ������Ż���
	- ͨ��`SQL`�����Ͽ���ʵ�����ǲ�ʹ�����ݷ��ʿ�ܿ���ʵ�ֵ����й��ܡ�
- ���`SQL`�����������ϣ�
	- ͨ���ṩ`DAL`�㣬��ҵ���߼������ݷ����߼����룬ʹϵͳ����Ƹ�����������ά�������׵�Ԫ���ԡ�
- �ṩӳ���ǩ��֧�ֶ��������ݿ��`ORM`�ֶι�ϵӳ�� ��
- �ṩ�����ϵӳ���ǩ��֧�ֶ����ϵ�齨ά����
- �ṩ`XML`��ǩ��֧�ֱ�д��̬`SQL`��

#### 2.11.2 ȱ��
- ��д`SQL`���ʱ�������ܴ��������ֶζࡢ�������ʱ��������ˣ�
- `SQL`������������ݿ⣬�������ݿ���ֲ�Բ���ܸ������ݿ⣻
- ��ܻ��ǱȽϼ�ª����������ȱʧ����Ȼ�������ݰ󶨴��룬���������ײ����ݿ��ѯʵ�ʻ���Ҫ�Լ�д�ģ�������Ҳ�Ƚϴ󣬶��Ҳ�̫������Ӧ�������ݿ��޸ģ�
	- ��֧�ּ������¡�����ɾ����
- ��д��̬`SQL`ʱ����������ԣ������߼�����ʱ��
- ����������Ʋ��ѡ�

	> *ע��*
	> - `MyBatis`���ŵ�ͬ����`MyBatis`��ȱ�㣬����Ϊ`MyBatis`ʹ�ü򵥣����ݵĿɿ��ԡ������Ե�ƿ������������ڳ���Ա��`SQL`��ʹ��ˮƽ���ˣ�
	> - `SQL`д��`XML`���Ȼ�������޸ġ��Ż���ͳһ��������ɶ��Ժܵͣ�����Ҳ�ǳ����ѣ�Ҳ�ǳ����ޣ�
	> - `MyBatis`û��`Hibernate`��ôǿ�󣬵���`MyBatis`�����ŵ���Ǽ�С���������֣���������޸�`SQL`��䡣
	> - Hibernate�Ĳ�ѯ�Ὣ���е������ֶβ�ѯ��������һ������������ġ�HibernateҲ�����Լ�дSQL��ָ����Ҫ��ѯ���ֶΣ����������ƻ���Hibernate�����ļ���ԡ���Mybatis��SQL���ֶ���д�ģ����Կ��԰�����ָ����ѯ���ֶΡ�

#### 2.11.3 ��Hibernate�Ա�
- `MyBatis`����
	- `MyBatis`���Խ��и�Ϊϸ�µ�`SQL`�Ż������Լ��ٲ�ѯ�ֶΣ�
	- `MyBatis`�������գ���`Hibernate`�ż��ϸߡ�
- `Hibernate`����
	- `Hibernate`��`DAO`�㿪����`MyBatis`�򵥣�`Mybatis`��Ҫά��`SQL`�ͽ��ӳ�䣻
	- `Hibernate`�Զ����ά���ͻ���Ҫ��`MyBatis`�ã�����ɾ�Ĳ�Ķ����ά��Ҫ���㣻
	- `Hibernate`���ݿ���ֲ�Ժܺã�`MyBatis`�����ݿ���ֲ�Բ��ã���ͬ�����ݿ���Ҫд��ͬSQL��
	- `Hibernate`�и��õĶ���������ƣ�����ʹ�õ��������档`MyBatis`�����ṩ�Ļ�����Ʋ��ѣ�
		- *`EG.` `MyBatis`����������ʵ�ʲ����в�����ʹ�ã�*
			- `MyBatis`���������������`namespace`�µĻ��棬�����ͬ��`namespace`�����й������ƵĲ�ѯ����������ʹ���˲�ͬ�Ķ������棬���п�����������ݣ��������ݲ�һ�¡�

### 2.12 ���� [^ mybatis optimize reference]
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


<br>
## �����߼�֪ʶ
### 3.1 ������Ʒ����ģ�ͷ���
- �ο�`Mybatis` `Study` `Notes.docx`��

### 3.2 �߼�ӳ��
- **`SUMMARY��` `OneToOne`��`OneToMany` ��`ManyToMany`ӳ�䡣**
#### 3.2.1 OneToOne
##### 3.2.1.1 ResultType
<br>![][14]<br><br>![][15]
##### 3.2.1.2 ResultMap
<br>![][16]<br><br>![][17]
- `resultMap`����ʵ���ӳټ��أ���`resultType`�޷�ʵ���ӳټ��ء�
#### 3.2.2 OneToMany && ManyToOne
##### 3.2.2.1 ResultMap
<br>![][18]<br><br>![][19]
#### 3.2.3 ManyToMany
##### 3.2.3.1 ResultMap
<br>![][20]<br><br>![][21]
### 3.3 �ӳټ���
- **`SUMMARY��` ��Ϊ`association`��`collection`�߱��ӳټ��ع��ܡ�**
- `resultMap`����ʵ�ָ߼�ӳ�䣨ʹ��`association`��`collection`ʵ��`OneToOne`�Լ�`OneToMany`ӳ�䣩���ӳټ��أ���Ϊ`association`��`collection`�߱��ӳټ��ع��ܡ�<br>![][22]

### 3.4 ��ѯ���� [^ Query Cache Reference]
[^ Query Cache Reference]: [CSDN][23]

- **`SUMMARY��` `MyBatis`�ṩһ������Ͷ������湦�ܣ����ڼ������ݿ�ѹ����������ݿ����ܡ�**
- ���ڼ������ݿ�ѹ����������ݿ����ܣ�
- `MyBatis`�ṩһ������Ͷ������湦�ܡ�
- <br>![][30]

#### 3.4.1 һ������
- **`SUMMARY��` `SqlSession`�ڲ����л��棬ֻҪ��ǰ`Session`���رգ�ͬ���Ĳ�ѯ�ͻ�����һ�����档**
- �ڲ������ݿ��ʱ����Ҫ����`SqlSession`�����ڶ�������һ�����ݽṹ��`HashMap`�����ڴ洢�������ݣ���ͬ��`SqlSession`����֮��Ļ������������ǻ��಻Ӱ��ģ���`SqlSession`��һ�����棬������ֻ���Լ��Ļ��������У�������`SqlSession`�����ã�
- `MyBatis`Ĭ��֧��һ�����棻
- `SQLSession`����ر�֮���仺��ͻ��Զ���գ���ʱ����ͬ�Ĳ�ѯҲû�ж�Ӧ�Ļ��档��
- ����ο�`MyBatis` `Study` `Notes.docx`��

#### 3.4.2 ��������
- **`SUMMARY��` ͬһ��`namespace`��`mapper`�����`SqlSession`֮�乲�����ݣ���������˶������棬һ������`close()`֮���Ѳ�ѯ������浽�������棬�´���ͬ�Ĳ�ѯ����ʱһ�������Ѿ��ύ�������ڣ�����ʹ�õ��Ƕ������棩���ͻ�ʹ�û��������ݡ�**
- `mapper`��`namespace`������Ļ��棬���`SqlSession`ȥ����ͬһ��`Mapper`��`SQL`��䣬�����ݻỺ���ڶ��������У���ͬһ��`namespace`��`mapper`�Ƕ������棬�������`SqlSession`֮�乲�����ݣ�
- ��һ�η����ѯ��ʱ�򣬲�ѯ������Զ������ڻ����У��ڶ��β�ѯ��ͬ���Ĳ�ѯ����ʱ����������������ֱ��ʹ�û����е����ݣ����û�еĻ���ֱ�Ӳ�ѯ���ݿ⡣��ʱ��û�С����ֵ������������һ�ǲ�ѯ������ǵ�һ�β�ѯ������`SqlSession`���������`commit()`������������ִ���˲��롢���¡�ɾ���������������Ļ��ͻ���գ�`flush`��`SqlSession`�еĻ��棨һ�����棩����ʱ�Ͳ���ֱ�Ӵ�һ��������ȡ�����ˣ���������Ŀ�����û����д洢����Ϣ�����µģ����������
- `MyBatis`֧��������ƣ�����Ĭ���Ǵ򿪵ģ�����`SQL`�Ĳ��롢���¡�ɾ������Ҫ����`commit`��������`flush`������ͬ�������ݿ��У���ʧ�ܵĻ���`rollback`����ѭ�����ԭ���ԣ���
- `sqlSession`�����`close()`�Ļ��ǲ���д���������浱�еģ�������ֻ�ᱣ����һ�����浱�У�
- ˢ�¶������棨��ն������棩��
	- ����`mapper`��ͬһ`namespace`�У����������`CRUD`�������ݺ�û��ִ��ˢ�£�`commit`����������������������
	- ����`statement`�е�����`flushCache`��ֵΪ`true`���ɣ�
	- Ĭ�������`statement`��`flushCache`���Ե�ֵΪ`true`��
<br>![][24]<br><br>![][25]<br><br>![][26]<br><br>![][27]

### 3.5 ��Spring������ [^ MyBatis Demo Reference]

### 3.6 ���򹤳� [^ MyBatis Reverse Engineering Reference]
[^ MyBatis Reverse Engineering Reference]: [Coding_MyBatis_Annotation-Reverse-Engineering-Project][28]��[Coding_MyBatis_XML-Reverse-Engineering-Project][29]

<br>
## �ġ�����
- `LIKE '%' #{name} '%'`Ԥ����`SQL`������ʹ�� [^ Mybatis Like Reference]�����е�`%`��`#{name}`֮��Ҫ�пո񣬷����ѯ�������Ͳ��Ǹ���`#{name}`����ģ����ѯ�ˣ��Ѿ���֤������ԭ�򣩣� 
- `Provider`�з�������ӳ�����⣺
	- һ��������`@SelectProvider`������
		- ����ֻ��һ�������������������`Provider`��ֱ��ʹ�ò������ƣ�������ֱ��ʹ��`Map<String, Object>`��Ϊ������
		- �������������`@Param`���Σ���ô`Provider`�ж�Ӧ�ķ���������ʽ����Ϊ`Map<String, Object>`��
	- ���������������ϲ�����`@SelectProvider`������
		- �ڳ���һ����������£�`Provider`�������`Map<String, Object>`��Ϊ�����Ĳ������������ʹ��`@Param`ע�⣬��ô�����ڿ���ͨ��`map.get(@Param`������ַ���)��ȡ���������û��ʹ��`@Param`ע�⣬��ô������`Map`���Բ�����˳��Ϊ`key`���в�ѯ��
- `select`�����ݿ�û�ж�Ӧ��¼��ʱ��������ص��Ƕ���������`null`��������ص���`List<?>`��������`[]`������Ϊ�գ�������`null`���༴��ָ�룬ԭ�������Ҫ��`MyBatis`��Դ�룩��

[^ Mybatis Like Reference]: [ITEye][4]

[1]: https://github.com/mybatis/mybatis-3
[2]: http://baike.baidu.com/link?url=gtrdQbHklN6ccRZLVDbAY6vUE0HQWRXveBQyR_W6IjVi4pUQVKs4rzEOJca2Rm9wzbrv3XvMTi7EDWYjj1ogsK
[3]: http://p1.bpimg.com/567571/2c7cac3395c7ca74.png
[4]: http://happyqing.iteye.com/blog/2172397
[5]: http://www.programgo.com/article/29663194854/
[6]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git
[7]: http://www.mybatis.org/mybatis-3/zh/configuration.html
[8]: http://i1.piimg.com/567571/e28e07e3e164dde0.png
[9]: http://i1.piimg.com/567571/48507658d95ce44d.png
[10]: http://i1.piimg.com/567571/77ee5defdfa274e4.png
[11]: http://i1.piimg.com/567571/5f11bd341aafc0ae.png
[12]: http://i1.piimg.com/567571/ae4b31bda4dcd652.png
[13]: http://i1.piimg.com/567571/c87a4944b5e9254c.png
[14]: http://i1.piimg.com/567571/82cde846fca99bdb.png
[15]: http://i1.piimg.com/567571/44e41ac0c850072f.png
[16]: http://p1.bpimg.com/567571/8959c88ef3593562.png
[17]: http://i1.piimg.com/567571/4e7707bb9cb7984a.png
[18]: http://p1.bpimg.com/567571/6c007a58a48d8d02.png
[19]: http://i1.piimg.com/567571/1c680e59af4af68e.png
[20]: http://p1.bqimg.com/567571/a8c8213bba7c0989.png
[21]: http://p1.bqimg.com/567571/46bb4b44ec1f0454.png
[22]: http://i1.piimg.com/567571/bfc9ededb28d2a9b.png
[23]: http://blog.csdn.net/sun_aichao/article/details/46455649
[24]: http://p1.bqimg.com/567571/add3eb7f35184410.png
[25]: http://p1.bqimg.com/567571/a590105283ba24fa.png
[26]: http://p1.bqimg.com/567571/c1b835b976680d36.png
[27]: http://p1.bqimg.com/567571/abd7edb5a43c7d9a.png
[28]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/generator
[29]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/src/main/resources/config/mybatis/generator
[30]: http://p1.bqimg.com/567571/878fe686ba9ca5a8.png