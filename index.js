 import express from 'express'
import dotenv from 'dotenv'
 import cors from 'cors'
 import AppRoutes from './src/routes/index.js'
 const PORT = 8000
 dotenv.config()
 const app = express()

 app.use (cors())
 app.use(express.json())
 app.get("/",(req,res)=>{
    res.status(200).send({message:"Welcome To Student Portal App"})
 })
 app.use(AppRoutes)

 app.listen(process.env.PORT,()=>console.log("app is listening port",+process.env.PORT))
