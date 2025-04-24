"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SliderSection from "../components/SliderSection";

const videos = ["/bg1.mp4", "/bg2.mp4", "/bg3.mp4"];
const VIDEO_DURATION = 5000; // 5 seconds

export default function Page() {
  const [current, setCurrent] = useState(0);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => prev + 100 / (VIDEO_DURATION / 100));
    }, 100);

    const videoInterval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
      setProgress(0);
    }, VIDEO_DURATION);

    return () => {
      clearInterval(progressInterval);
      clearInterval(videoInterval);
    };
  }, [current]);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + videos.length) % videos.length);
    setProgress(0);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % videos.length);
    setProgress(0);
  };

  return (
    <>
      <section className="relative w-full min-h-[530px] overflow-hidden">
        {videos.map((video, index) => (
          <video
            key={index}
            autoPlay
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute top-1/2 left-4 z-20 transform -translate-y-1/2 cursor-pointer bg-white/50 hover:bg-white p-2 rounded-full">
          <ChevronLeft onClick={handlePrev} size={24} />
        </div>
        <div className="absolute top-1/2 right-4 z-20 transform -translate-y-1/2 cursor-pointer bg-white/50 hover:bg-white p-2 rounded-full">
          <ChevronRight onClick={handleNext} size={24} />
        </div>

      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <SliderSection />
      </section>
    </>
  );
}
