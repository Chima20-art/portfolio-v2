import { MdLocationPin } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'
import { HiDeviceMobile } from 'react-icons/hi'

export default function Contact() {
    const contacts = [
        {
            icon: MdLocationPin,
            description: 'Ave, Marrakech, Morocco',
        },
        {
            icon: GrMail,
            description: 'michichchaimae@gmail.com',
        },
        {
            icon: HiDeviceMobile,
            description: '+380994687634',
        },
    ]
    return (
        <div className=" h-fit  w-full mx-auto  pt-12  ">
            <div className="flex  items-center py-8  ">
                <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[18px]">
                    Get in touch
                </p>
                <span className="bg-grey  w-full flex-1 h-[1px]" />
            </div>
            <div className="w-full flex md:flex-row flex-col   gap-8">
                {contacts?.map((contact) => {
                    return (
                        <div className="flex flex-col justify center align center flex-1  border border-grey-400 w-full md:py-10 py-6 px-2 text-center ">
                            <contact.icon className=" w-full mb-4" />
                            <p className=" text-[#7d7789] text-[12px] ">
                                {contact.description}
                            </p>
                        </div>
                    )
                })}
            </div>
            <form
                type="submit"
                className=" flex flex-col py-8  lg:w-[80%] w-full text-start"
            >
                <input
                    type="text"
                    placeholder="Name"
                    className="border border-grey-300 py-3  px-2 w-full mb-6"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="border border-grey-300 py-3 px-2 w-full  mb-6"
                />
                <textarea
                    type="text"
                    placeholder="Message"
                    cols="60"
                    rows="3"
                    className="border border-grey-300 py-3 px-2 w-full cols  "
                />
                <button
                    type="button"
                    className="capitalize bg-[#333333] text-white py-4 mt-6 w-fit px-8 text-[14px] font-[600] hover:bg-white hover:text-black hover:border hover:border-black "
                >
                    send message
                </button>
            </form>
        </div>
    )
}
