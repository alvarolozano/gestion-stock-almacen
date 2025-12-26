"use client";


import {DataContext} from "@/components/data-provider";
import React, {Suspense, useContext} from "react";
import {columns} from "@/components/dashboard/table/column-definitions";
import {
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable
} from "@tanstack/react-table";
import {ClipboardList, Filter, Search} from "lucide-react";
import {Button} from "@/components/ui/button";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Input} from "@/components/ui/input";
import {DropdownMenu, DropdownMenuContent, DropdownMenuTrigger} from "@/components/ui/dropdown-menu";
import EstadoStockFilter from "@/components/dashboard/table/estado-stock-filter";
import {StatsCards} from "@/components/dashboard/stats-cards";

export function RepartoTable() {

    const { data } = useContext(DataContext);


    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )

    const table = useReactTable({
        data: data!,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },
    });

    if(!table) return <></>
    return (
        <>
            <StatsCards table={table}/>
            <div className="rounded-xl border bg-card">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 p-3 sm:px-6 sm:py-3.5">
                    <div className="flex items-center gap-2 sm:gap-2.5 flex-1">
                        <Button variant="outline" size="icon" className="size-7 sm:size-8 shrink-0">
                            <ClipboardList className="size-4 sm:size-[18px] text-muted-foreground" />
                        </Button>
                        <span className="text-sm sm:text-base font-medium">Pedidos</span>
                        <Badge className="ml-1 text-[10px] sm:text-xs">
                            {table.getRowCount()}
                        </Badge>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <div className="relative flex-1 sm:flex-none">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 sm:size-5 text-muted-foreground" />
                            <Input
                                placeholder="Id Pedido"
                                value={(table.getColumn("key")?.getFilterValue() as string) ?? ""}
                                onChange={(event) =>
                                    table.getColumn("key")?.setFilterValue(event.target.value)
                                }
                                className="pl-9 sm:pl-10 w-full sm:w-[160px] lg:w-[200px] h-8 sm:h-9 text-sm"
                            />
                        </div>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className={`h-8 sm:h-9 gap-1.5 sm:gap-2 ${columnFilters.filter(fil => fil.id !== 'key').length ? "border-primary" : ""}`}
                            >
                                <Filter className="size-3.5 sm:size-4" />
                                <span className="hidden sm:inline">Filtrar</span>
                                {columnFilters.filter(fil => fil.id !== 'key').length && (
                                    <span className="size-1.5 sm:size-2 rounded-full bg-primary" />
                                )}
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-[220px]">
                            <EstadoStockFilter column={table.getColumn("estadoStock")}/>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>

                <div className="px-3 sm:px-6 pb-3 sm:pb-4 overflow-x-auto">
                    <Table>
                        <TableHeader>

                                {table.getHeaderGroups().map((headerGroup) => (
                                    <Suspense key={headerGroup.id}>
                                        <TableRow key={headerGroup.id}>
                                            {headerGroup.headers.map((header) => {
                                                return (
                                                    <TableHead key={header.id}>
                                                        {header.isPlaceholder
                                                            ? null
                                                            : flexRender(
                                                                header.column.columnDef.header,
                                                                header.getContext()
                                                            )}
                                                    </TableHead>
                                                )
                                            })}
                                        </TableRow>
                                    </Suspense>
                                ))}
                        </TableHeader>
                        <TableBody>
                            {table.getRowModel().rows?.length === 0 ? (
                                <TableRow>
                                    <TableCell
                                        colSpan={8}
                                        className="h-24 text-center text-muted-foreground text-sm"
                                    >
                                        No hay pedidos disponibles.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                table.getRowModel().rows.map((row) => (
                                    <TableRow key={row.id}>
                                        {
                                            row.getVisibleCells().map(cell => (
                                            <TableCell key={cell.id}>
                                                {
                                                    flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext(),
                                                    )
                                                }
                                            </TableCell>
                                            ))
                                        }
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </div>
            </div>
    </>
    );
}
