//import Image from "next/image";

import SearchForm from "../components/SearchForm";

export default function Home() {
  return (
    <>
    <section className="w-full bg-indigo-100 min-h-[330px] flex justify-center items-center flex-col py-10 px-6">
      <h1 className="w-full flex justify-center items-center bg-black text-white text-center py-5 text-3xl font-extrabold">
        Dress with grace, 
        <br/>
        lead the race.
      </h1>
      <p className="font-medium mt-6 text-3xl text-black max-w-2xl text-center break-words">
        Elevate Your Wardrobe, Elevate Your Career
      </p>
      <SearchForm/>
    </section>
    </>
  );
}

