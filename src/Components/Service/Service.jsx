import React from 'react';
import Image from 'next/image';
import style from './Service.module.css';

import img1 from '../../../public/images/service-1.jpg';
import img2 from '../../../public/images/service-2.jpg';
import img3 from '../../../public/images/service-3.webp';
import img4 from '../../../public/images/service-4.jpg';

const services = [
    {
        id: 1,
        image: img1,
        title: 'Residential Real Estate',
        description: 'Our residential real estate services help you find the perfect home for your family. From luxury estates to cozy starter homes, we offer a wide range of properties to meet your needs. Our team is dedicated to making your home-buying experience seamless and stress-free.',
    },
    {
        id: 2,
        image: img2,
        title: 'Commercial Real Estate',
        description: 'Our commercial real estate services are designed to help businesses find the ideal property for their operations. Whether you are looking for office space, retail locations, or industrial facilities, we provide expert guidance and a comprehensive selection of properties.',
    },
    {
        id: 3,
        image: img3,
        title: 'Property Management',
        description: 'We offer comprehensive property management services to take the hassle out of owning rental properties. From tenant screening and rent collection to maintenance and repairs, our experienced team ensures your property is well-managed and profitable.',
    },
    {
        id: 4,
        image: img4,
        title: 'Real Estate Investment',
        description: 'Our real estate investment services provide valuable insights and opportunities for investors looking to grow their portfolios. We offer expert advice on market trends, property valuation, and investment strategies to help you make informed decisions and maximize returns.',
    },
];

const Service = () => {
    return (
        <section className={style.service}>
            <div className="container mx-auto px-4 py-10">
                <h2 className='text-4xl font-bold text-center text-amber-500 mb-8'>Our services</h2>
                <p className="text-center text-lg text-gray-50 mb-10">We offer a wide range of real estate services to meet your needs. Whether you are buying, selling, or investing in property, our experienced team is here to help you every step of the way.</p>
                <div className="flex flex-wrap my-10 justify-center gap-8">
                    {services.map(service => (
                        <div key={service.id} className="relative w-80 h-96 bg-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105">
                            <Image
                                src={service.image}
                                alt={`Service Image ${service.id}`}
                                layout="fill"
                                objectFit="cover"
                                className="rounded-lg"
                                placeholder='blur'
                            />
                            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 hover:bg-opacity-80 text-white p-4 transition-all duration-300 transform ">
                                <h3 className="text-xl font-semibold text-amber-500 ">{service.title}</h3>
                                <p className="mt-2 line-clamp-2 hover:line-clamp-none">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Service;