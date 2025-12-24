import {expect, suite, test} from "vitest";
import {generarMockAlmacen} from "../../mocks/almacen.mock";
import {TipoStockDesc} from "../../types/raw/stock-unificado-raw";
import {filterUnidadesStock} from "../filters";
import {GrupoLocalizacionDesc} from "../../types/raw/prereparto-bruto-raw";
import {generarPedidoCustom} from "../../mocks/pedido.mock";


const ID_PRODUCTO_PRUEBA = 'TEST';

const ejemploPrereparto = generarPedidoCustom({
    key: ID_PRODUCTO_PRUEBA
});


suite('filtros procesado', () => {

    test('test priorizades de zonas', () => {
        const almacen = generarMockAlmacen(
            {
                [TipoStockDesc.MSR]: [10, 10],
                [TipoStockDesc.SILO]: [10, 10],
                [TipoStockDesc.ZAR]: [10, 10]
            },
            ID_PRODUCTO_PRUEBA
        );


        const filtradas = filterUnidadesStock(ejemploPrereparto, almacen);


        expect(filtradas.length).toBe(3);
        expect(filtradas[0]!.tipoStockDesc).toBe(TipoStockDesc.ZAR)
        expect(filtradas[1]!.tipoStockDesc).toBe(TipoStockDesc.MSR)
        expect(filtradas[2]!.tipoStockDesc).toBe(TipoStockDesc.SILO)
    });


    test('Test filtro zona vacía', () => {
        const almacen = generarMockAlmacen(
            {
                [TipoStockDesc.MSR]: [10, 10],
                [TipoStockDesc.SILO]: [0, 0],
                [TipoStockDesc.ZAR]: [0, 0]
            },
            ID_PRODUCTO_PRUEBA
        );


        const filtradas = filterUnidadesStock(ejemploPrereparto, almacen);

        expect(filtradas.length).toBe(1);
        expect(filtradas.find(e => e.tipoStockDesc === TipoStockDesc.SILO)).toBeUndefined();
        expect(filtradas.find(e => e.tipoStockDesc === TipoStockDesc.ZAR)).toBeUndefined();
        expect(filtradas[0]!.tipoStockDesc).toBe(TipoStockDesc.MSR);

    });

})