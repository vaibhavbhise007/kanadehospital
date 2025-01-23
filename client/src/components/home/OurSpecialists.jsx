import React from "react";
import { Card } from "../../components/ui/Card";
import { Button } from "../ui/Button";
import { useNavigate } from "react-router-dom";
import dattakanade from "../../assets/dattakanade.png";
import swatikanade from "../../assets/swatikanade.png";
import bgimg from '../../assets/bgdoctor.jpg';

export default function OurSpecialists() {
  const navigate = useNavigate();

  const specialists = [
    {
      id: 1,
      name: "Dr. Datta Kanade",
      description: "(M.B.B.S, D.G.O)",
      role: "Cosmetic Gynaecologist",
      image: dattakanade,
    },
    {
      id: 2,
      name: "Dr. Swati Kanade",
      role: "Cosmetic Gynaecologist",
      description: "(M.B.B.S, D.A)",
      image: swatikanade,
    },
  ];

  return (
    <div className="relative py-8">
      <div
        className="absolute inset-0 -z-50 bg-cover"
        style={{
          backgroundImage: `url(${bgimg})`,
          opacity: 0.5,
        }}
      ></div>

      <h2 className="text-4xl font-bold text-black mb-10 text-center">
        Meet Our Specialists
      </h2>

      <div className="flex flex-wrap justify-center  gap-6 px-14">
        {specialists.map((member) => (
          <Card
            key={member.id}
            className="p-3 text-center w-60 bg-white hover:shadow-2xl transition-shadow "
          >
            <img
              src={member.image}
              alt={`Photo of ${member.name}`}
              className="w-32 h-40 mx-auto bg-slate-400 object-fill rounded-full"
            />
            <h3 className="text-xl font-serif text-black">{member.name}</h3>
            <p className="text-gray-600 font-serif text-sm">
              {member.description}
            </p>
            <p className="text-gray-600 font-serif text-sm">{member.role}</p>
            <Button
              onClick={() => navigate(`/profile/${member.id}`)}
              className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white w-28 h-8 mt-2"
              aria-label={`View Profile of ${member.name}`}
            >
              View Profile
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
