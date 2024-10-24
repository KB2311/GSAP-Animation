import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import App from "./App";
import GraphAnimation from "./GraphAnimation";
import RollingText from "./RollingText";
import SidebarMenuAnimation2 from "./SidebarMenuAnimation2";
import SideMenuAnimation from "./SideMenuAnimation";
import TextAnimation from "./TextAnimation";
import VideoSection from "./VideoSection";

export default function Home() {
  return (
    <>
      <GraphAnimation />
      <SideMenuAnimation />
      <SidebarMenuAnimation2 />
      <RollingText />
      <App />
      <Animation1 />
      <Animation2 />
      <VideoSection />
      <TextAnimation />
    </>
  );
}
