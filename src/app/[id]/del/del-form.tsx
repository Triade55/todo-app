"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { putTask } from "@/query/task.query";
import { useRouter } from "next/navigation";
import { TaskById } from "@/query/task.query";
import { delTask } from "./del";
const formSchema = z.object({
  name: z.string().min(5, {
    message: "Le nom de tache dois contenir au moins 5 caractères",
  }),

  doIt: z.string().min(5, {
    message: "Le nom de tache dois contenir au moins 5 caractères",
  }),
});
interface Props {
  task: TaskById;
}
const DelForm = ({ task }: Props) => {
  const router = useRouter();
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: task?.name,
      doIt: task?.name,
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await delTask(task?.id)
    router.push("/");
  }
  const [check,setCheck] = useState(task?.doIt)
  const [inputName,setinputName] = useState(task?.name)

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>La tache</FormLabel>
              <FormControl>
                <Input placeholder="nom" {...field} value={inputName} onChange={(e)=>setinputName(e.target.value)} disabled />
              </FormControl>

              <FormLabel>La tache</FormLabel>
              <div className="flex justify-around items-center">
                <div className="flex items-center border gap-3 bg-green-700 px-2  rounded-full">
                  <div className="">deja fait</div>
                  <FormControl className="w-7 bg-white hover:bg-red-500">
                    <Input
                      placeholder="nom"
                      {...field}
                      name="doIt"
                      value={task?.name}
                      type="radio"
                      className="border"
                      checked={check}
                      onChange={()=>setCheck(!check)}
                      disabled
                    />
                  </FormControl>

                </div>
                <div className="flex items-center border gap-3 bg-red-700 px-2 rounded-full">
                  <FormControl className="w-7 bg-white hover:bg-red-500">
                    <Input
                      placeholder="nom"
                      {...field}
                      name="doIt"
                      value={task?.name}
                      type="radio"
                      className="border"
                      checked={!check}
                      onChange={()=>setCheck(!check)}
                      disabled
                    />
                  </FormControl>
                  <div className="">pas encores fait</div>

                </div>
                
              </div>

              <FormDescription>
                La tache seras ajouter a la date d'aujourdhui
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="destructive">Supprime</Button>
      </form>
    </Form>
  );
};

export default DelForm;
