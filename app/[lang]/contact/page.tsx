import ContactRoot from '@/components/contact/contact-root'
import { getDictionary } from '@/lib/dictionaries'

export default async function Contact({ params: { lang } }: { params: { lang: "en" | "fa" } }) {
    const dict = await getDictionary(lang)
    const { info, title, description, inputs, selectPlaceholder, select, textareaPlaceholder, buttonText } = dict.contact
    return (
        <ContactRoot
            lang={lang}
            title={title}
            description={description}
            selectPlaceholder={selectPlaceholder}
            select={select}
            inputs={inputs}
            textareaPlaceholder={textareaPlaceholder}
            buttonText={buttonText}
            info={info}
        />
    )
}
