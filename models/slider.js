const mongoose = require('mongoose')

const sliderSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Slider', sliderSchema)