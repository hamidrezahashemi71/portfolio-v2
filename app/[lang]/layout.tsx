import "./globals.css"
import { dana, jet } from "@/lib"
import { i18n } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionaries"
import Header from "@/components/ui/shared/header/header"
import { ThemeProvider } from "@/lib/providers/theme-provider"
import PageTransition from "@/components/ui/shared/transition/page-transition"
import StairTransition from "@/components/ui/shared/transition/stair-transition"

export async function generateMetadata(props: PageProp) {

  const { params: { lang } } = props
  const dict = await getDictionary(lang)
  const { title, description } = dict.metadata

  return {
    title,
    description
  }
}

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}


export default function RootLayout(props: Readonly<RootLayoutProps>) {

  const { children, params: { lang } } = props

  return (
    <html
      suppressHydrationWarning
      lang={lang}
      dir={lang === 'en' ? 'ltr' : 'rtl'}
      className="dark"
    >
      <body className={`${lang === 'en' ? `${jet.variable} font-jet` : `${dana.variable} font-dana`}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header lang={lang} />
          <StairTransition />
          <PageTransition>
            {children}
          </PageTransition>
        </ThemeProvider>
      </body>
    </html>
  )
}
