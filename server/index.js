import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js'
import  productRoutes from './routes/products.js'
dotenv.config();

const app = express();
app.use(cors())
app.use(express.json());


mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log('connect to DB');
    
}).catch(err =>{err});

app.listen(3000, () =>{
    console.log('application running om port 3000')
})

app.use('/api/auth', authRoutes);
app.use('/api/product', productRoutes);


// app.get('/test', (req, res) =>{
//     res.json({'msg' : 'testing api'})
// })