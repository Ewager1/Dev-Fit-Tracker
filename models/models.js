const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "workout type required. ex. resistance, cardio",
      },

      name: {
        type: String,
        trim: true,
        required: "workout name required ex. bicept curl",
      },

      duration: {
        type: Number,
        required: "Please enter how long you exercised for",
      },

      weight: {
        type: Number,
      },

      reps: {
        type: Number,
      },

      sets: {
        type: Number,
      },

      distance: {
        type: Number,
      },
    },
  ],
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
