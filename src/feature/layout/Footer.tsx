import { ActiveLink } from "@/components/active-link";
import { getAuthSession } from "@/lib/auth";
import clsx from "clsx";
import { Home, User, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = async() => {
  const session = await getAuthSession();

  return (
    <div className="py-2 flex justify-center container gap-1 fixed bottom-0 left-0 right-0 bg-background max-w-lg m-auto border-t border-accent">
      <ActiveLink href="/">
        <Home size={16} />
      </ActiveLink>
      
      <ActiveLink href="/addTask">
        <Plus size={16} />
      </ActiveLink>
      
      <ActiveLink href="/profile">
        <User size={16} />
      </ActiveLink>


    </div>
  );
};

export default Footer;
