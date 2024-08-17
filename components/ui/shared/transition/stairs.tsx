import { motion } from "framer-motion"

const steps = 6

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}

const reverseIndex = (index: number) => {
    return steps - index - 1
}

export default function Stairs() {
    return (
        <>
            {[...Array(steps)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: 'easeInOut',
                            delay: reverseIndex(index) * 0.1
                        }}
                        className="h-full w-full bg-dark-primary dark:bg-light-primary relative"
                    />
                )
            })}
        </>
    )
}
