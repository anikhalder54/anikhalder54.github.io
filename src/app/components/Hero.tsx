import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {


  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12 pt-20'>

            <div className='col-span-7 place-self-center text-center sm:text-left'>
                <h1 className='text-4xl mb-4 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500'>Hi. I&apos;m Anik Halder</h1>
                <p className='text-lg sm:text-lg lg:text-lg mb-6 dark:text-neutral-100'>I am a Software Engineer. I work for a tech company in India. I develop websites using NextJS. You can find my work on <span className='text-blue-500'><Link href="https://www.github.com/anikhalder54">Github</Link></span>. If you would like to work with me, drop me an <span className='text-purple-500'><a href="mailto:anikhalder54@gmail.com">Email</a></span>.</p>
            </div>

            <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
                <Image src='/images/hero-image.jpg' alt='Anik Halder' width={200} height={200} priority={true} className='rounded-full border-[0.35rem] border-white shadow-xl dark:border-neutral-900'/>
            </div>

        </div>

    </section>

  )
}
