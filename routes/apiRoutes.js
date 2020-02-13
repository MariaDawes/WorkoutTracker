const db = require("../models");
//const Workout = require("../models/workout");
//const Exercise = require("../models/exercise");


module.exports = function(app) {

  //Crate the object in the db, to get in the backend 
app.post("/api/workouts", (req, res) => {
  db.Workout.create(req.body)
    .then(dbWorkout => {
      res.json(dbWorkout)
    })
    .catch(err => {
      res.json(err);
    });
});

//Update the current workout with new information - "continue workout"
//Add a new workout
//get the data and put data in the database
app.get("/api/workouts", (req, res) => {
  Workout.find()
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

//when someone modifies the form. ous in the new exercise in to the array
app.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id, 
    {
      $push: {exercise: body}
    },
    {
      new: true, runValidators: true
    }
  )
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});


};