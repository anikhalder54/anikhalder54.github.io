import React from 'react'
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
        <div className='text-center sm:text-left pt-10'>
            <h1 className='text-2xl mb-4 font-extrabold text-gray-500'>Contact</h1>
        </div>
        <div>
            <ul>
                <li className='text-blue-500'><Link href='https://www.twitter.com/anikhalder45'>Twitter</Link></li>
                <li className='text-blue-500'><Link href='https://www.linkedin.com/in/anikhalder54'>Linkedin</Link></li>
                <li className='text-blue-500'><Link href='https://www.instagram.com/anikhalder54'>Instagram</Link></li>
            </ul>
        </div>
    </div>


  )
}
