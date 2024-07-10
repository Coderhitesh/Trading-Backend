const express = require('express')
const { createBlog, getAllBlog, deleteBlog, updateBlog, singleBlog } = require('../Controllers/Blog.controller')
const router = express.Router()

router.post('/createBlog' , createBlog)
router.get('/getBlog' , getAllBlog)
router.get('/getSingleBlog/:id' , singleBlog)
router.delete('/deleteBlog/:id',deleteBlog)
router.post('/updateBlog/:id', updateBlog);

module.exports = router