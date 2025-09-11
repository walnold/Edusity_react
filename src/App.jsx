import About from "./components/About/About";
import Campus from "./components/Campus/Campus";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/programs/Programs";
import Title from "./components/Title/Title";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title title="What we offer" subtitle="Our Programs" />
        <Programs />
        <About />
        <Title title="Campus Photos" subtitle="Gallery" />
        <Campus/>
      </div>
    </div>
  );
}

export default App;
