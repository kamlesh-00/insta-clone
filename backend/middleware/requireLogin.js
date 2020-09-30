const jwt = require('jsonwebtoken')
const  mongoose = require('mongoose')
const User = mongoose.model("User")

module.exports = (req,res,next)=>{
    const { authorization } = req.headers
    if(!authorization){
        return res.status(401).json({error:"you must be logged in."})
    }
    console.log(authorization)
    const token = authorization.replace("Bearer ","")
    jwt.verify(token,process.env.JWT_SECRET,(err,playload)=>{
        if(err) return res.status(401).json({error:"you are must be logged in."})
        const { _id } = playload
        User.findById(_id)
        .then(userdata=>{
            req.user = userdata
            next()
        })
    })
    
}