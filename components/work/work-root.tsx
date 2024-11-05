"use client"

import 'swiper/css'
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import React, { useState } from "react"
import WorkSliderBtns from "./work-slider-btns"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperType } from "swiper/types"
import { BsArrowUpRight, BsArrowUpLeft, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const numGenerator = (currentIndex: number, projectsLength: number) => {
    const thisNum = projectsLength - currentIndex
    return String(thisNum).length === 1 ? `${0}${thisNum}` : `${thisNum}`
}

export default function WorkRoot(props: WorkRootProps) {

    const { projects, liveProjectTitle, gitRepoTitle, lang } = props
    const [project, setProject] = useState({ ...projects[0], num: numGenerator(0, projects.length), isFirst: true, isLast: false })

    const handleSlideChange = (swiper: SwiperType) => {
        const currentIndex = swiper.activeIndex
        setProject({
            ...projects[currentIndex],
            num: numGenerator(currentIndex, projects.length),
            isFirst: currentIndex === 0,
            isLast: currentIndex === projects.length - 1
        })
    }

    const loaderProp = ({ src }: { src: string }) => src

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
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] pb-24">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline-light dark:text-outline-dark group-hover:text-outline-light-hover group-hover:dark:text-outline-dark-hover transition-all duration-500">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-light-text dark:text-dark-text group-hover:text-light-accent group-hover:dark:text-dark-accent transition-all duration-500 capitalize">
                                {project.category}
                            </h2>
                            <p className="text-light-text/60 dark:text-dark-text/60">
                                {project.description}
                            </p>
                            <ul className="flex gap-4 flex-wrap">
                                {project.stack.map((item, index) => {
                                    return (
                                        <li
                                            key={item.name}
                                            className="text-xl text-light-accent dark:text-dark-accent"
                                        >
                                            {item.name}
                                            {index !== project.stack.length - 1 && ","}
                                        </li>
                                    )
                                })}
                            </ul>
                            <div className="border border-light-secondary/20" />
                            <div className="flex items-center gap-4">
                                <Link href={project.live} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 dark:bg-white/5 flex justify-center items-center group">
                                                {lang === 'en' ? <BsArrowUpRight className="text-light-text dark:text-dark-text text-3xl group-hover:text-light-accent group-hover:dark:text-dark-accent transition-all duration-500" /> : <BsArrowUpLeft className="text-light-text dark:text-dark-text text-3xl group-hover:text-light-accent group-hover:dark:text-dark-accent transition-all duration-500" />}
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{liveProjectTitle}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github} target="_blank">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-black/5 dark:bg-white/5 flex justify-center items-center group">
                                                <BsGithub className="text-light-text dark:text-dark-text text-3xl group-hover:text-light-accent group-hover:dark:text-dark-accent transition-all duration-500" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>{gitRepoTitle}</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                        >
                            {projects.map(({ image, title }) => {
                                return (
                                    <SwiperSlide
                                        key={title}
                                        className="w-full"
                                    >
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                                            <div className="relative w-full h-full">
                                                <Image
                                                    loader={loaderProp}
                                                    src={image}
                                                    alt="project-image"
                                                    fill
                                                    className="object-cover"
                                                    onError={(e) => e.currentTarget.srcset = "/images/work/placeholder.jpg"}
                                                />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                            <WorkSliderBtns
                                lang={lang}
                                isLast={project.isLast}
                                isFirst={project.isFirst}
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
