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

export type PackingItem = {
    id: string
    name: string
    category: PackingCategory
    quantity: number
    notes?: string
    packed: boolean
}

export type PackingCategory =
    | 'Clothes'
    | 'Electronics'
    | 'Essentials'
    | 'Toiletries'
    | 'Fishing'

const mockPackingItems: PackingItem[] = [
    // Clothes
    {
        id: 'c1',
        name: 'Sweater',
        category: 'Clothes',
        quantity: 2,
        packed: false,
    },
    {
        id: 'c2',
        name: 'Shirt',
        category: 'Clothes',
        quantity: 2,
        packed: false,
    },
    {
        id: 'c3',
        name: 'T-Shirt',
        category: 'Clothes',
        quantity: 5,
        packed: false,
    },
    {
        id: 'c4',
        name: 'Pullover',
        category: 'Clothes',
        quantity: 2,
        packed: false,
    },
    { id: 'c5', name: 'Coat', category: 'Clothes', quantity: 1, packed: false },
    {
        id: 'c6',
        name: 'Jacket',
        category: 'Clothes',
        quantity: 1,
        packed: false,
    },
    {
        id: 'c7',
        name: 'Underwear',
        category: 'Clothes',
        quantity: 14,
        packed: false,
    },
    {
        id: 'c8',
        name: 'Pants',
        category: 'Clothes',
        quantity: 3,
        packed: false,
    },
    {
        id: 'c9',
        name: 'Jeans',
        category: 'Clothes',
        quantity: 1,
        packed: false,
    },
    {
        id: 'c10',
        name: 'Socks',
        category: 'Clothes',
        quantity: 7,
        packed: false,
    },
    { id: 'c11', name: 'Cap', category: 'Clothes', quantity: 1, packed: false },
    { id: 'c12', name: 'Hat', category: 'Clothes', quantity: 1, packed: false },
    {
        id: 'c13',
        name: 'Pajamas',
        category: 'Clothes',
        quantity: 1,
        packed: false,
    },

    // Electronics
    {
        id: 'e1',
        name: 'Phone',
        category: 'Electronics',
        quantity: 1,
        packed: false,
    },
    {
        id: 'e2',
        name: 'Charger',
        category: 'Electronics',
        quantity: 2,
        packed: false,
    },
    {
        id: 'e3',
        name: 'Laptop',
        category: 'Electronics',
        quantity: 1,
        packed: false,
    },
    {
        id: 'e4',
        name: 'Camera',
        category: 'Electronics',
        quantity: 1,
        packed: false,
    },
    {
        id: 'e5',
        name: 'Headphones',
        category: 'Electronics',
        quantity: 1,
        packed: false,
    },

    // Essentials
    {
        id: 'es1',
        name: 'Passport',
        category: 'Essentials',
        quantity: 1,
        packed: false,
    },
    {
        id: 'es2',
        name: 'Wallet',
        category: 'Essentials',
        quantity: 1,
        packed: false,
    },
    {
        id: 'es3',
        name: 'Travel Insurance',
        category: 'Essentials',
        quantity: 1,
        packed: false,
    },
    {
        id: 'es4',
        name: 'Cash',
        category: 'Essentials',
        quantity: 1,
        packed: false,
    },
    {
        id: 'es5',
        name: 'Credit Cards',
        category: 'Essentials',
        quantity: 2,
        packed: false,
    },

    // Toiletries
    {
        id: 't1',
        name: 'Toothbrush',
        category: 'Toiletries',
        quantity: 1,
        packed: false,
    },
    {
        id: 't2',
        name: 'Toothpaste',
        category: 'Toiletries',
        quantity: 1,
        packed: false,
    },
    {
        id: 't3',
        name: 'Shampoo',
        category: 'Toiletries',
        quantity: 1,
        packed: false,
    },
    {
        id: 't4',
        name: 'Conditioner',
        category: 'Toiletries',
        quantity: 1,
        packed: false,
    },
    {
        id: 't5',
        name: 'Soap',
        category: 'Toiletries',
        quantity: 1,
        packed: false,
    },
    {
        id: 't6',
        name: 'Deodorant',
        category: 'Toiletries',
        quantity: 1,
        packed: false,
    },
    // Fishing
    {
        id: 'f1',
        name: 'Fishing Rod',
        category: 'Fishing',
        quantity: 1,
        packed: false,
    },
    {
        id: 'f2',
        name: 'Fishing Line',
        category: 'Fishing',
        quantity: 1,
        packed: false,
    },
    {
        id: 'f3',
        name: 'Leaders',
        category: 'Fishing',
        quantity: 3,
        packed: false,
    },
    {
        id: 'f4',
        name: 'Waders',
        category: 'Fishing',
        quantity: 1,
        packed: false,
    },
]

const categoryIcons = {
    Clothes: <Shirt className="h-4 w-4" />,
    Electronics: <Smartphone className="h-4 w-4" />,
    Essentials: <Package className="h-4 w-4" />,
    Toiletries: <Bath className="h-4 w-4" />,
    Fishing: <Fish className="h-4 w-4" />,
}

const PackingList = () => {
    const [selectedCategory, setSelectedCategory] =
        useState<PackingCategory>('Clothes')
    const [items, setItems] = useState<PackingItem[]>(mockPackingItems)

    const toggleItemPacked = (id: string) => {
        setItems(
            items.map((item) =>
                item.id === id ? { ...item, packed: !item.packed } : item,
            ),
        )
    }

    const filteredItems = items.filter(
        (item) => item.category === selectedCategory,
    )

    return (
        <div className="backdrop-blur-md bg-white/75 rounded-xl border shadow-lg p-6 mb-8">
            <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                    Packing List 🧳
                </h2>
                <span className="ml-2 text-sm text-gray-500">
                    {items.filter((i) => i.packed).length} of {items.length}{' '}
                    packed
                </span>
            </div>

            <Tabs
                defaultValue="Clothes"
                onValueChange={(value) =>
                    setSelectedCategory(value as PackingCategory)
                }
                className="w-full"
            >
                <TabsList className="mb-6 w-full flex flex-wrap justify-start gap-2 bg-white/50">
                    {(Object.keys(categoryIcons) as PackingCategory[]).map(
                        (category) => (
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
                                            (item) =>
                                                item.category === category,
                                        ).length
                                    }
                                </span>
                            </TabsTrigger>
                        ),
                    )}
                </TabsList>

                {(Object.keys(categoryIcons) as PackingCategory[]).map(
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
                                                        {item.category}
                                                    </span>
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    {item.quantity}
                                                </TableCell>
                                                <TableCell>
                                                    {item.notes || ''}
                                                </TableCell>
                                                <TableCell className="text-center">
                                                    <div className="flex justify-center">
                                                        <Checkbox
                                                            checked={
                                                                item.packed
                                                            }
                                                            onCheckedChange={() =>
                                                                toggleItemPacked(
                                                                    item.id,
                                                                )
                                                            }
                                                            className={`${item.packed ? 'bg-[#0EA5E9] border-[#0EA5E9]' : ''}`}
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
