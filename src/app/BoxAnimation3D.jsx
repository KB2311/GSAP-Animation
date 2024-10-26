"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const BoxAnimation3D = () => {
  const boxWrapperRef = useRef(null);
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  useEffect(() => {
    const box1 = box1Ref.current;
    const box2 = box2Ref.current;
    const box3 = box3Ref.current;
    const boxWrapper = boxWrapperRef.current;

    gsap.to(box1, {
      x: 100,
      y: -80,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: boxWrapper,
        start: "-=35% center",
        end: "+=80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });
    gsap.to(box2, {
      x: 200,
      y: -180,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: boxWrapper,
        start: "-=35% center",
        end: "+=80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });
    gsap.to(box3, {
      x: 300,
      y: -280,
      duration: 1,
      stagger: 0.5,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: boxWrapper,
        start: "-=35% center",
        end: "+=80%",
        toggleActions: "play reverse play reverse",
        markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={boxWrapperRef}
      className="h-screen flex "
      style={{ perspective: "2000px", transformStyle: "preserve-3d" }}
    >
      <div className="flex-1">hello</div>
      <div className="w-[300px] h-[300px] aspect-square flex-1 flex relative">
        <div
          ref={box1Ref}
          style={{
            width: "205.34px",
            height: "271.6px",
            borderRadius: "50%",
            zIndex: 3,
            transform:
              "translateX(300px) translateY(-160px) scaleX(0.99) skewY(7deg) ",
          }}
          className="absolute top-[50%] left-0 w-40 aspect-square bg-rose-300"
        ></div>
        <div
          style={{
            width: "221.7px",
            height: "293.69px",
            borderRadius: "50%",
            zIndex: 2,
            transform:
              "translateX(330px) translateY(-220px) scaleX(0.99) skewY(7deg)",
          }}
          ref={box2Ref}
          className="absolute top-[50%] left-0 w-40 aspect-square bg-rose-500"
        ></div>
        <div
          style={{
            width: "247.88px",
            height: "328.05px",
            borderRadius: "50%",
            zIndex: 1,
            transform:
              "translateX(360px) translateY(-280px) scaleX(0.99) skewY(7deg)",
          }}
          ref={box3Ref}
          className="absolute top-[50%] left-0 w-40 aspect-square bg-rose-700"
        ></div>
      </div>
    </div>
  );
};

export default BoxAnimation3D;
