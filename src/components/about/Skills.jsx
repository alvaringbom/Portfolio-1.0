const Skills = ({ category, description }) => {
  return (
    <div>
      <h4 className="about-title">{category}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Skills;
