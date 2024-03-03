import React, { useRef } from "react";
import { Player } from "video-react";

const AboutVideo = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[100%] h-[100%] p-0 m-0">
      <Player aspectRatio="4:3" muted poster="/images/logo.png" autoPlay>
        <source
          src="/videos/about-video.mp4"
          style={{ width: "100%", height: "100%" }}
        />
      </Player>
    </div>
  );
};

export default AboutVideo;
