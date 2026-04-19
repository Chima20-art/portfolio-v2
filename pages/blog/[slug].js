import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import { blogs, getBlogBySlug } from '../../data/blogs'

export default function BlogPost({ post }) {
    const router = useRouter()

    if (router.isFallback || !post) {
        return (
            <div className="min-h-screen w-[85%] mx-auto pt-12">
                <p className="text-lightGrey text-[13px]">Loading…</p>
            </div>
        )
    }

    const ogImagePath =
        post.ogImage ||
        (typeof post.cover === 'string' ? post.cover : '/headShot.jpg')

    return (
        <>
            <NextSeo
                title={`${post.title} — Chaimae Michich`}
                description={post.excerpt}
                openGraph={{
                    title: post.title,
                    description: post.excerpt,
                    images: [
                        { url: `https://www.michich.com${ogImagePath}` },
                    ],
                }}
            />
            <article className="min-h-screen w-[85%] mx-auto pt-12 pb-16">
                <div className="flex items-center py-8">
                    <Link
                        href="/blog"
                        className="text-grey font-[700] uppercase tracking-[7px] mr-6 text-[14px] hover:underline"
                    >
                        ← BLOG
                    </Link>
                    <span className="bg-grey w-full flex-1 h-[1px]" />
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                    {post.categories.map((c) => (
                        <span
                            key={c}
                            className="text-[11px] uppercase tracking-[2px] text-lightGrey border border-lightGrey/40 px-2 py-[2px]"
                        >
                            {c}
                        </span>
                    ))}
                </div>

                <h1 className="text-grey font-[700] text-[28px] md:text-[34px] leading-tight mb-4">
                    {post.title}
                </h1>

                <div className="flex items-center gap-4 text-[12px] text-lightGrey mb-8">
                    <span>{post.date}</span>
                    <span>•</span>
                    <span>{post.readTime}</span>
                </div>

                <div className="flex flex-col gap-6 text-lightGrey text-[14px] leading-7 max-w-[760px]">
                    {post.content.map((block, i) => {
                        if (block.type === 'heading') {
                            return (
                                <h2
                                    key={i}
                                    className="text-grey font-[600] text-[20px] mt-4"
                                >
                                    {block.text}
                                </h2>
                            )
                        }
                        if (block.type === 'image') {
                            return (
                                <div
                                    key={i}
                                    className="w-full my-2 shadow-md overflow-hidden"
                                >
                                    <Image
                                        src={block.src}
                                        alt={block.alt}
                                        width={1000}
                                        height={1000}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            )
                        }
                        return (
                            <p key={i} className="whitespace-pre-wrap">
                                {block.text}
                            </p>
                        )
                    })}
                </div>

                <div className="mt-12 pt-6 border-t border-lightGrey/20 flex justify-between items-center">
                    <Link
                        href="/blog"
                        className="text-grey hover:underline text-[13px]"
                    >
                        ← Back to blog
                    </Link>
                    <Link
                        href="/contact"
                        className="py-[10px] px-[20px] bg-grey text-white font-[500] text-[13px] border-grey border-[2px] hover:bg-white hover:text-grey rounded"
                    >
                        Work with me
                    </Link>
                </div>
            </article>
        </>
    )
}

export function getStaticPaths() {
    return {
        paths: blogs.map((post) => ({ params: { slug: post.slug } })),
        fallback: false,
    }
}

export function getStaticProps({ params }) {
    const post = getBlogBySlug(params.slug) || null
    return { props: { post } }
}
