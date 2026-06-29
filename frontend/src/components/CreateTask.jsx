import TaskForm from "./TaskForm";
import { Toaster } from "react-hot-toast";

export default function CreateTask() {
  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8">

        <h1 className="text-3xl font-bold mb-6">
          Create New Task
        </h1>
        <Toaster 
        position="top-right"
        />
        <TaskForm />

      </div>
    </div>
  );
}