import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ArchitecturalHighlights from './components/ArchitecturalHighlights';
import StoresAndBrands from './components/StoresAndBrands';
import DiningAndEntertainment from './components/DiningAndEntertainment';
import VisitorServices from './components/VisitorServices';
import Timings from './components/Timings';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
    return (
        <div className='font-body'>
            <Navbar />
            <main>
                <Hero />
                <About />
                <ArchitecturalHighlights />
                <StoresAndBrands />
                <DiningAndEntertainment />
                <VisitorServices />
                <Timings />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}
