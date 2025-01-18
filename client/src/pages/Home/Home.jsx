import HeroSection from "../../components/home/HeroSection";
// import FeaturesSection from "../../components/home/FeaturesSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import OurSpecialists from "../../components/home/OurSpecialists";
import Introduction from "../../components/home/Introduction";
// import StandOut from "../../components/home/standout";
import CampSection from "../../components/home/CampSection";
import MedicalDepartment from "../../components/home/MedicalDepartment";
import MedicalEmergency from "../../components/home/MedicalEmergency";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <CampSection />
      <MedicalDepartment />
      <MedicalEmergency />
      {/* <FeaturesSection /> */}
      {/* <StandOut /> */}
      <TestimonialsSection />
      <OurSpecialists />
    </div>
  );
}
