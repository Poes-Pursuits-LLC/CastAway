import type {} from '../.sst/platform/config'

import { allSecrets } from './secret'

export const server = new sst.aws.Function('Server', {
    url: true,
    handler: 'src/server/_internals/handler.handler',
    link: [...allSecrets],
})

export const outputs = {
    serverUrl: server.url,
}
