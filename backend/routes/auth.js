const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model("User")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const requireLogin = require('../middleware/requireLogin')


router.get('/protected',requireLogin,(req,res)=>{
    res.send('dup dup')
})

router.get('/',(req,res)=>{
    res.send('Hello')
})

router.post('/signup',(req,res)=>{
    console.log(req.body)
    const {userName,email,password} = req.body
    if(!userName || !email || !password) return res.status(422).json({error:"please send all the parameters :D"})
    User.findOne({email:email})
    .then((savedUser)=>{
        if(savedUser) return res.status(422).json({error:"User already exist!"})
        bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user = new User({
                email,
                password:hashedpassword,
                userName
            })
    
            user.save()
            .then(user=>{
                res.json({message:"Saved successfully!"})
            })
            .catch(err=>{
                res.status(422).json({error:"Error took place"})
                console.log(err)
            })
        })
    })
    .catch(err=>{
        res.status(422).json({error:"Error took place"})
        console.log(err)
    })
})

router.post('/signin',(req,res)=>{
    const {email,password} = req.body
    if(!email || !password) return res.status(422).json({error:"please send all the parameters :D"})
    User.findOne({email:email})
    .then((savedUser)=>{
        if(!savedUser) return res.status(422).json({error:"User does not exist!"})
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token = jwt.sign({_id:savedUser._id},process.env.JWT_SECRET)
                const {_id,userName,email} = savedUser
                res.json({token,user:{_id,userName,email}})
            }
            else return res.status(422).json({error:'User does not exist!'})
        })
        .catch(err=>{
            res.status(422).json({error:"Error took place"})
            console.log(err)
        })
    })
    .catch(err=>{
        res.status(422).json({error:"Error took place"})
        console.log(err)
    })
})

module.exports = router