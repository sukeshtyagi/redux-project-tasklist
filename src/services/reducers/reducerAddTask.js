import React from "react";
import { ADD_TASK } from "../constants";

const initialState = {
  tasks: [],
};

function reducerAddTask(state = initialState, action) {
  console.log("action received inreducer", action);
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    default:
      return state;
  }
}

export default reducerAddTask;
