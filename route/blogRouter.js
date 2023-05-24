const express = require('express')
const {create, getAllBlog,getBlog,remove,update} = require('../controller/blogController')
const { requireLogin } = require('../controller/authenticationController')

//Create router
const router = express.Router()

//สร้าง Route
// router.post('/blog',requireLogin,create)
router.post('/blog',create)
router.get('/allBlog', getAllBlog)
router.get('/singleBlog/:slug',getBlog)
// router.delete('/singleBlog/:slug',requireLogin,remove)
router.delete('/singleBlog/:slug',remove)
// router.put('/singleBlog/:slug',requireLogin,update)
router.put('/singleBlog/:slug',update)
//export router 
module.exports = router 