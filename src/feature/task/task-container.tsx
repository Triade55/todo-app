// components/TaskContainer.js
"use client";
import { putTaskToDoIt, TaskHome } from "@/query/task.query";
import clsx from "clsx";
import React, { useState } from "react";

export default function TaskContainer({ name, doIt, id }:TaskHome) {
  const [valueDoIt, setValueDoIt] = useState(doIt);

  async function handlerChange() {
    const newDoIt = !valueDoIt;
    setValueDoIt(newDoIt);
    try {
      await putTaskToDoIt(id, newDoIt);
    } catch (error) {
      console.error("Failed to update task", error);
      // Optionally, revert the change if the update fails
      setValueDoIt(!newDoIt);
    }
  }

  return (
    <div className="border-2 my-2 flex justify-between items-center">
      <div className="p-3">
        <div className={clsx(valueDoIt && "line-through")}>{name}</div>
      </div>
      
      <div className="p-3 bg-white/50">
        <input
          checked={valueDoIt}
          onChange={handlerChange}
          disabled={valueDoIt}
          id="default-checkbox"
          type="checkbox"
          value=""
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
      </div>
    </div>
  );
}
