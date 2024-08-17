import type { Metadata } from "next";
import "./globals.css";
import { dana, jet } from "@/lib"
import { Locale, i18n } from "@/i18n.config";
import { getDictionary } from "@/lib/dictionaries";
import { ThemeProvider } from "@/lib/providers/theme-provider";

export async function generateMetadata({ params: { lang } }: { params: { lang: Locale } }) {
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


export default function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    lang: Locale
  }
}>) {
  return (
    <html lang={params.lang}>
      <body className={`${params.lang === 'en' ? `${jet.variable} font-jet` : `${dana.variable} font-dana`}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
