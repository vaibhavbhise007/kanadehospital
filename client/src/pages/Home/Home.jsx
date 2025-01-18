import HeroSection from "../../components/home/HeroSection";
// import FeaturesSection from "../../components/home/FeaturesSection";
import TestimonialsSection from "../../components/home/TestimonialsSection";
import OurSpecialists from "../../components/home/OurSpecialists";
import Introduction from "../../components/home/Introduction";
// import StandOut from "../../components/home/standout";
import CampSection from "../../components/home/CampSection";
import MedicalDepartment from "../../components/home/MedicalDepartment";
import MedicalEmergency from "../../components/home/MedicalEmergency";
import OurServices from "../../components/home/OurServices";
import FacilitiesSection from "../../components/home/FacilitiesSection";
export default function Home() {
  return (
    <div>
      <HeroSection />
      <Introduction />
      <CampSection />
      <MedicalDepartment />
      <MedicalEmergency />
      <OurServices />
      <FacilitiesSection />
      {/* <FeaturesSection /> */}
      {/* <StandOut /> */}
      {/* <TestimonialsSection /> */}
      <OurSpecialists />
    </div>
  );
}
