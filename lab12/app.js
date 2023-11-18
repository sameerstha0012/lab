const express = require('express');
const userRouter = require('./routes/users');
const productRouter = require('./routes/products');

const app = express();

app.use('/product', productRouter);
app.use('/user', userRouter);

app.use('/', (req, res, next) => {
    console.log('This always run!');
});

const PORT = 3000;
app.listen(PORT);