const express = require('express')
const router = express.Router()
const Gallery = require('../models/gallery')

router.get('/', async(req, res) => {
    try{
        const gallery = await Gallery.find()
        res.json(gallery)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const gallery = await Gallery.findById(req.params.id)
        res.json(gallery)
    }catch(err){
        res.send('Error' + err)
    }
})


router.post('/', async(req, res) => {
    const gallery = new Gallery({
        img: req.body.img,
    })
    try{
        const al = await gallery.save()
        res.json(al)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const gallery = await Gallery.findById(req.params.id)
        const a1 = await gallery.remove()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router