const express = require('express');
const redis = require('redis');
const axios = require('axios');

const keys = require('../middlewares/keys');
const redisMiddleware = require('../middlewares/redis');

const router = express.Router();

router.use(redisMiddleware);
const client = redis.createClient({
  host: keys.redisHost,
  port: keys.redisPort,
});

router.get('/posts', async (req, res) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(`Fetched data using process ID: ${process.pid}`);
    client.set('posts', JSON.stringify(res.data));
    res.send(res.data);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

router.get('/comments', async (req, res) => {
  try {
    const res = await axios.get(
      'https://jsonplaceholder.typicode.com/comments'
    );
    console.log(`Fetched data using process ID: ${process.pid}`);
    client.set('posts', JSON.stringify(res.data));
    res.send(res.data);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

router.get('/users', async (req, res) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    console.log(`Fetched data using process ID: ${process.pid}`);
    client.set('posts', JSON.stringify(res.data));
    res.send(res.data);
  } catch (error) {
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;
