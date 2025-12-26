"use client";

import {Box, Truck} from "lucide-react";
import {RepartoProcesado} from "@repo/data-processor/types";
import {Table} from "@tanstack/react-table";

export function StatsCards({table}: {table: Table<RepartoProcesado>}) {

    const filteredRows = table.getFilteredRowModel().rows;

    const totalProductos = filteredRows.reduce((acc, row) => {
        const valor = row.getValue("propuesta");
        return acc + (Number(valor) || 0);
    }, 0);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 p-3 sm:p-4 lg:p-6 rounded-xl border bg-card">

        <div className="flex items-start">
            <div className="flex-1 space-y-2 sm:space-y-4 lg:space-y-6">
                <div className="flex items-center gap-1 sm:gap-1.5 text-muted-foreground">
                    <Truck className="size-3.5 sm:size-[18px]" />
                    <span className="text-[10px] sm:text-xs lg:text-sm font-medium truncate">Total Operaciones</span>
                </div>
                <p className="text-lg sm:text-xl lg:text-[28px] font-semibold leading-tight tracking-tight">
                    {table.getRowCount()}
                </p>

            </div>
            <div className="hidden lg:block w-px h-full bg-border mx-4 xl:mx-6" />
        </div>

        <div className="flex items-start">
            <div className="flex-1 space-y-2 sm:space-y-4 lg:space-y-6">
                <div className="flex items-center gap-1 sm:gap-1.5 text-muted-foreground">
                    <Box className="size-3.5 sm:size-[18px]" />
                    <span className="text-[10px] sm:text-xs lg:text-sm font-medium truncate">Total productos</span>
                </div>
                <p className="text-lg sm:text-xl lg:text-[28px] font-semibold leading-tight tracking-tight">
                    {totalProductos}
                </p>
            </div>
        </div>
    </div>
  );
}
