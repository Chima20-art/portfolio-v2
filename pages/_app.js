import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Loading from '../components/loading'

import { DefaultSeo } from 'next-seo'
import Image from 'next/image'

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
                description=" I am thrilled to introduce myself as a passionate and dedicated JavaScript developer. My enthusiasm for coding is matched only by my commitment to excellence in all my projects. I am confident in my ability to work with both NextJS and ReactJS, and I am eager to use my skills to bring your ideas to life."
                openGraph={{
                    images: [
                        {
                            url: 'https://www.michich.com/headShot.jpg',
                        },
                    ],
                }}
            />
            <div className="w-screen px-[4%] mx-auto w-full h-screen mx-auto flex flex-col scrollbar-hide  text-grey ">
                {loading && <Loading />}

                <Header />

                <div className="w-full flex flex-1 h-[calc(100vh_-_112px)]  justify-start  object-contain scrollbar-hide ">
                    <div className=" xl:flex hidden  w-[40%]">
                        <Image
                            height={600}
                            width={550}
                            src="/headShot.jpg"
                            alt="main Img"
                            className=" w-fit xl:w-full  lg:my-auto object-contain h-full rounded drop-shadow-2xl "
                        />
                    </div>

                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={router.asPath}
                            className="w-full flex-1 overflow-scroll scrollbar-hide"
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
