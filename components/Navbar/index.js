import Image from 'next/image'
import React, { useState } from 'react'

const navigationLinks = [
    {
        url: "/",
        text: "Home"
    },
    {
        url: "https://docs.nathanramsdell.com/blog",
        text: "About",
        newTab: true
    },
    {
        url: "/",
        text: "Services"
    },
    {
        url: "https://www.linkedin.com/in/nathan-ramsdell/",
        text: "Contact",
        newTab: true
    },
]

const Navbar = () => {
    const [navbarIsShown, setNavbarIsShown] = useState(false)

    return (
        <nav className="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600" id="navbar">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="/" className="flex items-center">
                    <Image
                        src="/logo.svg"
                        alt="Custom logo"
                        className="logo"
                        width={150}
                        height={24}
                        priority
                    />
                </a>
                <div className="flex md:order-2">
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    <button onClick={() => setNavbarIsShown(!navbarIsShown)} data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${navbarIsShown ? '' : 'hidden'} transition-colors`} id="navbar-sticky">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        {navigationLinks.map((link, idx) => {
                            return (
                                <li key={`link-${idx}`}>
                                    <a href={link.url} target={link.newTab ? '_blank' : ''} className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{link.text}</a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar