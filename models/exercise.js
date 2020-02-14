const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ExerciseSchema = new Schema({
  type: {
    type: String,
    enum: ["Cardio", "Resistance"],
    required: "Choose and exercise type",
  },
  name: {
    type: String,
    minlenth: 2,
    required: "Enter a name",
  },
  weight: {
    type: Number,
    min: 1,
  },
  sets: {
    type: Number,
    min: 1,
  },
  reps: {
    type: Number,
    min: 1,
  },
  duration: {
    type: Number,
    required: "Enter a duration",
    min: 1,
  },
  distance: {
    type: Number,
    min: 1,
  }
});

const Exercise = mongoose.model("Exercise", ExerciseSchema);

module.exports = Exercise;
