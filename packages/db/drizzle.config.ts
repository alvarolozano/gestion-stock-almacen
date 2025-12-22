import {defineConfig} from 'drizzle-kit';
export const _DB_URL= (process.env.DATABASE_LOCATION ?? `file:${process.cwd()}/data.db`);

export default defineConfig({
    out: './drizzle',
    schema: './src/schemas/index.ts',
    dialect: 'sqlite',
    dbCredentials: {
        url: _DB_URL,
    },
    verbose: true
});
