import { FaFacebookF, FaLinkedin } from 'react-icons/fa'
import { RiInstagramFill } from 'react-icons/ri'
import { VscGithubInverted } from 'react-icons/vsc'

export default function Footer() {
    return (
        <div className="mt-4  flex justify-between  ">
            <p className="text-grey font-[400] text-[14px]">Copyright @2022</p>
            <div className="flex justify-center align-center text-black  ">
                <FaFacebookF className="w-[16px] h-[14px] my-auto mr-2" />
                <RiInstagramFill className="w-[16px] h-[16px] my-auto mr-2" />
                <FaLinkedin className="w-[16px] h-[16px] my-auto mr-2" />

                <VscGithubInverted className="w-[16px] h-[14px] my-auto" />
            </div>
        </div>
    )
}
