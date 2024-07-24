"use client"
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { buttonVariants } from "@/components/ui/button";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const hrefActive = usePathname();
  return (
    <Link
      href={href}
      className={clsx(buttonVariants({ variant: "ghost" }), "flex-1",hrefActive == href && "bg-white text-black" )}
    >
      {children}
    </Link>
  );
};
