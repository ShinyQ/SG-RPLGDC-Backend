const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()

app.set('view engine','ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res)=> {
    const articles = [
        {
            title: 'Article 1',
            createdAt: new Date(),
            description: 'This Is Article 1'
        },
        {
            title: 'Article 2',
            createdAt: new Date(),
            description: 'This Is Article 2'
        },
        {
            title: 'Article 3',
            createdAt: new Date(),
            description: 'This Is Article 3'
        },
    ]

    res.render('index', {articles: articles})
})

app.listen(5000)

