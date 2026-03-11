import { useScrollAnimation } from '../hooks/useScrollAnimation';
import {
    Car, Wifi, Accessibility, Baby, HeartPulse,
    Banknote, Users, Phone, Shield, Clock
} from 'lucide-react';

interface Service {
    icon: React.ElementType;
    title: string;
    location: string;
    detail: string;
    color: string;
}

const services: Service[] = [
    {
        icon: Car,
        title: 'Parking',
        location: '3-Level Basement',
        detail: '2,500 vehicles capacity across 3 basement levels',
        color: 'oklch(0.55 0.15 260)',
    },
    {
        icon: Wifi,
        title: 'Free WiFi',
        location: 'Mall-Wide',
        detail: 'High-speed complimentary WiFi throughout the mall',
        color: 'oklch(0.60 0.15 200)',
    },
    {
        icon: Accessibility,
        title: 'Wheelchairs & Strollers',
        location: '2nd Basement Lobby',
        detail: 'Available for guests with mobility needs',
        color: 'oklch(0.65 0.14 140)',
    },
    {
        icon: Baby,
        title: 'Baby Care Center',
        location: '3rd Floor',
        detail: 'Dedicated nursing and baby care facilities',
        color: 'oklch(0.62 0.14 320)',
    },
    {
        icon: HeartPulse,
        title: 'First Aid',
        location: 'Atrium Help Desk',
        detail: 'Trained staff and first aid kits available',
        color: 'oklch(0.60 0.18 25)',
    },
    {
        icon: Banknote,
        title: 'ATMs',
        location: 'Every Floor',
        detail: 'Near Lifts 8 & 9 on each floor',
        color: 'oklch(0.72 0.14 75)',
    },
    {
        icon: Users,
        title: "Driver's Lounge",
        location: 'Basement Level',
        detail: 'Comfortable waiting area for drivers',
        color: 'oklch(0.55 0.12 240)',
    },
    {
        icon: Phone,
        title: 'Cab-on-Call',
        location: 'Ground Floor Help Desk',
        detail: 'Taxi and cab booking assistance',
        color: 'oklch(0.58 0.14 160)',
    },
];

const additionalServices = [
    { icon: Shield, label: '24/7 Security' },
    { icon: Clock, label: 'Extended Hours' },
];

export default function VisitorServices() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

    return (
        <section
            id='facilities'
            ref={ref as React.RefObject<HTMLElement>}
            className='py-20 lg:py-28 relative overflow-hidden'
            style={{ background: 'oklch(0.97 0.005 240)' }}
        >
            {/* Decorative top border */}
            <div
                className='absolute top-0 left-0 w-full h-1'
                style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.14 75 / 0.3), transparent)' }}
            />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
                            Guest Services
                        </span>
                        <div className='section-divider' />
                    </div>
                    <h2
                        className='font-display font-bold text-4xl sm:text-5xl leading-tight mb-4'
                        style={{ color: 'oklch(0.12 0.035 255)' }}
                    >
                        Visitor{' '}
                        <span style={{ color: 'oklch(0.72 0.14 75)' }}>Facilities</span>
                    </h2>
                    <p
                        className='font-body text-base sm:text-lg max-w-2xl mx-auto'
                        style={{ color: 'oklch(0.45 0.02 240)' }}
                    >
                        Every detail is designed for your comfort. From parking to baby care,
                        we've thought of everything.
                    </p>
                </div>

                {/* Services Grid */}
                <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10'>
                    {services.map((service, i) => (
                        <div
                            key={i}
                            className={`group relative rounded-2xl p-5 sm:p-6 transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{
                                background: 'white',
                                border: '1px solid oklch(0.90 0.01 240)',
                                transitionDelay: `${i * 60}ms`,
                                boxShadow: '0 2px 16px oklch(0.12 0.035 255 / 0.06)',
                            }}
                        >
                            {/* Hover color bar */}
                            <div
                                className='absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                style={{ background: service.color }}
                            />

                            {/* Icon */}
                            <div
                                className='w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110'
                                style={{
                                    background: `${service.color}15`,
                                    border: `1px solid ${service.color}25`,
                                }}
                            >
                                <service.icon size={22} style={{ color: service.color }} />
                            </div>

                            <h3
                                className='font-display font-semibold text-base mb-1'
                                style={{ color: 'oklch(0.12 0.035 255)' }}
                            >
                                {service.title}
                            </h3>

                            <div
                                className='font-body text-xs font-semibold mb-2 flex items-center gap-1'
                                style={{ color: service.color }}
                            >
                                <span
                                    className='w-1.5 h-1.5 rounded-full flex-shrink-0'
                                    style={{ background: service.color }}
                                />
                                {service.location}
                            </div>

                            <p
                                className='font-body text-xs leading-relaxed'
                                style={{ color: 'oklch(0.55 0.02 240)' }}
                            >
                                {service.detail}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Additional services strip */}
                <div
                    className={`rounded-2xl p-5 flex flex-wrap items-center justify-center gap-6 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{
                        background: 'linear-gradient(135deg, oklch(0.12 0.035 255), oklch(0.18 0.04 255))',
                    }}
                >
                    {additionalServices.map((s, i) => (
                        <div key={i} className='flex items-center gap-2'>
                            <s.icon size={16} style={{ color: 'oklch(0.72 0.14 75)' }} />
                            <span
                                className='font-body text-sm font-medium'
                                style={{ color: 'oklch(0.88 0.01 240)' }}
                            >
                                {s.label}
                            </span>
                        </div>
                    ))}
                    <div
                        className='font-body text-sm'
                        style={{ color: 'oklch(0.65 0.015 240)' }}
                    >
                        + Concierge services available at all help desks
                    </div>
                </div>
            </div>
        </section>
    );
}
