const express = require('express')
const router = express.Router()
const Service = require('../models/service')

router.get('/', async(req, res) => {
    try{
        const service = await Service.find()
        res.json(service)
    }catch(err){
        res.send('Error' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const service = await Service.findById(req.params.id)
        res.json(service)
    }catch(err){
        res.send('Error' + err)
    }
})

router.patch('/:id', async(req, res) => {
    try{
        const service = await Service.findById(req.params.id)
        service.title = req.body.title
        const a1 = await service.save()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

router.post('/', async(req, res) => {
    const service = new Service({
        title: req.body.title,
        detail: req.body.detail,
    })
    try{
        const al = await service.save()
        res.json(al)
    }catch(err){
        res.send('Error')
    }
})

router.delete('/:id', async(req, res) => {
    try{
        const service = await Service.findById(req.params.id)
        const a1 = await service.remove()
        res.json(a1)
    }catch(err){
        res.send('Error' + err)
    }
})

module.exports = router