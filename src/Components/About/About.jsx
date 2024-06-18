import React from 'react'
import Image from 'next/image';
import portrait from "../../../public/images/user-1.png"

const About = () => {
    return (
        <section className='bg-blue-950'>
            <div className='container mx-auto px-4 pt-20 pb-10'>
                <h2 className='text-4xl font-bold text-center text-amber-500 mb-8'>About us</h2>
                <div className='grid grid-cols-1 gap-4 lg:grid-cols-3'>
                    <div className='relative mb-20 col-span-1'>
                        <Image
                            src={portrait}
                            alt={"Portrait"}
                            placeholder='blur'
                            className="rounded-lg w-3/4 h-full object-cover"
                        />
                        <div className='absolute -bottom-10 left-1/4 bg-black bg-opacity-80 p-4 rounded-lg'>
                            <p className='text-amber-500 text-lg'>&quot;If you love what you are doing, you will be successful.&quot; - Arro Hossain</p>
                        </div>
                    </div>
                    <div className='col-span-2 lg:ml-10 md:ml-10'>
                        <p className='text-center text-lg text-gray-50 text-justify mb-10'>We take pride in our diverse and talented team of real estate agents who are dedicated to serving the Canadian housing market. Each member of our team brings unique insights and a commitment to delivering outstanding results. Get to know the professionals who will work tirelessly to make your real estate dreams a reality.</p>
                        <p className='text-center text-lg text-gray-50 text-justify mb-10'>We take pride in our diverse and talented team of real estate agents who are dedicated to serving the Canadian housing market. Each member of our team brings unique insights and a commitment to delivering outstanding results. Get to know the professionals who will work tirelessly to make your real estate dreams a reality.</p>
                        <p className='text-center text-lg text-gray-50 text-justify mb-10'>We take pride in our diverse and talented team of real estate agents who are dedicated to serving the Canadian housing market. Each member of our team brings unique insights and a commitment to delivering outstanding results. Get to know the professionals who will work tirelessly to make your real estate dreams a reality.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About
