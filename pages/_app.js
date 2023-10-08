import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import Loading from "../components/loading";

import { DefaultSeo } from "next-seo";
import Image from "next/image";
import GoogleAnalytics from "../components/googleAnalytics";
import CookiePopUp from "../components/cookiePopUp";
import { useCookies } from "react-cookie";

const ANALYTICS_COOKIES = ["_ga", "1P_JAR", "_ga_R7JKCQTMRS"];
const ESSENTIAL_COOKIES = ["user-id"];

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(["cookie-name"]);
  const [acceptedCookies, setAcceptedCookies] = useState("essential"); // eithe or essential 'analytics' or 'all'
  const [hideBanenr, setHideBanner] = useState(false);

  const setCookiePolicy = (value) => {
    setAcceptedCookies(value);
    setHideBanner(true);
    localStorage.setItem("setShowBanner", true);
  };

  useEffect(() => {
    console.log("cookies ");
    console.log(JSON.stringify(cookies));
    let cookiesKeys = Object.keys(cookies);
    cookiesKeys.forEach((key) => {
      console.log("dealing with cookie ", key);
      if (ANALYTICS_COOKIES.includes(key) && acceptedCookies == "essential") {
        console.log("removed cookie");
        removeCookie(key);
      } else {
        console.log("keeping cookie");
      }
    });
    console.log(" ");
  }, [cookies]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
    setCookie("user-id", "user-41");
    let pressiedCookie = localStorage.getItem("acceptedCookies");
    if (
      ["all", "essential", "analytics"].includes(pressiedCookie) &&
      acceptedCookies != pressiedCookie
    ) {
      setAcceptedCookies(pressiedCookie);
    }
    let ShouldShowBanner = localStorage.getItem("setShowBanner");
    if (ShouldShowBanner) {
      setHideBanner(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("acceptedCookies", acceptedCookies);
  }, [acceptedCookies]);

  return (
    <>
      {" "}
      <DefaultSeo
        title="Chaimae Michich - Javascript developer - Freelancer"
        description=" I am thrilled to introduce myself as a passionate and dedicated JavaScript developer. My enthusiasm for coding is matched only by my commitment to excellence in all my projects. I am confident in my ability to work with both NextJS and ReactJS, and I am eager to use my skills to bring your ideas to life."
        openGraph={{
          images: [
            {
              url: "https://www.michich.com/headShot.jpg",
            },
          ],
        }}
      />
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS &&
      (acceptedCookies == "all" || acceptedCookies == "analytics") ? (
        <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
      ) : null}
      <div className="w-screen px-[4%] w-full h-screen mx-auto flex flex-col scrollbar-hide  text-grey ">
        {loading && <Loading />}

        <Header />

        <div className=" relative w-full flex flex-1 h-[calc(100vh_-_112px)]  justify-start  object-contain scrollbar-hide ">
          {!hideBanenr && !loading && (
            <CookiePopUp setAcceptedCookies={setCookiePolicy} />
          )}
          <div className=" xl:flex hidden  w-[40%]">
            <Image
              height={600}
              width={550}
              src="/headShot.jpg"
              alt="main Img"
              className=" w-fit xl:w-full  lg:my-auto object-contain h-full rounded drop-shadow-2xl "
            />
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={router.asPath}
              className="w-full flex-1 overflow-scroll scrollbar-hide"
              style={{
                originX: "0%",
                originY: "50%",
              }}
              initial={{
                x: "-50%",
                rotate: "-100deg",
                opacity: 0,
              }}
              animate={{
                x: 0,
                rotate: "0deg",
                opacity: 1,
              }}
              exit={{
                x: "90%",
                rotate: "100deg",
                opacity: [1, 0.8, 0],
              }}
              transition={{
                duration: 0.3,
                delay: 0.2,
              }}
            >
              <Component {...pageProps} />
            </motion.div>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </>
  );
}

export default MyApp;
