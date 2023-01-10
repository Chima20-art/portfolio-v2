import react from 'react'
import { useState } from 'react'

const Projects = [
    {
        title: 'Portfolio',
        description: 'sadalsd sd;adsa adasd ',
        categories: ['Nextjs', 'TailwindCss'],
        url: '/',
        image: '/Screenshot1.png',
    },
    {
        title: 'Procktage',
        description: 'sadalsd sd;adsa adasd ',
        categories: ['sanity.io', 'Nextjs'],
        url: '/',
        image: '/Screenshot2.png',
    },
    {
        title: 'student forum',
        description: 'sadalsd sd;adsa adasd ',
        categories: ['Nextjs'],
        url: '/',
        image: '/Screenshot2.png',
    },
    {
        title: 'gym management-system',
        description: 'sadalsd sd;adsa adasd ',
        categories: ['Reactjs'],
        url: '/',
        image: '/Screenshot2.png',
    },
]

export default function Portfolio() {
    var buttons = []

    Projects.forEach((project) => {
        project.categories.forEach((category) => {
            if (!buttons.includes(category)) {
                buttons.push(category)
            }
        })
    })
    const [category, setCategory] = useState('')
    var specificProjects =
        category != ''
            ? Projects.filter((item) => {
                  return item?.categories?.includes(category)
              })
            : Projects

    return (
        <div className=" h-screen w-[85%] mx-auto">
            <div className="flex  items-center py-8  ">
                <p className="text-grey font-[700] uppercase tracking-[7px] mr-6  text-[18px]">
                    PORTFOLIO
                </p>
                <span className="bg-grey  w-full flex-1 h-[1px]" />
            </div>
            <div className="flex gap-4">
                <div className="cursor-pointer" onClick={() => setCategory('')}>
                    All
                </div>
                {buttons.map((button) => {
                    return (
                        <div
                            onClick={() => setCategory(button)}
                            className="cursor-pointer"
                        >
                            {button}
                        </div>
                    )
                })}
            </div>
            <div className=" mx-auto flex flex-wrap gap-12  mt-8">
                {specificProjects?.map((item) => {
                    return (
                        <img
                            src={item.image}
                            className="w-[45%] cursor-pointer  "
                        />
                    )
                })}
            </div>
        </div>
    )
}
