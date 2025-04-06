DO $$ BEGIN
 CREATE TYPE "public"."fishing_type" AS ENUM('FlyFishing', 'Other');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "destinations" ADD COLUMN "fishing_types" text[];--> statement-breakpoint