/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */

declare module "sst" {
  export interface Resource {
    "ClerkPublishableKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "ClerkSecret": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "DatabaseUrl": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "FlagMaxTripsPlanned": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "FlagMultiFishingTypes": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "InngestEventKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "InngestSigningKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Orchestration": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "Server": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "ServerUrl": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "Web": {
      "type": "sst.aws.Nextjs"
      "url": string
    }
    "WebUrl": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "XAIApiKey": {
      "type": "sst.sst.Secret"
      "value": string
    }
    "XAIUrl": {
      "type": "sst.sst.Secret"
      "value": string
    }
  }
}
/// <reference path="sst-env.d.ts" />

import "sst"
export {}