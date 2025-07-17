"use client"
import React from 'react'
import Image from 'next/image'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Contact = () => {
    useGSAP(() => {
        const titleSplit = new SplitText('.subtitle3', {
            type: 'words',
        })
        const t1 = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top center'
            }
        })
        t1.from(titleSplit.words, {
            opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.05,
        })

        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 30%',
                end: 'bottom 80%',
                scrub: true,
            }
        })
        parallaxTimeline.from('.co-left-leaf', {
            x: -100, y: 100
        })
        parallaxTimeline.from('.co-right-leaf', {
            x: 100, y: 100
        }, '-=0.6')
    })

    return (
        <div id='contact' className='relative min-h-[100vh] w-[100vw] flex justify-center overflow-hidden'>
            <div className='subtitle3 px-6 md:px-16 pt-16 pb-4 font-sans flex justify-center z-1'>
                <div>
                    <div className='text-white text-4xl md:text-5xl font-serif text-center font-bold'>Where to Find Us</div>
                    <div className='text-white text-lg text-center pt-12'>VISIT OUR BAR</div>
                    <div className='text-white text-2xl text-center pt-2'>456, Raq Blvd. #404, NEW DELHI, CA 90210</div>
                    <div className='text-white text-lg text-center pt-10'>CONTACT US</div>
                    <div className='text-white text-2xl text-center pt-2'>(+91) 9876-5432-10</div>
                    <div className='text-white text-2xl text-center pt-2'>hello@cocktails.com</div>
                    <div className='text-white text-lg text-center pt-10'>OPEN EVERYDAY</div>
                    <div className='text-white text-2xl text-center pt-2'>Mon-Fri : 11:00am - 12am</div>
                    <div className='text-white text-2xl text-center'>Sat : 9:00am - 2am</div>
                    <div className='text-white text-2xl text-center'>Sun : 9:00am - 1am</div>
                    <div className='text-white text-lg text-center pt-4'>SOCIALS</div>
                    <div className='flex justify-center items-center gap-4 pt-2'>
                        <Image src={'/images/insta.png'} width={30} height={30} alt='insta'></Image>
                        <Image src={'/images/x.png'} width={30} height={30} alt='x'></Image>
                        <Image src={'/images/fb.png'} width={30} height={30} alt='fb'></Image>
                    </div>
                </div>
            </div>
            <Image src={'/images/cocktail-left-leaf.png'} width={300} height={300} alt='leaf' className='co-left-leaf absolute left-0 bottom-0 z-0 w-[40vw] max-w-[300px] object-contain'></Image>
            <Image src={'/images/cocktail-right-leaf.png'} width={300} height={300} alt='leaf' className='co-right-leaf absolute right-0 bottom-0 z-0 w-[40vw] max-w-[300px] object-contain'></Image>
        </div>
    )
}

export default Contact
