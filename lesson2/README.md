# node-lesson2

# 1.复习

## 1.1 概念
- Node.js是JavaScript吗?

  `Node.js不是JavaScript，是一个提供解析和执行JavaScript运行环境的平台，不是框架、也不是库、更不是一门语言`
  
- Node.js基于哪个JavaScript引擎？

  `Chrome的V8引擎`
  
- Node.js的特性？

  `事件驱动、无阻塞IO----->异步、高io`
  
- Node.js只能运行在Windows上吗？

  `不仅仅能运行在Windows上，Node.js是跨平台`
  
## 1.2 nvm常用命令
- nvm项目地址：[nvm-github地址](https://github.com/coreybutler/nvm-windows)
- 查看所有已安装的node版本
``` nvm list ```
- 切换node版本
``` nvm use 版本号 ```
- 安装指定版本的node
``` nvm install 版本号 ```
- 卸载已安装的指定版本的node
``` nvm uninstall 版本号 ```

## 1.3 cmd
- cd（change directory）切换目录
- md（make directory）新建目录
- rd（remove directory）删除非空目录
- dir（directory）查看目录中的条目
- ren（rename）重命名文件
- del（delete）删除文件
- cls（clear screen）清屏

## 1.4 path 环境变量
- path环境变量的作用是什么？
- 在Windows中配置path环境变量的方法是什么？  

## 1.5 REPL（Read Eval Print Loop）运行环境

- 作用：一般来说，可以用来做一些API的测试

- 进入REPL运行环境
  `在控制台中输入node命令直接敲回车`
  
- 退出REPL运行环境
  ` 1.Ctrl+c 两次 2..exit `

## 1.6 Node.js基础知识
- 如何让Node.js执行一个js文件
  `node 文件名`

-绝对路径和相对路径
  `./和../  相对路径 `
  `c:\foo\foo.js 绝对路径 `


## 1.6 global
- __dirname和__filename
  ` 关于这俩家伙，一般在读取文件的时候，最好使用绝对路径的方式，通过这俩家伙拼接 `
- setTimeout和clearTimeout
- setInterval和clearInterval
- console
  + time('timer')
  + timeEnd('timer')
  + 成对的出现

## 1.7 模块系统
- 什么是模块
  ``` 在CommonJS规范中，一个文件就是一个模块 ```
- 模块作用域
  ``` 普通方式定义的变量、函数、对象等都属于该模块内 ```
- require
  ``` 通过require的方式可以加载一个模块 ```
- exports
- module.exports
#2.模块系统

##2.1模块的种类

在Node.js中，模块分为两类：
一种是Node提供的模块，称为`核心模块`，
```
- 核心模块
  + fs
  + http
  + os
  + path
  + querystring
  + url
  ...
```

一种是用户编写的模块，称为`文件模块`，其中有一种`特殊的文件模块`我们称之为`包`

## 2.2 优先从缓存加载

```
commonjs---> 模块只在第一次加载的时候运行一次，模块会被存入缓存。
```

## 2.3 require参数解析
  ```
  核心模块是Node.js原生提供的加载核心模块的时候，
  不需要传入路径，因为Node.js已经将核心模块的文件代码
  编译到了二进制的可执行文件中了
  在加载的过程中，原生的核心模块的优先级是是最高的
  ```
![Alt text](https://raw.githubusercontent.com/KingNigel/node-notes/master/lesson2/pic/image1.jpg)
- ./或../开始的相对路径文件模块
  ``` 在加载一个自己编写的模块的时候，最好使用__dirname 和 你要加载的模块的文件名拼接 ```
- 以/开始的绝对路径文件模块
  ```
  * 在Linux或者MAc的操作系统中，/表示系统的根路径
  * 在Windows中，/表示当前文件模块所属的根磁盘路径
   不建议使用，了解
  ```
- 标识符中可以不包含扩展名
  + Node会按照`.js、.node、.json`的次序补足扩展名，依次尝试


  ```
  不包含扩展名的时候，Node.js会按照
    路径.js     以后自己在加载js文件模块的时候，就省略掉.js后缀就可以了
    路径.node   后缀为node的文件是c/c++写的一些扩展模块
    路径.json   如果是加载json文件模块，最好加上后缀.json，能稍微的提高一点加载的速度
      .json文件最终Node.js也是通过fs读文件的形式读取出来的，然后通过JSON.parse()转换成一个对象


    Node.js会通过同步阻塞的方式看这个路径是否存在
    依次尝试，直到找到为止，
    如果找不到，报错
  ```
 
[参考文献 朴灵大神的文章](http://www.infoq.com/cn/articles/nodejs-module-mechanism/)
# 3.包和npm
还有一种特殊的文件模块，其实就是包
- 问题：你开的一个功能模块，还是以文件的形式散列的，你给别人使用的时候很麻烦。
- 包的作用：在模块的基础上进一步组织JavaScript代码

## 3.1 包的组成
- 包结构
- 包描述文件package.json
  + 描述你的当前的包的一些相关的信息

## 3.2 包的加载机制
- module.paths属性，里面存储价值

## 3.2 package.json

包的描述文件

package.json文件内部就是一个JSON对象，该对象的每一个成员就是当前项目的一项设置，
比如name就是项目名称，version就是项目的版本号

在模块的加载机制中，有一个main属性是非常重要的，它很大意义上决定了包要曝露模块位置
