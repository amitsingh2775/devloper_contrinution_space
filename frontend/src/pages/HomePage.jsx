import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from '../components/ProjectCard';

const HomePage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const { data } = await axios.get('/api/projects');
        console.log('Fetched projects:', data); // Log the data
        if (Array.isArray(data)) {
          setProjects(data);
        } else {
          console.error('Expected an array but got:', data);
          setProjects([]); // Set to an empty array if not an array
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };
    fetchProjects();
  }, []);

  const joinProject = async (projectId) => {
    await axios.post('/api/projects/join', { projectId });
    alert('Joined project!');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Projects</h1>
      <div className="grid grid-cols-3 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} onJoin={joinProject} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
