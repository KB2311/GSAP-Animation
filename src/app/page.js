import Animation1 from "./Animation1";
import Animation2 from "./Animation2";
import App from "./App";
import SplitTextAnimation from "./SplitTextAnimation";
import TextAnimation from "./TextAnimation";
import VideoSection from "./VideoSection";

export default function Home() {
  return (
    <>
      <SplitTextAnimation />
      <App />
      <Animation1 />
      <Animation2 />
      <VideoSection />
      <TextAnimation />
    </>
  );
}
