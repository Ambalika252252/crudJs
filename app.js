const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/AlienDBex'
const cors = require('cors');

// npx nodemon run start
const app = express()

mongoose.connect(url, { useNewUrlParser: true })
const con = mongoose.connection

con.on('open', () => {
   console.log('connected...')
})

app.use(express.json())
app.use(cors());

const authRouter  = require('./routes/auth')
app.use('/auth', authRouter )

const newsRouter = require('./routes/news')
app.use('/news', newsRouter)

const sliderRouter = require('./routes/slider')
app.use('/slider', sliderRouter)

const galleryRouter = require('./routes/gallery')
app.use('/gallery', galleryRouter)

const serviceRouter = require('./routes/service')
app.use('/service', serviceRouter)

app.listen(9000, () => {
   console.log('Server Started');
})