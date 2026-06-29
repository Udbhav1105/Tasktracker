import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";

export default function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: "",
    description: "",
    priority: "Medium",
    dueDate: "",
    status: "Pending",
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
  const getTask=async()=>{
    let res=await axios.get(` /api/tasks/getbyid/${id}`)
    setTask({
      title:res.data?.task.title,
      description:res.data?.task.description,
      priority:res.data?.task.priority,
      dueDate:res.data?.task.dueDate,
      status:res.data?.task.status,
    })
  }
  getTask()
  }, [])
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        ` /api/tasks/${id}`, // <-- Update API
        task
      );

      toast.success(res.data.message);
      navigate("/");
    } catch (err) {
      console.log(err);
      toast.error("Update failed");
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Edit Task
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>

          <input
            name="title"
            value={task.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

          <textarea
            rows={5}
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />

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
              value={task.dueDate?.split("T")[0]}
              onChange={handleChange}
              className="border rounded-lg p-3"
            />

          </div>

          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg"
          >
            Update Task
          </button>

        </form>
      </div>
    </div>
  );
}