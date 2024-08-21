import WorkRoot from '@/components/work/work-root'
import { getDictionary } from '@/lib/dictionaries'
import React from 'react'

export default async function Work({ params: { lang } }: { params: { lang: "en" | "fa" } }) {
    const dict = await getDictionary(lang)
    const { projects } = dict.work

    return (
        <WorkRoot
            projects={projects}
            lang={lang}
        />
    )
}
