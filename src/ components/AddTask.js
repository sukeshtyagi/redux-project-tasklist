import React from "react";

function AddTask({ addTaskHandler, taskDetails }) {
  console.log("data received from state", taskDetails);
  return (
    <div className=" outer box-border w-1/2 mx-auto p-5 py-10 bg-pink-900">
      <div className="container box-border w-full bg-inherit flex flex-col justify-center items-start gap-10">
        <h1 className="heading  box-border w-full bg-inherit text-2xl text-white text-center">
          Enter a task
        </h1>
        <input
          type="text"
          placeholder="Enter task details"
          className="heading  box-border w-3/4 m-auto text-xl text-center px-4 py-1 rounded-lg"
        />
        <button
          className="heading  box-border w-fit m-auto text-xl text-center px-4 py-1 rounded-lg bg-purple-400"
          onClick={() => {
            addTaskHandler("123");
            console.log("ui triggering");
          }}
        >
          Add task
        </button>
      </div>
    </div>
  );
}

export default AddTask;
