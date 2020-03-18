const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get('/add', (req, res) => {
    res.render('articles/add')
})


router.post('/', async (req, res) => {
    const article = new Article({
        title: req.body.title,
        description: req.body.description,
        markdown: req.body.markdown
    })
    try {
       await article.save()
       res.redirect(`/articles/${article.id}`)    
    } catch (error) {
        
    }
})

module.exports = router