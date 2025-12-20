import {CICLOS_WHITELIST} from "../index.js";
import {PrerepartoBruto} from "../types/PrerepartoBruto.js";

export function filterPrereparto(prerepartoBruto: PrerepartoBruto): boolean {
    return (
        CICLOS_WHITELIST.includes(prerepartoBruto.grupoLocalizacionDesc) && prerepartoBruto.esEcommerce === 1
    )
}