import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useForm } from "react-hook-form";
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: 0,
    boxShadow: 24,
    p: 3,
};
const Navbar = () => {
    //
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "all",
        shouldUnregister: true,
        shouldFocusError: true,
    });
    const onSubmit = (data) => {
        console.log(data);
    };

    // Modal
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //  Destinations dropdown
    const [isOpen, setIsOpen] = useState(false);

    // sidebar functionality
    const [showSidebar, setShowSidebar] = useState(false);
    const showSide = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <>
            <nav className="bg-white h-24 md:h-full  border border-b-gray-50">
                <div className="w-mobile md:w-container_width h-full  mx-auto flex justify-between items-center">
                    <div
                        className="block md:hidden cursor-pointer   "
                        onClick={showSide}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-11 w-11 text-red"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </div>
                    <Link to="/">
                        <div className="hidden md:block">
                            <img
                                src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,h_132,w_234/v1654000958/logos/MSLogo_2-1_gipurj.png"
                                alt=""
                            />
                        </div>
                    </Link>

                    <div className="hidden md:flex space-x-8 ">
                        <Link to="/">
                            <li className="list-none text-purple   h">Home</li>
                        </Link>
                        <Link to="/about">
                            <li className="list-none text-purple">About</li>
                        </Link>
                        {/* <Link to="/">
                            <li className="list-none text-purple">Trips</li>
                        </Link> */}
                        <div
                            className="flex items-center space-x-2 text-purple  relative "
                            onMouseEnter={() => setIsOpen(true)}
                            onMouseLeave={() => setIsOpen(false)}
                        >
                            <li className="list-none  ">Destinations</li>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={
                                    isOpen
                                        ? "h-4 w-4 rotate-180 transition-all"
                                        : "h-4 w-4 rotate-0 transition-all"
                                }
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>

                            <div className="absolute top-7 w-44 p-3"></div>

                            <div
                                className={
                                    isOpen
                                        ? "absolute  top-10  bg-white w-44 z-20  "
                                        : "hidden"
                                }
                            >
                                <Link to="/southsudan">
                                    <p className="p-2.5 hover:bg-gray-50">
                                        South Sudan
                                    </p>
                                </Link>
                                <Link to="/">
                                    <p className="p-2.5 hover:bg-gray-50">
                                        Uganda
                                    </p>
                                </Link>
                                <Link to="/">
                                    <p className="p-2.5 hover:bg-gray-50">
                                        Ethiopia
                                    </p>
                                </Link>
                            </div>
                        </div>
                        <Link to="/gallery">
                            <li className="list-none text-purple">Gallery</li>
                        </Link>
                        <Link to="/contact">
                            <li className="list-none text-purple">Contact </li>
                        </Link>
                    </div>
                    <div className="">
                        <div
                            onClick={handleOpen}
                            className="  p-3 text-white bg-purple hover:bg-hover_color transition rounded-full  cursor-pointer"
                        >
                            BOOK TRIP
                        </div>
                    </div>
                </div>
            </nav>
            <section
                className={
                    showSidebar
                        ? "bg-white  w-11/12 h-full  absolute top-0  translate-x-0 transition-all ease-in-out z-30 pt-5 border border-r-gray-100"
                        : "-translate-x-96 transition-all  ease-in-out absolute top-0"
                }
            >
                <div className="flex justify-between items-center w-mobile mx-auto ">
                    <div className="md:hidden block">
                        <img
                            src="https://res.cloudinary.com/kelvin45/image/upload/c_scale,h_132,w_234/v1654000958/logos/MSLogo_2-1_gipurj.png"
                            alt=""
                        />
                    </div>
                    <p
                        onClick={showSide}
                        className="flex justify-center   items-center p-2 bg-gray-100 rounded w-10 h-10 "
                    >
                        X
                    </p>
                </div>
                <div className="space-y-3  my-8 text-center">
                    <Link to="/">
                        <li
                            className="list-none py-1.5 px-4 "
                            onClick={showSide}
                        >
                            Home
                        </li>
                    </Link>
                    <Link to="/about">
                        <li
                            className="list-none py-1.5 px-4 "
                            onClick={showSide}
                        >
                            About
                        </li>
                    </Link>
                    {/* <Link to="/">
                        <li
                            className="list-none py-1.5 px-4 "
                            onClick={showSide}
                        >
                            Trips
                        </li>
                    </Link> */}
                    <Link to="/">
                        <li
                            className="list-none py-1.5 px-4 "
                            onClick={showSide}
                        >
                            Destination
                        </li>
                    </Link>
                    <Link to="/gallery">
                        <li
                            className="list-none py-1.5 px-4 "
                            onClick={showSide}
                        >
                            Gallery
                        </li>
                    </Link>
                    <Link to="/contact">
                        <li
                            className="list-none py-1.5 px-4 "
                            onClick={showSide}
                        >
                            Contact
                        </li>
                    </Link>
                    <div className="py-1.5 px-4" onClick={showSide}>
                        <button
                            onClick={handleOpen}
                            className="  p-3 text-white bg-purple hover:bg-hover_color transition rounded-full  cursor-pointer"
                        >
                            BOOK TRIP
                        </button>
                    </div>
                </div>
            </section>

            <section>
                <div>
                    <Modal
                        open={open}
                        // onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style} className="w-mobile md:w-1/2 ">
                            <div className="flex justify-between py-3  text-purple">
                                <p className="text-xl ">TOUR BOOKING FORM</p>
                                <p
                                    onClick={() => handleClose()}
                                    className="bg-purple text-white w-8 h-8 flex items-center justify-center rounded-full p-2 cursor-pointer"
                                >
                                    X
                                </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="space-y-5 ">
                                    <div className="grid grid-cols-2 gap-2">
                                        <div>
                                            <label htmlFor="">Firstname</label>
                                            <input
                                                type="text"
                                                className="border p-2 w-full"
                                                placeholder="John "
                                                {...register("firstname", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.firstname && (
                                                <p className="text-red">
                                                    firstname is required{" "}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Lastname</label>
                                            <input
                                                type="text"
                                                className="border p-2 w-full"
                                                placeholder="Doe"
                                                {...register("lastname", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.lastname && (
                                                <p className="text-red">
                                                    lastname is required{" "}
                                                </p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-2 gap-3">
                                        <div>
                                            <label htmlFor="">Email</label>
                                            <input
                                                type="text"
                                                placeholder="example123@gmail.com"
                                                className="border w-full p-2"
                                                {...register("email", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.email && (
                                                <p className="text-red">
                                                    Email is required{" "}
                                                </p>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor="">Phone</label>
                                            <input
                                                type="text"
                                                placeholder="+2119569..."
                                                className="border w-full p-2"
                                                {...register("phone", {
                                                    required: true,
                                                })}
                                            />
                                            {errors.phone && (
                                                <p className="text-red">
                                                    Phone is required{" "}
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                    <div>
                                        <p>When are you planning to visit</p>
                                        <input
                                            type="date"
                                            className="border w-full p-2"
                                            {...register("date", {
                                                required: true,
                                            })}
                                        />
                                        {errors.date && (
                                            <p className="text-red">
                                                Date is required{" "}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <p>How many people are you ?</p>
                                        <input
                                            type="number"
                                            className="border w-full p-2"
                                            {...register("number", {
                                                required: true,
                                            })}
                                        />
                                        {errors.number && (
                                            <p className="text-red">
                                                Number of people is required{" "}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <p>How should we contact you ?</p>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" />
                                            <p>phone</p>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" />
                                            <p>Email</p>
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type="submit"
                                            className="border p-2 w-full bg-purple text-white"
                                        />
                                    </div>
                                </div>
                            </form>
                        </Box>
                    </Modal>
                </div>
            </section>
        </>
    );
};

export default Navbar;
