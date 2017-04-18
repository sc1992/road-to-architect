# Linux [^ linux reference] Study Notes [^ history version]

@(Notes)[Linux, Notes]

> VICTORY LOVES PREPARATION.

[^ linux reference]: [Runoob][7]

[^ history version]: 
> �汾��Ϣ��
> 2017��04��18�� ����03:31:53
> 2017��03��03�� ����11:06:02

[TOC]

***
## ����˼ά��ͼ

<br>
## һ�����

<br>
## ����SSH���ܵ�¼Linux [^ ssh linux reference]
[^ ssh linux reference]: [�ٶȾ���][1]

- **`SUMMARY��`����`authorized_keys`��**
- ��`~`Ŀ¼��`ssh-keygen -t rsa`����`.ssh`Ŀ¼��
-  ����`/etc/ssh/sshd_config`��
-  �����Լ���`ssh` `key`��`.ssh`Ŀ¼�µ�`authorized_keys`��
-  ����`sshd`����`systemctl` `restart` `sshd.service`��
- ��`root`�û�����ʱ��ɹ����ˣ�ԭ��δ�������

<br>
## ���� /usr��/usr/local/ ��/opt�Լ�����Ŀ¼ [^ linux directory reference]
[^ linux directory reference]: [Linux����][2]��[CSDN][3]

- **`SUMMARY��`���`Windows`Ŀ¼��**
- `/usr`��ϵͳ����Ŀ¼���������Ϊ`C:/Windows/`��
- `/usr/lib`���Ϊ`C:/Windows/System32`��
- `/usr/local`���û����ĳ���Ŀ¼���������Ϊ`C:/Progrem Files/`���û��Լ���������Ĭ�ϻᰲװ�����Ŀ¼�£�
- `/opt`���û����ĳ���Ŀ¼���������Ϊ`D:/Software`��`opt`�п�ѡ����˼������������ڷ��õ������������������Ϸ�������㲻��Ҫʱ��ֱ��`rm -rf`�����ɡ���Ӳ����������ʱ��Ҳ�ɽ�`/opt`�������ص�����������ʹ�ã�
- `/usr/src`��ϵͳ����Դ��Ŀ¼��
- `/usr/local/src`���û�����Դ��Ŀ¼��

<br>
## �ġ� ��������
- `/etc/profile`�����ļ�
- `export JAVA_HOME=/opt/jdk1.8.0_45`

<br>
## �塢���� [^ linux orders refernece]
[^ linux orders refernece]: [Runoob][8]

### 5.1 nohup [^ nohup reference]
[^ nohup reference]: [����԰][5]

- ��Ӧ��`Unix/Linux`ʱ������һ������ĳ�������ں�̨���У��������ǽ�������`&`�ڳ����β���ó����Զ����С�
- *`EG.`ʵ�����*

	``` bash
	nohup java -jar hello.jar &
	```


### 5.2 ps [^ ps reference]
[^ ps reference]: [����΢��][6]��[Runoob][9]

<br>
## ��������
### 6.1 �鿴����ռ�����ĸ��˿� [^ linux show process port reference]
[^ linux show process port reference]: [�ű�֮��][4]

- *`EG.`�������£�*

	``` bash
	$ ps -ef | grep Name
	$ netstat -nap | grep pid  
	```

[1]: http://jingyan.baidu.com/article/2fb0ba4043124a00f2ec5f0f.html
[2]: http://www.linuxidc.com/Linux/2013-01/77368.htm
[3]: http://blog.csdn.net/aqxin/article/details/48324377
[4]: http://www.jb51.net/LINUXjishu/331682.html
[5]: http://www.cnblogs.com/allenblogs/archive/2011/05/19/2051136.html
[6]: http://blog.sina.com.cn/s/blog_4af3b94f0101lhpu.html
[7]: http://www.runoob.com/linux/linux-tutorial.html
[8]: http://www.runoob.com/linux/linux-command-manual.html
[9]: http://www.runoob.com/linux/linux-comm-ps.html