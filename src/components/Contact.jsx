import React from "react";

//function for form reset
function handleSubmit(e) {
  setTimeout(() => {
    e.target.reset();
  }, 3000);
}

const Contact = () => {
  return (
    <div
      name="contact"
      className="contact w-full h-screen bg-gradient-to-b from-gray-900 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            The easiest way to get in touch is by calling us at{" "}
            <span
              className="bg-gradient-to-r via-white-200 from-yellow-500 to-yellow-200 text-black px-2 py-1 rounded-md font-bold call-us"
              style={{ fontFamily: "Helvetica" }}
            >
              305-509-0575
            </span>
            . However, you can also write us a message below and we will get
            back to you!
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            action="https://getform.io/f/4019fed2-723c-4844-be2c-bbce93e5f785"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name ..."
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email ..."
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Tell us how we can help you ..."
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
