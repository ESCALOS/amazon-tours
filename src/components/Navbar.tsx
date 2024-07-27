import { useEffect, useState } from 'react'
import { navItems } from 'src/constans'
import { motion } from "framer-motion";

type Props = {
    logoPath: string,
    isIndexPath?: boolean
}

export default function Navbar({ logoPath, isIndexPath = false }: Props) {
    const [openNav, setOpenNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1024 && setOpenNav(false)
        )
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = 96;
            const breakpointHeight = isIndexPath ? window.innerHeight : 256
            setScrolled(window.scrollY > (breakpointHeight - navbarHeight))
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${openNav ? 'bg-primary-400' : (scrolled ? 'bg-white text-gray-400' : 'bg-transparent text-white backdrop-blur-md')}`}>
            <nav className={`p-4 max-w-7xl mx-auto ${openNav ? 'h-screen' : 'h-auto'}`}>
                <div className="flex items-center justify-between">
                    <a href="/" className='text-primary-500'>
                        <img src={logoPath} className='h-16' alt="Logo Amazon" />
                    </a>
                    <div className="hidden lg:flex items-center justify-center px-4 gap-8">
                        {
                            navItems.map((item) => (
                                <a href={item.path} className={`font-bold text-center ${scrolled ? 'text-gray-400 hover:text-primary-700' : 'text-white hover:border-b-2 hover:border-white'}`} key={item.id}>
                                    {item.text}
                                </a>
                            ))
                        }
                    </div>
                    <motion.div
                        className="lg:hidden p-2 rounded-md hover:bg-primary-500 cursor-pointer"
                        onClick={() => setOpenNav(!openNav)}>
                        {
                            openNav ?
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>

                        }
                    </motion.div>
                </div>
                <motion.div
                    initial={{ height: 0 }}
                    animate={{
                        height: openNav ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div className={`flex gap-8 items-center justify-center flex-col py-8 h-full`}>
                        {
                            navItems.map((item) => (
                                <a href={item.path} className={`text-primary-700 ${openNav ? 'text-white font-bold text-2xl' : (scrolled ? 'text-gray-400' : 'text-white')}`} key={item.id}>
                                    {item.text}
                                </a>
                            ))
                        }
                    </div>
                </motion.div>
            </nav>
        </header>
    )
}