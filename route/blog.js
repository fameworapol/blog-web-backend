const express = require('express')
const {create, getAllBlog,getSingleBlog,remove} = require('../controller/blogController')

//Create router
const router = express.Router()

//สร้าง Route
router.post('/blog',create)
router.get('/allBlog', getAllBlog)
router.get('/singleBlog/:slug',getSingleBlog)
router.delete('/singleBlog/:slug',remove)
//export router 
module.exports = router