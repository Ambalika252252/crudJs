const mongoose = require('mongoose')

const newsSchema = new mongoose.Schema({
    
    title: {
        type: String,
        required: true,
    },
    detail: {
        type: String,
        required: true,
    },
    img: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('News', newsSchema)