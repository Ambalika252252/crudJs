const express = require('express')
const router = express.Router()
const News = require('../models/news')

router.get('/', async(req, res) => {
    try{
        const news = await News.find()
        res.json(news)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const news = await News.findById(req.params.id)
        res.json(news)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const news = await News.findById(req.params.id)
        news.title = req.body.title
        const a1 = await news.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const news = new News({
        title: req.body.title,
        detail: req.body.detail,
        img: req.body.img,
    })
    try{
        const al = await news.save()
        res.json(al)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const news = await News.findById(req.params.id)
        const a1 = await news.remove()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router