import React from 'react';
import { TaskDiv } from './Task.styled';
import { useDrag } from 'react-dnd';

export default function Task({name, id}) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'Task',
    item: {id: id},//specify the id of the task we are dragging
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  
  return (
    <TaskDiv ref={drag}isDragging={isDragging}>
        <p>{name}</p>
    </TaskDiv>
  )
}
