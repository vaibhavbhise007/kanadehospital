import React from "react";
import { ColorRing, BallTriangle, DNA } from "react-loader-spinner";

import logo from "../../assets/svg/kanadelogo.svg";
export default function Loader() {
  
  return (

      <div >
       
        loading...
      </div>
  );
}




export const LoaderWithImage = () => {
  return (
    <div style={{ position: "relative", width: "80px", height: "80px" }}>
      {/* Loader */}
      {/* <ColorRing
        visible={true}
        height="0"
        width="10"
        ariaLabel="color-ring-loading"
        wrapperStyle={{}}
        wrapperClass="color-ring-wrapper"
        colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
      /> */}
      {/* <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  > */}
      <DNA
        visible={true}
        height="100"
        width="100"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      >
        {/* Centered Image */}
        <img
          src={logo}
          alt="centered-icon"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100px", // Adjust size as needed
            height: "100px",
          }}
        />
      </DNA>
    </div>
  );
};


