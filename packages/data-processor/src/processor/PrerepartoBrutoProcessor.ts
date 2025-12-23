import {filterPrereparto} from "../filters/filters.js";
import {PrerepartoBrutoRAW} from "../types/PrerepartoBruto.js";
import {Readable} from "node:stream";
import {chain} from "stream-chain";
import {parser} from "stream-json";
import {streamArray} from "stream-json/streamers/StreamArray.js";
import {pick} from "stream-json/filters/Pick.js";
import {db, inArray, stockUnificado} from "@repo/db";


export default function processPrerepartoBruto(stream: Readable): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        let count = 0;
        const pipeline = chain([stream, parser(), pick({ filter: 'data' }), streamArray()]);
        const jobId = '1';

        const BATCH_SIZE = 100;
        let readBatch: PrerepartoBrutoRAW[] = [];

        const stockSize = new Map<string, string>();

        pipeline.on('data', async ({ value }: {value: PrerepartoBrutoRAW}) => {

            if (filterPrereparto(value)) {
                readBatch.push(value);
                count++;
            }

            if(readBatch.length >= BATCH_SIZE) {
                stream.pause();
                const res = await db
                        .select()
                        .from(stockUnificado)
                        .where(inArray(stockUnificado.key, readBatch.map(e => e.key)));

                console.log(res.length);
            }
        });

        pipeline.on('end', () => {
            resolve();
        });
    });
}