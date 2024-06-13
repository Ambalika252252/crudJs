const express = require('express')
const router = express.Router()
const Slider = require('../models/slider')

router.get('/', async(req, res) => {
    try{
        const slider = await Slider.find()
        res.json(slider)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const slider = await Slider.findById(req.params.id)
        res.json(slider)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const slider = await Slider.findById(req.params.id)
        slider.title = req.body.title
        const a1 = await slider.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const slider = new Slider({
        title: req.body.title,
        img: req.body.img,
    })
    try{
        const al = await slider.save()
        res.json(al)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const slider = await Slider.findById(req.params.id)
        const a1 = await slider.remove()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router