const router = require("express").Router(); 
const Workouts = require('../models/models')


  //get all workouts
  router.get("/api/workouts", (req, res) => {
    Workouts.find({})
      .then(dbWorkouts => {
        res.json(dbWorkouts);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router
