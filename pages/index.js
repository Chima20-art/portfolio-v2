import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/header'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import Footer from '../components/footer'

export default function Home() {
    const [showButton, setShowButton] = useState(false)
    const [headlines, setHeadlines] = useState([
        {
            title: 'Developer',
        },
        {
            title: 'Freelancer',
        },
        {
            title: 'Designer',
        },
    ])
    const [selectedHeadline, setSelectedHeadline] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (selectedHeadline < headlines.length - 1) {
                setSelectedHeadline(selectedHeadline + 1)
            } else {
                setSelectedHeadline(0)
            }
        }, 2500)
        return () => {
            clearInterval(interval)
        }
    }, [selectedHeadline])

    return (
        <div className="md:max-w-[92%] items-center  text-grey flex ">
            <div className="w-screen  flex align-center my-auto ">
                <div className="flex flex-col justify-center ">
                    <p className="uppercase text-[42px] font-[700] leading-[66px] py-4">
                        Chaimae michich
                    </p>
                    <div className="bg-grey w-[17%] h-1" />
                    <div className="cd-headline rotate-1  capitalize text-[23px]  text-[#7D788A]  my-6  inline-block">
                        {' '}
                        creative{' '}
                        <span className="cd-words-wrapper  capitalize  font-[600] text-grey">
                            {headlines.map((item, index) => {
                                return (
                                    <b
                                        className={`${
                                            index == selectedHeadline
                                                ? 'is-visible'
                                                : ''
                                        } `}
                                    >
                                        {item.title}
                                    </b>
                                )
                            })}
                        </span>
                    </div>
                    <div className="py-[14px]  px-[26px] bg-grey  text-white w-fit cursor-pointer font-[500] text-[16px] border-grey border-[2px] hover:bg-white hover:text-grey rounded">
                        Learn more
                    </div>
                </div>
            </div>
        </div>
    )
}
