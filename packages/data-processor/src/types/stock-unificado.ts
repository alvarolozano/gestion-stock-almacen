import {StockUnificadoRAW} from "./raw/stock-unificado-raw";

export type StockUnificado = Pick<StockUnificadoRAW, 'key' | 'tipoStockDesc' | 'stockEm05' | 'stockEm01' | 'posicioncompleta'>;

export type ColumnaEstadoStock = Extract<keyof StockUnificado, 'stockEm01' | 'stockEm05'>;