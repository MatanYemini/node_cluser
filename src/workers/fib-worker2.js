const rq = require('amqplib/callback_api');

function secondWorkerConsumer() {
  rq.connect('amqp://localhost', (err, conn) => {
    if (err) process.exit();
    else {
      const queueName = 'SecondFibQueue';
      conn.createChannel((err, channel) => {
        channel.assertQueue(queueName, { durable: false });
        channel.consume(
          queueName,
          (message) => {
            console.log(
              `QueueName: ${queueName} - ${message.content.toString()}`
            );
          },
          { noAck }
        );
      });
    }
  });
}

module.exports = secondWorkerConsumer;
