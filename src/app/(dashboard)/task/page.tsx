
import { columns } from "@/components/dashboard/columns";
import { DataTable } from "@/components/dashboard/data-table";
import { tasks } from "@/components/dashboard/data/tasks";
import React from "react";

export default function TaskPage() {
  return (
    <div className="px-4 pb-6 md:overflow-scroll md:px-8  mb-10">
      <div className="mb-2 flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your tasks for this month!
          </p>
        </div>
      </div>
      <div className="-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0">
        <DataTable data={tasks} columns={columns} />
      </div>
    </div>
  );
}
