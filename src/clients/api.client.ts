import 'server-only'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import SuperJSON from 'superjson'
import type { AppRouter } from '@server/root'

const api = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: process.env.NEXT_PUBLIC_SERVER_URL!,
            transformer: SuperJSON,
        }),
    ],
})

export { api }
