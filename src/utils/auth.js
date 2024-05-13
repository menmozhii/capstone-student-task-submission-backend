import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()

let hashPassword = async(password)=>{
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)
    return hash
}

let hashCompare = async(password,hash)=>{

    return await bcrypt.compare(password,hash)
}

const createToken = async(payload)=>{
    let token = await jwt.sign(payload,process.env.JWT_SECRET,{
       expiresIn:process.env.JWT_EXPIRE
    })
    return token
}

const decodeToken = async(token)=>{
   return await jwt.decode(token)
}

export default{
    hashPassword,
    hashCompare,
    createToken,
    decodeToken
}