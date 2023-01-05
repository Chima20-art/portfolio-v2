import { motion } from 'framer-motion'

export default function Loading({}) {
    return (
        <motion.div
            key="loading"
            initial={{ opacity: 1 }}
            animate={{
                opacity: [1, 1, 1, 1, 0],
            }}
            transition={{
                duration: 1,
                ease: 'easeIn',
            }}
            className="absolute top-0 z-50 left-0 w-screen h-screen bg-black flex items-center justify-center"
        >
            <motion.div
                initial={{ width: 0, height: 0, opacity: 1 }}
                animate={{
                    width: ['0%', '0.1%', '0.1%', '0.1%', '100%'],
                    height: ['0%', '1%', '10%', '100%', '100%'],
                    opacity: [1, 1, 1, 1, 0],
                }}
                exit={{
                    opacity: 0,
                }}
                transition={{
                    duration: 1,
                    ease: 'easeIn',
                }}
                className="bg-white "
            ></motion.div>
        </motion.div>
    )
}
