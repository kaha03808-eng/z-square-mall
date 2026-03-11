import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Utensils, Coffee, Film, Gamepad2, Star, Users } from 'lucide-react';

type DiningTab = 'food-court' | 'fine-dining' | 'treats' | 'cinema' | 'kids';

interface DiningItem {
    name: string;
    detail?: string;
}

interface DiningCategory {
    id: DiningTab;
    label: string;
    icon: React.ElementType;
    floor?: string;
    color: string;
    items: DiningItem[];
    description: string;
}

const diningCategories: DiningCategory[] = [
    {
        id: 'food-court',
        label: 'Food Court',
        icon: Utensils,
        floor: '3rd Floor',
        color: 'oklch(0.65 0.15 30)',
        description: 'A vibrant food court with your favourite quick-service restaurants all under one roof.',
        items: [
            { name: "McDonald's", detail: 'Burgers & Fries' },
            { name: 'KFC', detail: 'Fried Chicken' },
            { name: 'Burger King', detail: 'Flame-Grilled Burgers' },
            { name: 'Pizza Hut', detail: 'Pizzas & Pastas' },
            { name: "Domino's", detail: 'Pizza Delivery' },
            { name: 'Vaango', detail: 'South Indian Cuisine' },
            { name: 'Wow! Momo', detail: 'Momos & More' },
        ],
    },
    {
        id: 'fine-dining',
        label: 'Fine Dining',
        icon: Star,
        color: 'oklch(0.72 0.14 75)',
        description: 'Indulge in premium dining experiences with curated menus and elegant ambiance.',
        items: [
            { name: 'Barbeque Nation', detail: 'Live Grill Dining' },
            { name: 'Ajmeri Darbar', detail: 'Authentic Mughlai' },
        ],
    },
    {
        id: 'treats',
        label: 'Sweet Treats',
        icon: Coffee,
        color: 'oklch(0.62 0.14 320)',
        description: 'Satisfy your sweet tooth with desserts, ice creams, and confectionery delights.',
        items: [
            { name: 'Baskin Robbins', detail: 'Ice Cream & Shakes' },
            { name: 'The Chocolate Room', detail: 'Chocolate Desserts' },
            { name: 'House of Candy', detail: 'Artisan Confectionery' },
            { name: 'Kwality Walls', detail: 'Ice Cream Parlour' },
        ],
    },
    {
        id: 'cinema',
        label: 'Cinema',
        icon: Film,
        color: 'oklch(0.55 0.15 260)',
        description: 'Experience the magic of cinema in premium comfort at INOX Insignia.',
        items: [
            { name: 'INOX Cinemas', detail: 'Insignia Premium Format' },
            { name: '4 Screens', detail: '~1,000 Total Seats' },
            { name: 'Dolby Sound', detail: 'Premium Audio Experience' },
            { name: 'Recliner Seats', detail: 'Insignia Luxury Seating' },
        ],
    },
    {
        id: 'kids',
        label: "Kids' Zone",
        icon: Gamepad2,
        color: 'oklch(0.60 0.15 140)',
        description: 'A world of fun and adventure for the little ones with exciting rides and games.',
        items: [
            { name: 'Fun City', detail: 'Indoor Amusement Park' },
            { name: 'Rides & Games', detail: 'For All Ages' },
            { name: 'Soft Play Area', detail: 'Toddler Friendly' },
            { name: 'Party Packages', detail: 'Birthday Celebrations' },
        ],
    },
];

export default function DiningAndEntertainment() {
    const [activeTab, setActiveTab] = useState<DiningTab>('food-court');
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

    const active = diningCategories.find(c => c.id === activeTab)!;

    return (
        <section
            id='dining'
            ref={ref as React.RefObject<HTMLElement>}
            className='py-20 lg:py-28 relative overflow-hidden'
            style={{
                background: 'linear-gradient(180deg, oklch(0.14 0.04 255) 0%, oklch(0.12 0.035 255) 100%)',
            }}
        >
            {/* Decorative */}
            <div
                className='absolute top-0 left-0 w-full h-1'
                style={{ background: 'linear-gradient(90deg, transparent, oklch(0.72 0.14 75 / 0.4), transparent)' }}
            />

            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
                {/* Header */}
                <div
                    className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div className='flex items-center justify-center gap-3 mb-4'>
                        <div className='section-divider' />
                        <span
                            className='font-body text-sm font-semibold tracking-widest uppercase'
                            style={{ color: 'oklch(0.72 0.14 75)' }}
                        >
                            Food & Fun
                        </span>
                        <div className='section-divider' />
                    </div>
                    <h2
                        className='font-display font-bold text-4xl sm:text-5xl leading-tight mb-4'
                        style={{ color: 'oklch(0.97 0.01 90)' }}
                    >
                        Dining &amp;{' '}
                        <span style={{ color: 'oklch(0.72 0.14 75)' }}>Entertainment</span>
                    </h2>
                    <p
                        className='font-body text-base sm:text-lg max-w-2xl mx-auto'
                        style={{ color: 'oklch(0.68 0.015 240)' }}
                    >
                        From quick bites to fine dining, blockbuster movies to kids' adventures —
                        Z Square Mall is your complete entertainment hub.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div
                    className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    {diningCategories.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveTab(cat.id)}
                            className='flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105'
                            style={{
                                background: activeTab === cat.id
                                    ? cat.color
                                    : 'oklch(0.22 0.045 255)',
                                color: activeTab === cat.id
                                    ? 'oklch(0.97 0.01 90)'
                                    : 'oklch(0.72 0.015 240)',
                                boxShadow: activeTab === cat.id
                                    ? `0 4px 16px ${cat.color}50`
                                    : 'none',
                                border: activeTab === cat.id
                                    ? 'none'
                                    : '1px solid oklch(0.30 0.04 255)',
                            }}
                        >
                            <cat.icon size={14} />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Active Category Content */}
                <div
                    className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    key={activeTab}
                >
                    {/* Category Header */}
                    <div
                        className='rounded-2xl p-6 sm:p-8 mb-6'
                        style={{
                            background: `linear-gradient(135deg, ${active.color}20, ${active.color}08)`,
                            border: `1px solid ${active.color}30`,
                        }}
                    >
                        <div className='flex flex-col sm:flex-row sm:items-center gap-4'>
                            <div
                                className='w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0'
                                style={{ background: `${active.color}25`, border: `1px solid ${active.color}40` }}
                            >
                                <active.icon size={26} style={{ color: active.color }} />
                            </div>
                            <div>
                                <div className='flex items-center gap-3 mb-1'>
                                    <h3
                                        className='font-display font-bold text-2xl'
                                        style={{ color: 'oklch(0.97 0.01 90)' }}
                                    >
                                        {active.label}
                                    </h3>
                                    {active.floor && (
                                        <span
                                            className='font-body text-xs font-semibold px-2.5 py-1 rounded-full'
                                            style={{
                                                background: `${active.color}20`,
                                                color: active.color,
                                                border: `1px solid ${active.color}40`,
                                            }}
                                        >
                                            {active.floor}
                                        </span>
                                    )}
                                </div>
                                <p
                                    className='font-body text-sm'
                                    style={{ color: 'oklch(0.68 0.015 240)' }}
                                >
                                    {active.description}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Items Grid */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                        {active.items.map((item, i) => (
                            <div
                                key={i}
                                className='group rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1'
                                style={{
                                    background: 'oklch(0.20 0.045 255)',
                                    border: `1px solid ${active.color}20`,
                                    boxShadow: '0 2px 12px oklch(0.10 0.03 255 / 0.3)',
                                }}
                            >
                                <div
                                    className='w-9 h-9 rounded-lg flex items-center justify-center mb-3 font-display font-bold text-sm transition-transform duration-300 group-hover:scale-110'
                                    style={{
                                        background: `${active.color}20`,
                                        color: active.color,
                                    }}
                                >
                                    {item.name.charAt(0)}
                                </div>
                                <div
                                    className='font-body font-semibold text-sm mb-1'
                                    style={{ color: 'oklch(0.92 0.01 240)' }}
                                >
                                    {item.name}
                                </div>
                                {item.detail && (
                                    <div
                                        className='font-body text-xs'
                                        style={{ color: 'oklch(0.58 0.015 240)' }}
                                    >
                                        {item.detail}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Cinema highlight */}
                {activeTab === 'cinema' && (
                    <div
                        className='mt-6 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6'
                        style={{
                            background: 'linear-gradient(135deg, oklch(0.55 0.15 260 / 0.15), oklch(0.55 0.15 260 / 0.05))',
                            border: '1px solid oklch(0.55 0.15 260 / 0.3)',
                        }}
                    >
                        <Film size={40} style={{ color: 'oklch(0.55 0.15 260)', flexShrink: 0 }} />
                        <div>
                            <h4
                                className='font-display font-bold text-xl mb-2'
                                style={{ color: 'oklch(0.97 0.01 90)' }}
                            >
                                INOX Insignia — Premium Cinema Experience
                            </h4>
                            <p
                                className='font-body text-sm'
                                style={{ color: 'oklch(0.68 0.015 240)' }}
                            >
                                4 state-of-the-art screens with approximately 1,000 seats total.
                                Insignia format offers luxury recliner seating, Dolby Atmos sound,
                                and an elevated movie-going experience. Open daily 10:45 AM – 12 AM.
                            </p>
                        </div>
                        <div className='flex gap-4 flex-shrink-0'>
                            <div className='text-center'>
                                <div
                                    className='font-display font-bold text-3xl'
                                    style={{ color: 'oklch(0.55 0.15 260)' }}
                                >
                                    4
                                </div>
                                <div
                                    className='font-body text-xs'
                                    style={{ color: 'oklch(0.62 0.015 240)' }}
                                >
                                    Screens
                                </div>
                            </div>
                            <div className='text-center'>
                                <div
                                    className='font-display font-bold text-3xl'
                                    style={{ color: 'oklch(0.55 0.15 260)' }}
                                >
                                    ~1K
                                </div>
                                <div
                                    className='font-body text-xs'
                                    style={{ color: 'oklch(0.62 0.015 240)' }}
                                >
                                    Seats
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Kids zone highlight */}
                {activeTab === 'kids' && (
                    <div
                        className='mt-6 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6'
                        style={{
                            background: 'linear-gradient(135deg, oklch(0.60 0.15 140 / 0.15), oklch(0.60 0.15 140 / 0.05))',
                            border: '1px solid oklch(0.60 0.15 140 / 0.3)',
                        }}
                    >
                        <Users size={40} style={{ color: 'oklch(0.60 0.15 140)', flexShrink: 0 }} />
                        <div>
                            <h4
                                className='font-display font-bold text-xl mb-2'
                                style={{ color: 'oklch(0.97 0.01 90)' }}
                            >
                                Fun City — Where Kids Rule!
                            </h4>
                            <p
                                className='font-body text-sm'
                                style={{ color: 'oklch(0.68 0.015 240)' }}
                            >
                                India's favourite indoor amusement brand, Fun City at Z Square Mall
                                offers thrilling rides, arcade games, soft play areas, and party
                                packages — making every visit an unforgettable adventure for children
                                of all ages.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
