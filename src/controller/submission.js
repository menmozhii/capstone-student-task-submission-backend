import { get } from 'mongoose'
import submissionModel from '../models/submission.js'
import Auth from '../utils/auth.js'
import dotenv from 'dotenv'
dotenv.config()


// get submission //
const getSubmission = async(req,res)=>{
    try {
        const submission = await submissionModel.find({})
        res.status(200).send({
            message:"submission data fetched successfully",submission
        })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || 'internal server error'
        })
        
    }
    
      
}
// getSubmission by id

const getSubmissionById = async(req,res)=>{
    try {

        const submission = await submissionModel.findById({_id:req.params.id})
        res.status(200).send({
            message:"submission data fetched successfully",submission
        })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || 'internal server error'
        })
        
    }
    
      
}

//  create submission
const createSubmission = async(req,res)=>{
    try {
        let data = req.body
     
        const submission = await submissionModel.create(data)
        res.status(201).send({
            message:"submission data created successfully",submission
        })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || 'internal server error'
        })
        
    }
    
      
}
// editSubmission 

    const editSubmission = async(req,res)=>{
        let data = req.body 
        try {
            const submission  = await submissionModel.findByIdAndUpdate({_id:req.params.id},data ,{new :true})
            res.status(200).send({
                message:"submission edited successfully",submission
            })
            
        } catch (error) {
            res.status(500).send({
                message:error.message || 'internal server error'
            })
            
        }
        
       
    }



// deleteSubmission 
const deleteSubmission = async(req,res)=>{
    try {
      
        
        const submission = await submissionModel.findByIdAndDelete({_id:req.params.id})
        res.status(200).send({
            message:"submission deleted successfully",submission
        })
        
    } catch (error) {
        res.status(500).send({
            message:error.message || 'internal server error'
        })
        
    }
    
      
}

// get submission by studentid
 
// const getSubmissionByStudentId = async(req,res)=>{
//     try {
//         const submission = await submissionModel.find()
        
//     } catch (error) {
        
//     }
// }




export default {
    getSubmission,
    getSubmissionById,
    createSubmission,
    deleteSubmission,
    editSubmission
}