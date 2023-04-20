import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">Who are we?</p>

        <br />
        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          We are a small but dedicated company based in the heart of Key West,
          serving the entire Lower Keys area.
        </p>
        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          With years of experience under our belt, we take pride in offering
          top-notch interior and exterior painting services and maintenance
          solutions to our valued clients.
        </p>
        <br></br>

        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          And the best part? We offer free estimates! So, whether you're a
          homeowner, business owner, or property manager, give us a call today
          to see how we can help you bring your vision to life.
        </p>
      </div>
    </div>
  );
};

export default About;
