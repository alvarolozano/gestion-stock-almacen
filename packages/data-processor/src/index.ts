import {GrupoLocalizacionDesc} from "./types/PrerepartoBruto.js";
import processPrerepartoBruto from "./processor/PrerepartoBrutoProcessor.js";


// Marcar los ciclos/grupos que deben ser considerados al filtrar el prereparto
export const CICLOS_WHITELIST = [
    GrupoLocalizacionDesc.Ciclo2GrupoA2,
    GrupoLocalizacionDesc.Ciclo1GrupoB,
    GrupoLocalizacionDesc.Ciclo1GrupoA2
];


export { processPrerepartoBruto };
