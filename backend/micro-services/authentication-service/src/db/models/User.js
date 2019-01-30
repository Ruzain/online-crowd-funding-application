
const mongoose = require('mongoose');
const UserSchema = require('../schema/user-schema');

const User = mongoose.model('User', UserSchema);
//const view = mongoose.model();



module.exports = User;


