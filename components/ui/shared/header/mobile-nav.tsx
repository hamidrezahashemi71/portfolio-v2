'use client'

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Locale } from "@/i18n.config"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ModeToggle } from "./mode-toggle"
import LocaleSwitcher from "./locale-toggle"
import Logo from "./logo"

type Props = {
    links: {
        name: string
        path: string
    }[]
    lang: Locale
    mode: {
        dark: string,
        light: string,
        system: string
    }
    title: string
}

export default function MobileNav(props: Props) {
    const { links, lang, mode, title } = props
    const pathname = usePathname()

    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <Menu className="text-[32px] text-light-accent dark:text-dark-accent" />
            </SheetTrigger>
            <SheetContent side={lang === 'en' ? 'right' : 'left'} className="flex flex-col">
                <div className="flex w-1/2 items-center justify-between gap-2">
                    <ModeToggle mode={mode} />
                    <LocaleSwitcher />
                </div>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Logo title={title} />
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map(({ name, path }) => {
                        return (
                            <Link
                                href={path}
                                key={name}
                                className={`
                                     ${(`/${lang}${path}` === pathname || `${path}${lang}` === pathname) && 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent'}
                                    text-xl capitalize hover:text-light-accent dark:hover:text-dark-accent transition-all
                                    `}
                            >
                                {name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}
