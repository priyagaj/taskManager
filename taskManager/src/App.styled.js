import styled from "styled-components";

export const Conatainer = styled.div`
  font-family: Tahoma, Helvetica, sans-serif;
  padding: 10px 10px;
  .heading {
    text-align: center;
  }
`;
export const StyledButton = styled.button`
  background-color: ${props => props.disabled ? '#A8A8A8' :'blue'};
  border: none;
  padding: 8px 15px;
  color: white;
  border-radius: 5px;
  text-align: center;

`;
export const Row = styled.div`
  display: flex;
  min-height: 500px;
  height: 100%;
  margin-top: 20px;
`;
export const Column = styled.div`
  background-color: #ebebeb;
  flex: 1;
  margin: 7px;
  border: 1px solid white;
  border-radius: 10px;
  padding: 10px;
  justify-content: center;
`;
export const AddTaskContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
  .addTasks {
    padding: 7px;
    width: 500px;
    margin-right: 5px;
    border-radius: 5px;
  }
`;
