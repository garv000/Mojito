"use client"
import React from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);


const About = () => {
    useGSAP(() => {
        const titleSplit = new SplitText('.subtitle2', {
            type: 'words'
        })
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#about',
                start: 'top center'
            }
        })
        t1.from(titleSplit.words, {
            opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02,
        })
        t1.from('.top-grid div, .bottom-grid div', {
            opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
        }, '-=0.8')
    })

    return (
        <div id='about'>
            <div className='w-[100vw] bg-black p-10 lg:p-14 pt-24 font-sans'>

                <div className='flex md:justify-between flex-col md:flex-row'>
                    <div className='flex flex-col'>
                        <div className='bg-white p-2 w-[10rem] rounded-3xl text-center font-semibold'>Best Cocktails</div>
                        <h2 className='subtitle2 text-3xl md:text-4xl lg:text-5xl pt-6 font-serif font-bold text-white lg:w-138 sm:w-92 leading-10 md:leading-12 lg:leading-16'>Where every details matters -from muddle to garnish</h2>
                    </div>
                    <div className='flex flex-col'>
                        <div className='subtitle2 text-white lg:text-xl sm:w-90 lg:w-100'>Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.</div>
                        <div className='flex pt-2'>
                            <Image src={'/images/star3.jpeg'} width={40} height={40} alt='star'></Image>
                            <Image src={'/images/star3.jpeg'} width={40} height={40} alt='star'></Image>
                            <Image src={'/images/star3.jpeg'} width={40} height={40} alt='star'></Image>
                            <Image src={'/images/star3.jpeg'} width={40} height={40} alt='star'></Image>
                            <Image src={'/images/star3.jpeg'} width={40} height={40} alt='star'></Image>
                        </div>
                        <div className='pt-4 flex items-baseline gap-1'>
                            <span className='subtitle2 text-6xl text-[#e7d393] font-bold tracking-tight'>4.5</span>
                            <span className='subtitle2 text-white font-bold text-4xl'>/5</span>
                        </div>
                        <div className='subtitle2 text-white font-sans pt-2'>More than +12000 customers</div>
                    </div>
                </div>

                <div className='top-grid flex flex-col sm:flex-row pt-10 gap-4'>
                    <div className='rounded-2xl'>
                        <Image src={'/images/abt1.png'} width={405} height={300} alt='about' className='rounded-2xl w-full sm:w-116'></Image>
                    </div>
                    <div className='rounded-2xl'>
                        <Image src={'/images/abt2.png'} width={715} height={300} alt='about' className='rounded-2xl w-full sm:w-204'></Image>
                    </div>
                    <div className='rounded-2xl'>
                        <Image src={'/images/abt5.png'} width={350} height={300} alt='about' className='rounded-2xl w-full sm:w-100'></Image>
                    </div>
                </div>
                <div className='bottom-grid flex flex-col sm:flex-row pt-4 gap-4'>
                    <div className='rounded-2xl'>
                        <Image src={'/images/abt3.png'} width={805} height={300} alt='about' className='rounded-2xl w-full sm:w-200'></Image>
                    </div>
                    <div className='rounded-2xl'>
                        <Image src={'/images/abt2.png'} width={600} height={300} alt='about' className='rounded-2xl w-full sm:w-150'></Image>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About
