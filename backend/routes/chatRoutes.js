const express = require('express');
const { getChatHistory } = require('../Controllers/chatController'); // Create a controller for chat
const router = express.Router();

// Get chat history for a specific project
router.get('/history/:projectId', getChatHistory);

module.exports = router;
