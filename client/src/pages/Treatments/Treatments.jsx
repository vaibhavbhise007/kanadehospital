import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTreatments } from "../../stores/actions/treatmentAction";
import Loader from "../../components/Loader/Loader";
import TreatmentCard from "../../components/ui/TreatmentCard";
import Skeleton from "react-loading-skeleton"; // Import Skeleton component
import "react-loading-skeleton/dist/skeleton.css"; // Import skeleton styles

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
    <div className="flex flex-col">
      <div className="bg-white pt-24">
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
          {loading ? (
            // Skeleton Loader when content is still loading
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8">
              {Array(6)
                .fill()
                .map((_, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <Skeleton height={200} width={300} />
                    <Skeleton height={30} width={200} className="mt-4" />
                    <Skeleton height={15} width={250} className="mt-2" />
                  </div>
                ))}
            </div>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : treatments.length === 0 ? (
            <p className="text-center text-gray-600">
              No treatments available at the moment.
            </p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-8">
              {treatments.map((treatment, index) => (
                <TreatmentCard
                  key={index}
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
    </div>
  );
}
