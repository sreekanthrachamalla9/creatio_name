const express = require('express')
const router = express.Router()

 

const arth = require('./subtract')
router.use('/arth',arth)

const trig = require('./trignometry')
router.use('/trig',trig)

module.exports = router

