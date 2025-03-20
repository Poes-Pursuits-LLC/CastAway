# DEVELOPMENT
dev:
	npx sst dev

check:
	npx sst shell pnpm run check

# DB
push:
	npx sst shell drizzle-kit push

pull:
	npx sst shell drizzle-kit pull

migrate-generate:
	npx sst shell drizzle-kit generate

migrate-apply:
	npx sst shell drizzle-kit migrate

seed:
	npx sst shell tsx ops/seed.ts

# CICD
deploy:
	npx sst deploy --stage production --verbose