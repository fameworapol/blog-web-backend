const { login,requireLogin } = require("../controller/authenticationController")

const express = require('express')
const router = express.Router()

router.post('/login',login)


module.exports=router