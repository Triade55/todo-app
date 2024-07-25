"use client"
import React from "react";
import { Button } from "./ui/button";
import { signIn } from "next-auth/react";
import { LogInIcon } from "lucide-react";

function NoUser() {
  return (
    <div className="flex flex-col gap-3 items-center py-48">
      <p>Vous n'êtes pas connecté !</p>
      <Button
        onClick={() => signIn("github")}
        variant="success"
        className="flex gap-1"
      >
        Se connecter avec GitHub
        <LogInIcon />
      </Button>
    </div>
  );
}

export default NoUser;
