import Link from 'next/link'
import { ScrollArea } from '@/components/ui/scroll-area'

export default function ExperienceTab(props: ResumeExperienceProps) {

    const { experience, lang } = props

    return (
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
    )
}
