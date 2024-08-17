import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionaries"
import { Locale } from "@/i18n.config"
import Nav from "./nav"

export default async function Header({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang)
    const { title, hireMe, links } = dict.header

    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        {title}
                        <span className="text-accent"> .</span>
                    </h1>
                </Link>
                <div className="hidden xl:flex items-center gap-8 ">
                    <Nav links={links} lang={lang} />
                    <Link href={'/contact'}>
                        <Button>
                            {hireMe}
                        </Button>
                    </Link>
                </div>
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </header>
    )
}
