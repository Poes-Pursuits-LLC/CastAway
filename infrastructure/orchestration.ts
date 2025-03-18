import type {} from '../.sst/platform/config'

import { allSecrets } from './secret'

export const orchestration = new sst.aws.Function('Orchestration', {
    handler: 'src/functions/orchestration.handler',
    link: [...allSecrets],
    url: true,
    timeout: '10 minutes',
})

export const outputs = {
    orchestration: orchestration.url,
}
