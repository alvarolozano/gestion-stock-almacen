import {GrupoLocalizacionDesc} from "../types/raw/prereparto-bruto-raw";
import {PrerepartoBruto} from "../types/prereparto-bruto";


const ejemploPrereparto: PrerepartoBruto = {
    key: 'PRODUCTO_PRUEBA',
    esEcommerce: 1,
    grupoLocalizacionDesc: GrupoLocalizacionDesc.Ciclo1GrupoA1,
    propuesta: 1,
    tiendaId: 1
}

export function generarPedidoBase(productId: string, online: boolean): PrerepartoBruto {
    return {
        ...ejemploPrereparto,
        key: productId,
        esEcommerce: Number(online)
    }
}

export function generarPedidoCustom(reparto: Partial<PrerepartoBruto>): PrerepartoBruto {
    return ({
        ...ejemploPrereparto,
        ...reparto
    })
}