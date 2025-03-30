import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 max-w-6xl">
      <main className="min-h-screen py-16 flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-center">Fashion Boutiques</h1>
        
        <div className="flex flex-wrap justify-center gap-8 w-full">
          <Link href="/womens-boutiques" className="flex-1 min-w-[300px] max-w-[600px] overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline text-black">
            <div className="relative">
              <h2 className="absolute top-0 left-0 w-full bg-white/90 m-0 p-4 text-2xl text-center z-10">Women&apos;s Boutiques</h2>
              <div className="relative w-full h-[400px]">
                <Image 
                  src="/women.jpg" 
                  alt="Women's Boutique" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                  <div>
                    <h3 className="m-0 mb-2 text-2xl">Designer Boutiques</h3>
                    <p className="m-0 text-base">Discover local design experts</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/mens-boutiques" className="flex-1 min-w-[300px] max-w-[600px] overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 no-underline text-black">
            <div className="relative">
              <h2 className="absolute top-0 left-0 w-full bg-white/90 m-0 p-4 text-2xl text-center z-10">Men&apos;s Boutiques</h2>
              <div className="relative w-full h-[400px]">
                <Image 
                  src="/men.avif" 
                  alt="Men's Boutique" 
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4">
                  <div>
                    <h3 className="m-0 mb-2 text-2xl">Custom Workshops</h3>
                    <p className="m-0 text-base">Find craftsmen for bespoke pieces</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </main>
    </div>
  );
}