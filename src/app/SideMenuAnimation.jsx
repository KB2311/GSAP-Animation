"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const SideMenuAnimation = () => {
  const navIconRef = useRef(null);
  const navbarRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(navbarRef.current, {
      clipPath: "circle(150% at 45px 45px)",
    }).to(
      itemsRef.current,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        stagger: 0.25,
      },
      "-=0.25"
    );

    const handleNavClick = () => {
      if (tl.reversed() || tl.paused()) tl.play();
      else tl.reverse();
    };

    const navIcon = navIconRef.current;
    navIcon.addEventListener("click", handleNavClick);

    return () => {
      navIcon.removeEventListener("click", handleNavClick);
    };
  }, []);

  // Inline styles
  const navbarStyle = {
    position: "fixed",
    backgroundColor: "#e91e63",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    paddingTop: "5rem",
    maxWidth: "300px",
    clipPath: "circle(30px at 45px 45px)",
  };

  const navIconStyle = {
    position: "absolute",
    width: "30px",
    height: "30px",
    top: "45px",
    left: "45px",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  const lineStyle = {
    height: "3px",
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: "5px",
  };

  const lineStyle2 = {
    height: "3px",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: "5px",
    margin: "7px 0",
    alignSelf: "flex-start",
  };

  const menuStyle = {
    listStyle: "none",
    padding: 0,
  };

  const itemStyle = {
    margin: "2rem",
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    fontWeight: 200,
    fontSize: "2rem",
    color: "#fff",
    textTransform: "uppercase",
    letterSpacing: "2px",
    transform: "translateY(-15px) scale(2)",
    transformOrigin: "center center",
    opacity: 0,
  };

  return (
    <nav style={navbarStyle} ref={navbarRef}>
      <div style={navIconStyle} ref={navIconRef}>
        <div style={lineStyle}></div>
        <div style={lineStyle2}></div>
        <div style={lineStyle}></div>
      </div>

      <ul style={menuStyle}>
        {["Rooster", "Frog", "Fox", "Peacock", "Spider"].map(
          (animal, index) => (
            <li
              key={index}
              style={itemStyle}
              ref={(el) => (itemsRef.current[index] = el)}
            >
              {animal}
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default SideMenuAnimation;
