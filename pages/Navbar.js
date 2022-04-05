import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"
function Navbar() {
    const { data: session } = useSession();
    return (
        <header class="text-gray-600 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link href="/">
                    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                        <img src="ebook.png" height="10px" width="150px" alt="" />
                    </a>
                </Link>
                <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                </nav>
                {session && <button onClick={() => signOut()} class="inline-flex items-center bg-red-700 border-0 py-1 px-3 focus:outline-none text-white hover:bg-blue-800 rounded text-base mt-4 md:mt-0">Sign out
                </button>}
            </div>
        </header>

    )
}

export default Navbar