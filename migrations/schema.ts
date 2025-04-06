import { pgTable, serial, text, timestamp, foreignKey, integer, boolean, pgEnum } from "drizzle-orm/pg-core"
  import { sql } from "drizzle-orm"

export const itemType = pgEnum("item_type", ['CLOTHING', 'TOILETRIES', 'ELECTRONICS', 'FISHING', 'ESSENTIALS', 'Clothing', 'Toiletries', 'Electronics', 'Fishing', 'Essentials'])
export const tripTacticType = pgEnum("trip_tactic_type", ['Fly', 'TimeOfDay', 'Hatch', 'Methods', 'Weather'])



export const destinations = pgTable("destinations", {
	id: serial("id").primaryKey().notNull(),
	name: text("name").notNull(),
	province: text("province").notNull(),
	country: text("country").notNull(),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	imageUrl: text("image_url").notNull(),
});

export const trips = pgTable("trips", {
	id: serial("id").primaryKey().notNull(),
	description: text("description"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
	destinationId: integer("destination_id"),
	headCount: integer("head_count"),
	startDate: timestamp("start_date", { mode: 'string' }),
	endDate: timestamp("end_date", { mode: 'string' }),
	cityRecOne: text("city_rec_one"),
	cityRecTwo: text("city_rec_two"),
	cityRecThree: text("city_rec_three"),
	tacticsSummary: text("tactics_summary"),
	airportCityRec: text("airport_city_rec"),
	userId: text("user_id").default(''),
},
(table) => {
	return {
		tripsDestinationIdDestinationsIdFk: foreignKey({
			columns: [table.destinationId],
			foreignColumns: [destinations.id],
			name: "trips_destination_id_destinations_id_fk"
		}),
	}
});

export const packingListItems = pgTable("packing_list_items", {
	id: serial("id").primaryKey().notNull(),
	tripId: integer("trip_id"),
	type: itemType("type").notNull(),
	name: text("name").notNull(),
	quantity: integer("quantity"),
	isPacked: boolean("is_packed").default(false),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		packingListItemsTripIdTripsIdFk: foreignKey({
			columns: [table.tripId],
			foreignColumns: [trips.id],
			name: "packing_list_items_trip_id_trips_id_fk"
		}),
	}
});

export const tripTactics = pgTable("trip_tactics", {
	id: serial("id").primaryKey().notNull(),
	tripId: integer("trip_id"),
	type: tripTacticType("type").notNull(),
	name: text("name"),
	createdAt: timestamp("created_at", { mode: 'string' }).defaultNow().notNull(),
	updatedAt: timestamp("updated_at", { mode: 'string' }).defaultNow().notNull(),
},
(table) => {
	return {
		tripTacticsTripIdTripsIdFk: foreignKey({
			columns: [table.tripId],
			foreignColumns: [trips.id],
			name: "trip_tactics_trip_id_trips_id_fk"
		}),
	}
});