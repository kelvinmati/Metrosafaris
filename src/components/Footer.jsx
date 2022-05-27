import React from "react";

const Footer = () => {
    return (
        <div>
            <div className="py-14">
                <div className="w-mobile md:w-mobile-container mx-auto   space-y-4">
                    <div className="flex flex-col md:flex-row md:justify-center items-center space-x-0 space-y-4 md:space-y-0 md:space-x-10">
                        <li className="list-none">Home</li>
                        <li className="list-none">About</li>
                        <li className="list-none">Trips</li>
                        <li className="list-none">Destinations</li>
                        <li className="list-none ">Gallery </li>
                        <li className="list-none">Contact</li>
                    </div>
                    <div className="text-center space-x-2 text-purple ">
                        <ion-icon size="large" name="logo-facebook"></ion-icon>
                        <ion-icon size="large" name="logo-twitter"></ion-icon>
                        <ion-icon size="large" name="logo-instagram"></ion-icon>
                    </div>

                    <div className="text-center">
                        <p className="text-sm">
                            &copy; copyright {new Date().getFullYear()}.
                            Metrosafaris and tours
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
