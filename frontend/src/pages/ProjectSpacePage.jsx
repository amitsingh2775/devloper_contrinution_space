import React from 'react';
import ProjectDetail from '../components/ProjectDetail';
import Chat from '../components/Chat';

const ProjectSpacePage = ({ match }) => {
  const projectId = match.params.id;

  return (
    <div className="p-4">
      <ProjectDetail projectId={projectId} />
      <Chat projectId={projectId} />
    </div>
  );
};

export default ProjectSpacePage;
