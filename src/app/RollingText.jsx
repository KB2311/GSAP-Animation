"use client"; // Use this if you're in a Next.js environment
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const RollingText = () => {
  const boxesRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const boxes = boxesRef.current;

    // Create a text with boxes
    const text = "Hello, World!";
    const chars = text.split(""); // Split text into characters
    boxes.innerHTML = ""; // Clear previous content

    // Create box-like elements for each character and a line break
    chars.forEach((char, index) => {
      const charBox = document.createElement("div");
      charBox.className = "box"; // Assign class for styling
      charBox.innerText = char;

      boxes.appendChild(charBox);
    });

    // Tween for the boxes
    const tween = gsap.to(boxes.childNodes, {
      yPercent: -300,
      repeat: 10,
      ease: "none",
      paused: true, // Start paused until we call play
    });

    // Eased tween for smooth progress
    const eased = gsap.to(tween, {
      totalProgress: 1,
      duration: 4,
      ease: "power4.inOut",
      paused: true,
    });

    // Start the animation
    const startAnimation = () => {
      tween.restart();
      eased.restart();
    };

    // Start animation initially
    startAnimation();

    // Cleanup function on component unmount
    return () => {
      gsap.killTweensOf(boxes.childNodes);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
      className="container"
    >
      <div
        ref={boxesRef}
        className="boxes"
        style={{
          display: "flex",
          alignItems: "center",
          fontSize: "100px",
        }}
      >
        {/* Characters will be appended here */}
      </div>
    </div>
  );
};

export default RollingText;
