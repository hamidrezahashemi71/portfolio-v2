"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi"

export default function WorkSliderBtns({ isFirst, isLast, lang }: { isFirst: boolean, isLast: boolean, lang: Locale }) {

    const swiper = useSwiper()

    return (
        <div
            dir="ltr"
            style={{ rotate: lang === "fa" ? "180deg" : "none" }}
            className="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:justify-end"
        >
            {
                !isFirst && <button
                    onClick={() => swiper.slidePrev()}
                    className="bg-light-accent dark:bg-dark-accent hover:bg-light-accent-hover hover:dark:bg-dark-accent-hover text-light-primary dark:text-dark-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                >
                    <PiCaretLeftBold />
                </button>}
            {
                !isLast &&
                <button
                    onClick={() => swiper.slideNext()}
                    className="bg-light-accent dark:bg-dark-accent hover:bg-light-accent-hover hover:dark:bg-dark-accent-hover
                     text-light-primary dark:text-dark-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"

                >
                    <PiCaretRightBold />
                </button>}
        </div>
    )
}
