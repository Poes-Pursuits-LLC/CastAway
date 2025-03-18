export interface TacticItem {
    id: number
    tripId: number | null
    name: string | null
    type: TacticTypeEnum
    createdAt: Date
    updatedAt: Date
}

export enum TacticTypeEnum {
    Fly = 'Fly',
    TimeOfDay = 'TimeOfDay',
    Hatch = 'Hatch',
    Method = 'Methods',
    Weather = 'Weather',
}
