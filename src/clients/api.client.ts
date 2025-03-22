import 'server-only'
import { createTRPCClient, httpBatchLink } from '@trpc/client'
import SuperJSON from 'superjson'
import type { AppRouter } from '@server/root'
import { currentUser } from '@clerk/nextjs/server'

const api = createTRPCClient<AppRouter>({
    links: [
        httpBatchLink({
            url: process.env.NEXT_PUBLIC_SERVER_URL!,
            transformer: SuperJSON,
            async headers() {
                const user = await currentUser()
                return {
                    'x-userid': user?.id ?? '',
                }
            },
        }),
    ],
})

export { api }
