import Header from '../components/header'
import Footer from '../components/footer'
import Home from '.'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Loading from '../components/loading'

function MyApp({ Component, pageProps, router }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <div className="relative w-full h-screen mx-auto flex flex-col  text-grey ">
            {loading && <Loading />}
            <div className="w-[92%]  mx-auto">
                <Header />
            </div>
            <div className="w-[92%]  mx-auto flex flex-1 h-[calc(100vh_-_112px)]  gap-4 ">
                <img
                    src="/portrait.jpeg"
                    alt="mainImg"
                    className="w-[420px]   rounded drop-shadow-2xl "
                />

                <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                        key={router.asPath}
                        className="  flex-1  overflow-y-scroll	 pl-8 scrollbar-hide	  "
                        style={{
                            originX: '0%',
                            originY: '50%',
                        }}
                        initial={{
                            x: '-50%',
                            rotate: '-100deg',
                            opacity: 0,
                        }}
                        animate={{
                            x: 0,
                            rotate: '0deg',
                            opacity: 1,
                        }}
                        exit={{
                            x: '90%',
                            rotate: '100deg',
                            opacity: [1, 0.8, 0],
                        }}
                        transition={{
                            duration: 0.3,
                            delay: 0.2,
                        }}
                    >
                        <Component {...pageProps} />
                    </motion.div>
                </AnimatePresence>
            </div>
            <div className="w-[92%]  mx-auto">
                <Footer />
            </div>
        </div>
    )
}

export default MyApp
