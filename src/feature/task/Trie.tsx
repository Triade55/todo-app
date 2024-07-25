"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Check } from "lucide-react";

type Checked = DropdownMenuCheckboxItemProps["checked"];
interface Props {
  checked:any;
  setChecked:any;
}
export function Trie({checked,setChecked}:Props) {

  const filtres = [
    {
      label: "Tout",
      value: "all",
    },
    {
      label: "Déjà fait uniquement",
      value: "onlyDoIt",
    },
    {
      label: "Non fait uniquement",
      value: "onlyNotDoIt",
    },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>Filtre : {checked}</DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {filtres.map((filtre) => (
          <DropdownMenuItem onClick={()=>setChecked(filtre.label)} className="flex gap-4">
            {checked === filtre.label && (<Check size={15}/>)}
            {filtre.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
