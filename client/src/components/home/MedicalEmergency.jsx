import MedicalEmergencyBackgroundImg from "../../assets/MedicalEmergencyBackgroundImg.jpg";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import Image2 from "../../assets/EmergencyImage2.jpg";
export default function MedicalEmergency() {
  return (
    <>
      <section className="relative p-10 bg-gradient-to-r from-white to-[rgb(107,71,55)]-500/50 pb-20">
        <div
          className="absolute opacity-30 inset-0 bg-cover -z-10"
          style={{
            backgroundImage: `url(${MedicalEmergencyBackgroundImg})`,
          }}
        ></div>
        <div className="px-20 flex flex-row py-8">
          <div className="basis-1/2 h-80 px-12">
            <h1 className="text-6xl text-center font-bold text-[rgb(46,26,18)]">
              Emergency
            </h1>
            <h1 className="text-5xl text-center font-bold text-[rgb(148,101,81)]">
              Medical Care
            </h1>
            <br />
            <p className="text-center">
              With access to rapid emergency assistance, It’s so important you
              can continue to help others.
            </p>
            <br />
            <br />
            <div className=" bg-[rgb(202,127,96)] p-4 w-60 rounded-xl flex flex-row relative left-28 group hover:bg-[rgb(107,71,55)]">
              <div className="basis-1/3  group-hover:text-white pl-4">
                <AddIcCallIcon />
              </div>
              <div className="basis-2/3 text-center text-lg group-hover:text-white">
                +91 9420636736
              </div>
            </div>
          </div>
          <div className="basis-1/2 h-80 opacity-80">
            <img src={Image2} alt="" className="rounded-xl" />
          </div>
        </div>
      </section>
    </>
  );
}
