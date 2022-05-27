import React from "react";

const Contact = () => {
    return (
        <section
            className="py-10 w-full h-full bg-no-repeat bg-cover bg-right bg-blend-multiply  text-white  "
            style={{
                backgroundImage:
                    "url(https://images.unsplash.com/photo-1512428559087-560fa5ceab42?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvbnRhY3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500)",
                backgroundColor: "rgba(0,0,0,0.6)",
            }}
        >
            <div className="w-mobile md:w-container_width mx-auto  rounded">
                <div className=" mb-12 text-center">
                    <p className="text-4xl  font-bold ">CONTACT US.</p>
                    <p className="text-gray-100">
                        We will get back to you Asap!
                    </p>
                </div>
                <div className="mb-10 text-xl  font-bold">
                    Fill the form below.
                </div>
                <div className="grid md:grid-cols-2">
                    <form
                        className="space-y-6"
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <div className="grid grid-cols-2 gap-5">
                            <div className="">
                                <label htmlFor=""> Username</label>
                                <input
                                    type="text"
                                    className=" w-full border   p-2 rounded"
                                    placeholder="Enter username"
                                />
                            </div>
                            <div>
                                <label htmlFor=""> Phone Number</label>
                                <input
                                    type="text"
                                    className=" w-full border p-2 rounded"
                                    placeholder="Enter phone number"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="">Email</label>
                                <input
                                    type="email"
                                    className=" p-2 rounded  w-full border"
                                    placeholder="Enter email"
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="">Message</label>
                                <textarea
                                    className=" w-full border p-2"
                                    placeholder="Enter message here.."
                                    cols="30"
                                    rows="7"
                                ></textarea>
                            </div>
                        </div>

                        <div>
                            <input
                                type="submit"
                                className="  p-3 rounded w-full bg-purple "
                                value="Send Enquiry"
                            />
                        </div>
                    </form>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
