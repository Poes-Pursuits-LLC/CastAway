import { serve } from 'inngest/lambda'
import { orchestrationClient } from '~/clients/orchestration.client'
import { generateTripContent } from '~/functions/helpers/generateTripContent'

const handler = serve({
    client: orchestrationClient,
    functions: [generateTripContent],
})

export { handler }
