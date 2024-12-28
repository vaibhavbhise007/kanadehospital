import React from 'react';

export default function Services() {
    return (
        <section>
            <div className="relative bg-[#afe9f1] text-black py-20">
                <h2 className="text-4xl font-bold mb-10 text-center text-black">Our Services</h2>
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-12">
                    {/* Cosmetic Gynecology Services */}
                    <div className="bg-[#eef1f1] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-[#C5A572]">Cosmetic Gynecology Services:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Solutions for stress urinary incontinence (SUI Treatment)</li>
                            <li>Tightening of the vaginal passage (Vaginal Tightening)</li>
                            <li>Treatment for chronic infections (Recurrent Vaginal Infections)</li>
                            <li>Revitalization of vaginal tissue (Vaginal Rejuvenation)</li>
                            <li>Relief from vaginal itching (Itching Treatment)</li>
                            <li>Advanced cosmetic gynecological procedures (G-Shot/O-Shot)</li>
                        </ul>
                    </div>

                    {/* Duplicate Cosmetic Gynecology Services (for Women) */}
                    <div className="bg-[#eef1f1] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-[#C5A572]"> Available Regular Services:</h3>
                        <ul className="list-disc pl-2 space-y-2">

                            <li>Advanced Surgeries Like :  <br />
                                1.Non-Descent Vaginal Hysterectomy (NDVH)<br />
                                2.Total Laparoscopic Hysterectomy (TLH)<br />
                                3.Vaginal Notes Hysterectomy Surgery (VNOTE)
                            </li>
                            <li>Surgical correction for blocked fallopian tubes (Infertility Treatments)</li>
                            
                            <li>Family Planning and Pregnancy Termination Services</li>
                            <li>Menopause Center</li>
                            <li>Laparoscopic Surgery</li>
                        </ul>
                    </div>

                    {/* Men's Health Services */}
                    <div className="bg-[#eef1f1] rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                        <h3 className="text-2xl font-bold mb-4 text-[#C5A572]">Men's Health Services:</h3>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Treatment for issues related to erection (Erectile Dysfunction)</li>
                            <li>Solutions for low penile sensitivity (Penile Sensitivity Issues)</li>
                            <li>Pain Management Services</li>
                            <li>Obesity Treatment Center</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
