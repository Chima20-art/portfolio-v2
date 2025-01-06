'use client'

import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { VscGithubInverted } from 'react-icons/vsc'
import { usePathname } from 'next/navigation'

export default function Header() {
    const pages = [
        { title: 'Home', url: '/' },
        { title: 'About', url: '/about' },
        { title: 'Portfolio', url: '/portfolio' },
        { title: 'Services', url: '/services' },
        { title: 'Contact', url: '/contact' },
    ]
    const [hoveredItem, setHoveredItem] = useState('')
    const [selectedItem, setSelectedItem] = useState('Home')
    const [showMobileMenu, setShowMobileMenu] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const currentPage = pages.find(page => page.url === pathname)
        if (currentPage) {
            setSelectedItem(currentPage.title)
        }
    }, [pathname])

    const handlePageClick = (title) => {
        setSelectedItem(title)
        setShowMobileMenu(false)
    }

    return (
        <>
            <div className="flex h-14 py-4 items-center justify-between font-medium">
                <Link
                    href="/"
                    className="uppercase font-bold text-[18px] text-black hover:scale-110"
                >
                    Michich
                </Link>
                <div className="lg:flex text-grey text-sm hidden">
                    {pages?.map((page) => (
                        <Link href={page.url} key={page.title} onClick={() => handlePageClick(page.title)}>
                            <div
                                onMouseEnter={() => setHoveredItem(page.title)}
                                onMouseLeave={() => setHoveredItem('')}
                                className={`relative hover:cursor-pointer overflow-hidden px-[17px] py-[9px] font-medium ${
                                    selectedItem === page.title ? 'text-white bg-grey' : 'text-grey'
                                }`}
                            >
                                <motion.div
                                    initial={{ x: '-105%' }}
                                    animate={{
                                        x: hoveredItem === page.title || selectedItem === page.title ? '0%' : '-105%',
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        delay: 0.2,
                                        ease: 'easeIn',
                                    }}
                                    className="bg-grey h-full w-full flex align-center items-center absolute right-0 top-0 z-20"
                                >
                                    <p className="z-[20] text-white w-fit h-fit flex justify-center items-center mx-auto h-full bg-transparent">
                                        {page.title}
                                    </p>
                                </motion.div>
                                <motion.p
                                    animate={{
                                        x: hoveredItem === page.title || selectedItem === page.title ? '-105%' : '0%',
                                    }}
                                    transition={{
                                        duration: hoveredItem === page.title ? 0.2 : 0.4,
                                        delay: 0.2,
                                        ease: 'easeIn',
                                    }}
                                    className="z-[10] w-full h-full mx-auto h-full bg-transparent"
                                >
                                    {page.title}
                                </motion.p>
                            </div>
                        </Link>
                    ))}
                </div>
                <div
                    onClick={() => setShowMobileMenu(true)}
                    className="flex lg:hidden"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 active:scale-125 hover:scale-110 cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                    </svg>
                </div>
            </div>

            <AnimatePresence>
                {showMobileMenu && (
                    <div className="bg-red-700">
                        <motion.div
                            initial={{
                                x: '100%',
                                opacity: 0,
                            }}
                            animate={{
                                x: '0%',
                                opacity: 1,
                            }}
                            exit={{
                                x: '100%',
                                opacity: 0,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                            className="px-[4%] w-full bg-white h-screen align-right fixed flex flex-col z-50 top-0 left-0"
                        >
                            <div className="flex h-14 py-4 items-center justify-between font-medium">
                                <Link
                                    href="/"
                                    className="uppercase font-bold text-[18px] text-black hover:scale-110"
                                >
                                    Michich
                                </Link>
                                <div
                                    onClick={() => setShowMobileMenu(false)}
                                    className="flex lg:hidden"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.5}
                                        stroke="currentColor"
                                        className="w-10 h-10 cursor-pointer hover:scale-110 active:scale-125"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="flex-1 flex flex-col items-center justify-center pt-4 gap-4">
                                <img
                                    src="/headShot.jpg"
                                    width="150"
                                    height="150"
                                    className="shadow-lg mx-auto"
                                    alt="Profile"
                                />
                                {pages?.map((item) => (
                                    <Link
                                        onClick={() => handlePageClick(item.title)}
                                        href={item.url}
                                        className={`text-2xl min-w-[30vw] text-center hover:underline ${
                                            selectedItem === item.title ? 'font-bold underline' : ''
                                        }`}
                                        key={item?.title}
                                    >
                                        {item?.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="flex justify-center align-center text-black py-4">
                                <Link href="https://www.instagram.com/minan_sha/">
                                    <RiInstagramFill className="w-[24px] h-[24px] my-auto mr-2 cursor-pointer" />
                                </Link>
                                <Link href="https://www.linkedin.com/in/chaimae-michich-0bb9a11a1/">
                                    <FaLinkedin className="w-[24px] h-[24px] my-auto mr-2 cursor-pointer" />
                                </Link>
                                <Link href="https://github.com/Chima20-art">
                                    <VscGithubInverted className="w-[24px] h-[24px] my-auto cursor-pointer" />
                                </Link>
                            </div>
                            <div className="text-[13px] mx-auto py-2">
                                @copyright 2022
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    )
}

