import userModel from '../models/user.js'
import Auth from '../utils/auth.js'
import dotenv from 'dotenv'
dotenv.config()
// getAllUser
const getAllUser = async(req,res)=>{
    try{
        let users = await userModel.find({},{password:0})
    res.status(200).send({
        message:"successful",users
    })
    }catch(error)
    {
    res.status(500).send
    ({
    message:"Internal servor error",
    error:error.message
    })}}

// sign up
const signUp = async(req,res)=>{
try{
   req.body.password = await Auth.hashPassword(req.body.password)
   let  user = await userModel.create(req.body)
   res.status(200).send({
    message:"signup successful",user
   }) 


}catch(error)
{
res.status(500).send
({
message:"Internal servor error",
error:error.message
})}}

// login
const login = async(req,res)=>{
    try {
        let user = await userModel.findOne({email:req.body.email})
        if(user)
        {
            if(await Auth.hashCompare(req.body.password,user.password))
            {
                let token = await Auth.createToken({
                    name:user.name,
                    email:user.email,
                    id:user._id,
                    role:user.role,
                })

                res.status(200).send({
                    message:"Login Successfull",
                    name:user.name,
                    role:user.role,
                    id:user._id,
                    token
                })
            }
            else
            {
                res.status(400).send({
                    message:"Incorect Password"
                })
            }
        }
        else
        {
            res.status(400).send({
                message:`User with ${req.body.email} does not exists`
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}


    // getUserById

    const getUserById = async(req,res)=>{
        try{
const  user = await userModel.findOne({_id:req.params.id},{password:0})
res.status(200).send({
    message:"data fetched successfull",user
})
        
        }catch(error)
        {
        req.status(500).send
        ({
        message:"Internal servor error",
        error:error.message
        })}}

        // edit user//
        const editUser =  async(req,res)=>{
            try {
                let data = req.body
                const user = await userModel.findByIdAndUpdate({_id:req.params.id},data, { new: true })
                res.status(200).send({
                    message:"data updated successfully",user
                })
            } catch (error) {
                res.status(500).send({
                    message:error.message || "internal server error"
                    
                    
                })
            }
        }
        //delete user // 
        
        const deleteUser =  async(req,res)=>{
            try {
              
                const user = await userModel.findByIdAndDelete({_id:req.params.id})
                res.status(200).send({
                    message:"data deleted successfully",user
                })
            } catch (error) {
                res.status(500).send({
                    message:error.message || "internal server error"
                    
                    
                })
            }
        }
        export default {
            getAllUser,
            signUp,
            login,
            getUserById,
            editUser,
            deleteUser

        }


