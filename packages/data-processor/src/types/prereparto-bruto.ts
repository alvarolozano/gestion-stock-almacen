import {PrerepartoBrutoRAW} from "./raw/prereparto-bruto-raw";

export type PrerepartoBruto = Pick<PrerepartoBrutoRAW, 'key' | 'propuesta' | 'tiendaId' | 'grupoLocalizacionDesc' | 'esEcommerce'>;