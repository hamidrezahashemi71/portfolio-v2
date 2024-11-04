'use client'

import { i18n } from '@/i18n.config'
import { FaGlobe } from "react-icons/fa"
import { Button } from '@/components/ui/button'
import { usePathname, useRouter } from 'next/navigation'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function LocaleSwitcher({ lang }: { lang: Locale }) {

    const router = useRouter()
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
                        <DropdownMenuItem
                            key={locale}
                            style={{ justifyContent: lang === "fa" ? "flex-end" : "flex-start" }}
                            className='capitalize w-full cursor-pointer'
                            onClick={() => router.push(redirectedPathName(locale))}>
                            {locale}
                        </DropdownMenuItem>
                    )
                })}
            </DropdownMenuContent>
        </DropdownMenu>
    )
}