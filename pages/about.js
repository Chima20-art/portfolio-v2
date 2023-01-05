import Footer from '../components/footer'
import Header from '../components/header'

const programming = [
    {
        title: 'HTML & CSS',
        value: '60%',
    },
    {
        title: 'Javascript',
        value: '85%',
    },
    {
        title: 'WordPress',
        value: '90%',
    },
    {
        title: 'Nextjs',
        value: '100%',
    },
]

const languages = [
    {
        title: 'English',
        value: '0.95',
    },
    {
        title: 'Russian',
        value: '0.80',
    },
    {
        title: 'Arabic',
        value: '0.90',
    },
]

const education = [
    {
        place: 'Oxford Univercity',
        name: 'Master Degree',
        year: '2014 - 2016',
    },
    {
        place: 'Oxford Univercity',
        name: 'Master Degree',
        year: '2014 - 2016',
    },
    {
        place: 'Oxford Univercity',
        name: 'Master Degree',
        year: '2014 - 2016',
    },
]

export default function About() {
    return (
        <div className="w-full  text-grey   flex flex-col justify-between">
            <div className="w-full  flex ">
                <div className="flex flex-col ">
                    <div className="flex flex-col   w-full pt-20  h-fit">
                        <div className="flex w-full items-center mb-6  ">
                            <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[14px]">
                                About me
                            </p>
                            <span className="bg-grey  w-full flex-1 h-[1px]" />
                        </div>
                        <div className="flex flex-col xl:flex-row gap-8  w-full justify-between  h-fit ">
                            <div className=" flex-1 text-lightGrey text-[13px] tracking-normal font-normal   leading-6 ">
                                <p className="my-4">
                                    Hello there! My name is{' '}
                                    <span className="font-bold">
                                        Chaimae Michich
                                    </span>
                                    . I am a graphic designer, and I'm very
                                    passionate and dedicated to my work.
                                </p>
                                <p className="mt-4">
                                    With 20 years experience as a professional a
                                    graphic designer, I have acquired the skills
                                    and knowledge necessary to make your project
                                    a success.
                                </p>
                            </div>
                            <div className=" flex-1  flex text-lightGrey  text-[13px]   ">
                                <p className="font-bold  flex flex-col  text-[13px]   py-4  gap-3">
                                    <span>Name:</span>
                                    <span>Address:</span>
                                    <span>Study:</span>
                                    <span>Degree:</span>
                                    <span>Mail:</span>
                                    <span>Phone:</span>
                                </p>
                                <p className="  flex flex-col  ml-6 h-full text-[13px]   py-4  gap-3">
                                    <span> Chaimae Michich</span>
                                    <span>Ave Street, New York, USA</span>
                                    <span> Univercity of Oxford</span>
                                    <span>Master of Science</span>
                                    <span>michichchaimae@gmail.com</span>
                                    <span>+77 022 444 05 05</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row w-full gap-8 pt-24  h-fit justify-between ">
                        <div className="flex-1 flex flex-col">
                            <div className="flex w-full items-center mb-6   ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6 ">
                                    services
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <ul className="  text-lightGrey text-[13px] tracking-normal font-normal   leading-8 ">
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4"> Web Development</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4"> Graphic design</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Landing page</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">On page Seo</p>
                                </li>
                                <li className="flex relative ">
                                    <div className=" absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Web hosting</p>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 flex flex-col ">
                            <div className="flex w-full items-center mb-6  ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6  ">
                                    interests
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <ul className="  text-lightGrey text-[13px] tracking-normal font-normal   leading-8 ">
                                <li className="flex relative   ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Painting & Drawing</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4"> Reading & Writing</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Music & Cinema</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Travel & Picnik</p>
                                </li>
                                <li className="flex relative ">
                                    <div className=" absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Rain & Snow</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row w-full gap-8 pt-24  h-fit justify-between ">
                        <div className="flex-1 flex flex-col">
                            <div className="flex w-full items-center mb-6   ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6 ">
                                    PROGRAMMING
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <div className="flex flex-col  text-lightGrey text-[13px] tracking-normal font-normal   leading-8 ">
                                {programming?.map((item) => {
                                    return (
                                        <div
                                            key={item?.title}
                                            className="w-full relative mb-4 "
                                        >
                                            <span className="text-base py-1">
                                                {item?.title}
                                            </span>
                                            <span
                                                className="absolute py-1 -translate-x-[100%]"
                                                style={{
                                                    left: item?.value,
                                                }}
                                            >
                                                {item?.value}
                                            </span>
                                            <div className="w-full h-1 bg-lightGrey/30">
                                                <div
                                                    className={`bg-lightGrey/70 h-1 `}
                                                    style={{
                                                        width: item?.value,
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col ">
                            <div className="flex w-full items-center mb-6  ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6  ">
                                    LANGUAGE
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <div className="flex text-lightGrey text-[13px] tracking-normal font-normal justify-between   leading-8 ">
                                {languages?.map((item) => {
                                    return (
                                        <div
                                            key={item?.title}
                                            className=" flex-[0_0_30%]  flex flex-col items-center justify-center w-full h-full text-lightGrey"
                                        >
                                            <div className="relative mb-2 text-lightGrey ">
                                                <svg
                                                    className="circle stroke-lightGrey"
                                                    width="w-full"
                                                    height="120"
                                                    viewBox="0 0 120 120"
                                                >
                                                    <circle
                                                        className="stroke-lightGrey opacity-30"
                                                        cx="60"
                                                        cy="60"
                                                        r="54"
                                                        pathLength="1"
                                                        stroke-linecap="round"
                                                        stroke-width="6"
                                                    ></circle>
                                                    <circle
                                                        cx="60"
                                                        cy="60"
                                                        r="54"
                                                        stroke-linecap="round"
                                                        stroke-width="6"
                                                        opacity="1"
                                                        pathLength="1"
                                                        stroke-dashoffset="0px"
                                                        stroke-dasharray={`${item.value}px 1px`}
                                                    ></circle>
                                                </svg>
                                                <div className="absolute text-[16px] top-0 left-0 w-full h-full flex z-40 items-center justify-center ">
                                                    {item?.value * 100}%
                                                </div>
                                            </div>

                                            <span>{item?.title}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col xl:flex-row w-full gap-8 pt-24  h-fit justify-between ">
                        <div className="flex-1 flex flex-col">
                            <div className="flex w-full items-center mb-6   ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6 ">
                                    EDUCATION
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <div className="flex flex-col relative edu mt-10 pl-3  text-lightGrey text-[13px] tracking-normal font-normal   leading-8 ">
                                {education?.map((item) => {
                                    return (
                                        <div
                                            key={item.name}
                                            className="eduItem relative pl-5"
                                        >
                                            {item.name}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col ">
                            <div className="flex w-full items-center mb-6  ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6  ">
                                    interests
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <ul className="  text-lightGrey text-[13px] tracking-normal font-normal   leading-8 ">
                                <li className="flex relative   ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Painting & Drawing</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4"> Reading & Writing</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Music & Cinema</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Travel & Picnik</p>
                                </li>
                                <li className="flex relative ">
                                    <div className=" absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Rain & Snow</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
