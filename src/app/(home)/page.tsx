"use server";
import React from "react";
import AuthButton from "@/components/AuthButton";
import { getAuthSession } from "@/lib/auth";
import ButtonAuth from "@/components/ButtonAuth";
import { ModeToggle } from "@/components/ButtonTheme";
export default async function Home() {
  const session = await getAuthSession();
  return (
    <div>
      
      <h1>Todo List</h1>
      {/* <AuthButton />
      <ButtonAuth isCo={session ? true : false} />
      {session && <p>Bienvenue, {session?.user?.name}</p>} */}
      {/* Vos autres composants */}
    </div>
  );
}
