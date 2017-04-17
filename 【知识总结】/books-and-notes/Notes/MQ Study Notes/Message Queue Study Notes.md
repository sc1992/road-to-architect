# Message Queue Study Notes [^ history version]

@(Notes)[MQ, Notes]

> VICTORY LOVES PREPARATION.

[^ history version]: 
> �汾��Ϣ��
> 2017��04��17�� ����03:42:08


[TOC]

***

## ����˼ά��ͼ

<br>
## һ����Ϣ�м���ڷֲ�ʽϵͳ�е����ý���
- **`SUMMARY����Ϣ�м�����ڷֲ�ʽϵͳ�������Ϣ�ķ��ͺͽ��յĻ��������`**
- `MOM`��`Message-Oriented Middleware`����Ϣ�м����
- ��Ϣ�м�����ڷֲ�ʽϵͳ�������Ϣ�ķ��ͺͽ��յĻ��������
- **��Ϣ**������̨������䴫�͵�**���ݵ�λ**��
	- ��Ϣ���Էǳ��򵥣�����ֻ����**�ı��ַ���**��
	- Ҳ���Ը����ӣ����ܰ���Ƕ��**����**��
- **ҵ����ֱ�ӵ��÷�ҵ����񣨼�ҵ����Ϸ�ҵ���ܣ���ȱ�㣺**
	- **`SUMMARY�����ͬ�����õĻ���Ӱ�쵽��ǰҵ���ִ�й��̣���������ʱЧ�ϻ���׼ȷ���ϡ�`**
	- ֱ�ӵ��ö�����񣬲��������˶Է��������ԣ��п�����ʱЧ����̫�
		- ������÷����е�һ��ʧ�ܣ����ܳ��ֺܶ��������ʹ����Ϣ�м����ֱ�ӵ�����Ϣ�м��������Ϣ�м����ͬʱ������һ��һ���أ���ʡʱ�䣩Ͷ�ݵ���ط���
	- **���Ͷ��ʧ�ܣ���Ϣ�м���������·���Ͷ�ݣ���ʱ�ط���ʧ���ط����ƣ�**��
- ��Ϣ�м�������������У���
- **`JMS`��`Java Messaging Service`��`Java`��Ϣ������`Java`ƽ̨���й�������Ϣ�м����`MOM`���ļ����淶**��
- ��������Ϣϵͳ�е�`Java`Ӧ�ó��������Ϣ����������ͨ���ṩ��׼�Ĳ��������͡�������Ϣ�Ľӿڼ���ҵӦ�õĿ�����
- Ҳ����˵�����忴һϵ�й淶��Ȼ���Ұ������ֹ淶�������Լ���Ϣ���񣬵�Ȼ�������кö࿪Դ���������ʹ���ˣ����õ��У�
	- `Apache ActiveMQ`��
	- `RabbitMQ`��
	- `Redis`��
	- `Jafka/Kafka`�ȡ�
- `Java`��Ϣ����Ӧ�ó���ṹ֧������ͨ��ģʽ��**��Ե�����ģ�͡�������/������ģ�ͣ�**
	- **��Ե�����ģ��**��˼��һ����������һ���ض���**���У�`QUEUE`��**������Ϣ��һ�������ߴӸö����ж�ȡ��Ϣ��
	- **`SUMMARY��`��Ե�����ģ����һ����Ϣ��������һ���ض��Ķ��У�`QUEUE`��������Ϣ��һ����Ϣ�����ߴӸö����ж�ȡ��Ϣ��**
	- ����ֻ��һ�������߽������Ϣ��
	- �����߲���Ҫ�ڽ��������Ѹ���Ϣ�ڼ䴦������״̬��������Ҳͬ������Ҫ����Ϣ����ʱ��������״̬��<br>![][59]
	- **������/������ģ��** [^ Publish/Subscribe Pattern Reference] ������һ���ض���**��Ϣ���⣨`TOPIC`��**������Ϣ��`0`��`n`�������߿��ܶԽ��������ض���Ϣ�������Ϣ����Ȥ��
[^ Publish/Subscribe Pattern Reference]: [CSDN][61]��[CSDN][62]

	- **`SUMMARY��`������/������ģ������Ϣ��������һ���ض�����Ϣ���⣨`TOPIC`��������Ϣ����Ϣ�����߻�ȡ��Ϣ��**
	- ������ģ���£������ߺͶ����߱˴˲�֪���Է���**��������߿��Ի����Ϣ���ڷ����ߺͶ�����֮�����ʱ��������**��
	- ��������Ҫ����һ�����ģ�`subscription`�����Ա�ͻ��ܹ����ģ�
	- **�����߱��뱣�ֳ����Ļ״̬�Խ�����Ϣ�����Ƕ����߽����˳־õĶ��ģ�`subscriptionDurable`������ο� [framework-assembly-basis][63] ��Ŀ��**��<br>![][60]

	> *ע�⣺*
	> - �ڼ������ѧ�У���Ϣ���к����������ڽ��̼�ͨ�Ż�ͬһ�����ڵ��̼߳�ͨ�ŵ�����������������ʹ��һ��������������Ϣ ���� ���ݿ��ƻ������ݡ�
	> - `Message Broker` - The message-oriented middleware server that hosts messaging destinations (i.e., queues and topics) for the purposes of asynchronous communication. Sometimes known as a queue manager 
	> - `Message Queue` - A messaging destination that uses a queue data structure to hold messages and is hosted by the message broker. The alternative to a queue is a topic which provides publish/subscribe semantics. 

- ![][48]

<p>

- ![][49]

<p>

- ![][50]

<p>

- ![][51]

<p>

- ![][52]

<p>

- ![][53]

## ����activemq [^ activemq reference] �İ�װ��ʹ��
[^ activemq reference]: [����԰][54]��[Coding][55]��[CSDN][58]

- ����/����ģʽ�����ܹ��ṩ**һ�Զ�**����Ϣר�ݷ�ʽ֮�⣬���ṩ����Ϣ�־û������ԣ����������������ߺ��������ʱ����Ϣ�������ⲿ�����ԣ��Լ�������/���ġ���Ӧ�ó����������Ժ������������������

## �ġ�ע������

[48]: http://p1.bpimg.com/567571/22ff242455de0ebd.png
[49]: http://p1.bqimg.com/567571/987c5279e6263e88.png
[50]: http://p1.bpimg.com/567571/e2c4d74ebe336fe4.png
[51]: http://p1.bqimg.com/567571/d8efc17ebe210f67.png
[52]: http://p1.bqimg.com/567571/642ded8d6055fb30.png
[53]: http://i1.piimg.com/567571/7c8e46c87d68c02f.png
[54]: http://www.cnblogs.com/mafly/p/activemq_think.html
[55]: https://coding.net/u/Recognizer/p/BaiduCloud_Career/git/tree/develop/%E3%80%90%E8%BD%AF%E4%BB%B6%E5%B7%A5%E7%A8%8B%E5%B8%88%E3%80%91/%E3%80%90%E7%9F%A5%E8%AF%86%E6%80%BB%E7%BB%93%E3%80%91/books-and-notes/Notes/Dubbo%20Study%20Notes/docx/activemq%203%20%E7%9A%84%E5%AE%89%E8%A3%85%E4%B8%8E%E4%BD%BF%E7%94%A8
[56]: https://redis.io/
[57]: http://baike.baidu.com/link?url=A7OuY-SUIOm3CbKzDyluJSndk6wu53JTz8oSYuZu-rh7SKapWoscjeuey34iiYmVeqkiaL6cd63GRcPKl_Ekq_
[58]: http://blog.csdn.net/jspamd/article/details/51908456
[59]: http://i1.piimg.com/567571/d18b52398388a00a.jpg
[60]: http://p1.bqimg.com/567571/9e15915daf9f212d.jpg
[61]: http://blog.csdn.net/zhu_tianwei/article/details/46303943
[62]: http://blog.csdn.net/wangdongsong1229/article/details/8219536
[63]: https://coding.net/u/Recognizer/p/framework-assembly-basis/git/tree/develop/