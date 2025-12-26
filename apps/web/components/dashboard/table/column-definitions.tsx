import {ColumnDef} from "@tanstack/react-table";
import {RepartoProcesado, TipoEstadoStock} from "@repo/data-processor/types";
import {Badge} from "@/components/ui/badge";
import {cn} from "@/lib/utils";

export const ESTADO_STOCK_LABELS: Record<RepartoProcesado["estadoStock"], { label: string, className?: string}> = {
    "1": {
        label: 'físico',
    },
    "5": {
        label: 'online',
        className: "bg-blue-500 text-white dark:bg-blue-600"
    }
}

export const columns: ColumnDef<RepartoProcesado>[] = [
    {
        accessorKey: "key",
        header: "ID Artículo",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("key")}</div>
        ),
    },
    {
        accessorKey: "idTienda",
        header: "ID Tienda",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("idTienda")}</div>
        ),
    },
    {
        accessorKey: "propuesta",
        header: "Unidades a Repartir",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("propuesta")}</div>
        ),
    },
    {
        accessorKey: "tipoStockDesc",
        header: "Tipo Stock",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("tipoStockDesc")}</div>
        ),
    },
    {
        accessorKey: "estadoStock",
        filterFn: "equals",
        header: "Estado Stock",
        cell: ({ row }) => {
            const format = ESTADO_STOCK_LABELS[row.getValue("estadoStock")! as TipoEstadoStock]

            return (
                <Badge className={cn(format?.className)}>{format.label.toUpperCase()}</Badge>
            )
        }
    },
    {
        accessorKey: "posicionCompleta",
        header: "Posición Completa",
        cell: ({ row }) => (
            <div className="capitalize">{row.getValue("posicionCompleta")}</div>
        ),
    },
]