"use client"
import { X } from "lucide-react";
import Link from "next/link";

function SearchFormReset() {
    const reset=()=>{
        const form=document.querySelector('max-w-3xl w-full min-h-[80px] bg-white border-[5px] border-black rounded-[80px] text-[24px] mt-8 px-5 flex flex-row items-center gap-5') as HTMLFormElement;
        if(form) form.reset();
      }
  return (
    <button type='reset' onClick={reset}>
        <Link href='/' className='size-[50px] rounded-full bg-black flex justify-center items-center !important text-white'>
        <X className="size-5"/>
        </Link>
    </button>
  )
}

export default SearchFormReset