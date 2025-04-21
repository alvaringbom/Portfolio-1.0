const ProjectItem = ({ title, description, imageUrl }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <div className="project-text">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        {imageUrl && (
          <img src={imageUrl} alt={title} className="project-image" />
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
