import HeroSection from '../../components/home/HeroSection';
import FeaturesSection from '../../components/home/FeaturesSection';
import TestimonialsSection from '../../components/home/TestimonialsSection';
import OurSpecialists from '../../components/home/OurSpecialists';
import Introduction from '../../components/home/Introduction';
import StandOut from '../../components/home/standout';




export default function Home() {
    return (
        <div>
            <HeroSection />
            <Introduction />
            <FeaturesSection />
            <StandOut/>
            <TestimonialsSection />
            <OurSpecialists />
            
        </div>
    );
}