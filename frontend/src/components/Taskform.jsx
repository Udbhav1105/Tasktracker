
import { useState} from "react";
import axios from 'axios'
import {Link,useNavigate } from 'react-router-dom'
import { Toaster, toast } from "react-hot-toast";
export default function TaskForm() {
const navigate=useNavigate()
const [task,setTask]=useState({
title:"",
description:"",
priority:"Medium",
dueDate:""
})

const handleChange=(e)=>{
setTask({...task,[e.target.name]:e.target.value})
}

const handleSubmit=async(e)=>{
    e.preventDefault();
    let res=await axios.post(' /api/tasks/',{title:task.title,description:task.description,priority:task.priority,dueDate:task.dueDate})
    toast.success(res.data.message)
   navigate("/")
}


return(

<form className="space-y-6" onSubmit={handleSubmit}>

<div>

<label className="font-semibold">
Title
</label>

<input
name="title"
value={task.title}
className="w-full mt-2 border rounded-lg p-3 focus:ring-2 focus:ring-indigo-500 outline-none"
onChange={handleChange}
/>

</div>

<div>

<label>Description</label>

<textarea
rows={5}
value={task.description}
name="description"
onChange={handleChange}
className="w-full mt-2 border rounded-lg p-3"
/>

</div>

<div className="grid grid-cols-2 gap-5">

<select
name="priority"
value={task.priority}
onChange={handleChange}
className="border rounded-lg p-3"
>

<option>Low</option>
<option>Medium</option>
<option>High</option>

</select>

<input
type="date"
name="dueDate"
onChange={handleChange}
className="border rounded-lg p-3"
/>

</div>

<button
type="submit"
className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700"
>

Create Task

</button>

</form>

)

}