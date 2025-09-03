import React from "react";

interface VideoSectionProps {
  title: string
  videoUrl: string
  posterUrl?: string
}

export const WoodVideo: React.FC<VideoSectionProps> = ({ title, videoUrl, posterUrl }) => {
  return (
    <div>
      <div className="text-center mb-8">
        <h2 className="mt-28 text-6xl font-bold text-[#3F4919]">
          {title}
        </h2>
      </div>
        <div className="relative w-full mx-auto overflow-hidden rounded-2xl shadow-lg">
        <video
          controls
          className=" h-[663px] w-full object-cover"
          poster={posterUrl} // optional placeholder image
        >
          <source src={videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

    </div>
  );
};
