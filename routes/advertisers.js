const express = require('express')
const router = express.Router()
const Advertiser = require('../models/advertiser')
const Publisher = require('../models/publisher')

// All Advertisers Route
router.get('/', async (req, res) => {
    res.render('advertisers/index', {
        advertisers: advertisers
    })
})

module.exports = router