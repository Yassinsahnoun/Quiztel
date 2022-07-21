const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({

  text:{
      type: String, 
      required: true
  },
  answer: {
      type: String,
      required: true
  },
  choices :{
      type  :Array,
      default:[]
  }
})

module.exports = Quiz = mongoose.model('quiz', QuizSchema);