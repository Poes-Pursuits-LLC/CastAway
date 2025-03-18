import { sql } from 'drizzle-orm'
import {
    boolean,
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
} from 'drizzle-orm/pg-core'
import { trips } from '../trip/trip.sql'
import { PackingListItemTypeEnum } from './packListItem.model'

export const packingListItemType = pgEnum(
    'item_type',
    Object.values(PackingListItemTypeEnum) as [string, ...string[]],
)

export const packingListItems = pgTable('packing_list_items', {
    id: serial('id').primaryKey(),
    tripId: integer('trip_id').references(() => trips.id),
    type: packingListItemType('type')
        .notNull()
        .$type<PackingListItemTypeEnum>(),
    name: text('name').notNull(),
    quantity: integer('quantity'),
    isPacked: boolean('is_packed').default(false),
    createdAt: timestamp('created_at')
        .default(sql`now()`)
        .notNull(),
    updatedAt: timestamp('updated_at')
        .default(sql`now()`)
        .notNull(),
})
