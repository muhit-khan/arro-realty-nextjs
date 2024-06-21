import React from 'react';
import Image from 'next/image';
import { FaHeart, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';

const PropertyCard = ({ property }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 bg-white">
            <div className="relative">
                <Image
                    className="w-full h-64 object-cover"
                    src={property.imageUrl}
                    alt={property.address}
                    width={400}
                    height={300}
                />
                <div className="absolute top-0 right-0 p-2">
                    <button className="bg-white rounded-full p-2 shadow-md">
                        <FaHeart className="w-6 h-6 text-red-500" />
                    </button>
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900">${property.price}</div>
                <p className="text-gray-700 text-base">{property.address}</p>
            </div>
            <div className="px-6 pt-4 pb-2 flex justify-between text-gray-700">
                <div className="flex items-center">
                    <FaBed className="w-6 h-6 mr-1" />
                    <span>{property.bedrooms} Bedrooms</span>
                </div>
                <div className="flex items-center">
                    <FaBath className="w-6 h-6 mr-1" />
                    <span>{property.bathrooms} Bathrooms</span>
                </div>
                <div className="flex items-center">
                    <FaRulerCombined className="w-6 h-6 mr-" />
                    <span>{property.squareFeet} Sq Ft</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
