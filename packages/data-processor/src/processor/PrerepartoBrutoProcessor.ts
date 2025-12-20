import {progressEventEmitter} from "./EventEmitter.js";
import {filterPrereparto} from "../filters/filters.js";
import {PrerepartoBrutoRAW} from "../types/PrerepartoBruto.js";
import { Readable } from "node:stream";
import {chain} from "stream-chain";
import {parser} from "stream-json";
import {streamArray} from "stream-json/streamers/StreamArray.js";
import {pick} from "stream-json/filters/Pick.js";


export default function processPrerepartoBruto(stream: Readable) {

    let count = 0;
    const pipeline = chain([stream, parser(), pick({ filter: 'data' }), streamArray()]);

    const jobId = '1';

    stream.on('data', async ({ value }: {value: PrerepartoBrutoRAW}) => {
        if (filterPrereparto(value)) {
            count++;
            console.log(value);

            if (count % 100 === 0) {
                progressEventEmitter.emit(`progress-${jobId}`, {
                    status: 'processing',
                    processed: count
                });
            }
        }
    });

    stream.on('end', () => {
        progressEventEmitter.emit(`progress-${jobId}`, { status: 'done'});
    });

}