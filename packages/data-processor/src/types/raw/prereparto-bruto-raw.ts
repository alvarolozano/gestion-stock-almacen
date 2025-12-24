export interface PrerepartoBrutoRAW {
    totalUnidadesAjusteGrupo: number;
    totalTiendasConAjusteGrupo: number;
    numeroBultosPale: number;
    bloqueado: number;
    keyTienda: string;
    udsDemandadasEm05: number;
    udsDemandadasEm01: number;
    stockSiloPalesEm05: number;
    grupoLocalizacionDesc: GrupoLocalizacionDesc;
    totalTiendasConPropuestaGrupo: number;
    stockSiloPalesEm01: number;
    siloPalesDelayCargaMinutos: number;
    udsRepartidasEm05: number;
    contieneAjuste: number;
    unidadesAjusteEnReparto: number;
    fechaIngestionMsr: IngestionMsr;
    udsRepartidasEm01: number;
    uxl?: number;
    ajuste: number;
    modeloPadre: number;
    unidadesBulto: number;
    modelo: number;
    campanaDesc: CampanaDesc;
    unidadesAjusteRepartido: number;
    totalUnidadesPropuestaGrupo: number;
    udsPendientesEm01: number;
    udsPendientesEm05: number;
    stockZarEm05: number;
    datetimeIngestionSiloPales: IngestionSiloPales;
    talla: number;
    propuesta: number;
    color: number;
    unidadesAjusteInicial: number;
    stockZarTotal: number;
    stockMsrTotal: number;
    stockZarEm01: number;
    calidadPadre: number;
    unidadesAjusteEnviado: number;
    fechaIngestionRepartoMsr: IngestionRepartoMsr;
    bolsaDesc: string;
    cargaRepartoMsrValida: number;
    campanaId: number;
    stockSiloPalesTotal: number;
    fechaIngestionSiloPales: IngestionSiloPales;
    tiendaId: number;
    stockMsrEm05: number;
    key: string;
    stockMsrEm01: number;
    colorPadre: number;
    cargaMsrValida: number;
    campanaIdDb2: number;
    datetimeIngestionMsr: IngestionMsr;
    grupoLocalizacionId: number;
    esEcommerce: EsEcommerce;
    datetimeIngestionRepartoMsr: IngestionRepartoMsr;
    bolsaId: number;
    msrDelayCargaMinutos: number;
    calidad: number;
    cargaSiloPalesValida: number;
    repartoMsrDelayCargaMinutos?: number;
}

export enum CampanaDesc {
    I2023 = "I2023",
    V2024 = "V2024",
}

export enum EsEcommerce {
    ECOMMERCE = 1,
    FISICO = 0
}

export enum IngestionMsr {
    The04032024170301 = "04-03-2024 17:03:01",
}

export enum IngestionRepartoMsr {
    The04032024170331 = "04-03-2024 17:03:31",
}

export enum IngestionSiloPales {
    The04032024170318 = "04-03-2024 17:03:18",
}

export enum GrupoLocalizacionDesc {
    Ciclo1GrupoA1 = "CICLO 1 GRUPO A1",
    Ciclo1GrupoA2 = "CICLO 1 GRUPO A2",
    Ciclo1GrupoB = "CICLO 1 GRUPO B",
    Ciclo2GrupoA1 = "CICLO 2 GRUPO A1",
    Ciclo2GrupoA2 = "CICLO 2 GRUPO A2",
    Ciclo2GrupoB = "CICLO 2 GRUPO B",
}


