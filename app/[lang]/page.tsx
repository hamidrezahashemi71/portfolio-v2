import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/ui/shared/header/mode-toggle"
import { getDictionary } from "@/lib/dictionaries"


export default async function Home({ params: { lang } }: { params: { lang: "en" | "fa" } }) {
  const dict = await getDictionary(lang)
  return (
    <>
    </>
  )
}
