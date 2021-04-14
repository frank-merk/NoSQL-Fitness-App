const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
      type: Date,
      default: Date.now()
  },
  exercises: [
      {
        name: {
          type: String,
          trim: true,
          required: "Enter a name for the exercise."
        },
        type: {
          type: String,
          required: "Enter a type for the exercise."
        },
        weight: {
          type: Number,
          required: "How much weight (in pounds)?"
        },
        sets: {
          type: Number,
          required: "How many sets?"
        },
        reps: {
          type: Number,
          required: "How many reps?"
        },
        duration: {
          type: Number,
          required: "How long for duration (in minutes)?"
        }
      }
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
