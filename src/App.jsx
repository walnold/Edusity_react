import { useState } from "react";
import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/programs/Programs";
import Testimonials from "./components/Testimonials/Testimonials";
import Title from "./components/Title/Title";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

function App() {
  const [playVideo, setPlayVideo] = useState(false);

  const handlePlay = () => {
    setPlayVideo((playVideo) => !playVideo);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What we offer" subtitle="Our Programs" />
        <Programs />
        <About handlePlay={handlePlay} />
        <Title title="Campus Photos" subtitle="Gallery" />
        <Campus  />
        <Title title="What Students Says" subtitle="Testimonials" />
        <Testimonials />
        <Title title="Get in Touch" subtitle="Contact us" />
        <Contact />
        <Footer />
      </div>

      <VideoPlayer playVideo={playVideo} handlePlay={handlePlay} />
    </div>
  );
}

export default App;
