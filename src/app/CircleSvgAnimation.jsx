"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "./CircleSvgAnimation.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import KiwiLogo from "../../public/KiWi_Logo_white.png";
import Image from "next/image";
import Circle1 from "./svg/Circle1";
import Circle2 from "./svg/Circle2";
import Circle3 from "./svg/Circle3";
import Circle4 from "./svg/Circle4";
import WrapperCircleWhite from "./svg/WrapperCircleWhite";
import WrapperCirclePink from "./svg/WrapperCirclePink";

gsap.registerPlugin(ScrollTrigger);

const SvgData = [
  {
    svg: <Circle1 />,
  },
  {
    svg: <Circle2 />,
  },
  {
    svg: <Circle3 />,
  },
  {
    svg: <Circle4 />,
  },
];

const App = () => {
  let newAngle;
  const numItems = 4;
  const angleStep = 180 / numItems;
  const validAngles = [0, -45, -90, -135];
  const [activeIndex, setActiveIndex] = useState(0);
  const autoRotateTimer = useRef(null);
  const itemsRef = useRef([]);
  const containerRef = useRef(null);
  const currentAngleRef = useRef(0);

  const contentData = [
    {
      title: "Content for Item 1",
      description: "This is the description for item 1.",
    },
    {
      title: "Content for Item 2",
      description: "This is the description for item 2.",
    },
    {
      title: "Content for Item 3",
      description: "This is the description for item 3.",
    },
    {
      title: "Content for Item 4",
      description: "This is the description for item 4.",
    },
  ];

  const updateContent = (index) => {
    return contentData[index];
  };

  const positionItems = () => {
    itemsRef.current.forEach((item, i) => {
      const angle = i * angleStep * (Math.PI / 180);
      const x = Math.cos(angle) * 150;
      const y = Math.sin(angle) * 150;
      gsap.set(item, { x, y, transformOrigin: "center center" });
    });
  };

  useEffect(() => {
    if (containerRef.current) {
      const trigger = ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top center",
        end: "bottom center",
        onEnter: () => {
          positionItems();
          startAutoRotate();
        },
        onLeave: () => {
          stopAutoRotate();
        },
        onEnterBack: () => {
          positionItems();
          startAutoRotate();
        },
        onLeaveBack: () => {
          stopAutoRotate();
        },
        markers: true,
      });

      return () => {
        trigger.kill();
      };
    }
  }, []);

  const startAutoRotate = () => {
    autoRotateTimer.current = setInterval(() => {
      rotateItems(-1);
    }, 3000);
  };

  const stopAutoRotate = () => {
    if (autoRotateTimer.current) {
      clearInterval(autoRotateTimer.current);
    }
  };

  const resetAnimation = () => {
    gsap.to(`.${styles.wrapper}`, {
      rotation: 0,
      transformOrigin: "center center",
      duration: 0.5,
      ease: "power1.inOut",
    });

    itemsRef.current.forEach((item) => {
      gsap.to(item, {
        rotation: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    });

    setActiveIndex(0);
    newAngle = 0;
    currentAngleRef.current = 0;
  };

  const rotateItems = (direction) => {
    let newAngle = currentAngleRef.current + direction * angleStep;

    if (newAngle <= -180) {
      newAngle = 0;
    }

    currentAngleRef.current = newAngle;

    newAngle = validAngles.reduce((prev, curr) => {
      return Math.abs(curr - newAngle) < Math.abs(prev - newAngle)
        ? curr
        : prev;
    });

    gsap.to(`.${styles.wrapper}`, {
      rotation: newAngle,
      transformOrigin: "center center",
      duration: 0.5,
      ease: "power1.inOut",
    });

    itemsRef.current.forEach((item) => {
      gsap.to(item, {
        rotation: -newAngle,
        duration: 0.5,
        ease: "power1.inOut",
      });
    });

    const indexFromAngle = (angle) => {
      return validAngles.indexOf(angle);
    };

    const newActiveIndex = indexFromAngle(newAngle);

    setActiveIndex(newActiveIndex);
  };

  const resetAutoRotate = () => {
    if (autoRotateTimer.current) clearInterval(autoRotateTimer.current);
    startAutoRotate();
  };

  const handleItemClick = (index) => {
    const direction = index > activeIndex ? -1 : 1;
    const steps = Math.abs(index - activeIndex);
    rotateItems(direction * steps);
    resetAutoRotate();
  };

  return (
    <div className={styles.container} ref={containerRef}>
      <div style={{ position: "relative" }}>
        <Image
          className={styles.KiWiImage}
          width={200}
          height={200}
          src={KiwiLogo}
          alt="KiWi logo"
        />
        <svg
          className={styles.Svg}
          width="595"
          height="596"
          viewBox="0 0 595 596"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="297.5"
            cy="297.737"
            r="296"
            stroke="url(#paint0_linear_3276_103)"
            stroke-width="3"
            stroke-dasharray="10 10"
          />
          <defs>
            <linearGradient
              id="paint0_linear_3276_103"
              x1="584.053"
              y1="268.76"
              x2="-20.606"
              y2="304.177"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.155" stop-color="#EB2188" />
              <stop offset="1" stop-color="#EEDAE7" stop-opacity="0" />
            </linearGradient>
          </defs>
        </svg>

        <div className={styles.wrapper}>
          {SvgData.map((item, index) => {
            const color = activeIndex === index ? "white" : "#5E5E5E";
            return (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className={styles.item}
                onClick={() => handleItemClick(index)}
              >
                {activeIndex === index ? (
                  <WrapperCirclePink />
                ) : (
                  <WrapperCircleWhite />
                )}
                <div className={styles.SvgBox}>
                  {React.cloneElement(item.svg, { color })}
                </div>
              </div>
            );
          })}
          {/* {Array.from({ length: numItems }, (_, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`${styles.item} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {index + 1}
            </div>
          ))} */}
        </div>
      </div>

      <div className={styles.content}>
        <h2>{updateContent(activeIndex).title}</h2>
        <p>{updateContent(activeIndex).description}</p>
      </div>
    </div>
  );
};

export default App;
