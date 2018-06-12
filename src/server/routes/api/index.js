const router = require('express').Router()

router.get('/', (req, res) => res.json('API v1'))

const formidable = require('express-formidable')

router.post('/translate-scout', formidable(), require('./translate-scout'))

module.exports = router
