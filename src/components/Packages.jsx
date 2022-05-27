import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation, A11y } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, A11y]);
const Packages = () => {
    const swiperRef = React.useRef(null);
    const packages = [1, 2, 3, 4, 5, 6];

    return (
        <section className="py-10">
            <div className="flex justify-between items-center w-mobile md:w-container_width mx-auto pb-3">
                <p className="text-lg text-purple">OUR PACKAGES</p>
                <div className="flex space-x-3">
                    <div
                        className="p-1.5 bg-purple text-white rounded cursor-pointer hover:bg-hover_ "
                        onClick={() => swiperRef.current.swiper.slidePrev()}
                    >
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </div>
                    <div
                        className="p-1.5 bg-purple text-white rounded cursor-pointer hover:bg-hover_"
                        onClick={() => swiperRef.current.swiper.slideNext()}
                    >
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
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="w-mobile md:w-container_width mx-auto">
                <div className="package-slider">
                    <Swiper
                        ref={swiperRef}
                        spaceBetween={10}
                        slidesPerView={1}
                        navigation={false}
                        // onSlideChange={() => console.log("slide change")}
                        // onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {packages.map((pkg, index) => {
                            const {} = pkg;
                            return (
                                <SwiperSlide key={index}>
                                    <div className="shadow bg-white rounded p-2 ">
                                        <div className="h-52 flex justify-center ">
                                            <img
                                                src="https://www.kevictours.com/wp-content/uploads/2017/06/2.gif"
                                                alt=""
                                                className="w-full object-cover"
                                            />
                                        </div>
                                        <div className="space-y-1.5">
                                            <p className="text-lg text-red-700 py-1">
                                                Southern National park, 4 days
                                                adventure{" "}
                                            </p>
                                            <div className="flex space-x-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p>
                                                    Transport in a spacious
                                                    Minivan with a pop-up roof
                                                </p>
                                            </div>
                                            <div className="flex space-x-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p>
                                                    Comprehensive game drives at
                                                    the parks.
                                                </p>
                                            </div>{" "}
                                            <div className="flex space-x-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p>All park entrance fees</p>
                                            </div>{" "}
                                            <div className="flex space-x-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p>
                                                    All government taxes and
                                                    levies
                                                </p>
                                            </div>
                                            <div className="flex space-x-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p>
                                                    All government taxes and
                                                    levies
                                                </p>
                                            </div>{" "}
                                            <div className="flex space-x-3">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-6 w-6 text-green-700"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    strokeWidth={2}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                    />
                                                </svg>
                                                <p>
                                                    Service of proffesional
                                                    English speaking guide
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xl text-center bg-gray-100 text-red-700 p-2 my-3 rounded-lg">
                                                    $ 60
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Packages;
