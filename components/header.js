import { motion } from 'framer-motion'
import { useState } from 'react'

export default function Header() {
    const pages = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/' },
        { title: 'Portfolio', url: '/' },
        { title: 'Service', url: '/' },
        { title: 'News', url: '/' },
        { title: 'Contact', url: '/' },
    ]
    const [hoverdItem, setHoveredItem] = useState('')

    return (
        <div className="h-14 md:h-14 md:max-w-[92%] mx-auto flex items-center justify-between font-medium ">
            <div className="  uppercase font-bold text-[18px] ">Michich</div>
            <div className=" flex  text-grey text-sm ">
                {pages?.map((page) => {
                    return (
                        <div
                            onMouseEnter={() => setHoveredItem(page.title)}
                            onMouseLeave={() => setHoveredItem('')}
                            key={page.title}
                            className="relative hover:text-white hover:cursor-pointer overflow-hidden px-[17px] py-[9px]  font-medium "
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
                                        : {
                                              x: '-105%',
                                          }
                                }
                                transition={{
                                    duration: 0.3,
                                    delay: 0.1,
                                }}
                                className="absolute top-0 left-0  w-full h-full bg-black"
                                style={{
                                    zIndex: -10,
                                }}
                            ></motion.div>
                            <p className="  z-20 ">{page.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
