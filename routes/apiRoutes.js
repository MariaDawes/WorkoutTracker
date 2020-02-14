//const db = require("../models");
const Workout = require("../models/workout");
const Exercise = require("../models/exercise");


module.exports = function(app) {

  //GET routes for all workouts (Read)
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(function (dbWorkout) {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      })
  })

 //GET - specs for dashboard
 app.get("/api/workouts/range", function (req, res) {
  Workout.find({}).then(function (dbWorkout) {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      })
});


//GET workout by id
app.get("/api/workouts/:id", function (req, res) {
  var id = req.params.id;
  Workout.findById(id, function (err, dbWorkout) {
        if (err) {
          console.error(err)
        }
        res.json(dbWorkout);
  })
});

  //POST - Create a new workout in the database ** working **
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
   // Workout.create({exercise: req.body})
      .then(function (dbWorkout) {
        res.json(dbWorkout)
      })
      .catch(err => {
        res.json(err);
      });
  });

  
   //PUT - new exercise into workout (correct) 
  app.put("/api/workouts/:id", function (req, res) {
    const query =  req.params.id; 
    Workout.findByIdAndUpdate(query, {
      $push: {exercise: [req.body]}
     }, function (err, dbWorkout) {
        if (err) {
          res.json(err);
          } else {
              res.json(dbWorkout);
          }
      })
    })

};