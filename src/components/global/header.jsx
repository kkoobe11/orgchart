'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'
import { X } from 'lucide-react'

import { Button } from '../ui/button'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../ui/sheet'

import Logo from '@/assets/images/logo.png'
import UserAvatar from '@/assets/images/User@2x.png'
import HomeIcon from '@/assets/svg/home.svg'
import Loader from '@/assets/svg/loader-dark.svg'
import Menu from '@/assets/svg/menu.svg'
import MessageIcon from '@/assets/svg/message.svg'
import MobileIcon from '@/assets/svg/mobile.svg'
import UserIcon from '@/assets/svg/user.svg'
import Org from '@/assets/svg/organization.svg'


const navItems = [
    {
        icon: HomeIcon,
        label: 'Home',
        link: '/',
    },
    {
        icon: MessageIcon,
        label: 'About Us',
        link: '/about-us',
    },
    {
        icon: MobileIcon,
        label: 'Talk with Us',
        link: '/contact-us',
    },
]



const Brand = (props) => {
    return (
        <Link href="/" className="block" {...props}>
            <h1 className="inline-flex items-center gap-2 text-2xl font-bold">
                <Image src={Org} alt="org" width={33} height={33} />
                Org Chart
            </h1>
        </Link>
    )
}

const Header = () => {
    const path = usePathname()

    return (
        <nav className="sticky top-0 z-40 bg-white">
            <div className="flex items-center justify-between h-20 max-w-screen-xl px-4 mx-auto lg:px-8">
                <div className="md:flex-1">
                    <Brand />
                </div>



                <Sheet>
                    <SheetTrigger className="md:hidden">
                        <Image src={Menu} alt='menu'></Image>
                    </SheetTrigger>
                    <SheetContent className="w-full p-0" side="left" >
                        <SheetHeader className="flex-row items-center justify-between h-20 px-4">
                            <SheetClose asChild>
                                <Brand />
                            </SheetClose>
                            <SheetClose>
                                <X className="w-6 h-6" />
                            </SheetClose>
                        </SheetHeader>
                        <ul className="flex flex-col gap-2">
                            {navItems.map(({ label, link, icon: Icon }) => (
                                <li key={link}>
                                    <SheetClose asChild>
                                        <Link
                                            href={link}
                                            className="inline-flex items-center w-full gap-2 p-4 text-primary"
                                        >
                                            <Icon /> {label}
                                        </Link>
                                    </SheetClose>
                                </li>
                            ))}


                                <>
                                    <li>
                                        <SheetClose asChild>
                                            <Link
                                                href="/auth/login"
                                                className="inline-flex items-center w-full gap-2 p-4 text-primary"
                                            >
                                                <UserIcon /> Login
                                            </Link>
                                        </SheetClose>
                                    </li>
                                    <li className="px-4">
                                        <SheetClose asChild>
                                            <Link
                                                href="/auth/signup"
                                                className="inline-flex items-center w-full gap-2 p-4 text-primary"
                                            >
                                                <Button size="lg">Sign Up</Button>
                                            </Link>
                                        </SheetClose>
                                    </li>
                                </>
                        </ul>
                    </SheetContent>
                </Sheet>

                <ul className="justify-center flex-2 hidden gap-2 md:flex">
                    {navItems.map(({ label, link }) => (
                        <li key={link}>
                            <Link
                                href={link}
                                className={clsx(
                                    'px-4 py-2 underline-offset-8 hover:underline decoration-2 hover:text-primary',
                                    path === link ? 'text-primary underline' : 'text-gray-700'
                                )}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>

                    <div className="justify-end flex-1 hidden gap-2 md:flex">
                            <>
                                <Link href="/auth/login">
                                    <Button variant="link" size="lg">
                                        Login
                                    </Button>
                                </Link>
                                <Link href="/auth/signup">
                                    <Button variant="display" size="lg">
                                        Sign Up
                                    </Button>
                                </Link>
                            </>

                    </div>

            </div>
        </nav>
    )
}

export default Header