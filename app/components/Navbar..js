"use client"
import React from 'react'
import { useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import "../globals.css";
import Link from 'next/link';
const Navbar = () => {

  const { data: session } = useSession()
  const [showdropdown, setshowdropdown] = useState(false)
  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   )
  // }

  return (

    <nav className="bg-gray-900 text-white flex justify-between px-4 h-16 items-center">
      <Link href={'/'} className="logo font-bold text-lg flex justify-center items-center">
        <img src="dosa.png" className='dosa' width={44} alt="" />
        <span>GetMeaDosa</span></Link>
      {/* <ul className='flex justify-between gap-4'>
        <li>Home</li>
        <li>About</li>
        <li>Projects</li>
        <li>Sign Up</li>
        <li>Login</li>
      </ul> */}
      <div className="relative">

        {session && (
          <>
            <button
              onBlur={()=>setTimeout(() => {
                setshowdropdown(false)
              }, 300)}
              onClick={() => setshowdropdown(!showdropdown)}
              id="dropdownDefaultButton"
              className=" mx-4 inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              Welcome {session.user.email}

              <svg
                className="w-4 h-4 ms-1.5 -me-0.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 ${showdropdown ? "" : "hidden"
                } left-[100px] absolute right-4 top-full mt-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg w-44`}
            >
              <ul
                className="p-2 text-sm text-gray-200 font-medium"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <Link
                    href="/profile"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-white rounded"
                  >
                    Profile
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-white rounded"
                  >
                    Settings
                  </Link>
                </li>

                <li>
                  <Link
                    href="#"
                    className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-white rounded"
                  >
                    Earnings
                  </Link>
                </li>

                <li>
                  <Link
                    href="#" onClick={() => signOut()}
                    className="inline-flex items-center w-full p-2 hover:bg-gray-700 hover:text-white rounded"
                  >
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}

        

        {session && (
          <button
            type="button"
            className="me-2 mb-2 rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-4 py-2.5"
            onClick={() => signOut()}
          >
            Logout
          </button>
        )}

        {!session && (
          <Link href="/login">
            <button
              type="button"
              className="me-2 mb-2 rounded-lg text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium text-sm px-4 py-2.5"
            >
              Login
            </button>
          </Link>
        )}

      </div>
    </nav>
  )
}

export default Navbar
