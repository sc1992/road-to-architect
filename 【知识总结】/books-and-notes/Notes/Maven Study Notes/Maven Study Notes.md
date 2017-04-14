# Maven Study Notes [^ history version]

@(Notes)[Maven, notes]

> VICTORY LOVES PREPARATION

[^ history version]: 
> �汾��Ϣ��
> 2017��03��31�� ����10:04:30
> 2017��03��31�� ����03:03:52
> 2016��09��01�� 22:57
> 2016��08��30�� 09:20
> 2016��08��30�� 09:20
> 2016��07��30�� 10:53



[TOC]

***
## ����˼ά��ͼ
- **`SUMMARY��`**
- *`IMG.`˼ά��ͼ��*<br><br>![](http://i4.buimg.com/567571/e344c7a42d1c930f.png)

<br>
## һ����Ҫ����
### 1.1 ����
- `Maven`��һ����ƽ̨����Ŀ�����ߣ���Ҫ����`Java`ƽ̨����Ŀ����������������

<br>
## ������������
### 2.1 ����
- *`IMG.` `Maven`����ͼʾ��*<br>![ͼ��](http://i1.piimg.com/567571/64805de1cfba5a34.png)
- `Jar`����ͳһ���������Ŀ����ֻ��һ��`Jar`�������һ��`Jar`�����˶�ݣ���
- �Զ������Եȵȡ�

### 2.2 Լ�� 
- `src/main/java`�����Ŀ��`Java`�ļ���
- `src/main/resources`�����Ŀ��`Java`��Դ�ļ���
- `src/test/java`��Ų����ļ���
- `src/test/resources`��Ų����õ���Դ�ļ���
- `pom.xml`ͳһ�������á�

> *ע��*
> - ���һ��`Maven`��Ŀ�������������������������û�о���ָ��Ŀ���ļ���`classes`�ļ�����`test-classes`�ļ���ʱ��`MVN`�����ʱ��Ҳ��Ĭ�ϰ����Ƿŵ���Ӧ��`classes`����`test-classes`�ļ��еġ�
 
### 2.3 ����
- `mvn compile`
	-  ������Ŀ������`target`�ļ���
- `mvn clean`
	- ����`target`�ļ���
- `mvn test`
	- ���в��Է�����
- `mvn package`
	- ����`pom`�ļ��е�`<packaging>`���Դ����
	- ���Ը������õ�`<profile>`���в�ͬ�����Ĵ�� [^ maven profiles reference]��
		
		``` xml
		mvn package -DskipTest -P dev
		```
- `mvn install`
	- ������ҰѰ��ŵ����زֿ⡣
- `mvn archetype : create`
	- ����`Maven`��Ŀ��

> **ע��**
> - `eclipse update project` ������Ŀ������
> - `mvn install / mvn package` ����`mvn compile`��`mvn test`��
> - ����`build`����Ŀ�ļ�û�и��Ĺ���`mvn compile`���������ã�`mvn clean`֮��Ż�������±��롣

[^ maven profiles reference]: [Coding][2] 

### 2.4 ����
- ���һ��`Maven`��Ŀ������һ������ôҪ���ú�**`<dependency>`**{`<groupId>`��`<artifactId>`��`<version>`}��ǰ����������ָ���Ķ���Ҫ`install`���ֿ��У�
- `Maven`���������д����ԣ�Ҳ����˵�������һ��`dependency`���Ǿ������˸�`dependency`������Ķ���

### 2.5 �̳�
- ���̳е�`packaging`����Ϊ`pom`���̳�Ҫʹ��`parent`��ǩ��ע�̳ж������ԡ�
- *`IMG.` `Maven`�̳�ͼʾ��* <br> ![fa](http://i4.buimg.com/567571/93cb481629c137f9.png)

### 2.6 ����
- `<groupId>`��`<artifactId>`��`<version>`��
- һ����������ṩ���꣬���Ե���Ӧ����Ĺ����鿴��Ҳ���Ե���`mvnrepository`���в��ҡ�

### 2.7 �ֿ�
- ���ؿ�
- �����
- **˽��**
	- Nexus�ļ������������أ�Ȼ��ŵ�`webapp`�� ��
	- [ʹ��Nexus�Maven˽��][1]��
- ��Ŀ��`dependency`˳��
	- ���ؿ�ȥ��`maven`��`settings.xml`�ļ����ã���������ѡ��˽����������⣬Ĭ��������⣻
	- ˽���ܹ��Զ�Ѱ������⣬Ҳ����`settings.xml`������˽������������û�����Ĭ��ȥ�������ҡ�
	
### 2.8 ִ��ԭ��
- `org.apache.maven.plugins`�ļ�����`maven`��������Կ���ʹ��`mvn compile`֮�������
- *`IMG.` `Maven`ִ��ԭ��*<br>![](http://i4.buimg.com/567571/fc66a533a33f1fd6.png)

### 2.9 ����
- ʹ��<localRepository>��ǩ���ñ��ؿ�λ�ã�Ĭ��`c:\users\�û���\.m2`�ļ����¡�
 
<br>
## ����ע������

[1]: http://www.cnblogs.com/quanyongan/archive/2013/04/24/3037589.html
[2]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/