import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";
import axios from 'axios'
export default function TaskList(){
     const [tasks, settasks] = useState([])
    useEffect(()=>{
        const getcart=async() => {
        let res=await axios.get('http://localhost:3000/api/tasks/get')
        console.log(res.data.tasks)
        settasks(res.data.tasks)
        console.log(tasks)
    }
     getcart()
}
   
    , [])

// const tasks=[
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Learn React",
// description:"Finish Context API",
// priority:"High",
// status:"Pending",
// dueDate:"12 June"
// },
// {
// title:"Assignment",
// description:"Complete MERN Assignment",
// priority:"Medium",
// status:"Completed",
// dueDate:"20 June"
// }
// ]

return(

<div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">

{

tasks.map((task,index)=>

<TaskCard
key={index}
task={task}
/>

)

}

</div>

)

}