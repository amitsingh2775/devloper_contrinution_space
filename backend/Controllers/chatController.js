const Chat = require('../models/chatModel'); // Create a Chat model

// Get chat history for a specific project
const getChatHistory = async (req, res) => {
  try {
    const chatHistory = await Chat.find({ projectId: req.params.projectId }).sort({ createdAt: 1 });
    res.json(chatHistory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch chat history' });
  }
};

module.exports = { getChatHistory };
