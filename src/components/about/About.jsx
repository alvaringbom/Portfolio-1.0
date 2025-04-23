import Education from "./Education";
import Skills from "./Skills";

const About = () => {
  return (
    <section id="about" className="section-container">
      <div className="section-title">
        <h2>Om mig</h2>
      </div>
      <div className="about-section-content">
        <Education />
        <Skills />
      </div>
    </section>
  );
};

export default About;
