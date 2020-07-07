const express = require('express');
const jphRoute = require('../routes/jph');
const PORT = process.env.PORT || 3000;

const app = express();

app.use('/jph', jphRoute);

app.listen(PORT, () => console.log(`server is running on PORT: ${PORT}`));
