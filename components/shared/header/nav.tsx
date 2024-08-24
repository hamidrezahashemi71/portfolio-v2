'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav(props: DesktopNavProps) {

    const { links, lang } = props
    const pathname = usePathname()

    return (
        <nav className="flex gap-8">
            {links.map(({ path, name }) => {
                return (
                    <Link
                        href={path}
                        key={name}
                        className={`
                            ${(`${path}` === pathname || `${path}${lang}` === pathname) && 'text-light-accent dark:text-dark-accent border-b-2 border-light-accent dark:border-dark-accent'}
                            capitalize font-medium hover:text-light-accent hover:dark:text-dark-accent transition-all
                            `}
                    >
                        {name}
                    </Link>
                )
            })}
        </nav>
    )
}
