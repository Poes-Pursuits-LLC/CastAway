import OpenAI from 'openai'
import { Resource } from 'sst'
import { zodResponseFormat } from 'openai/helpers/zod'
import { z } from 'zod'
import { PackingListItemTypeEnum } from '~/core/packing-list/packListItem.model'
import { TacticTypeEnum } from '~/core/fishing-tactics/tactic.model'

const openai = new OpenAI({
    apiKey: Resource.XAIApiKey.value,
    baseURL: Resource.XAIUrl.value,
})

export const generateTripDetails = async ({
    destinationName,
    headCount,
    startDate,
    endDate,
    species,
}: {
    destinationName: string
    headCount: number
    startDate: string
    endDate: string
    species: string
}) => {
    const systemPrompt = `you are an expert trip planner and fly fishing expert who will construct trips for users 
        based on where they want to go to fly fishing. 
        You will do your best to provide helpful advice and suggestions for the trip.
        You will return your suggestions in structured JSON, using the specific inputs provided 
        by the user to generate the trip details.

    Please provide a detailed plan for the trip, including ALL of the following:
    - A basic trip description that respects the user inputs.
    - Up to three cities or towns that I should book accommodations in that would be a good base of operations for fishing.
    - a recommended city with a decent airport that I should fly in to to get to the area.
    - A list of up to 5 flies to try that are appropriate for the species, typical weather conditions, and time of year. 
    (put them in the "tactics" list with a { name: [flyName] type: Fly } structure)
    - A list of up to 5 "hatch" or bugs that are active in the area at that time of year.
    (put them in the "tactics" list with a { name: [flyName] type: Hatch } structure)
    - A list of up to 3 types of day it could make sense to go fishing.
    (put them in the "tactics" list with a { name: [flyName] type: TimeOfDay } structure)
    - A list of up to 3 tactics that could make sense to use to target that fish that times of year.
    (put them in the "tactics" list with a { name: [flyName] type: Method } structure)
    - A list of 3 typical weather conditions that could be expected in the area at that time of year.
    (put them in the "tactics" list with a { name: [flyName] type: Weather } structure)
    - A summary of the tactics that should be used and the best times to use them, incorporating the weather, hatch, and tactics.
    - A rudimentary packing list broken down into essentials, electronics, clothes, toiletries, and fishing-specific items as well as quantities. Up to 10 items per category.
    They should be organized as { name: [name of item] type: [type of item, IE Clothes, Electronics, etc.]. }
    - a list of up to 3 nearby fly fishing shops that are in the area with contact info, if you can find it.

    INPUT:
    `

    const prompt = JSON.stringify({
        destinationName,
        headCount,
        startDate,
        endDate,
        species,
    })

    const completion = await openai.beta.chat.completions.parse({
        model: 'grok-2',
        n: 1,
        temperature: 0.9,
        stream: false,
        response_format: zodResponseFormat(
            z.object({
                description: z.string(),
                airportCityRec: z.string(),
                cityRecOne: z.string(),
                cityRecTwo: z.string(),
                cityRecThree: z.string(),
                tacticsSummary: z.string(),
                tactics: z.array(
                    z.object({
                        name: z.string(),
                        type: z.nativeEnum(TacticTypeEnum),
                    }),
                ),
                packingList: z.array(
                    z.object({
                        name: z.string(),
                        quantity: z.number(),
                        type: z.nativeEnum(PackingListItemTypeEnum),
                    }),
                ),
                // flyShops: z.array(
                //     z.object({
                //         name: z.string(),
                //         address: z.string(),
                //         phone: z.string(),
                //         website: z.string().optional(),
                //     }),
                // ),
            }),
            'trip',
        ),
        messages: [
            {
                role: 'system',
                content: systemPrompt,
            },
            {
                role: 'user',
                content: prompt,
            },
        ],
    })

    if (!completion.choices[0]) {
        throw new Error('No completion generated')
    }

    return completion.choices[0].message.parsed
}

const xAiClient = {
    generateTripDetails,
}

export { xAiClient }
