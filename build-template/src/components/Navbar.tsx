import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Stores', href: '#stores' },
    { label: 'Dining', href: '#dining' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Timings', href: '#timings' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            // Determine active section
            const sections = navLinks.map(l => l.href.replace('#', ''));
            for (let i = sections.length - 1; i >= 0; i--) {
                const el = document.getElementById(sections[i]);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (href: string) => {
        const id = href.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'bg-navy-deep shadow-navy py-2'
                    : 'bg-transparent py-4'
            }`}
            style={{
                backgroundColor: scrolled ? 'oklch(0.12 0.035 255)' : 'transparent',
                backdropFilter: scrolled ? 'blur(12px)' : 'none',
            }}
        >
            <nav className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between'>
                    {/* Logo */}
                    <button
                        onClick={() => scrollTo('#home')}
                        className='flex items-center gap-3 group'
                    >
                        <div className='relative'>
                            <div
                                className='w-10 h-10 rounded-lg flex items-center justify-center font-display font-bold text-lg'
                                style={{
                                    background: 'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))',
                                    color: 'oklch(0.12 0.035 255)',
                                }}
                            >
                                Z²
                            </div>
                        </div>
                        <div className='text-left'>
                            <div
                                className='font-display font-bold text-lg leading-tight'
                                style={{ color: 'oklch(0.72 0.14 75)' }}
                            >
                                Z Square Mall
                            </div>
                            <div
                                className='text-xs font-body tracking-widest uppercase'
                                style={{ color: 'oklch(0.75 0.015 240)' }}
                            >
                                Kanpur
                            </div>
                        </div>
                    </button>

                    {/* Desktop Nav */}
                    <ul className='hidden lg:flex items-center gap-1'>
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className={`relative px-4 py-2 text-sm font-body font-medium tracking-wide transition-all duration-300 rounded-md group ${
                                            isActive ? '' : ''
                                        }`}
                                        style={{
                                            color: isActive
                                                ? 'oklch(0.72 0.14 75)'
                                                : 'oklch(0.88 0.01 240)',
                                        }}
                                    >
                                        {link.label}
                                        <span
                                            className='absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full transition-all duration-300'
                                            style={{
                                                width: isActive ? '70%' : '0%',
                                                background: 'oklch(0.72 0.14 75)',
                                            }}
                                        />
                                        <span
                                            className='absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                            style={{ background: 'oklch(0.72 0.14 75 / 0.08)' }}
                                        />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>

                    {/* CTA + Hamburger */}
                    <div className='flex items-center gap-3'>
                        <button
                            onClick={() => scrollTo('#stores')}
                            className='hidden sm:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-body font-semibold transition-all duration-300 hover:scale-105'
                            style={{
                                background: 'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))',
                                color: 'oklch(0.12 0.035 255)',
                                boxShadow: '0 4px 16px oklch(0.72 0.14 75 / 0.3)',
                            }}
                        >
                            <ShoppingBag size={15} />
                            Explore
                        </button>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='lg:hidden p-2 rounded-lg transition-colors duration-200'
                            style={{ color: 'oklch(0.72 0.14 75)' }}
                            aria-label='Toggle menu'
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`lg:hidden overflow-hidden transition-all duration-400 ease-in-out ${
                        isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                    }`}
                >
                    <div
                        className='rounded-2xl p-4 space-y-1'
                        style={{ background: 'oklch(0.16 0.04 255)' }}
                    >
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.replace('#', '');
                            return (
                                <button
                                    key={link.href}
                                    onClick={() => scrollTo(link.href)}
                                    className='w-full text-left px-4 py-3 rounded-xl text-sm font-body font-medium transition-all duration-200'
                                    style={{
                                        color: isActive ? 'oklch(0.72 0.14 75)' : 'oklch(0.88 0.01 240)',
                                        background: isActive ? 'oklch(0.72 0.14 75 / 0.1)' : 'transparent',
                                    }}
                                >
                                    {link.label}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>
        </header>
    );
}
