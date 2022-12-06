import Footer from '../components/footer'
import Header from '../components/header'

export default function About() {
    return (
        <div className="md:max-w-[92%] mx-auto text-grey h-[100vh] flex flex-col justify-between">
            <Header />
            <div className="w-full  flex ">
                <div className=" h-[81vh] min-w-[420px]  bg-[F3EFF0] mr-10 flex justify-center ">
                    <img
                        src="/portrait.jpeg"
                        alt="mainImg"
                        className=" h-[90%] m-auto rounded drop-shadow-2xl "
                    />
                </div>
                <div className="flex flex-col ">
                    <div className="flex flex-col   w-full pt-20  h-fit">
                        <div className="flex w-full items-center mb-6  ">
                            <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[14px]">
                                About me
                            </p>
                            <span className="bg-grey  w-full flex-1 h-[1px]" />
                        </div>
                        <div className="flex  w-full items-start  h-fit ">
                            <div className=" w-[45%] text-lightGrey text-[13px] tracking-normal font-normal   leading-6 ">
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
                            <div className=" w-[45%] mx-auto flex text-lightGrey  text-[13px]   ">
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
                    <div className="flex w-full pt-24  h-fit justify-between ">
                        <div className=" w-[45%] flex flex-col">
                            <div className="flex w-full items-center mb-6   ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6 ">
                                    services
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <ul className=" w-[45%] text-lightGrey text-[13px] tracking-normal font-normal   leading-6 ">
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
                        <div className=" w-[45%] flex flex-col">
                            <div className="flex w-full items-center mb-6   ">
                                <p className="text-grey font-[700] text-[14px] uppercase tracking-[7px] mr-6 ">
                                    interests
                                </p>
                                <span className="bg-grey  w-full flex-1 h-[1px]" />
                            </div>
                            <ul className=" w-[45%] text-lightGrey text-[13px] tracking-normal font-normal   leading-6 ">
                                <li className="flex relative  ">
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
            <Footer />
        </div>
    )
}
