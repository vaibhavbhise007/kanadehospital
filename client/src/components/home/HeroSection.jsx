import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import drimage from '../../assets/dr.png'
import { useNavigate } from 'react-router-dom';



export default function HeroSection() {

    const navigate = useNavigate();
    return (
        <section className="relative bg-[#e6dfdf] text-black py-20 rounded overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Text Section */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Dr. Kanade Hospital & Harmony Laser Clinic
                        </h1>
                        <p className="text-lg font-serif mb-8">
                            Experience in various cosmetic gynecology and men's health treatments 
                            with minimal recovery time at Dr. Kanade Hospital.
                        </p>
                        <Button
                            onClick={() => navigate('/appointment')}
                            className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white px-6 py-3 text-lg rounded shadow-lg transition-transform transform hover:scale-105"
                        >
                            Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>

                    {/* Image Section with Eclipses */}
                    <div className="relative hidden md:block">
                        <div className="relative w-full h-full flex justify-center">
                            {/* Eclipse 1 */}
                            <div className="absolute bg-[rgb(107,71,55)] border-4 border-black opacity-10 rounded-full w-72 h-72 lg:w-96 lg:h-96 -top-10 -left-10 z-0"></div>

                            {/* Eclipse 2 */}
                            <div className="absolute bg-[rgb(107,71,55)] border-4 border-black opacity-10 rounded-full w-48 h-48 lg:w-64 lg:h-64 -bottom-20 right-10 z-0"></div>

                            {/* Glowing Line Eclipse */}
                            <div className="absolute bg-[#B39362] rounded-full w-96 h-96 border-[1px] border-dashed border-black opacity-30 lg:w-[28rem] lg:h-[28rem] top-5 left-5 animate-pulse"></div>

                            {/* Image */}
                            <img
                                src={drimage}
                                alt="Doctor"
                                className="relative max-h-[300px] md:max-h-[400px] z-10  rounded-b-xl drop-shadow-md"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        // <section className="pt-12 bg-[#e6dfdf]">
        //     <div className="container mx-auto px-1 md:px-12 flex flex-col lg:flex-row items-center">
        //         {/* Mobile View Layout */}
        //         <div className="flex flex-col lg:hidden items-center text-center">
        //             <h1 className="text-4xl md:text-5xl font-bold mb-6">
        //                 Dr. Kanade Hospital & Harmony Laser Clinic
        //             </h1>

        //             {/* Mobile Image */}
        //             <div className="mb-6">
        //                 <img src={drimage} alt="Mobile App" className="w-64 md:w-80 mx-auto" />
        //             </div>

        //             <div>

        //                 <p className="text-lg font-serif mb-8">
        //                     Experience in various cosmetic gynecology and men's health treatments with minimal recovery time at Dr. Kanade Hospital.
        //                 </p>
        //                 <Button className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white">
        //                     Book Appointment <ArrowRight className="ml-2 h-4 w-4" />
        //                 </Button>
        //             </div>
        //         </div>

        //         {/* Desktop View Layout */}
        //         <div className="hidden lg:flex lg:flex-row items-center w-screen m-[10px]">

        //     <div className="lg:w-1/2 text-left">
        //       <h2 className="text-2xl md:text-4xl font-bold text-green-800 mb-4">
        //         Amrutam Home App
        //       </h2>
        //       <p className="text-gray-700 text-base md:text-lg mb-6">
        //         The Amrutam Home App is your one-stop app for all things Ayurveda!
        //         Apart from mimicking the significant characteristics of our website,
        //         this app offers a wide range of additional features.
        //       </p>
        //       <p className="text-green-800 text-lg font-semibold mb-8">
        //         Get A Diet & Lifestyle Consultation With Ayurvedic Experts Across The Globe
        //       </p>
        //       <p className="text-lg font-bold text-green-800 mb-4">Get The App Now</p>
        //       <div className="flex gap-4">

        //       </div>
        //     </div>


        //     <div className="lg:w-1/2 relative flex justify-center lg:justify-end">

        //       <div className="absolute bg-black opacity-10 rounded-full w-64 h-64 lg:w-80 lg:h-80 -top-[15px] -left-[-100px]"></div>
        //       <div className="absolute bg-black opacity-10 rounded-full w-48 h-48 lg:w-64 lg:h-64 top-[280px] left-[390px]"></div>

        //       <img src={drimage} alt="Mobile App" className="relative z-10 w-auto" />
        //     </div>
        //   </div>
        //         <div className="max-w-7xl px-4 sm:px-6 lg:px-8 lg:hidden">
        //             <div className="grid md:grid-cols-2 gap-44 items-center">
        //                 {/* Text Section */}
        //                 <div className="space-y-6">
        //                     <h1 className="text-4xl md:text-5xl font-bold">
        //                         Dr. Kanade Hospital & Harmony Laser Clinic
        //                     </h1>
        //                     <p className="text-lg font-serif">
        //                         Experience in various cosmetic gynecology and men's health treatments
        //                         with minimal recovery time at Dr. Kanade Hospital.
        //                     </p>
        //                     <button className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white px-6 py-3 rounded flex items-center">
        //                         Book Appointment
        //                         <span className="ml-2 h-4 w-4">→</span>
        //                     </button>
        //                 </div>

        //                 {/* Image Section */}
        //                 <div className="relative flex justify-center lg:justify-end">
        //                     {/* First Ellipse */}
        //                     <div className="absolute bg-black opacity-10 rounded-full w-64 h-64 lg:w-[380px] lg:h-[380px] -top-10 right-5"></div>
        //                     {/* Second Ellipse */}
        //                     {/* <div className="absolute bg-black opacity-10  rounded-full w-48 h-48 lg:w-64 lg:h-64 top-[280px] left-40 z-10"></div> */}
        //                     <div
        //                         className="absolute bg-black opacity-10 rounded-full w-48 h-48 lg:w-[450px] lg:h-[450px] top-[225px] left-[110px] z-10 overflow-hidden"
        //                         style={{
        //                             clipPath: 'inset(0 0 50% 0)', // Cuts the circle in half
        //                         }}
        //                     ></div>
        //                     {/* Image */}
        //                     <div className="relative">
        //                         <img
        //                             src={drimage}
        //                             alt="Doctor"
        //                             className="relative h-[450px] w-full  z-0"
        //                         />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>


        //     </div>
        // </section>
    );
}