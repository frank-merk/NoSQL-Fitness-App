const router = require("express").Router();
const db = require("../models");

router.post("/workouts", ({ body }, res) => {
  db.Workout.create(body)
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
  db.Workout.find({}, (err, workouts) => {
    if (err) {
      console.log(err);
    } else {
      res.json(workouts);
    }
  })
});

router.get('/workouts/range', (req, res) => {
  db.Workout.find().sort({day: -1}).limit(10)
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
  db.Workout.findOneAndUpdate({
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