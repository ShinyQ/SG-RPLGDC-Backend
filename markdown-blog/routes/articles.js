const express = require('express')
const router = express.Router()

router.get('/', (req,res) => {
    res.send('Articles Pages')
})

module.exports = router