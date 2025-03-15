import OpenAI from 'openai'
import { Resource } from 'sst'
import { zodResponseFormat } from 'openai/helpers/zod'
import { z } from 'zod'

const openai = new OpenAI({
    apiKey: Resource.XAIApiKey.value,
    baseURL: Resource.XAIUrl.value,
})

export const generateTrip = async (prompt: string) => {
    const systemPrompt =
        "you are an expert trip planner and fly fishing expert who will construct trips for users based on where they want to go (to fish). Return the field 'tripDescription' with the description as value"

    const completion = await openai.beta.chat.completions.parse({
        model: 'grok-2',
        n: 1,
        temperature: 0.9,
        stream: false,
        response_format: zodResponseFormat(
            z.object({
                tripDescription: z.string(),
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

    return completion.choices[0].message.parsed!.tripDescription
}

const xAiClient = {
    generateTrip,
}

export { xAiClient }
