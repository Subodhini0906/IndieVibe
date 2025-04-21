"use client"
import SearchForm from "../components/SearchForm";
import Image from "next/image";
import SliderSection from "../components/SliderSection";
export default function Page() {
  return (
    <>
    <section className="relative w-full min-h-[330px] flex justify-center items-center flex-col py-10 px-6">
      <Image 
        src="/bg.png"
        alt="Background"
        fill
        className="absolute inset-0 z-0 object-cover"
        priority
      />
      <div className="relative z-20 w-full flex flex-col items-center">
        <div className="w-full bg-white text-black text-center py-5 text-4xl font-extrabold">
          Dress with grace, 
          <br/>
          lead the race.
        </div>
      <SearchForm/>
      </div>
    </section>
    <section className="px-6 py-10 max-w-7xl mx-auto">
      <SliderSection/>
    </section>
    </>
  );
}

