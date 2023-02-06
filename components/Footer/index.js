import Link from 'next/link'
import React from 'react'
import { footerLinks } from '@/src/footerLinks'
import Image from 'next/image'



const Footer = () => {
    const sectionStyle = {
        backgroundImage: "url('/gradient.jpeg')",
        backgroundSize: "cover",
    }
    return (
        <footer style={sectionStyle} className="min-h-[500px] bg-left-bottom py-10 md:py-20 px-2">
            <div className='container mx-auto'>
                {/* Top section */}
                <div className='text-white md:flex md:flex-col justify-center items-center px-4'>
                    <h3 className='text-4xl font-medium my-3'>Let's get started on something great</h3>
                    <p className='font-medium my-4 md:my-1'>Join over 4,000+ startups already growing with Untitled.</p>
                    <Link href="/" className='font-light my-4 border px-3 py-1 rounded-full transition-colors hover:bg-white hover:text-zinc-900'>Start your 7-day free trial</Link>
                </div>
                {/* middle section */}
                <div>
                    {/* 6 col grid */}
                    <div className='grid grid-cols-2 text-center md:text-left md:grid-cols-6 gap-4 text-white font-light my-14'>
                        {footerLinks.map((category) => {
                            return (
                                <div className="category" key={`footer-category-${category.category}`}>
                                    <p className='uppercase font-medium text-sm mb-2'>{category.category}</p>
                                    <ul>
                                        {category.links.map((link, idx) => {
                                            return (
                                                <Link href="#" key={`footer-link-${idx}`} className="link--hover">
                                                    <li className='mb-2'>{link.link}</li>
                                                </Link>
                                            )
                                        })}
                                    </ul>
                                </div>
                            )
                        })}
                    </div>
                </div>
                {/* Bottom section */}
                <div className='md:flex items-center justify-between text-white'>
                    <a href="/" className="flex items-center mb-4 md:mb-0">
                        <Image
                            src="/logo.svg"
                            alt="Custom logo"
                            className="logo invert"
                            width={150}
                            height={24}
                            priority
                        />
                    </a>
                    <p>&copy; 2023 Nathan Ramsdell. All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer