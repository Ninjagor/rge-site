// @ts-nocheck
"use client";
import React, { useRef, useEffect } from 'react'
import HeroCenterSection from './HeroCenterSection'
import { useTheme } from 'next-themes';
import initStarField from './_components/starfield';

const HeroSection = () => {
  const { theme } = useTheme()
  const cRef = useRef(null)
  useEffect(() => {
    initStarField(theme);
  }, [theme])
  return (
    <>
        <section className="w-full h-full mt-[150px] lg:mt-0 lg:min-h-[700px] flex items-center justify-center relative px-7 py-3">
            <div className="w-full flex-col lg:flex-row h-full max-w-[1300px] flex items-center justify-between lg:gap-7 gap-14">
                <HeroCenterSection />

                <canvas
    id="canvas"
    style={{ position: 'absolute', width: '100%', height: '100vh', zIndex: '-1', top: '0', left: '0', maxHeight: '700px' }} ref={cRef} className="hidden dark:block"
  ></canvas>
            </div>
        </section>
        <div className="h-[100vh]"></div>
    </>
  )
}

export default HeroSection