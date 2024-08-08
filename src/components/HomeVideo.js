import React from "react";

const HomeVideo = () => {
  return (
    <div className="w-full h-full pb-20 bg-white">
      <div className="mx-auto w-full px-4">
        <div className="relative pb-[56.25%] lg:pb-[45%] xl:pb-[40%]"> {/* 16:9 aspect ratio */}
          <iframe
            src="https://www.youtube.com/embed/sRbNyICpCps?si=gxvw2MwlrAEwb7DW&width=1920"
            title="Free and Secure screen recorder captures anything from PC."
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="absolute top-0 left-0 md:w-[80%] w-full md:mx-[10%] h-full rounded-3xl"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default HomeVideo;
