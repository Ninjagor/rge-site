import React from 'react'
import "./_components/grad.css"
import Link from 'next/link'
import Image from 'next/image'

const HeroLeftSection = () => {
  return (
    <div className="flex flex-col gap-12 flex-1 items-center justify-center lg:max-w-[70%] mr-auto ml-auto relative">
        <h1 className="font-bold text-4xl lg:text-5xl xl:text-[3.4rem] !leading-[1.3] text-center  dark:opacity-90">Powering your imagination and creativity with <span className="boujee-text relative group dark:hover:!text-white hover:!text-black" style={{ transition: 'all .4s ease' }}>
          Javascript.
          <Image 
          src="/images/hero-squiggly.svg"
          alt="squiggly"
          layout='fill'
          className="absolute top-[200%] mt-[1.2rem] md:mt-[1.6rem] z-[-1] dark:hidden opacity-30 group-hover:opacity-30 group-hover:mt-[2rem]"
          style={{ transition: 'all 0.4s ease' }}
          />
          <div className="absolute blur-sm group-hover:blur-0 text-black/50 text-sm right-0 group-hover:bottom-[80%] bottom-[50%] mb-2 font-normal bg-white px-4 pointer-events-none opacity-0 py-2 rounded-md border-[1px] border-neutral-200 group-hover:opacity-100 transition-all dark:text-white/50 dark:bg-neutral-900 dark:border-neutral-700" style={{ transition: 'all .4s ease' }}>
            The language that powers the web!
          </div>
        </span></h1>
        <p className="opacity-[60%] xl:max-w-[90%] ml-auto mr-auto text-center text-sm lg:text-[1.01rem]">RGE.js is a Javascript library for simple and intuitive game development and digital art. It allows you to create, curate, and publish games to the web, all while keeping the best practices in mind.</p>
        {/* <div className="px-6 py-3 hover:opacity-[90%] bg-neutral-50 border-[1px] border-neutral-100 rounded-md cursor-pointer dark:bg-neutral-900 dark:border-neutral-800 ml-auto mr-auto">
            <p className="opacity-[65%] font-medium">npm install rge.js@latest</p>
        </div> */}
        <div className='flex items-center justify-center gap-6'>
          <Link href="https://rge-docs.vercel.app/getstarted" className='bg-black px-6 py-2.5 rounded-full cursor-pointer hover:opacity-80 text-white dark:bg-white dark:text-black font-medium transition-all duration-100'>Get Started</Link>
          <Link href="https://rge-docs.vercel.app/learn/engineobject" className='bg-none px-6 py-2.5 rounded-full cursor-pointer hover:opacity-100 text-black  dark:text-white opacity-60 font-medium transition-all duration-100'>Learn the Basics</Link>
        </div>
        {/* <div className="absolute w-[450px] h-[550px] rounded-full right-[65%] top-[30%] lg:right-[105%] lg:top-[20%] bg-none flex items-center justify-center z-[-1]">
          <Image 
          src="/images/hero-gradient-one.svg"
          layout='fill'
          alt='grad'
          />
        </div> */}
        {/* <div className="absolute w-[450px] h-[550px] rounded-full left-[25%] top-[0%] lg:left-[95%] hidden xl:flex lg:top-[-60%] bg-none items-center justify-center z-[-1]">
          <Image 
          src="/images/hero-gradient-one.svg"
          layout='fill'
          alt='grad'
          />
        </div> */}
    </div>
  )
}

export default HeroLeftSection