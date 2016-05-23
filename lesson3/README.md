#node-lesson3
#1.复习
###1.1模块的分类

```模块分为文件模块、核心模块，其中包是一种特殊的文件模块 ```

###1.2require

- require的实现原理

```把代码从文件中读出来，用匿名函数的方式头尾包装，返回modules.exports对象，曝露出想要曝露出来的属性、方法、对象。
   补充了exports是指向modules.exports的一个指针，exports能做的，modules.exports都能做的。 
```

- require查找文件、包原理

```.js、.node、.json依次帮你补足，
   第二次加载的时候优先从缓存查找读取，
   node_modules中没有的，从父文件夹中查找，如果没有，直到根目录为止
```
###1.3包
```
   package.json是包的说明书，
   dependencies当前包所依赖的包：>、<、>=、<=、~、*、" "、X、^

```
###1.4npm
```
  npm init  创建package.json文件
  npm install  将package.json中的文件依赖的包从网上下载到本地
  npm install -save 包名  将包下载下来并且加载到dependencies中去
  npm install -save-dev 包名 将包下载下来并且加载到devDependencies中去
  npm install -g 包名 全局安装
  npm docs 包名 查看包的文档
  
```
#2.i/o
###2.1什么是i/o？

```

   io input、output 输入输出，电脑的输入输出，例如音频录音表示声音输入、听音乐是声音的输出
   网络上的传输全部是在传字符串，i/o在服务器上可以理解为读写操作。
```
###2.2什么是并发？
```
   一个时间段中有几个程序都处于已启动运行到运行完毕之间。
```
###2.3什么是进程？
```
每一个正在运行的应用程序都被称之为进程
每一个应用程序都至少有一个进程
进程是用来给应用程序体用一个执行的环境
给应用程序分配资源的一个单位

```
###2.4什么是线程？
```
用来执行应用程序中的代码
在一个进程内部，有很多的线程
```

###2.5同步、异步有什么不同？
```

```
###2.6node的事件驱动模型？
![Alt text](https://github.com/KingNigel/node-notes/blob/master/lesson3/pic/event-loop.png)

###2.7多线程的优点和缺点？
```

```
