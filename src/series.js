var Undertaker = require('../index');
var { exec } = require('child_process');

var taker = new Undertaker();

function fn1(done) {
  return exec('sleep 2; date ', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    // done(null, stdout);  没起效
    console.log(stdout);
  });
  //   console.log('start',1);
  //   return exec('sleep 2');
}

function fn2(done) {
  console.log('start', 2);
  setTimeout(function() {
    done(null, 2);
  }, 2000);
}

function fn3(done) {
  return new Promise(function(resolve) {
    setTimeout(function() {
      resolve(3);
    }, 2000);
  });
}

taker.series(fn1, fn2, fn3)(function(err, results) {
  //   expect(results).toEqual([1, 2, 3]);
  //   done(err);
  console.log(results);
});
