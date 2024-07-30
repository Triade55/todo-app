import { Button } from '@/components/ui/button';
import { getTaskById } from '@/query/task.query'

import React from 'react'
import { delTask } from './del';
import { useRouter } from 'next/router';
import DelForm from './del-form';
// import EditForm from './edit-form';

type Props = {}

export default async function page({ params }: { params: { id: string } }) {
    const id = params.id;
    const task = await getTaskById(id)
    

  return (
    <>
    <DelForm task={task} />
    </>
  )
}