export default function TaskCard({task}){

const editTask=async()=>{
    const res=axios.post("",)
}

return(

<div className="bg-white rounded-xl w-[18 vw] shadow-md p-6 hover:shadow-xl duration-300">

<div className="flex justify-between flex-wrap">

<h2 className="text-xl font-bold">

{task.title}

</h2>

<span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">

{task.priority}

</span>

</div>

<p className="text-gray-500 mt-4">

{task.description}

</p>

<div className="flex justify-between mt-6">

<p>

📅 {task.dueDate}

</p>

<p className="text-green-600 font-semibold">

{task.status}

</p>

</div>

<div className="flex gap-3 mt-6">

<button
onClick={editTask}
className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
>

Edit

</button>

<button
className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg"
>

Complete

</button>

<button
className="flex-1 bg-red-600 text-white py-2 rounded-lg"
>

Delete

</button>

</div>

</div>

)

}