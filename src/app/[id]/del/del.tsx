"use server";
import { prisma } from "@/lib/prisma";
export async function delTask(id?: string) {
  try {
    const task = await prisma.task.delete({
      where: {
        id: id,
      }
    });
  } catch (error) {
    console.error("Error creating task:", error);
  } finally {
    await prisma.$disconnect();
  }
}
