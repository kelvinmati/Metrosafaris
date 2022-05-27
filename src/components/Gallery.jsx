import React from "react";

const Gallery = () => {
    return (
        <section className="py-10">
            <div className="w-mobile md:w-container_width mx-auto grid md:grid-cols-3 gap-3">
                {images.map((image, index) => {
                    const { img, text } = image;
                    return (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${img})`,
                                // backgroundColor: "rgba(0,0,0,0.3)",
                            }}
                            className=" relative text-white  h-56 w-full bg-cover bg-blend-multiply bg-repeat-no-repeat"
                        >
                            <p className="bg-red-700 absolute rounded-br-xl p-2">
                                {text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default Gallery;
const images = [
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara ",
    },
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara",
    },
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara",
    },
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara",
    },
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara",
    },
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara",
    },
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara",
    },
    {
        img: "https://www.kevictours.com/wp-content/uploads/2017/06/2.gif",
        text: "Maasai mara",
    },
];
