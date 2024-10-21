"use client";
import { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(useGSAP);
}

const App = () => {
  const boxRef1 = useRef(null);
  const boxRef2 = useRef(null);
  const boxRef3 = useRef(null);
  const boxRef4 = useRef(null);
  const boxWrapperPin = useRef(null);

  useGSAP(() => {
    ScrollTrigger.matchMedia({
      "(min-width: 768px)": () => {
        if (boxRef1.current) {
          gsap.to(boxRef1.current, {
            x: 400,
            duration: 1,
            delay: 1,
            markers: false,
          });
        }

        if (boxRef2.current) {
          gsap.to(boxRef2.current, {
            scale: 2,
            duration: 3,
            ease: "none",
            delay: 1,
            scrollTrigger: {
              trigger: boxRef2.current,
              scroller: "body",
              start: "top 90%",
              end: "+=300",
              scrub: 1,
              markers: false,
            },
          });
        }

        if (boxWrapperPin.current) {
          gsap.fromTo(
            boxRef3.current,
            {
              translateX: 0,
            },
            {
              translateX: "-190vw",
              ease: "none",
              duration: 1,
              scrollTrigger: {
                trigger: boxWrapperPin.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true,
                markers: false,
              },
            }
          );
        }

        if (boxRef4.current) {
          gsap.to(boxRef4.current, {
            x: 500,
            scale: 2,
            duration: 1,
            // rotate: 360,
            ease: "power2",
            delay: 1,
            scrollTrigger: {
              trigger: boxRef4.current,
              scroller: "body",
              start: "top 60%",
              end: "+=20",
              scrub: 5,
              markers: false,
            },
          });
        }
      },
    });
  });

  return (
    <div className="min-h-screen w-full">
      <div className="h-screen bg-blue-300 flex items-center justify-center">
        <div
          ref={boxRef1}
          className="h-52 aspect-square bg-red-300 flex items-center justify-center"
        >
          Animation Box 1
        </div>
      </div>
      <div className="h-screen bg-blue-300 flex items-center justify-center">
        <div
          ref={boxRef2}
          className="h-52 aspect-square bg-red-400 flex items-center justify-center"
        >
          Animation Box 2
        </div>
      </div>

      <div ref={boxWrapperPin} className="bg-slate-200 overflow-hidden">
        <div
          ref={boxRef3}
          className="md:text-[25vw]  md:whitespace-nowrap h-screen md:w-[200vw]"
        >
          Welcome to this Website
        </div>
      </div>
      <div className="h-screen bg-blue-300 flex items-center justify-center">
        <div
          ref={boxRef4}
          className="h-52 aspect-square bg-red-400 flex items-center justify-center"
        >
          Animation Box 3
        </div>
      </div>
    </div>
  );
};

export default App;

// const horizontalElements = gsap.utils.toArray(".horizontal-wrapper");
// const panelsArray = [];
// horizontalElements.forEach((el, i) => {
//   const container = el.querySelector(".horizontal-container");
//   const panels = gsap.utils.toArray(".panel", container);
//   panelsArray.push(panels.length);
//   gsap.to(container, {
//     xPercent: -(100 * (panels.length - 1)),
//     ease: "none",
//     scrollTrigger: {
//       trigger: container,
//       start: (s) => {
//         if (i) {
//           return (
//             "center+=" + window.innerHeight * i * panelsArray[i - 1] + " center"
//           );
//         } else {
//           return "center center";
//         }
//       },
//       end: "+=" + 100 * panels.length + "%",
//       pin: "#mainContainer",
//       scrub: true,
//       markers: {
//         indent: 150 * i,
//         startColor: "white",
//         endColor: "white"
//       },
//       id: i + 1
//     }
//   });
// });
