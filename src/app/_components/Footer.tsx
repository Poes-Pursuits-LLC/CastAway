import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    ChevronRight,
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@ui/button'
import { Separator } from '@ui/separator'
import { Logo } from './Logo'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="w-full  bg-gray-100 border-t border-gray-200">
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {/* Company Info */}
                    <div className="flex flex-col">
                        <Logo />
                        <p className="text-sm text-gray-600 max-w-xs">
                            Your premier destination for expertly guided fly
                            fishing adventures in the most beautiful waters
                            around the world.
                        </p>
                        <p className="text-sm text-gray-600 mt-4">
                            &copy; {currentYear} CastAway Inc. All rights
                            reserved.
                        </p>
                    </div>

                    {/* Socials */}
                    <div className="flex flex-col">
                        <h3 className="font-medium text-gray-800 mb-4">
                            Connect With Us
                        </h3>
                        <div className="flex space-x-4">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
                            >
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
                            >
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
                            >
                                <Twitter className="h-5 w-5" />
                                <span className="sr-only">Twitter</span>
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="rounded-full h-9 w-9 text-[#0EA5E9] hover:bg-[#0EA5E9]/10"
                            >
                                <Youtube className="h-5 w-5" />
                                <span className="sr-only">YouTube</span>
                            </Button>
                        </div>
                    </div>

                    {/* Company Links */}
                    <div className="flex flex-col">
                        <h3 className="font-medium text-gray-800 mb-4">
                            Company
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/about"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>About Us</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Terms of Service</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Privacy Policy</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Contact Us</span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* App-Specific Links */}
                    <div className="flex flex-col">
                        <h3 className="font-medium text-gray-800 mb-4">
                            Fishing Adventures
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/plan-trip"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Plan Your Trip</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/signup"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Create Account</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/login"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Sign In</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/destinations"
                                    className="text-gray-600 hover:text-[#0EA5E9] flex items-center gap-1"
                                >
                                    <ChevronRight className="h-3 w-3" />
                                    <span>Explore Destinations</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <Separator className="my-6 bg-gray-200" />

                <div className="text-center text-sm text-gray-500">
                    <p>
                        Designed with ❤️ for fly fishing enthusiasts everywhere
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
