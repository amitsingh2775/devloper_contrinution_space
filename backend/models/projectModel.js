const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  technology: { type: String, required: true },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  developers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  tasks: [{ type: String }], // List of assignments/tasks
  progress: { type: Number, default: 0 }, // Progress bar percentage
  repoLink: { type: String, required: true }, // GitHub Repo Link
});

module.exports = mongoose.model('Project', projectSchema);
