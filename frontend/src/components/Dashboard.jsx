import { Link, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";
import axios from 'axios'
// import SearchBar from "../components/SearchBar";
// import FilterBar from "../components/FilterBar";

export default function Dashboard(){
    const navigate=useNavigate()
     const [tasks, settasks] = useState([])
     const getcart=async() => {
     let res=await axios.get('http://localhost:3000/api/tasks/get')
     settasks(res.data.tasks)
 }
    useEffect(()=>{
     getcart()
    }, [])
   
return(

<div className="bg-slate-100 flex py-8 justify-center  items-start">

<div className="max-w-7xl">
<h1 className="text-4xl font-bold mb-8">
Task Dashboard
</h1>
<TaskList tasks={tasks} getTasks={getcart} />
</div>

 <button
 onClick={()=>{
    navigate("/create")
 }}
 className="bg-blue-400 text-gray-950 rounded-full px-6 py-2 font-semibold text-xl">Create Task</button>
</div>

)

}