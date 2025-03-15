import { defineConfig } from 'drizzle-kit'
import { Resource } from 'sst'
import './sst-env.d.ts'

export default defineConfig({
    schema: ['src/core/**/*.sql.ts'],
    dialect: 'postgresql',
    out: './migrations',
    dbCredentials: {
        url: Resource.DatabaseUrl.value,
    },
})
