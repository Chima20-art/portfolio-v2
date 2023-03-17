import { MdLocationPin } from 'react-icons/md'
import { GrMail } from 'react-icons/gr'
import { HiDeviceMobile } from 'react-icons/hi'
import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSend = async (e) => {
        e.preventDefault()
        try {
            let request = await fetch('/api/sendEmail', {
                method: 'POST',
                body: JSON.stringify({ name, email, message }),
            })

            let { status, error } = await request.json()

            if (status) {
                toast.success('Email sent!')
            } else {
                toast.error('Ooops! there was an error: Email not sent')
            }
        } catch (error) {
            toast.error('Ooops! there was an error: Email not sent')

            console.log('Something went wrong: ', error)
        }
        setName('')
        setEmail('')
        setMessage('')
    }

    return (
        <div className=" h-fit w-[85%] mx-auto  pt-12  ">
            <div className="flex  items-center py-8  ">
                <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[18px]">
                    Get in touch
                </p>
                <span className="bg-grey  w-full flex-1 h-[1px]" />
            </div>
            <div className="w-full flex md:flex-row flex-col   gap-8">
                {contacts?.map((contact) => {
                    return (
                        <div
                            key={contact.description}
                            className="flex flex-col justify center align center flex-1  border border-grey-400 w-full md:py-10 py-6 px-2 text-center "
                        >
                            <contact.icon className=" w-full mb-4 text-2xl" />
                            <p className=" text-[#7d7789] text-[14px] ">
                                {contact.description}
                            </p>
                        </div>
                    )
                })}
            </div>
            <form
                onClick={(e) => e.stopPropagation()}
                onSubmit={(e) => onSend(e)}
                className=" flex flex-col py-8  lg:w-[80%] w-full text-start"
            >
                <input
                    type="text"
                    placeholder="Name"
                    required
                    className="border border-grey-300 py-3  px-2 w-full mb-6"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="email"
                    required
                    placeholder="Email"
                    className="border border-grey-300 py-3 px-2 w-full  mb-6"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                    type="text"
                    placeholder="Message"
                    required
                    cols="60"
                    rows="3"
                    className="border border-grey-300 py-3 px-2 w-full cols  "
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type="submit"
                    className="capitalize bg-[#333333] text-white py-4 mt-6 w-fit px-8 text-[14px] font-[600] hover:bg-white hover:text-black hover:border hover:border-black "
                >
                    send message
                </button>
                <ToastContainer />
            </form>
        </div>
    )
}
