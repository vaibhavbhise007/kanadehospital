import MedicalEmergencyBackgroundImg from "../../assets/MedicalEmergencyBackgroundImg.jpg";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Image2 from "../../assets/EmergencyImage2.jpg";

export default function MedicalEmergency() {
  return (
    <section className="relative md:p-10 ">
      {/* Background Image */}
      <div
        className="absolute opacity-30 inset-0 bg-cover -z-10"
        style={{
          backgroundImage: `url(${MedicalEmergencyBackgroundImg})`,
        }}
      ></div>

      {/* Main Container */}
      <div className="flex flex-col md:flex-row items-center md:items-start px-6 md:px-20 py-8 gap-6">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-12">
          <h1 className="text-4xl font-bold text-[rgb(46,26,18)]">Emergency</h1>
          <h1 className="text-4xl font-bold text-[rgb(148,101,81)]">
            Medical Care
          </h1>
          <p className="mt-4 text-gray-700">
            With access to rapid emergency assistance, it’s so important that
            you can continue to help others.
          </p>

          {/* Emergency Call Button */}
          <div className="mt-6 flex justify-center md:justify-start">
            <div className="bg-[rgb(202,127,96)] w-full md:w-2/3 sm:w-1/2 rounded-xl flex items-center justify-center py-3 relative group hover:bg-[rgb(107,71,55)] transition-all duration-300">
              <div className="flex items-center md:text-md lg:text-lg text-black group-hover:text-white transition-all duration-300">
                <AddIcCallIcon className="mr-2" />
                <p className="pl-2">+91-9420636736</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={Image2}
            alt="Emergency Care"
            className="rounded-xl w-full max-w-md md:max-w-full h-auto opacity-80"
          />
        </div>
      </div>
    </section>
  );
}
