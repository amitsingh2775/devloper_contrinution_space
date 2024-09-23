import React from 'react';

const ProjectCard = ({ project, onJoin }) => {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-xl font-bold">{project.title}</h2>
      <p>Owner: {project.owner.username}</p>
      <p>Technology: {project.technology}</p>
      <button
        onClick={() => onJoin(project._id)}
        className="mt-2 p-2 bg-blue-500 text-white rounded"
      >
        Join Project
      </button>
    </div>
  );
};

export default ProjectCard;
