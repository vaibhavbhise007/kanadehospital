import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import bgimg from '../../assets/bgdoctor.jpg';
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbPage, BreadcrumbSeparator } from '../../components/ui/Breadcrumb';

function TreatmentsPage() {
    const { treatmentId } = useParams(); // Fetch treatmentId from URL
    const { treatments, loading, error } = useSelector(state => state.treatment);

    // Check for loading state or errors
    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    // Find the treatment based on treatmentId
    const treatment = treatments?.find(t => t._id === treatmentId);

    // If no treatment is found, show an error message
    if (!treatment) return <div className="text-center text-red-500">Treatment not found!</div>;

    return (
        <div className="flex flex-col">
            <div className="bg-white pt-24">
                <div className="relative py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px- lg:px-4">
                        {/* Background Image */}
                        <div className="absolute opacity-100 inset-0 bg-cover z-0" style={{ backgroundImage: `url(${bgimg || ''})` }}></div>

                        {/* Treatment Title */}
                        <div className='flex justify-center '>


                            <div className="relative text-4xl font-bold text-black z-10">
                                <h2>{treatment.title}</h2>
                            </div>

                            {/* Breadcrumbs - Fully Dynamic */}

                        </div>
                    </div>
                </div>
                <div className=" absolute z-10  items-center py-4 pl-16">
                    <Breadcrumb className="mb-4">
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to="/">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbLink as={Link} to="/treatments">Treatments</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage>{treatment.title}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Treatment Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center  p-4 px-16 pt-14">
                    <div className="">
                        <h2 className="text-3xl font-bold text-black">{treatment.title}</h2>
                        <p className="text-gray-600  text-lg font-serif mt-2">{treatment.about}</p>
                        <h2 className="text-2xl font-bold text-black">Overview: What is <span>{treatment.title}</span>?</h2>
                        <p className="text-gray-600  text-lg font-serif">
                            {treatment.description}</p>
                        <h2 className="text-2xl font-bold text-black">Causes And Risk Factors</h2>
                        <p className="text-gray-600  text-lg font-serif">{treatment.causes}</p>
                        <h2 className="text-2xl font-bold text-black">Symptoms of <span>{treatment.title}</span></h2>
                        <p className="text-gray-600  text-lg font-serif">{treatment.symptoms}</p>
                        <h2 className="text-2xl font-bold text-black">Treatment Details</h2>
                        <p className="text-gray-600  text-lg font-serif">{treatment.treatmentdetails}</p>
                        {/* <p className="text-gray-600 font-serif mt-4">{treatment.keypoints}</p> */}
                    </div>
                    <div className="flex justify-center">
                        {typeof treatment.img === 'string' ? (
                            <img src={treatment.img} alt={treatment.title} className="w-full max-h-96 object-cover rounded-lg shadow-md" />
                        ) : (
                            <div className="w-full h-96 bg-gray-200 flex items-center justify-center text-gray-500">
                                No Image Available
                            </div>
                        )}
                    </div>

                </div>


            </div>
        </div>
    );
}

export default TreatmentsPage;
