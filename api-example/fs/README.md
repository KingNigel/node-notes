#基于 Node.js v6.2.0 的fs API
###fs.unlink(path, callback)
```
 删除文件
```
``` javascript
fs.unlink('foo.txt', () =>{
    console.log('success') ;
}) ;
```
###fs.unlinkSync(path)

```
fs.unlink的同步方法
```

```javascript
fs.unlinkSync('foo.txt');
```

###fs.rename(oldPath, newPath, callback)

``` 
修改文件名称
```
```javascript
fs.rename('/tmp/foo.text', '/tmp/bar.text', (err) => {
  if (err) throw err;
  console.log('renamed complete');
});
```

###fs.renameSync(oldPath, newPath)
``` 
fs.rename的同步方法
```
```javascript
fs.renameSync('/tmp/foo.text', '/tmp/bar.text');
```

###fs.stat(path, callback)
```
查看文件状态
```
```javascript
fs.stat('foo.txt', function(err, stat){
    console.log(stat);
});
```

###fs.statSync(path)
```
fs.stat的同步方法
```
```javascript
fs.statSync('foo.txt');
```

###fs.exists(path, callback)
```
已经弃用，用 fs.stat() 或 fs.access()代替
```
###fs.existsSync(path)
```
已经弃用，用 fs.statSync() 或 fs.accessSync()代替
```
