import { SiFacebook, SiInstagram, SiX } from 'react-icons/si';
import { Heart } from 'lucide-react';

const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Stores', href: '#stores' },
    { label: 'Dining', href: '#dining' },
    { label: 'Facilities', href: '#facilities' },
    { label: 'Timings', href: '#timings' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: SiFacebook, href: '#', label: 'Hasnain' },
    { icon: SiInstagram, href: '#', label: 'Instagram' },
    { icon: SiX, href: '#', label: 'X (Twitter)' },
];

export default function Footer() {
    const scrollTo = (href: string) => {
        const id = href.replace('#', '');
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const year = new Date().getFullYear();
    const appId = encodeURIComponent(
        typeof window !== 'undefined' ? window.location.hostname : 'zsquaremall'
    );

    return (
        <footer
            style={{
                background: 'linear-gradient(180deg, oklch(0.10 0.035 255) 0%, oklch(0.08 0.03 255) 100%)',
            }}
        >
            {/* Top gold divider */}
            <div
                className='h-px w-full'
                style={{
                    background:
                        'linear-gradient(90deg, transparent, oklch(0.72 0.14 75 / 0.5), transparent)',
                }}
            />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12'>
                    {/* Brand Column */}
                    <div className='lg:col-span-2'>
                        {/* Logo */}
                        <div className='flex items-center gap-3 mb-5'>
                            <div
                                className='w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-xl flex-shrink-0'
                                style={{
                                    background:
                                        'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))',
                                    color: 'oklch(0.12 0.035 255)',
                                }}
                            >
                                Z²
                            </div>
                            <div>
                                <div
                                    className='font-display font-bold text-xl leading-tight'
                                    style={{ color: 'oklch(0.72 0.14 75)' }}
                                >
                                    Z Square Mall
                                </div>
                                <div
                                    className='font-body text-xs tracking-widest uppercase'
                                    style={{ color: 'oklch(0.55 0.015 240)' }}
                                >
                                    Kanpur, India
                                </div>
                            </div>
                        </div>

                        <p
                            className='font-body text-sm leading-relaxed mb-6 max-w-sm'
                            style={{ color: 'oklch(0.58 0.015 240)' }}
                        >
                            Kanpur's premier shopping and entertainment destination. One of India's
                            largest malls, featuring 150+ brands, world-class dining, INOX Cinemas,
                            and unmatched visitor facilities.
                        </p>

                        {/* Social Icons */}
                        <div className='flex items-center gap-3'>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className='w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110'
                                    style={{
                                        background: 'oklch(0.72 0.14 75 / 0.12)',
                                        border: '1px solid oklch(0.72 0.14 75 / 0.2)',
                                        color: 'oklch(0.72 0.14 75)',
                                    }}
                                    onMouseEnter={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.background =
                                            'oklch(0.72 0.14 75)';
                                        (e.currentTarget as HTMLAnchorElement).style.color =
                                            'oklch(0.12 0.035 255)';
                                    }}
                                    onMouseLeave={(e) => {
                                        (e.currentTarget as HTMLAnchorElement).style.background =
                                            'oklch(0.72 0.14 75 / 0.12)';
                                        (e.currentTarget as HTMLAnchorElement).style.color =
                                            'oklch(0.72 0.14 75)';
                                    }}
                                >
                                    <social.icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className='font-display font-semibold text-base mb-5'
                            style={{ color: 'oklch(0.88 0.01 240)' }}
                        >
                            Quick Links
                        </h4>
                        <ul className='space-y-2.5'>
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <button
                                        onClick={() => scrollTo(link.href)}
                                        className='font-body text-sm transition-all duration-200 hover:translate-x-1 flex items-center gap-2 group'
                                        style={{ color: 'oklch(0.58 0.015 240)' }}
                                        onMouseEnter={(e) => {
                                            (e.currentTarget as HTMLButtonElement).style.color =
                                                'oklch(0.72 0.14 75)';
                                        }}
                                        onMouseLeave={(e) => {
                                            (e.currentTarget as HTMLButtonElement).style.color =
                                                'oklch(0.58 0.015 240)';
                                        }}
                                    >
                                        <span
                                            className='w-1 h-1 rounded-full flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200'
                                            style={{ background: 'oklch(0.72 0.14 75)' }}
                                        />
                                        {link.label}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4
                            className='font-display font-semibold text-base mb-5'
                            style={{ color: 'oklch(0.88 0.01 240)' }}
                        >
                            Contact Us
                        </h4>
                        <div className='space-y-4'>
                            <div>
                                <div
                                    className='font-body text-xs font-semibold tracking-widest uppercase mb-1'
                                    style={{ color: 'oklch(0.72 0.14 75)' }}
                                >
                                    Address
                                </div>
                                <p
                                    className='font-body text-sm leading-relaxed'
                                    style={{ color: 'oklch(0.58 0.015 240)' }}
                                >
                                    16/113, MG Marg (Bada Chauraha),<br />
                                    Kanpur, UP 208001
                                </p>
                            </div>
                            <div>
                                <div
                                    className='font-body text-xs font-semibold tracking-widest uppercase mb-1'
                                    style={{ color: 'oklch(0.72 0.14 75)' }}
                                >
                                    Phone
                                </div>
                                <p
                                    className='font-body text-sm'
                                    style={{ color: 'oklch(0.58 0.015 240)' }}
                                >
                                    +91-512-237-4444<br />
                                    +91-9161775522
                                </p>
                            </div>
                            <div>
                                <div
                                    className='font-body text-xs font-semibold tracking-widest uppercase mb-1'
                                    style={{ color: 'oklch(0.72 0.14 75)' }}
                                >
                                    Email
                                </div>
                                <p
                                    className='font-body text-sm'
                                    style={{ color: 'oklch(0.58 0.015 240)' }}
                                >
                                    info@zsquaremall.com<br />
                                    admin@zsquaremall.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div
                    className='pt-8 flex flex-col sm:flex-row items-center justify-between gap-4'
                    style={{ borderTop: '1px solid oklch(0.72 0.14 75 / 0.12)' }}
                >
                    <div
                        className='font-body text-xs text-center sm:text-left'
                        style={{ color: 'oklch(0.45 0.015 240)' }}
                    >
                        © {year} ZAZ Shopping Mall Pvt. Ltd. All rights reserved.
                    </div>

                    <div
                        className='font-body text-xs flex items-center gap-1.5'
                        style={{ color: 'oklch(0.45 0.015 240)' }}
                    >
                        Built with{' '}
                        <Heart
                            size={12}
                            fill='currentColor'
                            style={{ color: 'oklch(0.72 0.14 75)' }}
                        />{' '}
                        using{' '}
                        <a
                            href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='transition-colors duration-200'
                            style={{ color: 'oklch(0.72 0.14 75)' }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.color =
                                    'oklch(0.85 0.11 82)';
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLAnchorElement).style.color =
                                    'oklch(0.72 0.14 75)';
                            }}
                        >
                            caffeine.ai
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
