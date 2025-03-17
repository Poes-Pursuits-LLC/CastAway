import type {} from '../.sst/platform/config'

export const secret = {
    // Web Secrets
    WebUrl: new sst.Secret('WebUrl'),
    ClerkSecret: new sst.Secret('ClerkSecret'),
    ClerkPublishableKey: new sst.Secret('ClerkPublishableKey'),

    // Server Secrets
    DatabaseUrl: new sst.Secret('DatabaseUrl'),
    XAIApiKey: new sst.Secret('XAIApiKey'),
    XAIUrl: new sst.Secret('XAIUrl'),
    InngestSigningKey: new sst.Secret('InngestSigningKey'),
    InngestEventKey: new sst.Secret('InngestEventKey'),
}

export const allSecrets = Object.values(secret)
