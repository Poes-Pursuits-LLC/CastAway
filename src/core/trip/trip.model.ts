export interface Trip {
    id: number
    description: string
    destinationId: number
    inPlanning: boolean
    headCount: number
    startDate: Date
    endDate: Date
    createdAt: Date
    updatedAt: Date
}
