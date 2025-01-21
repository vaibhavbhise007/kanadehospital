import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card } from "../../components/ui/Card";
import { Button } from "../../components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { fetchTreatments } from "../../stores/actions/treatmentAction";

export default function Treatments() {
  const dispatch = useDispatch();

  const { treatments, loading, error } = useSelector(
    (state) => state.treatment
  );

  // Fetch treatment data from the backend
  useEffect(() => {
    dispatch(fetchTreatments());
  }, [dispatch]);

  return (
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
          <div className="grid md:grid-cols-2 gap-12 mb-1">
            {treatments.map((treatment, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={treatment.img || "https://via.placeholder.com/800x400"} // Default image if none provided
                  alt={treatment.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {treatment.title}
                  </h2>
                  <p className="text-gray-600 font-serif mb-4">
                    {treatment.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {treatment.keypoints?.map((keypoints, idx) => (
                      <li
                        key={idx}
                        className="flex items-center font-serif text-gray-600"
                      >
                        <CheckCircle2 className="h-5 w-5 text-[rgb(107,71,55)] mr-2" />
                        {keypoints}
                      </li>
                    ))}
                  </ul>
                  <Button className="bg-[rgb(107,71,55)] hover:bg-[#B39362] text-white hover:text-black">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
