import { Link, useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";
// import SearchBar from "../components/SearchBar";
// import FilterBar from "../components/FilterBar";

export default function Dashboard() {
  const navigate = useNavigate();
  const [tasks, settasks] = useState([]);
  const getcart = async () => {
    let res = await axios.get("/api/tasks/get");
    settasks(res.data.tasks);
  };
  useEffect(() => {
    getcart();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center " >
      <div className="flex flex-col md:flex-row justify-between items-center w-full py-4 px-4">
        <h1 className="text-4xl font-bold mb-8">Task Dashboard</h1>
      <button
        onClick={() => {
          navigate("/create");
        }}
        className="bg-blue-400  cursor-pointer text-gray-950 rounded-full px-6 py-1 font-semibold text-xl"
      >
        Create Task
      </button>
      </div>
      <div className="bg-slate-100 w-screen flex py-8 justify-center  items-start">
          <TaskList tasks={tasks} getTasks={getcart} />
      </div>
    </div>
  );
}
