import {recording} from '@/assets'
import {selfie} from '@/assets'
import {video} from '@/assets'

const Home = () => {

    ///////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////

    return (
        <div className="flex flex-col w-full bg-gradient-to-b from-blue-500 to-white">

            <div>
                <div className='ml-8 mt-20 mb-32 text-7xl text-green-300 font-bold text-center'>
                    <h1 className="pb-3">Amplifying Voice,</h1>
                    <h1>Embracing Power of Signs</h1>
                </div>
            </div>
{/*
            <div className="flex justify-center mt-20">
                <div className="max-w-sm border border-black bg-green-300 hover:bg-green-400 rounded-lg p-6 transition duration-300 transform hover:scale-105">
                    <h1 className="text-center text-white text-3xl font-bold mb-4 underline">Vision</h1>
                    <p className="text-center text-white text-lg">
                        Our vision at EchoSign is to empower seamless communication by bridging spoken language with sign language. We strive to celebrate diversity, amplify silent voices, and foster inclusive connections that transcend linguistic barriers, enabling everyone to express themselves freely and be understood.
                    </p>
                </div>
            </div>

            <div className="flex justify-center mt-20">
                <div className="max-w-sm border border-black bg-green-300 hover:bg-green-400 rounded-lg p-6 transition duration-300 transform hover:scale-105">
                    <h1 className="text-center text-white text-3xl font-bold mb-4 underline">Mission</h1>
                    <p className="text-center text-white text-lg">
                        At EchoSign, we're on a mission to bridge communication gaps, empower inclusion, and ensure everyone's voice is heard.
                    </p>
                </div>
            </div>
    */}
            


                <div className="flex justify-between mb-32 ml-56 mr-56 mt-20">
                    <div className="text-left text-black text-3xl font-bold mb-4 max-w-md">
                        <h1>Empowering communication.</h1>
                        <p className="pb-3 pt-3">Bridging languages.</p>
                        <p>Fostering inclusion.</p>
                    </div>
                    <div className="text-right text-black text-sm font-bold mt-2 mb-4 max-w-md">
                        <h1>AI has the potential to gently nudge aside communication barriers between sign language and spoken language. Imagine conversations flowing effortlessly, with spoken words finding a graceful expression in signs and vice versa. This wouldn't just bridge the language gap, but could foster a deeper understanding between deaf and hearing communities.</h1>
                    </div>
                    
                </div>

                <div className="flex justify-center">
                    <h1 className='text-center font-extrabold text-5xl mb-12 w-3/5 pb-12 pt-12'>Hear your Signs through simple steps.</h1>
                </div>

                <div className="flex justify-between items-center mb-20 px-16 py-4 w-full">
                    
                    <div className="relative ml-36">
                        <img src={video} alt="Image" className="ml-8 w-36 z-10 pb-4" />
                        <div className="text-center">
                            <h1 className="font-bold">Start Camera</h1>
                            <p className="text-xs pb-24">Click the camera icon to start camera.</p>
                        </div>
                    </div>
                    <div className="relative">
                        <img src={selfie} alt="Image" className="ml-4 w-20 z-10 pb-2" />
                        <div className="text-center">
                            <h1 className="font-bold">Start Recording</h1>
                            <p className="text-xs pb-24">Record the signs.</p>
                        </div>
                    </div>
                    <div className="relative mr-36">
                        <img src={recording} alt="Image" className="ml-8 w-24 z-10 pb-4" />
                        <div className="text-center">
                            <h1 className="font-bold">Play Audio</h1>
                            <p className="text-xs pb-24">Click audio button to listen.</p>
                        </div>
                    </div>
                    
                </div>


        </div>
     
    )
}

export default Home