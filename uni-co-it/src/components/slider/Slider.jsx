import React from 'react';

const Slider = () => {
    return (
        <div className='max-w-6xl sm:mx-auto items-center'>
            <div className='absolute slider  top-36 '>
            <div className='leading-8'>
                <div className='leading-10'>
                <p className='font-bold text-6xl text-[#354F5B]'>
                Softw<span className='text-[#0071BC]'>a</span>re <br /><span className='text-7xl mt-3'>Development</span>
                </p>
                <p>We’ve gathered the best practices to become your reliable IT <br />outsourcing partner. Startups, Microsoft partners, and companies <br /> from the government programs from all over the world trust us to <br /> develop their products.</p>
                </div>
                <button className='bg-[#3FBFEB] px-24 py-4 mt-20 text-white font-bold text-xl rounded-full'>Calculate Project Cost </button>
            </div>
        </div>
        </div>
    );
};

export default Slider;