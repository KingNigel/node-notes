'use strict'
const fs = require('fs');
fs.stat('foo.txt', (err, stats)=>{
 if(err){
  throw err;
 }else{
  console.log(stats);
 }
})