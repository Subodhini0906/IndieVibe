"use client";
import SliderSection from "../components/SliderSection";

export default function Page() {
  return (
    <>
      <section className="relative w-full min-h-[330px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 z-0 w-full h-full object-cover"
        >
          <source src="/bg.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      <section className="px-6 py-10 max-w-7xl mx-auto">
        <SliderSection />
      </section>
    </>
  );
}
