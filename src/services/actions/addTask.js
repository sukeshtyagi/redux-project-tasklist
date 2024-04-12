import React from "react";
import { ADD_TASK } from "../constants";
function addTask(task) {
  console.log("task received in action", task)
  return {
    type: ADD_TASK,
    payload: task,
  };
}

export default addTask;
