import HeroSection from '../../components/home/HeroSection';
import FeaturesSection from '../../components/home/FeaturesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import Services from '../../components/home/Services';
import OurSpecialists from '../../components/home/OurSpecialists';
import Introduction from '../../components/home/Introduction';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <Introduction />
            <FeaturesSection />
            <Services />
            <TestimonialsSection />
            <OurSpecialists />
            
        </div>
    );
}