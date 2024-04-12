import React from "react";
import { ADD_TASK } from "../constants";

const initialState = {
  tasks: [],
};

function reducerAddTask(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, { id:crypto.randomUUID(),task: action.payload, status: "pending" }],
      };

    default:
      return state;
  }
}

export default reducerAddTask;
