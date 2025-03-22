import { sql } from 'drizzle-orm'
import { integer, pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core'
import { destinations } from '../destination/destination.sql'

export const trips = pgTable('trips', {
    id: serial('id').primaryKey(),
    userId: text('user_id').default(''),
    destinationId: integer('destination_id').references(() => destinations.id),
    description: text('description'),
    headCount: integer('head_count'),
    airportCityRec: text('airport_city_rec'),
    cityRecOne: text('city_rec_one'),
    cityRecTwo: text('city_rec_two'),
    cityRecThree: text('city_rec_three'),
    tacticsSummary: text('tactics_summary'),
    startDate: timestamp('start_date'),
    endDate: timestamp('end_date'),
    createdAt: timestamp('created_at')
        .default(sql`now()`)
        .notNull(),
    updatedAt: timestamp('updated_at')
        .default(sql`now()`)
        .notNull(),
})
