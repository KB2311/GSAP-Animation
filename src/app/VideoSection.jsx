"use client";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "./VideoSection.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
}

const VideoSection = () => {
  const videoRef = useRef(null);
  const videoContainerRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        // Only set up the animation if screen width is 768px or larger
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 0.8,
            pin: true,
            onEnter: () => {
              videoRef.current.play();
            },
            onLeaveBack: () => {
              videoRef.current.pause();
            },
          },
        });

        tl.to(videoContainerRef.current, {
          opacity: 1,
          transform: "perspective(600px) rotateX(0deg)",
          duration: 0.5,
          ease: "power2.out",
          onStart: () => {
            videoRef.current.play();
          },
        });
      },
      "(max-width: 767px)": () => {
        if (videoRef.current) {
          videoRef.current.play();
          videoRef.current.currentTime = 0;
        }
      },
    });
  });

  return (
    <div className="section" ref={sectionRef}>
      <div className="video-container" ref={videoContainerRef}>
        <video
          ref={videoRef}
          style={{ width: "100%", height: "auto" }}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          muted
          autoPlay
        ></video>
      </div>
    </div>
  );
};

export default VideoSection;
