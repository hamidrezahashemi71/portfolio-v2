import Link from "next/link"
import { socials } from "@/lib/constants/socials"

export default function Socials() {

    return (
        <div className='flex gap-6'>
            {socials.map(({ path, icon }) => {
                return (
                    <Link
                        key={path}
                        href={path}
                        className='w-9 h-9 border border-light-accent dark:border-dark-accent rounded-full flex justify-center items-center text-light-accent dark:text-dark-accent text-base hover:bg-light-accent hover:dark:bg-dark-accent hover:text-light-primary hover:dark:text-dark-primary hover:transition-all duration-500'
                        target="_blank"
                    >
                        {icon}
                    </Link>
                )
            })}
        </div>
    )
}
