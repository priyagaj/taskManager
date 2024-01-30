import { useState } from "react";
import TaskList from "./components/TaskList/TaskList";
import { useTasks } from "./hooks/useTasks";
import {
  Conatainer,
  StyledButton,
  AddTaskContainer,
  Row,
  Column,
} from "./App.styled";
function App() {
  const [tasks, updateTasks] = useState([
    {
      id: 0,
      status: "To do",
      name: "Task 1",
    },
    {
      id: 1,
      status: "In Progress",
      name: "Task 2",
    },
    {
      id: 3,
      status: "Completed",
      name: "Task 3",
    },
  ]);
  const [inProgress, completed, todo] = useTasks(tasks);

  return (
    <Conatainer>
      <h2 className="heading" style={{ fontWeight: 500 }}>
        Task list
      </h2>
      <AddTaskContainer>
        <input className="addTasks" />
        <StyledButton>+ Add task </StyledButton>
      </AddTaskContainer>
      <div>
        <Row>
          <Column>
            <h3 className="listHeading">To do</h3>
            <TaskList list={todo} />
          </Column>
          <Column>
            <h3 className="listHeading">In progress</h3>
            <TaskList list={inProgress} />
          </Column>
          <Column>
            <h3 className="listHeading">Completed</h3>
            <TaskList list={completed} />
          </Column>
        </Row>
      </div>
    </Conatainer>
  );
}

export default App;
