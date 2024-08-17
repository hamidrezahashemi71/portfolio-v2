import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
    en: () => import('@/lib/dictionaries/en.json').then(module => module.default),
    fa: () => import('@/lib/dictionaries/fa.json').then(module => module.default)
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()