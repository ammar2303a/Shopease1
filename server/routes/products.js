import express from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import product from '../models/product.js'

const router = express.Router()

router.post('/create', async (req, res) =>{
    const {name, price, image, description} = req.body;
    const newproduct = new product({name,price, image, description })
    await newproduct.save();
    res.status(201).send('Product inserted successfully')
})

router.get('/', async (req, res)=>{
    const pro = await product.findOne()
    res.json(pro)
})

export default router