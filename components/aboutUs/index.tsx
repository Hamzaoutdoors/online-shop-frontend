import React from "react";
import Map from "./aboutUsContent/Map";
import AboutDescription from "./aboutUsContent/AboutDescription";
import AboutVideo from "./aboutUsContent/AboutVideo";
import SectionTitle from "../UI/SectionTitle";

const About = () => {
  return (
    <div className="flex self-center flex-col my-4 md:my-8">
      <SectionTitle title={"aboutTitle"} arrow={false} />
      <div className="my-2 px-4 flex md:flex-row flex-col items-center h-[20rem]">
        <div className="w-1/3 flex justify-end items-center h-full">
          <Map />
        </div>
        <div className="flex-1 w-1/3 flex justify-center items-center h-full">
          <AboutVideo />
        </div>
        <div className="w-1/3 flex justify-start items-center h-full">
          <AboutDescription />
        </div>
      </div>
    </div>
  );
};

export default About;
