import { getTaskById } from '@/query/task.query'

import React from 'react'
import EditForm from './edit-form';

type Props = {}

export default async function page({ params }: { params: { id: string } }) {
    const id = params.id;
    const task = await getTaskById(id)
    console.log(task,'task')
  return (
    <>
    <EditForm task={task} />
    </>
  )
}