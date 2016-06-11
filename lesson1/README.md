#node-lesson1
#1.解决几个问题？
##1.前端、后端都是干什么的？ 
Html、js、jquery、css等等组成文件资源
Java、.net、php、node.js 文件操作、操作服务器硬件
##2.为什么学习node.js？
Node.js本身有价值，
学习node.js市场价值
##3.什么是JavaScript？
脚步语言
嵌套在html页面里面
##4.浏览器中的JavaScript可以做什么？
操作dom
提交表单
与服务端交互
##5.浏览器中的JavaScript不可以做什么？
不可以操作文件
不可以操作我们的硬件
##6.浏览器与JavaScript是什么关系？
Js依赖于我们的浏览器
汽车引擎 转化  可移植性
Js引擎 转化js 字节码 机器码  可移植性
##7.JavaScript只可以运行在浏览器中吗？
Js靠我们的js引擎解析
Node.js运行js  node给V8引擎包一层壳，黑匣子

##8.什么是 Node?

- [https://nodejs.org/en/]()
- Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
  + JavaScript runtime  JavaScript 运行时
  + Chrome's V8 JavaScript engine Chrome 浏览器 V8 引擎
  + Node.js 是一个 构建于 谷歌的 Chrome 浏览器的 V8 引擎之上的一个 `JavaScript运行时` 环境
  + Node.js可以解析和执行 JavaScript 代码
- Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
  + event-driven  事件驱动模型
  + non-blocking I/O model  非阻塞IO模型  IO（input/output）输入与输出
  + lightweight[ˈlaɪtweɪt]  轻量级
    * 在软件开发行业中，轻量级标识褒义词
    * 轻量级也就意味着 运行速度快
    * 轻量级也就意味着有更好的 跨平台 特性（平台的差异性，兼容性）
  + efficient[ɪˈfɪʃnt] 高效的
  + Node.js的 事件驱动和非阻塞IO模型使得Node.js本身非常的轻量和高效
- Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
  + package ecosystem npm  包生态系统 npm
  + largest  最大的
  + open source libraries 开源库
    * 理论意义上 开源就表示有成熟的社区，开放源代码
  + Node.js 的npm包生态系统，是世界上 最大的 开源库 生态系统
  + 以前的 客户端中 JavaScript 库 散列在互联网的各个地方
  + npm 就是 把大家经常使用的一些开源库 给 组织到了一起

Node 是一个可以解析和执行 JavaScript 代码的 运行时环境

- Node.js 的作者叫什么？
  + 瑞恩.达尔

- Node.js 是 JavaScript 吗？
  + Node.js 不是 JavaScript ， Node.js 不是一种 语言
  + Node.js 不是 框架、库
  + Node.js 是一个可以解析和执行 JavaScript 代码的一个运行时环境

##9.Chrome 浏览器的实现结构

- Webkit 渲染、布局引擎
- V8 JavaScript 解析执行引擎   语言本身指  ECMAScript
- 中间层（DOM、BOM） 浏览器暴露出来的接口
- 硬件层

### Node 的实现结构
- V8 JavaScript 解析执行引擎   ECMAScript
- 中间层 （提供了文件操作、网络操作登陆接口）更加接近操作系统的接口供开发人员使用
- 硬件层


### Node 可以做什么

- 操作文件（创建、删除、修改、读取）
- 提供Web服务（在Node中可以接收客户端的请求了）
- Node 可以 开发一些 命令行工具软件
- Node 可以 开发动态网站（有用户业务交互的功能Web站点）
  + 用户登陆
  + 用户注册
  + 添加购物车
  + 商品的展示
- Node 可以帮我们 把之前 所写的 静态页面  -> 动态化
- Node.js 再也不需要操作DOM、BOM了，再也不需要写HTML、css 不需要关系 兼容性的问题
- Node.js 编程实际上就是在 写 JavaScript 代码，关心的是业务功能
- 操作持久化数据
- 可以开发 命令台 工具软件

### Node.js 和 PHP 有什么区别？

- 它们都能操作文件，都有和操作系统底层打交道的 API
- 它们都可以进行网络操作，网络服务
- PHP 需要和 Apache 结合起来才能提供 Web服务
- Node.js 摒弃了以往所有的 服务器
  + Node.js 可以独立作为一个服务器来使用
- Java、PHP、.net 能做的事儿，Node.js 基本都能做，而且在某一方面比它们还要做的好

### 谁在使用 Node

国内一些创业公司用用的比较多，功夫熊（做上门保健的，美甲、按摩）
国外的一些大公司都有使用：Facebook、Twitter、Google
国内的一些大公司：Alibaba（天猫所有的页面都是通过Node提供的服务）、Tencent、Baidu

### 如何学习 Node

- 阅读一些大牛写的技术博客
- 看一些大牛写到书
  + 深入浅出Node.js（作者：Alibaba：朴灵）学完Node.js之后，甚至使用Node.js工作了半年了再看
- 多写代码

## 安装与配置

### 安装包的方式安装

- 下载地址：
- 一路下一步 next
- 如何确认是否安装成功：
  + `win + r` ，然后输入 `cmd` ，然后敲回车 就可以进入 cmd 控制台

### nvm 安装和管理我们的 Node.js版本

## 控制台基本使用

允许用户可以在终端命令台中与操作系统交互，其实就是输入与输出

### 如何打开cmd

1. 通过 按 window 键，输入 `cmd` 打开cmd程序
2. 通过 `win+r`  输入 `cmd`，敲回车就可以进入

### 基本命令

- `dir` directory 列出当前目录下所有的条目
  + 别名 `ls` 在 powershell 中可以使用
- `cd` change directory 切换目录

```
切换到当前目录下的 Desktop 目录
当想切换到当前目录的时候，最好使用 cd ./ 相对路径的形式
C:\Users\iroc>cd Desktop
C:\Users\iroc\Desktop>

在Windows 上切换盘符：
`d:`

切换绝对路径之后再同一个盘符下才有效

切换到上一级目录
C:\Users\iroc\Desktop\code\seajs>cd ../
C:\Users\iroc\Desktop\code>

连续进入多级目录
C:\Users\iroc\Desktop\code>cd seajs/a
C:\Users\iroc\Desktop\code\seajs\a>
```

- `cls` clear screen 清屏
  + 别名 clear 在widnows中的 `powershell` 中可以使用

### path 环境变量

目的是为了在控制台中的任何目录都可以快速打开或者使用该可执行文件

环境变量就是用来存储系统级别的变量

- 添加环境变量
  + 我的电脑 -> 右键选择属性 -> 高级系统设置 -> 切换到`高级`面板 -> 环境变量
  + 第一种方式：直接把可执行文件所属的目录 放到 PATH 环境变量中（如果没有PATH环境变量，自己新建）
  + 第二种方式：新建一个环境变量，变量名规范：逻辑名_HOME 变量值：该可执行文件所属的目录
  + 注意：无论是直接添加的路径还是引用的变量名，一定要用 英文的分号 区分开
  + 引用变量名的时候，变量名两边都是 `%`

`> feiq`
当你在控制台中输入一个程序的名字的时候，cmd 默认把它当成一个可执行文件去执行了，
优先找当前目录下是否有没有一个叫做feiq.exe 的可执行文件，如果有，直接执行打开
如果没有，cmd会进入 path 环境变量中 一个目录一个目录的挨着查找里面是否有该可执行文件

## REPL(Read-eval-print-loop) 运行环境

就是浏览器中的控制台，可以辅助我们做一些API测试

- 通过在控制台中输入 `node` 敲回车就可以计入 REPL 运行环境
- 通过在REPL运行环境中 连续按两次 `Ctrl+C` 就可以退出 REPL 运行环境


## Global

### __dirname 和 __filename

它们属于模块作用域，可以直接使用
它们两个用来获取路径的，一般用于操作文件路径的时候，才会用到

## process

process 是一个全局可用对象，可以在任何地方使用

- process.argv
  + 可以通过该属性，获取命令台输入的一些参数
