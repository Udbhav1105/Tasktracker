import { json } from 'express';
import Task from '../Models/taskModel.js'

export const createTask=async(req,res)=>{

const {title,description,priority,dueDate}=req.body;

const task=await Task.create({
    title:title,
    description,
    priority,
    dueDate
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


export const complete=async(req,res)=>{
    const id=req.params.id

    const t=await Task.findById({_id:id})
    if(!t){
       return res.status(404).json({
            success:false,
            message:"Task not found"
        })
    }
    t.status="Completed"
    await t.save()
    return res.status(200).json({
        success:true,
        message:"Task completed"
    })
}

export const getTasksById=async(req,res)=>{
    const id=req.params.id
    const t= await Task.findById(id)
    if(!t){
        return res.status(404).json({
            success:false,
            message:"Task not found"
        })
    }
    return res.status(200).json({
        success:true,
        task:t
    })
}
