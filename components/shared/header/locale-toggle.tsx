'use client'

import Link from 'next/link'
import { i18n } from '@/i18n.config'
import { FaGlobe } from "react-icons/fa"
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LocaleSwitcher() {

    const pathName = usePathname()

    const redirectedPathName = (locale: string) => {
        if (!pathName) return '/'
        const segments = pathName.split('/')
        segments[1] = locale
        return segments.join('/')
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="lg" className="outline-none" >
                    <FaGlobe size={'20px'} />
                    <span className="sr-only">Toggle locale</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {i18n.locales.map(locale => {
                    return (
                        <DropdownMenuItem key={locale}>
                            <Link
                                href={redirectedPathName(locale)}
                                className='capitalize w-full'
                            >
                                {locale}
                            </Link>
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}