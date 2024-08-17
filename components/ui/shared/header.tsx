import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionaries"
import { Locale } from "@/i18n.config"
import Nav from "./nav"
import { ModeToggle } from "./mode-toggle"
import LocaleSwitcher from "./locale-toggle"

export default async function Header({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang)
    const { title, hireMe, links, mode } = dict.header

    return (
        <header className="py-8 xl:py-12 text-light-text dark:text-dark-text">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        {title}
                        <span className="text-light-accent dark:text-dark-accent"> .</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8 ">
                    <Nav links={links} lang={lang} />
                    <Link href={'/contact'}>
                        <Button>
                            {hireMe}
                        </Button>
                    </Link>
                    <ModeToggle mode={mode} />
                    <LocaleSwitcher />
                </div>
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </header>
    )
}
