import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Doctor1 from "../../assets/dattakanade.png";
import Doctor2 from "../../assets/swatikanade.png";
const doctorsData = [
  {
    id: 1,
    name: "Dr. Datta Kanade",
    qualification: "MBBS, DGO",
    department: "Gynaecologist",
    specialties: "Cosmetic Gynaecologist",
    experience: [
      "Extensive experience in Cosmetic Gynaecologist & Laparoscopic Surgeon",
      "Obstetrician and NDVH & vNOTE Hysterectomy Expert",
    ],
    timing: "Monday to Saturday – 11:00 AM - 3:00 PM",
    title: "Gynaecologist",
    image: Doctor1,
  },
  {
    id: 2,
    name: "Dr. Swati Kanade",
    qualification: "MBBS, DA",
    department: "Gynaecologist",
    specialties: "Cosmetic Gynaecologist",
    experience: [
      "Extensive experience in Cosmetic Gynaecologist & Anaesthesiologist",
      "Expert in intensivist",
    ],
    timing: "Monday to Friday – 11:00 AM - 3:00 PM",
    title: "Gynaecologist",
    image: Doctor2,
  },
];

const DoctorProfile = ({ doctor }) => {
  return (
    <section className="bg-gray-100 py-12 px-4">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-1 items-start">
        {/* Image Section */}
        <div className="flex justify-center">
          {doctor.id === 1 ? (
            <img
              src={Doctor1}
              alt={doctor.name}
              className="rounded-lg shadow-md h-[480px] w-[420px] transition-transform"
            />
          ) : (
            <img
              src={Doctor2}
              alt={doctor.name}
              className="rounded-lg shadow-md h-[450px] w-[420px] transition-transform"
            />
          )}
        </div>

        {/* Info Section */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h1 className="text-xl text-gray-700 font-semibold">
            <span className="text-red-600">Doctors</span> / {doctor.name}
          </h1>

          <div className="mt-6 space-y-4">
            <div>
              <h2 className="font-semibold text-gray-800">Qualification</h2>
              <p className="text-gray-600">• {doctor.qualification}</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">
                Medical Department
              </h2>
              <p className="text-gray-600">{doctor.department}</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">Specialties</h2>
              <p className="text-gray-600">• {doctor.specialties}</p>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">Experience</h2>
              <ul className="text-gray-600 list-disc ml-5">
                {doctor.experience.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-semibold text-gray-800">Timing</h2>
              <p className="text-gray-600">{doctor.timing}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default function Profile() {
  const { id } = useParams(); // Get doctor ID from URL
  const doctor = doctorsData.find((doc) => doc.id === parseInt(id, 10)); // Retrieve the correct doctor

  if (!doctor) {
    return <div>Doctor not found</div>;
  }

  return <DoctorProfile doctor={doctor} />;
}
