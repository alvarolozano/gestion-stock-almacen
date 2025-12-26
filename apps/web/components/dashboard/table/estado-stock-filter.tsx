import {DropdownMenuCheckboxItem, DropdownMenuLabel} from "@/components/ui/dropdown-menu";
import {Column} from "@tanstack/react-table";
import {RepartoProcesado} from "@repo/data-processor/types";

export default function EstadoStockFilter({column}: {column?: Column<RepartoProcesado, unknown>}) {

    const filterValue = column.getFilterValue();

    return(
        <>
            <DropdownMenuLabel>Filtrar por estado Stock</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
                checked={filterValue === undefined}
                onCheckedChange={() => column?.setFilterValue(undefined)}
            >
                Todos
            </DropdownMenuCheckboxItem>

            {/* Opción Online */}
            <DropdownMenuCheckboxItem
                checked={filterValue === 5}
                onCheckedChange={() => column?.setFilterValue(5)}
            >
                Online
            </DropdownMenuCheckboxItem>

            {/* Opción Físico */}
            <DropdownMenuCheckboxItem
                checked={filterValue === 1}
                onCheckedChange={() => column?.setFilterValue(1)}
            >
                Físico
            </DropdownMenuCheckboxItem>
        </>
    )
}