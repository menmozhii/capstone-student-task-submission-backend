import mongoose from "mongoose";
const submissionSchema = new mongoose.Schema({

    student:{
        type:String,
required:[true,'username required']
    },
    studentId:{
        type:String,
        required:[true,'stud_id required']

    },
    task:{
       
        title:{
            type:String,
            required:[true,"title is required"]
        },
        subTitle:{
            type:String,
            required:[true,"subtitle required"]
        },
        submittedDate:{
            type:Date,
            default:new Date()
        },
        mark:{
            type:String,
            default:'Not validated'
        },
        status:{
            type:String,
            default:'Not Validated'
        },
        comments:{
            type:String,
            default:""
        },
        
        url:{
            frontendSourcecode:{
                type:String,
                default:''
            },
            frontendDeployedUrl:{
                type:String,
                default:''
            },
            backendSourcecode:{
                type:String,
                default:''
            },
            backendDeployedUrl:{
                type:String,
                default:''
            },
            

        }
        
    }
    
    
        
    
},{
    
    
    collection:'submission',
    versionKey:false
})

const submissionModel = mongoose.model('submission',submissionSchema)

export  default submissionModel