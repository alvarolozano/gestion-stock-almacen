import {index, int, sqliteTable, text} from "drizzle-orm/sqlite-core";


export const stockUnificado = sqliteTable("stock_unificado", {
    key: text().notNull(),
    tipoStockDesc: text({enum: [
        "MSR",
        "ZAR",
        "SILO"
    ]}).notNull(),
    stockEm05: int().notNull(),
    stockEm01: int().notNull(),
    posicioncompleta: text().notNull()
}, (data) => [
    index('keyZonaIDX').on(data.key, data.tipoStockDesc)
]);
