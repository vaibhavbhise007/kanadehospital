import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTreatments } from "../../stores/actions/treatmentAction";
import Loader from "../../components/Loader/Loader";
import TreatmentCard from "../../components/ui/TreatmentCard";
import bgimg from "../../assets/bgdoctor.jpg";

export default function Treatments() {
  const dispatch = useDispatch();
  const { treatments, loading, error } = useSelector((state) => state.treatment);

  useEffect(() => {
    dispatch(fetchTreatments());
  }, [dispatch]);

  const [xloading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Simulate loading time
    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="flex flex-col">
      {xloading ? (
        <div className="flex justify-center items-center bg-white h-screen">
          <Loader />
        </div>
      ) : (
        <div>
          <div className="bg-white pt-24">
            <div className="relative py-16">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center  w-full text-black">
                  <div
                                className="absolute opacity-100 inset-0 bg-cover z-0"
                                style={{ backgroundImage: `url(${bgimg || ""})` }}
                              ></div>
                  <h1 className="text-4xl font-bold mb-4 relative">Our Treatments</h1>
                  <p className="text-lg font-serif text-gray-600 relative">
                    Advanced laser treatments for better outcomes
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {loading && <p className="text-center text-gray-600">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && treatments.length === 0 && (
              <p className="text-center text-gray-600">No treatments available at the moment.</p>
            )}

            {!loading && !error && treatments.length > 0 && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8">
                {treatments.map((treatment) => (
                  <TreatmentCard
                    key={treatment._id} // FIXED: Added key prop
                    imageSrc={treatment.img}
                    title={treatment.title}
                    description={treatment.about}
                    readMorePath={`/treatments/${treatment._id}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
