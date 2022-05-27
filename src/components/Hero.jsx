import React from "react";
import Navbar from "./Navbar";

const Hero = () => {
    return (
        <div
            className="w-full h-height bg-no-repeat bg-center bg-cover  text-white bg-blend-multiply"
            style={{
                backgroundImage:
                    "url(https://www.kevictours.com/wp-content/uploads/2017/06/Nairobi-national-Park-1024x640.jpg)",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
        >
            <div className=" h-full space-y-12 flex  flex-col items-start justify-center  w-mobile  md:w-3/4 mx-auto">
                <p className="text-5xl ">
                    Experience East African Adventure With Metrosafaris And
                    Tours
                </p>
                <p>
                    <button className=" uppercase p-3 bg-purple hover:bg-hover_color text-white rounded-full">
                        Join the next tour
                    </button>
                </p>
            </div>
        </div>
    );
};

export default Hero;
