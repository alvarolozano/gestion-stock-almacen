import prerepartoFileRaw from "../static/Prereparto_bruto.json";
import stockFileRaw from "../static/Stock_unificado.json";

import {filterPrereparto} from "../filters/filters";
import {PaginatedEntity} from "../types/raw/paginated-entity";
import {StockUnificadoRAW} from "../types/raw/stock-unificado-raw";
import {PrerepartoBrutoRAW} from "../types/raw/prereparto-bruto-raw";
import {procesarPedidos} from "./stock-processor";


const prerepartoData = prerepartoFileRaw as any as PaginatedEntity<PrerepartoBrutoRAW>;
const stockData = stockFileRaw as any as PaginatedEntity<StockUnificadoRAW>;

export function processJSON() {
    const prerepartoFiltrado =  prerepartoData.data.filter(filterPrereparto);
    return procesarPedidos(prerepartoFiltrado, stockData.data);
}