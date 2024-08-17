import { Locale } from "@/i18n.config"
import Link from "next/link"

type Props = {
    title: string
    lang: Locale
}

export default function Logo(props: Props) {
    const { title, lang } = props

    return (
        <Link href={`${lang}/`}>
            <h1 className="text-4xl font-semibold">
                {title}
                <span className="text-light-accent dark:text-dark-accent"> .</span>
            </h1>
        </Link>
    )
}
