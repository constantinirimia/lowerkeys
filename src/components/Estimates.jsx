import React from "react";

const Estimates = () => {
  return (
    <div
      name="estimates"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white estimates"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Get a free estimate now
          </p>
        </div>

        <p className="text-xl mt-5"></p>

        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          At Lower Keys Painting and Maintenance, we believe that quality
          service begins with a free estimate.
        </p>
        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          That's why we offer our clients a complimentary consultation to assess
          their needs and provide personalized solutions that fit their budget.
        </p>
        <br></br>

        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          All you need to do is give us a call at{" "}
          <span className="bg-yellow-500 text-black px-2 py-1 rounded-md font-bold call-us">
            305-509-0575
          </span>
          and we'll be happy to schedule an appointment at your convenience. Our
          team of experts will take the time to listen to your ideas, answer
          your questions, and provide you with a detailed estimate that includes
          all costs and timelines.
        </p>

        <br></br>
        <p className="text-white text-2xl py-1 max-w-md">
          Let us help you make your dream project a reality!
        </p>
      </div>
    </div>
  );
};

export default Estimates;
