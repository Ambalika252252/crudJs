const mongoose = require('mongoose')

const gallerySchema = new mongoose.Schema({
    
    img: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Gallery', gallerySchema)