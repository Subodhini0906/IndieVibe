import Link from "next/link";
import Image from "next/image";
import  {getServerSession } from "next-auth"; // Import directly from next-auth instead
import { signOut, signIn } from "../../auth"; // Keep these from your auth.ts
import { BadgePlus, LogOut } from "lucide-react";


const Navbar = async () => {
  const session = await getServerSession(); // Ensure that this works correctly
  return (
    <header className="px-4 py-5 bg-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image
            src="/logo1.jpg"
            alt="logo"
            width={40}
            height={50}
            style={{ objectFit: 'contain' }}
            priority
          />
        </Link>

        <div className="flex items-center gap-5 text-black">
         {session?.user ? (
            <>
              <Link href="/startup/create">
                <span className="max-sm:hidden">Create</span>
                <BadgePlus className="size-6 sm:hidden" />
              </Link>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button type="submit" aria-label="Logout" className="flex items-center gap-2 text-red-500">
                  <span className="max-sm:hidden">Logout</span>
                  <LogOut className="size-6 sm:hidden text-red-500" />
                </button>
              </form>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit" className="mx-4 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100" aria-label="Login">
                Login
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
