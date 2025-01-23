import Img1 from "../../assets/Department_Images/Img1.webp";
import Img2 from "../../assets/Department_Images/Img2.webp";
import Img3 from "../../assets/Department_Images/Img3.webp";
import Img4 from "../../assets/Department_Images/Img4.webp";
import backgroundImage1 from "../../assets/Department_Images/DepartmentsBackgroundImage.jpg";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";

export default function MedicalDepartment() {
  return (
    <section className="relative p-4 md:px-12 lg:px-36 pb-20">
      <div
        className="absolute opacity-40 inset-0 bg-cover -z-10"
        style={{
          backgroundImage: `url(${backgroundImage1})`,
        }}
      ></div>
      <div className="text-center text-4xl font-fira font-bold mb-6 py-6">
        Medical Department
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="flex flex-col gap-2">
          <img src={Img1} alt="" className="rounded-lg w-full" />
          <div className="relative p-4 pt-16 text-center cursor-default group bg-white h-72 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[rgb(107,71,55)] transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>
            <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-500 group-hover:text-white transition duration-300">
              <KeyboardDoubleArrowDownIcon />
            </span>
            <h1 className="font-bold text-lg relative z-20 group-hover:text-white transition duration-300">
              Cosmetic Gynecology
            </h1>
            <p className="relative z-20 mt-2  group-hover:text-white transition duration-300 text-sm">
              Cosmetic gynecology enhances the aesthetic and functional aspects
              of female genitalia through surgical and non-surgical procedures.
              It helps improve comfort, confidence, and sexual satisfaction for
              women experiencing issues due to childbirth, aging, or personal
              preferences.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative p-4 pt-10 text-center cursor-default group bg-white h-72 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[rgb(107,71,55)] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 group-hover:text-white transition duration-300">
              <KeyboardDoubleArrowUpIcon />
            </span>
            <h1 className="font-bold text-lg relative z-20 group-hover:text-white transition duration-300">
              Obstetrician
            </h1>
            <p className="relative z-20 mt-2 group-hover:text-white transition duration-300 text-sm">
              An obstetrician is a doctor specializing in pregnancy, childbirth,
              and postpartum care. They monitor maternal and fetal health,
              manage complications, and perform deliveries. Many are also
              gynecologists, providing comprehensive reproductive care.
            </p>
          </div>
          <img src={Img2} alt="" className="rounded-lg w-full" />
        </div>
        <div className="flex flex-col gap-2">
          <img src={Img3} alt="" className="rounded-lg w-full" />
          <div className="relative p-4 pt-10 text-center cursor-default group bg-white h-72 rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[rgb(107,71,55)] transform scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500"></div>
            <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-gray-500 group-hover:text-white transition duration-300">
              <KeyboardDoubleArrowDownIcon />
            </span>
            <h1 className="font-bold text-lg relative z-20 group-hover:text-white transition duration-300">
              Laparoscopic Surgeon
            </h1>
            <p className="relative z-20 mt-2 group-hover:text-white transition duration-300 text-sm">
              A laparoscopic surgeon is a specialist who performs minimally
              invasive surgeries using a laparoscope a thin, lighted tube with a
              camera. This technique involves small incisions, reducing pain,
              scarring, and recovery time. Laparoscopic surgery is commonly used
              in gynecology, gastroenterology, and general surgery like hernia
              repair.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="relative p-4 pt-10 text-center cursor-default group bg-white h-72\ rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-[rgb(107,71,55)] transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500"></div>
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-500 group-hover:text-white transition duration-300">
              <KeyboardDoubleArrowUpIcon />
            </span>
            <h1 className="font-bold text-lg relative z-20 group-hover:text-white transition duration-300">
              Anesthesiologist
            </h1>
            <p className="relative z-20 mt-2 group-hover:text-white transition duration-300 text-sm">
              An anesthesiologist is a medical doctor specializing in
              administering anesthesia to manage pain and ensure patient safety
              during surgeries and medical procedures. They monitor vital signs,
              adjust anesthesia levels, and provide pain relief before, during,
              and after operations.
            </p>
          </div>
          <img src={Img4} alt="" className="rounded-lg w-full" />
        </div>
      </div>
    </section>
  );
}
