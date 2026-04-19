import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { blogs } from '../../data/blogs'
import ReactNativeCover from '../../components/blog/reactNativeCover'
import FreelanceCover from '../../components/blog/freelanceCover'

const svgCovers = {
    'react-native': ReactNativeCover,
    'freelance': FreelanceCover,
}

function CoverArt({ cover, alt }) {
    if (cover && typeof cover === 'object' && cover.type === 'svg') {
        const Svg = svgCovers[cover.name]
        if (Svg) {
            return (
                <div className="w-full h-full flex items-center justify-center bg-grey">
                    <Svg />
                </div>
            )
        }
        return null
    }
    return (
        <Image
            width={600}
            height={400}
            src={cover}
            alt={alt}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
        />
    )
}

export default function Blog() {
    const [isClient, setIsClient] = useState(false)
    const [category, setCategory] = useState('')
    const [clicked, setClicked] = useState('All')

    useEffect(() => {
        setIsClient(true)
    }, [])

    const buttons = [...new Set(blogs.flatMap((post) => post.categories))]

    const visiblePosts = category
        ? blogs.filter((post) => post.categories.includes(category))
        : blogs

    if (!isClient) {
        return null
    }

    return (
        <div className="min-h-screen w-[85%] mx-auto pt-12">
            <div className="flex items-center py-8">
                <p className="text-grey font-[700] uppercase tracking-[7px] mr-6 text-[18px]">
                    BLOG
                </p>
                <span className="bg-grey w-full flex-1 h-[1px]" />
            </div>

            <p className="text-lightGrey text-[13px] leading-6 mb-8 max-w-[720px]">
                Notes on the things I build and the tools I build them with —
                React, Next.js, architecture, and the small lessons that keep
                showing up in production.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
                <button
                    className={clicked === 'All' ? 'font-[600]' : ''}
                    onClick={() => {
                        setCategory('')
                        setClicked('All')
                    }}
                >
                    All
                </button>
                {buttons.map((button) => (
                    <button
                        key={button}
                        onClick={() => {
                            setCategory(button)
                            setClicked(button)
                        }}
                        className={clicked === button ? 'font-[600]' : ''}
                    >
                        {button}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-12">
                {visiblePosts.map((post) => (
                    <AnimatePresence mode="wait" key={post.slug}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className="group flex flex-col shadow-xl overflow-hidden bg-white"
                        >
                            <Link
                                href={`/blog/${post.slug}`}
                                className="flex flex-col h-full"
                            >
                                <div className="w-full h-[240px] overflow-hidden">
                                    <CoverArt
                                        cover={post.cover}
                                        alt={post.title}
                                    />
                                </div>
                                <div className="p-5 flex flex-col gap-3 flex-1">
                                    <div className="flex flex-wrap gap-2">
                                        {post.categories.map((c) => (
                                            <span
                                                key={c}
                                                className="text-[11px] uppercase tracking-[2px] text-lightGrey border border-lightGrey/40 px-2 py-[2px]"
                                            >
                                                {c}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="font-[600] text-[18px] text-grey group-hover:underline leading-snug">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-lightGrey leading-6 flex-1">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between text-[12px] text-lightGrey pt-2 border-t border-lightGrey/20">
                                        <span>{post.date}</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    </AnimatePresence>
                ))}
            </div>
        </div>
    )
}
