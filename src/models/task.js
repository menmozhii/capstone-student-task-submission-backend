import mongoose from './index.js'



//create  schema for task
let taskSchema = new mongoose.Schema({
title:{
    type:String,
    required:[true,"title is required"]
},
subTitle:{
    type:String,
    required:[true,"subtitle required"]
},
referenceLinks:{
    type:String,
    required:[true,"reference link"]
},
createdAt:{
    type:Date,
    default:new Date()
},
deadline:{
    type:Date,
    default:function() {
        // Calculate deadline as 7 days from current date
        const deadline = new Date();
        deadline.setDate(deadline.getDate() + 7);
        return deadline;
    }
}
    
    
},{
    collection:'tasks',
    versionKey:false
})

//create model
const taskModel = mongoose.model('tasks',taskSchema)

export default taskModel