// 删除文件
fs.unlink('foo.txt', function(){
    console.log('success') ;
}) ;
//unlink的同步方法
fs.unlinkSync('foo.txt');
// 修改文件名称
fs.rename('bb.txt','bigbear.txt',function(err){
console.log('rename success') ;
});
// 查看文件状态
fs.stat('bb.txt', function(err, stat){
 console.log(stat);
});
// 判断文件是否存在
fs.exists('bb.txt', function( exists ){
   console.log( exists ) ;
}) ;
//读文件
fs.exists('bb.txt', function( exists ){
   console.log( exists ) ;
}) ;
