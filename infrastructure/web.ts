import type {} from '../.sst/platform/config'

import { server } from './server'
import { allSecrets, secret } from './secret'
import { type NextjsArgs } from '../.sst/platform/src/components/aws'
// import { isProduction } from './stage'

const webConfig: NextjsArgs = {
    link: [server, ...allSecrets],
    dev: {
        autostart: true,
        command: 'pnpm run dev',
    },
    /**
     * @summary
     * This has been found to be the simplest and most reliable way to get secrets
     * injected into the runtime, middleware, etc. of the Next.js project.
     */
    environment: {
        WEB_URL: secret.WebUrl.value,
        CLERK_SECRET_KEY: secret.ClerkSecret.value,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: secret.ClerkPublishableKey.value,
    },
}

// if (isProduction) {
//     webConfig.domain = {
//         name: 'castaway.io',
//         redirects: ['www.castaway.io'],
//     }
// }

export const web = new sst.aws.Nextjs('Web', webConfig)

export const outputs = {
    webUrl: web.url,
}
