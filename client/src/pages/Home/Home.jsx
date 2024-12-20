// export default function Home() {
//     return (
//         <div>
//             <h1>Home</h1>
//             <p>Welcome to the Home page!</p>
//         </div>
//     )
// }


import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
    };

    const images = [
        {
            src: "src/assets/img1.jpg",
            alt: "Slide 1",
            caption: "Your Health, Our Focus",
        },
        {
            src: "src/assets/img2.jpg",
            alt: "Slide 2",
            caption: "Dedicated Medical Care",
        },
        {
            src: "src/assets/img3.jpg",
            alt: "Slide 3",
            caption: "Compassionate Professionals",
        },
    ];

    return (
        <div>
            {/* Hero Section with Scrolling Carousel */}
            <section>
                <Slider {...carouselSettings}>
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-96 object-cover"
                            />
                            <div className="absolute bottom-4 left-4 bg-opacity-70 bg-black text-white px-4 py-2 rounded">
                                <h3 className="text-lg font-bold">{image.caption}</h3>
                            </div>
                        </div>
                    ))}
                </Slider>
            </section>

            

            {/* Features Section */}
            <section className="container mx-auto my-8 px-4">
                <h2 className="text-3xl font-bold text-center mb-6">Our Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-4 bg-blue-100 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">SUI</h3>
                        <p> SUI stands for Stress Urinary Incontinence. It is a condition that causes urine leakage during physical activities that increase abdominal pressure, such as coughing, sneezing, laughing, or exercise</p>
                    </div>
                    <div className="p-4 bg-blue-100 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Vaginal Tightening</h3>
                        <p>his surgical procedure involves tightening the vaginal walls by removing excess tissue. It is typically used for women who have experienced significant vaginal laxity due to childbirth or aging.</p>
                    </div>
                    <div className="p-4 bg-blue-100 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Vaginal Rejuvenation</h3>
                        <p>Vaginal rejuvenation is a general term used to describe a range of treatments aimed at improving the appearance and function of the vagina. These treatments can address issues such as vaginal dryness, laxity, and decreased sensitivity.</p>
                    </div>

                    <div className="p-4 bg-blue-100 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">G-shot or O-shot</h3>
                        <p> Both G-Shot and O-Shot are considered minimally invasive procedures with potential side effects. It's essential to weigh the risks and benefits before making a decision.</p>
                    </div>
                    <div className="p-4 bg-blue-100 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Expert Staff</h3>
                        <p>Our team consists of highly skilled and experienced professionals.</p>
                    </div>
                    <div className="p-4 bg-blue-100 rounded shadow">
                        <h3 className="text-xl font-bold mb-2">Modern Facilities</h3>
                        <p>State-of-the-art equipment and technology for accurate diagnosis and treatment.</p>
                    </div>
                </div>
            </section>

            {/* Call-to-Action Section */}
            <section className="bg-green-400 py-8">
                <div className="container mx-auto text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
                    <p className="text-lg mb-6">Contact us today to book an appointment or learn more about our services.</p>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-full shadow hover:bg-red-700">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
}
