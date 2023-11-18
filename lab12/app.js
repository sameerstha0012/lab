const express = require('express');
const path = require('path');

const userRouter = require('./routes/users');
const productRouter = require('./routes/products');
const defaultRouter = require('./routes/index');

const app = express();
app.use(express.urlencoded());

app.use('/css', express.static(path.join(__dirname, 'public', 'resources', 'css')));
app.use('/js', express.static(path.join(__dirname, 'public', 'resources', 'js')));

app.use('/products', productRouter);
app.use('/users', userRouter);
app.get('/', defaultRouter);

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use((err, req, res, next) => {
    res.status(500).send('Internal Server Error!');
});

const PORT = 3000;
app.listen(PORT);