const express = require('express');
const fabObj = require('./math-logic/fibonacci-series');
const cluster = require('cluster');
const totalCpus = require('os').cpus().length;

if (cluster.isMaster) {
  for (let i = 0; i < totalCpus; i++) {
    cluster.fork();
  }
  cluster.on('online', (worker) => {
    console.log(
      `Worker Id is ${worker.id} and the PID is: ${worker.process.pid}`
    );
  });
  cluster.on('exit', (worker) => {
    console.log(
      `Worker Id ${worker.id} with PID ${worker.process.pid} is offline`
    );
  });
} else {
  const app = express();
  app.get('/', (req, res) => {
    let number = fabObj.calculateFibonacciValue(
      Number.parseInt(req.query.number)
    );
    res.send(`<h1>${number}</h1>`);
  });

  app.listen(3000, () => console.log('Express server is running on port 3000'));
}
