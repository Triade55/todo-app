import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { doIt } = req.query;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        doIt: doIt === 'true'
      }
    });
    console.log('dd')
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching tasks' });
  }
}
