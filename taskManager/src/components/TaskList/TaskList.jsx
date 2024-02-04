import React from "react";
import Task from "../Task/Task";
import { TaskListDiv, Column } from "./TaskList.styled";
import { useDrop } from "react-dnd";

export default function TaskList({
  list,
  todo,
  inProgress,
  completed,
  taskType,
  setTasks,
}) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "Task",
    drop: (item) => addItemToSection(item.id), //a function tht accepts id
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));
  const addItemToSection = (id) => {
    setTasks((prevTasks) => {
      const updatedList = prevTasks?.map((task) => {
        if (task.id === id) {
          return { ...task, status: taskType };
        }
        return task;
      });
      return updatedList;
    });
  };
  const sectionDataMap = {
    "To do": todo,
    "In Progress": inProgress,
    Completed: completed,
  };

  const sectionData = sectionDataMap[taskType];
  //console.log("sectiondata", sectionData, taskType);
  return (
    <Column ref={drop}>
      <TaskListDiv>
        <h3 className="listHeading">{taskType}</h3>
        {sectionData?.length > 0 &&
          sectionData?.map((item, idx) => {
            return <Task key={idx} {...item} />;
          })}
      </TaskListDiv>
    </Column>
  );
}
