type Locale = "en" | "fa"

interface PageProp {
    params: { lang: Locale }
}

interface RootLayoutProps {
    children: React.ReactNode
    params: {
        lang: Locale
    }
}