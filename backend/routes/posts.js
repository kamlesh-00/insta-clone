const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Posts = mongoose.model("Posts")
const requireLogin = require('../middleware/requireLogin')

router.get('/allpost',(req,res)=>{
    Posts.find()
    .populate("postedBy","_id userName")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        res.status(422).json({error:"Error took place"})
        console.log(err)
    })
})
router.get('/mypost',requireLogin,(req,res)=>{
    Posts.find({postedBy:req.user._id})
    .populate("postedBy","_id userName")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        res.status(422).json({error:"Error took place"})
        console.log(err)
    })
})

router.post('/create',requireLogin,(req,res)=>{
    const { title, body, photos } = req.body
    console.log(title,body,photos)
    if(!title || !body || !photos) return res.status(422).json({error:"Please add all the fields"})
    req.user.password = undefined
    const posts = new Posts({
        title:title,
        body:body,
        photos:photos,
        postedBy:req.user
    })
    posts.save()
    .then(userdata=>{
        res.json({message:'ok',result:userdata})
    })
    .catch(err=>{
        res.status(422).json({error:"Error took place"})
        console.log(err)
    })
})

module.exports = router