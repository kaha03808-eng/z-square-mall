import { useState } from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ShoppingBag, Filter } from 'lucide-react';

type Category = 'All' | 'Department Stores' | 'Fashion & Apparel' | 'Electronics & Home' | 'Footwear & Accessories' | 'Specialty';

interface Brand {
    name: string;
    category: Exclude<Category, 'All'>;
    floor?: string;
}

const brands: Brand[] = [
    // Department Stores
    { name: 'Lifestyle', category: 'Department Stores', floor: 'G–2F' },
    { name: 'Westside', category: 'Department Stores', floor: '1F' },
    { name: 'Globus', category: 'Department Stores', floor: '2F' },
    { name: 'Pantaloons', category: 'Department Stores', floor: '1F' },
    { name: 'Marks & Spencer', category: 'Department Stores', floor: 'GF' },
    // Fashion & Apparel
    { name: 'Louis Philippe', category: 'Fashion & Apparel', floor: '1F' },
    { name: 'Jack & Jones', category: 'Fashion & Apparel', floor: '1F' },
    { name: 'Van Heusen', category: 'Fashion & Apparel', floor: '1F' },
    { name: 'Calvin Klein', category: 'Fashion & Apparel', floor: 'GF' },
    { name: 'U.S. Polo Assn', category: 'Fashion & Apparel', floor: '1F' },
    { name: 'Vero Moda', category: 'Fashion & Apparel', floor: '1F' },
    { name: 'Tommy Hilfiger', category: 'Fashion & Apparel', floor: 'GF' },
    { name: 'Levi\'s', category: 'Fashion & Apparel', floor: '1F' },
    { name: 'Peter England', category: 'Fashion & Apparel', floor: '1F' },
    { name: 'Manyavar', category: 'Fashion & Apparel', floor: '2F' },
    // Electronics & Home
    { name: 'Reliance Digital', category: 'Electronics & Home', floor: '2F' },
    { name: 'HP', category: 'Electronics & Home', floor: '2F' },
    { name: 'IFB Point', category: 'Electronics & Home', floor: '2F' },
    { name: 'Home Centre', category: 'Electronics & Home', floor: '3F' },
    // Footwear & Accessories
    { name: 'Asics', category: 'Footwear & Accessories', floor: '1F' },
    { name: 'Inc 5', category: 'Footwear & Accessories', floor: '1F' },
    { name: 'Lenskart', category: 'Footwear & Accessories', floor: 'GF' },
    { name: 'Jockey', category: 'Footwear & Accessories', floor: '1F' },
    { name: 'Bagline', category: 'Footwear & Accessories', floor: '1F' },
    // Specialty
    { name: 'Hamleys', category: 'Specialty', floor: '3F' },
    { name: 'Crossword', category: 'Specialty', floor: '2F' },
    { name: 'Himalaya', category: 'Specialty', floor: 'GF' },
];

const categories: Category[] = [
    'All',
    'Department Stores',
    'Fashion & Apparel',
    'Electronics & Home',
    'Footwear & Accessories',
    'Specialty',
];

const categoryColors: Record<Exclude<Category, 'All'>, string> = {
    'Department Stores': 'oklch(0.55 0.15 260)',
    'Fashion & Apparel': 'oklch(0.60 0.14 320)',
    'Electronics & Home': 'oklch(0.55 0.14 200)',
    'Footwear & Accessories': 'oklch(0.58 0.14 140)',
    'Specialty': 'oklch(0.72 0.14 75)',
};

export default function StoresAndBrands() {
    const [activeCategory, setActiveCategory] = useState<Category>('All');
    const { ref, isVisible } = useScrollAnimation({ threshold: 0.05 });

    const filtered = activeCategory === 'All'
        ? brands
        : brands.filter(b => b.category === activeCategory);

    return (
        <section
            id='stores'
            ref={ref as React.RefObject<HTMLElement>}
            className='py-20 lg:py-28 relative overflow-hidden'
            style={{ background: 'oklch(0.97 0.005 240)' }}
        >
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
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
                            150+ Brands
                        </span>
                        <div className='section-divider' />
                    </div>
                    <h2
                        className='font-display font-bold text-4xl sm:text-5xl leading-tight mb-4'
                        style={{ color: 'oklch(0.12 0.035 255)' }}
                    >
                        Stores &amp;{' '}
                        <span style={{ color: 'oklch(0.72 0.14 75)' }}>Brands</span>
                    </h2>
                    <p
                        className='font-body text-base sm:text-lg max-w-2xl mx-auto'
                        style={{ color: 'oklch(0.45 0.02 240)' }}
                    >
                        From global luxury labels to beloved Indian brands — discover an unmatched
                        retail universe under one roof.
                    </p>
                </div>

                {/* Filter Bar */}
                <div
                    className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                >
                    <div
                        className='flex items-center gap-2 mr-2'
                        style={{ color: 'oklch(0.55 0.02 240)' }}
                    >
                        <Filter size={14} />
                        <span className='font-body text-xs font-medium hidden sm:inline'>Filter:</span>
                    </div>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className='px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 hover:scale-105'
                            style={{
                                background: activeCategory === cat
                                    ? 'linear-gradient(135deg, oklch(0.72 0.14 75), oklch(0.82 0.12 80))'
                                    : 'oklch(0.92 0.01 240)',
                                color: activeCategory === cat
                                    ? 'oklch(0.12 0.035 255)'
                                    : 'oklch(0.38 0.02 240)',
                                boxShadow: activeCategory === cat
                                    ? '0 4px 16px oklch(0.72 0.14 75 / 0.3)'
                                    : 'none',
                                border: activeCategory === cat
                                    ? 'none'
                                    : '1px solid oklch(0.85 0.01 240)',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Brand Count */}
                <div
                    className='text-center mb-6'
                    style={{ color: 'oklch(0.55 0.02 240)' }}
                >
                    <span className='font-body text-sm'>
                        Showing <strong style={{ color: 'oklch(0.72 0.14 75)' }}>{filtered.length}</strong> brands
                        {activeCategory !== 'All' && ` in ${activeCategory}`}
                    </span>
                </div>

                {/* Brands Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4'>
                    {filtered.map((brand, i) => (
                        <div
                            key={`${brand.name}-${i}`}
                            className={`group relative rounded-xl p-4 sm:p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover cursor-default ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                            style={{
                                background: 'white',
                                border: '1px solid oklch(0.90 0.01 240)',
                                transitionDelay: `${Math.min(i * 30, 400)}ms`,
                                boxShadow: '0 2px 12px oklch(0.12 0.035 255 / 0.06)',
                            }}
                        >
                            {/* Color accent top bar */}
                            <div
                                className='absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                style={{ background: categoryColors[brand.category] }}
                            />

                            {/* Brand initial avatar */}
                            <div
                                className='w-10 h-10 rounded-lg flex items-center justify-center mb-3 font-display font-bold text-sm transition-all duration-300 group-hover:scale-110'
                                style={{
                                    background: `${categoryColors[brand.category]}20`,
                                    color: categoryColors[brand.category],
                                    border: `1px solid ${categoryColors[brand.category]}30`,
                                }}
                            >
                                {brand.name.charAt(0)}
                            </div>

                            <div
                                className='font-body font-semibold text-sm leading-tight mb-1'
                                style={{ color: 'oklch(0.18 0.04 255)' }}
                            >
                                {brand.name}
                            </div>

                            {brand.floor && (
                                <div
                                    className='font-body text-xs'
                                    style={{ color: 'oklch(0.62 0.015 240)' }}
                                >
                                    Floor {brand.floor}
                                </div>
                            )}

                            <div
                                className='mt-2 inline-block font-body text-xs px-2 py-0.5 rounded-full'
                                style={{
                                    background: `${categoryColors[brand.category]}15`,
                                    color: categoryColors[brand.category],
                                }}
                            >
                                {brand.category.split(' ')[0]}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className='text-center mt-12'>
                    <div
                        className='inline-flex items-center gap-2 px-6 py-3 rounded-full font-body text-sm font-medium'
                        style={{
                            background: 'oklch(0.12 0.035 255 / 0.06)',
                            border: '1px solid oklch(0.12 0.035 255 / 0.12)',
                            color: 'oklch(0.38 0.02 240)',
                        }}
                    >
                        <ShoppingBag size={14} />
                        And many more exclusive brands await you at Z Square Mall
                    </div>
                </div>
            </div>
        </section>
    );
}
