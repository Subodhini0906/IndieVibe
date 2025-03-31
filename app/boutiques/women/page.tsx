"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Sample data for women's boutiques
const womensBoutiques = [
  {
    id: 1,
    name: "Elegance Atelier",
    description: "Premium custom tailoring for women with a focus on elegant evening wear and business attire.",
    image: "/women1.avif",
    specialty: "Evening Wear & Business Attire",
    location: "Downtown Fashion District",
    rating: 4.8
  },
  {
    id: 2,
    name: "Stitch & Style",
    description: "Contemporary designs with personalized fitting services for the modern woman.",
    image: "/women.jpg",
    specialty: "Contemporary Fashion",
    location: "Westside Shopping Center",
    rating: 4.7
  },
  {
    id: 3,
    name: "Couture Collection",
    description: "High-end custom tailoring with imported fabrics and traditional craftsmanship.",
    image: "/women1.avif",
    specialty: "Luxury Garments",
    location: "Fashion Avenue",
    rating: 4.9
  },
  {
    id: 4,
    name: "Thread & Needle",
    description: "Affordable custom alterations and tailoring with quick turnaround times.",
    image: "/women.jpg",
    specialty: "Alterations & Repairs",
    location: "Central Market District",
    rating: 4.5
  },
  {
    id: 5,
    name: "Fashion Forward",
    description: "Trendy designs and modern silhouettes for the fashion-conscious woman.",
    image: "/women1.avif",
    specialty: "Trendy Designs",
    location: "Innovation Fashion Hub",
    rating: 4.6
  },
  {
    id: 6,
    name: "Heritage Tailors",
    description: "Traditional techniques with a modern twist, specializing in cultural and heritage clothing.",
    image: "/women.jpg",
    specialty: "Cultural & Heritage Wear",
    location: "Historical District",
    rating: 4.8
  }
];

const WomensBoutiquesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <Link href="/" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
            &larr; Back to Home
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Women&apos;s Boutiques</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of premium women&apos;s tailoring boutiques, 
            offering everything from custom designs to expert alterations.
          </p>
        </div>
        
        {/* Boutiques Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {womensBoutiques.map((boutique) => (
            <div 
              key={boutique.id} 
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image 
                  src={boutique.image}
                  alt={boutique.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-xl font-bold text-gray-900">{boutique.name}</h2>
                  <span className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2.5 py-0.5 rounded flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    {boutique.rating}
                  </span>
                </div>
                <p className="text-sm font-medium text-blue-600 mb-2">{boutique.specialty}</p>
                <p className="text-gray-700 mb-4">{boutique.description}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {boutique.location}
                </div>
                <div className="mt-6">
                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomensBoutiquesPage;