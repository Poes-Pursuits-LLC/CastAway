import { db } from '../src/clients/db.client'
import { destinations } from '../src/core/destination/destination.sql'

const seedItems = []

const seed = async () => {
    await db.insert(destinations).values(seedItems)
}

;(async () => {
    await seed()
})()
