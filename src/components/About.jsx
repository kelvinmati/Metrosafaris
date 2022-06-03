import React from "react";

const About = () => {
    return (
        <section className="py-10  ">
            {/* <div className="text-center py-7">
                <p className="text-2xl">ABOUT US</p>
            </div> */}
            <div className=" w-mobile md:w-container_width mx-auto grid md:grid-cols-2 gap-4   ">
                <div className=" flex   justify-end  ">
                    <div className=" w-full md:w-72  ">
                        <img
                            src="https://wttc.org/DesktopModules/MVC/NewsArticleList/images/-1_temp_Global%20wildlife%20tourism%20generates%20five%20times%20more%20revenue%20than%20illegal%20wildlife%20trade%20annually.jpg"
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
                <div className=" p-4  space-y-7 ">
                    <p className="text-2xl text-purple ">ABOUT US</p>
                    <p>
                        Metro Safaris and Tours is an indigenous tour operator
                        in South Sudan. Our expertise in local demographics,
                        tribal groups, physical topography and national parks in
                        South Sudan makes us the preferred company. Our company
                        is wholly owned and operated exclusively by South
                        Sudanese, hence making us not only cheaper but also
                        making your contribution towards supporting responsible
                        tourism meaningful.
                    </p>
                    <p>
                        You are making history by being among the first few
                        tourists who have paid a visit to South Sudan. And we
                        are here to make it mesmerizing and memorable for you!
                        Whether you are visiting South Sudan for just one day or
                        for several weeks, we can provide the best itinerary
                        that suits your schedule at the most affordable price.
                    </p>
                    {/* <p>
                        In case South Sudan does not have an embassy in your
                        country or its location is far from you, we can request
                        immigration office in Juba to issue you an Entry Permit.
                        An entry permit allows you to land at any port of entry
                        within South Sudan, where you will obtain a Visa on
                        arrival. Once approved and issued, we will email it to
                        you in a pdf format. An Entry Permit route is cheaper
                        and less time consuming that a direct Visa route
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default About;
