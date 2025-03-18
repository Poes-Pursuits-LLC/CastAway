export enum PackingListItemTypeEnum {
    Clothing = 'Clothing',
    Toiletries = 'Toiletries',
    Electronics = 'Electronics',
    Fishing = 'Fishing',
    Essentials = 'Essentials',
}

export interface PackingListItem {
    id: number
    tripId: number | null
    name: string
    type: PackingListItemTypeEnum
    quantity: number | null
    isPacked: boolean | null
    createdAt: Date
    updatedAt: Date
}
