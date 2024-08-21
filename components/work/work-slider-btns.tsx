"use client"

import { useSwiper } from "swiper/react"
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

export default function WorkSliderBtns() {
    const swiper = useSwiper()
    return (
        <div
            dir="ltr"
            className="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
        >
            <button
                onClick={() => swiper.slidePrev()}
                className="bg-light-accent dark:bg-dark-accent hover:bg-light-accent-hover hover:dark:bg-dark-accent-hover text-light-primary dark:text-dark-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
            >
                <PiCaretLeftBold className="" />
            </button>
            <button
                onClick={() => swiper.slideNext()}
                className="bg-light-accent dark:bg-dark-accent hover:bg-light-accent-hover hover:dark:bg-dark-accent-hover text-light-primary dark:text-dark-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"

            >
                <PiCaretRightBold className="" />
            </button>
        </div>
    )
}
