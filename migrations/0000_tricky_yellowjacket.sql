DO $$ BEGIN
 CREATE TYPE "public"."trip_tactic_type" AS ENUM('Fly', 'TimeOfDay', 'Hatch', 'Methods', 'Weather');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."item_type" AS ENUM('Clothing', 'Toiletries', 'Electronics', 'Fishing', 'Essentials');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "destinations" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"state" text NOT NULL,
	"country" text NOT NULL,
	"image_url" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trip_tactics" (
	"id" serial PRIMARY KEY NOT NULL,
	"trip_id" integer,
	"type" "trip_tactic_type" NOT NULL,
	"name" text,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "packing_list_items" (
	"id" serial PRIMARY KEY NOT NULL,
	"trip_id" integer,
	"type" "item_type" NOT NULL,
	"name" text NOT NULL,
	"quantity" integer,
	"is_packed" boolean DEFAULT false,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "trips" (
	"id" serial PRIMARY KEY NOT NULL,
	"destination_id" integer,
	"description" text,
	"head_count" integer,
	"airport_city_rec" text,
	"city_rec_one" text,
	"city_rec_two" text,
	"city_rec_three" text,
	"tactics_summary" text,
	"start_date" timestamp,
	"end_date" timestamp,
	"created_at" timestamp DEFAULT now() NOT NULL,
	"updated_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trip_tactics" ADD CONSTRAINT "trip_tactics_trip_id_trips_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "packing_list_items" ADD CONSTRAINT "packing_list_items_trip_id_trips_id_fk" FOREIGN KEY ("trip_id") REFERENCES "public"."trips"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "trips" ADD CONSTRAINT "trips_destination_id_destinations_id_fk" FOREIGN KEY ("destination_id") REFERENCES "public"."destinations"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
