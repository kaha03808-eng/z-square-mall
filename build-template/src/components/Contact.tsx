import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MapPin, Phone, Mail, ExternalLink, Navigation } from 'lucide-react';

const contactItems = [
    {
        icon: MapPin,
        label: 'Address',
        lines: [
            '16/113, MG Marg (Bada Chauraha)',
            'Kanpur, Uttar Pradesh 208001',
            'India',
        ],
        color: 'oklch(0.72 0.14 75)',
    },
    {
        icon: Phone,
        label: 'Phone',
        lines: ['+91-512-237-4444', '+91-9161775522'],
        color: 'oklch(0.60 0.15 140)',
    },
    {
        icon: Mail,
        label: 'Email',
        lines: ['info@zsquaremall.com', 'admin@zsquaremall.com'],
        color: 'oklch(0.55 0.15 260)',
    },
];

export default function Contact() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.08 });

    return (
        <section
            id='contact'
            ref={ref as React.RefObject<HTMLElement>}
            className='py-20 lg:py-28 relative overflow-hidden'
            style={{ background: 'oklch(0.97 0.005 240)' }}
        >
            {/* Decorative */}
            <div
                className='absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5 pointer-events-none'
                style={{
                    background: 'radial-gradient(ellipse at bottom left, oklch(0.72 0.14 75), transparent 60%)',
                }}
            />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Header */}
                <div
                    className={`text-center mb-14 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className='flex items-center justify-center gap-3 mb-4'>
                        <div className='section-divider' />
                        <span
                            className='font-body text-sm font-semibold tracking-widest uppercase'
                            style={{ color: 'oklch(0.72 0.14 75)' }}
                        >
                            Find Us
                        </span>
                        <div className='section-divider' />
                    </div>
                    <h2
                        className='font-display font-bold text-4xl sm:text-5xl leading-tight mb-4'
                        style={{ color: 'oklch(0.12 0.035 255)' }}
                    >
                        Contact &amp;{' '}
                        <span style={{ color: 'oklch(0.72 0.14 75)' }}>Location</span>
                    </h2>
                    <p
                        className='font-body text-base sm:text-lg max-w-xl mx-auto'
                        style={{ color: 'oklch(0.45 0.02 240)' }}
                    >
                        We'd love to hear from you. Visit us at the heart of Kanpur
                        or reach out through any of the channels below.
                    </p>
                </div>

                <div className='grid lg:grid-cols-2 gap-10 lg:gap-16 items-start'>
                    {/* Left: Contact Info */}
                    <div
                        className={`space-y-5 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    >
                        {contactItems.map((item, i) => (
                            <div
                                key={i}
                                className='group flex gap-5 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5'
                                style={{
                                    background: 'white',
                                    border: '1px solid oklch(0.90 0.01 240)',
                                    boxShadow: '0 2px 16px oklch(0.12 0.035 255 / 0.06)',
                                }}
                            >
                                <div
                                    className='w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110'
                                    style={{
                                        background: `${item.color}15`,
                                        border: `1px solid ${item.color}25`,
                                    }}
                                >
                                    <item.icon size={20} style={{ color: item.color }} />
                                </div>
                                <div>
                                    <div
                                        className='font-body text-xs font-semibold tracking-widest uppercase mb-2'
                                        style={{ color: item.color }}
                                    >
                                        {item.label}
                                    </div>
                                    {item.lines.map((line, j) => (
                                        <div
                                            key={j}
                                            className='font-body text-sm sm:text-base leading-relaxed'
                                            style={{ color: 'oklch(0.25 0.03 255)' }}
                                        >
                                            {line}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Get Directions CTA */}
                        <a
                            href='https://maps.google.com/?q=Z+Square+Mall+Kanpur'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='flex items-center justify-center gap-3 w-full py-4 rounded-2xl font-body font-semibold text-sm transition-all duration-300 hover:scale-[1.02]'
                            style={{
                                background: 'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))',
                                color: 'oklch(0.12 0.035 255)',
                                boxShadow: '0 4px 20px oklch(0.72 0.14 75 / 0.3)',
                            }}
                        >
                            <Navigation size={16} />
                            Get Directions on Google Maps
                            <ExternalLink size={14} />
                        </a>
                    </div>

                    {/* Right: Styled Map Placeholder */}
                    <div
                        className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        <div
                            className='relative rounded-3xl overflow-hidden'
                            style={{
                                height: '420px',
                                background: 'linear-gradient(145deg, oklch(0.14 0.04 255), oklch(0.20 0.045 255))',
                                border: '1px solid oklch(0.72 0.14 75 / 0.2)',
                                boxShadow: '0 8px 40px oklch(0.12 0.035 255 / 0.2)',
                            }}
                        >
                            {/* Map grid lines */}
                            <div
                                className='absolute inset-0 opacity-10'
                                style={{
                                    backgroundImage: `
                                        linear-gradient(oklch(0.72 0.14 75 / 0.4) 1px, transparent 1px),
                                        linear-gradient(90deg, oklch(0.72 0.14 75 / 0.4) 1px, transparent 1px)
                                    `,
                                    backgroundSize: '40px 40px',
                                }}
                            />

                            {/* Road lines */}
                            <div
                                className='absolute top-1/2 left-0 right-0 h-8 -translate-y-1/2 opacity-20'
                                style={{ background: 'oklch(0.72 0.14 75 / 0.3)' }}
                            />
                            <div
                                className='absolute left-1/2 top-0 bottom-0 w-8 -translate-x-1/2 opacity-20'
                                style={{ background: 'oklch(0.72 0.14 75 / 0.3)' }}
                            />

                            {/* Diagonal roads */}
                            <div
                                className='absolute inset-0 opacity-10'
                                style={{
                                    background: `
                                        linear-gradient(45deg, transparent 45%, oklch(0.72 0.14 75 / 0.3) 45%, oklch(0.72 0.14 75 / 0.3) 55%, transparent 55%),
                                        linear-gradient(-45deg, transparent 45%, oklch(0.72 0.14 75 / 0.2) 45%, oklch(0.72 0.14 75 / 0.2) 55%, transparent 55%)
                                    `,
                                }}
                            />

                            {/* Center pin */}
                            <div className='absolute inset-0 flex flex-col items-center justify-center'>
                                {/* Pulse rings */}
                                <div className='relative'>
                                    <div
                                        className='absolute -inset-8 rounded-full opacity-20 animate-ping'
                                        style={{ background: 'oklch(0.72 0.14 75)' }}
                                    />
                                    <div
                                        className='absolute -inset-5 rounded-full opacity-15 animate-ping'
                                        style={{ background: 'oklch(0.72 0.14 75)', animationDelay: '0.5s' }}
                                    />
                                    <div
                                        className='w-14 h-14 rounded-full flex items-center justify-center relative z-10'
                                        style={{
                                            background: 'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))',
                                            boxShadow: '0 4px 20px oklch(0.72 0.14 75 / 0.5)',
                                        }}
                                    >
                                        <MapPin size={24} style={{ color: 'oklch(0.12 0.035 255)' }} fill='currentColor' />
                                    </div>
                                </div>

                                {/* Location card */}
                                <div
                                    className='mt-6 rounded-2xl px-6 py-4 text-center max-w-xs'
                                    style={{
                                        background: 'oklch(0.12 0.035 255 / 0.9)',
                                        border: '1px solid oklch(0.72 0.14 75 / 0.3)',
                                        backdropFilter: 'blur(8px)',
                                    }}
                                >
                                    <div
                                        className='font-display font-bold text-lg mb-1'
                                        style={{ color: 'oklch(0.72 0.14 75)' }}
                                    >
                                        Z Square Mall
                                    </div>
                                    <div
                                        className='font-body text-xs leading-relaxed'
                                        style={{ color: 'oklch(0.75 0.015 240)' }}
                                    >
                                        16/113, MG Marg (Bada Chauraha)<br />
                                        Kanpur, UP 208001
                                    </div>
                                </div>
                            </div>

                            {/* Corner labels */}
                            <div
                                className='absolute top-4 left-4 font-body text-xs font-medium opacity-40'
                                style={{ color: 'oklch(0.72 0.14 75)' }}
                            >
                                MG Marg
                            </div>
                            <div
                                className='absolute bottom-4 right-4 font-body text-xs font-medium opacity-40'
                                style={{ color: 'oklch(0.72 0.14 75)' }}
                            >
                                Bada Chauraha
                            </div>
                            <div
                                className='absolute top-4 right-4 font-body text-xs font-medium opacity-40'
                                style={{ color: 'oklch(0.72 0.14 75)' }}
                            >
                                Kanpur
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
