const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();
const Blogs = require('../models/blogSchema');

//middleware
const getBlog = async(req,res,next) => {
    let blog ;
    try{
        blog = await Blogs.findById(req.params.id);
        if(blog === null){
            return res.status(404).json({message: "No Blog found"});
        }
    }catch(e){
        return res.status(500).json({message : e.message})
    }
    res.blog = blog;
    next();
}


// get all
router.get('/',async(req,res)=>{
    try{
        const blogs = await Blogs.find({});
        res.send(blogs);
    }catch(e){
        res.status(500).json({message : e.message});
    }
    
})
// get one
router.get('/:id',getBlog,(req,res)=>{
    res.send(res.blog);
})
// create one
router.post('/',async (req,res)=>{
    const blog = new Blogs({
        title: req.body.title,
        image: req.body.image,
        description: req.body.description
    })
    try{
        const newblog = await blog.save();
        res.status(201).json(newblog);
    }catch(e){
        res.status(400).json(e.message);
    }
})
// update one
router.put('/:id',getBlog,(req,res)=>{
    res.blog.title = req.body.title ? req.body.title : res.blog.title ;
    res.blog.image = req.body.image ? req.body.title : res.blog.image ;
    res.blog.description = req.body.description ? req.body.description : res.blog.description ;
    res.send(res.blog)
})
// delete one
router.delete(':/id',getBlog , (req,res)=>{
    console.log(res.blog);
    // try{
    //     await res.blog.remove();
    //     res.json({message:"Deleted"})
    // }catch(e){
    //     res.status(500).json({message : e.message})
    // }
})



module.exports = router;