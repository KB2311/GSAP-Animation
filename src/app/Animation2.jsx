"use client";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
}

const Animation2 = () => {
  const wrapperBox = useRef(null);
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const textRef1 = useRef(null);
  const textRef2 = useRef(null);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        ScrollTrigger.create({
          trigger: wrapperBox.current,
          start: "top top",
          end: "+=1500",
          pin: true,
          scrub: 1,
          // markers: true,
        });
        const rotateTimeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperBox.current,
            start: "top top",
            end: "+=1500",
            scrub: true,
            // markers: true,
            onLeave: () => {
              gsap.to([boxRef1.current, boxRef2.current], { rotation: 0 });
            },
            onLeaveBack: () => {
              gsap.to([boxRef1.current, boxRef2.current], { rotation: 0 });
            },
          },
        });

        rotateTimeline.to(boxRef1.current, {
          rotation: 360,
          duration: 5,
          markers: false,
        });

        rotateTimeline.to(
          boxRef2.current,
          {
            rotation: 360,
            duration: 5,
            immediateRender: false,
            markers: false,
          },
          "<"
        );

        const text1Timeline = gsap.timeline({
          scrollTrigger: {
            trigger: wrapperBox.current,
            start: "top top",
            end: "+=1500",
            scrub: 1,
            markers: false,
          },
        });

        text1Timeline.fromTo(
          textRef1.current,
          { opacity: 0, y: "70vh" },
          { opacity: 1, y: 0, duration: 5 }
        );

        text1Timeline.fromTo(
          textRef2.current,
          { opacity: 0, y: "70vh" },
          { opacity: 1, y: 0, duration: 5 },
          "<+=1.5"
        );
      },
    });
  });

  return (
    <>
      <div
        ref={wrapperBox}
        style={{
          position: "relative",
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "#f0f0f0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "40px",
          paddingTop: "50px",
        }}
      >
        <div
          ref={boxRef1}
          style={{
            position: "absolute",
            top: "40px",
            right: "10px",
            backgroundColor: "#fefcbf",
            aspectRatio: "1 / 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          1 absolute box
        </div>
        <div
          ref={boxRef2}
          style={{
            position: "absolute",
            bottom: "40px",
            left: "10px",
            backgroundColor: "#fefcbf",
            aspectRatio: "1 / 1",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          2 absolute box
        </div>
        <div style={{ maxWidth: "1024px" }}>
          <p
            ref={textRef1}
            className="md:opacity-0 mt-32 p-5 md:mt-0 md:p-0"
            //  style={{ opacity: 0 }}
          >
            In 1992, Tim Berners-Lee circulated a document titled “HTML Tags,”
            which outlined just 20 tags, many of which are now obsolete or have
            taken other forms. The first surviving tag to be defined in the
            document, after the crucial anchor tag, is the paragraph tag. It
            wasn’t until 1993 that a discussion emerged on the proposed image
            tag.
          </p>
        </div>
        <div style={{ maxWidth: "1024px" }}>
          <p
            ref={textRef2}
            className="md:opacity-0 mt-20 p-5 md:mt-0 md:p-0"
            // style={{ opacity: 0 }}
          >
            In 1992, Tim Berners-Lee circulated a document titled “HTML Tags,”
            which outlined just 20 tags, many of which are now obsolete or have
            taken other forms. The first surviving tag to be defined in the
            document, after the crucial anchor tag, is the paragraph tag. It
            wasn’t until 1993 that a discussion emerged on the proposed image
            tag.
          </p>
        </div>
      </div>
    </>
  );
};

export default Animation2;
