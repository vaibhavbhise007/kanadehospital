import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fetchTreatments } from "../../stores/actions/treatmentAction";
import Loader from "../../components/Loader/Loader";


export default function Treatments() {
  const dispatch = useDispatch();

  const { treatments, loading, error } = useSelector(
    (state) => state.treatment
  );

  // Fetch treatment data from the backend
  useEffect(() => {
    dispatch(fetchTreatments());
  }, [dispatch]);

  const [xloading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoadComplete = () => setLoading(false);
    const timer = setTimeout(handleLoadComplete, 1000); // Simulate loading time

    return () => clearTimeout(timer); // Cleanup
  }, []);

  return (
    <div className="flex flex-col">
      {xloading ? (
        <div className="flex justify-center items-center bg-white h-screen ">
          <Loader />{" "}
        </div>
      ) : (

        <div className="bg-white pt-16">
          <div className="relative py-16 bg-[#e6dfdf]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center text-black">
                <h1 className="text-4xl font-bold mb-4">Our Treatments</h1>
                <p className="text-lg font-serif text-gray-600">
                  Advanced laser treatments for better outcomes
                </p>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {loading && <p className="text-center text-gray-600">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}

            {!loading && !error && treatments.length === 0 && (
              <p className="text-center text-gray-600">
                No treatments available at the moment.
              </p>
            )}

            {!loading && !error && treatments.length > 0 && (
              <div className="grid md:grid-cols-4 gap-4 lg:px-10 mb-8">
                {treatments.map((treatment, index) => (
                  <Card key={index} className="overflow-hidden  hover:shadow-2xl rounded-sm transition-transform hover:scale-105 px-2 py-2">
                    <img
                      src={treatment.img || "https://via.placeholder.com/800x400"} // Default image if none provided
                      alt={treatment.title}
                      className="w-full h-3/2 object-cover mb-3"
                    />
                    <div className="">
                      <h2 className="text-xl font-bold flex justify-center   text-gray-900 mb-4">
                        {treatment.title}
                      </h2>
                      <p className="text-gray-600   font-serif  text-sm mb-4">
                        {treatment.description}
                      </p>


                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

     
    </div>

  );
}
