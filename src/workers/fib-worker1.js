const fibObj = require('../math-logic/fibonacci-series');

process.on('message', (number) => {
  let fibNum = fibObj.calculateFibonacciValue(number);
  console.log(`Fib series 1 PID is ${process.pid}`);
  process.send(fibNum);
});
