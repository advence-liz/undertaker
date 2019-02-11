var fs = require('fs');
var Undertaker = require('../index');

var taker = new Undertaker();

taker.task('task1', function(cb) {
  // do things
  console.log('task1');
  cb(); // when everything is done
});
// var task1 = taker._getTask('task1');
// task1.unwrap()(); //这样直接执行 task1中的cb没有定义
taker.series('task1', function taskFn(cb) {
  console.log('taskFn');
  cb();
})(function(done) {
  debugger;
}); // 这样执行 task1是异步执行会先将同步的code 运行完才会执行 task1中的code

// taker.task('task2', function() {
//   return fs
//     .createReadStream('./myFile.js')
//     .pipe(fs.createWriteStream('./myFile.copy.js'));
// });

// taker.task('task3', function() {
//   return new Promise(function(resolve, reject) {
//     // do things

//     resolve(); // when everything is done
//   });
// });

// taker.task('combined', taker.series('task1', 'task2'));

// taker.task('all', taker.parallel('combined', 'task3'));
