## 页面布局

> 问题：假设高度默认`100px` ，请写出三栏布局，其中左栏、右栏各为`300px`，中间自适应。

![](http://img.smyhvae.com/20180305_1520.png)

分析：

初学者想到的答案有两种：

- 方法1：浮动
- 方法2：绝对定位

> 但要求你能至少写出三四种方法，才算及格。剩下的方法如下：

- 方法3：`flexbox`。移动开发里经常用到。
- 方法4：表格布局` table`。虽然已经淘汰了，但也应该了解。
- 方法5：网格布局 `grid`


**方法1、浮动：**

> 左侧设置左浮动，右侧设置右浮动即可，中间会自动地自适应。


**方法2、绝对定位：**

> 左侧设置为绝对定位， ` left：0px`。右侧设置为绝对定位， `right：0px`。中间设置为绝对定位，`left `和`right` 都为`300px`，即可。中间的宽度会自适应。


> 使用`article`标签作为容器，包裹左、中、右三个部分。


> 方法1 和方法2 的代码如下：

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        html * {
            padding: 0px;
            margin: 0px;
        }

        .layout {
            margin-bottom: 150px;
        }


        .layout article div { /*注意，这里是设置每个小块儿的高度为100px，而不是设置大容器的高度。大容器的高度要符合响应式*/
            height: 100px;
        }

        /* 方法一 start */

        .layout.float .left {
            float: left;
            width: 300px;
            background: red;
        }

        .layout.float .right {
            float: right;
            width: 300px;
            background: blue;
        }

        .layout.float .center {
            background: green;

        }

        /* 方法一 end */


        /* 方法二 start */
        .layout.absolute .left-center-right {
            position: relative;
        }

        .layout.absolute .left {
            position: absolute;
            left: 0;
            width: 300px;
            background: red;
        }

        /* 【重要】中间的区域，左侧定位300px，右侧定位为300px，即可完成。宽度会自使用 */
        .layout.absolute .center {
            position: absolute;
            left: 300px;
            right: 300px;
            background: green;
        }

        .layout.absolute .right {
            position: absolute;
            right: 0;
            width: 300px;
            background: blue;
        }


        /* 方法二 end */
    </style>
</head>

<body>

    <!-- 方法一：浮动 start -->
    <!-- 输入 section.layout.float，即可生成  -->
    <section class="layout float">
        <!-- 用  article 标签包裹左、中、右三个部分 -->
        <article class="left-right-center">
            <!-- 输入 div.left+div.right+div.center，即可生成 -->
            <div class="left">
                我是 left
            </div>
            <div class="right">
                我是 right
            </div>
            <div class="center">
                浮动解决方案
                我是 center
            </div>

        </article>

    </section>
    <!-- 方法一：浮动 end -->

    <section class="layout absolute">
        <article class="left-center-right">
            <div class="left">
                我是 left
            </div>
            <div class="right">
                我是 right
            </div>
            <div class="center">
                <h1>绝对定位解决方案</h1>
                我是 center
            </div>
        </article>
    </section>
</body>
</html>

```

效果如下：

![](http://img.smyhvae.com/20180305_1640.gif)


**方法3、flexbox布局**

> 将左中右所在的容器设置为`display: flex`，设置两侧的宽度后，然后让中间的`flex = 1`，即可。


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout article div {
            height: 100px;
        }

        .left-center-right {
            display: flex;
        }

        .layout.flex .left {
            width: 300px;
            background: red;
        }

        .layout.flex .center {
            flex: 1;
            background: green;
        }

        .layout.flex .right {
            width: 300px;
            background: blue;
        }
    </style>

</head>

<body>
    <section class="layout flex">
        <article class="left-center-right-">
            <div class="left">
                我是 left
            </div>
            <div class="center">
                <h1>flex布局解决方案</h1>
                我是 center
            </div>
            <div class="right">
                我是 right
            </div>

        </article>
    </section>

</body>

</html>


```


效果如下：

![](http://img.smyhvae.com/20180305_1700.gif)




**方法4、表格布局 table**

> 设置整个容器的宽度为`100%`，设置三个部分均为表格，然后左边的单元格为 `300px`，右边的单元格为 `300px`，即可。中间的单元格会自适应。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        .layout.table div {
            height: 100px;
        }

        /* 重要：设置容器为表格布局，宽度为100% */
        .layout.table .left-center-right {
            width: 100%;
            display: table;
            height: 100px;

        }

        .layout.table .left-center-right div {
            display: table-cell; /* 重要：设置三个模块为表格里的单元*/
        }

        .layout.table .left {
            width: 300px;
            background: red;
        }

        .layout.table .center {
            background: green;
        }

        .layout.table .right {
            width: 300px;
            background: blue;
        }
    </style>

</head>

<body>
    <section class="layout table">
        <article class="left-center-right">
            <div class="left">
                我是 left
            </div>
            <div class="center">
                <h1>表格布局解决方案</h1>
                我是 center
            </div>
            <div class="right">
                我是 right
            </div>

        </article>
    </section>

</body>

</html>

```

![](http://img.smyhvae.com/20180305_1855.gif)

**方法5、网格布局 grid**

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Document</title>
    <style>
        html * {
            padding: 0;
            margin: 0;
        }

        /* 重要：设置容器为网格布局，宽度为100% */
        .layout.grid .left-center-right {
            display: grid;
            width: 100%;
            grid-template-rows: 100px;
            grid-template-columns: 300px auto 300px;  /* 重要：设置网格为三列，并设置每列的宽度。即可。*/

        }

        .layout.grid .left {
            background: red;
        }

        .layout.grid .center {
            background: green;
        }

        .layout.grid .right {
            background: blue;
        }
    </style>

</head>

<body>
    <section class="layout grid">
        <article class="left-center-right">
            <div class="left">
                我是 left
            </div>
            <div class="center">
                <h1>网格布局解决方案</h1>
                我是 center
            </div>
            <div class="right">
                我是 right
            </div>

        </article>
    </section>

</body>

</html>
```


效果：

![](http://img.smyhvae.com/20180305_1920.gif)


**延伸：五种方法的对比**

> 五种方法的优缺点

- 考虑中间模块的高度问题
- 兼容性问题：实际开发中，哪个最实用？

方法1：浮动：

- 优点：兼容性好。
- 缺点：浮动会脱离标准文档流，因此要清除浮动。我们解决好这个问题即可。

方法:2：绝对定位

- 优点：快捷。
- 缺点：导致子元素也脱离了标准文档流，可实用性差。

方法3：flex 布局（CSS3中出现的）

- 优点：解决上面两个方法的不足，flex布局比较完美。移动端基本用 flex布局。

方法4：表格布局

- 优点：表格布局在很多场景中很实用，兼容性非常好。因为IE8不支持 flex，此时可以尝试表格布局
- 缺点：因为三个部分都当成了**单元格**来对待，此时，如果中间的部分变高了，其会部分也会被迫调整高度。但是，在很多场景下，我们并不需要两侧的高度增高。

> 什么时候用 `flex `布局 or 表格布局，看具体的场景。二者没有绝对的优势，也没有绝对的不足。


方法5：网格布局

- CSS3中引入的布局，很好用。代码量简化了很多。

> PS：面试提到网格布局，说明我们对新技术是有追求的。


**延伸：如果题目中去掉高度已知**

> 问题：题目中，如果去掉高度已知，我们往中间的模块里塞很多内容，让中间的模块撑开。会发生什么变化？哪个布局就不能用了？


分析：其实可以这样理解，我们回去看上面的动画效果，当中间的模块变得很挤时，会发生什么效果？就是我们想要的答案。

> 答案是：**flex 布局和表格布局可以通用**，其他三个布局都不能用了。



**总结**

> 涉及到的知识点：

- 语义化掌握到位：每个区域用`section`、`article`代表容器、`div`代表块儿。如果通篇都用 div，那就是语义化没掌握好。
- 页面布局理解深刻。
- `CSS`基础知识扎实。
- 思维灵活且积极上进。题目中可以通过`网格布局`来体现。
- 代码书写规范。注意命名。上面的代码中，没有一行代码是多的。