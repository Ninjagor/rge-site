"use client";
import React from 'react'
import { useTheme } from 'next-themes';

import { Sun, Moon, GitHub } from "react-feather";

import Image from 'next/image';
import Link from 'next/link';

const DefaultNavbar = () => {
  const { theme, setTheme } = useTheme();
  return (
    <>
        <nav className="w-full z-[100] fixed top-0 left-0 backdrop-blur-[10px] px-7 py-3 dark:bg-black/80 bg-white/80 text-black dark:text-white flex items-center justify-center border-b-[1px] border-b-neutral-100 dark:border-b-neutral-800" style={{ transition: 'background .4s ease, border .4s ease' }}>
            <section className="flex justify-between w-full max-w-[1300px]">
              

                {/* <button onClick={() => setTheme(theme=="dark" ? "light" : "dark" )}>Toggle Theme</button> */}

                <section className="flex items-center justify-center gap-12">
                  <Link href="/" className="w-[120px] h-[45px] relative">
                    <Image 
                      src={`/images/logo-light-theme.svg`}
                      alt="Logo"
                      layout='fill'
                      className="dark:hidden block"
                      />
                      <Image 
                      src={`/images/logo-dark-theme.svg`}
                      alt="Logo"
                      layout='fill'
                      className="hidden dark:block"
                      />
                  </Link>
                  <ul  className="items-center justify-center gap-7 hidden md:flex">
                    <li className="opacity-50 hover:opacity-100 text-sm h-full py-1 cursor-pointer">
                      <Link href="https://rge-docs.vercel.app/" className='py-1'>Docs</Link>
                    </li>
                    <li className="opacity-50 hover:opacity-100 text-sm h-full py-1 cursor-pointer">
                      <Link href="https://rge-editor.vercel.app" className='py-1'>Online Playground</Link>
                    </li>
                    <li className="opacity-50 hover:opacity-100 text-sm h-full py-1 cursor-pointer">
                      <Link href="#" className='py-3'>Blog</Link>
                    </li>
                    <li className="opacity-50 hover:opacity-100 text-sm h-full py-1 cursor-pointer">
                      <Link href="https://github.com/Ninjagor/rge.js" className='py-3'>Github Repo</Link>
                    </li>
                  </ul>
                </section>

                <section className="flex items-center justify-center gap-5">
                  <Link href="https://rge-docs.vercel.app/learn/engineobject" className="px-4 py-1.5 bg-black text-white dark:bg-white dark:text-black rounded-md text-sm opacity-100 hover:opacity-80">
                    Learn
                  </Link>
                  <div className="w-[1px] h-full dark:bg-neutral-800 bg-neutral-200" />
                  <button className="p-3 cursor-pointer opacity-75 hover:opacity-100" onClick={() => setTheme(theme=="dark" ? "light" : "dark" )}>
                    <Moon 
                    className="dark:hidden block"
                    size={20}
                    />
                    <Sun 
                    className="hidden dark:block"
                    size={20}
                    />
                  </button>
                </section>
            </section>
        </nav>
    </>
  )
}

export default DefaultNavbar;