import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionaries"


export default async function Home({ params: { lang } }: { params: { lang: "en" | "fa" } }) {
  const dict = await getDictionary(lang)
  return <Button>{dict.products.cart}</Button>
}
