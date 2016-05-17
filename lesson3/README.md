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


