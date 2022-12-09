import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


function Logo() {
  return (
    <section className='pt-8 bg-stone-300 flex justify-center'>
        <Link href="/">
        <Image className='pt-8 w-[200px] h-[200px] md:h-[300px] md:w-[300px] '  src='/images/logo.png ' alt='logo' width={300} height={300} />
        </Link>
    </section>
  )
}

export default Logo