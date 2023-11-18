const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,'..','views','products','index.html'));
})

router.post('/', (req, res,next) => {
    res.send(`${req.body.name}, ${req.body.price}`);
});

module.exports = router;