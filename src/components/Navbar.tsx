import { useEffect, useState } from 'react'
import { navItems, programs } from 'src/constans'
import { motion } from "framer-motion";

type Props = {
    logoLight: string,
    logoDark: string,
    routePath: string
}

function NavListMenu({ scrolled }: { scrolled: boolean }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="relative hidden lg:block xl:hidden"
            onMouseEnter={() => setIsMenuOpen(true)}
            onMouseLeave={() => setIsMenuOpen(false)}>
            <div
                className={`font-bold inline-flex items-center gap-2 cursor-pointer text-center ${scrolled ? 'text-gray-400 hover:text-primary-700' : ''}`}
            >
                Programas
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isMenuOpen ? 1 : 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#416749',
                    padding: '.5rem',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                    pointerEvents: isMenuOpen ? 'auto' : 'none',
                    zIndex: 70,
                    width: '20rem',
                    borderRadius: '.5rem'
                }}
            >
                <div className="flex items-center justify-start flex-col p-4 text-white">
                    {
                        programs.map((item, index) => (
                            <a className="flex justify-start items-center w-full py-2 px-4 align-middle hover:bg-gray-100 hover:text-primary-500 rounded-md" href={item.path} key={index}>
                                <span className="inline-block ml-2 text-sm font-medium">{item.name}</span>
                            </a>
                        ))
                    }
                </div>
            </motion.div>
        </div>
    )
}

export default function Navbar({ logoLight, logoDark, routePath }: Props) {
    const [openNav, setOpenNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    const navItemsMobile = [
        ...navItems.slice(0, 2),
        ...programs.map(({ name, path }) => ({ name, path })),
        ...navItems.slice(2)
    ]

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 1024 && setOpenNav(false)
        )
    }, [])

    useEffect(() => {
        const handleScroll = () => {
            const navbarHeight = 96;
            const breakpointHeight = routePath === "/" ? window.innerHeight : 256
            setScrolled(window.scrollY > (breakpointHeight - navbarHeight))
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${openNav ? 'bg-primary-400' : (scrolled ? 'bg-white text-gray-400' : 'bg-transparent text-white backdrop-blur-md')}`}>
            <nav className={`p-4 max-w-7xl xl:max-w-full mx-auto ${openNav ? 'h-screen' : 'h-auto'}`}>
                <div className="flex items-center justify-between lg:justify-around">
                    <a href="/" className='text-primary-500'>
                        <img loading='eager' src={logoDark} className={`h-16 ${scrolled ? 'hidden' : ''}`} alt="Logo Amazon" />
                        <img loading='lazy' src={logoLight} className={`h-16 ${scrolled ? '' : 'hidden'}`} alt="Logo Amazon" />
                    </a>
                    <div className="hidden lg:flex items-center justify-center px-4 gap-8">
                        {
                            navItems.slice(0, 2).map((item, index) => (
                                <a href={item.path} className={`font-bold text-center ${scrolled ? (item.path === routePath ? 'text-primary-700' : 'text-gray-400 hover:text-primary-700') : (item.path === routePath ? 'border-b-2 border-white' : 'text-white hover:border-b-2 hover:border-white')}`} key={index}>
                                    {item.name}
                                </a>
                            ))
                        }
                        <NavListMenu scrolled={scrolled} />
                        <div className='hidden xl:flex items-center justify-center gap-8'>
                            {
                                programs.map(({ name, path }, index) => (
                                    <a href={path} className={`font-bold text-center ${scrolled ? (path === routePath ? 'text-primary-700' : 'text-gray-400 hover:text-primary-700') : (path === routePath ? 'border-b-2 border-white' : 'text-white hover:border-b-2 hover:border-white')}`} key={index}>
                                        {name}
                                    </a>
                                ))
                            }
                        </div>
                        {
                            navItems.slice(2).map((item, index) => (
                                <a href={item.path} className={`font-bold text-center ${scrolled ? (item.path === routePath ? 'text-primary-700' : 'text-gray-400 hover:text-primary-700') : (item.path === routePath ? 'border-b-2 border-white' : 'text-white hover:border-b-2 hover:border-white')}`} key={index}>
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                    <motion.div
                        className="lg:hidden p-2 rounded-md text-white hover:bg-primary-500 cursor-pointer"
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
                            navItemsMobile.map((item, index) => (
                                <a href={item.path} className={`text-primary-700 ${openNav ? 'text-white font-bold text-2xl' : (scrolled ? 'text-gray-400' : 'text-white')}`} key={index}>
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </motion.div>
            </nav>
        </header>
    )
}