"use client";

import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { BadgePlus, LogOut } from "lucide-react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="px-4 py-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <p className="text-2xl font-extrabold font-serif">IndieVibe</p>
        </Link>

        <div className="flex items-center gap-5 text-black">
          {session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <button 
                onClick={() => signOut({ redirect: true, callbackUrl: "/" })}
                aria-label="Logout" 
                className="flex items-center gap-2 text-red-500"
              >
                <span className="max-sm:hidden">Logout</span>
                <LogOut className="size-6 sm:hidden text-red-500" />
              </button>
            </>
          ) : (
            <button 
              onClick={() => signIn("github")}
              className="mx-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100" 
              aria-label="Login"
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
