import { relations } from "drizzle-orm/relations";
import { destinations, trips, packingListItems, tripTactics } from "./schema";

export const tripsRelations = relations(trips, ({one, many}) => ({
	destination: one(destinations, {
		fields: [trips.destinationId],
		references: [destinations.id]
	}),
	packingListItems: many(packingListItems),
	tripTactics: many(tripTactics),
}));

export const destinationsRelations = relations(destinations, ({many}) => ({
	trips: many(trips),
}));

export const packingListItemsRelations = relations(packingListItems, ({one}) => ({
	trip: one(trips, {
		fields: [packingListItems.tripId],
		references: [trips.id]
	}),
}));

export const tripTacticsRelations = relations(tripTactics, ({one}) => ({
	trip: one(trips, {
		fields: [tripTactics.tripId],
		references: [trips.id]
	}),
}));