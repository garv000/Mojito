"use client"
import React from 'react'
import { useRef } from 'react'
import Image from 'next/image'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitText from "gsap/SplitText";
import { useMediaQuery } from "react-responsive";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

const Hero = () => {
    const videoRef = useRef(null)
    const containerRef = useRef(null);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const heroSplit = new SplitText(".subtitle", { type: "lines" });
        gsap.from(heroSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 2,
            ease: "expo.out",
            stagger: 0.05,
            delay: 0.8,
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
                start: "top top",
                end: "bottom top",
                scrub: 1.5,
            },
        })
            .to(".right-leaf", { y: 200 }, 0)
            .to(".left-leaf", { y: -200 }, 0)

        const startValue = isMobile ? "bottom bottom" : "bottom bottom"
        const endValue = isMobile ? "bottom bottom" : "bottom bottom"
        const video = videoRef.current
        gsap.to(video, {
            currentTime: 12.98,
            scrollTrigger: {
                trigger: "video",
                endTrigger: "#cocktails",
                start: startValue,
                end: endValue, // adjust scroll distance
                scrub: 1.5,
                pin: true,
            }
        });
    })

    return (
        <div ref={containerRef} className='max-h-[100vh] h-[100vh] pb-10 sm:pb-0 w-[100vw] text-white bg-black overflow-hidden font-sans'>

            <div id='hero' className='relative z-1'>
                <Image src={'/images/hero-left-leaf.png'} width={250} height={200} alt='leaf' className='left-leaf absolute left-0 md:top-52 top-72 z-0 w-[30vw] max-w-[300px]'></Image>
                <div className='title text-7xl sm:text-[8rem] md:text-[10rem] lg:text-[12rem] bg-gradient-to-b from-white to-white/40 text-transparent bg-clip-text text-center font-serif md:pt-16 pt-20 pb-6 md:py-16 font-bold sm:mt-12 mt-20'>MOJITO</div>
                <Image src={'/images/hero-right-leaf.png'} width={200} height={200} alt='leaf' className='right-leaf absolute right-0 top-0 z-0 w-[30vw] max-w-[300px]'></Image>
            </div>

            <div className='body'>
                <div className="content flex md:flex-row flex-col-reverse md:justify-between justify-center md:p-16 px-16">
                    <div className="md:space-y-5 space-y-0.5 z-1 md:w-96 text-center md:text-start">
                        <p className='text-lg subtitle md:pt-0 pt-6'>Cool. Crisp. Classic.</p>
                        <p className="subtitle text-4xl lg:text-5xl font-serif font-bold text-[#e7d393]">
                            Sip the Spirit <br /> of Summer
                        </p>
                    </div>

                    <div className="view-cocktails flex flex-col md:items-start items-center w-full md:w-80 lg:text-xl z-1">
                        <p className="subtitle z-1 pb-4 text-center md:text-start">
                            Every cocktail on our menu is a blend of premium ingredients,
                            creative flair, and timeless recipes &ndash; designed to delight your
                            senses.
                        </p>
                        <a href="#cocktails" className='text-[#e7d393] subtitle'>View cocktails</a>
                    </div>
                </div>
            </div>

            <div className="video flex justify-center">
                <video
                    ref={videoRef}
                    muted
                    playsInline
                    preload="auto"
                    src="/videos/output.mp4"
                    className='absolute bottom-0 w-[100vw] md:w-[70vw]'
                />
            </div>

        </div>
    )
}

export default Hero
