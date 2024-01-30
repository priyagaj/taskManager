import React from 'react';
import { TaskDiv } from './Task.styled';

export default function Task({name,status}) {
    
  return (
    <TaskDiv>
        <p>{name}</p>
    </TaskDiv>
  )
}
