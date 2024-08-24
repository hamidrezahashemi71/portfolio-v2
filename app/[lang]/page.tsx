import Photo from "@/components/home/photo"
import Stats from "@/components/home/stats"
import { FiDownload } from "react-icons/fi"
import { Button } from "@/components/ui/button"
import Socials from "@/components/home/socials"
import { getDictionary } from "@/lib/dictionaries"

export default async function Home(props: PageProp) {

  const { params: { lang } } = props
  const dict = await getDictionary(lang)
  const { title, h1, span, about, downloadcv, stats } = dict.home

  return (
    <section className="h-full">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-start order-2 xl:order-none">
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
          <div className="order-1 xl:order-none mb-8 xl:mb0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats stats={stats} />
    </section>
  )
}
