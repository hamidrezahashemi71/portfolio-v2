"use client"

import CountUp from 'react-countup'

type Props = {
    stats: {
        num: number
        text: string
    }[]
}

export default function Stats(props: Props) {
    const { stats } = props

    return (
        <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
            <div className='container mx-auto'>
                <div className='flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none'>
                    {stats.map(({ num, text }) => {
                        return (
                            <div
                                key={text}
                                className='flex-1 flex gap-4 items-center justify-center xl:justify-start'
                            >
                                <CountUp
                                    end={num}
                                    duration={5}
                                    delay={2}
                                    className='text-4xl xl:text-6xl font-extrabold'
                                />
                                <p className={`${text.length < 15 ? 'max-w-[100px]' : 'max-w-[150px]'} leading-snug text-light-text/80 dark:text-dark-text/80`}>
                                    {text}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
