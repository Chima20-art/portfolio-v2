import Header from '../components/header'
import Footer from '../components/footer'
import Home from '.'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className="w-[92%] mx-auto flex flex-col  text-grey h-screen">
            <Header />
            <div className=" flex  ">
                <div className=" h-[81vh] min-w-[420px]  mr-10 flex justify-center ">
                    <img
                        src="/portrait.jpeg"
                        alt="mainImg"
                        className=" h-[90%] m-auto rounded drop-shadow-2xl "
                    />
                </div>
                <div className="flex-1 ">
                    <Component {...pageProps} />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyApp
