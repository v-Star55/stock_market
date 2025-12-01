import Link from "next/link"
import React from 'react'
import NavItems from "./NavItems"
import UserDropdown from "./UserDropdown"
import Image from "next/image"
import logo from "../public/assets/images/logo.png"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 header">
        <div className="container header-wrapper">
            <div className="flex items-center gap-2">
                <Image src={logo} alt="ArthX" width={50} height={50}/>   
                <Link href="/" className="logo">ArthX</Link>
            </div>

            <nav className="hidden sm:block">
                <NavItems/> 
            </nav>

            <UserDropdown />
        </div>
    </header>
  )
}

export default Header   