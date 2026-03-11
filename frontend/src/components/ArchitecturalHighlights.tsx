import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Trophy, Layers, Zap, ArrowDown, Ruler, Building } from 'lucide-react';

const firsts = [
    {
        icon: Trophy,
        number: '01',
        title: 'Largest Atrium on Squarish Track',
        description: 'First mall in India to feature an atrium on a squarish track spanning over 90,000 sq ft — creating an unparalleled open-air shopping experience.',
        tag: 'Atrium Design',
    },
    {
        icon: Layers,
        number: '02',
        title: 'Beamless Post Tension Technology',
        description: 'First to deploy Beamless Singaporean Post Tension Technology in India, enabling vast column-free spaces and a revolutionary structural design.',
        tag: 'Engineering',
    },
    {
        icon: Zap,
        number: '03',
        title: 'Kalzip & DGU Nano Glass',
        description: 'First Indian mall to use Kalzip roofing from Australia and DGU Nano Glass by Saint Gobain, Italy — combining aesthetics with superior energy efficiency.',
        tag: 'Materials',
    },
    {
        icon: ArrowDown,
        number: '04',
        title: 'Travelators from 3rd Basement',
        description: 'First mall in India to install travelators starting from the 3rd basement level, ensuring seamless vertical mobility across all floors.',
        tag: 'Mobility',
    },
];

const specs = [
    { icon: Ruler, label: 'Floor Recession', value: '1.5m per floor', desc: 'Each floor recedes inward' },
    { icon: Building, label: 'Grand Entrance', value: '22m × 27m', desc: 'Width × Height' },
    { icon: Layers, label: 'Iconic Façade', value: '900 ft', desc: 'Continuous frontage' },
];

export default function ArchitecturalHighlights() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.08 });

    return (
        <section
            id='architecture'
            ref={ref as React.RefObject<HTMLElement>}
            className='py-20 lg:py-28 relative overflow-hidden'
            style={{
                background: 'linear-gradient(180deg, oklch(0.12 0.035 255) 0%, oklch(0.16 0.04 255) 100%)',
            }}
        >
            {/* Decorative */}
            <div
                className='absolute inset-0 opacity-5 pointer-events-none'
                style={{
                    backgroundImage: `radial-gradient(circle at 20% 50%, oklch(0.72 0.14 75), transparent 50%), radial-gradient(circle at 80% 20%, oklch(0.72 0.14 75), transparent 40%)`,
                }}
            />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Header */}
                <div
                    className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className='flex items-center justify-center gap-3 mb-4'>
                        <div className='section-divider' />
                        <span
                            className='font-body text-sm font-semibold tracking-widest uppercase'
                            style={{ color: 'oklch(0.72 0.14 75)' }}
                        >
                            Architectural Excellence
                        </span>
                        <div className='section-divider' />
                    </div>
                    <h2
                        className='font-display font-bold text-4xl sm:text-5xl leading-tight mb-4'
                        style={{ color: 'oklch(0.97 0.01 90)' }}
                    >
                        Firsts in{' '}
                        <span style={{ color: 'oklch(0.72 0.14 75)' }}>India</span>
                    </h2>
                    <p
                        className='font-body text-base sm:text-lg max-w-2xl mx-auto'
                        style={{ color: 'oklch(0.68 0.015 240)' }}
                    >
                        Z Square Mall broke new ground with pioneering construction techniques
                        and materials never before used in Indian retail architecture.
                    </p>
                </div>

                {/* Firsts Grid */}
                <div className='grid sm:grid-cols-2 gap-6 mb-16'>
                    {firsts.map((item, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl p-6 sm:p-8 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{
                                background: 'oklch(0.20 0.045 255)',
                                border: '1px solid oklch(0.72 0.14 75 / 0.15)',
                                transitionDelay: `${i * 100 + 200}ms`,
                                boxShadow: '0 4px 24px oklch(0.10 0.03 255 / 0.4)',
                            }}
                        >
                            {/* Hover glow */}
                            <div
                                className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                                style={{ background: 'oklch(0.72 0.14 75 / 0.04)' }}
                            />
                            {/* Gold border on hover */}
                            <div
                                className='absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'
                                style={{ border: '1px solid oklch(0.72 0.14 75 / 0.4)' }}
                            />

                            <div className='flex items-start gap-5'>
                                <div className='flex-shrink-0'>
                                    <div
                                        className='w-14 h-14 rounded-xl flex items-center justify-center'
                                        style={{
                                            background: 'linear-gradient(135deg, oklch(0.72 0.14 75 / 0.2), oklch(0.72 0.14 75 / 0.05))',
                                            border: '1px solid oklch(0.72 0.14 75 / 0.3)',
                                        }}
                                    >
                                        <item.icon size={24} style={{ color: 'oklch(0.72 0.14 75)' }} />
                                    </div>
                                </div>
                                <div className='flex-1'>
                                    <div className='flex items-center gap-3 mb-2'>
                                        <span
                                            className='font-display font-bold text-3xl opacity-20'
                                            style={{ color: 'oklch(0.72 0.14 75)' }}
                                        >
                                            {item.number}
                                        </span>
                                        <span
                                            className='font-body text-xs font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full'
                                            style={{
                                                background: 'oklch(0.72 0.14 75 / 0.15)',
                                                color: 'oklch(0.85 0.11 82)',
                                            }}
                                        >
                                            {item.tag}
                                        </span>
                                    </div>
                                    <h3
                                        className='font-display font-semibold text-lg sm:text-xl mb-3 leading-snug'
                                        style={{ color: 'oklch(0.97 0.01 90)' }}
                                    >
                                        {item.title}
                                    </h3>
                                    <p
                                        className='font-body text-sm leading-relaxed'
                                        style={{ color: 'oklch(0.65 0.015 240)' }}
                                    >
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Design Specs */}
                <div
                    className={`rounded-3xl p-8 sm:p-10 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{
                        background: 'linear-gradient(135deg, oklch(0.72 0.14 75 / 0.12), oklch(0.72 0.14 75 / 0.04))',
                        border: '1px solid oklch(0.72 0.14 75 / 0.25)',
                    }}
                >
                    <h3
                        className='font-display font-semibold text-2xl text-center mb-8'
                        style={{ color: 'oklch(0.97 0.01 90)' }}
                    >
                        Design Specifications
                    </h3>
                    <div className='grid sm:grid-cols-3 gap-6'>
                        {specs.map((spec, i) => (
                            <div key={i} className='text-center'>
                                <div
                                    className='w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3'
                                    style={{ background: 'oklch(0.72 0.14 75 / 0.2)' }}
                                >
                                    <spec.icon size={20} style={{ color: 'oklch(0.72 0.14 75)' }} />
                                </div>
                                <div
                                    className='font-display font-bold text-2xl sm:text-3xl mb-1'
                                    style={{ color: 'oklch(0.72 0.14 75)' }}
                                >
                                    {spec.value}
                                </div>
                                <div
                                    className='font-body font-semibold text-sm mb-1'
                                    style={{ color: 'oklch(0.88 0.01 240)' }}
                                >
                                    {spec.label}
                                </div>
                                <div
                                    className='font-body text-xs'
                                    style={{ color: 'oklch(0.62 0.015 240)' }}
                                >
                                    {spec.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
