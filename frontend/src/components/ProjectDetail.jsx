import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProjectDetail = ({ projectId }) => {
  const [project, setProject] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      const { data } = await axios.get(`/api/projects/${projectId}`);
      setProject(data);
    };
    fetchProject();
  }, [projectId]);

  if (!project) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>Progress: {project.progress}%</p>
      <h3>Team:</h3>
      <ul>
        {project.developers.map((dev) => (
          <li key={dev._id}>{dev.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectDetail;
