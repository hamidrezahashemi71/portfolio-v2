import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionaries"
import { Locale } from "@/i18n.config"
import Nav from "./nav"
import { ModeToggle } from "./mode-toggle"
import LocaleSwitcher from "./locale-toggle"
import MobileNav from "./mobile-nav"
import Logo from "./logo"

export default async function Header({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang)
    const { title, hireMe, links, mode } = dict.header

    return (
        <header className="py-8 xl:py-12 text-light-text dark:text-dark-text">
            <div className="container mx-auto flex justify-between items-center">
                <Logo title={title} />
                <div className="hidden xl:flex items-center gap-8 ">
                    <Nav links={links} lang={lang} />
                    <Link href={`/${lang}/contact`}>
                        <Button variant={'default'}>
                            {hireMe}
                        </Button>
                    </Link>
                    <ModeToggle mode={mode} />
                    <LocaleSwitcher />
                </div>
                <div className="xl:hidden">
                    <MobileNav links={links} lang={lang} mode={mode} title={title} />
                </div>
            </div>
        </header>
    )
}
