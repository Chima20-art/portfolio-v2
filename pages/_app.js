import Header from '../components/header'
import Footer from '../components/footer'
import Home from '.'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <div className="md:max-w-[92%] mx-auto text-grey h-[100vh]">
            <Header />
            <div className="w-full  flex ">
                <div className=" h-[81vh] min-w-[420px]  bg-[F3EFF0] mr-10 flex justify-center ">
                    <img
                        src="/portrait.jpeg"
                        alt="mainImg"
                        className=" h-[90%] m-auto rounded drop-shadow-2xl "
                    />
                </div>
                <Component {...pageProps} />
            </div>
            <Footer />
        </div>
    )
}

export default MyApp
