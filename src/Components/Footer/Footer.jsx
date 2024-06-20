import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/logo.png';
import { RiFacebookFill, RiInstagramFill, RiYoutubeFill, RiTwitterFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='w-full bg-black'>
            <div className='footer container mx-auto flex flex-col md:flex-row items-center justify-between p-6 text-white'>
                <div className='footer-col-1 flex flex-col items-start p-4'>
                    <Image src={logo} alt="logo" className='logo w-32 h-auto' />
                    <ul className='mt-4'>
                        <li className='flex items-center mb-2'>Phone: +1234567890</li>
                        <li className='flex items-center mb-2'>Email: arro.h@realtor.ca</li>
                        <li className='flex items-center mb-2'>Address: 1234 Street, City, US</li>
                    </ul>
                </div>
                <div className='footer-col-2 flex flex-col items-start p-4'>
                    <h3 className='text-lg text-amber-500 font-semibold mb-2'>Quick Links</h3>
                    <ul>
                        <li className='hover:text-amber-500 active:text-amber-600 mb-2'><Link href='/'>Home</Link></li>
                        <li className='hover:text-amber-500 active:text-amber-600 mb-2'><Link href='/about'>About</Link></li>
                        <li className='hover:text-amber-500 active:text-amber-600 mb-2'><Link href='/service'>Service</Link></li>
                        <li className='hover:text-amber-500 active:text-amber-600 mb-2'><Link href='/contact'>Contact</Link></li>
                        <li className='hover:text-amber-500 active:text-amber-600 mb-2'><Link href='/properties'>Find Properties</Link></li>
                    </ul>
                </div>
                <div className='footer-col-3 flex flex-col items-start p-4'>
                    <h3 className='text-lg text-amber-500 font-semibold mb-2'>Follow Me</h3>
                    <ul>
                        <li className='flex hover:text-amber-500 active:text-amber-600 items-center mb-2'><RiFacebookFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Facebook</Link></li>
                        <li className='flex hover:text-amber-500 active:text-amber-600 items-center mb-2'><RiInstagramFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Instagram</Link></li>
                        <li className='flex hover:text-amber-500 active:text-amber-600 items-center mb-2'><RiYoutubeFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Youtube</Link></li>
                        <li className='flex hover:text-amber-500 active:text-amber-600 items-center mb-2'><RiTwitterFill /> <Link href='https://linkedin.com/in/muhit-khan' className='ml-2' target="_blank">Twitter</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
