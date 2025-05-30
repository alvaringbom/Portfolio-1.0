const Education = ({ title, school, tags }) => {
  return (
    <div className="about-element">
      <h4 className="about-title">{title}</h4>

      <p>{school}</p>
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
  );
};

export default Education;
