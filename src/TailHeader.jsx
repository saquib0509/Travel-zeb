'use client';

import { useState } from 'react';
import beach from "./image/beach.png";
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid';

const products = [
    { name: 'Packages', description: 'Get a better understanding of your packages', id: 'packages',},
    { name: 'Tours', description: 'Get to know about new places', id: 'tours' },
    { name: 'Hotels', description: 'Book your hotels at the best price', id: 'hotels' },
    { name: 'Trekking', description: 'Trek and have fun like never before', id: 'trekking' },
    { name: 'Bookings', description: 'Know your booking status', id: 'bookings' },
];
const callsToAction = [
    { name: 'Our Videos', href: '#', icon: PlayCircleIcon },
    { name: 'Contact us', href: '#', icon: PhoneIcon },
];

export default function TailHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Function to handle smooth scrolling
    const handleScroll = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className="fixed top-0 w-full bg-white opacity-90">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5" onClick={() => handleScroll('home')}>
                        <span className="sr-only">Travel zeb</span>
                        <img alt="" src={beach} loading="lazy" className="h-8 w-auto" />
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 text-md/6 font-semibold text-gray-900">
                            Product
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>
                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-50 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
                        >
                            <div className="p-4">
                                {products.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                                        onClick={() => handleScroll(item.id)}
                                    >
                                        <div className="flex-auto">
                                            <a className="block font-semibold text-gray-900">
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <a onClick={() => handleScroll('popular')} className="text-md/6 font-semibold text-gray-900 cursor-pointer">
                        Popular
                    </a>
                    <a onClick={() => handleScroll('blogs')} className="text-md/6 font-semibold text-gray-900 cursor-pointer">
                        Blogs
                    </a>
                    <a onClick={() => handleScroll('contact')} className="text-md/6 font-semibold text-gray-900 cursor-pointer">
                        Contact
                    </a>
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a className="text-md font-semibold text-gray-900 cursor-pointer">
                        Profile <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5" onClick={() => handleScroll('home')}>
                            <span className="sr-only">Your Company</span>
                            <img alt="Your Company Logo" src={beach} className="h-8 w-auto" />
                        </a>
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {products.map((item) => (
                                    <a
                                        key={item.name}
                                        className="block rounded-lg py-2 px-3 text-base font-semibold text-gray-900 hover:bg-gray-50"
                                        onClick={() => {
                                            handleScroll(item.id);
                                            setMobileMenuOpen(false);
                                        }}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
