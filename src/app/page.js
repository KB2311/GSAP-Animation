import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import App from "./App";
import BoxAnimation3D from "./BoxAnimation3D";
import CircleSvgAnimation from "./CircleSvgAnimation";
import GraphAnimation from "./GraphAnimation";
import GraphAnimation2 from "./GraphAnimation2";
import RollingText from "./RollingText";
import SidebarMenuAnimation2 from "./SidebarMenuAnimation2";
import SideMenuAnimation from "./SideMenuAnimation";
import TextAnimation from "./TextAnimation";
import VideoSection from "./VideoSection";

export default function Home() {
  return (
    <>
      <SideMenuAnimation />
      <SidebarMenuAnimation2 />
      <GraphAnimation />
      <GraphAnimation2 />
      <CircleSvgAnimation />
      <BoxAnimation3D />
      <RollingText />
      <App />
      <Animation1 />
      <Animation2 />
      <VideoSection />
      <TextAnimation />
    </>
  );
}
