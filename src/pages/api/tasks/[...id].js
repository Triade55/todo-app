// pages/api/tasks/[id].js
import { prisma } from "@/lib/prisma";

export default async function handler(req, res) {

  if (req.method === "PUT") {
    try {
      const task = await prisma.task.update({
        where: { id: req.body.id },
        data: { doIt: req.body.do },
      });
      res.status(200).json(task);
    } catch (error) {
      res.status(500).json({ error: "Error updating task" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
