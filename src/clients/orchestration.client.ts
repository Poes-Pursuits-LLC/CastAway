import { EventSchemas, Inngest, LiteralZodEventSchema } from 'inngest'
import { Resource } from 'sst'
import { z } from 'zod'

process.env.INNGEST_EVENT_KEY = Resource.InngestEventKey.value
process.env.INNGEST_SIGNING_KEY = Resource.InngestSigningKey.value

const ZSubmitTrip = z.object({
    name: z.literal('generate.trip.content'),
    data: z.object({
        tripId: z.number(),
        destinationName: z.string(),
        headCount: z.number(),
        startDate: z.string(),
        endDate: z.string(),
    }),
}) satisfies LiteralZodEventSchema

export const orchestrationClient = new Inngest({
    id: 'RoamFish',
    name: 'RoamFish',
    eventKey: process.env.INNGEST_EVENT_KEY!,
    signingKey: process.env.INNGEST_SIGNING_KEY!,
    isDev: false,
    schemas: new EventSchemas().fromZod([ZSubmitTrip]),
})
