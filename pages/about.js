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

                <div className="flex flex-col   w-full pt-24">
                    <div className="flex w-full items-center mb-6 ">
                        <p className="text-grey font-[700] uppercase tracking-[7px] mr-6 ">
                            About me
                        </p>
                        <span className="bg-grey  w-full flex-1 h-[1px]" />
                    </div>
                    <div className="flex  w-full items-start  ">
                        <div className=" w-[45%] text-lightGrey text-[13px] tracking-normal font-normal   leading-6 ">
                            <p className="my-4">
                                Hello there! My name is{' '}
                                <span className="font-bold">
                                    Chaimae Michich
                                </span>
                                . I am a graphic designer, and I'm very
                                passionate and dedicated to my work.
                            </p>
                            <p className="my-4">
                                With 20 years experience as a professional a
                                graphic designer, I have acquired the skills and
                                knowledge necessary to make your project a
                                success.
                            </p>
                        </div>
                        <div className=" w-[45%] mx-auto flex text-lightGrey  text-[13px]  h-full   ">
                            <p className="font-bold  flex flex-col  text-[13px]   py-4  h-full gap-4">
                                <span>Name:</span>
                                <span>Address:</span>
                                <span>Study:</span>
                                <span>Degree:</span>
                                <span>Mail:</span>
                                <span>Phone:</span>
                            </p>
                            <p className="  flex flex-col  ml-6 h-full text-[13px]    py-4  gap-4">
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
            </div>
            <Footer />
        </div>
    )
}
