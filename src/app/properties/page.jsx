"use client"
import React from 'react';
import { useEffect, useState } from 'react';

const Page = () => {
    const agentId = process.env.NEXT_PUBLIC_AGENT_ID;
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (agentId) {
            console.log(`Fetching listings for agent ID: ${agentId}`); // Debug log
            const fetchListings = async () => {
                try {
                    const response = await fetch(`/api/getListings`);
                    if (!response.ok) {
                        throw new Error('Failed to fetch listings');
                    }
                    const data = await response.json();
                    console.log('Fetched listings data:', data); // Debug log
                    setListings(data);
                } catch (err) {
                    console.error('Error fetching listings:', err); // Debug log
                    setError(err.message);
                } finally {
                    setLoading(false);
                }
            };

            fetchListings();
        }
    }, [agentId]);

    if (loading) {
        return <div className='bg-blue-950 h-full min-h-screen flex flex-col justify-center items-center pt-28'>Loading...</div>;
    }

    if (error) {
        return <div className='bg-blue-950 h-full min-h-screen flex flex-col justify-center items-center pt-28'>Error: {error}</div>;
    }

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

                <h1>Listings for Agent ID: {agentId}</h1>
                {listings.length === 0 ? (
                    <p>No listings found for this agent.</p>
                ) : (
                    <ul>
                        {listings.map((listing) => (
                            <li key={listing.Id}>
                                <h2>{listing.Property.Address.AddressText}</h2>
                                <p>{listing.Property.Price} {listing.Property.PriceCurrency}</p>
                                <p>{listing.Property.Type}</p>
                                <a href={`https://www.realtor.ca/real-estate/${listing.Id}`} target="_blank" rel="noopener noreferrer">
                                    View Listing
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </main>
    );
};

export default Page;
