const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise: [
    {
      type: Schema.Types.ObjectId,
      ref: "Exercise"
      //"Exercise" comes from exercise.js line 10 - needs to be the same
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;