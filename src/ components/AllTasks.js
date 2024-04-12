import React from "react";

function AllTasks({ taskDetails }) {
  console.log("all task comp", taskDetails);
  return (
    <div className="outer w-fit m-auto bg-yellow-500 p-5">
      <h1 className="heading text-center mb-5 text-2xl font-bold">All Tasks</h1>

      <ol className="list-decimal px-5">
        {taskDetails.map((task, index) => (
          <li key={index} className="task text-xl mb-3">{task}</li>
        ))}
      </ol>
    </div>
  );
}

export default AllTasks;
