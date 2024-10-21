"use client";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
}

const SplitTextAnimation = () => {
  const textRef = useRef(null);

  useGSAP(() => {
    const text = textRef.current.innerText;
    textRef.current.innerHTML = "";
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        const parentTimeline = gsap.timeline();

        Array.from(text).forEach((char, index) => {
          const charWrapper = document.createElement("div");
          charWrapper.style.display = "inline-block";
          charWrapper.style.overflow = "hidden";
          charWrapper.style.position = "relative";

          const charDiv1 = document.createElement("div");

          charDiv1.innerText = char;

          if (index % 2 === 0) {
            gsap.set(charDiv1, { yPercent: -10 });
          } else {
            gsap.set(charDiv1, { yPercent: 100 });
          }

          charWrapper.appendChild(charDiv1);
          textRef.current.appendChild(charWrapper);

          const tween = gsap.timeline({ repeat: -1, yoyo: true });

          if (index % 2 === 0) {
            tween.to([charDiv1], { yPercent: "+=100", duration: 1 });
          } else {
            tween.to([charDiv1], { yPercent: "-=100", duration: 1 });
          }

          parentTimeline.add(tween, index * 0.05);
        });

        gsap.to(parentTimeline, { progress: 1, duration: 10, repeat: -1 });
      },
    });
  });

  return (
    <div
      ref={textRef}
      style={{
        fontSize: "5rem",
        fontWeight: "bold",
        marginTop: "5rem",
        overflow: "visible",
      }}
    >
      Hello, World!
    </div>
  );
};

export default SplitTextAnimation;
