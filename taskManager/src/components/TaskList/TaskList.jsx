import React from 'react'
import Task from '../Task/Task';
import { TaskListDiv } from './TaskList.styled';

export default function TaskList({list}) {
  return (
    <TaskListDiv>
        {
            list?.length && list?.map((item, idx) => {
                return <Task key={idx} {...item} />
            })
        }
    </TaskListDiv>
  )
}
