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
            <div className="w-full flex   gap-8">
                {contacts?.map((contact) => {
                    return (
                        <div className="flex flex-col justify center align center flex-1 border border-grey-400 w-fit py-10 text-center ">
                            <contact.icon className=" w-full mb-4" />
                            <p className=" text-[#7d7789] ">
                                {contact.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
