import ServicesRoot from "@/components/services/services-root";
import { getDictionary } from "@/lib/dictionaries";

export default async function Services({ params: { lang } }: { params: { lang: "en" | "fa" } }) {
    const dict = await getDictionary(lang)
    const { services } = dict.services

    return (
        <ServicesRoot services={services} lang={lang} />
    )
}
