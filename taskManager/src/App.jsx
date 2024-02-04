import { useEffect, useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import { useTasks } from "./hooks/useTasks";
import { Conatainer, StyledButton, AddTaskContainer, Row } from "./App.styled";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useLocalStorge } from "./hooks/useLocalStorage";
function App() {
  const [tasks, setTasks] = useLocalStorge('tasks',[]);
  const [newtask, setNewTask] = useState("");
  const [inProgress, completed, todo] = useTasks(tasks);
  
  const updateTasks = () => {
    if (newtask?.length) {
      setTasks((prev) => {
        const newTasks = [...prev, { id: Date.now(), name: newtask, status: "To do" }];
        return newTasks
      });
      setNewTask("");
    }
  };
  console.log("new tsk", tasks, todo, inProgress, completed);

  return (
    <DndProvider backend={HTML5Backend}>
      <Conatainer>
        <h2 className="heading" style={{ fontWeight: 500 }}>
          Task list
        </h2>
        <AddTaskContainer>
          <input
            className="addTasks"
            value={newtask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <StyledButton onClick={updateTasks}>+ Add task </StyledButton>
        </AddTaskContainer>
        <div>
          <Row>
            {["To do", "In Progress", "Completed"]?.map((taskType, idx) => {
              return (
                <TaskList
                  list={tasks}
                  key={idx}
                  taskType={taskType}
                  setTasks={setTasks}
                  todo={todo}
                  inProgress={inProgress}
                  completed={completed}
                />
              );
            })}
          </Row>
        </div>
      </Conatainer>
    </DndProvider>
  );
}

export default App;
