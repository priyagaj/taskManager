import styled from "styled-components";

export const TaskListDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`;
export const Column = styled.div`
  background-color: ${(props) => (!props.isOver ? "#F5F5F5" : "#ebebeb")};
  flex: 1;
  margin: 8px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 0px 10px;
  justify-content: center;
  .listHeading {
    font-weight: 500;
    padding: 0;
    text-align: center;
  }
`;
