import { sql } from 'drizzle-orm'
import { pgTable, serial, text, pgEnum, timestamp } from 'drizzle-orm/pg-core'
import { FishingTypeEnum } from './destination.model'

export const fishingTypes = pgEnum(
    'fishing_types',
    Object.values(FishingTypeEnum) as [string, ...string[]],
)

export const destinations = pgTable('destinations', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    province: text('province').notNull(),
    country: text('country').notNull(),
    imageUrl: text('image_url').notNull(),
    fishingTypes: fishingTypes('fishing_types').array().notNull(),
    createdAt: timestamp('created_at')
        .default(sql`now()`)
        .notNull(),
    updatedAt: timestamp('updated_at')
        .default(sql`now()`)
        .notNull(),
})
