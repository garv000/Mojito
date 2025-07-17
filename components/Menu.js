'use client'
import React from 'react'
import Image from 'next/image'
import { allCocktails } from '@/constants'
import { useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';

const Menu = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const totalCocktails = allCocktails.length;
    const goToSlide = (index) => {
        const newIndex = (index + totalCocktails) % totalCocktails;
        setCurrentIndex(newIndex);
    }
    const getCocktailAt = (indexOffset) => {
        return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

    useGSAP(() => {
        gsap.fromTo('.name', { opacity: 0 }, { opacity: 1, duration: 1 });
        gsap.fromTo('.cocktailimg', { opacity: 0, xPercent: -100 }, {
            xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
        })
        gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
        gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
            yPercent: 0, opacity: 100, ease: 'power1.inOut'
        })
    }, [currentIndex]);

    return (
        <div id='menu'>
            <div className='w-[100vw] font-sans p-6 md:p-16 overflow-hidden'>
                <div className='flex justify-between lg:px-16'>
                    {allCocktails.map(({ name, id }) => (
                        <button onClick={() => goToSlide(id - 1)} key={id} className='flex flex-col gap-2 text-white opacity-60'>
                            <div className='text-lg md:text-2xl font-serif font-bold'>{name}</div>
                            <hr />
                        </button>
                    ))}
                </div>

                <div className='flex justify-between items-center lg:items-start md:pt-20 pt-8'>
                    <div className='flex flex-col gap-2'>
                        <div className='text-lg md:text-2xl font-serif font-bold text-[#e7d393] w-30'>{prevCocktail.name}</div>
                        <button onClick={() => goToSlide(currentIndex - 1)}><Image src={'/images/right-arrow.png'} width={40} height={40} alt='left arrow'></Image></button>
                    </div>
                    <div className=''>
                        <Image src={currentCocktail.image} width={400} height={400} alt='drink' className='cocktailimg'></Image>
                    </div>
                    <div className='flex flex-col gap-2 items-end'>
                        <div className='text-lg md:text-2xl font-serif font-bold text-[#e7d393] w-20'>{nextCocktail.name}</div>
                        <button onClick={() => goToSlide(currentIndex + 1)}><Image src={'/images/left-arrow.png'} width={40} height={40} alt='left arrow'></Image></button>
                    </div>
                </div>
                <div className='flex flex-col gap-6 sm:flex-row justify-between mt-8 lg:-mt-40'>
                    <div className='name flex flex-col gap-2'>
                        <div className='text-lg text-white'>Recipe for:</div>
                        <div className='name text-3xl md:text-4xl lg:text-6xl font-serif font-bold text-[#e7d393] sm:w-30'>{currentCocktail.name}</div>
                    </div>
                    <div className='details flex flex-col gap-2 md:-mt-4'>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-white sm:w-100 lg:w-122'>{currentCocktail.title}</h2>
                        <p className='md:text-lg text-white sm:w-100 lg:w-120'>{currentCocktail.description}</p>
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default Menu
