import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Navigation, Autoplay, A11y } from "swiper";

// install Swiper modules
SwiperCore.use([Navigation, Autoplay, A11y]);
const Testimonial = () => {
    const swiperRef = React.useRef(null);
    SwiperCore.use([Navigation, A11y]);
    return (
        <section className="bg-purple py-12">
            <div className="text-white w-mobile md:w-container_width mx-auto  grid  md:grid-cols-3 grid-cols-1 gap-6 md:gap-3  items-center ">
                <div className="space-y-3">
                    <p className="text-3xl">TESTIMONIALS</p>
                    <p>
                        See what people are saying about Metrosafaris And Tours
                    </p>
                </div>
                <div className="col-span-2">
                    <div className="testimonial-slider">
                        <Swiper
                            ref={swiperRef}
                            spaceBetween={10}
                            slidesPerView={1}
                            navigation={false}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                            }}
                            // onSlideChange={() => console.log("slide change")}
                            // onSwiper={(swiper) => console.log(swiper)}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                            }}
                        >
                            <div className="hidden md:block">
                                <div
                                    className="p-1.5 bg-white z-10 hover:bg-gray-100  border text-gray-900 rounded-full cursor-pointer left-0 absolute  "
                                    onClick={() =>
                                        swiperRef.current.swiper.slidePrev()
                                    }
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
                                    className="p-1.5 bg-white z-10 hover:bg-gray-100  border text-gray-900 rounded-full cursor-pointer right-0 absolute  "
                                    onClick={() =>
                                        swiperRef.current.swiper.slideNext()
                                    }
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
                            {testimonials.map((testimony, index) => {
                                const {} = testimony;
                                return (
                                    <SwiperSlide key={index}>
                                        <div className="text-center p-2 bg-white text-gray-900 rounded space-y-3">
                                            <div className="  absolute h-10 w-10  ">
                                                <img
                                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/800px-Cquote1_black.svg.png"
                                                    alt=""
                                                />
                                            </div>
                                            <div className=" flex  w-24 h-24 mx-auto ">
                                                <img
                                                    src="https://www.kevictours.com/wp-content/uploads/2017/06/2.gif"
                                                    alt=""
                                                    className="rounded-full object-cover "
                                                />
                                            </div>
                                            <div>
                                                <p>
                                                    Lorem ipsum dolor sit amet,
                                                    consectetur adipisicing
                                                    elit. Omnis, dolorum?
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xl  text-red-700">
                                                    John Doe
                                                </p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
const testimonials = [1, 2, 3, 4, 5, 6];
