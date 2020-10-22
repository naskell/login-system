const express = require('express');
const router = express.Router();
const passsport = require('passport');

router.get('/login', (req, res, next) => {
    const messages = req.flash();
    res.render('login', { messages })
})

