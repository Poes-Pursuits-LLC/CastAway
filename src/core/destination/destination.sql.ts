import { sql } from 'drizzle-orm'
import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const destinations = pgTable('destinations', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    province: text('province').notNull(),
    country: text('country').notNull(),
    imageUrl: text('image_url').notNull(),
    createdAt: timestamp('created_at')
        .default(sql`now()`)
        .notNull(),
    updatedAt: timestamp('updated_at')
        .default(sql`now()`)
        .notNull(),
})
