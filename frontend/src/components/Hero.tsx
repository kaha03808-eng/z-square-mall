import { useEffect, useState, useRef } from 'react';
import { ChevronDown, Star, MapPin } from 'lucide-react';

interface StatItem {
    value: string;
    numericValue: number;
    suffix: string;
    label: string;
    prefix?: string;
}

const stats: StatItem[] = [
    { value: '5', numericValue: 5, suffix: ' Acres', label: 'Total Area', prefix: '' },
    { value: '900,000', numericValue: 900000, suffix: ' sq ft', label: 'Built-up Space', prefix: '' },
    { value: '150', numericValue: 150, suffix: '+', label: 'Premium Brands', prefix: '' },
    { value: '2,500', numericValue: 2500, suffix: '', label: 'Parking Spots', prefix: '' },
];

function AnimatedCounter({ target, suffix, prefix = '' }: { target: number; suffix: string; prefix?: string }) {
    const [count, setCount] = useState(0);
    const [started, setStarted] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !started) {
                    setStarted(true);
                }
            },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [started, target]);

    const formatted = count >= 1000 ? count.toLocaleString('en-IN') : count.toString();

    return (
        <span ref={ref}>
            {prefix}{formatted}{suffix}
        </span>
    );
}

export default function Hero() {
    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id='home'
            className='relative min-h-screen flex flex-col items-center justify-center overflow-hidden'
            style={{
                background: 'linear-gradient(135deg, oklch(0.10 0.04 260) 0%, oklch(0.14 0.04 255) 40%, oklch(0.18 0.04 250) 70%, oklch(0.12 0.035 265) 100%)',
            }}
        >
            {/* Decorative geometric elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {/* Large circle top right */}
                <div
                    className='absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10'
                    style={{ background: 'radial-gradient(circle, oklch(0.72 0.14 75), transparent 70%)' }}
                />
                {/* Small circle bottom left */}
                <div
                    className='absolute -bottom-20 -left-20 w-64 h-64 rounded-full opacity-8'
                    style={{ background: 'radial-gradient(circle, oklch(0.72 0.14 75), transparent 70%)' }}
                />
                {/* Grid pattern */}
                <div
                    className='absolute inset-0 opacity-5'
                    style={{
                        backgroundImage: `linear-gradient(oklch(0.72 0.14 75 / 0.3) 1px, transparent 1px), linear-gradient(90deg, oklch(0.72 0.14 75 / 0.3) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px',
                    }}
                />
                {/* Diagonal accent lines */}
                <div
                    className='absolute top-1/4 left-0 w-full h-px opacity-20'
                    style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.14 75), transparent)' }}
                />
                <div
                    className='absolute top-3/4 left-0 w-full h-px opacity-10'
                    style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.14 75), transparent)' }}
                />
                {/* Floating orbs */}
                <div
                    className='absolute top-1/3 left-1/4 w-2 h-2 rounded-full animate-float opacity-60'
                    style={{ background: 'oklch(0.72 0.14 75)', animationDelay: '0s' }}
                />
                <div
                    className='absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full animate-float opacity-40'
                    style={{ background: 'oklch(0.85 0.11 82)', animationDelay: '1.5s' }}
                />
                <div
                    className='absolute top-1/2 right-1/4 w-1 h-1 rounded-full animate-float opacity-50'
                    style={{ background: 'oklch(0.72 0.14 75)', animationDelay: '3s' }}
                />
            </div>

            {/* Main content */}
            <div className='relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto'>
                {/* Badge */}
                <div
                    className='inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-body font-semibold tracking-widest uppercase mb-8 animate-fade-in'
                    style={{
                        background: 'oklch(0.72 0.14 75 / 0.15)',
                        border: '1px solid oklch(0.72 0.14 75 / 0.4)',
                        color: 'oklch(0.85 0.11 82)',
                        animationDelay: '0.2s',
                        opacity: 0,
                        animationFillMode: 'forwards',
                    }}
                >
                    <MapPin size={12} />
                    Bada Chauraha, Kanpur
                    <Star size={10} fill='currentColor' />
                </div>

                {/* Main headline */}
                <h1
                    className='font-display font-bold leading-none mb-4 animate-fade-in-up'
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 7rem)',
                        color: 'oklch(0.97 0.01 90)',
                        opacity: 0,
                        animationDelay: '0.4s',
                        animationFillMode: 'forwards',
                    }}
                >
                    Z{' '}
                    <span
                        style={{
                            background: 'linear-gradient(135deg, oklch(0.72 0.14 75) 0%, oklch(0.88 0.13 82) 50%, oklch(0.72 0.14 75) 100%)',
                            backgroundSize: '200% auto',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            animation: 'shimmer 3s linear infinite',
                        }}
                    >
                        Square
                    </span>
                    <br />
                    <span style={{ color: 'oklch(0.97 0.01 90)' }}>Mall</span>
                </h1>

                {/* Tagline */}
                <p
                    className='font-body text-lg sm:text-xl md:text-2xl font-light tracking-wide mb-10 animate-fade-in-up'
                    style={{
                        color: 'oklch(0.78 0.015 240)',
                        opacity: 0,
                        animationDelay: '0.7s',
                        animationFillMode: 'forwards',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                    }}
                >
                    Kanpur's Premier Shopping &amp; Entertainment Destination
                </p>

                {/* CTA Buttons */}
                <div
                    className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up'
                    style={{
                        opacity: 0,
                        animationDelay: '1s',
                        animationFillMode: 'forwards',
                    }}
                >
                    <button
                        onClick={scrollToAbout}
                        className='group relative px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 hover:scale-105 animate-pulse-gold'
                        style={{
                            background: 'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))',
                            color: 'oklch(0.12 0.035 255)',
                            boxShadow: '0 8px 32px oklch(0.72 0.14 75 / 0.4)',
                        }}
                    >
                        <span className='relative z-10'>Explore Mall</span>
                        <div
                            className='absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                            style={{ background: 'linear-gradient(135deg, oklch(0.82 0.12 80), oklch(0.72 0.14 75))' }}
                        />
                    </button>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className='px-8 py-4 rounded-full font-body font-semibold text-base transition-all duration-300 hover:scale-105'
                        style={{
                            border: '1.5px solid oklch(0.72 0.14 75 / 0.6)',
                            color: 'oklch(0.85 0.11 82)',
                            background: 'oklch(0.72 0.14 75 / 0.08)',
                        }}
                    >
                        Get Directions
                    </button>
                </div>

                {/* Stats */}
                <div
                    className='grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 animate-fade-in-up'
                    style={{
                        opacity: 0,
                        animationDelay: '1.3s',
                        animationFillMode: 'forwards',
                    }}
                >
                    {stats.map((stat, i) => (
                        <div
                            key={i}
                            className='relative group rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:scale-105'
                            style={{
                                background: 'oklch(0.72 0.14 75 / 0.08)',
                                border: '1px solid oklch(0.72 0.14 75 / 0.2)',
                                backdropFilter: 'blur(8px)',
                            }}
                        >
                            <div
                                className='font-display font-bold text-2xl sm:text-3xl mb-1'
                                style={{ color: 'oklch(0.72 0.14 75)' }}
                            >
                                <AnimatedCounter
                                    target={stat.numericValue}
                                    suffix={stat.suffix}
                                    prefix={stat.prefix}
                                />
                            </div>
                            <div
                                className='font-body text-xs sm:text-sm font-medium tracking-wide'
                                style={{ color: 'oklch(0.75 0.015 240)' }}
                            >
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Scroll indicator */}
            <button
                onClick={scrollToAbout}
                className='absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-opacity duration-300 hover:opacity-70'
                style={{ color: 'oklch(0.72 0.14 75)' }}
            >
                <span className='font-body text-xs tracking-widest uppercase' style={{ color: 'oklch(0.65 0.015 240)' }}>
                    Scroll
                </span>
                <ChevronDown size={20} className='animate-bounce' />
            </button>
        </section>
    );
}
