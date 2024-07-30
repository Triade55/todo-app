import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getLatestTasks = (userId?: string) =>
  prisma.task.findMany({
    where: {
      userId: userId,
    },
    take: 20,
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      name: true,
      createdAt: true,
      doIt: true,
    },
  });
  

  
// export async function getLatestTasks(userId?: string) {
//   try {
//     const tasks = await prisma.task.findMany({
//           where: {
//             userId: userId,
//           },
//           take: 20,
//           orderBy: {
//             createdAt: "desc",
//           },
//           select: {
//             id: true,
//             name: true,
//             createdAt: true,
//             doIt: true,
//           },
//     });
//     return tasks
//     } catch (error) {
//     console.error("Error creating task:", error);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

export const getTaskById = (taskId: string) =>
  prisma.task.findUnique({
    where: {
      id: taskId,
    },select: {
      id: true,
      name: true,
      createdAt: true,
      doIt: true,
    },
    
  });
// src/query/task.query.ts
export const putTaskToDoIt = async (id?: string, doIt?: boolean) => {
  const response = await fetch(`/api/tasks/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ do: doIt, id: id }),
  });
  if (!response.ok) {
    throw new Error("Failed to update task");
  }
  return response.json();
};
export const putTask = (id?: string, doIt?: boolean,name?:string) => prisma.task.updateMany({
  where: {
   id:id
  },
  data: {
    doIt: doIt,
    name:name
  }
})



export type TaskHome = Prisma.PromiseReturnType<typeof getLatestTasks>[number] ;
export type TaskById = Prisma.PromiseReturnType<typeof getTaskById>;
