import Task from '../Models/taskModel.js'

export const createTask=async(req,res)=>{
    console.log(req.body)
const {title,description,priority}=req.body;
const task=await Task.create({
    title:title,
    description,
    priority
})

res.status(200).json({
    success:true,
    message:"task created successfully"
})


}

export const getTasks=async(req,res)=>{

const tasks=await Task.find();
res.status(200).json({
    success:true,
    tasks
})

}

export const updateTask=async(req,res)=>{

const task=await Task.findByIdAndUpdate(

req.params.id,

req.body,

{new:true}

);

res.json(task);

}

export const deleteTask=async(req,res)=>{

await Task.findByIdAndDelete(req.params.id);

res.json({

message:"Deleted"

});

}

