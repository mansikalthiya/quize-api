const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const student = new Schema({
  categoryname: String,
  qestion:String,
  ans:String,
  option:Array
});

const  final = mongoose.model('homequize', student);
module.exports = final;