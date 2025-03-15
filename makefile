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

