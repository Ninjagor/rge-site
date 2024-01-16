import React from 'react'
import HeroCanvas from './_components/HeroCanvas'

const HeroRightSection = () => {
  return (
    <div className="w-full h-full flex-1 lg:max-w-[40%] flex items-center justify-center flex-col">
        <HeroCanvas />
    </div>
  )
}

export default HeroRightSection