import {TipoStockDesc} from "./raw/stock-unificado-raw";


export enum TipoEstadoStock {
    FISICO = 1,
    ONLINE = 5
}

export interface RepartoProcesado {
    key: string;
    idTienda: number;
    propuesta: number;
    tipoStockDesc: TipoStockDesc;
    estadoStock: TipoEstadoStock,
    posicionCompleta: string
}