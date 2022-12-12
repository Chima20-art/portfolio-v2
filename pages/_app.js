import Header from '../components/header'
import Footer from '../components/footer'
import Home from '.'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className="w-[92%] h-screen mx-auto flex flex-col  text-grey ">
            <Header />
            <div className=" flex flex-1 h-[calc(100vh_-_112px)]  gap-4 ">
                <img
                    src="/portrait.jpeg"
                    alt="mainImg"
                    className="w-[420px]   rounded drop-shadow-2xl "
                />

                <div className="  flex-1  overflow-y-scroll	 pl-8 scrollbar-hide	  ">
                    <Component {...pageProps} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyApp
