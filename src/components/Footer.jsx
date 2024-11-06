import React from 'react'
import beach from '../image/beach.png'

export const Footer = () => {

    const scrollToSection = (id) => {

        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    return (
        <>
            <footer className="text-gray-600 body-font mx-10">
                <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left md:mt-0 mt-10">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <img 
        src={require('../image/beach.png')}
        alt="TravelBee Logo" 
        className="w-10 h-10 text-white p-2 rounded-full"
    />
    <span className="ml-3 text-xl">TravelBee</span>
</a>

                        <p className="mt-2 text-sm text-gray-500">Travel the world with most affordable prices</p>
                    </div>
                    <div className="flex-grow flex flex-wrap md:pr-20 -mb-10 md:text-left text-center order-first">
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">COUNTRIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Argentina</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Bali</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Dubai</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">India</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CATEGORIES</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Beaches</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Mountains</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Monuments</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">Trekking</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">Contact us</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">977-1234-567</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">saquib@gmail.com</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">info@travelzeb.com</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800">New Delhi, India</a>
                                </li>
                            </nav>
                        </div>
                        <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">LINKS</h2>
                            <nav className="list-none mb-10">
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800 " onClick={() => scrollToSection('home')} >Home</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" onClick={() => scrollToSection('popular')}>Popular</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" onClick={() => scrollToSection('popular')}>Suggested</a>
                                </li>
                                <li>
                                    <a className="text-gray-600 hover:text-gray-800" onClick={() => scrollToSection('blogs')}>Blogs</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-100">
                    <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p className="text-gray-500 text-sm text-center sm:text-left">© 2022 TravelBee
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@Visitcountries</a>
                        </p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a className="text-gray-500" href="https://www.facebook.com">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" href="https://www.x.com">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" href="https://www.instagram.com">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a className="ml-3 text-gray-500" href="https://www.linkedin.com/in/saquib09/">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" className="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
