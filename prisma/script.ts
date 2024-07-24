import { prisma } from "@/lib/prisma";

export default async function main() {
  const task = await prisma.task.create({
    data: {
      name: "Premiere tache",
      do: false,
      userId: "1",
    },
  });
  console.log(task);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
