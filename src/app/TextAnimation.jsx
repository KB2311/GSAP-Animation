"use client";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
}

const TextAnimation = () => {
  const text = useRef(null);
  const wrapperBox = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to(text.current, {
      duration: 4,
      text: " is so much fun you should try it some time!",
      scrollTrigger: {
        trigger: wrapperBox.current,
        scrub: 3,
        start: "top 70%",
        end: "bottom bottom",
      },
    });
  });
  return (
    <div ref={wrapperBox} className="h-96 w-max bg-blue-300 p-40">
      <h1 className="text-3xl">
        Text Animation <span ref={text}></span>
      </h1>
    </div>
  );
};

export default TextAnimation;
