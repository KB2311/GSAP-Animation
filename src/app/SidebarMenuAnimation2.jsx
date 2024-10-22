"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const SidebarMenuAnimation2 = () => {
  const containerRef = useRef(null);
  const closeRef = useRef(null);
  const navRef = useRef(null);
  const h2Ref = useRef(null);
  const linksRef = useRef([]);
  const closeIconRef = useRef(null);

  useEffect(() => {
    const open = containerRef.current;
    const close = closeRef.current;
    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "expo.inOut" },
      paused: true,
    });

    tl.to(navRef.current, { right: 0 })
      .to(navRef.current, { height: "100vh" }, "-=.1")
      .to(
        linksRef.current,
        { opacity: 1, pointerEvents: "all", stagger: 0.2 },
        "-=.8"
      )
      .to(close, { opacity: 1, pointerEvents: "all" }, "-=.8")
      .to(h2Ref.current, { opacity: 1 }, "-=1");

    const handleOpenClick = () => {
      if (tl.reversed()) {
        tl.play();
      } else {
        tl.play();
      }
    };

    const handleCloseClick = () => {
      tl.reverse();
    };

    open.addEventListener("click", handleOpenClick);
    close.addEventListener("click", handleCloseClick);

    return () => {
      open.removeEventListener("click", handleOpenClick);
      close.removeEventListener("click", handleCloseClick);
    };
  }, []);

  // Inline styles
  const containerStyle = {
    cursor: "pointer",
    position: "absolute",
    top: "5%",
    right: "5%",
    width: "30px",
    height: "20px",
  };

  const barsStyle = {
    width: "30px",
    height: "4px",
    background: "#000",
    position: "relative",
  };

  const barBeforeStyle = {
    content: "''",
    position: "absolute",
    width: "30px",
    height: "4px",
    background: "#000",
    top: "9px",
  };

  const barAfterStyle = {
    content: "''",
    position: "absolute",
    width: "30px",
    height: "4px",
    background: "#000",
    top: "18px",
  };

  const navStyle = {
    position: "absolute",
    width: "100%",
    height: "30px",
    background: "#000",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    right: "-200vw",
    flexDirection: "column",
  };

  const ulStyle = {
    listStyle: "none",
    padding: 0,
  };

  const liStyle = {
    margin: "50px 0",
  };

  const linkStyle = {
    color: "#fafafa",
    fontSize: "2em",
    textDecoration: "none",
    fontWeight: 500,
    position: "relative",
    opacity: 0,
    pointerEvents: "none",
  };

  const linkAfterStyle = {
    content: "''",
    width: "100%",
    position: "absolute",
    height: "3px",
    borderRadius: "5px",
    background: "#fff",
    bottom: "-10px",
    left: 0,
    transformOrigin: "left",
    transition: "transform .5s ease",
    transform: "scaleX(0)",
  };

  const closeStyle = {
    width: "30px",
    height: "30px",
    position: "absolute",
    top: "6%",
    right: "5%",
    cursor: "pointer",
    opacity: 0,
    pointerEvents: "none",
  };

  const closeBeforeStyle = {
    content: "''",
    position: "absolute",
    width: "30px",
    height: "4px",
    background: "#fff",
    transform: "rotate(-45deg)",
  };

  const closeAfterStyle = {
    content: "''",
    position: "absolute",
    width: "30px",
    height: "4px",
    background: "#fff",
    transform: "rotate(45deg)",
  };

  const h2Style = {
    position: "absolute",
    top: "5%",
    left: "5%",
    opacity: 0,
    color: "#fff",
    fontSize: "2em",
    pointerEvents: "none",
  };

  return (
    <div>
      <div className="container" ref={containerRef} style={containerStyle}>
        <div className="bars" style={barsStyle}>
          <div style={barBeforeStyle}></div>
          <div style={barAfterStyle}></div>
        </div>
      </div>

      <h1>Animated Nav With GSAP 3.0</h1>

      <nav ref={navRef} style={navStyle}>
        <h2 ref={h2Ref} style={h2Style}>
          Ahmed
        </h2>

        <div className="close" ref={closeRef} style={closeStyle}>
          <div ref={closeIconRef}>
            <div style={closeBeforeStyle}></div>
            <div style={closeAfterStyle}></div>
          </div>
        </div>

        <ul style={ulStyle}>
          {["Home", "About", "Projects", "Contact"].map((item, index) => (
            <li key={index} style={liStyle}>
              <a
                href="#"
                style={linkStyle}
                ref={(el) => (linksRef.current[index] = el)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default SidebarMenuAnimation2;
