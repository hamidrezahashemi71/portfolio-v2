'use client'

import Logo from "./logo"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import LocaleSwitcher from "./locale-toggle"
import { CiMenuFries } from "react-icons/ci"
import { usePathname } from "next/navigation"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MobileNav(props: MobileNavProps) {

    const { links, lang, mode, title } = props
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-light-accent dark:text-dark-accent" />
            </SheetTrigger>
            <SheetContent side={lang === 'en' ? 'right' : 'left'} className="flex flex-col">
                <div className="flex w-1/2 mt-2 items-center justify-between gap-2">
                    <ModeToggle mode={mode} lang={lang} />
                    <LocaleSwitcher lang={lang} />
                </div>
                <div className="mt-8 mb-16 text-center text-2xl">
                    <Logo title={title} lang={lang} />
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map(({ name, path }) => {
                        return (
                            <Link
                                key={name}
                                href={path}
                                className={`
                                    ${(`${path}` === pathname || `${path}${lang}` === pathname) && 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent'}
                                    text-xl  hover:text-light-accent dark:hover:text-dark-accent transition-all
                                    `}
                            >
                                <SheetClose className="capitalize">
                                    {name}
                                </SheetClose>

                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
