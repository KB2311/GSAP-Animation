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

/*   For Normal Animation that not Used ScrollTrigger use This to Stop Animation in Mobile Screens */

// "use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import "./BoxAnimation.css"; // Include your CSS file for styling

// const BoxAnimation = () => {
//   const boxRef = useRef(null);
//   const mediaQuery = window.matchMedia("(max-width: 767px)");

//   useEffect(() => {
//     const boxAnimation = gsap.to(boxRef.current, {
//       x: 500, // Move box 500px to the right
//       duration: 2,
//       paused: true, // Start paused
//       ease: "power2.out",
//     });

//     const handleMediaChange = (event) => {
//       if (event.matches) {
//         // If screen width is less than 768px, kill the animation
//         boxAnimation.kill();
//       } else {
//         // If screen width is greater than or equal to 768px, play the animation
//         boxAnimation.play();
//       }
//     };

//     // Add listener for media query changes
//     mediaQuery.addListener(handleMediaChange);

//     // Initial check
//     handleMediaChange(mediaQuery);

//     // Cleanup listener on component unmount
//     return () => {
//       mediaQuery.removeListener(handleMediaChange);
//       boxAnimation.kill(); // Ensure the animation is killed on unmount
//     };
//   }, []);

//   return (
//     <div className="animation-container">
//       <div className="box" ref={boxRef}></div>
//     </div>
//   );
// };

// export default BoxAnimation;
