import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Clock, ShoppingBag, Utensils, Film, Calendar } from 'lucide-react';

interface TimingCard {
    icon: React.ElementType;
    title: string;
    color: string;
    weekday: { days: string; hours: string };
    weekend: { days: string; hours: string };
    note?: string;
}

const timings: TimingCard[] = [
    {
        icon: ShoppingBag,
        title: 'Shops & Stores',
        color: 'oklch(0.72 0.14 75)',
        weekday: { days: 'Mon – Fri', hours: '11:00 AM – 9:30 PM' },
        weekend: { days: 'Sat – Sun', hours: '11:00 AM – 10:00 PM' },
        note: 'All retail stores & boutiques',
    },
    {
        icon: Utensils,
        title: 'Food Court',
        color: 'oklch(0.65 0.15 30)',
        weekday: { days: 'Mon – Fri', hours: '11:00 AM – 10:00 PM' },
        weekend: { days: 'Sat – Sun', hours: '11:00 AM – 10:30 PM' },
        note: '3rd Floor • All dining outlets',
    },
    {
        icon: Film,
        title: 'INOX Cinemas',
        color: 'oklch(0.55 0.15 260)',
        weekday: { days: 'Daily', hours: '10:45 AM – 12:00 AM' },
        weekend: { days: 'Daily', hours: '10:45 AM – 12:00 AM' },
        note: 'Show timings may vary',
    },
];

export default function Timings() {
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

    return (
        <section
            id='timings'
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
                    backgroundImage: `radial-gradient(circle at 70% 30%, oklch(0.72 0.14 75), transparent 50%)`,
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
                            Plan Your Visit
                        </span>
                        <div className='section-divider' />
                    </div>
                    <h2
                        className='font-display font-bold text-4xl sm:text-5xl leading-tight mb-4'
                        style={{ color: 'oklch(0.97 0.01 90)' }}
                    >
                        Mall{' '}
                        <span style={{ color: 'oklch(0.72 0.14 75)' }}>Timings</span>
                    </h2>
                    <p
                        className='font-body text-base sm:text-lg max-w-xl mx-auto'
                        style={{ color: 'oklch(0.68 0.015 240)' }}
                    >
                        We're open 7 days a week. Plan your perfect mall day with our
                        extended weekend hours.
                    </p>
                </div>

                {/* Timing Cards */}
                <div className='grid sm:grid-cols-3 gap-6 mb-10'>
                    {timings.map((timing, i) => (
                        <div
                            key={i}
                            className={`group rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                            style={{
                                background: 'oklch(0.20 0.045 255)',
                                border: `1px solid ${timing.color}25`,
                                transitionDelay: `${i * 150}ms`,
                                boxShadow: '0 4px 24px oklch(0.10 0.03 255 / 0.4)',
                            }}
                        >
                            {/* Card header */}
                            <div
                                className='p-5 sm:p-6'
                                style={{
                                    background: `linear-gradient(135deg, ${timing.color}20, ${timing.color}08)`,
                                    borderBottom: `1px solid ${timing.color}20`,
                                }}
                            >
                                <div className='flex items-center gap-3 mb-2'>
                                    <div
                                        className='w-10 h-10 rounded-xl flex items-center justify-center'
                                        style={{ background: `${timing.color}25` }}
                                    >
                                        <timing.icon size={20} style={{ color: timing.color }} />
                                    </div>
                                    <h3
                                        className='font-display font-bold text-lg'
                                        style={{ color: 'oklch(0.97 0.01 90)' }}
                                    >
                                        {timing.title}
                                    </h3>
                                </div>
                                {timing.note && (
                                    <p
                                        className='font-body text-xs'
                                        style={{ color: 'oklch(0.62 0.015 240)' }}
                                    >
                                        {timing.note}
                                    </p>
                                )}
                            </div>

                            {/* Hours */}
                            <div className='p-5 sm:p-6 space-y-4'>
                                {/* Weekday */}
                                <div
                                    className='rounded-xl p-4'
                                    style={{ background: 'oklch(0.16 0.04 255)' }}
                                >
                                    <div className='flex items-center gap-2 mb-2'>
                                        <Calendar size={12} style={{ color: timing.color }} />
                                        <span
                                            className='font-body text-xs font-semibold tracking-wide uppercase'
                                            style={{ color: timing.color }}
                                        >
                                            {timing.weekday.days}
                                        </span>
                                    </div>
                                    <div
                                        className='font-display font-semibold text-base'
                                        style={{ color: 'oklch(0.92 0.01 240)' }}
                                    >
                                        {timing.weekday.hours}
                                    </div>
                                </div>

                                {/* Weekend (only if different) */}
                                {timing.weekend.days !== timing.weekday.days && (
                                    <div
                                        className='rounded-xl p-4'
                                        style={{
                                            background: `${timing.color}10`,
                                            border: `1px solid ${timing.color}20`,
                                        }}
                                    >
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Calendar size={12} style={{ color: timing.color }} />
                                            <span
                                                className='font-body text-xs font-semibold tracking-wide uppercase'
                                                style={{ color: timing.color }}
                                            >
                                                {timing.weekend.days}
                                            </span>
                                        </div>
                                        <div
                                            className='font-display font-semibold text-base'
                                            style={{ color: 'oklch(0.92 0.01 240)' }}
                                        >
                                            {timing.weekend.hours}
                                        </div>
                                    </div>
                                )}

                                {/* Clock indicator */}
                                <div className='flex items-center gap-2 pt-1'>
                                    <Clock size={12} style={{ color: 'oklch(0.55 0.015 240)' }} />
                                    <span
                                        className='font-body text-xs'
                                        style={{ color: 'oklch(0.55 0.015 240)' }}
                                    >
                                        Open 7 days a week
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Holiday note */}
                <div
                    className={`rounded-2xl p-5 text-center transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{
                        background: 'oklch(0.72 0.14 75 / 0.08)',
                        border: '1px solid oklch(0.72 0.14 75 / 0.2)',
                    }}
                >
                    <p
                        className='font-body text-sm'
                        style={{ color: 'oklch(0.78 0.015 240)' }}
                    >
                        <span style={{ color: 'oklch(0.72 0.14 75)' }}>Note:</span>{' '}
                        Timings may vary on public holidays and special occasions.
                        Please call <strong style={{ color: 'oklch(0.85 0.11 82)' }}>+91-512-237-4444</strong> for the latest updates.
                    </p>
                </div>
            </div>
        </section>
    );
}
