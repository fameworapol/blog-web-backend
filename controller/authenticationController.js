const jwt_token = require('jsonwebtoken')
const { expressjwt: jwt } = require("express-jwt");

exports.login=(req,res)=>{
    const {username,password} = req.body
    if(password==process.env.PASSWORD){
        //ถ้า password ตรงกันจะให้ login เข้าสู่ระบบเเละสร้าง Token ขึ้นมา โดยกำหนดให้มีอายุ 1 วัน
        const token = jwt_token.sign({username},process.env.JWT_SECRET,{expiresIn:"1d"})
        //ส่ง token เเละ username ไปให้ผู้ใช้ถือไว้เพื่อยืนยันตัวตน
        return res.json({token,username})
    }else{
        return res.json({error:"รหัสผ่านไม่ถูกต้อง"})
    }
}

exports.requireLogin=jwt({
    secret:process.env.JWT_SECRET,
    algorithms:["HS256"],
    userProperty:"auth"
})
