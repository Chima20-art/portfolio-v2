import Header from '../components/header'
import Footer from '../components/footer'
import Home from '.'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Loading from '../components/loading'
import { NextSeo } from 'next-seo'

import { DefaultSeo } from 'next-seo'

function MyApp({ Component, pageProps, router }) {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])

    return (
        <>
            {' '}
            <DefaultSeo
                title="Chaimae Michich - Javascript developer - Freelancer"
                description=" I am thrilled to introduce myself as a passionate and dedicated JavaScript developer.

             My enthusiasm for coding is matched only by my commitment to excellence in all my projects. I am confident in my ability to work with both NextJS and ReactJS, and I am eager to use my skills to bring your ideas to life."
                openGraph={{
                    url: 'https://www.michich.com/portrait2.JPG',
                    siteName: 'https://www.michich.com',
                }}
            />
            <div className="w-screen px-[4%]  mx-auto w-full h-screen mx-auto flex flex-col scrollbar-hide  text-grey ">
                {loading && <Loading />}

                <Header />

                <div className="w-full   flex flex-1 h-[calc(100vh_-_112px)]  gap-12 scrollbar-hide ">
                    <img
                        src="/portrait2.JPG"
                        alt="mainImg"
                        className="hidden w-fit lg:w-[400px] xl:w-fit  lg:flex  object-contain lg:object-cover xl:object-contain h-full bg-red-300 rounded drop-shadow-2xl "
                    />

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={router.asPath}
                            className="w-full flex-1  overflow-scroll scrollbar-hide	  "
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

                <Footer />
            </div>
        </>
    )
}

export default MyApp
