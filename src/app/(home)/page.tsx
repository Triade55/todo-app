"use server";
import React from "react";
import AuthButton from "@/components/AuthButton";
import { getAuthSession } from "@/lib/auth";
import ButtonAuth from "@/components/ButtonAuth";
import { ModeToggle } from "@/components/ButtonTheme";
import { getLatestTasks, putTaskToDoIt } from "@/query/task.query";
import {Task} from "@/feature/task/Task";
import { Trie } from "@/feature/task/Trie";
export default async function Home() {
  const session = await getAuthSession();
  const tasks = await getLatestTasks();

  return (
    <div >
      
      <div className="">
        <Trie/>
      </div>

      {/* <AuthButton />
      <ButtonAuth isCo={session ? true : false} />
      {session && <p>Bienvenue, {session?.user?.name}</p>} */}
      {/* Vos autres composants */}
      <div className="">

      {tasks.map((task)=>(
        <Task task={task} key={task.id}  />
      ))}
      </div>
    </div>
  );
}
