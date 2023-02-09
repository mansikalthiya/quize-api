const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
  categoryname: String
});

const  user = mongoose.model('homecategory', student);
module.exports = user;