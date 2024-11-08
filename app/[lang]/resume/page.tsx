import { getDictionary } from "@/lib/dictionaries"
import ResumeRoot from "@/components/resume/resume-root"

export async function generateMetadata(props: PageProp) {

    const { params: { lang } } = props
    const dict = await getDictionary(lang)
    const { pageTitle } = dict.resume

    return {
        title: pageTitle
    }
}

export default async function Resume(props: PageProp) {

    const { params: { lang } } = props
    const dict = await getDictionary(lang)
    const { titles, about, info, experience, education, skills } = dict.resume

    return <ResumeRoot
        lang={lang}
        titles={titles}
        about={about}
        info={info}
        experience={experience}
        education={education}
        skills={skills}
    />
}
