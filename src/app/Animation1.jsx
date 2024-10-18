"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Animation1 = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const TextRef = useRef(null);
  const TextRef1 = useRef(null);
  const TextRef2 = useRef(null);

  useEffect(() => {
    if (boxRef3.current) {
      const h1Elements = boxRef3.current.querySelectorAll("h1");

      gsap.to(h1Elements, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0,
        stagger: 0.3,
        ease: "power4.out",
        scrollTrigger: {
          trigger: h1Elements,
          start: "top 55%",
          end: "+=800",
          markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
    }

    if (TextRef.current) {
      gsap.to(TextRef.current, {
        scale: 0.5,
        opacity: 1,
        duration: 2,
        delay: 0.1,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: TextRef.current,
          start: "top 75%",
          end: "top 0%",
          //   markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
    }
    if (TextRef1.current) {
      gsap.to(TextRef1.current, {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: TextRef1.current,
          start: "top 75%",
          end: "top 0%",
          //   markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
    }
    if (TextRef2.current) {
      gsap.to(TextRef2.current, {
        x: 0,
        opacity: 1,
        duration: 2,
        delay: 0.5,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: TextRef2.current,
          start: "top 75%",
          end: "top 0%",
          //   markers: true,
          toggleActions: "play reverse play reverse",
        },
      });
    }
    if (boxRef1.current) {
      gsap.to(boxRef1.current, {
        x: 0,
        duration: 2.5,
        ease: "power1.out",
        delay: 5,
        scrollTrigger: {
          trigger: boxRef1.current,
          scroller: "body",
          start: "top 55%",
          end: "top 30%",
          scrub: 5,
          //   markers: true,
        },
      });
    }
    if (boxRef2.current) {
      gsap.to(boxRef2.current, {
        x: 0,
        duration: 2.5,
        ease: "power1.out",
        delay: 5,
        scrollTrigger: {
          trigger: boxRef2.current,
          scroller: "body",
          start: "top 55%",
          end: "top 30%",
          scrub: 5,
          //   markers: true,
        },
      });
    }
  }, []);

  return (
    <>
      <div className="h-screen w-full flex justify-center p-36 gap-20">
        <div
          ref={boxRef1}
          className="bg-rose-300 flex-1"
          style={{ transform: "translateX(-500px)" }}
        >
          box 1
        </div>

        <div
          ref={boxRef2}
          className="bg-rose-400 flex-1"
          style={{ transform: "translateX(400px)" }}
        >
          box 2
        </div>
      </div>

      <div ref={boxRef3} className="h-screen w-full bg-rose-100">
        <h1
          className="text-6xl p-5 bg-red-200 ring-1 ring-rose-500"
          style={{ transform: "translateY(30px)", opacity: 0 }}
        >
          hello
        </h1>
        <h1
          className="text-6xl p-5 bg-red-200"
          style={{ transform: "translateY(30px)", opacity: 0 }}
        >
          Welcome
        </h1>
        <h1
          className="text-6xl p-5 bg-red-200"
          style={{ transform: "translateY(30px)", opacity: 0 }}
        >
          To This Website
        </h1>
        <div className="p-40">
          <p ref={TextRef} className="text-5xl" style={{ scale: 0.3 }}>
            In 1992, Tim Berners-Lee circulated a document titled “HTML Tags,”
            which outlined just 20 tags, many of which are now obsolete or have
            taken other forms. The first surviving tag to be defined in the
            document, after the crucial anchor tag, is the paragraph tag. It
            wasn’t until 1993 that a discussion emerged on the proposed image
            tag.
          </p>
        </div>
      </div>
      <div className="p-40 bg-rose-200 h-screen flex flex-col gap-40">
        <p
          ref={TextRef1}
          className="text-3xl"
          style={{ transform: "translateX(500px)", opacity: 0 }}
        >
          In 1992, Tim Berners-Lee circulated a document titled “HTML Tags,”
          which outlined just 20 tags, many of which are now obsolete or have
          taken other forms. The first surviving tag to be defined in the
          document, after the crucial anchor tag, is the paragraph tag. It
          wasn’t until 1993 that a discussion emerged on the proposed image tag.
        </p>
        <p
          ref={TextRef2}
          className="text-3xl"
          style={{ transform: "translateX(-500px)", opacity: 0 }}
        >
          In 1992, Tim Berners-Lee circulated a document titled “HTML Tags,”
          which outlined just 20 tags, many of which are now obsolete or have
          taken other forms. The first surviving tag to be defined in the
          document, after the crucial anchor tag, is the paragraph tag. It
          wasn’t until 1993 that a discussion emerged on the proposed image tag.
        </p>
      </div>
    </>
  );
};

export default Animation1;
