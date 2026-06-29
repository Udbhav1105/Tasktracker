import TaskCard from "./TaskCard";

export default function TaskList({ tasks, getTasks }) {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-10">
      
      {(tasks.length==0) ? <div className="text-center text-2xl font-semi bold ">No Task created Now</div> :
      tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          getTasks={getTasks}
        />
      ))}
    </div>
  );
}