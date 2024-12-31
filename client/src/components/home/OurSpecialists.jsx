import React from 'react'
import { Card } from '../../components/ui/Card';
import { Button } from '../ui/Button';
import { useNavigate } from 'react-router-dom';

export default function OurSpecialists() {

    const navigate = useNavigate();
    return (
        <div className="bg-[#e6dfdf] rounded-lg py-14 mb-8">
            <h2 className="text-3xl  font-bold text-black mb-6 text-center">Our Specialists</h2>
            <div className="grid md:grid-cols-2 gap-8 px-14 ">
                {[
                    {
                        id:1,
                        name: "Dr. Datta Kanade",
                        discription: "(M.B.B.S, D.G.O)",
                        role: "Cosmetic Gynaecologist",
                       
                        image: "src/assets/datta kanade.png"
                    },
                    {
                        id:2,
                        name: "Dr. Swati Kanade",
                        role: "Cosmetic Gynaecologist",
                        discription: "(M.B.B.S, D.A)",
                        image: "src/assets/swati kanade .png"

                    }
                   
                ].map((member, index) => (
                    <Card key={index} className="p-3 text-center bg-white hover:shadow-2xl transition-shadow">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 mx-auto bg-slate-400 object-fill rounded-full "
                            
                        />
                        <h3 className="text-xl font-serif text-black">{member.name}</h3>
                        <p className='text-gray-600 font-serif text-sm'>{member.discription}</p>
                        <p className="text-gray-600 font-serif text-sm">{member.role}</p>
                        <Button onClick={() => navigate(`/profile/${member.id}`)  } className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white w-full h-6 bottom-0 mt-2">
                                    View Profile 
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}


