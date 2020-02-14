//const db = require("../models");
const Workout = require("../models/workout");
//const Exercise = require("../models/exercise");


module.exports = function(app) {

  Workout.create({ name: "Workouts" })
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({message}) => {
    console.log("message: ", message);
  });


  //GET (read) routes for all workouts 
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

 //GET (read) specs for dashboard
 app.get("/stats", function (req, res) {
  //app.get("/api/workouts/range", function (req, res) {  
  Workout.find({}).then(function (dbWorkout) {
          res.json(dbWorkout);
      }).catch(err => {
          res.json(err);
      })
});


//GET (read) workout by id B
app.get("/api/workouts/:id", function (req, res) {
  var id = req.params.id;
  Workout.findById(id, function (err, dbWorkout) {
        if (err) {
          console.error(err)
        }
        res.json(dbWorkout);
        console.log(dbWorkout);
  })
});

  //POST - (Create) a new workout in the database ** working ** B 
  app.post("/api/workouts", function (req, res) {
    Workout.create({})
   // Workout.create({exercise: req.body})
      .then( dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      })
  });

  
   //PUT - (update) new exercise into workout (correct) 
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