import React from "react";

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
                    <p>
                        You are making history by being among the first few
                        tourists who have paid a visit to South Sudan. And we
                        are here to make it mesmerizing and memorable for you!
                        Whether you are visiting South Sudan for just one day or
                        for several weeks, we can provide the best itinerary
                        that suits your schedule at the most affordable price.
                    </p>
                    <div className="flex items-center justify-end space-x-1 text-red-700 text-lg ">
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
                </div>
            </div>
        </div>
    );
};

export default WhatWeDo;
