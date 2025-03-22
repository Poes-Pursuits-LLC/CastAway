import { awsLambdaRequestHandler } from '@trpc/server/adapters/aws-lambda'
import { appRouter } from '../root'
import { createContext } from './trpc'

export const handler = awsLambdaRequestHandler({
    router: appRouter,
    createContext,
    onError: ({ path, error }) => {
        console.error(
            `❌ server failed on ${path ?? '<no-path>'}: ${error.message}`,
        )
    },
})
