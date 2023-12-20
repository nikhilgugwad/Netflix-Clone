import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="flex">
        <button className="bg-white text-black py-3 px-3 text-md rounded-lg flex items-center hover:bg-opacity-80">
          <img
            className="w-4 mx-1"
            alt="play-button"
            src="https://www.svgrepo.com/show/522226/play.svg"
          />
          Play Now
        </button>
        <button className="bg-gray-500 text-white py-3 px-3 mx-2 text-md rounded-lg flex items-center bg-opacity-50">
          <img
            className="w-6 mx-1"
            alt="info-button"
            src="https://www.svgrepo.com/show/513832/info-circle.svg"
          />
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
