import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className=''>
      <header className="p-4 navbarr">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex justify-between w-full">
          
            <Link  href="/" aria-label="Back to homepage" className="flex items-center p-2">
            <Image src="/cryptX-logo.png" alt="CryptX Logo" width={100} height={100} className="mr-2" />
              <p className=' font-semibold text-3xl'>CryptX</p>
            </Link>
            <ul className="items-stretch hidden space-x-3 lg:flex">
              <li className="flex justify-between w-full">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Home</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold ">Company</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex  cursor-pointer items-center px-4 -mb-1 font-semibold dark:border-transparent">Services</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Blog</a>
              </li>
              <li className="flex">
                <a rel="noopener noreferrer" className="flex cursor-pointer  items-center px-4 -mb-1 font-semibold dark:border-transparent">Contact</a>
              </li>
            </ul>
          </div>
       
          <button className="p-0 relative left-4 lg:hidden">

            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
              </label>
              <div className='w-32 sm:w-56'>

                {/* <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-yellow-300 rounded-box w-52">
                  <li><a>Homepage</a></li>
                  <li><a>Portfolio</a></li>
                  <li><a>About</a></li>
                </ul> */}
              </div>

            </div>


          </button>
        </div>
      </header>

    </div>
  )
}

export default Navbar
