//REQUIREMENTS
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

//ALL_EXPORTS
const { MONGOURI } = require('./keys')

//
const app = express()

//ALL_DIRECT_IMPORTS
require('./models/user')
require('./models/post')

app.use(cors())
app.use(express.json())

app.use(require('./routes/auth'))
app.use(require('./routes/posts'))

//PORT
const PORT = 8888

//CONNECTIONS
mongoose.connect(MONGOURI,{ 
    useNewUrlParser:true,
    useUnifiedTopology: true,
 })
mongoose.connection.on('connected',()=>{
    console.log('connection made')
})

mongoose.connection.on('error',(err)=>{
    console.log('Error while making connection! ',err)
})





//LISTEN
app.listen(PORT,()=>{
    console.log("Listening server at Port:",PORT)
})


/*
//ALL dumps
const custMiddleware = (rep,res,next)=>{
    console.log('Middleware running')
    next()
}

app.use(custMiddleware)

app.get('/about',(rep,res)=>{
    res.send('<a href=/>about</a>')
})
app.get('/',(rep,res)=>{
    res.send('<a href=about>home</a>')
})
//mongodb+srv://yash:<password>@cluster0.pvcig.mongodb.net/<dbname>?retryWrites=true&w=majority
*/