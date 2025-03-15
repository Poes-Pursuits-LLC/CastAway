import { boolean, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'

export const trips = pgTable('trips', {
    id: serial('id').primaryKey(),
    description: text('description'),
    inPlanning: boolean('in_planning'),
    createdAt: timestamp('created_at'),
    updatedAt: timestamp('updated_at'),
})
