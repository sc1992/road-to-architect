# �㷨 [^ �㷨 reference] Study Notes [^ history version][^ review date]

@(Notes)[�㷨, Notes]

> VICTORY LOVES PREPARATION.

[^ �㷨 reference]: [�ٶȰٿ�][1]��[LUPA][2]��[36�][3]

[^ history version]: 
> �汾��Ϣ��
> 2017��04��24�� ����01:24:02
> 2017��04��03�� ����06:49:58
> 2017��02��22�� ����02:13:41

[^ review date]: 
> ��ϰʱ�䣺
> 2017��04��24�� ����01:24:02
> 2017��04��21�� ����04:28:02

[TOC]

***

## ����˼ά��ͼ
- **`SUMMARY��`�㷨����һ�������Ľ��˼·���ǲ���������������**
- **�㷨����һ�������Ľ��˼·���ǲ���������������**

<br>
## һ������
- **`SUMMARY��`һϵ�н�����������ָ�**
- �㷨ָ���ⷽ����׼ȷ��������������
- ��һϵ�н�����������ָ�
- �����ݽṹ���㷨������Ա���ڹ���
- ��������ϵͳ�ķ���������������**���Ի���**��

<br>
## �����㷨����

<br>
## ������ջ�Ͷ���

<br>
## �ġ����Ͷ�����
- **`SUMMARY��`һϵ�н�����������ָ�**
### 4.1 �� [^ Tree Reference]
- **`SUMMARY��`����һ�����ݽṹ����`n��n>=1��`�����޽ڵ����һ�����в�ι�ϵ�ļ��ϡ�**
- ��һ�����ݽṹ������`n��n>=1��`�����޽ڵ����һ�����в�ι�ϵ�ļ��ϣ�
- ������������������Ϊ����������һ�õ��ҵ�����Ҳ����˵���Ǹ����ϣ���Ҷ���µģ�
- **�ص�**
 - ÿ���ڵ���**��������ӽڵ�**��
 - ÿһ���Ǹ��ڵ㣨*û�и��ڵ�Ľڵ��Ϊ���ڵ�*��**����ֻ��һ�����ڵ�**��
 - ���˸��ڵ��⣬ÿ���ӽڵ���Է�Ϊ���**���ཻ������**��*�ݹ鶨��*����

[^ Tree Reference]: [�ٶȰٿ�][16]

### 4.2 ������
#### 4.2.1 ����
- **`SUMMARY��`��������ÿ���ڵ�������������������ṹ��**
- ��������ÿ���ڵ�������������������ṹ��
- ͨ������������������������`left subtree`���͡�����������`right subtree`a����
- ��������ʵ��**���������**��**�����**��
- ��һ����ͨ���޻�ͼ������ÿһ������ĶȲ�����`3`��

#### 4.2.2 ��������
##### 4.2.2.1 ����
###### 4.2.2.1.1 ��������
- ����Ҷ�����ÿһ����㶼��������Ҷ��
- Ҷ�ӽ�㶼������ײ�Ķ�������
- һ�����Ϊ`k`������`2^k-1`���ڵ�Ķ�������

###### 4.2.2.1.2 ��ȫ������
- ����������ĸ߶�Ϊ`h`������`h`���⣬�������� `(1��h-1) `�Ľ�������ﵽ��������
- ��`h`����Ҷ�ӽ�㣬����Ҷ�ӽ�㶼�Ǵ����������Ų���
- ���Ϊ`k`����`n`���ڵ�Ķ����������ҽ�����ÿһ���ڵ㶼�����Ϊ`k`�����������У����Ϊ`1`��`n`�Ľڵ��Ӧ��

###### 4.2.2.1.3 ƽ�������
- �ֱ���Ϊ`AVL`����������`AVL`�㷨����
- ��������**����**��
 - ����һ�ÿ����������������������ĸ߶Ȳ�ľ���ֵ������`1`��
 - ����������������һ��ƽ���������

	> *ע�⣺*
	> - ƽ���������һ���Ƕ�����������

###### 4.2.2.1.4 ������������������������߶�����������
- ����������������һ�ÿ����������Ǿ�������**����**�Ķ�������
 - �����������գ��������������н���ֵ��**С�ڻ����**���ĸ�����ֵ��
 - �����������գ��������������н���ֵ��**���ڻ����**���ĸ�����ֵ��
 - ��������Ҳ�ֱ�Ϊ������������

##### 4.2.2.2 �������
##### 4.2.2.3 ����
##### 4.2.2.4 �洢�ṹ
##### 4.2.2.5 ����

#### 4.2.3 ����˳��
*`img.`����������ʵ����*<br>![][17]

##### 4.2.3.1 ���������`DLR`��
- ���ȷ���**��**����**�������������**�����**�������������**��
- `A B D G H E C K F I J`��

##### 4.2.3.2 ���������`LDR`��
- ����**�������������**���ٷ���**��**�����**�������������**��
- `G D H B E A K C I J F`��

##### 4.2.3.3 ���������`LRD`��
- ����**�������������**����**�������������**��������**��**��
- `G H D E B K J I F C A`��

##### 4.2.3.4 �������
- �����ղ�η��ʣ�ͨ���ö������������ʸ���������Ů���ٷ�����Ů����Ů��Խ����Ĳ��Խ�ͣ���������Ů�ļ�����ͬ����
- `A B C D E K F G H I J`��

#### 4.2.4 ʵ����ʾ
##### 4.2.4.1 ���������� [^ Binary Sort Tree Reference]
[^ Binary Sort Tree Reference]: [�ٶȰٿ�][18]

###### 4.2.4.1.1 ��������
- **`SUMMARY:`��������ֵС�ڻ���ڵ�ǰ�ڵ��ֵ�����������ڵ��ڵ�ǰ�ڵ��ֵ�Ķ�������**
- ����������������Ҳ��һ���ݹ�������� ��������������Ĺ�����ȻҲ�õݹ�ġ�
- ������������`3`��������
 - ��ǰ`node`��������������ֵ��С�ڻ���ڵ�ǰ`node`��ֵ��
 - ��ǰ`node`��������������ֵ�����ڻ���ڵ�ǰ`node`��ֵ��
 - ���ӽڵ�Ҳ�����������㡣

###### 4.2.4.1.2 ����ʵ��
- `BinarySortNode.java`

	``` java
	package com.cmc.algorithm.sort.binarytree.binarysorttree;
	
	import com.cmc.common.algorithm.sort.BinaryNode;
	
	/**
	 * <p>���������������Ҳ��һ���ݹ�������� ��������������Ĺ�����ȻҲ�õݹ�ģ�
	 * <ul>�����������3��������
	 * <li>1����ǰnode���������ӵ�ֵ��С�ڵ�ǰnode��ֵ��
	 * <li>2����ǰnode�������Һ��ӵ�ֵ�����ڵ�ǰnode��ֵ��
	 * <li>3�����ӽڵ�Ҳ������������
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��27�� ����6:20:19
	 * @version 2017��2��28�� ����3:16:05
	 */
	public class BinarySortNode extends BinaryNode {
	
	    public BinarySortNode(int value) {
	        super(value);
	    }
	
	    public BinarySortNode(int value, BinaryNode lChild, BinaryNode rChild) {
	        super(value, lChild, rChild);
	    }
	
	    @Override
	    public void iterate(BinaryNode node) {
	        if (null != node.getLChild()) {
	            this.iterate(node.getLChild());
	        }
	        System.out.print(node.getValue() + " ");
	        if (null != node.getRChild()) {
	            this.iterate(node.getRChild());
	        }
	    }
	
	    public void iterateDLR(BinaryNode node) {
	        System.out.print(node.getValue() + " ");
	        if (null != node.getLChild()) {
	            this.iterateDLR(node.getLChild());
	        }
	        if (null != node.getRChild()) {
	            this.iterateDLR(node.getRChild());
	        }
	    }
	
	    public void iterateLRD(BinaryNode node) {
	        if (null != node.getLChild()) {
	            this.iterateLRD(node.getLChild());
	        }
	        if (null != node.getRChild()) {
	            this.iterateLRD(node.getRChild());
	        }
	        System.out.print(node.getValue() + " ");
	    }
	
	    /** ��Ȼ˵�������������������������һ���Ǵ�С���󣬵��Ǹ÷������Ѿ��Ӹ�Ԫ�صݹ���бȽ��ˣ�����Ķ��������������������������ʱ��һ���Ǵ�С���� */
	    @Override
	    public void addChild(int num) {
	        if (num < this.getValue()) {
	            if (null != this.getLChild()) {
	                this.getLChild().addChild(num);
	            } else {
	                this.setLChild(new BinarySortNode(num));
	            }
	        } else {
	            if (null != this.getRChild()) {
	                this.getRChild().addChild(num);
	            } else {
	                this.setRChild(new BinarySortNode(num));
	            }
	        }
	    }
	
	    public static void main(String[] args) {
	
	        /* �������������� */
	        BinaryNode binarySortNode = new BinarySortNode(BinaryNode.NUMS[0]);
	        for (int i = 1; i < BinaryNode.NUMS.length; i++) {
	            binarySortNode.addChild(BinaryNode.NUMS[i]);
	        }
	
	        // �����򣩱�������������
	        binarySortNode.iterate(binarySortNode);
	        System.out.println("\n");
	        // �����������������
	        binarySortNode.iterateDLR(binarySortNode);
	        System.out.println("\n");
	        // �����������������
	        binarySortNode.iterateLRD(binarySortNode);
	    }
	
	}
	```

##### 4.2.4.2   �����

<br>
## �塢ɢ��

<br>
## �������ȶ��У��ѣ�

<br>
## �ߡ������㷨 [^ Sort Algorithm Reference]
[^ Sort Algorithm Reference]: [����԰][13]��[CSDN][5]

- *`img.`�����㷨����ʾ��ͼ��*<br><br>![][14]
- **���Ӷ�**��
	- ʱ�临�Ӷ�
		- **`SUMMARY��`���������ظ�ִ�д����ģ�ʱ�䣩ͬ������������**
		- һ������£��㷨�л��������ظ�ִ�еĴ����������ģ`n`��ĳ����������`T(n)`��ʾ������ĳ����������`f(n)`��ʹ�õ�`n`�����������ʱ��`T(n)/f(n)`�ļ���ֵΪ��������ĳ��������`f(n)`��`T(n)`��ͬ����������������`T(n)=O(f(n))`����`O(f(n))`Ϊ�㷨�Ľ���ʱ�临�Ӷȣ����ʱ�临�Ӷȡ�
	- �ռ临�Ӷ�
		- **`SUMMARY��`�㷨�����й�������ʱռ�ô洢�ռ��С�����ȡ�**
		- �㷨�����й�����**��ʱ**ռ�ô洢�ռ��С�����ȡ�*�㷨������ռ�õ��ڴ���Ժ���*��
	- *`img.`�����㷨���Ӷȣ�*[^ Various Algorithm Complexity] <br>![][19]

- **�ȶ���**��
	- **`SUMMARY��`��ͬ�ؼ��־�������֮��λ�ò��䡣**
	-  �ٶ��ڴ�����ļ�¼�����У����ڶ������**��ͬ�Ĺؼ���**�ļ�¼��������������Щ��¼����Դ��򱣳ֲ��䣬����ԭ�����У�`ri`=`rj`����`ri`��`rj`֮ǰ�����������������У�`ri`����`rj`֮ǰ��������������㷨���ȶ��ģ������Ϊ���ȶ��ġ�
	-  *`eg.`ʵ����*
		-  Ҫ�����������һ��ԭ�����ռ۸�ߵ�����Ķ��������Ҫ���������ߵ�����ʹ���ȶ����㷨������ʹ��**��ͬ�����Ķ������ɱ����ż۸�ߵ͵�����**չ�֣�ֻ��������ͬ�ĲŻ��������򡣣�*��Ȼ�����������Ҫ���ֳ�ʼ���������壬��ôʹ���ȶ����㷨���ɽ���������*����

[^ Various Algorithm Complexity]: [����԰][20]

- ������**�ڲ�����**��**�ⲿ����**��
	- **�ڲ����������ݼ�¼���ڴ��н�������**
	- ���ⲿ����������������ݺܴ�һ�β�������ȫ���������¼����**�����������Ҫ������档**
-  ��`n`�ϴ���Ӧ����ʱ�临�Ӷ�Ϊ`O(nlog2n)`�����򷽷���
	-  **��������**
		-  ��������Ĺؼ���������ֲ�ʱ����ƽ��ʱ����̣���Ŀǰ���ڱȽϵ��ڲ������б���Ϊ����õķ�����
	-  ������
	-  �鲢������

	> *ע��*
	> - ��ѡ������ֱ�Ӳ��������ð��������Զ�����**������**������ѡ�����򡢼򵥲�������ͼ򵥽�������

### 7.1 ѡ������

#### 7.1.1 ��ѡ������`Simple Selection Sort`��
##### 7.1.1.1 ����˼��
- **`SUMMARY:`���ţ�ȷ������С�Ļ�����������**
- �������У�ѡ����С��������󣩵�һ�������`1`��λ�õ���������Ȼ����ʣ�µ�������������С��������󣩵����`2`��λ�õ����������������ƣ�ֱ����`n-1`��Ԫ�غ͵�`n`��Ԫ�أ����һ�������Ƚ�Ϊֹ��
- *`img.`ʾ��ͼ��*<br>![][6]
##### 7.1.1.2 ����ʵ��
- `SimpleSelectionSort.java`
	``` java
	package com.cmc.algorithm.sort.simpleselectionsort;
	
	import com.cmc.algorithm.sort.common.Sort;
	
	/**
	 * ѡ�����򡪼�ѡ������Simple Selection Sort��
	 * 
	 * <p>��Ҫ�����һ�����У�ѡ����С��������󣩵�һ�������1��λ�õ���������
	 *    Ȼ����ʣ�µ�������������С��������󣩵����2��λ�õ����������������ƣ�
	 *    ֱ����n-1��Ԫ�أ������ڶ��������͵�n��Ԫ�أ����һ�������Ƚ�Ϊֹ��
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��22�� ����8:15:37
	 */
	public class SimpleSelectionSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort simpleSelectionSort = new SimpleSelectionSort();
	        Sort.out(simpleSelectionSort.sort(Sort.NUMS));
	    }
	
	    public int[] sort(int[] nums) {
	        for (int i = 0; i < nums.length - 1; i++) {
	            // �����Сֵ���±�
	            int minIndex = i;
	            for (int j = i + 1; j < nums.length; j++) {
	                if (nums[minIndex] > nums[j]) {
	                    swap(nums, minIndex, j);
	                }
	            }
	        }
	        return nums;
	    }
	
	}
	```

##### 7.1.1.3 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(N2)`
- �ռ临�Ӷ�
	- `O(1)`

##### 7.1.1.4 �ȶ���
- ���ȶ�

#### 7.1.2 ������`Heap Sort`��
##### 7.1.2.1 ����˼��
- **`SUMMARY:`������ʼ�ѣ�����`R[0]`��`R[n]`���ٽ�`R[0..n-1]`����Ϊ�ѣ�����`R[0]`��`R[n-1]`����˷���ֱ������`R[0]`��`R(1)`Ϊֹ��**
- ���ȣ�������`R[0..n]`����Ϊ�ѣ�������̳�Ϊ**������ʼ��**��������`R[0]`��`R[n]`��
- Ȼ�󣬽�`R[0..n-1]`����Ϊ�ѣ�����`R[0]`��`R[n-1]`��
- ��˷�����ֱ��������`R[0]`��`R(1)`Ϊֹ��
- ��������ʵҲ��һ��ѡ��������һ������ѡ������

##### 7.1.2.2 ����ʵ��
- 

##### 7.1.2.3 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(N*log2N)`
- �ռ临�Ӷ�
	- `O(1)`

##### 7.1.2.4 �ȶ���
- ���ȶ�

> *ע�⣺*
> - **����һ��˳��洢����ȫ������**��
>  - ����ÿ�����Ĺؼ��ֶ��������亢�ӽ��Ĺؼ��֣������Ķѳ�Ϊ**С����**��
>  - ����ÿ�����Ĺؼ��ֶ���С���亢�ӽ��Ĺؼ��֣������Ķѳ�Ϊ**�����**��
>  - �漰����*����*����������ʱ�临�Ӷ�һ�㶼������`log2N`�������㷨Ϊ`log2N`�������㷨Ϊ`N*log2N`��

### 7.2 ��������

#### 7.2.1 ֱ�Ӳ�������`Straight Insertion Sort`��

##### 7.2.1.1 ����˼��
- **`SUMMARY:`�Ƚ����еĵ�`1`����¼������һ������������У�Ȼ��ӵ�`2`����¼������в��룬ֱ��������������Ϊֹ��**
- ��һ����¼���뵽������õ�������У��Ӷ��õ�һ���µ��������¼����`1`�����������**�Ƚ����еĵ�`1`����¼������һ������������У�Ȼ��ӵ�`2`����¼������в��룬ֱ��������������Ϊֹ**��
- *�����ڱ�����Ϊ��ʱ�洢���ж�����߽�֮��*��
- �������һ���Ͳ���Ԫ����ȵģ���ô����Ԫ�ذ�������Ԫ�ط������Ԫ�صĺ��档���ԣ�**���Ԫ�ص�ǰ��˳��û�иı䣬��ԭ�������г�ȥ��˳������ź�����˳�����Բ����������ȶ���**��
- *`img.`ʾ��ͼ��*<br>![][8]

##### 7.2.1.2 ����ʵ��
- `StraightInsertSort.java`
	``` java
	package com.cmc.algorithm.sort.straightinsertionsort;
	
	import com.cmc.algorithm.sort.common.Sort;
	
	public class StraightInsertSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort straightInsertSort = new StraightInsertSort();
	        Sort.out(straightInsertSort.sort(Sort.NUMS));
	    }
	
	    /**
	     * �㷨˼·��<br>
	     * ��һ����¼���뵽������õ�������У��Ӷ��õ�һ���£���¼����1�������
	     * �����Ƚ����еĵ�1����¼������һ������������У�Ȼ��ӵ�2����¼������в��룬ֱ��������������Ϊֹ��
	     */
	    @Override
	    public int[] sort(int[] nums) {
	        for (int i = 1; i < nums.length; i++) {
	
	            if (nums[i] < nums[i - 1]) {
	                int tmpForInsert = nums[i];
	                nums[i] = nums[i - 1];
	
	                /* ͨ��ѭ�����������һλ�ҵ�Ҫ�����λ�� */
	                int j;
	                for (j = i - 2; j >= 0 && tmpForInsert < nums[j]; j--) {
	                    nums[j + 1] = nums[j];
	                }
	
	                // ����
	                nums[j + 1] = tmpForInsert;
	            }
	        }
	
	        return nums;
	    }
	
	}
	```

##### 7.2.1.3 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(N2)`
- �ռ临�Ӷ�
	- `O(1)`

##### 7.2.1.4 �ȶ���
- �ȶ�

#### 7.2.2 ϣ������`Shell Sort`��
- **`SUMMARY:`�����𽥵ݼ���1��ֱ�Ӳ�������**
- �ֽ���С��������
- ��`1959`����`D.L.Shell`������ģ����ֱ�Ӳ��������нϴ�ĸĽ���

##### 7.2.2.1 ����˼��
- **`SUMMARY:`�����зָ��Ϊ����һ�����������������н���ֱ�Ӳ�������Ȼ��������μ�С����ֱ������Ϊ`1`��ֱ�Ӳ�������**
- �Ƚ�����������ļ�¼���зָ��Ϊ���������зֱ����ֱ�Ӳ������򣬴����������еļ�¼����������ʱ���ٶ�ȫ���¼��������ֱ�Ӳ�������
- ϣ������ʱЧ�������ѣ��ؼ���ıȽϴ������¼�ƶ�����������������������`d`��ѡȡ���ض�����¿���׼ȷ������ؼ���ıȽϴ����ͼ�¼���ƶ�������Ŀǰ��û���˸���ѡȡ��õ������������еķ����������������п����и���ȡ������ȡ�����ģ�Ҳ��ȡ�����ģ�����Ҫע�⣺���������г�`1`��û�й����ӣ������һ���������ӱ���Ϊ`1`��
- ϣ�����򷽷���һ�����ȶ������򷽷���
- *`img.`ʾ��ͼ��*<br>![][9]

##### 7.2.2.2 ��������
1. ѡ��һ����������`t1`��`t2`������`tk`������`ti>tj��tk=1`��
2. ���������и���`k`�������н���`k`������
3. ÿ�����򣬸��ݶ�Ӧ������`ti`�����������зָ�����ɳ���Ϊ`m`�������У��ֱ�Ը��ӱ����ֱ�Ӳ������򡣽���������Ϊ`1`ʱ������������Ϊһ�������������ȼ�Ϊ�������еĳ��ȡ�

##### 7.2.2.3 ����ʵ��
- ���Ǽ򵥴����������У���������`d = {n/2 ,n/4, n/8 .....1}`��`n`ΪҪ�������ĸ�����
- �Ƚ�Ҫ�����һ���¼��ĳ������d��`n/2`, `n`ΪҪ�������ĸ������ֳ������������У�ÿ���м�¼���±����`d`����ÿ����ȫ��Ԫ�ؽ���ֱ�Ӳ�������Ȼ������һ����С��������`d/2`���������з��飬��ÿ�����ٽ���ֱ�Ӳ������򡣼���������С����ֱ��Ϊ`1`�����ʹ��ֱ�Ӳ��������������

	``` java
	package com.cmc.algorithm.sort.insert.shellsort;
	
	import com.cmc.common.algorithm.sort.Sort;
	
	/**
	 * ��������-ϣ������
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��23�� ����4:42:29
	 */
	public class ShellSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort shellSort = new ShellSort();
	        Sort.out(shellSort.sort(Sort.NUMS));
	    }
	
	    /**
	     * �㷨˼·��<br>
	     * ����ֱ�Ӳ�������ֻ����������1����������������increase
	     */
	    @Override
	    public int[] sort(int[] nums) {
	        int increase = nums.length / 2;
	        int[] rst = {};
	        while (increase >= 1) {
	            rst = shellInsertSort(nums, increase);
	            increase = increase / 2;
	        }
	        return rst;
	    }
	
	    private int[] shellInsertSort(int[] nums, int increase) {
	        for (int i = increase; i < nums.length; i++) {
	            if (nums[i] < nums[i - increase]) {
	                int tmpForInsert = nums[i];
	                nums[i] = nums[i - increase];
	
	                /* ͨ��ѭ�����������һλ�ҵ�Ҫ�����λ�á� */
	                int j;
	                for (j = i - 2 * increase; j >= 0 && tmpForInsert < nums[j]; j = j - increase) {
	                    nums[j + increase] = nums[j];
	                }
	
	                // ����
	                nums[j + increase] = tmpForInsert;
	            }
	        }
	        return nums;
	    }
	
	}
	```

##### 7.2.2.4 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(N2)`
- �ռ临�Ӷ�
	- `O(1)`

##### 7.2.2.5 �ȶ���
- ���ȶ�

### 7.3 ��������

#### 7.3.1 ð������`Bubble Sort`��
##### 7.3.1.1 ����˼��
- **`SUMMARY:`ÿ�����ڵ��������ȽϺ������ǵ�������Ҫ���෴ʱ���ͽ����ǻ�����**
- ��Ҫ�����һ�����У��Ե�ǰ��δ�ź���ķ�Χ�ڵ�ȫ���������϶��¶����ڵ����������ν��бȽϺ͵�������**�ϴ�������³�����С������ð**������ÿ�������ڵ����ȽϺ������ǵ�����������Ҫ���෴ʱ���ͽ����ǻ�����
- *`img.`ʾ��ͼ��*<br>![][7]

##### 7.3.1.2 ����ʵ��
- `BubbleSort.java`
	``` java
	package com.cmc.algorithm.sort.bubblesort;
	
	import com.cmc.algorithm.sort.common.Sort;
	
	/**
	 * ��������ð������Bubble Sort��
	 * 
	 * <p>��Ҫ�����һ�����У��Ե�ǰ��δ�ź���ķ�Χ�ڵ�ȫ������
	 *    ���϶��¶����ڵ����������ν��бȽϺ͵������ýϴ�������³���
	 *    ��С������ð��
	 *    ����ÿ�������ڵ����ȽϺ������ǵ�����������Ҫ���෴ʱ���ͽ����ǻ�����
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��22�� ����7:17:16
	 */
	public class BubbleSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort bubbleSort = new BubbleSort();
	        Sort.out(bubbleSort.sort(NUMS));
	    }
	
	    @Override
	    public int[] sort(int[] nums) {
	        for (int i = 0; i < nums.length - 1; i++) {
	            // j < nums.length - i - 1��-1����Ϊ����Ҫ�õ�j+1��-i����Ϊ���Ѿ������������е�����棬���Ծ�û�б�Ҫ����������Ļ�����û������ģ�����������
	            for (int j = 0; j < nums.length - i - 1; j++) {
	                if (nums[j] > nums[j + 1]) {
	                    swap(nums, j, j + 1);
	                }
	            }
	            /* αð������
	            for (int j = i; j < nums.length - 1; j++) {
	                if (nums[j] < nums[j + 1]) {
	                    Sort.swap(nums, j, j + 1);
	                }
	                // ����λ��
	                Sort.swap(nums, i, j + 1);
	            }
	            */
	        }
	        return nums;
	    }
	
	}
	```

	> *ע�⣺*
	> - **ð�������㷨�Ľ�**��
	>  - ��ð�����򳣼��ĸĽ������Ǽ���һ��־�Ա���`exchange`�����ڱ�־ĳһ������������Ƿ������ݽ������������ĳһ������ʱ��û�н������ݽ�������˵�������Ѿ���Ҫ�����кã��������������򣬱��ⲻ��Ҫ�ıȽϹ��̣�
	>  - ����һ��־�Ա���`pos`�����ڼ�¼ÿ�����������һ�ν��н�����λ�á�����`pos`λ��֮��ļ�¼���ѽ�����λ�����ڽ�����һ������ʱֻҪɨ�赽`pos`λ�ü��ɣ�
	>  - ��ͳð��������ÿһ���������ֻ���ҵ�һ�����ֵ����Сֵ��������ÿ�������н�������ͷ�������ð�ݵķ���һ�ο��Եõ���������ֵ������ߺ���С�ߣ� , �Ӷ�ʹ������������������һ�롣

##### 7.3.1.3 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(N2)`
- �ռ临�Ӷ�
	- `O(1)`

##### 7.3.1.4 �ȶ���
- �ȶ�

#### 7.3.2 ��������`Quick Sort`�����������ա�
##### 7.3.2.1 ����˼��
- **`SUMMARY:`ͨ��һ�����򽫴�����ļ�¼�ָ�ɶ����������֡�����һ���ּ�¼��Ԫ��ֵ���Ȼ�׼Ԫ��ֵС����һ���ּ�¼��Ԫ��ֵ�Ȼ�׼ֵ�󣬴�ʱ��׼Ԫ�������ź�������ȷλ�ã�Ȼ����еݹ�����**
- ѡ��һ����׼Ԫ�أ�ͨ��ѡ���һ��Ԫ�ػ������һ��Ԫ�أ�
- ͨ��һ�����򽫴�����ļ�¼�ָ�ɶ����������֡�����**һ���ּ�¼��Ԫ��ֵ���Ȼ�׼Ԫ��ֵС����һ���ּ�¼��Ԫ��ֵ�Ȼ�׼ֵ��**��
- **��ʱ��׼Ԫ�������ź�������ȷλ��**��
- Ȼ��ֱ���������ּ�¼��ͬ���ķ���������������ֱ��������������
- *`img.`ʾ��ͼ��*<br>![][10]

##### 7.3.2.2 ����ʵ��
- `QuickSort.java`

	``` java
	package com.cmc.algorithm.sort.exchange.quicksort;
	
	import com.cmc.common.algorithm.sort.Sort;
	
	/**
	 * ��������-��������
	 * 
	 * @author Thomas Lee
	 * @version 2017��2��23�� ����6:56:07
	 */
	public class QuickSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort quickSort = new QuickSort();
	        quickSort.sort(Sort.NUMS);
	        Sort.out(Sort.NUMS);
	    }
	
	    @Override
	    public void sort(int[] nums) {
	        this.quickSort(nums, 0, nums.length - 1);
	    }
	
	    private void quickSort(int[] nums, int low, int high) {
	        // �����������жϵݹ���޷��˳����¶�ջ����쳣
	        if (low < high) {
	            int middle = this.getBaseNumIndex(nums, low, high);
	            this.quickSort(nums, 0, middle - 1);
	            this.quickSort(nums, middle + 1, high);
	        }
	    }
	
	    /** ��ȡ��׼Ԫ���������С��С����±� */
	    private int getBaseNumIndex(int[] nums, int low, int high) {
	        // ��׼Ԫ�أ������л�ճ�����һ��λ��
	        int baseNum = nums[low];
	        while (low < high) {
	
	            /* ��high��ʼ�ұȻ�׼С�ģ���low��λ�� */
	            while (low < high && nums[high] >= baseNum) {
	                high--;
	            }
	            nums[low] = nums[high];
	
	            /* ��low��ʼ�ұȻ�׼��,�ŵ�֮ǰhigh�ճ�����λ���� */
	            while (low < high && nums[low] <= baseNum) {
	                low++;
	            }
	            nums[high] = nums[low];
	
	        }
	        // ��ʱlow=high �ǻ�׼Ԫ�ص�λ�ã�Ҳ�ǿճ������Ǹ�λ��
	        nums[low] = baseNum;
	        return low;
	    }
	
	}
	```

##### 7.3.2.3 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(N*log2N) ~ O(N2)`
- �ռ临�Ӷ�
	- `O(log2n) ~ O(n) `

##### 7.3.2.4 �ȶ���
- ���ȶ�

### 7.4 ��������

#### 7.4.1 �鲢����`Merge Sort`��[^ Merge Sort Reference]
[^ Merge Sort Reference]: [����԰][11]

##### 7.4.1.1 ����˼��
- **`SUMMARY:`�鲢��`Merge`�������ǽ����������������ϣ������ϲ���һ���µ������Ȼ���ٰ����������кϲ�Ϊ�����������С�**
- �鲢��`Merge`�������ǽ����������������ϣ������ϲ���һ���µ���������Ѵ��������з�Ϊ���ɸ������У�ÿ��������������ġ�Ȼ���ٰ����������кϲ�Ϊ�����������С�
- *`img.`ʾ��ͼ��*<br>![][11]

##### 7.4.1.2 ����ʵ��
- `MergeSort.java`

	``` java
	package com.cmc.algorithm.sort.elses.mergesort;
	
	import com.cmc.common.algorithm.sort.Sort;
	
	public class MergeSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort mergeSort = new MergeSort();
	        mergeSort.sort(Sort.NUMS);
	        Sort.out(Sort.NUMS);
	    }
	
	    @Override
	    public void sort(int[] nums) {
	        this.sort(Sort.NUMS, 0, Sort.NUMS.length - 1);
	    }
	
	    /**
	     * �㷨˼·��<br>
	     * �����������������ϣ������ϲ���һ���µ������
	     * ���Ѵ��������з�Ϊ���ɸ������У�ÿ��������������ģ�
	     * Ȼ���ٰ����������кϲ�Ϊ�����������С�
	     */
	    private void sort(int[] nums, int low, int high) {
	        int mid = (low + high) / 2;
	        if (low < high) {
	            this.sort(nums, low, mid);
	            this.sort(nums, mid + 1, high);
	            // ���ҹ鲢
	            this.merge(nums, low, mid, high);
	        }
	    }
	
	    /**
	     * �ϲ�������������
	     * 
	     * @author Thomas Lee
	     * @param nums Ҫ���������
	     * @param low ��������±�
	     * @param mid mid = (low + high) / 2
	     * @param high �Ҷ������±�
	     * @version 2017��2��24�� ����2:38:43
	     */
	    private void merge(int[] nums, int low, int mid, int high) {
	        // ��źϲ����е���ʱ����
	        int[] tempArray = new int[high - low + 1];
	        // ��������±�
	        int i = low;
	        // �Ҷ������±�
	        int j = mid + 1;
	        // ��ʱ��������
	        int k = 0;
	
	        /* �ѽ�С�������Ƶ��������� */
	        while (i <= mid && j <= high) {
	            if (nums[i] < nums[j]) {
	                tempArray[k++] = nums[i++];
	            } else {
	                tempArray[k++] = nums[j++];
	            }
	        }
	
	        /* �����ʣ������������� */
	        while (i <= mid) {
	            tempArray[k++] = nums[i++];
	        }
	
	        /* ���ұ߱�ʣ������������� */
	        while (j <= high) {
	            tempArray[k++] = nums[j++];
	        }
	
	        this.copyTempArray2OriginArray(tempArray, nums, low);
	    }
	
	    private void copyTempArray2OriginArray(int[] tempArray, int[] nums, int low) {
	        for (int m = 0; m < tempArray.length; m++) {
	            nums[m + low] = tempArray[m];
	        }
	    }
	
	}
	```

##### 7.4.1.3 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(N*log2N)`
- �ռ临�Ӷ�
	- `O(n)`

##### 7.4.1.4 �ȶ���
- �ȶ�

#### 7.4.2 Ͱ���� / ��������`Radix Sort`��[^ Radix Sort Reference]
[^ Radix Sort Reference]: [����԰][15]

##### 7.4.2.1 ����˼��
- **`SUMMARY:`���αȽ������и�����λ�ϵ�ֵ��**
- ���������뱾ϵ��ǰ�潲����������򷽷�����ͬ��������Ҫ�ȽϹؼ��ֵĴ�С��
- ���Ǹ��ݹؼ����и�����λ�ϵ�ֵ��ͨ���������`N`��Ԫ�ؽ���������**����**��**�ռ�**��ʵ������ġ�

##### 7.4.2.2 ����ʵ��
- `RadixSort.java`
	``` java
	package com.cmc.algorithm.sort.elses.radixsort;
	
	import com.cmc.common.algorithm.sort.Sort;
	
	public class RadixSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort radixSort = new RadixSort();
	        radixSort.sort(Sort.NUMS);
	        Sort.out(Sort.NUMS);
	    }
	
	    @Override
	    public void sort(int[] nums) {
	        radixSort(nums, 0, nums.length - 1, 3);
	    }
	
	    private void radixSort(int[] nums, int begin, int end, int digit) {
	        // ����
	        final int radix = 10;
	        // ��Ÿ���Ͱ������ͳ�Ƹ���
	        int[] count = new int[radix];
	        int[] bucket = new int[end - begin + 1];
	
	        /* ���մӵ�λ����λ��˳��ִ��������� */
	        for (int d = 1; d <= digit; d++) {
	
	            /* �ÿո���Ͱ������ͳ�� */
	            for (int i = 0; i < radix; i++) {
	                count[i] = 0;
	            }
	
	            /* ͳ�Ƹ���Ͱ��Ҫװ������ݸ��� */
	            for (int i = begin; i <= end; i++) {
	                int j = this.getDigit(nums[i], d);
	                count[j]++;
	            }
	
	            /* count[i]��ʾ��i��Ͱ���ұ߽����� */
	            for (int i = 1; i < radix; i++) {
	                count[i] = count[i] + count[i - 1];
	            }
	
	            /* ����������װ��Ͱ�У�����Ҫ��������ɨ�裬��֤�����ȶ��� */
	            for (int i = end; i >= begin; i--) {
	                int j = this.getDigit(nums[i], d);
	                // �����Ӧ��Ͱ�У�count[j]-1�ǵ�j��Ͱ���ұ߽�����
	                bucket[count[j] - 1] = nums[i];
	                // ��ӦͰ��װ������������һ
	                count[j]--;
	            }
	
	            /* ���ѷ���õ�Ͱ�������ٵ���������ʱ���Ƕ�Ӧ��ǰλ������ı� */
	            for (int i = begin, j = 0; i <= end; i++, j++) {
	                nums[i] = bucket[j];
	            }
	
	        }
	    }
	
	    /** ��ȡx�������dλ���ϵ����֣������ȡ123��1λ�����������3 */
	    private int getDigit(int x, int d) {
	        int a[] = { 1, 1, 10, 100 };
	        return ((x / a[d]) % 10);
	    }
	
	}
	```

##### 7.4.2.3 ���Ӷ�
- ʱ�临�Ӷ�
	- `O(d(r+n))`
- �ռ临�Ӷ�
	- `O(rd+n)`

	> *ע�⣺*
	> - `r`����ؼ��ֻ�����`d`�����ȣ�`n`����ؼ��ָ�����

##### 7.4.2.4 �ȶ���
- �ȶ�

<br>
## �ˡ����ཻ��AD

<br>
## �š�ͼ���㷨

<br>
## ʮ���㷨��Ƽ���
### 10.1 ��̬�滮
#### 10.1.1 �����������


<br>
## ʮһ��̯������

<br>
## ʮ�����߼����ݽṹ����ʵ��

[1]: http://baike.baidu.com/link?url=ljsP9jaHoalPrY3hITm6MzHlZeqJ1Z2RQPoJcC6JHm4i98tQ31zDBYwTIV0ikkjRca272lDeoTOQaSrMmOL6fOiGbtgoALYs3Cch8aqshKO
[2]: http://www.lupaworld.com/article-242544-1.html
[3]: http://36kr.com/p/212499.html
[4]: http://i1.piimg.com/567571/6145141fcb6a5ecf.jpg
[5]: http://blog.csdn.net/happy_wu/article/details/51841244
[6]: http://p1.bpimg.com/567571/b44fbbc54aad4baa.jpg
[7]: http://p1.bqimg.com/567571/fbf89a48c5c2c04a.jpg
[8]: http://p1.bqimg.com/567571/cf1258186b6e118d.jpg
[9]: http://i1.piimg.com/567571/6fda50db1c44cd70.jpg
[10]: http://i1.piimg.com/567571/a369592c5bd5059c.jpg
[11]: http://p1.bqimg.com/567571/5633b49a1f8e2a55.jpg
[12]: http://www.cnblogs.com/jingmoxukong/p/4308823.html
[13]: http://www.cnblogs.com/jingmoxukong/p/4329079.html
[14]: http://p1.bqimg.com/567571/ed9c193f23a59882.png
[15]: http://www.cnblogs.com/jingmoxukong/p/4311237.html
[16]: http://baike.baidu.com/item/%E6%A0%91/2699484?sefr=cr
[17]: http://p1.bqimg.com/567571/8664781187e477a4.png
[18]: http://baike.baidu.com/link?url=KF09BSwkq9J4WG8m1rd5p4X-2ErGFs0Vnei-OSicMV0SnXZXJIc5EleogdYdID6S581fDGGxKElc6vf3SRrpEwz1K6lZdt3mW7pM_UcPInjzI13V1FZDlKQS42ysVpExxDAska5763atkPumIwVOtK
[19]: http://p1.bqimg.com/1949/82e5427343be821c.png
[20]: http://www.cnblogs.com/xiaochun126/p/5086037.html