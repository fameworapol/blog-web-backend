const express = require('express')
const {create,tests, getAllBlog} = require('../controller/blogController')
//Create router
const router = express.Router()

//สร้าง Route
router.post('/blog',create)
router.get('/allBlog', getAllBlog)
//export router 
module.exports = router