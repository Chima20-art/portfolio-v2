import react from 'react'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { AiFillGithub } from 'react-icons/ai'
import { TbExternalLink } from 'react-icons/tb'
import Link from 'next/link'

const Projects = [
    {
        title: 'Portfolio',
        description: 'My personal website',
        categories: ['Nextjs'],
        url: 'https://github.com/Chima20-art/portfolio-v2',
        link: '',
        image: '/portfolio.png',
    },
    {
        title: 'Procktage',
        description: 'ecommerce website ',
        categories: ['Nextjs'],
        link: 'https://www.procktage.ma/',

        url: 'https://github.com/Chima20-art/procktage-frontend',
        image: '/procktage.png',
    },
    {
        title: 'Procktage-sanity',
        description: 'ecommerce website ',
        categories: ['Sanity.io'],

        link: 'https://procktage.sanity.studio',
        url: 'https://github.com/Chima20-art/procktage',
        image: '/sanity.png',
    },
    {
        title: 'The student forum',
        description: 'A digital university student forum ',
        categories: ['Nextjs'],
        url: 'https://github.com/Chima20-art/student-forum',
        link: 'https://student-forum.vercel.app/forums',
        image: '/studentforum.png',
    },
    {
        title: 'Auto ecole alwafaa',
        description: 'driving school website ',
        link: 'https://dri-school.vercel.app/',
        categories: ['Nextjs'],
        link: 'https://dri-school.vercel.app/',
        url: 'https://github.com/Chima20-art/dri-school',
        image: '/autoecole.png',
    },
    {
        title: 'Association rabat kickboxing',
        description: 'Gym Management System ',
        categories: ['Nextjs'],
        link: 'https://github.com/Chima20-art/gym-frontend',
        url: 'https://github.com/Chima20-art/gym-frontend',
        image: '/gym.png',
    },
    {
        title: 'Nordic Rose',
        description: 'Online blog ',
        categories: ['Nextjs', 'Sanity.io'],
        link: 'https://chaimae-blog.vercel.app/',
        url: 'https://github.com/Chima20-art/blog-Next',
        image: '/blog.png',
    },
    {
        title: 'covid-19 map',
        description: 'confirmed Covid-19 cases around the world. ',
        categories: ['React'],
        link: 'https://coronavirus-world-map-git-master-chima20-art.vercel.app/',
        url: 'https://github.com/Chima20-art/coronavirus-world-map',
        image: '/map.png',
    },
    {
        title: 'React web-app',
        description: 'DSI’s shared service solutions ',
        categories: ['React'],
        link: 'https://community-chima20-art.vercel.app/',
        url: 'https://github.com/Chima20-art/community-website',
        image: '/community.png',
    },
]

export default function Portfolio() {
    const [hovered, setHovered] = useState(false)
    var buttons = []
    const [category, setCategory] = useState('')
    const [clicked, setClicked] = useState('All')

    Projects.forEach((project) => {
        project.categories.forEach((category) => {
            if (!buttons.includes(category)) {
                buttons.push(category)
            }
        })
    })

    var specificProjects =
        category != ''
            ? Projects.filter((item) => {
                  return item?.categories?.includes(category)
              })
            : Projects
    console.log(category)

    return (
        <div className=" h-screen w-[85%] mx-auto  pt-12 ">
            <div className="flex  items-center py-8  ">
                <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[18px]">
                    PORTFOLIO
                </p>
                <span className="bg-grey  w-full flex-1 h-[1px]" />
            </div>
            <div className="flex gap-4">
                <div
                    className={
                        clicked == 'All'
                            ? 'font-[600] cursor-pointer'
                            : 'cursor-pointer'
                    }
                    onClick={() => {
                        setCategory('')
                        setClicked('All')
                    }}
                >
                    All
                </div>
                {buttons.map((button) => {
                    return (
                        <div
                            onClick={() => {
                                setCategory(button)
                                setClicked(button)
                            }}
                            className={
                                clicked == button
                                    ? 'font-[600] cursor-pointer'
                                    : 'cursor-pointer'
                            }
                        >
                            {button}
                        </div>
                    )
                })}
            </div>

            <div className="w-full mx-auto h-fit flex justify-between  items-stretch footer flex-wrap gap-12  py-8">
                {specificProjects?.map((item) => {
                    return (
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={item?.title}
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                onHoverStart={() => setHovered(true)}
                                onHoverEnd={() => setHovered(false)}
                                className="group relative flex-[0_0_100%] flex items-stretch md:flex-[0_0_44%] max-h-[400px] column-gap-4  w-full   h-full  bg-red-300 cursor-pointer shadow-xl overflow-hidden  "
                            >
                                <div className="w-full h-[300px] bg-blue-300">
                                    <img
                                        src={item.image}
                                        className=" grayscale hover:grayscale-0 flex-1 object-cover w-full h-full   "
                                    />
                                </div>

                                <AnimatePresence>
                                    <motion.div
                                        key={item?.description}
                                        initial={{
                                            opacity: 0,
                                            //scale: 0.1,
                                            y: '100%',
                                        }}
                                        animate={
                                            hovered
                                                ? {
                                                      opacity: 1,
                                                      scale: 1,
                                                      y: '0%',
                                                  }
                                                : {}
                                        }
                                        className="hidden active:flex  group-hover:flex group-active:flex group-hover:flex-col group-hover:shadow-md group-hover:absolute  group-hover:border-t group-hover:bottom-0 group-hover:left-0 group-hover:w-full group-hover:bg-white group-hover:z-5 group-hover:mx-auto"
                                    >
                                        <div
                                            transition={{ duration: 1 }}
                                            className=" bg-white w-[100%]  p-2 mx-auto"
                                        >
                                            <div className="font-[600] flex justify-between">
                                                <Link
                                                    href={item.link}
                                                    className="hover:underline active:underline "
                                                >
                                                    {item.title}
                                                </Link>
                                                <Link
                                                    href={item.url}
                                                    className="hovertext flex gap-1 "
                                                    data-hover=" //github link"
                                                >
                                                    <AiFillGithub className="text-2xl" />
                                                </Link>
                                            </div>
                                            <p className="text-[12px] text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </motion.div>
                        </AnimatePresence>
                    )
                })}
            </div>
        </div>
    )
}
