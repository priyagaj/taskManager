import styled from "styled-components";


export const TaskDiv = styled.button`
  background-color: #fff;
  font-size: 12px;
  border: #C0C0C0;
  border-radius: 5px;
  margin-top: 5px;
  text-align: left;
  opacity: ${props  => props.isDragging ? '0.5': 1};
   
  p{
    font-size: medium;
  }
`;
