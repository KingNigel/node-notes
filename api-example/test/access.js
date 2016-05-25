const fs=require("fs");

console.log(fs.F_OK);//0
console.log(fs.X_OK);//1
console.log(fs.W_OK);//2
console.log(fs.R_OK);//4

//console.dir(fs);

// fs.access('./fs/README.md', fs.R_OK | fs.W_OK, (err) => {
//   console.log(err ? 'no access!' : 'can read/write');
// });
// fs.access('../fs/README.md', (err) => {
//   console.log(err ? 'no access!' : 'can read/write');
// });
fs.access('./foo.txt',4, (err) => {
  console.log(err ? 'no access!' : 'can read/write');
});