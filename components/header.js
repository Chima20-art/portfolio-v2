import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
    const pages = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Portfolio', url: '/' },
        { title: 'Service', url: '/' },
        { title: 'News', url: '/' },
        { title: 'Contact', url: '/' },
    ]
    const [hoverdItem, setHoveredItem] = useState('')

    return (
        <div className="h-14 md:h-14  flex items-center justify-between font-medium ">
            <div className="  uppercase font-bold text-[18px] ">Michich</div>
            <div className=" flex  text-grey text-sm ">
                {pages?.map((page) => {
                    return (
                        <Link href={page.url}>
                            {' '}
                            <div
                                onMouseEnter={() => setHoveredItem(page.title)}
                                onMouseLeave={() => setHoveredItem('')}
                                key={page.title}
                                className=" relative  hover:cursor-pointer  overflow-hidden hover:text-white text-grey  px-[17px] py-[9px]  font-medium   "
                            >
                                <motion.div
                                    initial={{
                                        x: '-105%',
                                    }}
                                    animate={
                                        hoverdItem == page.title
                                            ? {
                                                  x: '0%',
                                              }
                                            : { x: '-105%' }
                                    }
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.2,
                                        ease: 'easeIn',
                                    }}
                                    className="bg-grey h-full w-full absolute right-0 top-0 -z-20 "
                                ></motion.div>
                                <p className="  z-[10] w-full h-full   mx-auto h-full bg-transparent  ">
                                    {page.title}
                                </p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
