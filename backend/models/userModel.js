const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jwt-simple');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['developer', 'project_manager'], default: 'developer' },
});

userSchema.methods.hashPassword = async function () {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
};

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateToken = function () {
  const payload = { id: this._id, role: this.role };
  return jwt.encode(payload, process.env.JWT_SECRET);
};

module.exports = mongoose.model('User', userSchema);
