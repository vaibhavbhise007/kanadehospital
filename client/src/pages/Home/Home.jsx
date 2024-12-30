import HeroSection from '../../components/home/HeroSection';
import FeaturesSection from '../../components/home/FeaturesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';

import OurSpecialists from '../../components/home/OurSpecialists';
import Introduction from '../../components/home/Introduction';

export default function Home() {
    return (
        <div>
            <HeroSection />
            <Introduction />
            <FeaturesSection />
            <TestimonialsSection />
            <OurSpecialists />
            
        </div>
    );
}