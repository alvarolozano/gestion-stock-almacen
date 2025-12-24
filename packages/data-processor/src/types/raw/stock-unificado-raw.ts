export interface StockUnificadoRAW {
    datetimeIngestion: Date;
    talla: number;
    color: number;
    unidadesrecogerem05: number;
    tipoStockId: number;
    calidadPadre: number;
    contenedores: number;
    unidadesrecogerem01: number;
    zona: Zona;
    stockEm01: number;
    tipoStockDesc: TipoStockDesc;
    bultosPale: number;
    campanaId: number;
    posicioncompleta: string;
    stockTotal: number;
    key: string;
    colorPadre: number;
    keyPadre: string;
    uxl: number;
    modeloPadre: number;
    unidadesBulto: number;
    stockEm05: number;
    modelo: number;
    campanaIdDb2: number;
    campanaDesc: CampanaDesc;
    calidad: number;
    unidadesrecogertotal: number;
}

export enum CampanaDesc {
    I2023 = "I2023",
    V2024 = "V2024",
}

export enum TipoStockDesc {
    MSR = "MSR",
    ZAR = "ZAR",
    SILO = "SILO"
}

export enum Zona {
    PC03Voluminoso = "PC03 Voluminoso",
    Pa05 = "PA05 ",
    Pb02 = "PB02",
    Pb02Escaparate = "PB02 ESCAPARATE",
    Pb03 = "PB03 ",
    Pb04 = "PB04 ",
    Pc02 = "PC02 ",
    Pc03 = "PC03",
    Pc04 = "PC04 ",
    Pc05Ficticio = "PC05 FICTICIO",
    Pd01 = "PD01",
    Pd01Vvd = "PD01_VVD",
    RackA0 = "RACK_A0",
    RackA1 = "RACK_A1",
    RackB0 = "RACK_B0",
    RackB1 = "RACK_B1",
}

