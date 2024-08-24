'use client'

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { BsArrowDownRight, BsArrowDownLeft } from "react-icons/bs"

export default function ServicesRoot(props: ServicesRootProps) {

    const { services, lang } = props

    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeIn'
                        }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {services.map(({ num, title, description, href, active, status }) => {
                        return (
                            <div
                                key={num}
                                className="flex-1 flex flex-col justify-center gap-6 group"
                            >
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-transparent text-outline-light dark:text-outline-dark group-hover:text-outline-light-hover group-hover:dark:text-outline-dark-hover transition-all duration-500">
                                        {num}
                                    </div>
                                    <Link
                                        href={href}
                                        className="w-[70px] h-[70px] rounded-full bg-dark-secondary dark:bg-light-secondary group-hover:bg-light-accent group-hover:dark:bg-dark-accent transition-all duration-500 flex justify-center items-center "
                                    >
                                        {
                                            lang === 'en' ?
                                                <BsArrowDownRight className="text-light-primary dark:text-dark-primary text-3xl hover:-rotate-45 transition-all duration-500" />
                                                :
                                                <BsArrowDownLeft className="text-light-primary hover:rotate-45 transition-all duration-500 dark:text-dark-primary text-3xl" />
                                        }
                                    </Link>
                                </div>
                                <h2 className="text-[42px] font-bold leading-none text-light-text dark:text-dark-text group-hover:text-light-accent group-hover:dark:text-dark-accent transition-all duration-500">
                                    {title}
                                </h2>
                                <p className="text-light-text/60 dark:text-dark-text/60">
                                    {description}
                                </p>
                                <Badge
                                    variant={active ? 'default' : 'destructive'}
                                    className='max-w-[100px] flex justify-center items-center'
                                >
                                    {status}
                                </Badge>
                                <div className="border-b border-dark-secondary/20 dark:border-light-secondary/20 w-full" />
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}
