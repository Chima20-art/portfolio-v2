import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
    const [showButton, setShowButton] = useState(false)
    return (
        <div className="md:max-w-[92%] mx-auto text-grey">
            <Header />
            <div className="w-screen h-screen flex h-[81vh]  ">
                <img
                    src="/portrait.jpg"
                    alt="mainImg"
                    className="w-[420px] h-full mr-10"
                />

                <div className="flex flex-col justify-center ">
                    <p className="uppercase text-[42px] font-[700] leading-[66px] py-4">
                        Chaimae michich
                    </p>
                    <div className="bg-grey w-[17%] h-1" />
                    <div className="capitalize text-[23px]  text-[#7D788A]  my-6 ">
                        {' '}
                        creative{' '}
                        <span className=" capitalize  font-[600] text-grey">
                            developer
                        </span>
                    </div>
                    <div className="py-[14px]  px-[26px] bg-grey  text-white w-fit cursor-pointer font-[500] text-[16px] border-grey border-[2px] hover:bg-white hover:text-grey">
                        Learn more
                    </div>
                </div>
            </div>
        </div>
    )
}
