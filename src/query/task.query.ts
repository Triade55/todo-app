import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getLatestTasks =(userId?:string)=>prisma.task.findMany({
    where: {
        userId: userId,
    },
    take:20,
    orderBy:{
        createdAt:'desc'
    },
    select:{
        id:true,
        name:true,
        createdAt:true,
        doIt:true,
    }
})
// src/query/task.query.ts
export const putTaskToDoIt = async (id?: string, doIt?: boolean) => {
    const response = await fetch(`/api/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ do: doIt,id:id }),
    });
    if (!response.ok) {
      throw new Error("Failed to update task");
    }
    return response.json();
  };
  

export type TaskHome = Prisma.PromiseReturnType<typeof getLatestTasks>[number]