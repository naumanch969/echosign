import React, { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const DefaultLayout: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className="flex justify-center overflow-hidden bg-background pb-8 ">

            <div className="xl:max-w-6xl lg:max-w-5xl md:max-w-4xl sm:max-w-3xl w-full relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
                <Navbar />
                <main>
                    <div className="mx-auto max-w-screen-2xl relative">
                        {children}
                    </div>
                </main>
                <div className='relative'>
                    <Footer />
                </div>
            </div>
            
        </div>
    );
};

export default DefaultLayout;
