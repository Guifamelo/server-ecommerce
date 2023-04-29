const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')


require('dotenv').config()  

//rotes

const routes = require('./routes')



const app = express()

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology:true,
    useNewUrlParser: true    
}, console.log('ok-Conectado com o DB'))

app.use(express.json())



app.use(routes)

app.use(cors())

app.listen(3333, () => console.log('Server running'))