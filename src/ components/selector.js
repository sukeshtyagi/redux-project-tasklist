export const selectTaskById = (state, taskId) => {
  const tasks = state.reducerAddTask.tasks;
  return tasks.find((task) => task.id === taskId);
};
