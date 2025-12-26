"use server"

import {processJSON} from "@repo/data-processor";
import {RepartoProcesado} from "@repo/data-processor/types"
import {cacheTag} from "next/cache";


export interface DataProviderState {
    data?: RepartoProcesado[]
}

export default async function loadData(): Promise<DataProviderState> {
    "use cache"
    cacheTag('data');

    const data = processJSON();

    return {
        data
    }
}