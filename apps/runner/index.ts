
import * as fs from "fs";
import {processJSON} from "@repo/data-processor/dist/processor";

fs.writeFileSync('output/procesado.json', JSON.stringify(processJSON(), null, 2));



