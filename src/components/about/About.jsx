import Education from "./Education";
import Skills from "./Skills";
import Other from "./Other";
import client from "../../utils/contentfulClient";
import { useState, useEffect } from "react";

const About = () => {
  const [education, setEducation] = useState([]);
  const [skills, setSkills] = useState([]);
  const [other, setOther] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [educationRes, skillsRes, otherRes] = await Promise.all([
          client.getEntries({ content_type: "education" }),
          client.getEntries({ content_type: "skills" }),
          client.getEntries({ content_type: "other" }),
        ]);

        setEducation(educationRes.items);
        setSkills(skillsRes.items);
        setOther(otherRes.items);
      } catch (err) {
        console.error("Error fetching data from Contentful", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p>Laddar innehåll...</p>;
  if (error) return <p>Något gick fel: {error.message}</p>;

  return (
    <section id="about" className="section-container">
      <div className="section-title">
        <h1>Om mig</h1>
      </div>
      <div className="about">
        <div className="about-section">
          <h3>Utbildning</h3>
          <div className="about-section-content">
            {education.map((item) => (
              <Education
                key={item.sys.id}
                title={item.fields.title}
                school={item.fields.school}
                tags={item.fields.tags}
              />
            ))}
          </div>
        </div>
        <div className="about-section">
          <h3>Skills</h3>
          <div className="about-section-content">
            {skills.map((item) => (
              <Skills
                key={item.sys.id}
                category={item.fields.category}
                description={item.fields.description}
                tags={item.fields.tags}
              />
            ))}
          </div>
        </div>
        <div className="about-section">
          <h3>Övrigt</h3>
          {other.map((item) => (
            <Other
              key={item.sys.id}
              title={item.fields.title}
              description={item.fields.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
