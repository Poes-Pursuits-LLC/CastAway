'use client'

import { useState } from 'react'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@ui/tabs'
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@ui/table'
import { Checkbox } from '@ui/checkbox'
import { Shirt, Smartphone, Package, Bath, Fish } from 'lucide-react'
import { cn } from '~/lib/utils'
import {
    PackingListItem,
    PackingListItemTypeEnum,
} from '~/core/packing-list/packListItem.model'

const categoryIcons = {
    [PackingListItemTypeEnum.Clothing]: <Shirt className="h-4 w-4" />,
    [PackingListItemTypeEnum.Electronics]: <Smartphone className="h-4 w-4" />,
    [PackingListItemTypeEnum.Essentials]: <Package className="h-4 w-4" />,
    [PackingListItemTypeEnum.Toiletries]: <Bath className="h-4 w-4" />,
    [PackingListItemTypeEnum.Fishing]: <Fish className="h-4 w-4" />,
}

const PackingList = (props: { packingList: PackingListItem[] }) => {
    const [selectedCategory, setSelectedCategory] =
        useState<PackingListItemTypeEnum>(PackingListItemTypeEnum.Clothing)
    const [items, setItems] = useState<PackingListItem[]>(props.packingList)

    const toggleItemPacked = (id: string) => {
        setItems(
            items.map((item) =>
                item.id.toString() === id
                    ? { ...item, isPacked: !item.isPacked }
                    : item,
            ),
        )
    }

    const filteredItems = items.filter((item) => item.type === selectedCategory)

    return (
        <div className="backdrop-blur-md bg-white/50 rounded-xl border shadow-lg p-6 mb-8">
            <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Packing List 🧳
                </h2>
                <span className="ml-2 text-sm text-gray-500">
                    {items.filter((i) => i.isPacked).length} of {items.length}{' '}
                    packed
                </span>
            </div>

            <Tabs
                defaultValue="Clothes"
                onValueChange={(value) =>
                    setSelectedCategory(value as PackingListItemTypeEnum)
                }
                className="w-full"
            >
                <TabsList className="mb-6 w-full flex flex-wrap justify-start gap-2 bg-white/50">
                    {(
                        Object.keys(categoryIcons) as PackingListItemTypeEnum[]
                    ).map((category) => (
                        <TabsTrigger
                            key={category}
                            value={category}
                            className={cn(
                                'flex items-center gap-1 data-[state=active]:bg-[#0EA5E9] data-[state=active]:text-white',
                                selectedCategory === category
                                    ? 'bg-[#0EA5E9] text-white'
                                    : '',
                            )}
                        >
                            {categoryIcons[category]}
                            {category}
                            <span className="ml-1 text-xs rounded-full bg-white/20 px-1.5 py-0.5">
                                {
                                    items.filter(
                                        (item) => item.type === category,
                                    ).length
                                }
                            </span>
                        </TabsTrigger>
                    ))}
                </TabsList>

                {(Object.keys(categoryIcons) as PackingListItemTypeEnum[]).map(
                    (category) => (
                        <TabsContent
                            key={category}
                            value={category}
                            className="mt-0"
                        >
                            <div className="rounded-md border border-white/50 bg-white/50 overflow-hidden">
                                <Table>
                                    <TableHeader className="bg-white/20">
                                        <TableRow>
                                            <TableHead className="w-[300px]">
                                                Name
                                            </TableHead>
                                            <TableHead className="w-[100px]">
                                                Type
                                            </TableHead>
                                            <TableHead className="w-[100px] text-center">
                                                Quantity
                                            </TableHead>
                                            <TableHead className="w-[100px] text-center">
                                                Packed
                                            </TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {filteredItems.map((item) => (
                                            <TableRow
                                                key={item.id}
                                                className="hover:bg-white/30"
                                            >
                                                <TableCell>
                                                    {item.name}
                                                </TableCell>
                                                <TableCell>
                                                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium rounded-full bg-pink-100 text-pink-800">
                                                        {item.type}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {item.quantity}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <div className="flex justify-center">
                                                        <Checkbox
                                                            checked={
                                                                item.isPacked!
                                                            }
                                                            onCheckedChange={() =>
                                                                toggleItemPacked(
                                                                    item.id.toString(),
                                                                )
                                                            }
                                                            className={`${item.isPacked ? 'bg-[#0EA5E9] border-[#0EA5E9]' : ''}`}
                                                        />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        </TabsContent>
                    ),
                )}
            </Tabs>
        </div>
    )
}

export default PackingList
