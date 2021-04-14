const router = require("express").Router();
const Workout = require("../models");

router.post("/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

// router.post("/transaction/bulk", ({ body }, res) => {
//   Transaction.insertMany(body)
//     .then(dbTransaction => {
//       res.json(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

router.get("/workouts", (req, res) => {
  // console.log(Object.keys(Workout), "this is the workout model");
  // console.log(Workout.modelName, "this is the model name");
  // console.log(Workout.collection, "this is the model name");

  Workout.aggregate([
    {
        $addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    },
    ]).then(workout => {
      res.json(workout);
    }).catch(err => {
      res.json(err)
    })
  })

router.get('/workouts/range', (req, res) => {
  Workout.find().sort({day: -1}).limit(7)
  .then(data => {
    console.log(data);
    return res.json(data);
  })
  .catch(err => {
    if (err){
      console.log(err);
      return res.status(500).json(err);
    }
  })
});

router.put('/workouts/:id', (req, res) => {
  Workout.findOneAndUpdate({
     _id: req.params.id
    },
    {
      $push: 
      { 
        exercises: req.body
      }
    })
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.json(err);
  })
})

module.exports = router;