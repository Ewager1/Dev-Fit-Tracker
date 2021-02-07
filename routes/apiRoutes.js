module.exports = function (app) {
  //get all workouts
  app.get("/api/workouts", (req, res) => {
    db.workouts.find({}, (error, data) => {
      if (error) {
        res.status(422).json(error);
      } else {
        res.json(data);
        console.log(data);
      }
    });
  });
};
