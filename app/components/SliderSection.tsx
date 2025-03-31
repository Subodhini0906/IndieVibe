"use client"

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const SliderSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Women's Boutique Section */}   
          <Link href="/boutiques/women" className="block">  
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Women&apos;s Boutiques</h2>
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 animate-slide">
                <div className="flex">
                  <div className="min-w-full h-[400px] relative">
                    <Image 
                      src="/women1.avif"
                      alt="Women's Custom Tailoring"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold">Custom Tailoring</h3>
                        <p className="mt-2">Find skilled tailors for your perfect fit</p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-full h-[400px] relative">
                    <Image 
                      src="/women.jpg"
                      alt="Women's Designer Boutiques"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold">Designer Boutiques</h3>
                        <p className="mt-2">Discover local design experts</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href="/boutiques/men" className="block"> 
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">Men&apos;s Boutiques</h2>
            <div className="relative h-[400px] overflow-hidden">
              <div className="absolute inset-0 animate-slide">
                <div className="flex">
                  <div className="min-w-full h-[400px] relative">
                    <Image 
                      src="/men.avif"
                      alt="Men's Suit Specialists"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold">Suit Specialists</h3>
                        <p className="mt-2">Expert tailors for formal wear</p>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-full h-[400px] relative">
                    <Image 
                      src="/men1.avif"
                      alt="Men's Custom Workshops"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                      <div className="p-6 text-white">
                        <h3 className="text-xl font-semibold">Custom Workshops</h3>
                        <p className="mt-2">Find craftsmen for bespoke pieces</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Link>
        </div>
      
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          45% { transform: translateX(0); }
          50% { transform: translateX(-100%); }
          95% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        .animate-slide {
          animation: slide 10s infinite;
        }
      `}</style>
    </section>
  );
};

export default SliderSection;