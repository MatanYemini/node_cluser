const rq = require('amqplib/callback_api');
const fibObj = require('../math-logic/fibonacci-series');

// I have used strings here just for example - this is not production ready at anyway!!!!!!
function sendFirstQueue(number) {
  rq.connect('amqp://localhost', (err, conn) => {
    if (err) process.exit();
    const queueName = 'FirstFibQueue';
    conn.createChannel((error, channel) => {
      if (error) {
        console.log(error);
        process.exit();
      } else {
        let fibNum = fibObj.calculateFibonacciValue(number);
        channel.assertQueue(queueName, { durable: false });
        channel.sendToQueue(queueName, Buffer.from(fibNum.toString()));
        console.log(`Queue name is: ${queueName}`);
      }
    });
  });
}

module.exports = sendFirstQueue;
