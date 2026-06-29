import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function TaskCard({ task, getTasks }) {
  const navigate = useNavigate();
  const editTask = async () => {
    navigate(`/edit/${task._id}`);
  };

  const deleteTask = async () => {
    try {
      const res = await axios.delete(
        ` /api/tasks/delete/${task._id}`,
      );
      await getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const completeTask = async () => {
    try {
      const res = await axios.post(
        `/api/tasks/complete/${task._id}`, // Complete API
      );
      await getTasks();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-white rounded-xl w-72 shadow-md p-6 hover:shadow-xl duration-300">
      <div className="flex justify-between flex-wrap">
        <h2 className="text-xl font-bold">{task.title}</h2>

        <span className="bg-yellow-200 text-yellow-800 px-3 py-1 rounded-full">
          {task.priority}
        </span>
      </div>

      <p className="text-gray-500 mt-4">{task.description}</p>

      <div className="flex justify-between mt-6">
        {
          <p>
            📅{" "}
            {new Date(task.dueDate).toLocaleDateString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        }

        <p className="text-green-600 font-semibold">{task.status}</p>
      </div>

      <div className="flex gap-3 mt-6">
        <button
          onClick={editTask}
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg cursor-pointer"
        >
          Edit
        </button>

        <button
          onClick={completeTask}
          className="flex-1 bg-green-600 text-white py-2 px-3 rounded-lg cursor-pointer"
        >
          Complete
        </button>

        <button
          onClick={deleteTask}
          className="flex-1 bg-red-600 text-white py-2 rounded-lg cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
