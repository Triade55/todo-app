// components/TaskContainer.js
"use client";
import { putTaskToDoIt, TaskHome } from "@/query/task.query";
import clsx from "clsx";
import { Check, CheckCheck, DeleteIcon, PencilIcon, Trash2Icon } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

interface Props extends TaskHome {
  DataTasks: TaskHome[];
  setDataTasks: (tasks: TaskHome[]) => void;
}
export default function TaskContainer({
  name,
  doIt,
  id,
  DataTasks,
  setDataTasks,
}: Props) {
  const [valueDoIt, setValueDoIt] = useState(doIt);
  async function handlerChange() {
    const newDoIt = !valueDoIt;
    setValueDoIt(newDoIt);

    try {
      await putTaskToDoIt(id, newDoIt);
      // const g = DataTasks.find((g)=>g.id === id)
      // if(g){
      //   g.doIt = true
      // }
      // const h = [...DataTasks,]
      // console.log('g',h)
      const g = DataTasks.map((task) =>
        task.id === id ? { ...task, doIt: true } : task
      );
      setDataTasks(g);
    } catch (error) {
      console.error("Failed to update task", error);
      // Optionally, revert the change if the update fails
      setValueDoIt(!newDoIt);
    }
  }


  return (
    <div className="border-2 my-2 flex justify-between items-center p-4">
      <div className="">
        <div className={clsx(valueDoIt && "line-through")}>{name}</div>
      </div>
      <div className="flex gap-3 items-center">
        
        {/* <input
          checked={valueDoIt}
          onChange={handlerChange}
          disabled={valueDoIt}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-10 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        /> */}

        <div onClick={()=>handlerChange()} className={clsx("border p-3 rounded-full bg-white text-white cursor-pointer",doIt&&"bg-green-600")}> <Check/></div> 
        <Link href={`/${id}/edit`} className="border p-3 rounded-full bg-orange-300 text-black"> <PencilIcon /></Link> 
        <Link href={`/${id}/del`} className="border p-3 rounded-full bg-red-500 text-black"> <Trash2Icon /></Link> 
        
      </div>
    </div>
  );
}
