module.exports = {
  apps: [
    {
      name: 'Express App',
      script: './src/server.js',
      instances: '2',
      autorestart: false,
      watch: true,
      max_memory_restart: '1G',
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
    {
      name: 'FirstWorker',
      script: './src/workers/fib-worker1.js',
      instances: 1,
      env: {
        NODE_ENV='development',
      }
    },
    {
      name: 'SecondWorker',
      script: './src/workers/fib-worker2.js',
      instances: 1,
      env: {
        NODE_ENV='development',
      }
    },
  ],
};
