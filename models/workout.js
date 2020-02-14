const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercise: [
    {
      type: {
        type: String,
        required: "Select Resistance or Cardio exercise type",
      },
      name: {
        type: String,
        required: "Enter a name",
      },
      distance: {
        type: Number,
        min: 1,
      },
      duration: {
        type: Number,
        required: "Enter a duration"
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
      }
      
    }]
});

// WorkoutSchema.virtual("totalDuration").get(function() {
//   return this.exercise.reduce((total, exercise) => {
//     return total + exercise.duration;
//   }, 0);
// }) 

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;