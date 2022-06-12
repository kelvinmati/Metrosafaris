import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div>
      <div className="py-14">
        <div className="w-mobile md:w-mobile-container mx-auto   space-y-4">
          <div className="flex flex-col md:flex-row md:justify-center items-center space-x-0 space-y-4 md:space-y-0 md:space-x-10">
            <Link to="/">
              <li className="list-none">Home</li>
            </Link>
            <Link to="/about">
              <li className="list-none">About</li>
            </Link>
            {/* <li className="list-none">Trips</li> */}

            <li className="list-none">Destinations</li>
            <Link to="/gallery">
              <li className="list-none ">Gallery </li>
            </Link>
            <Link to="/contact">
              <li className="list-none">Contact</li>
            </Link>
          </div>
          <div className="text-center space-x-2 text-purple ">
            <ion-icon size="large" name="logo-facebook"></ion-icon>
            <ion-icon size="large" name="logo-twitter"></ion-icon>
            <ion-icon size="large" name="logo-instagram"></ion-icon>
          </div>

          <div className="text-center">
            <p className="text-sm">
              Copyright &copy; {new Date().getFullYear()}.Metro safaris
            </p>
          </div>
        </div>
      </div>
      <div className=" z-20 fixed right-12 bottom-10 text-purple ">
        <div>
          <a
            href="https://wa.me/211922998444"
            className="flex  space-x-3 items-center bg-white shadow px-4 py-2 rounded-full justify-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon size="large" name="logo-whatsapp"></ion-icon>
            <div>
              <p>Chat with us</p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
