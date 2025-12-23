
import * as fs from "fs";
import processStockUnificado from "@repo/data-processor/dist/processor/StockUnificadoProcessor";
import {processPrerepartoBruto} from "@repo/data-processor/dist";


(async () => {
    // Paso 1: Leer el JSON de stock
    const stockStream = fs.createReadStream("./files/Stock_unificado.json", "utf8");
    await processStockUnificado(stockStream);
    stockStream.close();


    // Paso 2: Procesar el inventario con el prereparto
    const repartoStream = fs.createReadStream("./files/Prereparto_bruto.json", "utf8");
    await processPrerepartoBruto(repartoStream);
    repartoStream.close();
})();



