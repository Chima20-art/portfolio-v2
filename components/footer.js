import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { VscGithubInverted } from 'react-icons/vsc'

export default function Footer() {
    return (
        <div className=" h-14 flex justify-between  py-6 ">
            <p className="text-grey font-[400] text-[14px]">Copyright @2022</p>
            <div className="flex justify-center align-center text-black  ">
                <FaFacebookF className="w-[16px] h-[14px] my-auto mr-2 cursor-pointer" />
                <RiInstagramFill className="w-[16px] h-[16px] my-auto mr-2 cursor-pointer " />
                <FaLinkedin className="w-[16px] h-[16px] my-auto mr-2 cursor-pointer" />
                <VscGithubInverted className="w-[16px] h-[14px] my-auto cursor-pointer" />
            </div>
        </div>
    )
}
