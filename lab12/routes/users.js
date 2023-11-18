const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'users', 'index.html'));
})

router.post('/', (req, res,next) => {
    res.send(`${req.body.name}, ${req.body.age}`);
});

module.exports = router;