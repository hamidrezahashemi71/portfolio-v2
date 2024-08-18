import Link from "next/link";
import { FaGithub, FaLinkedin, FaTelegram, FaWhatsapp } from "react-icons/fa";

const socials = [
    {
        icon: <FaGithub />,
        path: 'https://github.com/hamidrezahashemi71'
    },
    {
        icon: <FaLinkedin />,
        path: 'https://www.linkedin.com/in/hh7192/'
    },
    {
        icon: <FaTelegram />,
        path: 'https://t.me/Hamidreza9'
    },
    {
        icon: <FaWhatsapp />,
        path: 'https://api.whatsapp.com/send?phone=989195892013'
    }
]

export default function Socials() {

    return (
        <div className='flex gap-6'>
            {socials.map(({ path, icon }) => {
                return (
                    <Link
                        key={path}
                        href={path}
                        className='w-9 h-9 border border-light-accent dark:border-dark-accent rounded-full flex justify-center items-center text-light-accent dark:text-dark-accent text-base hover:bg-light-accent hover:dark:bg-dark-accent hover:text-light-primary hover:dark:text-dark-primary hover:transition-all duration-500'
                    >
                        {icon}
                    </Link>
                )
            })}
        </div>
    )
}
