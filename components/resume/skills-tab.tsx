import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area"
import { skillList } from "@/lib/constants/skill-list"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from 'next/link'

export default function SkillsTab(props: ResumeSkillsProps) {

    const { skills } = props

    return (
        <div className="flex flex-col gap-[30px] text-center xl:text-start">
            <h3 className="text-4xl font-bold">
                {skills.title}
            </h3>
            <p className="max-w-[600px] text-light-text/60 dark:text-dark-text/60 mx-auto xl:mx-0">
                {skills.description}
            </p>
            <ScrollArea className="h-[480px]">
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px] ">
                    {skillList.map(({ icon, name, link }) => {
                        return (
                            <li
                                key={name}
                            >
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-full h-[150px] bg-light-secondary/60 dark:bg-dark-secondary/30 rounded-xl flex justify-center items-center group">
                                            <Link href={link} target='_blank'>
                                                <div className="text-6xl group-hover:text-light-accent group-hover:dark:text-dark-accent transition-all duration-300">
                                                    {icon}
                                                </div>
                                            </Link>
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
    )
}
