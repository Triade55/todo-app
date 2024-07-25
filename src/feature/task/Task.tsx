"use server"
import { TaskHome } from '@/query/task.query'
import React from 'react'
import TaskContainer from './task-container'
interface Props {
  task: TaskHome
}

export const Task = ({task}:Props) => {
  
  return (
    <TaskContainer name={task.name} doIt={task.doIt} id={task.id} createdAt={task.createdAt}/>
  )
}

