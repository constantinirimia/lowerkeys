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
            Who are we?
          </p>
        </div>
        <br />
        <p className="text-white text-2xl py-1 max-w-md">
          We are a small but dedicated company based in the heart of Key West,
          serving the entire Lower Keys area.
        </p>
        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          We understand that making decisions about home improvement projects
          can be challenging, which is why we are here to help.
        </p>
        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          We are always happy to provide expert advice to help you make the
          right choices. We believe in working closely with our customers to
          ensure that their needs and preferences are met.
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
