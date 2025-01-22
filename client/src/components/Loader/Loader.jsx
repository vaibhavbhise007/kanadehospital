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
    

    // <div className="flex items-center justify-center h-screen">
    //   <DNA
    //     visible={true}
    //     height="100"
    //     width="100"
    //     ariaLabel="dna-loading"
    //     wrapperStyle={{}}
    //     wrapperClass="dna-wrapper"
    //   />
    // </div>

    
    <div aria-label="Loading..." role="status" className="flex justify-center items-center h-screen  w-full">
    <svg className="h-12 w-12 animate-spin stroke-black" viewBox="0 0 256 256">
      <line x1="128" y1="32" x2="128" y2="64" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
      <line x1="195.9" y1="60.1" x2="173.3" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
      <line x1="224" y1="128" x2="192" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
      <line x1="195.9" y1="195.9" x2="173.3" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
      <line x1="128" y1="224" x2="128" y2="192" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
      <line x1="60.1" y1="195.9" x2="82.7" y2="173.3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
      <line x1="32" y1="128" x2="64" y2="128" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
      <line x1="60.1" y1="60.1" x2="82.7" y2="82.7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line>
    </svg>
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


