"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Photo() {
    return (
        <div className="w-full h-full relative">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: {
                        delay: 2,
                        duration: 0.4,
                        ease: 'easeIn'
                    }
                }}
            >
                <motion.div
                    className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] dark:mix-blend-lighten mix-blend-darken absolute"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            delay: 2.4,
                            duration: 0.4,
                            ease: 'easeInOut'
                        }
                    }}
                >
                    <Image
                        src={'/images/photo.jpg'}
                        alt="photo"
                        priority
                        quality={100}
                        fill
                        className="object-contain rounded-full"
                    />
                </motion.div>
                <motion.svg
                    className='w-[301px] overflow-visible xl:w-[506px] h-[301px] xl:h-[506px] rounded-full'
                    fill='transparent'
                    viewBox='0 0 506 506'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <motion.circle
                        cx='255'
                        cy='250'
                        r='260'
                        className={'stroke-light-accent dark:stroke-dark-accent'}
                        strokeWidth='4'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        initial={{ strokeDasharray: '24 10 0 0' }}
                        animate={{
                            strokeDasharray: ['15 120 25 25', '16 25 92 72', '4 250 22 22'],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: 'reverse'
                        }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}
