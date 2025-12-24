import { drizzle } from 'drizzle-orm/libsql';

// @ts-ignore
import {_DB_URL} from "../drizzle.config";

export const db = drizzle(_DB_URL);