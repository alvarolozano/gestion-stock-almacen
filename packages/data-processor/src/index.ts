import {EsEcommerce, GrupoLocalizacionDesc} from "./types/raw/prereparto-bruto-raw";
import {TipoStockDesc} from "./types/raw/stock-unificado-raw";
import {ColumnaEstadoStock} from "./types/stock-unificado";
import {processJSON} from "./processor";


/**
 * Marcar los ciclos/grupos que deben ser considerados al filtrar el prereparto
 */
export const CICLOS_WHITELIST: GrupoLocalizacionDesc[] = [
    GrupoLocalizacionDesc.Ciclo2GrupoA2,
    GrupoLocalizacionDesc.Ciclo1GrupoB,
    GrupoLocalizacionDesc.Ciclo1GrupoA2
];

/**
 * Determina la priorizad de las zonas a la hora de coger el stock.
 * Siendo 1 la más importante 3 la menos
 */
export const ZONAS_PRIORIDAD: Record<TipoStockDesc, number> = {
    [TipoStockDesc.ZAR]: 1,
    [TipoStockDesc.MSR]: 2,
    [TipoStockDesc.SILO]: 3
}

export const PRIORIDAD_ESTADO_PEDIDO: Record<EsEcommerce, ColumnaEstadoStock[]> = {
    [EsEcommerce.FISICO]: ["stockEm01"],
    [EsEcommerce.ECOMMERCE]: ["stockEm05", "stockEm01"]
}


export {processJSON}