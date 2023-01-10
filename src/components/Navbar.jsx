import React from 'react'
import logo from "../img/logo.jpg"
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className="bg-white">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="https://flowbite.com/" className="flex items-center">
                        <img src={logo} className="h-6 mr-3 sm:h-9" alt="Logo" />
                    </a>
                    <div className="flex md:order-2">
                        <button type="button" className="lg:display:none text-white bg-#9D0AFF hover:bg-#9D0AFF focus:ring-4 focus:outline-none focus:#9D0AFF font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ backgroundColor: "#9D0AFF", marginRight: "12px" }}>Get started</button>
                        <button type="button" className="lg:display:none text-white bg-#9D0AFF hover:bg-#9D0AFF focus:ring-4 focus:outline-none focus:#9D0AFF font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" style={{ backgroundColor: "#9D0AFF" }}>Get started</button>
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-black-700 rounded hover:bg-black-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-black-400 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">About</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-black-700 rounded hover:bg-black-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-black-400 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">Blog</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-black-700 rounded hover:bg-black-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-black-400 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">Pricing</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-black-700 rounded hover:bg-black-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-black-400 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">Careers</Link>
                            </li>
                            <li>
                                <Link href="#" className="block py-2 pl-3 pr-4 text-black-700 rounded hover:bg-black-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-black-400 dark:hover:bg-black-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-black-700">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar