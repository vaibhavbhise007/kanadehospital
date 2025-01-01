import { Award, Users, Heart, Target, Globe } from 'lucide-react';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import firstimg from '../../assets/about1.jpg';
import d1 from '../../assets/datta kanade.png';


export default function About() {
    return (
        <div className="bg-white">
            <div className="relative py-16 mb-8 bg-[#e6dfdf]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-black">
                        <h1 className="text-4xl font-bold mb-4">About Dr. Kanade Hospital</h1>
                        <p className="text-lg font-serif text-gray-600">Leading the way in advanced Laser surgery for piles, fistulas, fissures, varicose veins, and more. </p>
                    </div>
                </div>
            </div>


            <div className='relative flex flex-col md:flex-row  mt-3 items-center border-1 border-black mb-8 bg-[#e9b294]'>

                <div className="md:w-1/2 px-7 py-8 ">
                    <h1 className="text-4xl font-bold text-[rgb(107,71,55)] leading-tight">
                        .<span className="text-black">.</span>
                    </h1>
                    <h1 className="text-4xl font-bold text-[rgb(107,71,55)] leading-tight mt-2">
                       . <span className="text-black">.</span>
                    </h1>
                </div>
                <div className="md:w-1/2 px-6 py-8">
                    <img
                        src="" // Replace with your actual image URL
                        alt="Healthcare team"
                        className="rounded-md shadow-lg h-[220px] w-[700px]"
                    />
                </div>
            </div>


            <div className='bg-[#e6dfdf] '>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-[60%,40%] gap-8 items-center">
                        {/* Text Section */}
                        <div>
                            <h2 className="text-3xl font-bold text-black mb-4">
                                About Dr. Datta Kanade
                            </h2>
                            <div className="w-24 h-1 bg-[rgb(107,71,55)] mb-6"></div>
                            <p className="text-black text-md font-serif mb-4">
                                Dr. Datta Kanade is a highly qualified medical professional holding an MBBS degree and a DGO specialization. He is an accomplished Gynaecologist with extensive experience in the field of Cosmetic Gynaecology and Laparoscopic Surgery. His expertise extends to being an Obstetrician as well as a renowned specialist in NDVH (Non-Descent Vaginal Hysterectomy) and vNOTE (Vaginal Natural Orifice Transluminal Endoscopic Surgery) Hysterectomy techniques. With a dedication to providing exceptional care, Dr. Kanade combines his surgical precision with a compassionate approach to address the diverse needs of his patients.
                            </p>

                            <button className="bg-[rgb(107,71,55)] text-white px-6 py-2 rounded-full shadow-lg hover:bg-red-700">
                                Read More
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center">
                            <img
                                src={d1} // Replace with the actual image path
                                alt="Dr. Datta Kanade"
                                className="rounded-md shadow-lg"
                            />
                        </div>
                    </div>
                </div>

            </div>


            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
                <div className="grid md:grid-cols-2 gap-12 items-center ">
                    <div>
                        <div className='flex'>
                            <Target className='h-10 w-10 text-[rgb(107,71,55)] mr-4' />
                            <div>
                                <h2 className="text-2xl font-serif text-[rgb(107,71,55)] mb-6">Our Vision</h2>
                            </div>
                        </div>
                        <p className="text-black font-serif mb-6">
                            Excellence First and Always
                        </p>

                        <div className='flex'>
                            <Globe className='h-10 w-10 text-[rgb(107,71,55)] mr-4' />
                            <div>
                                <h2 className="text-2xl font-serif text-[rgb(107,71,55)] mb-6">Our Mission</h2>
                            </div>
                        </div>
                        <p className="text-black font-serif flex items-center">
                            Compassionate Quality Healthcare
                        </p>
                    </div>
                </div>
            </div>

            <div className='bg-[#e6dfdf] '>
            <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-8">
            <div className="grid md:grid-cols-3 gap-8 ">
                {[
                    {
                        icon: <Award className="h-8 w-8 text-[rgb(107,71,55)] " />,
                        title: "15+ Years Experience",
                        description: "Dedicated years of service in advanced medical care"
                    },
                    {
                        icon: <Users className="h-8 w-8 text-[rgb(107,71,55)]" />,
                        title: "10,000+ Patients",
                        description: "Successfully treated patients from across the country"
                    },
                    {
                        icon: <Heart className="h-8 w-8 text-[rgb(107,71,55)]" />,
                        title: "98% Success Rate",
                        description: "High success rate with minimal recovery time"
                    }
                ].map((stat, index) => (
                    <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow bg-white">
                        <div className="flex flex-col items-center">
                            {stat.icon}
                            <h3 className="mt-4 text-xl font-serif text-black">{stat.title}</h3>
                            <p className="mt-2 text-gray-600 font-serif">{stat.description}</p>
                        </div>
                    </Card>
                ))}
            </div>
            </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Dr. Datta Kanade",
                            discription: "(M.B.B.S, D.G.O)",
                            role: "Cosmetic Gynaecologist",

                            image: "src/assets/datta kanade.png"
                        },
                        {
                            name: "Dr. Swati Kanade",
                            role: "Cosmetic Gynaecologist",
                            discription: "(M.B.B.S, D.A)",
                            image: "src/assets/swati kanade .png"

                        },
                        {
                            name: "Dr. Rajesh Patel",
                            role: "Specialist",
                            image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=300"
                        }
                    ].map((member, index) => (
                        <Card key={index} className="p-6 text-center hover:shadow-2xl transition-shadow">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mx-auto mb-4  bg-slate-400"
                            />
                            <h3 className="text-xl font-serif text-gray-900">{member.name}</h3>
                            <p className="text-gray-600 font-serif">{member.role}</p>
                            <Button
                                className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white w-full h-8 mt-2"
                            >
                                View Profile
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}