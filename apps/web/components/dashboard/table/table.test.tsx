import {expect, test} from 'vitest'
import {render, screen} from '@testing-library/react'
import {DataContext} from "@/components/data-provider";
import {RepartoProcesado} from "@repo/data-processor/types";
import {RepartoTable} from "@/components/dashboard/table/reparto-table";
import {columns, ESTADO_STOCK_LABELS} from "@/components/dashboard/table/column-definitions";

const repartoMock: RepartoProcesado[] = [
    {
        key: 'key1',
        estadoStock: 5,
        posicionCompleta: 'posic',
        tipoStockDesc: "ZAR" as RepartoProcesado["tipoStockDesc"],
        propuesta: 4,
        idTienda: 4
    },
    {
        key: 'key2',
        estadoStock: 1,
        posicionCompleta: 'posic1',
        tipoStockDesc: "MSR" as RepartoProcesado["tipoStockDesc"],
        propuesta: 4,
        idTienda: 4
    }
]


test('Table Header length', () => {
    render(
        <DataContext value={{data: repartoMock}}>
            <RepartoTable/>
        </DataContext>
    )
    const head = screen.getAllByTestId("table-head");
    expect(head).toHaveLength(columns.length)
})


test('Tabla vacía', () => {
    render(
        <DataContext value={{data: []}}>
            <RepartoTable/>
        </DataContext>
    )
    expect(screen.getByTestId('table-empty')).toBeDefined();
})

test('Valores columnas', () => {
    render(
        <DataContext value={{data: repartoMock}}>
            <RepartoTable/>
        </DataContext>
    )

    repartoMock.forEach((item, index) => {
        expect(screen.getAllByTestId(`row:${index}:key`).pop()!.textContent).toContain(item.key);
        expect(screen.getAllByTestId(`row:${index}:idTienda`).pop()!.textContent).toContain(item.idTienda);
        expect(screen.getAllByTestId(`row:${index}:propuesta`).pop()!.textContent).toContain(item.propuesta);
        expect(screen.getAllByTestId(`row:${index}:tipoStockDesc`).pop()!.textContent).toContain(item.tipoStockDesc);
        expect(screen.getAllByTestId(`row:${index}:estadoStock`).pop()!.textContent).toContain(ESTADO_STOCK_LABELS[item.estadoStock].label.toUpperCase());
        expect(screen.getAllByTestId(`row:${index}:posicionCompleta`).pop()!.textContent).toContain(item.posicionCompleta);
    });

})