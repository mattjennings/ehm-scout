const router = require('express').Router()

router.get('/', (req, res) => res.json('API v1'))

router.get('/translate-scout', require('./translate-scout'))

module.exports = router
