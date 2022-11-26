import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
    const [showButton, setShowButton] = useState(false)
    return (
        <div>
            <Header />
            <div className="w-screen h-screen flex justify-center items-center">
                <button onClick={() => setShowButton(!showButton)}>
                    show my button
                </button>
                <AnimatePresence>
                    {showButton && (
                        <motion.button
                            key="mybutton"
                            initial={{
                                opacity: 0,
                                y: -300,
                            }}
                            animate={{
                                opacity: 1,
                                y: 0,
                            }}
                            exit={{
                                opacity: 0,
                                y: 300,
                            }}
                            transition={{
                                duration: 1,
                            }}
                            className="bg-red-300 p-4"
                        >
                            my button
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
}
