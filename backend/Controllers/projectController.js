const Project = require('../models/projectModel');

// Create Project
const createProject = async (req, res) => {
  const { title, description, technology, repoLink, tasks } = req.body;
  try {
    const project = await Project.create({
      title,
      description,
      technology,
      owner: req.user.id,
      tasks,
      repoLink
    });
    res.json(project);
  } catch (error) {
    res.status(400).json({ error: 'Project creation failed' });
  }
};

// Join Project
const joinProject = async (req, res) => {
  const { projectId } = req.body;
  const project = await Project.findById(projectId);
  if (project) {
    project.developers.push(req.user.id);
    await project.save();
    res.json(project);
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
};

// Get All Projects
const getProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

// Get Single Project Detail
const getProjectDetail = async (req, res) => {
  const project = await Project.findById(req.params.id).populate('owner').populate('developers');
  if (project) {
    res.json(project);
  } else {
    res.status(404).json({ error: 'Project not found' });
  }
};

// Update Project Progress
const updateProjectProgress = async (req, res) => {
  const { progress } = req.body;
  const project = await Project.findById(req.params.id);
  if (project && project.owner.toString() === req.user.id.toString()) {
    project.progress = progress;
    await project.save();
    res.json(project);
  } else {
    res.status(404).json({ error: 'Project not found or unauthorized' });
  }
};

module.exports = { createProject, joinProject, getProjects, getProjectDetail, updateProjectProgress };
