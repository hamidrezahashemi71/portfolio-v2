import { getDictionary } from '@/lib/dictionaries'
import ContactRoot from '@/components/contact/contact-root'

export async function generateMetadata(props: PageProp) {

    const { params: { lang } } = props
    const dict = await getDictionary(lang)
    const { pageTitle } = dict.contact

    return {
        title: pageTitle
    }
}

export default async function Contact(props: PageProp) {
    const { params: { lang } } = props
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
