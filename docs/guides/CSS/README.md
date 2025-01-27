---
comment: false 
# comments: false 
---
# CSS (层叠样式表)

> 层叠样式表(英文全称：`Cascading Style Sheets`)是一种用来表现`HTML`（标准通用标记语言的一个应用）或`XML`（标准通用标记语言的一个子集）等文件样式的计算机语言。`CSS`不仅可以静态地修饰网页，还可以配合各种脚本语言动态地对网页各元素进行格式化。

> `CSS` 能够对网页中元素位置的排版进行像素级精确控制，支持几乎所有的字体字号样式，拥有对网页对象和模型样式编辑的能力

## 发展历程

- 1990年，`Tim Berners-Lee`和`Robert Cailliau`共同发明了`Web`。1994年，`Web`真正走出实验室。
- 从`HTML`被发明开始，样式就以各种形式存在。不同的浏览器结合它们各自的样式语言为用户提供页面效果的控制。最初的`HTML`只包含很少的显示属性。
- 随着`HTML`的成长，为了满足页面设计者的要求，`HTML`添加了很多显示功能。但是随着这些功能的增加，`HTML`变的越来越杂乱，而且`HTML`页面也越来越臃肿。于是`CSS`便诞生了。
- 1994年哈坤·利提出了`CSS`的最初建议。而当时伯特·波斯（`Bert Bos`）正在设计一个名为`Argo`的浏览器，于是他们决定一起设计`CSS`。
- 其实当时在互联网界已经有过一些统一样式表语言的建议了，但`CSS`是第一个含有“层叠”丰意的样式表语言。在`CSS`中，一个文件的样式可以从其他的样式表中继承。读者在有些地方可以使用他自己更喜欢的样式，在其他地方则继承或“层叠”作者的样式。这种层叠的方式使作者和读者都可以灵活地加入自己的设计，混合每个人的爱好。
- 哈坤于1994年在芝加哥的一次会议上第一次提出了`CSS`的建议，1995年的`www`网络会议上`CSS`又一次被提出，博斯演示了Argo浏览器支持`CSS`的例子，哈肯也展示了支持`CSS`的`Arena`浏览器。
- 同年，`W3C`组织（`World WideWeb Consortium`）成立，`CSS`的创作成员全部成为了W3C的工作小组并且全力以赴负责研发`CSS`标准，层叠样式表的开发终于走上正轨。有越来越多的成员参与其中，例如微软公司的托马斯·莱尔顿(`Thomas Reaxdon`)，他的努力最终令`Internet Explorer`浏览器支持`CSS`标准。哈坤、波斯和其他一些人是这个项目的主要技术负责人。1996年底，`CSS`初稿已经完成，同年12月，层叠样式表的第一份正式标准（`Cascading style Sheets Level 1`）完成，成为`w3c`的推荐标准。
- 1997年初，`W3C`组织负责`CSS`的工作组开始讨论第一版中没有涉及到的问题。其讨论结果组成了1998年5月出版的`CSS`规范第二版。

## 语言特点

CSS为HTML标记语言提供了一种样式描述，定义了其中元素的显示方式。CSS在Web设计领域是一个突破。利用它可以实现修改一个小的样式更新与之相关的所有页面元素。

### 总体来说，CSS具有以下特点：

#### 丰富的样式定义
- CSS提供了丰富的文档样式外观，以及设置文本和背景属性的能力；允许为任何元素创建边框，以及元素边框与其他元素间的距离，以及元素边框与元素内容间的距离；允许随意改变文本的大小写方式、修饰方式以及其他页面效果。

#### 易于使用和修改
- CSS可以将样式定义在HTML元素的style属性中，也可以将其定义在HTML文档的header部分，也可以将样式声明在一个专门的CSS文件中，以供HTML页面引用。总之，CSS样式表可以将所有的样式声明统一存放，进行统一管理。
- 另外，可以将相同样式的元素进行归类，使用同一个样式进行定义，也可以将某个样式应用到所有同名的HTML标签中，也可以将一个CSS样式指定到某个页面元素中。如果要修改样式，我们只需要在样式列表中找到相应的样式声明进行修改。

#### 多页面应用
- CSS样式表可以单独存放在一个CSS文件中，这样我们就可以在多个页面中使用同一个CSS样式表。CSS样式表理论上不属于任何页面文件，在任何页面文件中都可以将其引用。这样就可以实现多个页面风格的统一。

#### 层叠
- 简单的说，层叠就是对一个元素多次设置同一个样式，这将使用最后一次设置的属性值。例如对一个站点中的多个页面使用了同一套CSS样式表，而某些页面中的某些元素想使用其他样式，就可以针对这些样式单独定义一个样式表应用到页面中。这些后来定义的样式将对前面的样式设置进行重写，在浏览器中看到的将是最后面设置的样式效果。

#### 页面压缩
- 在使用HTML定义页面效果的网站中，往往需要大量或重复的表格和font元素形成各种规格的文字样式，这样做的后果就是会产生大量的HTML标签，从而使页面文件的大小增加。而将样式的声明单独放到CSS样式表中，可以大大的减小页面的体积，这样在加载页面时使用的时间也会大大的减少。另外，CSS样式表的复用更大程度的缩减了页面的体积，减少下载的时间。

