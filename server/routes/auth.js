import express from 'express'
import bcrypt from 'bcryptjs'
import User from '../models/user.js'
import jwt from 'jsonwebtoken'

const router = express.Router()

router.get('/user/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (!user) {
      return res.status(404).json({ msg: "User not found" })
    }
    res.json(user)  // frontend ko puri detail bhej do
  } catch (error) {
    res.status(500).json({ msg: "Server error" })
  }
})


router.post('/register', async (req, res) =>{
    const {name, email, password} = req.body;
    const hashed = await bcrypt.hash(password, 10)
    const newuser = new User({name, email,password: hashed})
    await newuser.save();
    res.status(201).send('user register')
})


//update
router.put('/updtae', async (req,res)=>{
    try {
        const {name,email,password}=req.body;

        let updtaeddata = {name, email}
        if (password) {
            const hashed= await bcrypt.hash(password, 10)
            updtaeduser.password = hashed;
        }

        const updtateduser = await User.findByIdAndUpdate(req.params.id,
            updtaeddata,
            {new:true}
        );

 
    if (!updateduser) {
      return res.status(404).send("User not found");
    }

    res.status(200).json({ msg: "User updated successfully", updateduser });
  } catch (err) {
    res.status(500).send("Server error");
  }
})
//Login

router.post('/login', async (req, res)=>{
    const {email, password} =req.body;
    const newuser = await User.findOne({email})
    if (!newuser || !await bcrypt.compare(password, newuser.password)) {
        res.status(401).send('Invalid credential')
        
    }
    const token = jwt.sign({userid: newuser.id, isAdmin: newuser.isAdmin}, process.env.JWT_SECRET, {expiresIn: '1h'})
   // res.status(200).json({"msg":"user logged in", token})
   res.json({token, newuser:{
    id: newuser._id,
    name: newuser.name,
    email: newuser.email,
    isAdmin: newuser.isAdmin
   }})
})
export default router;
