import type {} from '../.sst/platform/config'

export const secret = {
    // Web Secrets
    WebUrl: new sst.Secret('WebUrl'),
    ClerkSecret: new sst.Secret('ClerkSecret'),
    ClerkPublishableKey: new sst.Secret('ClerkPublishableKey'),

    // Server Secrets
}

export const allSecrets = Object.values(secret)
