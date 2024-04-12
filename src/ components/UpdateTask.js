import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectTaskById } from "./selector";

function UpdateTask() {
  const [updatedStatus, setUpdatedStatus] = useState("");

  const params = useParams();
  const { id } = params;
  const task = useSelector((state) => selectTaskById(state, id));

  return (
    <div className="bg-yellow-500 w-fit mx-auto p-4">
      <h1 className="text-center text-3xl my-2">Update Task</h1>
      {task && (
        <div className="flex flex-col gap-4 text-lg mt-5 justify-center items-start">
          <p>Task ID: {task.id}</p>
          <p>Task Name: {task.task}</p>
          <p>Current Status: {task.status}</p>
          <label htmlFor="">Update Status:</label>
          <input
            type="text"
            className=""
            value={updatedStatus}
            onChange={(e) => {setUpdatedStatus(e.target.value)}}
          />
          <button className="bg-pink-900 text-white px-4 py-px rounded-xl"
          onClick={()=>{console.log(updatedStatus)}}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default UpdateTask;
