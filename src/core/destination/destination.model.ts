export interface Destination {
    id: number
    name: string
    province: string
    country: string
    imageUrl: string
    fishingTypes: FishingTypeEnum
    createdAt: Date
    updatedAt: Date
}

export enum FishingTypeEnum {
  FlyFishing = 'FlyFishing',
  Other = 'Other'
}
