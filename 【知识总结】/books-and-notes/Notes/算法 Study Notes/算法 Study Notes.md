# 算法 [^ 算法 reference] Study Notes [^ history version][^ review date]

@(Notes)[算法, Notes]

> VICTORY LOVES PREPARATION.

[^ 算法 reference]: [百度百科][1]、[LUPA][2]、[36氪][3]

[^ history version]: 
> 版本信息：
> 2017年04月24日 下午01:24:02
> 2017年04月03日 下午06:49:58
> 2017年02月22日 下午02:13:41

[^ review date]: 
> 复习时间：
> 2017年04月24日 下午01:24:02
> 2017年04月21日 下午04:28:02

[TOC]

***

## 〇、思维导图
- **`SUMMARY：`算法问题一个基本的解决思路就是不看变量看常量。**
- **算法问题一个基本的解决思路就是不看变量看常量。**

<br>
## 一、引论
- **`SUMMARY：`一系列解决问题的清晰指令。**
- 算法指解题方案的准确而完整的描述；
- 是一系列解决问题的清晰指令；
- （数据结构和算法）程序员的内功；
- 代表着用系统的方法描述解决问题的**策略机制**。

<br>
## 二、算法分析

<br>
## 三、表、栈和队列

<br>
## 四、树和二叉树
- **`SUMMARY：`一系列解决问题的清晰指令。**
### 4.1 树 [^ Tree Reference]
- **`SUMMARY：`树是一种数据结构，由`n（n>=1）`个有限节点组成一个具有层次关系的集合。**
- 是一种数据结构，是由`n（n>=1）`个有限节点组成一个具有层次关系的集合；
- 把它叫做“树”是因为它看起来像一棵倒挂的树，也就是说它是根朝上，而叶朝下的；
- **特点**
 - 每个节点有**零个或多个子节点**；
 - 每一个非根节点（*没有父节点的节点称为根节点*）**有且只有一个父节点**；
 - 除了根节点外，每个子节点可以分为多个**不相交的子树**（*递归定义*）。

[^ Tree Reference]: [百度百科][16]

### 4.2 二叉树
#### 4.2.1 定义
- **`SUMMARY：`二叉树是每个节点最多有两个子树的树结构。**
- 二叉树是每个节点最多有两个子树的树结构；
- 通常子树被称作“左子树”（`left subtree`）和“右子树”（`right subtree`a）；
- 常被用于实现**二叉查找树**和**二叉堆**；
- 是一个连通的无环图，并且每一个顶点的度不大于`3`。

#### 4.2.2 基本概念
##### 4.2.2.1 类型
###### 4.2.2.1.1 满二叉树
- 除了叶结点外每一个结点都有左右子叶；
- 叶子结点都处在最底层的二叉树；
- 一棵深度为`k`，且有`2^k-1`个节点的二叉树。

###### 4.2.2.1.2 完全二叉树
- 若设二叉树的高度为`h`，除第`h`层外，其它各层 `(1～h-1) `的结点数都达到最大个数；
- 第`h`层有叶子结点，并且叶子结点都是从左到右依次排布；
- 深度为`k`，有`n`个节点的二叉树，当且仅当其每一个节点都与深度为`k`的满二叉树中，序号为`1`至`n`的节点对应。

###### 4.2.2.1.3 平衡二叉树
- 又被称为`AVL`树（区别于`AVL`算法）；
- 具有以下**性质**：
 - 它是一棵空树或它的左右两个子树的高度差的绝对值不超过`1`；
 - 左右两个子树都是一棵平衡二叉树。

	> *注意：*
	> - 平衡二叉树不一定是二叉排序树。

###### 4.2.2.1.4 二叉排序树（二叉查找树或者二叉搜索树）
- 二叉排序树或者是一棵空树，或者是具有下列**性质**的二叉树：
 - 若左子树不空，则左子树上所有结点的值均**小于或等于**它的根结点的值；
 - 若右子树不空，则右子树上所有结点的值均**大于或等于**它的根结点的值；
 - 左、右子树也分别为二叉排序树。

##### 4.2.2.2 相关术语
##### 4.2.2.3 性质
##### 4.2.2.4 存储结构
##### 4.2.2.5 辨析

#### 4.2.3 遍历顺序
*`img.`二叉树遍历实例：*<br>![][17]

##### 4.2.3.1 先序遍历（`DLR`）
- 首先访问**根**，再**先序遍历左子树**，最后**先序遍历右子树**；
- `A B D G H E C K F I J`。

##### 4.2.3.2 中序遍历（`LDR`）
- 首先**中序遍历左子树**，再访问**根**，最后**中序遍历右子树**；
- `G D H B E A K C I J F`。

##### 4.2.3.3 后序遍历（`LRD`）
- 首先**后序遍历左子树**，再**后序遍历右子树**，最后访问**根**；
- `G H D E B K J I F C A`。

##### 4.2.3.4 层序遍历
- 即按照层次访问，通常用队列来做。访问根，访问子女，再访问子女的子女（越往后的层次越低）（两个子女的级别相同）；
- `A B C D E K F G H I J`。

#### 4.2.4 实现演示
##### 4.2.4.1 二叉排序树 [^ Binary Sort Tree Reference]
[^ Binary Sort Tree Reference]: [百度百科][18]

###### 4.2.4.1.1 基本概念
- **`SUMMARY:`左子树的值小于或等于当前节点的值，右子树大于等于当前节点的值的二叉树。**
- 二叉排序树的描述也是一个递归的描述， 所以排序二叉树的构造自然也用递归的。
- 二叉排序树的`3`个特征：
 - 当前`node`的所有左子树的值都小于或等于当前`node`的值；
 - 当前`node`的所有右子树的值都大于或等于当前`node`的值；
 - 孩子节点也满足以上两点。

###### 4.2.4.1.2 代码实例
- `BinarySortNode.java`

	``` java
	package com.cmc.algorithm.sort.binarytree.binarysorttree;
	
	import com.cmc.common.algorithm.sort.BinaryNode;
	
	/**
	 * <p>排序二叉树的描述也是一个递归的描述， 所以排序二叉树的构造自然也用递归的：
	 * <ul>排序二叉树的3个特征：
	 * <li>1：当前node的所有左孩子的值都小于当前node的值；
	 * <li>2：当前node的所有右孩子的值都大于当前node的值；
	 * <li>3：孩子节点也满足以上两点
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月27日 下午6:20:19
	 * @version 2017年2月28日 下午3:16:05
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
	
	    /** 虽然说，二叉排序树按照中序遍历不一定是从小到大，但是该方法中已经从根元素递归进行比较了（特殊的二叉排序树），所以中序遍历的时候一定是从小到大。 */
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
	
	        /* 构建二叉排序树 */
	        BinaryNode binarySortNode = new BinarySortNode(BinaryNode.NUMS[0]);
	        for (int i = 1; i < BinaryNode.NUMS.length; i++) {
	            binarySortNode.addChild(BinaryNode.NUMS[i]);
	        }
	
	        // （中序）遍历二叉排序树
	        binarySortNode.iterate(binarySortNode);
	        System.out.println("\n");
	        // 先序遍历二叉排序树
	        binarySortNode.iterateDLR(binarySortNode);
	        System.out.println("\n");
	        // 后序遍历二叉排序树
	        binarySortNode.iterateLRD(binarySortNode);
	    }
	
	}
	```

##### 4.2.4.2   二叉堆

<br>
## 五、散列

<br>
## 六、优先队列（堆）

<br>
## 七、排序算法 [^ Sort Algorithm Reference]
[^ Sort Algorithm Reference]: [博客园][13]、[CSDN][5]

- *`img.`排序算法分类示意图：*<br><br>![][14]
- **复杂度**：
	- 时间复杂度
		- **`SUMMARY：`基本操作重复执行次数的（时间）同数量级函数。**
		- 一般情况下，算法中基本操作重复执行的次数是问题规模`n`的某个函数，用`T(n)`表示，若有某个辅助函数`f(n)`，使得当`n`趋近于无穷大时，`T(n)/f(n)`的极限值为不等于零的常数，则称`f(n)`是`T(n)`的同数量级函数。记作`T(n)=O(f(n))`，称`O(f(n))`为算法的渐进时间复杂度，简称时间复杂度。
	- 空间复杂度
		- **`SUMMARY：`算法在运行过程中临时占用存储空间大小的量度。**
		- 算法在运行过程中**临时**占用存储空间大小的量度。*算法本身所占用的内存可以忽略*。
	- *`img.`各种算法复杂度：*[^ Various Algorithm Complexity] <br>![][19]

- **稳定性**：
	- **`SUMMARY：`相同关键字经过排序之后位置不变。**
	-  假定在待排序的记录序列中，存在多个具有**相同的关键字**的记录，若经过排序，这些记录的相对次序保持不变，即在原序列中，`ri`=`rj`，且`ri`在`rj`之前，而在排序后的序列中，`ri`仍在`rj`之前，则称这种排序算法是稳定的；否则称为不稳定的。
	-  *`eg.`实例：*
		-  要排序的内容是一组原本按照价格高低排序的对象，如今需要按照销量高低排序，使用稳定性算法，可以使得**相同销量的对象依旧保持着价格高低的排序**展现，只有销量不同的才会重新排序。（*当然，如果需求不需要保持初始的排序意义，那么使用稳定性算法依旧将毫无意义*）。

[^ Various Algorithm Complexity]: [博客园][20]

- 排序有**内部排序**和**外部排序**：
	- **内部排序是数据记录在内存中进行排序**
	- 而外部排序是因排序的数据很大，一次不能容纳全部的排序记录，在**排序过程中需要访问外存。**
-  当`n`较大，则应采用时间复杂度为`O(nlog2n)`的排序方法：
	-  **快速排序；**
		-  当待排序的关键字是随机分布时，其平均时间最短，是目前基于比较的内部排序中被认为是最好的方法。
	-  堆排序；
	-  归并排序序。

	> *注意*
	> - 简单选择排序、直接插入排序和冒泡排序可以都叫作**简单排序**，即简单选择排序、简单插入排序和简单交换排序。

### 7.1 选择排序

#### 7.1.1 简单选择排序（`Simple Selection Sort`）
##### 7.1.1.1 基本思想
- **`SUMMARY:`先排（确定）最小的或者最大的数。**
- 在组数中，选出最小（或者最大）的一个数与第`1`个位置的数交换；然后在剩下的数当中再找最小（或者最大）的与第`2`个位置的数交换，依次类推，直到第`n-1`个元素和第`n`个元素（最后一个数）比较为止。
- *`img.`示例图：*<br>![][6]
##### 7.1.1.2 代码实例
- `SimpleSelectionSort.java`
	``` java
	package com.cmc.algorithm.sort.simpleselectionsort;
	
	import com.cmc.algorithm.sort.common.Sort;
	
	/**
	 * 选择排序—简单选择排序（Simple Selection Sort）
	 * 
	 * <p>在要排序的一组数中，选出最小（或者最大）的一个数与第1个位置的数交换；
	 *    然后在剩下的数当中再找最小（或者最大）的与第2个位置的数交换，依次类推，
	 *    直到第n-1个元素（倒数第二个数）和第n个元素（最后一个数）比较为止。
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月22日 下午8:15:37
	 */
	public class SimpleSelectionSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort simpleSelectionSort = new SimpleSelectionSort();
	        Sort.out(simpleSelectionSort.sort(Sort.NUMS));
	    }
	
	    public int[] sort(int[] nums) {
	        for (int i = 0; i < nums.length - 1; i++) {
	            // 存放最小值的下标
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

##### 7.1.1.3 复杂度
- 时间复杂度
	- `O(N2)`
- 空间复杂度
	- `O(1)`

##### 7.1.1.4 稳定性
- 不稳定

#### 7.1.2 堆排序（`Heap Sort`）
##### 7.1.2.1 基本思想
- **`SUMMARY:`创建初始堆，交换`R[0]`和`R[n]`，再将`R[0..n-1]`调整为堆，交换`R[0]`和`R[n-1]`，如此反复直至交换`R[0]`和`R(1)`为止。**
- 首先，将数组`R[0..n]`调整为堆（这个过程称为**创建初始堆**），交换`R[0]`和`R[n]`；
- 然后，将`R[0..n-1]`调整为堆，交换`R[0]`和`R[n-1]`；
- 如此反复，直到交换了`R[0]`和`R(1)`为止；
- 堆排序其实也是一种选择排序，是一种树形选择排序。

##### 7.1.2.2 代码实例
- 

##### 7.1.2.3 复杂度
- 时间复杂度
	- `O(N*log2N)`
- 空间复杂度
	- `O(1)`

##### 7.1.2.4 稳定性
- 不稳定

> *注意：*
> - **堆是一棵顺序存储的完全二叉树**：
>  - 其中每个结点的关键字都不大于其孩子结点的关键字，这样的堆称为**小根堆**；
>  - 其中每个结点的关键字都不小于其孩子结点的关键字，这样的堆称为**大根堆**。
>  - 涉及到（*有序*）二叉树的时间复杂度一般都有因子`log2N`，查找算法为`log2N`，排序算法为`N*log2N`。

### 7.2 插入排序

#### 7.2.1 直接插入排序（`Straight Insertion Sort`）

##### 7.2.1.1 基本思想
- **`SUMMARY:`先将序列的第`1`个记录看成是一个有序的子序列，然后从第`2`个记录逐个进行插入，直至整个序列有序为止。**
- 将一个记录插入到已排序好的有序表中，从而得到一个新的有序表，记录数增`1`的有序表。即：**先将序列的第`1`个记录看成是一个有序的子序列，然后从第`2`个记录逐个进行插入，直至整个序列有序为止**；
- *设立哨兵，作为临时存储和判断数组边界之用*；
- 如果碰见一个和插入元素相等的，那么插入元素把想插入的元素放在相等元素的后面。所以，**相等元素的前后顺序没有改变，从原无序序列出去的顺序就是排好序后的顺序，所以插入排序是稳定的**。
- *`img.`示例图：*<br>![][8]

##### 7.2.1.2 代码实例
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
	     * 算法思路：<br>
	     * 将一个记录插入到已排序好的有序表中，从而得到一个新，记录数增1的有序表。
	     * 即：先将序列的第1个记录看成是一个有序的子序列，然后从第2个记录逐个进行插入，直至整个序列有序为止。
	     */
	    @Override
	    public int[] sort(int[] nums) {
	        for (int i = 1; i < nums.length; i++) {
	
	            if (nums[i] < nums[i - 1]) {
	                int tmpForInsert = nums[i];
	                nums[i] = nums[i - 1];
	
	                /* 通过循环，逐个后移一位找到要插入的位置 */
	                int j;
	                for (j = i - 2; j >= 0 && tmpForInsert < nums[j]; j--) {
	                    nums[j + 1] = nums[j];
	                }
	
	                // 插入
	                nums[j + 1] = tmpForInsert;
	            }
	        }
	
	        return nums;
	    }
	
	}
	```

##### 7.2.1.3 复杂度
- 时间复杂度
	- `O(N2)`
- 空间复杂度
	- `O(1)`

##### 7.2.1.4 稳定性
- 稳定

#### 7.2.2 希尔排序（`Shell Sort`）
- **`SUMMARY:`增量逐渐递减到1的直接插入排序。**
- 又叫缩小增量排序；
- 是`1959`年由`D.L.Shell`提出来的，相对直接插入排序有较大的改进。

##### 7.2.2.1 基本思想
- **`SUMMARY:`将序列分割成为按照一定增量的若干子序列进行直接插入排序，然后进行依次减小增量直至增量为`1`的直接插入排序。**
- 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，待整个序列中的记录“基本有序”时，再对全体记录进行依次直接插入排序；
- 希尔排序时效分析很难，关键码的比较次数与记录移动次数依赖于增量因子序列`d`的选取，特定情况下可以准确估算出关键码的比较次数和记录的移动次数。目前还没有人给出选取最好的增量因子序列的方法。增量因子序列可以有各种取法，有取奇数的，也有取质数的，但需要注意：增量因子中除`1`外没有公因子，且最后一个增量因子必须为`1`；
- 希尔排序方法是一个不稳定的排序方法。
- *`img.`示例图：*<br>![][9]

##### 7.2.2.2 操作方法
1. 选择一个增量序列`t1`，`t2`，…，`tk`，其中`ti>tj，tk=1`；
2. 按增量序列个数`k`，对序列进行`k`趟排序；
3. 每趟排序，根据对应的增量`ti`，将待排序列分割成若干长度为`m`的子序列，分别对各子表进行直接插入排序。仅增量因子为`1`时，整个序列作为一个表来处理，表长度即为整个序列的长度。

##### 7.2.2.3 代码实例
- 我们简单处理增量序列：增量序列`d = {n/2 ,n/4, n/8 .....1}`，`n`为要排序数的个数；
- 先将要排序的一组记录按某个增量d（`n/2`, `n`为要排序数的个数）分成若干组子序列，每组中记录的下标相差`d`。对每组中全部元素进行直接插入排序，然后再用一个较小的增量（`d/2`）对它进行分组，在每组中再进行直接插入排序。继续不断缩小增量直至为`1`，最后使用直接插入排序完成排序。

	``` java
	package com.cmc.algorithm.sort.insert.shellsort;
	
	import com.cmc.common.algorithm.sort.Sort;
	
	/**
	 * 插入排序-希尔排序
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月23日 下午4:42:29
	 */
	public class ShellSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort shellSort = new ShellSort();
	        Sort.out(shellSort.sort(Sort.NUMS));
	    }
	
	    /**
	     * 算法思路：<br>
	     * 类似直接插入排序，只是其增量是1，而本排序增量是increase
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
	
	                /* 通过循环，逐个后移一位找到要插入的位置。 */
	                int j;
	                for (j = i - 2 * increase; j >= 0 && tmpForInsert < nums[j]; j = j - increase) {
	                    nums[j + increase] = nums[j];
	                }
	
	                // 插入
	                nums[j + increase] = tmpForInsert;
	            }
	        }
	        return nums;
	    }
	
	}
	```

##### 7.2.2.4 复杂度
- 时间复杂度
	- `O(N2)`
- 空间复杂度
	- `O(1)`

##### 7.2.2.5 稳定性
- 不稳定

### 7.3 交换排序

#### 7.3.1 冒泡排序（`Bubble Sort`）
##### 7.3.1.1 基本思想
- **`SUMMARY:`每当相邻的两个数比较后发现它们的排序与要求相反时，就将它们互换。**
- 在要排序的一组数中，对当前还未排好序的范围内的全部数，自上而下对相邻的两个数依次进行比较和调整，让**较大的数往下沉，较小的往上冒**。即，每当两相邻的数比较后发现它们的排序与排序要求相反时，就将它们互换。
- *`img.`示例图：*<br>![][7]

##### 7.3.1.2 代码实例
- `BubbleSort.java`
	``` java
	package com.cmc.algorithm.sort.bubblesort;
	
	import com.cmc.algorithm.sort.common.Sort;
	
	/**
	 * 交换排序—冒泡排序（Bubble Sort）
	 * 
	 * <p>在要排序的一组数中，对当前还未排好序的范围内的全部数，
	 *    自上而下对相邻的两个数依次进行比较和调整，让较大的数往下沉，
	 *    较小的往上冒。
	 *    即：每当两相邻的数比较后发现它们的排序与排序要求相反时，就将它们互换。
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月22日 下午7:17:16
	 */
	public class BubbleSort extends Sort {
	
	    public static void main(String[] args) {
	        Sort bubbleSort = new BubbleSort();
	        Sort.out(bubbleSort.sort(NUMS));
	    }
	
	    @Override
	    public int[] sort(int[] nums) {
	        for (int i = 0; i < nums.length - 1; i++) {
	            // j < nums.length - i - 1，-1是因为下面要用到j+1，-i是因为，已经把最大的数排列到最后面，所以就没有必要（继续排序的话，是没有意义的）继续排序了
	            for (int j = 0; j < nums.length - i - 1; j++) {
	                if (nums[j] > nums[j + 1]) {
	                    swap(nums, j, j + 1);
	                }
	            }
	            /* 伪冒泡排序
	            for (int j = i; j < nums.length - 1; j++) {
	                if (nums[j] < nums[j + 1]) {
	                    Sort.swap(nums, j, j + 1);
	                }
	                // 调换位置
	                Sort.swap(nums, i, j + 1);
	            }
	            */
	        }
	        return nums;
	    }
	
	}
	```

	> *注意：*
	> - **冒泡排序算法改进**：
	>  - 对冒泡排序常见的改进方法是加入一标志性变量`exchange`，用于标志某一趟排序过程中是否有数据交换，如果进行某一趟排序时并没有进行数据交换，则说明数据已经按要求排列好，可立即结束排序，避免不必要的比较过程；
	>  - 设置一标志性变量`pos`，用于记录每趟排序中最后一次进行交换的位置。由于`pos`位置之后的记录均已交换到位，故在进行下一趟排序时只要扫描到`pos`位置即可；
	>  - 传统冒泡排序中每一趟排序操作只能找到一个最大值或最小值，利用在每趟排序中进行正向和反向两遍冒泡的方法一次可以得到两个最终值（最大者和最小者） , 从而使排序趟数几乎减少了一半。

##### 7.3.1.3 复杂度
- 时间复杂度
	- `O(N2)`
- 空间复杂度
	- `O(1)`

##### 7.3.1.4 稳定性
- 稳定

#### 7.3.2 快速排序（`Quick Sort`）【必须掌握】
##### 7.3.2.1 基本思想
- **`SUMMARY:`通过一趟排序将待排序的记录分割成独立的两部分。其中一部分记录的元素值均比基准元素值小，另一部分记录的元素值比基准值大，此时基准元素在其排好序后的正确位置，然后进行递归排序。**
- 选择一个基准元素，通常选择第一个元素或者最后一个元素；
- 通过一趟排序将待排序的记录分割成独立的两部分。其中**一部分记录的元素值均比基准元素值小，另一部分记录的元素值比基准值大**；
- **此时基准元素在其排好序后的正确位置**；
- 然后分别对这两部分记录用同样的方法继续进行排序，直到整个序列有序。
- *`img.`示例图：*<br>![][10]

##### 7.3.2.2 代码实例
- `QuickSort.java`

	``` java
	package com.cmc.algorithm.sort.exchange.quicksort;
	
	import com.cmc.common.algorithm.sort.Sort;
	
	/**
	 * 交换排序-快速排序
	 * 
	 * @author Thomas Lee
	 * @version 2017年2月23日 下午6:56:07
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
	        // 如果不加这个判断递归会无法退出导致堆栈溢出异常
	        if (low < high) {
	            int middle = this.getBaseNumIndex(nums, low, high);
	            this.quickSort(nums, 0, middle - 1);
	            this.quickSort(nums, middle + 1, high);
	        }
	    }
	
	    /** 获取基准元素所在序列“中”的下标 */
	    private int getBaseNumIndex(int[] nums, int low, int high) {
	        // 基准元素，排序中会空出来的一个位置
	        int baseNum = nums[low];
	        while (low < high) {
	
	            /* 从high开始找比基准小的，与low换位置 */
	            while (low < high && nums[high] >= baseNum) {
	                high--;
	            }
	            nums[low] = nums[high];
	
	            /* 从low开始找比基准大,放到之前high空出来的位置上 */
	            while (low < high && nums[low] <= baseNum) {
	                low++;
	            }
	            nums[high] = nums[low];
	
	        }
	        // 此时low=high 是基准元素的位置，也是空出来的那个位置
	        nums[low] = baseNum;
	        return low;
	    }
	
	}
	```

##### 7.3.2.3 复杂度
- 时间复杂度
	- `O(N*log2N) ~ O(N2)`
- 空间复杂度
	- `O(log2n) ~ O(n) `

##### 7.3.2.4 稳定性
- 不稳定

### 7.4 其他排序

#### 7.4.1 归并排序（`Merge Sort`）[^ Merge Sort Reference]
[^ Merge Sort Reference]: [博客园][11]

##### 7.4.1.1 基本思想
- **`SUMMARY:`归并（`Merge`）排序法是将两个（或两个以上）有序表合并成一个新的有序表，然后再把有序子序列合并为整体有序序列。**
- 归并（`Merge`）排序法是将两个（或两个以上）有序表合并成一个新的有序表，即把待排序序列分为若干个子序列，每个子序列是有序的。然后再把有序子序列合并为整体有序序列。
- *`img.`示例图：*<br>![][11]

##### 7.4.1.2 代码实例
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
	     * 算法思路：<br>
	     * 将两个（或两个以上）有序表合并成一个新的有序表。
	     * 即把待排序序列分为若干个子序列，每个子序列是有序的，
	     * 然后再把有序子序列合并为整体有序序列。
	     */
	    private void sort(int[] nums, int low, int high) {
	        int mid = (low + high) / 2;
	        if (low < high) {
	            this.sort(nums, low, mid);
	            this.sort(nums, mid + 1, high);
	            // 左右归并
	            this.merge(nums, low, mid, high);
	        }
	    }
	
	    /**
	     * 合并左右有序序列
	     * 
	     * @author Thomas Lee
	     * @param nums 要排序的序列
	     * @param low 左端序列下标
	     * @param mid mid = (low + high) / 2
	     * @param high 右端序列下标
	     * @version 2017年2月24日 下午2:38:43
	     */
	    private void merge(int[] nums, int low, int mid, int high) {
	        // 存放合并序列的临时数组
	        int[] tempArray = new int[high - low + 1];
	        // 左端序列下标
	        int i = low;
	        // 右端序列下标
	        int j = mid + 1;
	        // 临时数组序列
	        int k = 0;
	
	        /* 把较小的数先移到新数组中 */
	        while (i <= mid && j <= high) {
	            if (nums[i] < nums[j]) {
	                tempArray[k++] = nums[i++];
	            } else {
	                tempArray[k++] = nums[j++];
	            }
	        }
	
	        /* 把左边剩余的数移入数组 */
	        while (i <= mid) {
	            tempArray[k++] = nums[i++];
	        }
	
	        /* 把右边边剩余的数移入数组 */
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

##### 7.4.1.3 复杂度
- 时间复杂度
	- `O(N*log2N)`
- 空间复杂度
	- `O(n)`

##### 7.4.1.4 稳定性
- 稳定

#### 7.4.2 桶排序 / 基数排序（`Radix Sort`）[^ Radix Sort Reference]
[^ Radix Sort Reference]: [博客园][15]

##### 7.4.2.1 基本思想
- **`SUMMARY:`依次比较序列中各个数位上的值。**
- 基数排序与本系列前面讲解的七种排序方法都不同，它不需要比较关键字的大小；
- 它是根据关键字中各个数位上的值，通过对排序的`N`个元素进行若干趟**分配**与**收集**来实现排序的。

##### 7.4.2.2 代码实例
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
	        // 基数
	        final int radix = 10;
	        // 存放各个桶的数据统计个数
	        int[] count = new int[radix];
	        int[] bucket = new int[end - begin + 1];
	
	        /* 按照从低位到高位的顺序执行排序过程 */
	        for (int d = 1; d <= digit; d++) {
	
	            /* 置空各个桶的数据统计 */
	            for (int i = 0; i < radix; i++) {
	                count[i] = 0;
	            }
	
	            /* 统计各个桶将要装入的数据个数 */
	            for (int i = begin; i <= end; i++) {
	                int j = this.getDigit(nums[i], d);
	                count[j]++;
	            }
	
	            /* count[i]表示第i个桶的右边界索引 */
	            for (int i = 1; i < radix; i++) {
	                count[i] = count[i] + count[i - 1];
	            }
	
	            /* 将数据依次装入桶中，这里要从右向左扫描，保证排序稳定性 */
	            for (int i = end; i >= begin; i--) {
	                int j = this.getDigit(nums[i], d);
	                // 放入对应的桶中，count[j]-1是第j个桶的右边界索引
	                bucket[count[j] - 1] = nums[i];
	                // 对应桶的装入数据索引减一
	                count[j]--;
	            }
	
	            /* 将已分配好的桶中数据再倒出来，此时已是对应当前位数有序的表 */
	            for (int i = begin, j = 0; i <= end; i++, j++) {
	                nums[i] = bucket[j];
	            }
	
	        }
	    }
	
	    /** 获取x这个数的d位数上的数字，比如获取123的1位数，结果返回3 */
	    private int getDigit(int x, int d) {
	        int a[] = { 1, 1, 10, 100 };
	        return ((x / a[d]) % 10);
	    }
	
	}
	```

##### 7.4.2.3 复杂度
- 时间复杂度
	- `O(d(r+n))`
- 空间复杂度
	- `O(rd+n)`

	> *注意：*
	> - `r`代表关键字基数，`d`代表长度，`n`代表关键字个数。

##### 7.4.2.4 稳定性
- 稳定

<br>
## 八、不相交集AD

<br>
## 九、图论算法

<br>
## 十、算法设计技巧
### 10.1 动态规划
#### 10.1.1 最长递增子序列


<br>
## 十一、摊还分析

<br>
## 十二、高级数据结构及其实现

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