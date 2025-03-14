import { readdirSync } from 'fs'
import type {} from './.sst/platform/config'

export default $config({
    app(input) {
        return {
            name: 'travel-app',
            removal: input?.stage === 'production' ? 'retain' : 'remove',
            protect: ['production'].includes(input?.stage),
            home: 'aws',
        }
    },
    async run() {
        const outputs = {}

        for (const value of readdirSync('./infrastructure/')) {
            const result = await import('./infrastructure/' + value)
            if (result.outputs) Object.assign(outputs, result.outputs)
        }

        return outputs
    },
})
