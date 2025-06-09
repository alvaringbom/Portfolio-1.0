import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import client from "../utils/contentfulClient"; // justera vägen vid behov

const ProjectPage = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await client.getEntries({
          content_type: "project",
          "fields.slug": slug,
        });

        if (res.items.length > 0) {
          setProject(res.items[0]);
        }
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProject();
  }, [slug]);

  if (loading) return <p>Laddar projekt...</p>;
  if (!project) return <p>Projekt hittades inte.</p>;

  const { title, fullDescription, image } = project.fields;

  return (
    <section className="project-detail">
      <h1>{title}</h1>
      {image && <img src={image.fields.file.url} alt={title} />}
      <p>{fullDescription}</p>
    </section>
  );
};

export default ProjectPage;
