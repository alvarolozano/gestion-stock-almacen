import {CICLOS_WHITELIST, ZONAS_PRIORIDAD} from "../index";
import {TipoStockDesc} from "../types/raw/stock-unificado-raw";
import {PrerepartoBruto} from "../types/prereparto-bruto";
import {StockUnificado} from "../types/stock-unificado";

/**
 * Filtro las propuestas de pre-reparto (ecommerce y ciclos determinados).
 * @param prerepartoBruto Propuesta de pre-reparto a comprobar
 * @return {boolean} Determina si la propuesta cumple con los requisitos
 */
export function filterPrereparto(prerepartoBruto: PrerepartoBruto): boolean {
    return (
        CICLOS_WHITELIST.includes(prerepartoBruto.grupoLocalizacionDesc) && prerepartoBruto.esEcommerce === 1
    )
}

/**
 * Dado un producto, busca en el almacén las unidades disponibles
 * @param {PrerepartoBruto} item Propuesta de pre-reparto a procesar
 * @param {StockUnificado} stockUnificado Lista con los datos del almacén
 */
export function filterUnidadesStock(item: PrerepartoBruto, stockUnificado: StockUnificado[]): StockUnificado[] {
    return stockUnificado
        .filter(producto => item.key === producto.key)
        .sort((a, b) => ZONAS_PRIORIDAD[a.tipoStockDesc] - ZONAS_PRIORIDAD[b.tipoStockDesc])
        .filter((product) => product.stockEm05 > 0 || product.stockEm01 > 0);
}