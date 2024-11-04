import WorkRoot from '@/components/work/work-root'
import { getDictionary } from '@/lib/dictionaries'

export async function generateMetadata(props: PageProp) {

    const { params: { lang } } = props
    const dict = await getDictionary(lang)
    const { pageTitle } = dict.work

    return {
        title: pageTitle
    }
}


export default async function Work(props: PageProp) {

    const { params: { lang } } = props
    const dict = await getDictionary(lang)
    const { projects, liveProjectTitle, gitRepoTitle } = dict.work

    return (
        <WorkRoot
            projects={projects}
            liveProjectTitle={liveProjectTitle}
            gitRepoTitle={gitRepoTitle}
            lang={lang}
        />
    )
}
