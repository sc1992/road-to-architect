# Design Pattern [^ Design Pattern reference] Study Notes [^ history version]

@(Notes)[Design Pattern, Notes]

> VICTORY LOVES PREPARATION.

[^ Design Pattern reference]: [����̳�][1]

[^ history version]: 
> �汾��Ϣ��
> 2017��04��19�� ����02:06:36
> 2017��02��17�� ����04:26:44

[TOC]

***
## ����˼ά��ͼ

<br>
## һ�����
- **`SUMMARY:`���ģʽ���������ʵ��������˴���������ԡ��ɿ����Լ���ǿ�Ķ��ԡ�**
- ���ģʽ��`Design Pattern`��������**���ʵ��**��ͨ�����о���������������������Ա�����ã�
- ���ģʽ�����������Ա������������������ٵ�һ������Ľ����������Щ����������ڶ����������Ա�����൱����һ��ʱ�������ʹ����ܽ�����ģ�
- ���ģʽ��һ�ױ�����ʹ�õġ�������֪���ġ����������Ŀ�ġ�������ƾ�����ܽ᣻
- ʹ�����ģʽ��Ϊ�����ô��롢�ô�������ױ�������⡢��֤����ɿ��ԡ� �������ʣ����ģʽ�ڼ���������ϵͳ���Ƕ�Ӯ�ģ����ģʽʹ��������������̻������ģʽ��������̵Ļ�ʯ����ͬ���õ�һ���שʯһ����
- ��Ŀ�к�����������ģʽ���������ؽ���ܶ����⣬ÿ��ģʽ����ʵ�ж�����Ӧ��ԭ������֮��Ӧ��ÿ��ģʽ��������һ����������Χ�����ظ����������⣬�Լ�������ĺ��Ľ����������Ҳ�����ģʽ�ܱ��㷺Ӧ�õ�ԭ��

	> *ע��*
	> - ���ģʽ��Ҫ�ǻ���������������������ԭ��
	>  - **�Խӿڱ�̶����Ƕ�ʵ�ֱ�̣�**
	>  - **����ʹ�ö�����϶����Ǽ̳С�**

<br>
## ��������ԭ��`SOLID`ԭ��
- **`SUMMARY:` ���ģʽ����ԭ����Ը���Ϊ���ϵ�һְ�������ӿڱ�̡�**
### 2.1 ��һְ��ԭ��`SRP`��
- **`SUMMARY:`һ����Ӧ��ֻ��һ���仯��ԭ��**
- `Single Responsibility Principle`��
- һ����Ӧ��ֻ��һ��ԭ������仯��
- ��νְ����ָ��仯��ԭ��**���һ�����ж���һ���Ķ������ı䣬��ô�����;��ж���һ����ְ��**����һְ��ԭ�����ָһ�������ģ��Ӧ������ֻ��һ���ı��ԭ��

### 2.2 ���űպ�ԭ��`OCP`��
- **`SUMMARY:`����չ���ţ����޸Ĺرգ����������ԭ��ĺ��ģ�ͬʱҲ����������׷���Ŀ�ꡣ**
- `Open Close Principle`��
- �������������ԭ��ĺ��ġ�**�����Ʊ�����׷���Ŀ����Ƿ�װ�仯���������**�������ŷ��ԭ�����Ƕ���һĿ�����ֱ�����֡����������ԭ�򣬺ܶ�ʱ����Ϊʵ����һĿ�����ģ�������`Liskov`�滻ԭ��ʵ����ѵġ���ȷ�ļ̳в�Σ����ܱ�֤����Υ�����ŷ��ԭ��
- ����չ���ţ����޸Ĺرա��ڳ�����Ҫ������չ��ʱ�򣬲���ȥ�޸�ԭ�еĴ��룬ʵ��һ���Ȳ�ε�Ч��������֮����Ϊ��ʹ�������չ�Ժã�����ά������������Ҫ�ﵽ������Ч����������Ҫʹ�ýӿںͳ����࣬����ľ�����������ǻ��ᵽ��㡣

### 2.3 �����滻ԭ��`LSP`��
- **`SUMMARY:`�κλ�����Գ��ֵĵط�������һ�����Գ��֣��Ǽ̳и��õĻ�ʯ���Ƕ�ʵ�ֳ��󻯵ľ��岽��Ĺ淶��**
- `Liskov Substitution Principle`��
- ���ϴ���ԭ�������������ƵĻ���ԭ��֮һ�� ���ϴ���ԭ����˵���κλ�����Գ��ֵĵط�������һ�����Գ��֡�`LSP`�Ǽ̳и��õĻ�ʯ��ֻ�е�����������滻�����࣬�������λ�Ĺ��ܲ��ܵ�Ӱ��ʱ������������������ã���������Ҳ�ܹ��ڻ���Ļ����������µ���Ϊ�����ϴ���ԭ���ǶԿ���ԭ��Ĳ��䡣ʵ�ֿ���ԭ��Ĺؼ�������ǳ��󻯣�������������ļ̳й�ϵ���ǳ��󻯵ľ���ʵ�֣��������ϴ���ԭ���Ƕ�ʵ�ֳ��󻯵ľ��岽��Ĺ淶��
- `LSP`��Ϊ`OO`�ĸ߲�ԭ������ʹ��**����**��`Abstraction`����**��̬**��`Polymorphism`��������е�**��̬�ṹ��Ϊ��̬�ṹ��ά����Ƶķ����**��**����**�������ṩ�Ĺ��ܣ�**��̬**�ɼ̳�����ʵ�֡�

### 2.4 �ӿڸ���ԭ��`ISP`��
- **`SUMMARY:`һ�������һ���������Ӧ�ý�������С�Ľӿ��ϡ�**
- `Interface Segregation Principle`��
- �ͻ��˲�Ӧ������������Ҫ�Ľӿڣ�
- һ�������һ���������Ӧ�ý�������С�Ľӿ��ϣ�
- ʹ�ö������Ľӿڣ���ʹ�õ����ӿ�Ҫ�á�����������һ����˼�ǣ�������֮�����϶ȡ��ɴ˿ɼ�����ʵ���ģʽ���ǴӴ�������ܹ�����������������ά����������˼�룬��ǿ������������������ϡ�

### 2.5 ��������ԭ��`DIP`��
- **`SUMMARY:`����ʵ��Ӧ���������󣬶����ǳ�����������ʵ�֡�**
- `Dependence Inversion Principle`��
- �߲�ε�ģ�鲻Ӧ�������ڵͲ�ε�ģ�飬���Ƕ�Ӧ�������ڳ���
- ����Ӧ�������ھ���ʵ�֣�����ʵ��Ӧ�������ڳ���
- �ǿ���ԭ��Ļ���������˼�룺
	- **��Խӿڱ��**��
	- **�����ڳ�����������ھ���**��

<br>
## ��������
### 3.1 ������ģʽ
#### 3.1.1 ����ģʽ��`Singleton Pattern`�������á�
- **`SUMMARY:` `Singleton Pattern`����֤һ����ֻ��һ��ʵ����**
- ����ģʽ��`Singleton Pattern`����`Java`����򵥵����ģʽ֮һ��
- �������͵����ģʽ���ڴ�����ģʽ�����ṩ��һ�ִ����������ѷ�ʽ��
- ����ģʽ�漰��һ����һ���࣬���ฺ�𴴽��Լ��Ķ���ͬʱȷ��ֻ�е������󱻴�����
- �ṩ��һ�ַ�����Ψһ�Ķ���ķ�ʽ������ֱ�ӷ��ʣ�����Ҫʵ��������Ķ���

	> *ע��*
	> - ������ֻ����һ��ʵ����
	> - ����������Լ������Լ���Ψһʵ����
	> - �����������������������ṩ��һʵ����
	
##### 3.1.1.1 ����
###### 3.1.1.1.1 ��ͼ
- ��֤һ�������һ��ʵ�������ṩһ����������ȫ�ַ��ʵ㡣
###### 3.1.1.1.2 �������
- һ��ȫ��ʹ�õ���Ƶ���ش��������١�
###### 3.1.1.1.3 �ؼ�����
- ���캯����˽�еġ�
###### 3.1.1.1.4 Ӧ��ʵ��
- һ����ֻ����һ����ϯ��
- һЩ�豸�������������Ϊ����ģʽ������һ����������̨��ӡ�����������ʱ���Ҫ��������̨��ӡ����ӡͬһ���ļ���
###### 3.1.1.1.5 �ŵ�
- ���ڴ���ֻ��һ��ʵ�����������ڴ�Ŀ�����������Ƶ���Ĵ���������ʵ�����������ѧԺ��ҳҳ�滺�棩��
- �������Դ�Ķ���ռ�ã�����д�ļ���������
###### 3.1.1.1.6 ȱ��
- û�нӿڣ����ܼ̳У��뵥һְ��ԭ���ͻ��һ����Ӧ��ֻ�����ڲ��߼�����������������ô����ʵ������
###### 3.1.1.1.7 ʹ�ó���
- ���������ʵ����Ŀ����ʡϵͳ��Դ��ʱ��*`eg.`ʹ�ó�����*
	- Ҫ������Ψһ���кţ�
	- ������һ��������Ҫ���ĵ���Դ���࣬����`I/O`�����ݿ�����ӵȡ�

###### 3.1.1.1.8 ע������
- `getInstance()`��������Ҫʹ��ͬ����`synchronized (Singleton.class)`��ֹ���߳�ͬʱ������� `instance`�����ʵ������

##### 3.1.1.2 ʵ��
*`img.`����ͼ��*<br>![][2]
###### 3.1.1.2.1 �̲߳���ȫ����ʽ
- **`SUMMARY:` �̲߳���ȫ���ӳټ����͡�**
- �Ƿ��ӳٳ�ʼ��
	- ��
- �Ƿ���̰߳�ȫ
	- ��
- ʵ���Ѷ�
	- ��
- ����
	- ���ַ�ʽ���������ʵ�ַ�ʽ������ʵ������������ǲ�֧�ֶ��̡߳���Ϊû�м���`synchronized`������*�ϸ��������������㵥��ģʽ*��
	- ���ַ�ʽ`lazy loading`�����ԣ���Ҫ���̰߳�ȫ���ڶ��̲߳�������������
- *`eg.`����ʵ����*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * ������ģʽ������ģʽ
	 * 
	 * <p> �̲߳���ȫ����ʽ
	 * <p> ���ַ�ʽ���������ʵ�ַ�ʽ������ʵ������������ǲ�֧�ֶ��̡߳���Ϊû�м���<code>synchronized</code>�������ϸ��������������㵥��ģʽ��
	 * 
	 * <ul>
	 * <li> �Ƿ��ӳٳ�ʼ������
	 * <li> �Ƿ���̰߳�ȫ����
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��18�� ����2:23:44
	 */
	public class SingletonPattern1 {
	
	    private static SingletonPattern1 instance;
	
	    private SingletonPattern1() {
	    }
	
	    public static SingletonPattern1 getInstance() {
	        if (null == instance) {
	            instance = new SingletonPattern1();
	        }
	        return instance;
	    }
	
	}
	```

###### 3.1.1.2.2 �̰߳�ȫ����ʽ
- **`SUMMARY:` �̰߳�ȫ���ӳټ����͡�**
- �Ƿ��ӳٳ�ʼ��
	- ��
- �Ƿ���̰߳�ȫ
	- ��
- ʵ���Ѷ�
	- ��
- ����
	- ���ַ�ʽ�߱��ܺõ�`lazy loading`���ܹ��ڶ��߳��кܺõĹ��������ǣ�Ч�ʺܵͣ�`99%`����²���Ҫͬ����
	- �ŵ㣺��һ�ε��òų�ʼ���������ڴ��˷ѣ�
	- ȱ�㣺�������`synchronized`���ܱ�֤��������������Ӱ��Ч�ʡ�
- *`eg.`����ʵ����*	
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * ������ģʽ������ģʽ
	 * 
	 * <p> �̰߳�ȫ����ʽ
	 * <p> ���ַ�ʽ�߱��ܺõ�lazy loading���ܹ��ڶ��߳��кܺõĹ��������ǣ�Ч�ʺܵͣ�99%����²���Ҫͬ����
	 * 
	 * <ul>
	 * <li> �Ƿ��ӳٳ�ʼ������
	 * <li> �Ƿ���̰߳�ȫ����
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��18�� ����2:23:44
	 */
	public class SingletonPattern2 {
	
	    private static SingletonPattern2 instance;
	
	    private SingletonPattern2() {
	    }
	
	    public static synchronized SingletonPattern2 getInstance() {
	        if (null == instance) {
	            instance = new SingletonPattern2();
	        }
	        return instance;
	    }
	
	}
	```

###### 3.1.1.2.3 ����ʽ
- **`SUMMARY:` �̰߳�ȫ�����ӳټ����͡�**
- �Ƿ��ӳٳ�ʼ��
	- ��
- �Ƿ���̰߳�ȫ
	- ��
- ʵ���Ѷ�
	- ��
- ����
	- ���ַ�ʽ�Ƚϳ��ã������ײ�����������
	- �ŵ㣺û�м�����ִ��Ч�ʻ���ߣ�
	- ȱ�㣺�����ʱ�ͳ�ʼ�����˷��ڴ棻
	- ������`classloder`���Ʊ����˶��̵߳�ͬ�����⣬������`instance`����װ��ʱ��ʵ��������Ȼ������װ�ص�ԭ���кܶ��֣��ڵ���ģʽ�д�������ǵ���`getInstance()`������ ����Ҳ����ȷ���������ķ�ʽ�����������ľ�̬������������װ�أ���ʱ���ʼ��`instance`��Ȼû�дﵽ`lazy loading`��Ч����
- *`eg.`����ʵ����*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * ������ģʽ������ģʽ
	 * 
	 * <p> ����ʽ
	 * <p> ���ַ�ʽ�Ƚϳ��ã������ײ�����������
	 * 
	 * <ul>
	 * <li> �Ƿ��ӳٳ�ʼ������
	 * <li> �Ƿ���̰߳�ȫ����
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��18�� ����2:23:44
	 */
	public class SingletonPattern3 {
	
	    private static SingletonPattern3 instance = new SingletonPattern3();
	
	    private SingletonPattern3() {
	    }
	
	    public static SingletonPattern3 getInstance() {
	        return instance;
	    }
	
	}
	```

###### 3.1.1.2.4 ˫����/˫��У������`DCL`���� `double-checked locking`��
- **`SUMMARY:` ˫��У���ӳټ��ء��̰߳�ȫ�͡�**
- �Ƿ��ӳٳ�ʼ��
	- ��
- �Ƿ���̰߳�ȫ
	- ��
- ʵ���Ѷ�
	- ��
- ����
	- ���ַ�ʽ����˫�����ƣ���ȫ���ڶ��߳�������ܱ��ָ����ܣ�
	- `getInstance()`�����ܶ�Ӧ�ó���ܹؼ���
- *`eg.`����ʵ����*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * ������ģʽ������ģʽ
	 * 
	 * <p> ˫����/˫��У������DCL���� double-checked locking��
	 * <p> ���ַ�ʽ����˫�����ƣ���ȫ���ڶ��߳�������ܱ��ָ����ܡ�
	 * 
	 * <ul>
	 * <li> �Ƿ��ӳٳ�ʼ������
	 * <li> �Ƿ���̰߳�ȫ����
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��18�� ����2:23:44
	 */
	public class SingletonPattern4 {
	
	    private volatile static SingletonPattern4 instance;
	
	    private SingletonPattern4() {
	    }
	
	    public static SingletonPattern4 getInstance() {
	        if (null == instance) {
	            synchronized (SingletonPattern4.class) {
	                if (null == instance) {
	                    instance = new SingletonPattern4();
	                }
	            }
	        }
	        return instance;
	    }
	
	    public static void main(String[] args) {
	        System.out.println(SingletonPattern6.INSTANCE.INSTANCE);
	    }
	
	}
```

###### 3.1.1.2.5 �Ǽ�ʽ/��̬�ڲ���
- **`SUMMARY:` ʹ�þ�̬�ڲ����͡�**
- �Ƿ��ӳٳ�ʼ��
	- ��
- �Ƿ���̰߳�ȫ
	- ��
- ʵ���Ѷ�
	- һ��
- ����
	- ���ַ�ʽ�ܴﵽ˫������ʽһ���Ĺ�Ч����ʵ�ָ��򵥡��Ծ�̬��ʹ���ӳٳ�ʼ����Ӧʹ�����ַ�ʽ������˫������ʽ�����ַ�ʽֻ�����ھ�̬��������˫������ʽ����ʵ������Ҫ�ӳٳ�ʼ��ʱʹ�ã�
	- ���ַ�ʽͬ��������`classloder`��������֤��ʼ��`instance`ʱֻ��һ���̣߳�������`3`�ַ�ʽ��ͬ���ǣ���`3`�ַ�ʽֻҪ`Singleton`�౻װ���ˣ���ô`instance`�ͻᱻʵ������û�дﵽ`lazy loading`Ч�����������ַ�ʽ��`Singleton`�౻װ���ˣ�`instance`��һ������ʼ������Ϊ`SingletonHolder`��û�б�����ʹ�ã�ֻ����ʾͨ������`getInstance`����ʱ���Ż���ʾװ��`SingletonHolder`�࣬�Ӷ�ʵ���� `instance`������һ�£����ʵ����`instance`��������Դ�������������ӳټ��أ�����һ���棬�ֲ�ϣ���� `Singleton`�����ʱ��ʵ��������Ϊ����ȷ��`Singleton`�໹�����������ĵط�������ʹ�ôӶ������أ���ô���ʱ��ʵ����`instance`��Ȼ�ǲ����ʵġ����ʱ�����ַ�ʽ��ȵ�`3`�ַ�ʽ���Եúܺ���
- *`eg.`����ʵ����*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * ������ģʽ������ģʽ
	 * 
	 * <p> �Ǽ�ʽ/��̬�ڲ���
	 * <p> ���ַ�ʽ�ܴﵽ˫������ʽһ���Ĺ�Ч����ʵ�ָ��򵥡��Ծ�̬��ʹ���ӳٳ�ʼ����Ӧʹ�����ַ�ʽ������˫������ʽ�����ַ�ʽֻ�����ھ�̬��������˫������ʽ����ʵ������Ҫ�ӳٳ�ʼ��ʱʹ�á�
	���ַ�ʽͬ�������� classloder ��������֤��ʼ�� instance ʱֻ��һ���̣߳������� 3 �ַ�ʽ��ͬ���ǣ��� 3 �ַ�ʽֻҪ Singleton �౻װ���ˣ���ô instance �ͻᱻʵ������û�дﵽ lazy loading Ч�����������ַ�ʽ�� Singleton �౻װ���ˣ�instance ��һ������ʼ������Ϊ SingletonHolder ��û�б�����ʹ�ã�ֻ����ʾͨ������ getInstance ����ʱ���Ż���ʾװ�� SingletonHolder �࣬�Ӷ�ʵ���� instance������һ�£����ʵ���� instance ��������Դ�������������ӳټ��أ�����һ���棬�ֲ�ϣ���� Singleton �����ʱ��ʵ��������Ϊ����ȷ�� Singleton �໹�����������ĵط�������ʹ�ôӶ������أ���ô���ʱ��ʵ���� instance ��Ȼ�ǲ����ʵġ����ʱ�����ַ�ʽ��ȵ� 3 �ַ�ʽ���Եúܺ���
	 * 
	 * <ul>
	 * <li> �Ƿ��ӳٳ�ʼ������
	 * <li> �Ƿ���̰߳�ȫ����
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��18�� ����2:23:44
	 */
	public class SingletonPattern5 {
	
	    private SingletonPattern5() {
	    }
	
	    private static class SingletonHolder {
	        private static final SingletonPattern5 INSTANCE = new SingletonPattern5();
	    }
	
	    public static final SingletonPattern5 getInstance() {
	        return SingletonHolder.INSTANCE;
	    }
	
	}
	```

###### 3.1.1.2.6 ö��
- **`SUMMARY:` ʹ��ö�١�**
- �Ƿ��ӳٳ�ʼ��
	- ��
- �Ƿ���̰߳�ȫ
	- ��
- ʵ���Ѷ�
	- ��
- ����
	- ����ʵ�ַ�ʽ��û�б��㷺���ã�������ʵ�ֵ���ģʽ����ѷ�����������࣬�Զ�֧�����л����ƣ����Է�ֹ���ʵ������
	- ���ַ�ʽ��`Effective Java`����`Josh Bloch`�ᳫ�ķ�ʽ���������ܱ�����߳�ͬ�����⣬���һ��Զ�֧�����л����ƣ���ֹ�����л����´����µĶ��󣬾��Է�ֹ���ʵ����������������`JDK1.5`֮��ż��� `enum`���ԣ������ַ�ʽд�������˸о����裬��ʵ�ʹ����У�Ҳ�����ã�
	- ����ͨ��`reflection attack`������˽�й��췽����
- *`eg.`����ʵ����*
	``` java
	package com.cmc.dp.pattern.singleton;
	
	/**
	 * ������ģʽ������ģʽ
	 * 
	 * <p> ö��
	 * <p> ����ʵ�ַ�ʽ��û�б��㷺���ã�������ʵ�ֵ���ģʽ����ѷ�����������࣬�Զ�֧�����л����ƣ����Է�ֹ���ʵ������
	 * <ul>
	 * <li> �Ƿ��ӳٳ�ʼ������
	 * <li> �Ƿ���̰߳�ȫ����
	 * </ul>
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��18�� ����2:23:44
	 */
	public enum SingletonPattern6 {
	
	    INSTANCE;
	
	    public void whateverMethod() {
	    }
	
	}
	```

	> *ע��*
	> - һ������£�������ʹ�õ�`1`�ֺ͵�`2`��������ʽ������ʹ�õ�`3`�ֶ�����ʽ��ֻ����Ҫ��ȷʵ��`lazy loading`Ч��ʱ���Ż�ʹ�õ�`5`�ֵǼǷ�ʽ������漰�������л���������ʱ�����Գ���ʹ�õ�`6`��ö�ٷ�ʽ�������������������󣬿��Կ���ʹ�õ�`4`��˫������ʽ��


#### 3.1.2 ����ģʽ��`Factory Pattern`�������á�
- **`SUMMARY:` `Factory Pattern`��ͨ��ʹ��һ����ͬ�Ľӿ���ָ���´����Ķ��󣬲���Կͻ��˱�¶�����߼���**
- ����ģʽ��`Factory Pattern`����`Java`����õ����ģʽ֮һ��
- ���ڴ�����ģʽ�����ṩ��һ�ִ����������ѷ�ʽ��
- �ڴ��������ʱ��**ͨ��ʹ��һ����ͬ�Ľӿ���ָ���´����Ķ��󣬲���Կͻ��˱�¶�����߼�**��

##### 3.1.2.1 ����
###### 3.1.2.1.1 ��ͼ
- ����һ����������Ľӿڣ����������Լ�����ʵ������һ�������ࣻ
- ʹ���������ӳٵ�������У�*���ǲ�������౩¶�����߼�*����

###### 3.1.2.1.2 �������
- ��Ҫ����ӿ�ѡ������⡣

###### 3.1.2.1.3 �ؼ�����
- ����������������ִ�С�

###### 3.1.2.1.4 Ӧ��ʵ��
- ��Ҫһ������������ֱ�Ӵӹ������������*������ȥ��������������ô�������ģ��Լ������������ľ���ʵ��*��
- `Hibernate`�������ݿ⣬ֻ�軻���Ժ������Ϳ��ԡ�

###### 3.1.2.1.5 �ŵ�
- **��չ�Ը�**�����������һ����Ʒ��ֻҪ��չһ��������Ԫ�ص��༴�ɣ�
- **���β�Ʒ�ľ���ʵ�֣�������ֻ���Ĳ�Ʒ�Ľӿڡ�**

###### 3.1.2.1.6 ȱ��
- ÿ�����Ӳ�Ʒʱ������Ҫ���Ӿ�����Ͷ���ʵ�ֹ�����**ʹ��ϵͳ����ĸ����ɱ����ӣ���һ���̶���������ϵͳ�ĸ��Ӷȣ�ͬʱҲ������ϵͳ�������������**

###### 3.1.2.1.7 ʹ�ó���
- **��־��¼��**
	- ��¼���ܼ�¼������Ӳ�̡�ϵͳ�¼���Զ�̷������ȣ��û�����ѡ���¼��־��ʲô�ط���
- **���ݿ����**
	- ���û���֪�����ϵͳ������һ�����ݿ⣬�Լ����ݿ�����б仯ʱ��

###### 3.1.2.1.8 ע������
- **`SUMMARY:` `Factory Pattern`������ĸ��Ӵ��������ʺ�ʹ�ù���ģʽ�����򵥴������ر���ֻ��Ҫͨ��`new`�Ϳ�����ɴ����Ķ�������ʹ�ù���ģʽ��**
- **��Ϊһ�ִ�����ģʽ�����κ���Ҫ���ɸ��Ӷ���ĵط���������ʹ�ù�������ģʽ��**��һ����Ҫע��ĵط�����**���Ӷ����ʺ�ʹ�ù���ģʽ�����򵥶����ر���ֻ��Ҫͨ��`new`�Ϳ�����ɴ����Ķ�������ʹ�ù���ģʽ��**���ʹ�ù���ģʽ������Ҫ����һ�������࣬������ϵͳ�ĸ��Ӷȡ�

##### 3.1.2.2 ʵ��
- *`img.`����ͼ��*
<br>![][3]
- `Shape.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public interface Shape {
	
	    /**
	     * ��ͼ��
	     * 
	     * @author Thomas Lee
	     * @version 2017��2��20�� ����9:51:42
	     */
	    public void draw();
	
	}
	```
- `Rectangle.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class Rectangle implements Shape {
	
	    @Override
	    public void draw() {
	        System.out.println("draw a rectangle.");
	    }
	
	}
	``` 

- `Circle.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class Circle implements Shape {
	
	    @Override
	    public void draw() {
	        System.out.println("draw a circle.");
	    }
	
	}
	``` 

- `Square.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class Square implements Shape {
	
	    @Override
	    public void draw() {
	        System.out.println("draw a square.");
	    }
	
	}
	``` 

- `ShapeFactoryImpl.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class ShapeFactoryImpl implements ShapeFactory {
	
	    private static final String ERR_MSG_ARG_NON_SUPPORT_SHAPE = "��֧�ֵ���״��";
	
	    @Override
	    public Shape getShape(ShapeEnum shapeEnum) {
	        if (shapeEnum.equals(ShapeEnum.RECTANGLE)) {
	            return new Rectangle();
	        } else if (shapeEnum.equals(ShapeEnum.CIRCLE)) {
	            return new Circle();
	        } else if (shapeEnum.equals(ShapeEnum.SQUARE)) {
	            return new Square();
	        } else {
	            System.out.println(ERR_MSG_ARG_NON_SUPPORT_SHAPE);
	            return null;
	        }
	    }
	    
	}
	```

- `ShapeFactoryDemo.java`

	``` java
	package com.cmc.dp.pattern.factory;
	
	public class FactoryPatternDemo {
	
	    public static void main(String[] args) {
	        ShapeFactory shapeFactory = new ShapeFactoryImpl();
	        Shape rectangle = shapeFactory.getShape(ShapeEnum.RECTANGLE);
	        Shape circle = shapeFactory.getShape(ShapeEnum.CIRCLE);
	        Shape square = shapeFactory.getShape(ShapeEnum.SQUARE);
	        rectangle.draw();
	        circle.draw();
	        square.draw();
	    }
	
	}
	``` 
- `���`

	``` java
	draw a rectangle.
	draw a circle.
	draw a square.
	```

#### 3.1.3 ���󹤳�ģʽ��`Abstract Factory Pattern`��
- **`SUMMARY:` `Abstract Factory Pattern`�������Ĺ�����**
- Χ��һ���������������������Ĺ�������������������
- �������͵����ģʽ���ڴ�����ģʽ�����ṩ��һ�ִ����������ѷ�ʽ��
- �ڳ��󹤳�ģʽ�У��ӿ��Ǹ��𴴽�һ����ض���Ĺ���������Ҫ��ʽָ�����ǵ��ࡣÿ�����ɵĹ������ܰ��չ���ģʽ�ṩ����

#### 3.1.4 ������ģʽ��`Builder Pattern`��

#### 3.1.5 ԭ��ģʽ��`Prototype Pattern`�������á�
- **`SUMMARY:` `Abstract Factory Pattern`�����ڴ����ظ��Ķ���ͬʱ���ܱ�֤���ܣ������ӣ���**
- ԭ��ģʽ��`Prototype Pattern`�������ڴ����ظ��Ķ���ͬʱ���ܱ�֤���ܣ�
- �������͵����ģʽ���ڴ�����ģʽ�����ṩ��һ�ִ����������ѷ�ʽ��
- ����ģʽ��ʵ����һ��ԭ�ͽӿڣ��ýӿ����ڴ�����ǰ����Ŀ�¡��
- ��ֱ�Ӵ�������Ĵ��۱Ƚϴ�ʱ�����������ģʽ��
- *`EG.`���磺*
	- **һ��������Ҫ��һ���ߴ��۵����ݿ����֮�󱻴�����**
	- **���ǿ��Ի���ö�������һ������ʱ�������Ŀ�¡������Ҫ��ʱ��������ݿ⣬�Դ����������ݿ���á�**

### 3.2 �ṹ��ģʽ
#### 3.2.1 ������ģʽ��`Adapter Pattern`�������á�
- **`SUMMARY:` `Adapter Pattern`����һ�֡����ȡ�ģʽ�������������ݵ��ࣨ`A`��`B`������������Ȼ����`B`����Ҫ����ķ����ڲ�ͨ��ʵ���䣨�ӿڵģ�����������`A`��**
- ������ģʽ��`Adapter Pattern`������Ϊ���������ݵĽӿ�֮���������
- *���ڽṹ��ģʽ*������������������ӿڵĹ��ܣ�
- �漰��һ����һ���࣬���ฺ���������Ļ򲻼��ݵĽӿڹ��ܣ�

##### 3.2.1.1 ����
###### 3.2.1.1.1 ��ͼ
- ��һ����Ľӿ�ת���ɿͻ�ϣ��������һ���ӿڣ�
- ʹ��ԭ�����ڽӿڲ����ݶ�����һ��������Щ�����һ������

###### 3.2.1.1.2 �������
- ��Ҫ��������ϵͳ�У�����Ҫ��һЩ"�ִ�Ķ���"�ŵ��µĻ����У����»���Ҫ��Ľӿ����ֶ���������ġ�

###### 3.2.1.1.3 �ؼ�����
- �������̳л��������еĶ���ʵ����Ҫ��Ŀ��ӿڡ�

###### 3.2.1.1.4 Ӧ��ʵ��
- ��������`110V`���й�`220V`����Ҫ��һ����������`110V`ת��Ϊ`220V`��
- `JAVA JDK 1.1`�ṩ��`Enumeration`�ӿڣ�����`1.2`���ṩ��`Iterator`�ӿڣ���Ҫʹ��`1.2`��`JDK`����Ҫ����ǰϵͳ��`Enumeration`�ӿ�ת��Ϊ`Iterator`�ӿڣ���ʱ����Ҫ������ģʽ��

###### 3.2.1.1.5 �ŵ�
- ������û�й�������һ�����У�
- �������ĸ��ã�
- ���������͸���ȣ� 
- ����Ժá�

###### 3.2.1.1.6 ȱ��
- �����ʹ��������������ϵͳ�ǳ����ң�����������а��գ�
	- *`eg.`*�����������õ���`A`�ӿڣ���ʵ�ڲ����������`B`�ӿڵ�ʵ�֣�һ��ϵͳ���̫��������������������һ�����ѡ����������Ǻ��б�Ҫ�����Բ�ʹ��������������ֱ�Ӷ�ϵͳ�����ع���
- ����`JAVA`���̳�һ���࣬��������ֻ������һ���������࣬����Ŀ��������ǳ����ࡣ

###### 3.2.1.1.7 ʹ�ó���
- �ж������޸�һ���������е�ϵͳ�Ľӿڣ���ʱӦ�ÿ���ʹ��������ģʽ��

###### 3.2.1.1.8 ע������
- ��������������ϸ���ʱ��ӵģ����ǽ�����ڷ��۵���Ŀ�����⡣

##### 3.2.1.1 ʵ��
- ��һ��`MediaPlayer`�ӿں�һ��ʵ����`MediaPlayer`�ӿڵ�ʵ����`AudioPlayer`��Ĭ������£�`AudioPlayer`���Բ���`mp3`��ʽ����Ƶ�ļ���
- ����һ���ӿ�`AdvancedMediaPlayer`��ʵ����`AdvancedMediaPlayer`�ӿڵ�ʵ���ࡣ������Բ���`vlc`��`mp4`��ʽ���ļ���
- Ҫ��`AudioPlayer`����������ʽ����Ƶ�ļ���Ϊ��ʵ��������ܣ���Ҫ����һ��ʵ���� `MediaPlayer`�ӿڵ���������`MediaAdapter`����ʹ��`AdvancedMediaPlayer`��������������ĸ�ʽ��
- `AudioPlayer`ʹ����������`MediaAdapter`�����������Ƶ���ͣ�����Ҫ֪���ܲ��������ʽ��Ƶ��ʵ���ࡣ`AdapterPatternDemo`����ʾ��ʹ��`AudioPlayer`�������Ÿ��ָ�ʽ��
- *`img.`����ͼ��*<br>![][4]
- `MediaPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public interface MediaPlayer {
	
	    public void play(String audioType, String fileName);
	
	}
	```

- `AdvancedMediaPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public interface AdvancedMediaPlayer {
	
	    public void playVlc(String fileName);
	
	    public void playMp4(String fileName);
	
	}
	```

- `Mp4Player.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class Mp4Player implements AdvancedMediaPlayer {
	
	    @Override
	    public void playVlc(String fileName) {
	        /* do nothing... */
	    }
	
	    @Override
	    public void playMp4(String fileName) {
	        System.out.println("Playing mp4 file. Name: " + fileName);
	    }
	
	}
	```

- `VlcPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class VlcPlayer implements AdvancedMediaPlayer {
	
	    @Override
	    public void playVlc(String fileName) {
	        System.out.println("Playing vlc file. Name: " + fileName);
	    }
	
	    @Override
	    public void playMp4(String fileName) {
	        /* do nothing... */
	    }
	
	}
	```

- `MediaAdapter.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class MediaAdapter implements MediaPlayer {
	
	    AdvancedMediaPlayer advancedMusicPlayer;
	
	    public MediaAdapter(String audioType) {
	        if (audioType.equalsIgnoreCase("vlc")) {
	            advancedMusicPlayer = new VlcPlayer();
	        } else if (audioType.equalsIgnoreCase("mp4")) {
	            advancedMusicPlayer = new Mp4Player();
	        }
	    }
	
	    @Override
	    public void play(String audioType, String fileName) {
	        if (audioType.equalsIgnoreCase("vlc")) {
	            advancedMusicPlayer.playVlc(fileName);
	        } else if (audioType.equalsIgnoreCase("mp4")) {
	            advancedMusicPlayer.playMp4(fileName);
	        }
	    }
	
	}
	```

- `AudioPlayer.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class AudioPlayer implements MediaPlayer {
	
	    // ��ʹ��MediaAdapterֱ��ʹ��AdvancedMusicPlayer���󲻷��Ͻӿڸ���ԭ��͵�һְ��ԭ����Ϊ�������MP3��vlc������������ʱ����������AdvancedMusicPlayer����Ȼ��ֱ���е��ã�����Ҳ�ܴﵽĿ�ģ���������ڡ�Ŀǰ���಻֧��MP3��vlc���š��������Ӧ������һ���ӿڣ�����MP3��vlc�Ľӿڣ��������ŷ��Ͻӿڸ���ԭ�򣬼���С�ӿڣ�MP3��vlc��һ������С�ӿڣ���ͬʱ���ߺ�һҲ�ǵ�ǰҵ���²��ɷ����ְ������AdvancedMusicPlayer�������һ���߼��Ĳ��ŷ�ʽ����ֱ����������AdvancedMusicPlayer���󡱵ķ�ʽ����Ҫ�޸�AudioPlayer�Ĵ��룬ʵ���ϸ��ַ�ʽ������Ϲ�ϵ��������ͨ��MediaAdapter���ǾۺϹ�ϵ�����ݹ�ϵǿ�������� = ʵ�� > ��� > �ۺ� > ���� > ��������ѡ����ߡ�
	    MediaAdapter mediaAdapter;
	
	    @Override
	    public void play(String audioType, String fileName) {
	    
	        // ����mp3�����ļ�������֧��
	        if (audioType.equalsIgnoreCase("mp3")) {
	            System.out.println("Playing mp3 file. Name: " + fileName);
	        }
	
	        // mediaAdapter�ṩ�˲��������ļ���ʽ��֧��
	        else if (audioType.equalsIgnoreCase("vlc") || audioType.equalsIgnoreCase("mp4")) {
	            mediaAdapter = new MediaAdapter(audioType);
	            mediaAdapter.play(audioType, fileName);
	        } else {
	            System.out.println("Invalid media. " + audioType + " format not supported");
	        }
	    }
	
	}
	```

- `AdapterPatternDemo.java`

	``` java
	package com.cmc.dp.pattern.adapter;
	
	public class AdapterPatternDemo {
	
	    public static void main(String[] args) {
	        AudioPlayer audioPlayer = new AudioPlayer();
	        audioPlayer.play("mp3", "beyond the horizon.mp3");
	        audioPlayer.play("mp4", "alone.mp4");
	        audioPlayer.play("vlc", "far far away.vlc");
	        audioPlayer.play("avi", "mind me.avi");
	    }
	
	}
	```


#### 3.2.2 �Ž�ģʽ��`Bridge Pattern`�������á�
- **`SUMMARY:` `Bridge Pattern`��ͨ���ṩ���󻯣�`Shape`����ʵ�ֻ���`RedCircle`��`GreenCircle`��֮����Žӽṹ��`DrawAPI`����ʵ�ֶ��ߵĽ��ʹ���Ƕ����Զ����ı仯��**
- �Žӣ�`Bridge`�������ڰѳ�����ʵ�ֻ����ʹ�ö��߿��Զ����仯��
- ���ڽṹ��ģʽ��
- ��ͨ���ṩ���󻯺�ʵ�ֻ�֮����Žӽṹ����ʵ�ֶ��ߵĽ��
- �漰��һ����Ϊ�ŽӵĽӿڣ�ʹ��ʵ����Ĺ��ܶ����ڽӿ�ʵ���࣬���������͵���ɱ��ṹ���ı������Ӱ�졣
- *`img.`����ͼ��*<br>![][15]

	``` java
	package com.cmc.dp.pattern.bridge;
	
	public abstract class Shape {
	
	    protected DrawAPI drawAPI;
	
	    /* ���ۺϣ����������DrawAPI������������������RecCircle��GreenCircle */
	    protected Shape(DrawAPI drawAPI) {
	        this.drawAPI = drawAPI;
	    }
	
	    public abstract void draw();
	
	}
	```

#### 3.2.3 ���ģʽ��`Composite Pattern`�������á�
- **`SUMMARY:` `Composite Pattern`���������νṹ��һ�����ƵĶ�����һ����һ�Ķ���**
- **������ģʽ�Ƕ�����б�����ģʽ��**
- ��������ģʽ�������ڰ�һ�����ƵĶ�����һ����һ�Ķ����������νṹ����϶���������ʾ�����Լ������Σ�
- ���ڽṹ��ģʽ���������˶���������νṹ��
- ������һ�������Լ���������ࡣ�����ṩ���޸���ͬ������ķ�ʽ��
- *`img.`����ͼ��*<br>![][5]

	``` java
	package com.cmc.dp.pattern.composite;
	
	public class CompositePatternDemo {
	
	    public static void main(String[] args) {
	        Employee CEO = new Employee("John", "CEO", 30000);
	
	        Employee headSales = new Employee("Robert", "Head Sales", 20000);
	
	        Employee headMarketing = new Employee("Michel", "Head Marketing", 20000);
	
	        Employee clerk1 = new Employee("Laura", "Marketing", 10000);
	        Employee clerk2 = new Employee("Bob", "Marketing", 10000);
	
	        Employee salesExecutive1 = new Employee("Richard", "Sales", 10000);
	        Employee salesExecutive2 = new Employee("Rob", "Sales", 10000);
	
	        CEO.add(headSales);
	        CEO.add(headMarketing);
	
	        headSales.add(salesExecutive1);
	        headSales.add(salesExecutive2);
	
	        headMarketing.add(clerk1);
	        headMarketing.add(clerk2);
	
	        //��ӡ����֯������Ա��
	        System.out.println(CEO);
	        for (Employee headEmployee : CEO.getSubordinates()) {
	            System.out.println(headEmployee);
	            for (Employee employee : headEmployee.getSubordinates()) {
	                System.out.println(employee);
	            }
	        }
	    }
	
	}
	``` 

#### 3.2.4 װ����ģʽ��`Decorator Pattern`��
- **`SUMMARY:` `Decorator Pattern`���ڲ��ı����ж���ṹ�������£���������µĹ��ܡ�**
- װ����ģʽ��`Decorator Pattern`��������һ�����еĶ�������µĹ��ܣ�ͬʱ�ֲ��ı���ṹ��
- ���ڽṹ��ģʽ��������Ϊ���е����һ����װ��
- ����ģʽ������һ��װ���࣬������װԭ�е��࣬���ڱ����෽��ǩ�������Ե�ǰ���£��ṩ�˶���Ĺ��ܡ�
- *`img.`����ͼ��*<br>![][6]

	``` java
	package com.cmc.dp.pattern.decorator;
	
	public class RedShapeDecorator extends ShapeDecorator {
	
	    public RedShapeDecorator(Shape decoratedShape) {
	        super(decoratedShape);
	    }
	
	    @Override
	    public void draw() {
	        decoratedShape.draw();
	        // ����µĹ���
	        setRedBorder(decoratedShape);
	    }
	
	    private void setRedBorder(Shape decoratedShape) {
	        System.out.println("Border Color: Red");
	    }
	
	}
	```

#### 3.2.5 ����ģʽ��`Facade Pattern`�������á�
- **`SUMMARY:` `Facade Pattern`����ͻ����ṩһ�����Է���ϵͳ��ͳһ�ӿڣ�������ϵͳ�ĸ����ԡ�**
- ���ģʽ��`Facade Pattern`������ϵͳ�ĸ����ԣ�����ͻ����ṩ��һ���ͻ��˿��Է���ϵͳ�Ľӿڣ�
- ���ڽṹ��ģʽ���������е�ϵͳ���һ���ӿڣ�������ϵͳ�ĸ����ԣ�
- ����ģʽ�漰��һ����һ���࣬�����ṩ�˿ͻ�������ļ򻯷����Ͷ�����ϵͳ�෽����ί�е��á�
- *`img.`����ͼ��*<br>![][7]

	``` java
	public class ShapeMaker {
	   private Shape circle;
	   private Shape rectangle;
	   private Shape square;
	
	   public ShapeMaker() {
	      circle = new Circle();
	      rectangle = new Rectangle();
	      square = new Square();
	   }
	
	   public void drawCircle(){
	      circle.draw();
	   }
	   public void drawRectangle(){
	      rectangle.draw();
	   }
	   public void drawSquare(){
	      square.draw();
	   }
	}
	```

#### 3.2.6 ��Ԫģʽ��`Flyweight Pattern`��
#### 3.2.7 ����ģʽ��`Proxy Pattern`�������á�
- **`SUMMARY:` `Proxy Pattern`��һ�����ṩһ�ִ����������Ƹ���ķ��ʡ�**
- �ڴ���ģʽ��`Proxy Pattern`���У�һ���������һ����Ĺ��ܣ�
- ���ڽṹ��ģʽ��
- ����**�������ж���Ķ����Ա�������ṩ���ܽӿڣ�**
- Ϊ���������ṩһ�ִ����Կ��ƶ��������ķ��ʡ�
- *`img.`����ͼ��*<br>![][8]

	``` java
	package com.cmc.dp.pattern.proxy;
	
	public class ProxyImage implements Image {
	
	    private RealImage realImage;
	    private String fileName;
	
	    public ProxyImage(String fileName) {
	        this.fileName = fileName;
	    }
	
	    @Override
	    public void display() {
	        if (realImage == null) {
	            realImage = new RealImage(fileName);
	        }
	        realImage.display();
	    }
	
	}
	```

### 3.3 ��Ϊ��ģʽ
#### 3.3.1 ������ģʽ��`Chain of Responsibility Pattern`�������á�
- **`SUMMARY:` `Chain of Responsibility Pattern`��ÿ�������߶���������һ�������ߵ����ã������ǰ�Ķ����ܴ���������ô��������󴫸���һ�������ߣ��������ơ�**
- ������ģʽ��`Chain of Responsibility Pattern`��Ϊ���󴴽���һ�������߶��������
- ������Ϊ��ģʽ��
- ͨ��ÿ�������߶���������һ�������ߵ����á����һ�������ܴ����������ô�������ͬ�����󴫸���һ�������ߣ��������ƣ�
- �����������
- ������������������������һ���ö�������п��ܽ������󣬽���Щ�������ӳ�һ����������������������������ֱ���ж�������Ϊֹ��
- *`img.`����ͼ��*<br>![][9]
	
	``` java
	package com.cmc.dp.pattern.chainofresponsibility;
	
	public class ChainPatternDemo {
	
	    private static AbstractLogger getChainOfLoggers() {
	
	        AbstractLogger errorLogger = new ErrorLogger(AbstractLogger.ERROR);
	        AbstractLogger fileLogger = new FileLogger(AbstractLogger.DEBUG);
	        AbstractLogger consoleLogger = new ConsoleLogger(AbstractLogger.INFO);
	
	        errorLogger.setNextLogger(fileLogger);
	        fileLogger.setNextLogger(consoleLogger);
	
	        return errorLogger;
	    }
	
	    public static void main(String[] args) {
	        AbstractLogger loggerChain = getChainOfLoggers();
	        loggerChain.logMessage(AbstractLogger.INFO, "This is an information.");
	        loggerChain.logMessage(AbstractLogger.DEBUG, "This is an debug level information.");
	        loggerChain.logMessage(AbstractLogger.ERROR, "This is an error information.");
	    }
	
	}
	```

#### 3.3.2 ����ģʽ��`Command Pattern`�������á�
- **`SUMMARY:` `Command Pattern`������������ڶ����У����������ö��󡣽��������ʵ����϶ȡ�**
- ����ģʽ��`Command Pattern`����һ���������������ģʽ��
- ������Ϊ��ģʽ��
- �������������ʽ�����ڶ����У����������ö��󡣵��ö���Ѱ�ҿ��Դ��������ĺ��ʵĶ��󣬲��Ѹ��������Ӧ�Ķ��󣬸ö���ִ�����
- ��һ�������װ��һ�����󣬴Ӷ������ò�ͬ������Կͻ����в�������
- *`img.`����ͼ��*<br>![][10]

	``` java
	import java.util.ArrayList;
	import java.util.List;
	
	   public class Broker {
	   private List<Order> orderList = new ArrayList<Order>(); 
	
	   public void takeOrder(Order order){
	      orderList.add(order);		
	   }
	
	   public void placeOrders(){
	      for (Order order : orderList) {
	         order.execute();
	      }
	      orderList.clear();
	   }
	}
	```

#### 3.3.3 ������ģʽ��`Interpreter Pattern`��
#### 3.3.4 ������ģʽ��`Iterator Pattern`�������á�
- **`SUMMARY:` `Iterator Pattern`���ṩһ�ַ���˳�����һ���ۺ϶����и���Ԫ�أ��������뱩¶�ö�����ڲ���ʾ��**
- ������ģʽ��`Iterator Pattern`������˳����ʼ��϶����Ԫ�أ�����Ҫ֪�����϶���ĵײ��ʾ��
- ��`Java`��`.Net`��̻����зǳ����õ����ģʽ��
- ������ģʽ������Ϊ��ģʽ��
- �ṩһ�ַ���˳�����һ���ۺ϶����и���Ԫ��, �������뱩¶�ö�����ڲ���ʾ��
- *`img.`����ͼ��*<br>![][11]

	``` java
	package com.cmc.dp.pattern.iterator;
	
	public class NameRepository implements Container {
	
	    public String names[] = { "Robert", "John", "Julie", "Lora" };
	
	    @Override
	    public Iterator getIterator() {
	        return new NameIterator();
	    }
	
	    private class NameIterator implements Iterator {
	
	        int index;
	
	        @Override
	        public boolean hasNext() {
	            if (index < names.length) {
	                return true;
	            }
	            return false;
	        }
	
	        @Override
	        public Object next() {
	            if (this.hasNext()) {
	                return names[index++];
	            }
	            return null;
	        }
	    }
	
	}
	```

#### 3.3.5 �н���ģʽ��`Mediator Pattern`�������á�
- **`SUMMARY:` `Mediator Pattern`����һ���н��������װһϵ�еĶ��󽻻����н���ʹ��������Ҫ��ʽ���໥���ã��Ӷ�ʹ�������ɢ�����ҿ��Զ����ظı�����֮��Ľ�����**
- �н���ģʽ��`Mediator Pattern`�����������Ͷ���������֮���ͨ�Ÿ����ԣ�
- �ṩ��һ���н��࣬����ͨ������ͬ��֮���ͨ�ţ���֧������ϣ�ʹ��������ά����
- ������Ϊ��ģʽ��
- ��һ���н������**��װһϵ�еĶ��󽻻�**���н���ʹ��������Ҫ��ʽ���໥���ã��Ӷ�ʹ�������ɢ�����ҿ��Զ����ظı�����֮��Ľ�����
- *`img.`����ͼ��*<br>![][12]

	``` java
	package com.cmc.dp.pattern.mediator;
	
	public class User {
	
	    private String name;
	
	    public String getName() {
	        return name;
	    }
	
	    public void setName(String name) {
	        this.name = name;
	    }
	
	    public User(String name) {
	        this.name = name;
	    }
	
	    public void sendMessage(String message) {
	        // ChatRoom���н�����
	        ChatRoom.showMessage(this, message);
	    }
	
	}
	```

#### 3.3.6 ����¼ģʽ��`Memento Pattern`��
#### 3.3.7 �۲���ģʽ��`Observer Pattern`�������á�
- **`SUMMARY:` `Observer Pattern`�� ���������һ��һ�Զ��������ϵ����һ�������״̬�����ı�ʱ���������������Ķ��󶼵õ�֪ͨ�����Զ����¡�**
-  ���������һ��һ�Զ��������ϵ����һ�������״̬�����ı�ʱ���������������Ķ��󶼵õ�֪ͨ�����Զ����£�
- ������Ϊ��ģʽ��
- *`img.`����ͼ��*<br>![][13]

#### 3.3.8 ״̬ģʽ��`State Pattern`��
#### 3.3.9 ����ģʽ��`Strategy Pattern`�������á�
- **`SUMMARY:` `Strategy Pattern`������һϵ�е��㷨��������һ������װ����������ʹ���ǿ���������ʱ���滻��**
- �ڲ���ģʽ��`Strategy Pattern`���У�һ�������Ϊ�����㷨����������ʱ���ģ�
- ��һ�����Է�װ��һ�����󣬺�����ģʽ����һ�������װ��һ�������е���
- ������Ϊ��ģʽ��
- ������ʾ���ֲ��ԵĶ����һ����Ϊ���Ų��Զ���ı���ı��`context`���󡣲��Զ���ı�`context`�����ִ�е��㷨��
- *`img.`����ͼ��*<br>![][14]

	``` java
	package com.cmc.dp.pattern.strategy;
	
	public class StrategyPatternDemo {
	
	    public static void main(String[] args) {
	        Context context = new Context(new OperationAdd());
	        System.out.println("10 + 5 = " + context.executeStrategy(10, 5));
	
	        context = new Context(new OperationSubstract());
	        System.out.println("10 - 5 = " + context.executeStrategy(10, 5));
	
	        context = new Context(new OperationMultiply());
	        System.out.println("10 * 5 = " + context.executeStrategy(10, 5));
	    }
	
	}
	```

#### 3.3.10 ģ��ģʽ��`Template Pattern`��
- **`SUMMARY:`һ�������๫��������ִ�����ķ����ķ�ʽ/ģ�壬����������԰���Ҫ��д����ʵ�֣������ý��Գ������ж���ķ�ʽ���С�**
- ��ģ��ģʽ��`Template Pattern`���У�һ�������๫��������ִ�����ķ����ķ�ʽ/ģ�壬����������԰���Ҫ��д����ʵ�֣������ý��Գ������ж���ķ�ʽ���С�
- ��`Servlet`��`service()`������
	- `Tomcat`����ʵ�ʵ��õ������`service()`����`service()`������ʵ�־��Ǹ���`http`��������ͣ�`get`��`post`�ȣ���������ί�ɸ�`doGet`��`doPost`�ȷ���������Щ����ķ��������մ��������������
- *`EG.`ʵ�����룺*

	``` java
	public abstract class Game {
	
	   abstract void initialize();
	   abstract void startPlay();
	   abstract void endPlay();
	
	   // ģ�巽��
	   public final void play(){
	
	      // ��ʼ����Ϸ
	      initialize();
	      // ��ʼ��Ϸ
	      startPlay();
	      // ������Ϸ
	      endPlay();
	   }
	   
	}
	```
#### 3.3.11 ������ģʽ��`Visitor Pattern`�������á�

### 3.4 Java EE��ģʽ

<br>
## �ġ�����ģʽ��357ģʽ��
- **`SUMMARY:`����`shan`����ԭ������ģ��ʣ����죨�飩�Ŵ�����������Ħ��ģ�� ���������в�������**
- ����������ԭ����ᣬ�������Ŵ������У��������й۲�ģ��

### 4.1 ������
#### 4.1.1 ����ģʽ
#### 4.1.2 ����ģʽ
#### 4.1.3 ԭ��ģʽ

### 4.2 �ṹ��
#### 4.2.1 ������ģʽ
#### 4.2.2 �Ž�ģʽ
#### 4.2.3 ���ģʽ
#### 4.2.4 ����ģʽ
#### 4.2.5 ����ģʽ

### 4.3 ��Ϊ��
#### 4.3.1 ������ģʽ
#### 4.3.2 ����ģʽ
#### 4.3.3 ������ģʽ
#### 4.3.4 �н���ģʽ
#### 4.3.5 �۲���ģʽ
#### 4.3.6 ����ģʽ
#### 4.3.7 ������ģʽ

<br>
## �塢ʵ�ʹ�����ʹ�õ�ģʽ
- ����ģʽ
- ����ģʽ
- ����ģʽ
- ����ģʽ
- ������ģʽ

[1]: http://www.runoob.com/design-pattern/design-pattern-tutorial.html
[2]: http://p1.bqimg.com/567571/47d43f8d17d24672.jpg
[3]: http://p1.bpimg.com/567571/36eeeaa0ad53fb2b.jpg
[4]: http://i1.piimg.com/567571/494aac60a80bac8f.jpg
[5]: http://p1.bpimg.com/567571/fe2078f7a36dbe96.jpg
[6]: http://p1.bqimg.com/567571/d0cf0b6ab67ee7a2.jpg
[7]: http://p1.bqimg.com/567571/b92697ece0cb53e3.jpg
[8]: http://i1.piimg.com/567571/7c37dd50324683d4.jpg
[9]: http://i1.piimg.com/567571/5f80ac650e8bb432.jpg
[10]: http://p1.bpimg.com/567571/672e6b0fd3ed939d.jpg
[11]: http://p1.bqimg.com/567571/3aa5cfca788c79c5.jpg
[12]: http://p1.bpimg.com/567571/1a0ed882691d39e5.jpg
[13]: http://p1.bpimg.com/567571/e5bdc6f2befa416d.jpg
[14]: http://i1.piimg.com/567571/ee2dfc87aed49b0b.jpg
[15]: http://p1.bpimg.com/567571/36135f4fe3c10399.jpg