import Link from "next/link"

type Props = {
    title: string
}

export default function Logo(props: Props) {
    const { title } = props

    return (
        <Link href={"/"}>
            <h1 className="text-4xl font-semibold">
                {title}
                <span className="text-light-accent dark:text-dark-accent"> .</span>
            </h1>
        </Link>
    )
}
