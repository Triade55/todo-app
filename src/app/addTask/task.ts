"use server"
import { prisma } from "@/lib/prisma"
import { getUser } from "@/query/user.query";
export async function createTask(name: string) {
  const user = await getUser();
  const userId = user.id
  try {
    const task = await prisma.task.create({
      data: {
        name,
        userId,
        do: false,
      },
    });
    console.log(task);
  } catch (error) {
    console.error('Error creating task:', error);
  } finally {
    await prisma.$disconnect();
  }
}

