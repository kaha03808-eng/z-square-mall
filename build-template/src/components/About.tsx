import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Award, Building2, Calendar, MapPin, Users } from 'lucide-react';

const highlights = [
    { icon: Building2, label: 'Designed By', value: 'Hafeez Contractor', sub: 'Renowned Indian Architect' },
    { icon: Users, label: 'Owned By', value: 'ZAZ Tanners Group', sub: 'Kanpur\'s Legacy Conglomerate' },
    { icon: Calendar, label: 'Established', value: '2010', sub: 'Over a Decade of Excellence' },
    { icon: MapPin, label: 'Location', value: 'Bada Chauraha', sub: 'Heart of Kanpur' },
];

export default function About() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section
            id='about'
            ref={ref as React.RefObject<HTMLElement>}
            className='py-20 lg:py-28 relative overflow-hidden'
            style={{ background: 'oklch(0.97 0.005 240)' }}
        >
            {/* Background accent */}
            <div
                className='absolute top-0 right-0 w-1/3 h-full opacity-5 pointer-events-none'
                style={{
                    background: 'radial-gradient(ellipse at right, oklch(0.72 0.14 75), transparent 70%)',
                }}
            />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                    {/* Left: Text content */}
                    <div
                        className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='section-divider' />
                            <span
                                className='font-body text-sm font-semibold tracking-widest uppercase'
                                style={{ color: 'oklch(0.72 0.14 75)' }}
                            >
                                Our Story
                            </span>
                        </div>

                        <h2
                            className='font-display font-bold text-4xl sm:text-5xl leading-tight mb-6'
                            style={{ color: 'oklch(0.12 0.035 255)' }}
                        >
                            A Landmark of{' '}
                            <span style={{ color: 'oklch(0.72 0.14 75)' }}>Luxury</span>{' '}
                            &amp; Lifestyle
                        </h2>

                        <p
                            className='font-body text-base sm:text-lg leading-relaxed mb-6'
                            style={{ color: 'oklch(0.38 0.02 240)' }}
                        >
                            Z Square Mall stands as one of India's largest and most architecturally
                            distinguished shopping destinations. Nestled at the iconic Bada Chauraha
                            in Kanpur, this magnificent structure redefines the retail experience
                            with its breathtaking design and world-class amenities.
                        </p>

                        <p
                            className='font-body text-base leading-relaxed mb-8'
                            style={{ color: 'oklch(0.45 0.02 240)' }}
                        >
                            Spanning over 900,000 sq ft across 5 acres, the mall was conceived by
                            the visionary ZAZ Tanners Group and brought to life by celebrated
                            architect Hafeez Contractor. Its unique beamless construction using
                            Singaporean Post Tension Technology makes it a true engineering marvel —
                            a first of its kind in India.
                        </p>

                        <div className='flex items-center gap-3'>
                            <Award size={20} style={{ color: 'oklch(0.72 0.14 75)' }} />
                            <span
                                className='font-body text-sm font-semibold'
                                style={{ color: 'oklch(0.72 0.14 75)' }}
                            >
                                Multiple "First in India" Architectural Achievements
                            </span>
                        </div>
                    </div>

                    {/* Right: Highlight cards */}
                    <div
                        className={`grid grid-cols-2 gap-4 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
                    >
                        {highlights.map((item, i) => (
                            <div
                                key={i}
                                className='group rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1'
                                style={{
                                    background: i % 2 === 0
                                        ? 'linear-gradient(145deg, oklch(0.12 0.035 255), oklch(0.18 0.04 255))'
                                        : 'linear-gradient(145deg, oklch(0.16 0.04 255), oklch(0.22 0.045 255))',
                                    boxShadow: '0 4px 24px oklch(0.12 0.035 255 / 0.15)',
                                }}
                            >
                                <div
                                    className='w-10 h-10 rounded-xl flex items-center justify-center mb-4'
                                    style={{ background: 'oklch(0.72 0.14 75 / 0.15)' }}
                                >
                                    <item.icon size={20} style={{ color: 'oklch(0.72 0.14 75)' }} />
                                </div>
                                <div
                                    className='font-body text-xs font-medium tracking-widest uppercase mb-1'
                                    style={{ color: 'oklch(0.65 0.015 240)' }}
                                >
                                    {item.label}
                                </div>
                                <div
                                    className='font-display font-semibold text-base sm:text-lg leading-tight mb-1'
                                    style={{ color: 'oklch(0.97 0.01 90)' }}
                                >
                                    {item.value}
                                </div>
                                <div
                                    className='font-body text-xs'
                                    style={{ color: 'oklch(0.65 0.015 240)' }}
                                >
                                    {item.sub}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
