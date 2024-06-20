"use client"
import React from 'react';

const Page = () => {
    return (
        <main className='bg-blue-950 h-full min-h-screen flex flex-col justify-center items-center pt-28'>
            <div className='container mt-10 mb-20'>
                <h2 className='text-4xl font-bold text-center text-amber-500 mb-8'>Find your Favorite Properties with Arro H.</h2>
                <p className="text-center text-lg text-gray-50 mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui fuga asperiores sunt, dignissimos omnis amet fugit sequi quia? Illo animi recusandae cumque amet, sunt doloremque nobis nam ducimus corrupti ex!
                </p>
            </div>

            <div className='container'>
                <h3 className='text-3xl font-bold text-center text-amber-500 mb-8'>Listed Properties</h3>
                {/* Fetch and display the properties here */}
            </div>
        </main>
    );
}

export default Page;
