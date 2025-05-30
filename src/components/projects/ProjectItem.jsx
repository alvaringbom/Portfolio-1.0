import Arrow from "../../images/arrow.png";

const ProjectItem = ({ title, description, imageUrl, tags }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-text">
          <div className="project-title-with-arrow">
            <h3>{title}</h3>
            <img src={Arrow} alt="Pil" className="arrow-icon" />
          </div>
          <p>{description}</p>
          {tags && tags.length > 0 && (
            <div className="tag-container">
              {tags.map((tag, index) => (
                <span key={index} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="project-image" />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
