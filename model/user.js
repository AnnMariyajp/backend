const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  FirstName: { type: String, required: true },
  LastName: { type: String, required: true },
  MobNo: { type: Number, required: true },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  Role:{type:String}
});

module.exports = mongoose.model('user', userSchema);