const {Schema, model} = require('mongoose');


const workoutSchema = new Schema(
  {
    title: {
        type: String,
        required: true,
        trim: true
    },
    reps: {
        type: Number,
        required: true,
        trim: true
    },
    load: {
        type: Number,
        required:true
    }

  }, {timestamps: true}
)


const Workouts = model("workout", workoutSchema)


module.exports = Workouts;