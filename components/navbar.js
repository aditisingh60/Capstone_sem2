import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import "../styles/navbar.css"
const Navbar = () => {
  return (

    <div className='navbar'>

        <div className='logo'>
            <Image src="/logo.png" alt="Logo" width={150} height={50}/>
        </div>
        <div className='upper'>
            <Link className='link' href="/"><Image src="/dashboard_logo.png" alt='dashboard' width={24} height={24}/>Dashboard</Link>
            <Link className='link' href="/analytics"><Image src="/analytics.png" width={24} alt='analytics' height={24}/>Analytics</Link>
            <Link className='link' href="/wallet"><Image src="/wallet_logo.png" width={24} alt='wallet' height={24}/>Wallet</Link>
            <Link className='link' href="/blog"><Image src="/blog_logo.png" width={24} alt='blog' height={24}/>Blog</Link>
            <Link className='link' href="/about"><Image src="/about_logo.png" width={24} alt='about' height={24}/>About</Link>
        </div>
        <div className='lower'>
            <Link className='link' href="/help"><Image src="/help_logo.png" width={24} height={24} alt='help' />Help</Link>
            <Link className='link' href="/login"><Image src="/login_logo.png" width={24} height={24} alt='login' />Login</Link>
        </div>
    </div>
  )
}
export default Navbar