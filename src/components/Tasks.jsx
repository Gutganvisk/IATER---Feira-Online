import { ChevronRightIcon, Trash2Icon } from "lucide-react";

function Tasks(props) {
  return (
    <ul className="space-y-4 p-6 bg-slate-100 rounded-md">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-slate-400 text-left w-full cursor-pointer text-white p-2 rounded-md ${
              task.isCompleted && "line-through"
            }`}
          >
            {task.title}
          </button>
          <button className="bg-slate-400 cursor-pointer p-2 rounded-md text-white">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="bg-slate-400 cursor-pointer p-2 rounded-md text-white"
          >
            <Trash2Icon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
