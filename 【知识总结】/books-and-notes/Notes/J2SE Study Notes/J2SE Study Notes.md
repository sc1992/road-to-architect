# J2SE Study Notes [^ history version] [^ reference]

@(Notes)[J2SE, Notes]

> VICTORY LOVES PREPARATION

[^ history version]: 
- �汾��Ϣ<br>
> 2017��2��10�� ����11:37:08
> 2017��2��8�� ����11:29:03
> 2017��2��7�� ����5:44:48
> 2017��2��6�� ����9:43:50
> 2016��8��23�� 11:19
> 2016��8��23�� 10:21
> 2015��7��20��
> 2015��3��10��

[^ reference]: �������APP

[TOC]

***
## ����˼ά��ͼ
- ��ȱ��
- Ŀ¼�ṹ��Ҫ��һ������Java֪ʶ��ϵ��������Ȼ�������һ��˼ά��ͼ��


<br>
## һ������
### 1.1 Java����
#### 1.1.1 Java SE Platform Structure
- `SUMMARY:`�б�Ҫ���и����ֵ��ܽᡣ
- ![][1]
#### 1.1.2 ����Լ�������������
#### 1.1.3 һ��������Java����ʾ��
#### 1.1.4 ����������������Щ��

#### 1.1.5 �̳��еĹ��췽��
- `SUMMARY:`��û�и��������ӡ�
- �����޹��췽����ʱ��`Java`���Զ��������һ���޲ι��췽�������ǵ����й��췽����ʱ��`Java`�Ͳ���Ĭ�����һ���޲����Ĺ��췽����
- �����б�����ø���Ĺ��췽����û�и��������ӣ���

> *ע��*
> - ��������ʽ������ʽ�����������ø����еĹ��췽������ʽ�Ļ�Ҳ��˵ͨ��Ĭ�Ϲ��췽�����ã���ʽ�Ļ�Ҳ��˵ͨ���Լ�����Ĺ��췽�����е��á�
> - ���Ҫ��д���ø��๹�췽����Ҳ��˵`super()`����ô�����������๹�췽���ĵ�һ�С�


#### 1.1.6 ��̬�󶨣��ٰ󶨻��߶�̬��
- `SUMMARY:`�����е�ʱ��ָ�����ָ������ָ�������ࡣ

#### 1.1.7 ��������
- `SUMMARY:`�����������͡�������֡������������������֡�
- ![][19]

#### 1.1.8 ע��
#### 1.1.9 ��ʶ���͹ؼ���
#### 1.1.10 �����
#### 1.1.11 �ڴ�ռ�ķ���ͻ���
##### 1.1.11.1 �ڴ����
- `SUMMARY:`�����洢�ڶ�ջ�С�
###### 1.1.11.1.1 ��
- ��������������͵�ʵ����
###### 1.1.11.1.2 ջ
- ��ż��������ͱ�����ֵ�ͱ�������
- ��������������͵ı������Լ�����ָ��ʵ�����׵�ַ��

##### 1.1.11.2 ��������
- `Java`�Զ���������������ȴ����ȷ��
- ��һ����̨�߳�`gc`�����������գ�
- ȱ�㣺���ܹ���ȷ�ػ����ڴ棻
- *`eg.`����ʵ����*

	``` java
	java.lang.System.gc();
	```
- �������Ὠ��ϵͳ�����ڴ棬����ϵͳ��һ�����Ӧ������ȥ���ڴ�ʱ���ã�����������ᣬ�����òŻ�ȥ�����������ա�

#### 1.1.12 �ֲ�������ʵ�������;�̬����
- �ֲ�����û��Ĭ��ֵ����������Ĭ��ֵ�ġ�
- *`EG.`ʵ����*`int`���͵�����Ĭ��ֵ��`0`����`Integer`���͵�����Ĭ��Ϊ`null`��

#### 1.1.13 ���뵼���������
#### 1.1.14 ����
#### 1.1.15 ��Ͷ���
#### 1.1.16 ���л� [^ Serialization Reference]
[^ Serialization Reference]: [�ٶȰٿ�][27]��[CSDN][28]

- **`SUMMARY:`���л� ��`Serialization`���ǽ������״̬��Ϣת��Ϊ���Դ洢�������ʽ�Ĺ��̡�**
- ���л� ��`Serialization`���ǽ������״̬��Ϣת��Ϊ���Դ洢�������ʽ�Ĺ��̡������л��ڼ䣬�����䵱ǰ״̬д�뵽��ʱ��־��Դ洢�����Ժ󣬿���ͨ���Ӵ洢���ж�ȡ�����л������״̬�����´����ö���
- ���л�`ID`������ [^ Serialization ID Reference]��
[^ Serialization ID Reference]: [CSDN][29]

	- **`SUMMARY:` `java`�����л�������ͨ��������ʱ�ж����`serialVersionUID`����֤�汾һ���Եġ�**
	- ��ʵ��������л�`ID`���Źؼ������ã����������Ƿ��ܹ��ɹ������л�������˵��`java`�����л�������ͨ��������ʱ�ж����`serialVersionUID`����֤�汾һ���Եġ��ڽ��з����л�ʱ��`JVM`��Ѵ������ֽ����е�`serialVersionUID`�뱾��ʵ�����е�`serialVersionUID`���бȽϣ������ͬ����Ϊ��һ�µģ�����Խ��з����л�������ͻᱨ���л��汾��һ�µ��쳣��
- *`EG.`ʵ�����룺*

	``` java
	package com.cmc.demo.javase.serialization;
	
	import java.io.FileInputStream;
	import java.io.FileNotFoundException;
	import java.io.FileOutputStream;
	import java.io.IOException;
	import java.io.ObjectInputStream;
	import java.io.ObjectOutputStream;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	/**
	 *  �������л��ͷ����л�Demo
	 * @author Thomas Lee
	 * @version 2017��4��5�� ����11:57:27
	 */
	public class ObjSerializationAndDeserializationDemo {
	
	    private static final Logger LOG = LoggerFactory.getLogger(ObjSerializationAndDeserializationDemo.class);
	
	    public static void main(String[] args) {
	        // ��Person�������л�
	        serializePerson();
	        LOG.info("the result of deserialization: " + deserializePerson().toString());
	    }
	
	    /**
	     * ���л�Person���󣬽���洢�� E:/hello.txt�ļ���
	     * @author Thomas Lee
	     * @version 2017��4��5�� ����11:57:38
	     */
	    private static void serializePerson() {
	        Person person = new Person();
	        person.setAge(30);
	        person.setName("SerializePerson");
	        try (ObjectOutputStream outputStream = new ObjectOutputStream(new FileOutputStream("E:/hello.txt"))) {
	            outputStream.writeObject(person);
	            LOG.info("���л��ɹ���");
	        } catch (FileNotFoundException e) {
	            LOG.error(e.getMessage(), e);
	        } catch (IOException e) {
	            LOG.error(e.getMessage(), e);
	        }
	    }
	
	    /**
	     * ִ�з����л���������Person����
	     * @return �����л�֮���ȡ�Ķ���
	     * @author Thomas Lee
	     * @version 2017��4��5�� ����11:58:51
	     */
	    private static Person deserializePerson() {
	        Person person = null;
	        try (ObjectInputStream inputStream = new ObjectInputStream(new FileInputStream("E:/hello.txt"))) {
	            try {
	                person = (Person) inputStream.readObject();
	                LOG.info("ִ�з����л����̳ɹ���");
	            } catch (ClassNotFoundException e) {
	                LOG.error(e.getMessage(), e);
	            }
	        } catch (FileNotFoundException e) {
	            LOG.error(e.getMessage(), e);
	        } catch (IOException e) {
	            LOG.error(e.getMessage(), e);
	        }
	        return person;
	    }
	
	}
	```
#### 1.1.17 static���η�
#### 1.1.18 `final`�ؼ���
- `SUMMARY:`��`final`���εı������������಻�ܱ���ı䡣
- �����εı������ܱ��ı�
- �����εķ������ܱ���д
- �����ε��಻�ܱ��̳�

> *ע��*
> -  finalֻ����ڴ��ַ��Ч��Ҳ����˵�ı����ûᵼ�±����ڴ��󣬵����������ǿ��Ա仯�ġ�

#### 1.1.19 ����Ȩ�޿���
- *`img.` `java`�з��ʿ���Ȩ��ͼ��<br>*![][22]

	> *ע��*
	> -  **���ʿ���Ȩ����Ե������ʵ����Ҳ��˵���󣬶������౾��**

#### 1.1.20 �ӿ�
#### 1.1.21 ��װ���Լ������װ��
- `SUMMARY:`�Զ�ʵ�ֻ����������ͺ���������֮���ת����
##### 1.1.21.1 ����
- ��������������תΪ��Ӧ�Ļ�����������

##### 1.1.21.2 װ��
- �ѻ�����������ת��Ϊ��Ӧ��������������

> *ע��*
> - `java`Ϊ�����Ч�ʣ�`IntegerCache`������һ�����黺����ֵ��`-128`��`127`��`Integer`���󡣵����ǵ���`Integer.valueOf��int i��`��ʱ�����`i`��ֵ��`>=-128`��`<=127`ʱ����ֱ�Ӵ���������з���һ�����󣬷����`new`һ��`Integer`����
> - *Դ�룺*
> ``` java
> public static Integer valueOf(int i)
> {
>     if(i >= -128 && i <= IntegerCache.high)
>         return IntegerCache.cache[i + 128];
>     else
>         return new Integer(i);
> }
> ```
> - �����������Ͳ������Ӧ��װ�����ͱ�����ֵ��`null`���ᱨ��ָ���쳣��
> ``` java
> Integer a = null;
> int b = a;
> ```
>  ``` xml
> Exception in thread "main" java.lang.NullPointerException
>	at com.cmc.j2se.StreamDemo.main(StreamDemo.java:29)
> ```


#### 1.1.22 Object��ǳ��
#### 1.1.23 String��StringBuffer��StringBuilder
- `SUMMARY:`����ĳ����࣬��Ҫƫ���ƶ���׼��

##### 1.1.23.1 String
- `SUMMARY:`ʹ���˳ػ�˼��Ĳ��ɸı��`Unicode`�ַ����С�
- ���ɸı��`Unicode`�ַ����У�
- �ػ�˼�룬����Ҫ��������ݷ��ڳ��У���һ���洢���������һЩ������Դ�Լ��ٴ洢�ռ�Ŀ�����
- ��`String`���У�������ֵ����ʱ���ᵽ`Java`�����ռ�Ĵ�����ȥ���ң����û������ڴ����ﴴ��һ���ַ������󣬲��������ַ�����������������оͷ��ش������ַ����ĵ�ַ�����������ַ�������������
- �����`new`������ڶѿռ��д���`String`��Ķ��󣬲����������Ĺ��̡�

##### 1.1.23.2 StringBuffer
- `SUMMARY:`�̰߳�ȫ�Ŀɸı�`Unicode`�ַ����С�
- �ɸı��`Unicode`�ַ����У�
- ���������������̰߳�ȫ�ģ�
- `String`���ڽ����ַ�������ʱ���Ե�Ч�ʺܵͣ�������Ϊ���������Ķ���������ǲ��ܹ��޸ĵģ��������ַ���ʱҲ��ֻ�ܴ����µĶ���
- ���ںܶ��ַ�������ʱ��Ӧ��ʹ��`StringBuffer`�࣬ʹ�������Ķ����������ַ�������ʱ�Ͳ����ж�����м�������ɣ��Ӷ��Ż���Ч�ʡ�

##### 1.1.23.3 StringBuilder
- `SUMMARY:`���̰߳�ȫ�Ŀɸı�`Unicode`�ַ����С�
- �ɸı��`Unicode`�ַ����У�
- ����ͬ`StringBuffer`��ֻ�ǲ�֧�ֲ������������̰߳�ȫ�ġ�

> *ע��*
> - ���ȿɱ�ѡ��`StringBuffer`����`StringBuilder`��
> - �̰߳�ȫ����`StringBuffer`�����ܿ���`StringBuilder`��

#### 1.1.24 �ڲ���
#### 1.1.25  �쳣
- `SUMMARY:`�쳣��`Java`�ṩ�����ڴ�������е��쳣��ʵ��������ָ�Ĵ����һ�֣���һ�ֻ��ơ�
- `Java`�쳣��`Java`�ṩ�����ڴ�������е��쳣��ʵ��������ָ�Ĵ����һ�֣���һ�ֻ��ƣ�
- ������õĳ���Ӧ�����쳣������ʱ���ṩ�����쳣�ķ�����ʹ���򲻻���Ϊ�쳣�ķ�������ϻ��������Ԥ���Ľ��
- `Java`��������������������쳣�¼���������һ���쳣����󣬸ö����װ���쳣�¼�����Ϣ�������ύ��Java����ʱϵͳ��������̽����׳���`throw`���쳣
- ��Java����ʱϵͳ���յ��쳣��ʱ�򣬻�Ѱ���ܴ�����һ�쳣�Ĵ��룬���ѵ�ǰ���쳣���󽻸��䴦����һ���̳�Ϊ����`catch`���쳣
- �쳣�ṹͼ<br>![][2]
- ��������쳣�ķ��࣬`Throwable`���쳣�����ȣ�`Object`������������ȣ�����`Throwable`��������`Error`�׳�����ϵͳ�Ĵ��󣨱�ʾϵͳ�����Ͳ���Դ�Ĵ��󣩣����ó���Ա�ܣ�`Exception`�׳������쳣���ɳ���Ա���µĴ��󣩣�**����`RuntimeException`��ϵͳ���Զ����񣩴�������ʱ�����ֵ��쳣�������쳣���Բ���Ҳ���Բ������������쳣������벶��**
- ��ϵ
	- ���̳�`Throwable`��
- ����
	- �쳣
		- �����ǿɱ����Ƶģ�`checked`�������ǲ��ɿ��Ƶģ�`unchecked`��
		- ��ʾһ���ɳ���Ա���µĴ���
		- Ӧ����Ӧ�ó��򼶱���д���
	- ����
		- ���ǲ��ɿ��Ƶģ�`unchecked`��
		- ������ʾϵͳ������ߵײ���Դ�Ĵ���
		- һ�����Ա�޷�����Ҳ����Ҫ���д���
- �쳣��һ�ִ����ɳ���Ա���£��������ִ�����ʵ�������еĴ��󣬲��ǳ��������еĴ��󣬺���ָϵͳ�������		    �ײ���Դ�Ĵ���

#### 1.1.26 ���ԣ�assert��
#### 1.1.27 ��==����equals
#### 1.1.28 Overload��Override
#### 1.1.29 ������ͽӿ�
##### 1.1.29.1 ������
- `SUMMARY:`��������ʶ�����ʱ�򣬻�Ѿ�����ͬ��������Ϊ�������Ϊһ�������ࡣ��Ҫƫ����븴�á�
- `abstract`��ʾ����ģ�������Ҫ��һ�����η�������������ͷ������ֱ�������󷽷��ͳ����ࣻ
- **��������ʶ�����ʱ�򣬻�Ѿ�����ͬ��������Ϊ�������Ϊһ�������ࡣ**���綯�����һ���ܳ���ĸ�����õ������ʵ��ʱ������ĳ���������ֵ�ʵ��������˵������Ҫĳ���������ʵ��ʱ��ֻ�ܹ���ĳ���������ʵ�������棻
- �����಻��ʵ�������������ɳ�����Ķ��󣬵��ܶ���һ�����á�

###### 1.1.29.1.1 ������
- **��ʹ������Ϊһ�������࣬����ཫ�������ɶ���ʵ������������Ϊ����������������ͣ�Ҳ���Ǳ���ʱ���ͣ�**
- ��������൱��һ����İ��Ʒ����Ҫ����̳в��������еĳ��󷽷�����ʱ������ִ���ʵ����������**�������û��ʵ�ָ���ĳ��󷽷�����ô����ҲҪΪ�����ࡣ**

###### 1.1.29.1.2 ���η���
- ��ʹ���������ɳ��󷽷���Ҳ����ֻ��������û��ʵ�֣���Ҫ����̳�ʵ�֣�
- ���󷽷�������ĳ�ֱ�׼�������׼�����幦�ܣ���������ȥʵ�ֹ��ܣ�����̳��˸��ಢ��Ҫ�����Ӹ���̳еĳ��󷽷���ʵ�֣���
- ����һʱ���벻����ô��ʵ�֣�������Ҫ����ȥʵ�ֶ�����ĳ�ֱ�׼������������Ա�����Ϊ����

> *ע��*
> - �г��󷽷�����һ���ǳ����࣬���ǳ������в�һ�����ǳ��󷽷���**Ҳ����ȫ�Ǿ��巽����**
> - ��һ���ǳ�����̳���ĳ��������ʱ������ʵ�����̳г���������г��󷽷�����**������ĵ�һ���ǳ����������Ҫʵ���丸�����еĳ��󷽷�**������Ҳ�����˸���̳еĳ��󷽷���
> - һ������ֻҪ�����г��󷽷�����ô�����ͱ��뱻����ɳ����࣬��֮����ʹһ���಻�����κγ��󷽷����������Ȼ���Ա�����ɳ����ࡣ
> - `abstract`��`final`����ͬʱʹ�ã��������ؼ��������෴�ĺ��塣`abstract`���η������࣬�������ñ�����д�����Ǽ̳еģ���**`final`����ֹ��д�ͼ̳е�**��`private`��`abstract`Ҳ����ͬʱ���η�������Ϊ**`private`��ֹ�̳�**��Ҳ����ֹ����дʵ�֣���`abstract`��������Υ����

##### 1.1.29.2 �ӿ�
- `SUMMARY:`����ĳ����࣬��Ҫƫ���ƶ���׼��
###### 1.1.29.2.1 ����
- `SUMMARY:`�ӿڴӱ�����˵��һ������ĳ����ࡣ�������еķ��������Զ��ǹ������߾�̬�ġ�     
- �ӿڴӱ�����˵��һ������ĳ����ࡣ
- �ڽӿ��У����еķ���Ϊ����������ķ�����`public abstract`��
- �ڽӿ��У����е����Զ��ǹ�������̬�ĳ�����`public static final`��
- �ӿ���ӿ�֮����Զ�̳У���`extends`�����֮���ö��Ÿ�����
- �ӿ���û�й��췽���������á�`new`�ӿ�������ʵ����һ���ӿڣ�����������һ���ӿڡ�

###### 1.1.29.2.2 ʵ��
- һ����ʵ��һ���ӿڱ���ʵ�ֽӿ������еķ�����������Ϊ�����࣬**������ʵ�����еķ���Ҫ����`public`(����ʡ��)��**
- ���е�Ĭ�����η���`default`��
- �ӿ��е�Ĭ�����η���`public`��
- һ������˼̳���һ�����⣨ֻ�ܼ̳�һ���ࣩ��������ʵ�ֶ���ӿ�(�ӿ�֮���ö��ŷָ�)��

###### 1.1.29.2.3 ����
- ���ʵ�ֶ�̳У��ýӿ���ʵ�ֶ�̳в������������ϵ�ĸ��Ӷȡ�**��Ϊ�ӿڲ����࣬���಻��һ������ϣ�������Ļ����Ͻ����ٴγ���**
- **�ӿڿ��Գ������Ҫ���ͣ��ֳ������ι�ϵ���ͣ����Ͽ������һ�㷽����**
- �ӿڸ��룬���װ���йء�һ�������ж�����棬����ֻչʾ���м������棬�����Ķ����ء���˿��Կ�Ϊ�����߲�εķ�װ������һ����ӿ��������ɸ�С�ӿڣ�
- **ͨ���ӿ��ƶ���׼������Ҫ�����ã���**
- �ӿڣ��ƶ���׼��
- �ӿڵĵ����ߣ�ʹ�ñ�׼��
- �ӿڵ�ʵ���ࣺʵ�ֱ�׼��
- **��������ã���ʹ�ñ�׼��ʵ�ֱ�׼�ֿ���ʹ�ñ�׼���ƶ��ߺ�ʵ���߽��ż�Ϲ�ϵ�����м�ǿ�Ŀ���ֲ�ԡ�**

###### 1.1.29.2.4 �ӿڱ��ԭ��
- **������Խӿڱ�̣����ýӿھ;����ýӿڣ���**
- **�ӿڸ���ԭ�������ɸ�С�ӿ�ȡ��һ����ӿڣ���**

> *ע��*
> - �ӿ���û�й�������Ҳû��`main`������
> - ����ļ̳��У�ֻ�������ؼ̳У���ʵ�ֽӿ�ʱ��һ�������ʵ�ֶ���ӿڣ�ÿ���ӿڼ�ʹ�ö��š�,���ָ�����ʱ�Ϳ��ܳ��ֳ����򷽷�����ͻ����������������ʱ�����������ͻ������Ҫ��ȷָ�������Ľӿڣ������ͨ�����ӿ���.������ʵ�֡�������ַ�����ͻʱ����ֻҪʵ��һ�������Ϳ����ˡ�

##### 1.1.29.3 ����
###### 1.1.29.3.1 �﷨
- `SUMMARY:`**�ӿ��еķ������ǳ��󹫿��ģ��������еķ������󡢾��嶼�У��ӿ������Զ��ǹ���������������������ͨ��Ա������**
- ����������й��췽�����ӿ��в����й��췽����
- �������п�������ͨ��Ա�������ӿ���û����ͨ��Ա������
- �������п��԰����ǳ������ͨ�������ӿ��е����з������붼�ǳ���ģ������зǳ������ͨ������
- �������еĳ��󷽷��ķ������Ϳ�����`public`��`protected`�ͣ�Ĭ�����ͣ���Ȼ`eclipse`�²�������Ӧ��Ҳ���У������ӿڳ��󷽷�ֻ����`public`���͵ģ�����Ĭ�ϼ�Ϊ`public abstract`���ͣ�
- �������п��԰�����̬�������ӿ��в��ܰ�����̬������
- ������ͽӿ��ж����԰�����̬��Ա�������������еľ�̬��Ա�����ķ������Ϳ������⣬���ӿ��ж���ı���ֻ����`public static final`���ͣ�����Ĭ�ϼ�Ϊ`public static final`���ͣ�
- һ�������ʵ�ֶ���ӿڣ���ֻ�ܼ̳�һ�������ࡣ

###### 1.1.29.3.2 Ӧ��
- `SUMMARY:`**�ӿ���Ӧ������Ҫ������ϵͳ����ܹ�����ϣ�����ģ��֮���ͨ����Լ������������Ҫƫ���ڴ������á�**
- �ӿڸ��������ϵͳ�ܹ���Ʒ����������ã���Ҫ���ڶ���ģ��֮���ͨ����Լ��
- ���������ڴ���ʵ�ַ��淢�����ã�����ʵ�ִ�������ã�
- *`eg.`*ģ�巽�����ģʽ�ǳ������һ������Ӧ�ã�����ĳ����Ŀ������Servlet�඼Ҫ����ͬ�ķ�ʽ����Ȩ���жϡ���¼������־�ʹ����쳣����ô�Ϳ��Զ���һ������Ļ��࣬�����е�`Servlet`���̳����������࣬�ڳ�������`service`���������Ȩ���жϡ���¼������־�ʹ����쳣�Ĵ��룬�ڸ���������ֻ����ɸ��Ե�ҵ���߼����롣

> *ע��*
> - ������˼·���ȴ�������ͳ�����ͽӿڵ�**��������**��Ȼ���ٱȽ����ߵ�**�﷨ϸ��**�������˵���ߵ�**Ӧ������**�Ƚ������﷨ϸ������������ǣ�**�ȴ�һ�����еĹ��췽������ͨ��Ա�����ͷ������������󷽷�������̬�����ͷ������̳��Ե�6��������һȥ�Ƚϻش𣬽��Ŵӵ����߼̳еĽǶȵĻش��ر����������һ�����͵�������չ���Լ����ļ������ס�**

#### 1.1.30 class.forName����
#### 1.1.31 ClassLoader����class
#### 1.1.32 `equals()`��`hashCode()`
- `SUMMARY:`**ͨ��hash�㷨�����ݲ�ѯ�ٶȣ�ͨ������ϣ����飩������������ݲ���ͨ��hashɢ��ֱ�Ӷ�λ����λ�á�equals��ȣ�hashCode�ض���ȣ���֮���ǡ�**
- ͨ�������һ���������Ƿ����ĳ�����󣬾�����һȡ��ÿ��Ԫ����Ҫ���ҵ�Ԫ�ؽ��бȽϣ�������ĳ��Ԫ����Ҫ���ҵĶ������`equals`�����ȽϵĽ�����ʱ����ֹͣ�������Ҳ����ؿ϶�����Ϣ�����򷵻ط񶨵���Ϣ�����һ���������кܶ�Ԫ��Ʃ���ǧ�����Ԫ�أ�����û�а���Ҫ���ҵĶ���ʱ������ζ����ĳ�����Ҫ�Ӹü�����ȡ����ǧ�����Ԫ�ؽ�����һ�Ƚϲ��ܵõ����ۣ����ǣ����˾ͷ�����һ�ֹ�ϣ�㷨����ߴӼ����в���Ԫ�ص�Ч�ʣ����ַ�ʽ**�����Ϸֳ����ɸ��洢����ÿ��������Լ����һ����ϣ�룬���Խ���ϣ����飬ÿ��ֱ��Ӧĳ���洢���򣬸���һ������Ĺ�ϣ��Ϳ���ȷ���ö���Ӧ�ô洢���Ǹ�����**
- `hashCode`��������������⣺**�����صľ��Ǹ��ݶ�����ڴ��ַ�������һ��ֵ������һ����������Ҫ����µ�Ԫ��ʱ���ȵ������Ԫ�ص�`hashCode`��������һ�����ܶ�λ����Ӧ�÷��õ�����λ���ϡ�������λ����û��Ԫ�أ����Ϳ���ֱ�Ӵ洢�����λ���ϣ������ٽ����καȽ��ˣ�������λ�����Ѿ���Ԫ���ˣ��͵�������`equals`��������Ԫ�ؽ��бȽϣ���ͬ�Ļ��Ͳ����ˣ�����ͬ��ɢ�������ĵ�ַ��**����һ��ʵ�ʵ���`equals`�����Ĵ����ʹ�󽵵��ˣ�����ֻ��Ҫһ���Ρ�
- ֻ�����ʵ������Ҫ�����ù�ϣ�㷨���д洢�ͼ���ʱ����������Ҫ��Ҫ�󸲸�`hashCode`��������ʹ���������ʱ�����õ���ǰ���`hashCode`����������Ϊ���ṩһ��`hashCode`����Ҳ������ʲô���ã�û׼�Ժ�ʲôʱ�����õ���������ˣ����ԣ�ͨ��Ҫ��`hashCode`������`equals`����һ����ͬʱ���ǡ�
- `equals()`��ȵ���������`hashcode()`һ����ȣ�`equals()`����ȵ���������ȴ������֤�����ǵ�`hashcode()`����ȡ����仰˵��`equals()`��������ȵ���������`hashcode()`�п�����ȡ���������`hashcode()`���ȣ�һ�����Ƴ�`equals()`Ҳ���ȣ�`hashcode()`��ȣ�`equals()`������ȣ�Ҳ���ܲ��ȡ�
- **ͨ����˵��һ���������ʵ��������`equals`�����ȽϵĽ�����ʱ�����ǵĹ�ϣ��Ҳ������ȣ�����֮�򲻳�������`equals`�����ȽϽ������ȵĶ����������ͬ�Ĺ�ϣ�룬����˵��ϣ����ͬ�����������`equals`�����ȽϵĽ�����Բ��ȡ�**
- ��һ�����󱻴洢��`hashset`�������Ժ󣬾Ͳ����޸���������е���Щ��������ϣֵ���ֶ��ˣ����򣬶����޸ĺ�Ĺ�ϣֵ������洢��`hashset`����ʱ�Ĺ�ϣֵ�Ͳ�ͬ�ˣ���������£���ʹ��`contains`����ʹ�øö���ĵ�ǰ������Ϊ�Ĳ���ȥ`hashset`�����м�������Ҳ�������Ҳ�������Ľ������Ҳ�ᵼ���޷���`hashset`�����е���ɾ����ǰ���󣬴Ӷ�����ڴ�й¶����ν���ڴ�й¶Ҳ��˵��һ�������ٱ�ʹ�ã�����һֱռ���ڴ�ռ䣬û�б��ͷš�

#### 1.1.34 �Ƿ���Դ�һ��static�����ڷ����Է�static�����ĵ���

#### 1.1.35 ��д����
- `SUMMARY:`��д�ǽ����ڸ�����߸��ӿڵĻ����ϵġ�
- ��д�������ܱȱ���д���������и��ϸ�ķ��ʼ���
- �����б�����뱻��д��������ͬ��
- �������ͱ����뱻��д�����ķ���������ͬ��
- ��д���������׳��µ��쳣���߱ȱ���д���������ļ���쳣����ļ���쳣�����ǿ����׳����٣������޻��߲��׳��쳣��
	- *`eg.`�������£�* 
	``` java
	import java.io.*;
	
	public class Test {
	    public static void main(String[] args) {
	        Animal h = new Horse();
	        try {
	            h.eat();
	        } catch (Exception e) {
	        }
	    }
	}
	
	class Animal {
	    public void eat() throws Exception {
	        System.out.println("Animal is eating.");
	        throw new Exception();
	    }
	}
	
	class Horse extends Animal {
	    public void eat() throws IOException {
	        System.out.println("Horse is eating.");
	        throw new IOException();
	    }
	}
	```

	- ��������У������׳��˼���쳣Exception�������׳���IOException��Exception�����࣬Ҳ���Ǳȱ���д�ķ����׳��˸����޵��쳣�����ǿ��Եġ�����������������׳�IOException�������׳���Ϊ����Exception����ô����ͨ������ġ�

		> *ע��*
		> - ��������ֻ����Լ���쳣����������ʱ�쳣RuntimeException�������಻���������֮�С�

- ������д����ʶΪ`final`�ķ�����
- ���һ���������ܱ��̳У�������д����
	- �Ƚϵ��͵ľ��Ǹ����private���������������һ����Ȥ������
		``` java
		public class Test {
		    public static void main(String[] args) {
		        //Animal h = new Horse();
		        Horse h = new Horse();
		        h.eat();
		    }
		}
		
		class Animal {
		    private void eat() {
		        System.out.println("Animal is eating.");
		    }
		}
		
		class Horse extends Animal {
		    public void eat() {
		        System.out.println("Horse is eating.");
		    }
		}
		```
	- ��δ�������ͨ������ģ������Ͽ���Υ������д���򣬵�ʵ��������һ���ɺϡ�`Animal`���`eat()`�������ܱ��̳У����`Horse`���е�`eat()`������һ��ȫ�µķ�����������дҲ�������أ�ֻ��һ��ֻ����`Horse`���ȫ�µķ���������úܶ����Ի��ˣ�����Ҳ������ô������⡣*`eg.`������룺*
	``` java
	Animal horse = new Horse();
	horse.eat();
	```
	- �������ᱨ��Ϊʲô�أ�`Horse`���`eat()`������`public`�İ���Ӧ�ÿ��Ե��ð������μǣ�**��ֻ̬���������õķ������������������ķ�����**

#### 1.1.36 ���� [^ genericity reference]
- **`SUMMARY:`һ�����������������͡�**
- ����
	- `JDK1.4`��ǰ���Ͳ���ȷ��װ�뼯�ϵ����Ͷ�������`Object`�Դ����Ӷ�ʧȥ�Լ���ʵ�����ͣ�
	- �Ӽ�����ȡ��ʱ������Ҫת�ͣ�Ч�ʵͣ����ײ�������
- �������
	- �ڶ��弯�ϵ�ʱ��ͬʱ���弯���ж��������
- �ŵ�
	- ��ǿ����Ŀɶ��Ժ��ȶ���
- ![][4]

[^ genericity reference]: [����԰][3]��[CSDN][26]
#### 1.1.37 ��̳�ʶ
- `a += b`  <==> `a = (a.Type) a + b`��
- �����±걻��������Ԫ��λ�����һ��Ԫ��֮���ƫ������
- ��ͬ�ļ�ϵͳʹ�ò�ͬ�ķ��ű�ʾ�н�����
	- UNIX��\n
	- Windows��\r\n
	- Macos��\n\r

#### 1.1.38 �ݹ� [^ recursion reference]
[^ recursion reference]: [�ٶȰٿ�][24]

- **`SUMMARY:`�ݹ���ǳ�����ñ���Ĺ��̡�ע�⣺��Ҫһ����ֹ������**
- �����������ı�̼��ɳ�Ϊ�ݹ飨`recursion`����
- �ݹ���Ϊһ���㷨�ڳ�����������й㷺Ӧ�ã�
- һ�����̻������䶨���˵������ֱ�ӻ��ӵ��������һ�ַ�������ͨ����һ�����͸��ӵ�������ת��Ϊһ����ԭ�������ƵĹ�ģ��С����������⣬�ݹ����ֻ�������ĳ���Ϳ������������������Ҫ�Ķ���ظ����㣬���ؼ����˳���Ĵ�������
- �ݹ���������������޵�����������������޼��ϣ�
- һ����˵���ݹ���Ҫ�б߽��������ݹ�ǰ���κ͵ݹ鷵�ضΡ����߽�����������ʱ���ݹ�ǰ�������߽���������ʱ���ݹ鷵�ء�

### 1.2 ���߳�
- `SUMMARY:`�߳̿��Կ������������Ľ��̣�ͬһ���̹߳����������ݿռ䣬ÿ���߳��ж���������ջ�ͳ����������`PC`�����߳��л�����С��
- *�˴��������̵߳Ļ���֪ʶ���Ժ�����ѧϰ�̱߳�̡��ɲο��������`APP`��*
#### 1.2.1 ���̺��߳�
- ����
	- ͬһ������ϵͳ��ִ�е�һ���ӳ��򣬰����������֣�����CPU�����롢���ݣ�
	- �����ָ����ͬһ������ϵͳ��ִ�еĶ�����Ĺ���ӳ��򡣿������CPU��ʹ���ʣ�
	- �����ж����Ľ��̿ռ䣨�ѿռ��ջ�ռ䣩��
- �߳�
	- ��ͬһ��������ִ�е��ӳ�������
	- ���߳�ָ����ͬһ�����е��в���ִ�еĶ���ӳ��������������CPU��ʹ���ʣ�
	- �̵߳Ķѿռ��ǹ���ģ�ջ�ռ��Ƕ����ģ��߳����ĵ���Դ�Ƚ���С���໥֮�����Ӱ�졣

	> *ע��*
	> - ����̣��ڲ���ϵͳ����ͬʱ���ж�����񣨳���
	> - ���̣߳���ͬһӦ�ó������ж��˳����ͬʱִ��
	> - ���̵߳�ͬ����ͨ���ڴ����ϼ�`synchronized`���η���

	- *`eg.`*�߳�״̬ת��ʾ��ͼ��<br>![][13]
#### 1.2.2 �̱߳�̵����ַ���
##### 1.2.2.1 ͨ��ʵ��`Runnable`�ӿ�
- *`eg.` ����ʵ����*
	``` java
	package com.cmc.j2se;
	
	/**
	 * �����߳�ʵ��
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��7�� ����2:36:05
	 */
	public class ThreadDemo {
	
	    public static void main(String[] args) {
	        Thread myThread = new ThreadDemo().new MyThread();
	        myThread.start();
	    }
	
	    /**
	     * ����Thread��
	     * @author Thomas Lee
	     * @version 2017��2��7�� ����2:43:52
	     */
	    class MyThread extends Thread {
	        @Override
	        public void run() {
	            super.run();
	            System.out.println("Mythread thread start...");
	        }
	    }
	
	}
	```

##### 1.2.2.2 ͨ���̳�`Thread`��
- *`eg.` ����ʵ����*
	``` java
	package com.cmc.j2se;
	
	/**
	 * �����߳�ʵ��
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��7�� ����2:36:05
	 */
	public class ThreadDemo {
	
	    public static void main(String[] args) {
	        Runnable runner = new ThreadDemo().new Runner();
	        Thread myThread = new Thread(runner);
	        myThread.start();
	    }
	
	    /**
	     * ʵ��Runnable�ӿ�
	     * @author Thomas Lee
	     * @version 2017��2��7�� ����2:43:39
	     */
	    class Runner implements Runnable {
	        @Override
	        public void run() {
	            System.out.println("Mythread thread start...");
	        }
	    }
	
	}
	```
	
#### 1.2.3 Thread�е�һЩ����
#### 1.2.4 �̵߳���������
#### 1.2.5 ���̵߳�ͬ��
#### 1.2.6 sleep()��wait()
#### 1.2.7 ��һ���߳̽�������һ��synchronized�����������߳��Ƿ���Խ���˶������������
#### 1.2.8 ����synchronized��java.util.concurrent.locks.Lock����ͬ

### 1.3 ���Ͽ��
- **`SUMMARY:` ���¿ɷ�Ϊ�����ࣺ`Set`��`List`��`Map`������ÿ���ڲ���������׼���з��࣬���������������׼�Լ��߳��Ƿ�ȫ��**
- ����ʵ��ԭ���д������˽���ܽᡣ
- ![][20]
- ![][21]
#### 1.3.1 ��������
#### 1.3.2 Collection�ӿ�
- ������ļ��Ͻӿڣ�����һ��`Object`��

##### 1.3.2.1 Set
- ����ģ����������ظ���Ԫ�صļ��ϡ�

###### 1.3.2.1.1 HashSet
- `SUMMARY:` `HashSet`ʵ��`Set`�ӿڣ��ɹ�ϣ��ʵ������һ��`HashMap`ʵ����֧�֡�������֤`set`�ĵ���˳��**�ر���������֤��˳���ò���**����������ʹ��`null`Ԫ�ء�
- `HashSet`ʵ��`Set`�ӿڣ��ɹ�ϣ��ʵ������һ��`HashMap`ʵ����֧�֡�������֤`set`�ĵ���˳���ر���������֤��˳���ò��䡣��������ʹ��`null`Ԫ�ء�
- `Object`���е�`hashCode()`�ķ����������඼��̳еķ�����������������һ��`Hash`��ֵ���أ�`HashSet`����`Hash`��ֵȥ�����鳤��ȡģ�������ģֵ�����ģֵ���Ƕ���Ҫ����������е�λ�ã���������±���ͬ����ͬʱ�Ż��ж������е�Ԫ�غ�Ҫ����Ķ���������Ƿ���ͬ�������ͬ�Ż�����λ����ӽ�ȥ����ͬ��������ӣ�
- ��������е�Ԫ�غ�Ҫ����Ķ����`hashCode()`��������ͬ��`Hash`��ֵ���Ż���`equals()`�������ж���������������Ƿ���ͬ��
- `HashSet`��ʵ�֣�
	- ����`HashSet`���ԣ����ǻ���`HashMap`ʵ�ֵģ�`HashSet`�ײ�ʹ��`HashMap`����������Ԫ�أ����`HashSet`��ʵ�ֱȽϼ򵥣����`HashSet`�Ĳ����������϶���ֱ�ӵ��õײ�`HashMap`����ط�������ɡ�

	> *ע��*
	> - Ҫ����`HashSet`�ļ��϶����е��Զ�������븲��`hashCode()`��`equals()`�������������ܱ�֤������Ԫ�ز��ظ���

###### 1.3.2.1.2 TreeSet
- �������`Set`��
- `SortedSet`�ӿ���`Set`���ӽӿڣ�`TreeSet`��`SortedSet`�ӿڵ�ʵ���࣬�����ԶԼ����е�Ԫ�ؽ�������
- ���Զ�����Ķ�������`TreeSet`�У��������Ҫʵ����`Comparable`�ӿڣ�`TreeSet`�����Զ����˵��ظ�Ԫ�����Բ�����Ҫ����`hashCode()`������`TreeSet`����ݱȽϹ����ж�Ԫ�������Ƿ���ͬ����ͬ�����룬`TreeSet`����Ԫ�ش���ʱ�ͽ�������

###### 1.3.2.1.3 LinkedHashSet
##### 1.3.2.2 List
- ����ġ����ظ��ĵ�Ԫ�ؼ��ϡ�

###### 1.3.2.2.1 ArrayList
- `SUMMARY:`ʵ������һ���Զ����������顢��ѯЧ�ʱȽϸߣ���ɾ��Ч�ʱȽϵ͡����̰߳�ȫ��
- **ʵ������һ���Զ�����������**��
- **��ѯЧ�ʱȽϸߣ���ɾ��Ч�ʱȽϵ�**�������ڲ�ѯ�Ƚ�Ƶ������ɾ�������ٵ�Ԫ�ع���ļ��ϣ�
- ���ش�����������ʱ���Ƚ����ֶ����ݣ����ǵ���`ensureCapacity(int minCapacity)`�������������������Ч�ʣ�
- `ArrayList`��`List`�ӿڵĿɱ������ʵ�֡�ʵ�������п�ѡ�б���������������`null`���ڵ�����Ԫ�ء�����ʵ��`List`�ӿ��⣬���໹�ṩһЩ�����������ڲ������洢�б������Ĵ�С��
- ÿ��`ArrayList`ʵ������һ����������������ָ�����洢�б�Ԫ�ص�����Ĵ�С�����������ٵ����б�Ĵ�С��������`ArrayList`�в������Ԫ �أ�������Ҳ�Զ��������Զ��������������������������¿�������ˣ������Ԥ֪�������Ķ��٣����ڹ���`ArrayList`ʱָ��������������Ӵ���Ԫ��ǰ��Ӧ�ó���Ҳ����ʹ��`ensureCapacity`����������`ArrayList`ʵ��������������Լ��ٵ���ʽ�ٷ����������
- ע�⣬��ʵ�ֲ���ͬ���ġ��������߳�ͬʱ����һ��`ArrayList`ʵ��������������һ���̴߳ӽṹ���޸����б���ô�����뱣���ⲿͬ����

###### 1.3.2.2.2 LinkedList
- **�ײ�����˫��ѭ��������ʵ�ֵ�**��
- **��ѯЧ�ʵͣ�������ɾЧ�ʺܸ�**����������ɾ�����ıȽ�Ƶ������ѯ�������ٵ�Ԫ�ع���ļ��ϡ�

###### 1.3.2.2.3 ArrayList

#### 1.3.3 Map�ӿ�
- �ṩ`key`��`value`��ӳ�䡣

##### 1.3.3.1 HashMap
- `SUMMARY:`ʵ�����ǻ��ڹ�ϣ���`Map`�ӿڵ�ʵ�֣�����ɢ�У������̰߳�ȫ��
- ���ڹ�ϣ���`Map`�ӿڵ�ʵ�֣���ʵ���ṩ���п�ѡ��ӳ�������������ʹ��`null`ֵ��`null`����
- ���̰߳�ȫ����֧�ֲ������ƣ�����յļ�ֵ�ԡ�
- `HashMap`�ǻ��ڹ�ϣ���`Map`�ӿڵķ�ͬ��ʵ�֡���ʵ���ṩ���п�ѡ��ӳ�������������ʹ��`null`ֵ��`null`�������಻��֤ӳ���˳���ر���������֤��˳���ò��䡣
- `HashMap`�����ݽṹ
	- ��`java`��������У�������Ľṹ�������֣�һ�������飬����һ����ģ��ָ�루���ã������е����ݽṹ�������������������ṹ������ģ�`HashMap`Ҳ�����⡣`HashMap`ʵ������һ��������ɢ�С������ݽṹ�������������Ľ���塣
- `HashMap`�ײ����һ������ṹ�������е�ÿһ������һ���������½�һ��`HashMap`��ʱ�򣬾ͻ��ʼ��һ�����顣

##### 1.3.3.2 HashTable
- ͬ`HashMap`��һ�㲻ʹ�ã�
- ���̰߳�ȫ��֧�ֲ������ƣ��������пյļ�ֵ�ԡ�

##### 1.3.3.3 TreeMap
##### 1.3.3.4 LinkedHashMap
- `SUMMARY:` `LinkedHashMap`��`Map`�ӿڵĹ�ϣ��ͣ�˫�������б�ʵ�֣����п�Ԥ֪�ĵ���˳��
- ����
	- `LinkedHashMap`��`Map`�ӿڵĹ�ϣ��������б�ʵ�֣����п�Ԥ֪�ĵ���˳�򡣴�ʵ���ṩ���п�ѡ��ӳ�������������ʹ��`null`ֵ��`null`�������಻��֤ӳ���˳���ر���������֤��˳���ò��䡣
	- `LinkedHashMap`ʵ����`HashMap`�Ĳ�֮ͬ�����ڣ�����ά����һ��������������Ŀ��˫�������б��������б����˵���˳�򣬸õ���˳������ǲ���˳������Ƿ���˳��
	- ע�⣬��ʵ�ֲ���ͬ���ġ��������߳�ͬʱ�������ӵĹ�ϣӳ�䣬����������һ���̴߳ӽṹ���޸��˸�ӳ�䣬�������뱣���ⲿͬ����
- ʵ��
	- ����`LinkedHashMap`���ԣ����̳���`HashMap`���ײ�ʹ�ù�ϣ����˫����������������Ԫ�ء�����������븸��`HashMap`���ƣ���ͨ����д������صķ�������ʵ���Լ��������б����ԡ�

#### 1.3.4 ArrayList��Vector��LinkedList�Ĵ洢����
- `ArrayList`��`Vector`����ʹ��**���鷽ʽ**�洢���ݣ�������Ԫ��������ʵ�ʴ洢�������Ա����ӺͲ���Ԫ�أ����Ƕ�����ֱ�Ӱ��������Ԫ�أ����ǲ���Ԫ�أ�**����������м䲿��**���漰����Ԫ���ƶ����ڴ����������**�������ݿ������������**��`Vector`����ʹ����`synchronized`������**�̰߳�ȫ**����ͨ��**����**�Ͻ�`ArrayList`���`LinkedList`ʹ��**˫������**ʵ�ִ洢�����������������Ҫ����ǰ��������������ǲ�������ʱֻ��Ҫ��¼�����ǰ����ɣ�����**�����ٶȽϿ�**��`LinkedList`Ҳ��**�̲߳���ȫ**�ģ�
- `LinkedList`�ṩ��һЩ������ʹ��`LinkedList`����**��������ջ�Ͷ�����ʹ��**��

	``` java
	new LinkedList<String>().addFirst("First");
	new LinkedList<String>().addLast("Last");
	```


> *ע��*
> - ����`iterator`��ǿ`for`ѭ���ڲ�ʵ���ϵ�����`interator`�����˼򵥵ı�����������ʹ����ǿ`for`ѭ����
> - `Map`��`key`һ����`8`�ֻ������͵ķ�װ�������`String`�࣬���Լ��Զ��������Ϊ`Key`û�����壻
> - `Map`��`key`�����ظ���`value`�����ظ���


### 1.4 IO��
- `SUMMARY:`�����Թ涨˳�򱻶�ȡһ�ε��������С�
#### 1.4.1 ���롢���ԭ��
- `Java`�����У��������ݵ����롢��������ԡ�������`stream`����ʽ���У�
- `J2SE`�ṩ�˸��ָ����ġ������࣬���Ի�ȡ��ͬ��������ݣ�
- ������ͨ����׼�ķ��������������ݡ�
- *`eg.`��ģ�ͣ�*<br>![][5]

#### 1.4.2 ���ĸ����Լ���������
##### 1.4.2.1 �������������
- �����������뵽�ڴ��е�����
- ����������ڴ����������

> *ע��*
> -  �����롱���������������������ڴ���ԡ�

##### 1.4.2.2 �ֽ������ַ���
- `SUMMARY:`һЩ�������ַ���ʾ����ĸ�����ֵȿ���ʹ���ַ����������Ķ����õ��ֽ�����
- �ֽ��������ֽ�Ϊ���ݴ���λ������
- �ַ��������ַ�Ϊ���ݴ���λ������

> *ע��*
> -  ���մ������ݵ�λ��ͬ��Ϊ�ֽ������ַ�����
> - `Java`����`stream`��β�Ķ����ֽ�������`Reader`����`Writer`��β�Ķ����ַ�����
> - ʹ���ֽ������ã���ΪӲ�������е��ļ��������ֽڵ���ʽ���д�����߱���ģ�����ͼƬ�����ݡ������ַ�ֻ�����ڴ��вŻ��γɵģ������ڿ����У��ֽ���ʹ�õĸ�Ϊ�㷺��
> - ֻҪ�Ǵ����ı������ݣ����ȿ����ַ���������֮��ʹ���ֽ�����
> - һЩ�������ַ���ʾ����ĸ�����ֵȿ���ʹ���ַ����������Ķ����õ��ֽ�����

##### 1.4.2.3 �ڵ���
- ���<br>![][6]
###### 1.4.2.3.1 �ֽ���
- ��һ���ض�������Դ���ڵ㣬�磺�ļ����ڴ棩��д���ݣ�
- *`eg.`����ʵ����*
	``` java
	   /**
	     * FileInputStream��FileOutputStreamʵ��
	     * 
	     * @author Thomas Lee
	     * @version 2017��2��6�� ����5:15:26
	     */
	    public void demoFileInputStreamAndFileOutputStream() throws IOException {
	        int data = 0;
	        FileInputStream fileInputStream = new FileInputStream(FILE_INPUT_PATH);
	        FileOutputStream fileOutputStream = new FileOutputStream(FILE_OUTPUT_PATH);
	        while (-1 != (data = fileInputStream.read())) {
	            fileOutputStream.write(data);
	        }
	        fileInputStream.close();
	        fileOutputStream.close();
	    }
	
	```
###### 1.4.2.3.2 �ַ���
- *`eg.`����ʵ����*

	``` java
	  /**
	    * FileReader��FileWriterʵ��
	    * 
	    * @author Thomas Lee
	    * @version 2017��2��6�� ����5:19:25
	    */
	   public void demoFileReaderAndFileWriter() throws IOException {
	       FileReader fileReader = new FileReader(FILE_INPUT_PATH);
	       FileWriter fileWriter = new FileWriter(FILE_OUTPUT_PATH);
	       int data = 0;
	       while (-1 != (data = fileReader.read())) {
	           fileWriter.write(data);
	       }
	       fileReader.close();
	       fileWriter.close();
	   }
	```

##### 1.4.2.4 ������
- �����ӡ����Ѿ����ڵ������ڵ������ߴ��������ϡ�
- ���<br> ![][7]
###### 1.4.2.4.1 ������
- *`eg.`����ʵ����*

	``` java
	    /**
	     * BufferedInputStream��BufferedOutputStreamʵ��
	     * 
	     * @author Thomas Lee
	     * @version 2017��2��6�� ����5:22:43
	     * @throws IOException 
	     */
	    public void demoBufferedInputStreamAndBufferedOutputStream() throws IOException {
	        FileInputStream fileInputStream = new FileInputStream(FILE_INPUT_PATH);
	        BufferedInputStream bufferedInputStream = new BufferedInputStream(fileInputStream);
	        int data = 0;
	        while (-1 != (data = bufferedInputStream.read())) {
	            System.out.println((char) data);
	        }
	        bufferedInputStream.close();
	        fileInputStream.close();
	    }
	
	    /**
	     * BufferedReader��BufferedWriterʵ��
	     * 
	     * @author Thomas Lee
	     * @version 2017��2��7�� ����11:03:39
	     */
	    public void demoBufferedReaderAndBufferedWriter() throws IOException {
	        FileReader fileReader = new FileReader(FILE_INPUT_PATH);
	        FileWriter fileWriter = new FileWriter(FILE_OUTPUT_PATH);
	        BufferedReader bufferedReader = new BufferedReader(fileReader);
	        BufferedWriter bufferedWriter = new BufferedWriter(fileWriter);
	        for (int i = 0; i < 100; i++) {
	            bufferedWriter.write(String.valueOf(Math.random()));
	            bufferedWriter.newLine();
	        }
	        bufferedWriter.flush();
	        String str = null;
	        while (null != (str = bufferedReader.readLine())) {
	            System.out.println(str);
	        }
	        bufferedReader.close();
	        bufferedWriter.close();
	        fileReader.close();
	        fileWriter.close();
	    }
	```
###### 1.4.2.4.2 ת����
###### 1.4.2.4.3 ������
###### 1.4.2.4.4 Print��
- *`eg.`����ʵ����*

	``` java
	    /**
	     * PrintStream��PrintWriterʵ��
	     * 
	     * @author Thomas Lee
	     * @version 2017��2��7�� ����1:23:12
	     */
	    public void demoPrintStreamAndPrintWriter() throws FileNotFoundException {
	        FileOutputStream fileOutputStream = new FileOutputStream(FILE_OUTPUT_PATH, true);
	        PrintStream printStream = new PrintStream(fileOutputStream);
	        System.setOut(printStream);
	        for (int i = 0; i < 100; i++) {
	            System.out.println(String.valueOf(Math.random()));
	        }
	    }
	```
###### 1.4.2.4.5 Object��

#### 1.4.3 �Ĵ������
- `SUMMARY:` `InputStream`��`OutputStream`��`Reader`��`Writer`��
- `J2SE`���ṩ�����������Ͷ�λ��`java.io`���£��ֱ�̳��������ֳ�����(���ǳ�����)���ͣ�<br>![][8]
##### 1.4.3.1 InputStream
- ��ȡ�ֽ�����ͨ�����ڴ���������ļ� [^ �ֽ��� reference]��
[^ �ֽ��� reference]: [�ٶȰٿ�][25]

- �̳���`InputStream`��������������������������ݣ������ݵĵ�λΪ�ֽڣ�`8bit`����
- *`eg.`ͼ��ʵ����*<br>![][9]
##### 1.4.3.2 OutputStream
- �̳���`OutputStream`���������ڳ�����������ݣ���Ӳ�̣��������ݵĵ�λΪ�ֽڣ�`8bit`����
- *`eg.`ͼ��ʵ����*<br>![][10]
##### 1.4.3.3 Reader
- �̳���`Reader`��������������������������ݣ������ݵĵ�λ�����ַ���`16bit`�����ǵ��е����ݵ�λ��`16bit`�ģ��磺���֣���
- *`eg.`ͼ��ʵ����*<br>![][11]
##### 1.4.3.4 Writer
- �̳���`Writer`�����������ڳ�����������ݣ������ݵ�λΪ�ַ���`16bit`����
- *`eg.`ͼ��ʵ����*<br>![][12]

> *ע��*
> - ͼ����ɫΪ�ڵ�����ǳɫΪ������

#### 1.4.4 ������
#### 1.4.5 File������÷�
#### 1.4.6 �ֽ�������
#### 1.4.7 TCP��UDP
#### 1.4.8 OutputStreamWriter��InputStreamReader
#### 1.4.9 �ܵ���
#### 1.4.10 ��ӡ��
#### 1.4.11 ��������ض��� 
#### 1.4.12 BufferedReader��С����
#### 1.4.13 Scanner��
#### 1.4.14 ���ݲ�������DataOuputStream��DataInputStream��
#### 1.4.15 �ϲ�����SequenceInputStream��
#### 1.4.16 �ļ�ѹ���ࣨZipOutputStream��
#### 1.4.17 ��������PushBackInputStream��
#### 1.4.18 �������л�
#### 1.4.19 ʹ��OutputStream����Ļ�������

#### 1.4.20 NIO
##### 1.4.20.1 ���
- `SUMMARY:` Ϊ���е�ԭʼ�����ṩ����֧�֡�������`IO`��
- `NIO`��`Non-blocking IO`�ļ�ƣ���`jdk1.4`���ṩ����`api` ��`Sun`�ٷ������������£� **Ϊ���е�ԭʼ�����ṩ��`Buffer`������֧��**���ַ������������������
- `Java NIO`��`IO`֮���һ�����������ǣ�`IO`���������ģ�`NIO`�����򻺳����ģ�
- `Channel`��һ���µ�ԭʼ`I/O`���� ֧�������ڴ�ӳ���ļ����ļ����ʽӿڡ� �ṩ��·��`non-bloking`�� ������ʽ�ĸ�����������`I/O` ��
- �����������`IO`
	- `Java IO`�ĸ������������ġ�����ζ�ţ���һ���̵߳���`read()`��`write()`ʱ�����̱߳�������ֱ����һЩ���ݱ���ȡ����������ȫд�롣���߳��ڴ��ڼ䲻���ٸ��κ������ˡ�`Java NIO`�ķ�����ģʽ��ʹһ���̴߳�ĳͨ�����������ȡ���ݣ����������ܵõ�Ŀǰ���õ����ݣ����Ŀǰû�����ݿ���ʱ����ʲô�������ȡ�������Ǳ����߳�����������ֱ�����ݱ�Ŀ��Զ�ȡ֮ǰ�����߳̿��Լ��������������顣 ������дҲ����ˡ�һ���߳�����д��һЩ���ݵ�ĳͨ����������Ҫ�ȴ�����ȫд�룬����߳�ͬʱ����ȥ��������顣 �߳�ͨ����������IO�Ŀ���ʱ������������ͨ����ִ��`IO`����������һ���������߳����ڿ��Թ�������������ͨ����`channel`����

##### 1.4.20.2 ͨ���ͻ�����
- ͨ���ͻ�������`NIO`�еĺ��Ķ���
###### 1.4.20.2.1 ͨ��
- `Channel`��һ�����󣬿���ͨ������ȡ��д�����ݣ��൱��`IO`�е�����
- ͨ�������Ĳ�֮ͬ������ͨ����˫��ģ������ǵ���ģ�ǰ�߿���ͬʱ��д��

###### 1.4.20.2.2 ������
- ʵ������һ�����飨�ֽ����顢����������ַ�������֮��ģ���
- ÿ�ֻ����������Ͷ��л��������͡�

###### 1.4.20.2.3 ��д
[^ flip reference]: [���˲���][23]

- *`EG.`����ʵ����* [^ flip reference]

	``` java
	    /**
	     * ͨ��NIO���и����ļ�
	     * @param fromFile
	     * @param toFile
	     * @return
	     * @author Thomas Lee
	     * @version 2017��3��28�� ����3:16:21
	     */
	    public static boolean copyWithNIO(File fromFile, File toFile) {
	        // ���԰����������ARM���ϲ�Ϊһ�����飺try (FileInputStream fileInputStream = new FileInputStream(fromFile); FileOutputStream fileOutputStream = new FileOutputStream(toFile)) {
	        try (FileInputStream fileInputStream = new FileInputStream(fromFile)) {
	            try (FileOutputStream fileOutputStream = new FileOutputStream(toFile)) {
	                FileChannel inFileChannel = fileInputStream.getChannel();
	                FileChannel outFileChannel = fileOutputStream.getChannel();
	                ByteBuffer buffer = ByteBuffer.allocate(1024);
	                while (-1 != inFileChannel.read(
	                    buffer.flip();
	                    // ͨ��flip()�������ã�������ζ�ȡbuffer��position���Ѿ���flip()����Ϊ0��limit���Ѿ���flip()����Ϊ���ݵ�positin ��λ�õ�
	                    outFileChannel.write(buffer);
	                    buffer.clear();
	                }
	                return true;
	            }
	        } catch (FileNotFoundException e) {
	            LOG.error(e.getMessage(), e);
	            return false;
	        } catch (IOException e) {
	            LOG.error(e.getMessage(), e);
	            return false;
	        }
	    }
	```

#### 1.4.21 �۲���ģʽ�������
#### 1.4.22 �����߲�Э���Լ�������

### 1.5 ������
#### 1.5.1 ����֪ʶ
#### 1.5.2 ����URL�ĸ߲��Java������
#### 1.5.3 ����Socket�ĵͲ��Java������
- `SUMMARY:` `Socket`��̱������Ƕ�`TCP`��`UDP`Э��ķ�װ��
- ����`Java`Ӧ�ó������ͨ��һ��������ͨ������ʵ�����ݽ��������˫�����ӵ�һ�˳�Ϊһ��`Socket`��
- `Socket`ͨ������ʵ��`C\S`�����ӣ�
- ����`TCP`��`UDP`Э�飬�����Ƕ�`TCP/IP`��`UDP`�ķ�װ��
- ������������Ҫ��Ѱַ��ϢΪԶ�̼������`IP`��ַ�Ͷ˿ں�(`Port Number`)

##### 1.5.3.1 `TCP Socket`
- `TCP Sokcet`ͨ��ģ�ͣ�<br>![][14] 
- *`eg.` ����˴���ʵ����*
	``` java
	package com.cmc.socket.server;
	
	import java.io.DataInputStream;
	import java.io.IOException;
	import java.io.InputStream;
	import java.net.ServerSocket;
	import java.net.Socket;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	/**
	 * TCP Server Instance
	 *  
	 * @author Thomas
	 * @version 2017��1��19�� ����8:18:47
	 */
	public class TCPServer implements Server {
	
	    private static final int TCP_SERVER_PORT = 8888;
	    private static final Logger LOG = LoggerFactory.getLogger(TCPServer.class);
	
	    @Override
	    public void start() {
	        ServerSocket serverSocket = null;
	        try {
	            serverSocket = new ServerSocket(TCP_SERVER_PORT);
	            while (true) {
	                Socket socket = serverSocket.accept();
	                InputStream inputStream = socket.getInputStream();
	                DataInputStream dataInputStream = new DataInputStream(inputStream);
	                LOG.info(dataInputStream.readUTF());
	            }
	        } catch (IOException e) {
	            if (null != serverSocket) {
	                try {
	                    serverSocket.close();
	                } catch (IOException ce) {
	                    this.logError(ce);
	                }
	            }
	            this.logError(e);
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    public static void main(String[] args) {
	        new TCPServer().start();
	    }
	
	}
	```

- *`eg.` �ͻ��˴���ʵ����*
	``` java
	package com.cmc.socket.client;
	
	import java.io.DataOutputStream;
	import java.io.IOException;
	import java.io.OutputStream;
	import java.net.Socket;
	import java.net.UnknownHostException;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	public class TCPClient implements Client {
	
	    private static final Logger LOG = LoggerFactory.getLogger(TCPClient.class);
	    private static final String SERVER_IP = "127.0.0.1";
	    private static final int SERVER_PORT = 8888;
	    private static final String MESSAGE = "Hello Server.";
	
	    @Override
	    public void send() {
	        try {
	            Socket socket = new Socket(SERVER_IP, SERVER_PORT);
	            OutputStream outputStream = socket.getOutputStream();
	            DataOutputStream dataOutputStream = new DataOutputStream(outputStream);
	            dataOutputStream.writeUTF(MESSAGE);
	            dataOutputStream.close();
	            outputStream.close();
	            socket.close();
	        } catch (UnknownHostException e) {
	            this.logError(e);
	        } catch (IOException e) {
	            this.logError(e);
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    public static void main(String[] args) {
	        new TCPClient().send();
	    }
	
	}
	```

##### 1.5.3.2 `UDP Socket`
- *`eg.` ����˴���ʵ����*
	``` java
	package com.cmc.socket.server;
	
	import java.io.IOException;
	import java.net.DatagramPacket;
	import java.net.DatagramSocket;
	import java.net.SocketException;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	public class UDPServer implements Server {
	
	    private static final Logger LOG = LoggerFactory.getLogger(UDPServer.class);
	
	    private static final int UDP_SERVER_PORT = 9999;
	
	    @Override
	    public void start() {
	        DatagramSocket datagramSocket = null;
	        try {
	            datagramSocket = new DatagramSocket(UDP_SERVER_PORT);
	            byte[] buffer = new byte[1024];
	            DatagramPacket datagramPacket = new DatagramPacket(buffer, buffer.length);
	            while (true) {
	                datagramSocket.receive(datagramPacket);
	                this.log(new String(buffer, 0, datagramPacket.getLength()));
	            }
	        } catch (SocketException e) {
	            this.logError(e);
	        } catch (IOException e) {
	            this.logError(e);
	        } finally {
	            datagramSocket.close();
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    private void log(String msg) {
	        System.out.println(msg);
	    }
	
	    public static void main(String[] args) {
	        new UDPServer().start();
	    }
	
	}
	```

- *`eg.` �ͻ��˴���ʵ����*
	``` java
	package com.cmc.socket.client;
	
	import java.io.IOException;
	import java.net.DatagramPacket;
	import java.net.DatagramSocket;
	import java.net.InetSocketAddress;
	import java.net.SocketException;
	import java.util.Date;
	import java.util.Timer;
	import java.util.TimerTask;
	
	import org.slf4j.Logger;
	import org.slf4j.LoggerFactory;
	
	public class UDPClient implements Client {
	
	    private static final Logger LOG = LoggerFactory.getLogger(UDPClient.class);
	
	    private static final String UDP_SERVER_IP = "127.0.0.1";
	    private static final int UDP_SERVER_PORT = 9999;
	    private static final String FIRST_MSG = "Hello, Server.";
	
	    /** �̼߳��ʱ��1000ms */
	    public static final long THREAD_INTERNAL_TIME = 1000;
	
	    @Override
	    public void send() {
	        DatagramSocket datagramSocket;
	        try {
	            datagramSocket = new DatagramSocket();
	            byte[] buffer = new byte[1024];
	            buffer = FIRST_MSG.getBytes();
	            DatagramPacket datagramPacket = new DatagramPacket(buffer, buffer.length, new InetSocketAddress(UDP_SERVER_IP, UDP_SERVER_PORT));
	            datagramSocket.send(datagramPacket);
	            datagramSocket.close();
	        } catch (SocketException e) {
	            this.logError(e);
	        } catch (IOException e) {
	            this.logError(e);
	        }
	    }
	
	    private void logError(Exception e) {
	        LOG.error("", e);
	    }
	
	    public static void main(String[] args) {
	        javaSETimer(new UDPClient());
	    }
	
	    // http://batitan.iteye.com/blog/253483 
	    public static void javaSETimer(Client client) {
	        Timer timer = new Timer();
	        TimerTask timerTask = new TimerTask() {
	            public void run() {
	                client.send();
	            }
	        };
	        timer.schedule(timerTask, new Date(), THREAD_INTERNAL_TIME);
	    }
	
	}
	```
#### 1.5.4 Java��̹淶

### 1.6 ͼ�ν���GUI
#### 1.6.1 ��������
#### 1.6.2 ����ͼ���û�����Ĳ���
#### 1.6.3 ����Frames��Panels
#### 1.6.4 ���ֹ�����
#### 1.6.5 AWT�¼�ģ��
#### 1.6.6 ���������¼����¼�Դ���¼�ע���������

### 1.7 ���� [^ reflect reference]
- `SUMMARY:`���й��̶�̬����������Ժͷ�����
- ��ʱ����ʹ�ò�����������ϵͳ���ܽᡣ
[^ reflect reference]: [����԰][18]

#### 1.7.1 ���
#### 1.7.2 ������
#### 1.7.3 Reflection
#### 1.7.4 �ҳ���ķ���
#### 1.7.5 ��ȡ����������Ϣ
#### 1.7.6 ��ȡ����ֶ�
#### 1.7.7 ���ݷ�����������ִ�з���
#### 1.7.8 �����µĶ���
#### 1.7.9 �ı��ֶε�ֵ
#### 1.7.10 ʹ������
#### 1.7.11 �������й���
- ��̬�����࣬��̬������ķ������Ƿ��䡣
- *`eg.`Java�������й���ʾ��ͼ��*<br>![][15]
#### 1.7.12 ��̬���ػ���
- ����һ�μ��أ���Ҫ��ʱ����أ�Ҳ����˵���е�ʱ��̬���أ���
- *`eg.`����ʵ����*

	``` java
	package com.cmc.j2se;
	
	import java.lang.reflect.Field;
	import java.lang.reflect.Modifier;
	
	/**
	 * Java Reflection ʵ��
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��16�� ����3:20:02
	 */
	public class ReflectionDemo {
	
	    public static void main(String[] args) throws ClassNotFoundException {
	        new ReflectionDemo().printClass("com.cmc.model.user.User");
	    }
	
	    /**
	     * ��ӡClass
	     * 
	     * @author Thomas Lee
	     * @version 2017��2��16�� ����5:35:43
	     */
	    public void printClass(String clazzQualifier) throws ClassNotFoundException {
	
	        /**
	         * ��һ�ַ�ʽ��ͨ����ķ���forName()��ȡ
	         */
	        Class<?> clazzUser = Class.forName(clazzQualifier);
	
	        /**
	         * �ڶ��ַ�ʽ��ͨ����ֱ�ӻ�ȡ
	         * Class<?> clazzUser = User.class;
	         */
	
	        /**
	         * �����ַ�ʽ��ͨ�������ȡ
	         * User user = new User();
	         * Class<?> clazzUser = user.getClass(); 
	         */
	        Field[] userFields = clazzUser.getDeclaredFields();
	
	        StringBuilder sb = new StringBuilder();
	        sb.append(Modifier.toString(clazzUser.getModifiers()) + " class " + clazzUser.getSimpleName() + " {\n");
	        for (Field userField : userFields) {
	            sb.append("\t" + Modifier.toString(userField.getModifiers()) + " " + userField.getType().getSimpleName() + " " + userField.getName() + ";\n");
	        }
	        sb.append("}");
	
	        this.out(sb.toString());
	    }
	
	    private void out(String content) {
	        System.out.print(content);
	    }
	
	}
	```

#### 1.7.13 JDK ClassLoader
- ��Ҫ���Ĵ��ࣻ
- ����֮��ֻ�ǲ���ϵĹ�ϵ�����Ǽ̳й�ϵ<br>![][17]
- ����`.class`��`Class`����ľ����ÿ�������ص��࣬��`JVM`�ж�����һ��`Class`������֮���Ӧ�����Ҫ�����µĶ���ֱ��ʹ��`Class`����ľֲ�`class.forName`�Ϳ����ˣ�����Ҫ��`new`������
- ��`java`�У�ÿ��`class`����һ����Ӧ��`Class`���󣬵���д��һ���࣬������ɺ������ɵ�`.class`�ļ��У��Ͳ���һ��`class`����������ʾ������������Ϣ�����`Class`ʵ�������з�ʽ��
	- ���ö������`getClass()`������ȡ�ö����`Class`ʵ��
	- `forName()`����������ֻ�ȡһ��`Class`ʵ��
	- ����`.class`�ķ�ʽ��ȡ`Class`ʵ�����Ի����������͵ķ�װ�࣬�����Բ���`.TYPE`����ȡ��Ӧ�Ļ����������͵�`Class`ʵ��

##### 1.7.13.1 Bootstrap Class Loader
- `Implemented by native language`(����`Java`����д�ģ��������`classLoader`)
- `Load the core classes of jdk`

##### 1.7.13.2 Extension class loader
- `Load the class from jre/lib/ext`

##### 1.7.13.3 Application class loader
- `Load user-defined classes`
- `ClassLoader.getSystemClassLoader()`

##### 1.7.13.4 Other class loader
- `SecureClassLoader`
- `URLClassLoader`

> *ע��*
> - `Class`���ʵ����ʾ�������е�`Java`Ӧ�ó����е���ͽӿڡ�

### 1.8 ����
#### 1.8.1 Eclispse���ÿ�ݼ�
#### 1.8.2 ��γ�ΪJava����
#### 1.8.3 Java��ѧ�ߵ�30������������
#### 1.8.4 ��ѧ�߶�Ӧ�ø㶮������
#### 1.8.5 ʮ��������Υ�����

<br>
## ��������
### 2.1 ���߳�
#### 2.1.1 �̼߳��
#### 2.1.2 ��Thread�ഴ���߳�
#### 2.1.3 ʹ��Runnable�ӿڴ����߳�
#### 2.1.4 �̵߳���������
#### 2.1.5 join������ʹ��
#### 2.1.6 ʹ��Synchronized��ͬ������
#### 2.1.7 ʹ��Synchronizedͬ���෽��
#### 2.1.8 ʹ��Synchronizedͬ������
#### 2.1.9 ���̷߳������ݵ����ַ���
#### 2.1.10 ���̴߳������ݵ����ַ���
#### 2.1.11 ����ʹ��volatile�ؼ���

### 2.2 ���Ͽ��
#### 2.2.1 ArrayList��ʵ��ԭ�� 
#### 2.2.2 HashMap��ʵ��ԭ��
#### 2.2.3 HashSet��ʵ��ԭ��
#### 2.2.4 LinkedHashMap��ʵ��ԭ�� 
#### 2.2.5 Stack��Queue��Map�ı���
#### 2.2.6 HashMap������ƪ����
#### 2.2.7 ���Ͽ���ܽ�

### 2.3 JVM
- `SUMMARY:`��ʱ������ѧϰ���д��ܽᡣ
- �ο�`APP`��`Java`�ֲ��`JVM Study Notes.md`.
#### 2.3.1 `Java`��������ִ�е���������
#### 2.3.2 `JVM`�ڴ�����Լ��������ջ���

### 2.4 ������


[1]: http://i1.piimg.com/567571/1a11150766a3485b.png
[2]: http://p1.bpimg.com/567571/c269e6eec3269286.png
[3]: http://www.cnblogs.com/iyangyuan/archive/2013/04/09/3011274.html
[4]: http://p1.bpimg.com/567571/d6e73d16d3b3de4b.png
[5]: http://p1.bpimg.com/567571/df8aecbce0513954.png
[6]: http://i1.piimg.com/567571/2bbdb13034ca4bf5.png
[7]: http://i1.piimg.com/567571/7aa6ef40fdedb968.png
[8]: http://i1.piimg.com/567571/e9105960cd2dcb94.png
[9]: http://i1.piimg.com/567571/902478df2257db59.png
[10]: http://p1.bpimg.com/567571/84d412e1383b8fb2.png
[11]: http://i1.piimg.com/567571/ab6a1763911efe21.png
[12]: http://p1.bpimg.com/567571/766827492f4bdac6.png
[13]: http://p1.bpimg.com/567571/c6c9841205293c20.png
[14]: http://i1.piimg.com/567571/fda1e7ac8b2f61ff.png
[15]: http://p1.bpimg.com/567571/172b155aed26079a.png
[16]: http://i1.piimg.com/567571/d48247be9e0f49d9.png
[17]: http://p1.bpimg.com/567571/6701ff44e3069608.png
[18]: http://www.cnblogs.com/rollenholt/archive/2011/09/02/2163758.html
[19]: http://p1.bpimg.com/567571/d948e84b10217793.png
[20]: http://i1.piimg.com/567571/222535dbb246dfb3.png
[21]: http://p1.bpimg.com/567571/ea3cd59d77e92390.jpg
[22]: http://i1.piimg.com/567571/410e498787c7d0d6.jpg
[23]: http://blog.sina.com.cn/s/blog_4bc179a80100xiy5.html
[24]: http://baike.baidu.com/link?url=Pxgs7hVDpFF6o4irOpt74wxj2HNc9xULzZ-20aVRaetTjCB2w6brmnNtfVtrPwL54n0dWfRY5bLJ7JF7xn_6pFv3XT6-ao4k9qme_u5kkwe
[25]: http://baike.baidu.com/link?url=J0R1UWMOTodf6bPojjrMwXAhMiFGjNYMVs0dE2hWg1iOjzV2QMQiOOEdVmyjufoeEHP0ycK3AY_1aW17osnMcPtlVTJ7AvUOIUcVeJ6HaEWLpgWz4AzmQ4tQ7ganMn-u
[26]: http://blog.csdn.net/lonelyroamer/article/details/7864531
[27]: http://baike.baidu.com/link?url=TYZ9fNuu_wBEDzf5IuD0eD7A7omPTOOOyGiV7pRf6xaCV9XMoC0HjZxH6wOZyZ8pOZ01BYj0QUtemj3Y2tOWmZWJFtLHGb5EHTgXHYbw2rWrYp1a7CvXN8W7HxZscut0
[28]: http://blog.csdn.net/liji_xc/article/details/47290695
[29]: http://blog.csdn.net/liji_xc/article/details/47302455