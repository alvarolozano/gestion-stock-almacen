import {TipoStockDesc} from "../types/raw/stock-unificado-raw";
import {StockUnificado} from "../types/stock-unificado";


type generadorStockZona = Partial<Record<TipoStockDesc, [stockzona1: number, stockzona5: number]>>;

/**
 * Genera un almacén de prueba para repartir los productos
 * @param stock Clave-valor, con clave TipoStock (zar/msr/silo) y valor el stock para cada zona [zona1, zona5]
 * @param producto ID del producto a repartir
 */
export function generarMockAlmacen(stock: generadorStockZona, producto: string): StockUnificado[] {

    const mock: StockUnificado[] = [];

    for(const stockKey in stock) {

        const [stockEm01, stockEm05] = stock[stockKey as TipoStockDesc]!;

        if(stockEm01 > 0 || stockEm05 > 0) {
            mock.push({
                key: producto,
                tipoStockDesc: stockKey as TipoStockDesc,
                posicioncompleta: 'TEST',
                stockEm01,
                stockEm05
            });
        }
    }
    return mock;
}