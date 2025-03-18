import {
    integer,
    pgEnum,
    pgTable,
    serial,
    text,
    timestamp,
} from 'drizzle-orm/pg-core'
import { trips } from '../trip/trip.sql'
import { sql } from 'drizzle-orm'
import { TacticTypeEnum } from './tactic.model'

export const tacticType = pgEnum(
    'trip_tactic_type',
    Object.values(TacticTypeEnum) as [string, ...string[]],
)

export const tripTactics = pgTable('trip_tactics', {
    id: serial('id').primaryKey(),
    tripId: integer('trip_id').references(() => trips.id),
    type: tacticType('type').notNull().$type<TacticTypeEnum>(),
    name: text('name'),
    createdAt: timestamp('created_at')
        .default(sql`now()`)
        .notNull(),
    updatedAt: timestamp('updated_at')
        .default(sql`now()`)
        .notNull(),
})
