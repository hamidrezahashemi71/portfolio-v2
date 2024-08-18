import ResumeRoot from "@/components/resume/resume-root"
import { getDictionary } from "@/lib/dictionaries"

export default async function Resume({ params: { lang } }: { params: { lang: "en" | "fa" } }) {
    const dict = await getDictionary(lang)
    const { titles, about, info, experience, education, skills } = dict.resume
    return (
        <ResumeRoot
            lang={lang}
            titles={titles}
            about={about}
            info={info}
            experience={experience}
            education={education}
            skills={skills}
        />
    )
}
