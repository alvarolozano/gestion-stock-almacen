import {Readable} from "node:stream";
import {chain} from "stream-chain";
import {parser} from "stream-json";
import {pick} from "stream-json/filters/Pick";
import {streamArray} from "stream-json/streamers/StreamArray";
import {db, stockUnificado} from "@repo/db";
import {StockUnificadoRAW} from "../types/StockUnificado";

export default function processStockUnificado(stream: Readable): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
        await db.delete(stockUnificado);

        const pipeline = chain([stream, parser(), pick({ filter: 'data' }), streamArray()]);

        const BATCH_SIZE = 100;
        let batch: typeof stockUnificado.$inferInsert[] = [];

        pipeline.on('data', async ({ value }: {value: StockUnificadoRAW}) => {

            console.log('key', value.key)
            batch.push({
                key: value.key,
                tipoStockDesc: value.tipoStockDesc,
                stockEm05: value.stockEm05,
                stockEm01: value.stockEm01,
                posicioncompleta: value.posicioncompleta
            });


            if(batch.length >= BATCH_SIZE) {
                stream.pause();

                await db
                    .insert(stockUnificado)
                    .values(batch);

                batch = [];
                stream.resume();
            }
        });

        pipeline.on('end', async () => {
            if(batch.length > 0) {
                await db
                    .insert(stockUnificado)
                    .values(batch);
            }
            resolve();
        });

    })
}