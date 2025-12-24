import {int, sqliteTable, text} from "drizzle-orm/sqlite-core";


export const prerepartoBruto = sqliteTable("prereparto_bruto", {
    key: text().primaryKey(),
    propuesta: int().notNull(),
    tiendaId: int().notNull(),
    grupoLocalizacionDesc: text({
        enum: [
            "CICLO 1 GRUPO A1",
            "CICLO 1 GRUPO A2",
            "CICLO 1 GRUPO B",
            "CICLO 2 GRUPO A1",
            "CICLO 2 GRUPO A2",
            "CICLO 2 GRUPO B"
        ]
    }).notNull(),
    esEcommerce: int().notNull()
});