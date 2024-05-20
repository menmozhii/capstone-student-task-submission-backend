import taskModel from '../models/task.js'
import Auth from '../utils/auth.js'
import dotenv from 'dotenv'
dotenv.config()

// create getall task //

const  getAllTask = async (req,res)=>{
    try {
        const task = await taskModel.find({})
        res.status(200).send({
            message:"task created successfully",task
        })
        
    } catch (error) {
res.status(500).send(
    {
        message:error.message || "internal server error "
    }
)
        
    }
}

// get task by id //
const  getTaskById = async (req,res)=>{
    try {
        const task = await taskModel.find({_id:req.params.id})
        res.status(200).send({
            message:"task created successfully",task
        })
        
    } catch (error) {
res.status(500).send(
    {
        message:error.message || "internal server error "
    }
)
        
    }
}
// create task 

const createTask  = async(req,res)=>{
    const repeatedTask =await taskModel.findOne({title:req.body.title})
    try {
        if(repeatedTask){
            res.status(409).send({
                message:"Task  already Exist"
            })

    }
    else{
        const task = await taskModel.create(req.body)
        res.status(201).send({
            message:"task created successfully",task
        })
    }

        
    } catch (error) {
        res.status(500).send({
            message: error.message || 'internal server error'
        })
        
    }
}
// edit task //

const editTask  = async(req,res)=>{
    try {
   let data = req.body 
const task = await taskModel.findByIdAndUpdate({_id:req.params.id},data, { new: true })
res.status(200).send({
    message:"task created successfully",task
})
        
    } catch (error) {
        res.status(500).send({
            message: error.message || 'internal server error'
        })
        
    }
}
// deleteTask

const deleteTask  = async(req,res)=>{
    try {
 
const task = await taskModel.findByIdAndDelete({_id:req.params.id})
res.status(200).send({
    message:"task delete successfully",task
})
        
    } catch (error) {
        res.status(500).send({
            message: error.message || 'internal server error'
        })
        
    }
}


export default {
    getAllTask,
    getTaskById,
    createTask,
    editTask,
    deleteTask

    
}