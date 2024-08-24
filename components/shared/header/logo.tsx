import Link from "next/link"

export default function Logo(props: LogoProps) {

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
