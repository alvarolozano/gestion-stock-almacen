import {index, int, sqliteTable, text} from "drizzle-orm/sqlite-core";


export const repartoProcesado = sqliteTable("reparto_procesado", {
    key: text().notNull(),
    idTienda: text().notNull(),
    propuesta: int().notNull(),
    tipoStockDesc: text().notNull(),
    EstadoStock: text({enum: ["1", "5"]}).notNull(),
    posicioncompleta: text().notNull()
});
