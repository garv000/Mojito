"use client"
import React from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { featureLists, goodLists } from '@/constants';

const Art = () => {
  useGSAP(() => {
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '#art',
        start: 'top top',
        end: '+=600',
        pin: true,
        scrub: true,
      }
    })
    t1.to('.fade', {
      opacity: 0, ease: 'power1.inOut',
    })
    t1.to('.hide', {
      opacity: 0, ease: 'power1.inOut', display: 'none',
    })
    t1.to('.unmask', {
      scale: 1, ease: 'power1.inOut', maskPosition: 'center', maskSize: '400%', duration: 1,
    })
    t1.to('.unfade', {
      opacity: 1, duration: 1, ease: 'power1.inOut',
    })
  })

  return (
    <div id='art'>
      <div className='w-[100vw] bg-black p-6 lg:p-16 pt-24 font-sans'>
        <div className='fade lg:text-[12rem] md:text-[10rem] sm:text-9xl text-7xl text-white/30 font-bold text-center font-serif sm:tracking-wider tracking-wide'>The  Art</div>

        <div className='overflow-hidden rounded-4xl flex justify-center md:-mt-40'>
          <Image src={'/images/under-img.jpg'} width={800} height={400} alt='underimage' className='unmask rounded-4xl mask-[url(/images/mask-img.png)] mask-no-repeat mask-center mask-size-[50%] object-cover'></Image>
        </div>

        <div className='hide flex md:flex-row flex-col justify-between gap-4 md:-mt-80'>
          <div className='fade flex flex-col gap-4 w-96'>
            {featureLists.map((items) => (
              <div key={items} className='text-white/70 flex gap-2 items-center'>
                <div className='rounded-full'>
                  <Image src={'/images/check.png'} width={20} height={20} alt='check' className='rounded-full'></Image>
                </div>
                <div className='lg:text-lg'>{items}</div>
              </div>
            ))}
          </div>

          <div className='fade flex flex-col gap-4'>
            {goodLists.map((items) => (
              <div key={items} className='text-white/70 flex gap-2 items-center'>
                <div className='rounded-full'>
                  <Image src={'/images/check.png'} width={20} height={20} alt='check' className='rounded-full'></Image>
                </div>
                <div className='lg:text-lg'>{items}</div>
              </div>
            ))}
          </div>
        </div>

        <div className='unfade flex flex-col items-center opacity-0 pt-4 md:mb-40'>
          <div className='text-white md:text-5xl sm:text-4xl text-3xl font-bold font-serif md:w-[50rem] text-center'>
            Made with Craft, Poured with Passion
          </div>
          <div className='text-white md:text-xl md:w-[50rem] text-center pt-2'>
            This isn&apos;t just a drink. It&apos;s a carefully crafted moment made just for you
          </div>
        </div>

      </div>
    </div>
  )
}

export default Art
