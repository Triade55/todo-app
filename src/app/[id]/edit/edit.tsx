"use server";
import { prisma } from "@/lib/prisma";
export async function editTask(id?: string, name?: string, doIt?: boolean) {
  try {
    const task = await prisma.task.update({
      where: {
        id: id,
      },
      data: {
        name,
        doIt,
      },
    });
    
  } catch (error) {
    console.error("Error creating task:", error);
  } finally {
    await prisma.$disconnect();
  }
}
