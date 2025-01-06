import Link from 'next/link'

const programming = [
    {
        title: 'HTML & CSS',
        value: '95%',
    },
    {
        title: 'Javascript/ typescript',
        value: '95%',
    },
    {
        title: 'ReactJs/NextJs',
        value: '95%',
    },
    {
        title: 'NodeJS',
        value: '90%',
    },
    {
        title: 'Rxjs',
        value: '80%',
    },
]

const languages = [
    {
        title: 'English',
        value: '0.90',
    },
    {
        title: 'French',
        value: '0.90',
    },
    {
        title: 'Russian',
        value: '0.70',
    },
]

const education = [
    {
        place: 'Kharkiv National University of Radio Electronics',
        name: 'Masters in Cyber Security',
        year: '2022 - 2024',
    },
    {
        place: ' Kharkiv National University of Radio Electronics',
        name: 'BSc in Computer Engineering',
        year: '2017 - 2022',
    },
    {
        place: 'High School',
        name: 'Higher School Graduation',
        year: '2017',
    },
]
const projects = [
    {
        name: 'SuperbFragrance',
        role: 'fragrances web store',
        year: '01/2023-02/2024',
        url: 'https://fragrances-six.vercel.app/',
    },
    {
        name: 'My Portfolio',
        role: 'this website',
        year: '2023- running',
        url: 'https://www.michich.com/',
    },
    {
        name: 'Auto-ecole Alwafa',
        role: 'Driving school website',
        year: ' 12/2022-12/2022',
        url: 'https://dri-school.vercel.app/',
    },
]

export default function About() {
    return (
        <div className="w-[85%] mx-auto  text-grey   flex flex-col justify-between">
            <div className="w-full flex ">
                <div className="flex flex-col ">
                    <div className="flex flex-col   w-full pt-20  h-fit">
                        <div className="flex w-full items-center mb-6  ">
                            <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[14px]">
                                About me
                            </p>
                            <span className="bg-grey  w-full flex-1 h-[1px]" />
                        </div>
                        <div className="flex flex-col lg:flex-row gap-8  w-full justify-between  h-fit ">
                            <div className=" flex-1 text-lightGrey text-[13px] tracking-normal font-normal   leading-6 ">
                                <p className="my-4">
                                    Hello there!  My name is {' '}
                                    <span className="font-bold">
                                        Chaimae Michich
                                    </span>{' '}
                                    and I am thrilled to introduce myself as a
                                    passionate and dedicated Software
                                    Developer, specializing
                                    in building scalable, maintainable, and user-focused applications.
                                </p>
                                <p className="mt-4">


                                    I manage projects, design efficient architectures, and integrate secure,
                                    high-performing backends for end-to-end solutions.
                                </p>
                            </div>
                            <div className=" flex-1  flex text-lightGrey flex-col  text-[13px] ">
                                <div className="flex flex-row  py-2">
                                    {' '}
                                    <span className="w-[80px] font-bold    text-[13px]     ">
                                        Name:
                                    </span>
                                    <span className=" flex   ml-6 h-full text-[13px]    ">
                                        {' '}
                                        Chaimae Michich
                                    </span>
                                </div>
                                <div className="flex flex-row py-2">
                                    {' '}
                                    <span className="w-[80px] font-bold    text-[13px]  ">
                                        Address:
                                    </span>
                                    <span className=" flex   ml-6 h-full text-[13px]  ">
                                        {' '}
                                        Ave Street, Marrakech
                                    </span>
                                </div>
                                <div className="flex flex-row py-2">
                                    {' '}
                                    <span className="w-[80px] font-bold    text-[13px]   ">
                                        Study:
                                    </span>
                                    <span className=" flex   ml-6 h-full text-[13px] ">
                                        {' '}
                                        Kharkiv National University of Radioelectronics
                                    </span>
                                </div>
                                <div className="flex flex-row py-2">
                                    {' '}
                                    <span className="w-[80px] font-bold    text-[13px]  ">
                                        Degree:
                                    </span>
                                    <span className=" flex   ml-6 h-full text-[13px] ">
                                        {' '}
                                        Master of Science
                                    </span>
                                </div>
                                <div className="flex flex-row py-2">
                                    {' '}
                                    <span className="w-[80px] font-bold    text-[13px]">
                                        Mail::
                                    </span>
                                    <span className=" flex   ml-6 h-full text-[13px] ">
                                        {' '}
                                        michichchaimae@gmail.com
                                    </span>
                                </div>
                                <div className="flex flex-row py-2">
                                    {' '}
                                    <span className="w-[80px] font-bold    text-[13px] ">
                                        Phone:
                                    </span>
                                    <span className=" flex   ml-6 h-full text-[13px]  ">
                                        {' '}
                                        +380 98 357 19 66
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full gap-8 pt-24  h-fit justify-between ">
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
                                    <p className="ml-4">
                                        Software development and programming
                                    </p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Computer engineering</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Computer sciences</p>
                                </li>
                                <li className="flex relative  ">
                                    <div className="absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Communication</p>
                                </li>
                                <li className="flex relative ">
                                    <div className=" absolute left-0 top-[25%] border-t-transparent border-t-[5.5px] border-l-[0px] border-b-[5.5px] border-l-[9.5px] border-b-transparent border-l-[#7d7789]" />
                                    <p className="ml-4">Time Management</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row w-full gap-8 pt-24  h-fit justify-between ">
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
                    <div className="flex flex-col lg:flex-row w-full gap-8 pt-24  h-fit justify-between ">
                        <div className="flex-1 flex flex-col">
                            <div className="flex w-full items-center mb-6   ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6 ">
                                    EDUCATION
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <div className="flex flex-col relative edu mt-10 pl-3  text-lightGrey text-[13px] tracking-normal font-normal    ">
                                {education?.map((item) => {
                                    return (
                                        <div
                                            key={item.name}
                                            className="eduItem relative pl-5  flex   my-2  "
                                        >
                                            <div className=" mr-4 items-stretch   flex-1 max-w-[180px]  ">
                                                <div className="bg-gray-200 rounded-full text-center h-fit py-2 ">
                                                    {item.year}
                                                </div>
                                            </div>
                                            <div className="flex flex-col flex-1 ">
                                                <div className="text-black font-[600] text-[14px] capitalize w-full  ">
                                                    {item.name}
                                                </div>
                                                <div className="pt-1">
                                                    {item.year}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col ">
                            <div className="flex w-full items-center mb-6  ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6  ">
                                    Projects
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <div className="flex flex-col relative edu mt-10 pl-3  text-lightGrey text-[13px] tracking-normal font-normal    ">
                                {projects?.map((project) => {
                                    return (
                                        <div
                                            key={project.name}
                                            className="eduItem relative pl-5  flex   my-2"
                                        >
                                            <div className="mr-4  items-stretch flex-1 max-w-[180px] ">
                                                <div className="bg-gray-200 rounded-full  h-fit py-2 text-center ">
                                                    {project.year}
                                                </div>
                                            </div>

                                            <div className="flex flex-col flex-1  ">
                                                <Link
                                                    href={project.url}
                                                    className="text-black font-[600] text-[16px] capitalize  hover:underline cursor-pointer"
                                                >
                                                    {project.name}
                                                </Link>
                                                <div className="pt-1">
                                                    {project.role}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
