"use client"

import {DropdownMenuCheckboxItem, DropdownMenuLabel} from "@/components/ui/dropdown-menu";
import {Column} from "@tanstack/react-table";
import {RepartoProcesado} from "@repo/data-processor/types";

export default function EstadoStockFilter({column}: {column?: Column<RepartoProcesado, unknown>}) {


    if(!column) return  <></>

    const filterValue = column!.getFilterValue();

    return(
        <>
            <DropdownMenuLabel>Filtrar por estado Stock</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
                checked={filterValue === undefined}
                data-testid={"filter-todos"}
                onCheckedChange={() => column?.setFilterValue(undefined)}
            >
                Todos
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
                checked={filterValue === 5}
                data-testid={"filter-online"}
                onCheckedChange={() => column?.setFilterValue(5)}
            >
                Online
            </DropdownMenuCheckboxItem>

            <DropdownMenuCheckboxItem
                checked={filterValue === 1}
                data-testid={"filter-fisico"}
                onCheckedChange={() => column?.setFilterValue(1)}
            >
                Físico
            </DropdownMenuCheckboxItem>
        </>
    )
}