'use client'

import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaCcPaypal } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";
import { SiRedux, SiAxios, SiSwr, SiMui, SiReactquery, SiTailwindcss, SiSass, SiSentry, SiReacthookform, } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { BsFiletypeScss } from "react-icons/bs";
import { IoLogoPwa } from "react-icons/io5";
import { FaGit } from "react-icons/fa6";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import Link from "next/link";
import { Locale } from "@/i18n.config";

type Props = {
    titles: {
        experience: string
        education: string
        skills: string
        about: string
    }
    about: {
        title: string
        description: string
    }
    info: {
        fieldName: string
        fieldValue: string
    }[]
    experience: {
        icon: string
        title: string
        description: string
        items: {
            company: string
            companyLinkedInLink: string
            position: string
            duration: string
        }[]
    }
    education: {
        icon: string
        title: string
        description: string
        items: {
            Institution: string
            companyLinkedInLink: string
            position: string
            duration: string
        }[]
    }
    skills: {
        title: string
        description: string
    }
    lang: Locale
}

const skillList = [
    {
        icon: <FaHtml5 />,
        name: "html 5"
    },
    {
        icon: <FaCss3 />,
        name: "css 3"
    },
    {
        icon: <FaJs />,
        name: "javascript"
    },
    {
        icon: <BiLogoTypescript />,
        name: "typescript"
    },
    {
        icon: <FaReact />,
        name: "react js"
    },
    {
        icon: <RiNextjsFill />,
        name: "next js"
    },
    {
        icon: <FaNodeJs />,
        name: "node js"
    },
    {
        icon: <IoLogoPwa />,
        name: "pwa"
    },
    {
        icon: <FaGit />,
        name: "git"
    },
    {
        icon: <SiRedux />,
        name: "redux/redux toolkit"
    },
    {
        icon: <SiReactquery />,
        name: "react query"
    },
    {
        icon: <GrGraphQl />,
        name: "graph ql"
    },
    {
        icon: <SiAxios />,
        name: "axios"
    },
    {
        icon: <SiSwr />,
        name: "swr"
    },
    {
        icon: <SiSentry />,
        name: "sentry"
    },
    {
        icon: <FaCcPaypal />,
        name: "paypal js sdk"
    },
    {
        icon: <SiMui />,
        name: "mui"
    },
    {
        icon: <SiTailwindcss />,
        name: "tailwind"
    },
    {
        icon: <SiSass />,
        name: "sass"
    },
    {
        icon: <BsFiletypeScss />,
        name: "scss"
    },
    {
        icon: <SiReacthookform />,
        name: "react hook form"
    },
]

export default function ResumeRoot(props: Props) {
    const { titles, about, info, experience, education, skills, lang } = props
    return (
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
            className="min-h-[80vh] flex items-center justify-center py-12 xl:py-6"
        >
            <div className="container mx-auto">
                <Tabs
                    dir={lang === 'en' ? 'ltr' : 'rtl'}
                    defaultValue="experience"
                    className="flex flex-col xl:flex-row gap-[60px] py-6"
                >
                    <TabsList className={`flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 `}>
                        <TabsTrigger value="experience">{titles.experience}</TabsTrigger>
                        <TabsTrigger value="education">{titles.education}</TabsTrigger>
                        <TabsTrigger value="skills">{titles.skills}</TabsTrigger>
                        <TabsTrigger value="about">{titles.about}</TabsTrigger>
                    </TabsList>
                    <div className={`min-h-[70vh] w-full `}>
                        <TabsContent
                            value="experience"
                            className="w-full"
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-start">
                                <h3 className="text-4xl font-bold">
                                    {experience.title}
                                </h3>
                                <p className="max-w-[600px] text-light-text/60 dark:text-dark-text/60 mx-auto xl:mx-0">
                                    {experience.description}
                                </p>
                                <ScrollArea className="h-[480px]">
                                    <ul
                                        dir={lang === 'en' ? 'ltr' : 'rtl'}
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map(({ company, companyLinkedInLink, duration, position }) => {
                                            return (
                                                <li
                                                    key={duration}
                                                    className="bg-light-secondary/60 dark:bg-dark-secondary/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-light-accent dark:text-dark-accent">
                                                        {duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">{position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-[6px] h-[6px] rounded-full bg-light-accent dark:bg-dark-accent animate-pulse`}></span>
                                                        <Link href={companyLinkedInLink}>
                                                            <p className={`text-light-text/60 dark:text-dark-text/60 hover:text-light-text hover:dark:text-dark-text transition-all`}>
                                                                {company}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="education"
                            className="w-full"
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-start">
                                <h3 className="text-4xl font-bold">
                                    {education.title}
                                </h3>
                                <p className="max-w-[600px] text-light-text/60 dark:text-dark-text/60 mx-auto xl:mx-0">
                                    {education.description}
                                </p>
                                <ScrollArea className="h-[480px]">
                                    <ul
                                        dir={lang === 'en' ? 'ltr' : 'rtl'}
                                        className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]"
                                    >
                                        {education.items.map(({ Institution, companyLinkedInLink, duration, position }) => {
                                            return (
                                                <li
                                                    key={duration}
                                                    className="bg-light-secondary/60 dark:bg-dark-secondary/30 h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                                                >
                                                    <span className="text-light-accent dark:text-dark-accent">
                                                        {duration}
                                                    </span>
                                                    <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">{position}</h3>
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-[6px] h-[6px] rounded-full bg-light-accent dark:bg-dark-accent animate-pulse`}></span>
                                                        <Link href={companyLinkedInLink}>
                                                            <p className={`text-light-text/60 dark:text-dark-text/60 hover:text-light-text hover:dark:text-dark-text transition-all`}>
                                                                {Institution}
                                                            </p>
                                                        </Link>
                                                    </div>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="skills"
                            className="w-full h-full"
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-start">
                                <h3 className="text-4xl font-bold">
                                    {skills.title}
                                </h3>
                                <p className="max-w-[600px] text-light-text/60 dark:text-dark-text/60 mx-auto xl:mx-0">
                                    {skills.description}
                                </p>
                                <ScrollArea className="h-[480px]">

                                    <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                                        {skillList.map(({ icon, name }) => {
                                            return (
                                                <li
                                                    key={name}
                                                >
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-full h-[150px] bg-light-secondary/60 dark:bg-dark-secondary/30 rounded-xl flex justify-center items-center group">
                                                                <div className="text-6xl group-hover:text-light-accent group-hover:dark:text-dark-accent transition-all duration-300">
                                                                    {icon}
                                                                </div>
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                <p className="capitalize">
                                                                    {name}
                                                                </p>
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent
                            value="about"
                            className="w-full"
                        >
                            <div className="flex flex-col gap-[30px] text-center xl:text-start">
                                <h3 className="text-4xl font-bold">
                                    {about.title}
                                </h3>
                                <p className="max-w-[600px] text-light-text/60 dark:text-dark-text/60 mx-auto xl:mx-0">
                                    {about.description}
                                </p>
                                <ul
                                    dir={lang === 'en' ? 'ltr' : 'rtl'}
                                    className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0"
                                >
                                    {info.map(({ fieldName, fieldValue }) => {
                                        return (
                                            <li
                                                key={fieldName}
                                                className="flex items-center justify-center xl:justify-start gap-4"
                                            >
                                                <span className={`text-light-text/60 dark:text-dark-text/60 `}>
                                                    {fieldName}
                                                </span>
                                                <span className={`text-lg `}>
                                                    {fieldValue}
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}
