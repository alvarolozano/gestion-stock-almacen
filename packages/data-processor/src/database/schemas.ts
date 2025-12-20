
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import {TipoStockDesc} from "../types/StockUnificado.js";
import {GrupoLocalizacionDesc} from "../types/PrerepartoBruto.js";

export const prerepartoBruto = sqliteTable("prereparto_bruto", {
    key: int().primaryKey(),
    propuesta: int().notNull(),
    tiendaId: int().notNull(),
    grupoLocalizacionDesc: text({enum: Object.values(GrupoLocalizacionDesc) as [string, ...string[]]}).notNull(),
    esEcommerce: int().notNull()
});

export const stockUnificado = sqliteTable("stock_unificado", {
    key: int().primaryKey(),
    tipoStockDesc: text({enum: Object.values(TipoStockDesc) as [string, ...string[]]}).notNull(),
    stockEm05: int().notNull(),
    stockEm01: int().notNull(),
    posicioncompleta: text().notNull().unique(),
});
