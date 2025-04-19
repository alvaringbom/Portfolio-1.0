// importera från cms
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <>
      <section id="projects" className="section-container">
        <div className="section-title">
          <h2>Portfölj</h2>
        </div>
        <div className="section-content">
          <ProjectItem />
        </div>
      </section>
    </>
  );
};

export default Projects;
