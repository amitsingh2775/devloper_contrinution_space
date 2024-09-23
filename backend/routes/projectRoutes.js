const express = require('express');
const { createProject, joinProject, getProjects, updateProjectProgress, getProjectDetail } = require('../controllers/projectController');
const router = express.Router();

router.post('/create', createProject);
router.post('/join', joinProject);
router.get('/', getProjects); // fetch all projects
router.get('/:id', getProjectDetail); // fetch single project details
router.put('/progress/:id', updateProjectProgress); // update progress by owner

module.exports = router;
