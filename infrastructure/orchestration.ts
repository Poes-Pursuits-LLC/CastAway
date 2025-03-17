import type {} from '../.sst/platform/config'

import { allSecrets } from './secret'

export const orchestration = new sst.aws.Function('Orchestration', {
    handler: 'src/functions/orchestration.handler',
    link: [...allSecrets],
    timeout: '5 minutes',
    url: true,
})

export const outputs = {
    orchestration: orchestration.url,
}
