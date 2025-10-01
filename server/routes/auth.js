import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', async (req, res) =>{
    const {name, email, password} = req.body;
    const hashed = await bcrypt.hash(password, 10)
    const newuser = new User({name, email,password: hashed})
    await newuser.save();
    res.status(201).send('user register')
})
//Login

router.post('/login', async (req, res)=>{
    const {email, password} =req.body;
    const newuser = await User.findOne({email})
    if (!newuser || !await bcrypt.compare(password, newuser.password)) {
        res.status(401).send('Invalid credential')
        
    }
    const token = jwt.sign({userid: newuser.id}, process.env.JWT_SECRET, {expiresIn: '1h'})
    res.status(200).json({"msg":"user logged in", token})
})
export default router;
