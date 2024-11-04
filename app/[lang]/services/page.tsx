import { getDictionary } from "@/lib/dictionaries"
import ServicesRoot from "@/components/services/services-root"

export async function generateMetadata(props: PageProp) {

    const { params: { lang } } = props
    const dict = await getDictionary(lang)
    const { pageTitle } = dict.services

    return {
        title: pageTitle
    }
}


export default async function Services(props: PageProp) {

    const { params: { lang } } = props
    const dict = await getDictionary(lang)
    const { services } = dict.services

    return <ServicesRoot services={services} lang={lang} />
}
