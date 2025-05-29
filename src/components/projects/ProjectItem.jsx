import Arrow from "../../images/arrow.png";

const ProjectItem = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-text">
          <div className="project-title-with-arrow">
            <h3>{title}</h3>
            <img src={Arrow} alt="Pil" className="arrow-icon" />
          </div>
          <p>{description}</p>
        </div>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="project-image" />
        )}
      </div>
      <div className="project-tags">
        <span className="project-tag">Figma</span>
        <span className="project-tag">React</span>
        <span className="project-tag">UI</span>
      </div>
    </div>
  );
};

export default ProjectItem;
