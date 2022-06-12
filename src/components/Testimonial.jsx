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
          <p>See what people are saying about Metro safaris</p>
        </div>
        <div className="col-span-2">
          <div className="testimonial-slider ">
            <Swiper
              ref={swiperRef}
              spaceBetween={10}
              slidesPerView={1}
              navigation={false}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
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
                  className="p-1.5 bg-white z-10 hover:bg-gray-100  border text-gray-900 rounded-full cursor-pointer right-0 absolute  "
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
              {testimonials.map((testimony, index) => {
                const { username, text, image, country, subject, date } =
                  testimony;
                return (
                  <SwiperSlide key={index} className=" ">
                    <div className=" md:h-96 overflow-auto text-center p-2 bg-white text-gray-900 rounded space-y-3">
                      <div className="  absolute h-10 w-10  ">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Cquote1_black.svg/800px-Cquote1_black.svg.png"
                          alt=""
                        />
                      </div>

                      <div className=" flex  w-24 h-24 mx-auto ">
                        <img
                          src={image}
                          alt=""
                          className="rounded-full object-cover "
                        />
                      </div>

                      <div className="flex justify-between pb-2 ">
                        <div className="text-left">
                          <div className="text-purple">{username}</div>
                          <div className="text-lg font-black">{subject}</div>
                        </div>
                        <div className="h-16 p-1  bg-purple text-white">
                          <p className="text-2xl font-bold ">{date.day}</p>
                          <p>
                            {date.month},{date.year}
                          </p>
                        </div>
                      </div>
                      <div>
                        <p>{text}</p>
                      </div>
                      <div className="flex items-center justify-center space-x-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-xl font-semibold">{country}</p>
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
const testimonials = [
  {
    username: "Mike G",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/53/8a/76/mike-g.jpg?w=100&h=-1&s=1",
    country: "San Francisco, CA",
    date: {
      day: "25",
      month: "feb",
      year: "2022",
    },
    subject: "Great South Sudan tour company ",
    text: "Some friends and I went on a tour with Metro Safaris to visit the Dinka and Mundari tribes. Everything was well organized, and we had a fantastic time. The vehicles were comfortable, the food was delicious, the explanations were great, and the team really made our trip special. I wouldn't hesitate to book with them again if we return.",
  },
  ,
  {
    username: "Futtrup",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/55/62/7f/futtrup.jpg?w=100&h=-1&s=1",
    country: "Aarhus, Denmark",
    date: {
      day: "11",
      month: "feb",
      year: "2021",
    },
    subject: "Fantastic experience",
    text: "We really had a good trip with Mayom and his team for 8 days visiting far away tribes in eastern South Sudan. A master og logistics which is needed when all can happen and when there is no phone signal or radio nearby. SSD is difficult to master, but Metro Safaris has the contacts and expertise to make a great tour to little visited tribes. Highly recommended.",
  },
];
