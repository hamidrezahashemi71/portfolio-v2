export default function AboutTab(props: ResumeAboutProps) {
    const { about, info, lang } = props
    return (
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
    )
}
