import React from "react";
import { useParams } from "react-router-dom";

function UpdateTask() {
  const params = useParams();
  const { id } = params;
  console.log(id);
  return <div>id of task is{id}</div>;
}

export default UpdateTask;
