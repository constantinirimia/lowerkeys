import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-blue-600 to-gray-900 home"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <img
          src={HeroImage}
          alt="profile"
          className="rounded-2xl mx-auto"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "500%",
            height: "500%",
            objectFit: "cover",
            zIndex: -1,
          }}
        />
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-5xl sm:text-7xl font-bold text-white">
            Lower Keys Painting and Maintanance
          </h2>
          <br></br>
          <br></br>
          <p className="text-white text-2xl py-6 max-w-md">
            Welcome to Lower Keys Painting and Maintenance! Our commitment to
            excellence and attention to detail is what sets us apart from the
            rest.
          </p>
          <br></br>
          <p className="text-white text-2xl py-1 max-w-md">
            We are a small but dedicated company based in the heart of Key West,
            serving the entire Lower Keys area.
          </p>
          <div className="portfolio-btn">
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r via-white-200 from-red-600 to-red-500 cursor-pointer"
            >
              Learn more about us
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

          <br></br>

          <br></br>
          <p className="text-white text-2xl py-1 max-w-md">
            And the best part? We offer free estimates! So, whether you're a
            homeowner, business owner, or property manager, give us a call today
            to see how we can help you bring your vision to life.
          </p>

          <div className="portfolio-btn">
            <Link
              to="estimates"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r via-white-200 from-red-700 to-red-500 cursor-pointer"
            >
              GET A FREE ESTIMATE NOW
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="big-screen">
          <img
            src={HeroImage}
            alt="profile"
            className="rounded-xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
