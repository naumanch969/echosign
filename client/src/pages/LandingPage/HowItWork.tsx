import { recording, selfie, video } from '@/assets'
import { Button } from '@/components/ui/button'
import React from 'react'

const HowItWork = () => {

    ///////////////////////////////////////////////////////// VARIABLES ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////// STATES ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////// USE EFFECTS ///////////////////////////////////////////////////////////

    ///////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////// FUNCTIONS ///////////////////////////////////////////////////////////
    const CircularNumber = ({ num }: { num: number }) => {
        return (
            <span className='text-white p-2 rounded-full border border-white w-4 h-4 flex justify-center items-center' >{num}</span>
        )
    }

    return (
        <div className="min-h-screen flex flex-col justify-start items-center py-32 ">
            <div className="flex flex-col justify-center items-center w-full h-fit  ">
                <h2 className="text-5xl font-bold text-foreground ">Hear your Signs through simple steps</h2>
                <span className=' px-32 mt-6 text-center ' >Follow these simple steps to seamlessly translate your ASL gestures into clear and concise audio.</span>
            </div>
            <div className="flex justify-center gap-12 mt-20 w-full ">

                <div className="bg-primary/5 rounded-md p-4 flex flex-col justify-center items-center gap-4 w-80 relative">
                    <img src={video} alt="Image" className="w-56 h-72 " />
                    <div className="flex flex-col items-center ">
                        <h1 className="font-bold text-2xl ">Start Camera</h1>
                        <p className="text-base">Click the camera icon to start camera.</p>
                        <Button className='mt-3 space-x-2 ' ><CircularNumber num={1} /> <span>Enable Camera</span></Button>
                    </div>
                </div>
                <div className="bg-primary/5 rounded-md p-4 flex flex-col justify-center items-center gap-4 w-80 relative">
                    <img src={selfie} alt="Image" className="w-56 h-72 " />
                    <div className="flex flex-col items-center ">
                        <h1 className="font-bold text-2xl ">Start Recording</h1>
                        <p className="text-base">Record the signs.</p>
                        <Button disabled={true} className='mt-3 space-x-2 ' ><CircularNumber num={2} /> <span>Start Recording</span></Button>
                    </div>
                </div>
                <div className="bg-primary/5 rounded-md p-4 flex flex-col justify-center items-center gap-4 w-80 relative">
                    <img src={recording} alt="Image" className="w-56 h-72 " />
                    <div className="flex flex-col items-center ">
                        <h1 className="font-bold text-2xl ">Play Audio</h1>
                        <p className="text-base">Click audio button to listen.</p>
                        <Button disabled={true} className='mt-3 space-x-2 ' ><CircularNumber num={3} /> <span>Play Audio</span></Button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default HowItWork