import type {} from '../.sst/platform/config'

import { server } from './server'
import { allSecrets, secret } from './secret'
import { type NextjsArgs } from '../.sst/platform/src/components/aws'
import { isProduction } from './stage'

const webConfig: NextjsArgs = {
    link: [server, ...allSecrets],
    dev: {
        autostart: true,
        command: 'pnpm run dev',
    },
    environment: {
        WEB_URL: secret.WebUrl.value,
        FLAG_MAX_TRIPS_PLANNED: secret.FlagMaxTripsPlanned.value,
        FLAG_MULTI_FISHING_TYPES: secret.FlagMultiFishingTypes.value,
        NEXT_PUBLIC_SERVER_URL: secret.ServerUrl.value,
        CLERK_SECRET_KEY: secret.ClerkSecret.value,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: secret.ClerkPublishableKey.value,
    },
}

if (isProduction) {
    webConfig.domain = {
        name: 'roam.fish',
        redirects: ['www.roam.fish'],
    }
}

export const web = new sst.aws.Nextjs('Web', webConfig)

export const outputs = {
    webUrl: web.url,
}
