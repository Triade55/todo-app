"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React from "react";

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
import { createTask } from "./task";
import { useRouter } from "next/navigation";
const formSchema = z.object({
  name: z.string().min(5, {
    message: "Le nom de tache dois contenir au moins 5 caractères",
  }),
});

const page = () => {
  const router = useRouter()
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    await createTask(values.name)
    router.push('/')
  }

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
                <Input
                  placeholder="Je dois manger mon repas de midi"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                La tache seras ajouter a la date d'aujourdhui
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Envoyer</Button>
      </form>
    </Form>
  );
};

export default page;
