"use client";
import { getLatestTasks, TaskHome } from "@/query/task.query";
import React, { useEffect, useState } from "react";
interface Props {
  tasks: TaskHome[];
}

export default async function useTasks() {
  const tasks = await getLatestTasks();
  console.log(typeof tasks)
    const [datatasks, setDataTasks] = useState(tasks);
  return (
    // datatasks,
    <div>
      dd
    </div>
  );
}
