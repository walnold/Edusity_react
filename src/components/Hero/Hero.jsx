import "./Hero.css";
import dark_arrow from '../../assets/dark-arrow.png';
const Hero = () => {
  return (
    <section className="container hero">
      <div className="hero-text">
        <h1>We Ensure Better Education for a Better World</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
