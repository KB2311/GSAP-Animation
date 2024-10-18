"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import TextPlugin from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const TextAnimation = () => {
  const text = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: 0 });
    tl.to("h1 span", {
      duration: 4,
      text: " is so much fun you should try it some time!",
    });
    return () => {
      tl.kill();
    };
  }, []);
  return (
    <div className="h-96 bg-blue-300 p-40">
      <h1 className="text-3xl">
        Text Animation <span ref={text}></span>
      </h1>
    </div>
  );
};

export default TextAnimation;
