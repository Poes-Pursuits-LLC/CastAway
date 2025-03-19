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

# CICD
deploy:
	npx sst deploy --stage production --verbose
