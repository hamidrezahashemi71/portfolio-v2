"use client"

import { motion } from 'framer-motion'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'


export default function ContactRoot(props: ContactRootProps) {

    const { lang, title, info, description, inputs, selectPlaceholder, select, textareaPlaceholder, buttonText } = props

    const iconMap = {
        phone: <FaPhoneAlt />,
        email: <FaEnvelope />,
        map: <FaMapMarkerAlt />
    }

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
            className='py-6'
        >
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    <div className='flex-1 xl:h-[54%] order-2 xl:order-none'>
                        <form className='flex flex-col gap-6 p-10 bg-light-secondary dark:bg-dark-secondary rounded-xl'>
                            <h3 className='text-4xl text-light-accent dark:text-dark-accent'>
                                {title}
                            </h3>
                            <p className='text-light-text/60 dark:text-dark-text/60 '>
                                {description}
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                {inputs.map((input) => {
                                    return (
                                        <Input
                                            key={input.type}
                                            type={input.type}
                                            placeholder={input.placeholder}
                                        />
                                    )
                                })}
                            </div>
                            <Select dir={lang === 'en' ? 'ltr' : 'rtl'}>
                                <SelectTrigger className='w-full '>
                                    <SelectValue placeholder={selectPlaceholder} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>
                                            {selectPlaceholder}
                                        </SelectLabel>
                                        {select.map(({ value, title }) => {
                                            return (
                                                <SelectItem
                                                    key={value}
                                                    value={value}
                                                >
                                                    {title}
                                                </SelectItem>
                                            )
                                        })}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea
                                className='h-[200px]'
                                placeholder={textareaPlaceholder}
                            />
                            <Button
                                size={'md'}
                                className='max-w-40'
                            >
                                {buttonText}
                            </Button>
                        </form>
                    </div>
                    <div className='flex-2 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0 '>
                        <ul className='flex flex-col gap-10'>
                            {info.map(({ icon, title, description }) => {

                                return (
                                    <li
                                        key={title}
                                        className='flex items-center gap-6'
                                    >
                                        <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-light-secondary dark:bg-dark-secondary text-light-accent dark:text-dark-accent rounded-md flex items-center justify-center'>
                                            <div className='text-[28px]'>
                                                {iconMap[icon as 'phone' | 'email' | 'map']}
                                            </div>
                                        </div>
                                        <div className='flex-1'>
                                            <p className='text-light-text/60 dark:text-dark-text/60'>
                                                {title}
                                            </p>
                                            <h3
                                                style={{
                                                    ...(title === "تلفن" && {
                                                        direction: "ltr"
                                                    })
                                                }}
                                                className='text-lg lg:text-xl'>
                                                {description}
                                            </h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
