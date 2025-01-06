import { useTypingAnimation } from '../hooks/useTypingAnimation'
import Link from 'next/link'

export default function Home() {
    const headlines = [
        'Software Engineer',
        'Freelance Tech Consultant',
        'Mobile & Web Solutions Expert',
    ]

    const currentHeadline = useTypingAnimation(headlines, 100, 50, 1500)

    return (
        <div className="w-[85%] mx-auto h-full items-center text-grey flex">
            <div className="w-full flex align-center my-auto">
                <div className="flex flex-col justify-center">
                    <p className="uppercase text-[42px] font-[700] leading-[66px] py-4">
                        Chaimae michich
                    </p>
                    <div className="bg-grey w-[17%] h-1" />
                    <div className="capitalize text-[23px] text-[#7D788A] my-6 inline-block h-[34px]">
                        <span className="font-[600] text-grey">
                            {currentHeadline}
                        </span>
                        <span className="animate-blink">|</span>
                    </div>
                    <Link
                        href="/about"
                        className="py-[14px] px-[26px] bg-grey text-white w-fit cursor-pointer font-[500] text-[16px] border-grey border-[2px] hover:bg-white hover:text-grey rounded"
                    >
                        Learn more
                    </Link>
                </div>
            </div>
        </div>
    )
}

