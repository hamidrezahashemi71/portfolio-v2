import Socials from "@/components/home/socials"
import { Button } from "@/components/ui/button"
import { getDictionary } from "@/lib/dictionaries"
import { FiDownload } from "react-icons/fi"


export default async function Home({ params: { lang } }: { params: { lang: "en" | "fa" } }) {
  const dict = await getDictionary(lang)
  const { title, h1, span, about, downloadcv } = dict.home

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-start ">
            <span className="text-xl ">
              {title}
            </span>
            <h1 className="h1 mb-6">
              {h1}
              <br />
              <span className="text-light-accent dark:text-dark-accent">
                {span}
              </span>
            </h1>
            <p className="max-w-[500px] mb-9 text-light-text/80 dark:text-dark-text/80">
              {about}
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8 ">
              <Button
                variant={'outline'}
                size={'lg'}
                className="uppercase flex items-center gap-2"
              >
                <span>
                  {downloadcv}
                </span>
                <FiDownload className="text-2xl " />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials />
              </div>
            </div>
          </div>
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}
