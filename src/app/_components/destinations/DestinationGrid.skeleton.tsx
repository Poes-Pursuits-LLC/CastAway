import { Search } from 'lucide-react'
import { Input } from '@ui/input'
import { Skeleton } from '@ui/skeleton'

const DestinationSkeleton = ({ count = 6 }: { count?: number }) => {
    const skeletonCards = Array.from({ length: count }, (_, i) => i)

    return (
        <>
            <div className="max-w-md mx-auto mb-10">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                    <Input
                        type="text"
                        placeholder="Search destinations..."
                        disabled
                        className="pl-10 h-12 rounded-full opacity-60 cursor-not-allowed"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {skeletonCards.map((index) => (
                    <div
                        key={index}
                        className="relative rounded-2xl overflow-hidden border border-white/30 shadow-md backdrop-blur-md bg-white/10"
                    >
                        <Skeleton className="w-full h-60 bg-gray-400/30" />

                        <div className="absolute bottom-0 left-0 w-full p-5">
                            <div className="flex items-start justify-between">
                                <div className="space-y-2">
                                    <Skeleton className="h-5 w-32 bg-white/30" />
                                    <Skeleton className="h-3 w-24 bg-white/20" />
                                </div>
                                <Skeleton className="h-8 w-16 rounded-full bg-white/20" />
                            </div>

                            <div className="flex flex-wrap gap-1 mt-3">
                                <Skeleton className="h-6 w-20 rounded-full bg-white/20" />
                                <Skeleton className="h-6 w-16 rounded-full bg-white/20" />
                                <Skeleton className="h-6 w-24 rounded-full bg-white/20" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default DestinationSkeleton
