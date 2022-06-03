import React from "react";
import { Link } from "react-router-dom";
const WhatWeDo = () => {
    return (
        <div className="b py-10">
            <div className="text-center mb-7">
                <p className=" text-purple lowercase text-lg">WHAT WE DO</p>
                <p className="text-2xl uppercase ">
                    Get to know Metrosafaris and tours
                </p>
            </div>
            <div className="w-mobile md:w-container_width mx-auto grid  md:grid-cols-2 gap-8 items-center">
                <div className="flex justify-center">
                    <img
                        src="https://www.kevictours.com/wp-content/uploads/2020/12/masai-mara-safari-1024x683.jpg"
                        alt=""
                    />
                </div>
                <div className="space-y-4">
                    <p>
                        Metro Safaris (SS) Ltd is a legally registered tour and
                        travel company in South Sudan. We organize trips for
                        clients who are interested in visiting South Sudan. We
                        have also teamed up with partners from Uganda, Kenya,
                        Tanzania and Rwanda in order to make your visit to East
                        Africa seamless. Your visit to South Sudan is not like
                        any other tour of another country you have taken
                        previously because you are visiting the world’s youngest
                        country.
                    </p>

                    <Link to="/about">
                        <div className="flex items-center justify-end space-x-1 text-purple text-lg ">
                            <p>Learn more</p>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
