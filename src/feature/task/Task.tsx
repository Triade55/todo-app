"use client";
import { TaskHome } from "@/query/task.query";
import React, { useEffect, useState } from "react";
import TaskContainer from "./task-container";
import { Trie } from "./Trie";
import useTasks from "@/hooks/useTask";

interface Props {
  tasks: TaskHome[];
}

export const Task = ({ tasks }: Props) => {
  const [checked, setChecked] = useState('Tout');
  const [searchTerm, setSearchTerm] = useState('');
  const [dateFilter, setDateFilter] = useState(''); // 'today', 'thisWeek', 'thisMonth'

  const [tasksShowFiltered, setTasksShowFiltered] = useState<TaskHome[]>([]);
  const [idUpdate, setIdUpdate] = useState('');
  const [datatasks,setDataTasks] = useState<TaskHome[]>(tasks);
  useEffect(() => {
    let filteredTasks = datatasks;
    if (checked === 'Déjà fait uniquement') {
      filteredTasks = filteredTasks.filter((task) => task.doIt === true);
    } else if (checked === 'Non fait uniquement') {
      filteredTasks = filteredTasks.filter((task) => task.doIt === false);
    }

    if (searchTerm) {
      filteredTasks = filteredTasks.filter((task) =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (dateFilter === 'today') {
      filteredTasks = filteredTasks.filter((task) =>
        new Date(task.createdAt).toDateString() === new Date().toDateString()
      );
    } else if (dateFilter === 'thisWeek') {
      const startOfWeek = new Date();
      startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());
      filteredTasks = filteredTasks.filter((task) =>
        new Date(task.createdAt) >= startOfWeek
      );
    } else if (dateFilter === 'thisMonth') {
      const startOfMonth = new Date();
      startOfMonth.setDate(1);
      filteredTasks = filteredTasks.filter((task) =>
        new Date(task.createdAt) >= startOfMonth
      );
    }

    setTasksShowFiltered(filteredTasks);
  }, [checked, searchTerm, dateFilter,datatasks]);

  return (
    <div>
      <div className="py-2 flex items-center justify-between">
        <Trie checked={checked} setChecked={setChecked} />
        <input
          type="text"
          placeholder="Rechercher des tâches"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border rounded px-2 py-1"
        />
        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border rounded px-2 py-1"
        >
          <option value="">Toutes les dates</option>
          <option value="today">Aujourd'hui</option>
          <option value="thisWeek">Cette semaine</option>
          <option value="thisMonth">Ce mois-ci</option>
        </select>
        <span>{tasksShowFiltered.length}</span>
      </div>
      {tasksShowFiltered.map((task) => (
        <TaskContainer
          key={task.id}
          name={task.name}
          doIt={task.doIt}
          id={task.id}
          createdAt={task.createdAt}
          setDataTasks={setDataTasks}
          DataTasks={datatasks}
        />
      ))}
    </div>
  );
};
