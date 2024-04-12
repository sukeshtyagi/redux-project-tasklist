import React from "react";
import { useNavigate } from "react-router-dom";

function AllTasks({ taskDetails }) {
  const navigate = useNavigate();
  console.log("all task comp", taskDetails);
  return (
    <div className="outer w-fit m-auto bg-yellow-500 p-5">
      <h1 className="heading text-center mb-5 text-2xl font-bold">All Tasks</h1>

      {taskDetails.map((task, index) => (
        <div className="outer mb-5 border border-white p-2">
          <p key={index} className="task text-xl mb-3">
            Task: {task.task}
          </p>
          <p className="task text-xl mb-3">Status: {task.status}</p>
          <button className=" bg-pink-900 px-3 py-1"
          onClick={()=>{navigate(`/task/${task.id}`)}}
          >Update Status</button>
        </div>
      ))}
    </div>
  );
}

export default AllTasks