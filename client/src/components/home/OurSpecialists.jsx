import React from 'react'
import { Card } from '../../components/ui/Card';

export default function OurSpecialists() {
    return (
        <div className="bg-[#afe9f1] rounded-lg py-20">
            <h2 className="text-3xl font-bold text-black mb-6 text-center">Our Specialists</h2>
            <div className="grid md:grid-cols-2 gap-8 px-16 py-8">
                {[
                    {
                        name: "Dr. Datta Kanade",
                        role: "Chief Surgeon",
                        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=300"
                    },
                    {
                        name: "Dr. Swati Kanade",
                        role: "Senior Surgeon",
                        image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=300"
                    }
                    
                ].map((member, index) => (
                    <Card key={index} className="p-6 text-center bg-slate-600 hover:shadow-2xl transition-shadow  ">
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                        />
                        <h3 className="text-xl font-semibold text-white">{member.name}</h3>
                        <p className="text-white">{member.role}</p>
                    </Card>
                ))}
            </div>
        </div>
    )
}


