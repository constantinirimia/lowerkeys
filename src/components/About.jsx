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

        <p className="text-xl mt-5">
          Senior marketing strategist with an extensive experience.
        </p>

        <br />
        <p className="text-xl">
          As a senior marketing strategist with a masters degree in marketing
          from Northwestern University, I bring a wealth of knowledge and
          expertise to the table.
        </p>

        <br />
        <p className="text-xl">
          Throughout my career, I have developed and executed numerous
          successful marketing campaigns for a diverse range of clients,
          including industry leaders such as Meta, Algorand, and Cohere.
        </p>

        <br />
        <p className="text-xl">
          My ability to develop innovative and effective marketing strategies
          has earned me a reputation as a top performer in the industry. My
          extensive experience and knowledge of the latest marketing trends and
          techniques make me an ideal candidate for any organization looking to
          boost their marketing efforts.
        </p>

        <br />
        <p className="text-xl">
          I have a proven track record of creating successful marketing
          campaigns that drive revenue and increase brand awareness.
          Additionally, my excellent communication skills and ability to work
          effectively with cross-functional teams make me a valuable asset to
          any organization. I am passionate about helping businesses grow and
          achieve their goals through strategic marketing initiatives.
        </p>

        <br />
        <p className="text-xl">
          Whether it's developing a comprehensive marketing plan, conducting
          market research, or creating compelling content, I have the skills and
          experience needed to deliver results. I am dedicated to staying
          up-to-date on the latest marketing trends and technologies and am
          constantly seeking new and innovative ways to help my clients succeed.
        </p>
      </div>
    </div>
  );
};

export default About;
