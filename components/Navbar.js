import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const Navbar = () => {
    return (
        <nav className='flex flex-col gap-4 md:flex-row items-center w-full justify-between z-[99] md:px-16 px-6 py-4 text-white fixed top-0 bg-opacity-10 backdrop-blur-xs'>
            <div className='text-2xl flex gap-4 items-center font-bold hover:text-[#e7d393] transition delay-150 duration-300 ease-in-out font-serif'>
                <Image src={'/images/logo.png'} width={30} height={30} alt='logo'></Image>
                <Link href={'#home'}>Velvet Pour</Link></div>
            <div className='flex flex-wrap justify-center md:gap-12 gap-4'>
                <div className='text-white hover:text-[#e7d393] transition delay-150 duration-300 ease-in-out text-lg font-serif'><Link href={'#cocktails'}>Cocktails</Link></div>
                <div className='text-white hover:text-[#e7d393] transition delay-150 duration-300 ease-in-out text-lg font-serif'><Link href={'#about'}>About Us</Link></div>
                <div className='text-white hover:text-[#e7d393] transition delay-150 duration-300 ease-in-out text-lg font-serif'><Link href={'#art'}>The Art</Link></div>
                <div className='text-white hover:text-[#e7d393] transition delay-150 duration-300 ease-in-out text-lg font-serif'><Link href={'#contact'}>Contact</Link></div>
            </div>
        </nav>
    )
}

export default Navbar
