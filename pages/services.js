import { SiNintendogamecube, SiShopify } from 'react-icons/si'
import { MdOutlineQuestionAnswer, MdDeveloperMode } from 'react-icons/md'
import { BsCodeSquare } from 'react-icons/bs'
import { TbBrandReactNative } from 'react-icons/tb'
import { AiOutlineCloud } from 'react-icons/ai'

const Service = [
    {
        Icon: SiNintendogamecube,
        title: 'On Demand Solutions',
        description:
            'I can help you develop a solution that is tailored to your unique business needs',
    },
    {
        Icon: MdDeveloperMode,
        title: 'Mobile App Development',
        description:
            'I offer mobile app development services, with a focus on creating high-quality, user-friendly apps.',
    },
    {
        Icon: BsCodeSquare,
        title: 'Web App Development',
        description:
            ' I use the latest technologies and frameworks to create responsive, interactive web apps that work seamlessly across all devices.',
    },
    {
        Icon: TbBrandReactNative,
        title: 'Hybrid Mobile App Development',
        description:
            'I use technologies like React Native to build apps that are fast, efficient, and easy to maintain',
    },
    {
        Icon: SiShopify,
        title: ' E-commerce Solutions',
        description:
            'I can assist you in setting up an online store and start selling your products or services in no time.',
    },
    {
        Icon: AiOutlineCloud,
        title: 'Cloud-based Solutions',
        description:
            ' My solutions are scalable, secure, and reliable. They can help your business adapt to changing market conditions.',
    },
]

export default function Services() {
    return (
        <div className=" h-fit  w-full mx-auto  pt-12  ">
            <div className="flex  items-center py-8  ">
                <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[18px]">
                    Services
                </p>
                <span className="bg-grey  w-full flex-1 h-[1px]" />
            </div>
            <div className="mx-auto flex flex-wrap gap-12 justify-around  py-8">
                {Service.map((item) => {
                    return (
                        <div className="group border border-gray-300  cursor-pointer hover:bg-[#0f070a] py-12 items-center align-center flex flex-col md:w-[44%]   w-full ">
                            <item.Icon className="w-[60px] h-[60px] group-hover:text-white" />
                            <h3 className="font-[500] w-[95%] text-center text-[24px] text-[#333] group-hover:text-white my-4">
                                {' '}
                                {item.title}
                            </h3>
                            <p className="text-gray-500 text-center text-[15px] w-[85%] group-hover:text-gray-400 ">
                                {item.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
