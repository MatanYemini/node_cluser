const rq = require('amqplib/callback_api');

function firstWorkerConsumer() {
  rq.connect('amqp://localhost', (err, conn) => {
    console.log('asdasds');
    if (err) process.exit();
    else {
      const queueName = 'FirstFibQueue';
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

module.exports = firstWorkerConsumer;
