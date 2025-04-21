import { useEffect, useState } from "react";
import client from "../../utils/contentfulClient";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "project" })
      .then((res) => {
        setProjects(res.items);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Laddar projekt...</p>;
  if (error) return <p>Något gick fel: {error.message}</p>;

  return (
    <>
      <section id="projects" className="section-container">
        <div className="section-title">
          <h2>Portfölj</h2>
        </div>
        <div className="section-content">
          {projects.map((item) => (
            <ProjectItem
              key={item.sys.id}
              title={item.fields.title}
              description={item.fields.description}
              imageUrl={
                item.fields.image?.fields?.file?.url &&
                `https:${item.fields.image.fields.file.url}`
              }
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
