import React from "react";
import { ColorRing, BallTriangle, DNA } from "react-loader-spinner";

import logo from "../../assets/svg/kanadelogo.svg";

export default function Loader() {

  return (

    // <div
    //   className="inline-block h-16 w-16 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    //   role="status">

    //   <img
    //     className="h-full w-full"
    //     src={logo}
    //     alt="Kanade Hospital"
    //     style={{ objectFit: "contain" }} />        
    // </div>

    <div className="flex items-center justify-center h-screen">
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}




export const LoaderWithImage = () => {
  return (
    // <div style={{ position: "relative", width: "80px", height: "80px" }}>

    //   <DNA
    //     visible={true}
    //     height="100"
    //     width="100"
    //     ariaLabel="dna-loading"
    //     wrapperStyle={{}}
    //     wrapperClass="dna-wrapper"
    //   >
    //     {/* Centered Image */}
    //     <img
    //       src={logo}
    //       alt="centered-icon"
    //       style={{
    //         position: "absolute",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //         width: "100px", // Adjust size as needed
    //         height: "100px",
    //       }}
    //     />
    //   </DNA>
    // </div>


    <div>
      <img src={logo} className="h-20 justify-center items-center animate-spin" />
    </div>
  );
};


