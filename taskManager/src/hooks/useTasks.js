export const useTasks = (tasks) => {
  const inProgress = tasks?.filter((task) => task.status === "In Progress");
  const completed = tasks?.filter((task) => task.status === "Completed");
  const todo = tasks?.filter((task) => task.status === "To do");

  return [inProgress, completed, todo];
};
