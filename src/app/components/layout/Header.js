'use client'
import Link from "next/link";
import Bars2 from "../icons/Bars2";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Header({ currentPage }) {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }

            const home = document.getElementById('home');
            const skills = document.getElementById('skills');
            const projects = document.getElementById('projects');
            const blog = document.getElementById('blog');
            const contact = document.getElementById('contact');

            const scrollPosition = window.scrollY + 200;

            if (contact && scrollPosition >= contact.offsetTop) {
                setActiveLink('contact');
            } else if (blog && scrollPosition >= blog.offsetTop) {
                setActiveLink('blog');
            } else if (projects && scrollPosition >= projects.offsetTop) {
                setActiveLink('projects');
            } else if (skills && scrollPosition >= skills.offsetTop) {
                setActiveLink('skills');
            } else if (home && scrollPosition >= home.offsetTop) {
                setActiveLink('home');
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleLinkClick = (link) => {
        setActiveLink(link);
        setMobileNavOpen(false);
        const section = document.getElementById(link);
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    };
   

    return (
        <header id="header" className={`rounded-lg max-w-5xl mx-auto p-4 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gray-200' : 'bg-gray-900'} ${scrolled ? 'text-gray-900' : 'text-white'}`}>
            <div className="flex items-center md:hidden justify-between">
                <div id="perfil">
                <Image id="imgHeader" src="/perfil.jpg" alt="Profile Picture" width={100} height={100}/>
                </div>

                <Link className={`font-semibold text-2xl ${scrolled ? 'text-gray-900' : 'text-white'}`} href={'/'}>
                    BEAR DEV
                </Link>
                <div className="flex gap-8 items-center">
                    <button
                        className="p-1 border"
                        onClick={() => setMobileNavOpen(prev => !prev)}>
                        <Bars2 />
                    </button>
                </div>
            </div>
            {mobileNavOpen && (
                <div
                    onClick={() => setMobileNavOpen(false)}
                    className="md:hidden p-4 bg-gray-800 rounded-lg mt-2 flex flex-col gap-2 text-center">
                    <Link 
                        href={'/#home'} 
                        className={activeLink === 'home' ? 'active' : ''} 
                        onClick={() => handleLinkClick('home')}>
                        Home             
                    </Link>                    
                    <Link 
                        href={'/#skills'}
                        className={activeLink === 'skills' ? 'active' : ''} 
                        onClick={() => handleLinkClick('skills')}>
                        Skills
                    </Link>
                    <Link 
                        href={'/#projects'}
                        className={(currentPage === 'projects' || activeLink === 'projects') ? 'active' : ''} 
                        onClick={() => handleLinkClick('projects')}>
                        Projects
                    </Link>
                    <Link 
                        href={'/#blog'}
                        className={activeLink === 'blog' ? 'active' : ''} 
                        onClick={() => handleLinkClick('blog')}>
                        Blog
                    </Link>
                    <Link 
                        href={'/#contact'}
                        className={activeLink === 'contact' ? 'active' : ''} 
                        onClick={() => handleLinkClick('contact')}>
                        Contact
                    </Link>
                </div>
            )}
            <div className="hidden md:flex items-center justify-between">
                <nav className="flex items-center gap-8 font-semibold justify-between">
                    <div id="perfil">
                    <Image id="imgHeader"  src="/perfil.jpg" alt="Profile Picture" width={100} height={100}/>
                    </div>
                    <Link className={`font-semibold text-2xl ${scrolled ? 'text-gray-800' : 'text-white'}`} href={'/'}>
                        BEAR DEV
                    </Link>
                </nav>
                <nav className="flex items-center gap-16 font-semibold justify-between ">
                  <Link 
                    href={'/#home'} 
                    className={activeLink === 'home' ? 'active' : ''} 
                    onClick={() => handleLinkClick('home')}>
                      Home             
                  </Link>                    
                  <Link 
                    href={'/#skills'}
                    className={activeLink === 'skills' ? 'active' : ''} 
                    onClick={() => handleLinkClick('skills')}>
                      Skills
                  </Link>
                  <Link 
                    href={'/#projects'}
                    className={(currentPage === 'projects' || activeLink === 'projects') ? 'active' : ''} 
                    onClick={() => handleLinkClick('projects')}>
                      Projects
                  </Link>
                  <Link 
                    href={'/#blog'}
                    className={activeLink === 'blog' ? 'active' : ''} 
                    onClick={() => handleLinkClick('blog')}>
                      Blog
                  </Link>
                  <Link 
                    href={'/#contact'}
                    className={activeLink === 'contact' ? 'active' : ''} 
                    onClick={() => handleLinkClick('contact')}>
                      Contact
                  </Link>
                </nav>
            </div>
        </header>
    )
}