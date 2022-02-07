const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const verifyToken = require('../middleware/auth')

// @route POST api/posts
// @desc Create post
// @access Private
router.get('/', verifyToken, async(req, res) => {
  try {
    const posts = await Post
      .find({ user: req.userId })
      .populate('user', 
      [
        'username'
      ])
      res.json({ success: true, posts })
  } catch (err) {
    console.log(err)
    res
      .status(500)
      .json({ 
        success: false, 
        message: 'Internal server error' 
      })
  }
})

// @route POST api/posts
// @desc Create post
// @access Private
router.post('/', verifyToken, async(req, res) => {
  const { title, description, status, level } = req.body
  
  // Simple validation
  if ( !title ) {
    return res.status(400).json({ success: false, message: 'Title is required' })
  }
  try {
    const newPost = new Post({ 
      title, 
      description, 
      status, 
      level, 
      user: req.userId
    }) 
    
    await newPost.save()
    res.json({ success: true, message: 'todo added', post: newPost })

  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route PUT api/posts
// @desc Create put
// @access Private
router.put('/:id', verifyToken, async(req, res) => {
  const { title, description, status, level } = req.body
  // Simple validation
  if ( !title ) {
    return res.status(400).json({ success: false, message: 'Title is required' })
  }
  try {
    let updatedPost = { 
      title, 
      description, 
      status, 
      level, 
      user: req.userId
    }
    const postUpdateCondition = { _id: req.params.id, user: req.userId }
    updatedPost = await Post.findOneAndUpdate(postUpdateCondition, updatedPost, {new: true})
    res.json({ success: true, message: 'todo edited', post: updatedPost })
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

// @route DELETE api/posts
// @desc Create delete
// @access Private
router.delete('/:id', verifyToken, async(req, res) => {
  try {
    const postDeleteCondition = { _id: req.params.id }
    let deletePost = await Post.findOneAndDelete(postDeleteCondition)
    res.json({ success: true, message: 'todo edited', post: deletePost })
  } catch (err) {
    console.log(err)
    res.status(500).json({
      success: false,
      message: "Internal server error"
    })
  }
})

module.exports = router