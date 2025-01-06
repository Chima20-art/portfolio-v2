import {useEffect, useState} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiFillGithub } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

const Projects = [
  {
    title: "Procktage",
    description: "ecommerce website ",
    categories: ["Nextjs"],
    url: "https://github.com/Chima20-art/procktage-frontend",
    link: "https://www.procktage.ma/",
    image: "/procktage.png",
  },
  {
    title: "SuperbFragrances",
    description: "Fragrances online shop",
    categories: ["Nextjs"],
    link: "https://www.superbfragrance.ma/",
    url: "https://github.com/Chima20-art/fragrances",
    image: "/fragrances.png",
  },
  {
    title: "Wordle",
    description: "Wordle: word puzzle game ",
    categories: ["Nextjs"],
    url: " https://github.com/Chima20-art/commonshare-task",
    link: "https://wordle.michich.com",
    image: "/wordle.png",
  },
  {
    title: "Nordic Rose",
    description: "Online blog ",
    categories: ["Nextjs", "Sanity.io"],
    url: "https://github.com/Chima20-art/blog-Next",
    link: "https://chaimae-blog.vercel.app/",
    image: "/blog.png",
  },
  {
    title: "Rootz",
    description: "Rootz User Interface ",
    categories: ["Nextjs"],
    url: "https://github.com/Chima20-art/Halo-test",
    link: "https://halo-test.vercel.app/",
    image: "/rootz.png",
  },
  {
    title: "DM",
    description: "A car rental-frienidly UI ",
    categories: ["Nextjs"],
    url: "https://github.com/Chima20-art/wordle-game",
    link: "https://commonshare-task.vercel.app/",
    image: "/car.png",
  },

  {
    title: "Auto ecole Alwafaa",
    description: "driving school website ",
    categories: ["Nextjs"],
    link: "https://dri-school.vercel.app/",
    url: "https://github.com/Chima20-art/dri-school",
    image: "/autoecole.png",
  },
  {
    title: "Portfolio",
    description: "My personal website",
    categories: ["Nextjs"],
    url: "https://github.com/Chima20-art/portfolio-v2",
    link: "",
    image: "/portfolio.png",
  },
  {
    title: "Association rabat kickboxing",
    description: "Gym Management System ",
    categories: ["Nextjs"],
    link: "https://github.com/Chima20-art/gym-frontend",
    url: "https://github.com/Chima20-art/gym-frontend",
    image: "/gym.png",
  },
  {
    title: "covid-19 map",
    description: "confirmed Covid-19 cases around the world. ",
    categories: ["React"],
    link: "https://coronavirus-world-map-git-master-chima20-art.vercel.app/",
    url: "https://github.com/Chima20-art/coronavirus-world-map",
    image: "/map.png",
  },
  {
    title: "Procktage-sanity",
    description: "ecommerce website ",
    categories: ["Sanity.io"],
    link: "https://procktage.sanity.studio",
    url: "https://github.com/Chima20-art/procktage",
    image: "/sanity.png",
  },

  {
    title: "React web-app",
    description: "DSI’s shared service solutions ",
    categories: ["React"],
    link: "https://community-chima20-art.vercel.app/",
    url: "https://github.com/Chima20-art/community-website",
    image: "/community.png",
  },
];

export default function Portfolio() {
  const [isClient, setIsClient] = useState(false);
  const [category, setCategory] = useState("");
  const [clicked, setClicked] = useState("All");

  useEffect(() => {
    setIsClient(true);
  }, []);

  const buttons = [...new Set(Projects.flatMap(project => project.categories))];

  const specificProjects = category
      ? Projects.filter(item => item.categories.includes(category))
      : Projects;

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
      <div className="min-h-screen w-[85%] mx-auto pt-12">
        <div className="flex items-center py-8">
          <p className="text-grey font-[700] uppercase tracking-[7px] mr-6 text-[18px]">
            PORTFOLIO
          </p>
          <span className="bg-grey w-full flex-1 h-[1px]" />
        </div>
        <div className="flex gap-4 mb-8">
          <button
              className={clicked === "All" ? "font-[600]" : ""}
              onClick={() => {
                setCategory("");
                setClicked("All");
              }}
          >
            All
          </button>
          {buttons.map((button) => (
              <button
                  key={button}
                  onClick={() => {
                    setCategory(button);
                    setClicked(button);
                  }}
                  className={clicked === button ? "font-[600]" : ""}
              >
                {button}
              </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {specificProjects.map((item) => (
              <AnimatePresence mode="wait" key={item.title}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.3 }}
                    className="group relative flex flex-col min-h-[350px] shadow-xl overflow-hidden"
                >
                  <Link href={item.link} className="w-full h-full">
                    <div className="w-full h-[300px]">
                      <Image
                          width={396}
                          height={396}
                          src={item.image}
                          alt={item.title}
                          className="object-cover w-full h-full"
                      />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full bg-white p-4">
                      <div className="font-[600] flex justify-between items-center">
                        <span className="hover:underline">{item.title}</span>
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                            onClick={(e) => e.stopPropagation()}
                        >
                          <AiFillGithub className="text-2xl" />
                        </a>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              </AnimatePresence>
          ))}
        </div>
      </div>
  );
}


