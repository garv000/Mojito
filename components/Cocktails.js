"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import React from 'react'
import { cocktailLists, mockTailLists } from '@/constants'
import Image from 'next/image'

const Cocktails = () => {
    useGSAP(() => {
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top center'
            }
        })
        t1.from('.popular', {
            opacity: 0, xPercent: -100, duration: 1, ease: 'power1.inOut',
        })
        t1.from('.loved', {
            opacity: 0, xPercent: 100, duration: 1, ease: 'power1.inOut',
        }, '-=1')

        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#cocktails',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        parallaxTimeline.from('.c-left-leaf', {
            x: -100, y: 100
        })
            .from('.c-right-leaf', {
                x: 100, y: 100
            })
    })

    return (
        <section id='cocktails' className='relative overflow-hidden min-h-[100vh] w-[100vw] bg-[url(/images/noise.png)]'>
            <div className='text-white h-full flex flex-col md:flex-row md:justify-between md:items-center p-6 sm:p-16 font-sans gap-6'>
                <div className='popular z-1'>
                    <h2 className='text-xl py-4'>Most Popular Cocktails:</h2>
                    <div className='flex flex-col gap-4'>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <div key={name} className='flex justify-between'>
                                <div className="flex flex-col">
                                    <h3 className='font-serif text-lg text-[#e7d393]'>{name}</h3>
                                    <p className='text-sm'>{country} | {detail}</p>
                                </div>
                                <span className='text-lg'>&ndash; {price}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='loved z-1'>
                    <h2 className='text-xl py-4'>Most Loved Mocktails:</h2>
                    <div className='flex flex-col gap-4'>
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <div key={name} className='flex justify-between'>
                                <div className="flex flex-col">
                                    <h3 className='font-serif text-lg text-[#e7d393]'>{name}</h3>
                                    <p className='text-sm'>{country} | {detail}</p>
                                </div>
                                <span className='text-lg'>&ndash; {price}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Image src={'/images/cocktail-left-leaf.png'} width={300} height={300} alt='leaf' className='c-left-leaf z-0 absolute left-0 bottom-0 w-[40vw] max-w-[300px] object-contain'></Image>
            <Image src={'/images/cocktail-right-leaf.png'} width={300} height={300} alt='leaf' className='c-right-leaf z-0 absolute right-0 bottom-0 w-[40vw] max-w-[300px] object-contain'></Image>
        </section>
    )
}

export default Cocktails
