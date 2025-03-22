import { UserButton } from '@clerk/nextjs'
import { Home, MapIcon, Settings } from 'lucide-react'
import Link from 'next/link'
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
} from '~/ui/sidebar'

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SidebarProvider>
            <div className="flex min-h-screen w-full">
                <Sidebar>
                    <SidebarHeader>
                        <div className="flex items-center px-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-blue-600">
                                <span className="text-xl font-bold text-white"></span>
                            </div>
                            <div className="ml-2">
                                <p className="text-sm font-semibold">Roam</p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">
                                    Dashboard
                                </p>
                            </div>
                        </div>
                    </SidebarHeader>
                    <SidebarContent>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <Link href="/dashboard">
                                    <SidebarMenuButton tooltip="Home">
                                        <Home />
                                        <span>Home</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href="/plan-trip">
                                    <SidebarMenuButton tooltip="Plan Trip">
                                        <MapIcon />
                                        <span>Plan Trip</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                            <SidebarMenuItem>
                                <Link href="/dashboard/trips">
                                    <SidebarMenuButton tooltip="My Trips">
                                        <Settings />
                                        <span>My Trips</span>
                                    </SidebarMenuButton>
                                </Link>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarContent>
                    <SidebarFooter>
                        <UserButton
                            userProfileProps={{
                                appearance: {
                                    elements: {
                                        profileSection__emailAddresses: {
                                            display: 'none',
                                        },
                                        profileSection__danger: {
                                            display: 'none',
                                        },
                                        profileSection__connectedAccounts: {
                                            display: 'none',
                                        },
                                    },
                                },
                            }}
                        />
                    </SidebarFooter>
                </Sidebar>
                {children}
            </div>
        </SidebarProvider>
    )
}
