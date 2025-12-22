import {int, sqliteTable, text} from "drizzle-orm/sqlite-core";


export const stockUnificado = sqliteTable("stock_unificado", {
    key: text().primaryKey(),
    tipoStockDesc: text({enum: [
        "MSR"
    ]}).notNull(),
    stockEm05: int().notNull(),
    stockEm01: int().notNull(),
    posicioncompleta: text().notNull().unique(),
});
