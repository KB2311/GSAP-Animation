import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import App from "./App";
import RollingText from "./RollingText";
import TextAnimation from "./TextAnimation";
import VideoSection from "./VideoSection";

export default function Home() {
  return (
    <>
      <RollingText />
      <App />
      <Animation1 />
      <Animation2 />
      <VideoSection />
      <TextAnimation />
    </>
  );
}
