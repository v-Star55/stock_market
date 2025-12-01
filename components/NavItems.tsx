'use client'
import Link from "next/link"
import { nav_items } from "@/lib/constants"
import { usePathname } from "next/navigation"

const NavItems = () => {
    const pathname = usePathname()
    const isActive = (path:string)=>{
        return path === pathname ? `text-yellow-500` : `text-white`
    }   
    
  return (
    <ul className="flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium">
        {nav_items.map((item)=>(
            <li key={item.id}>
                <Link href={item.path} className={`hover:text-yellow-500 transition-colors duration-300 ${isActive(item.path)}`}>{item.title}</Link>
            </li>
        ))}
    </ul>
  )
}

export default NavItems