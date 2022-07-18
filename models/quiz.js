const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuizSchema = new Schema({
  questions: [
    {
      text: {
        type: String,
      },
      answers: [
        {
          text: {
            type: String,
          }
        }
      ]
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = Quiz = mongoose.model('quiz', QuizSchema);