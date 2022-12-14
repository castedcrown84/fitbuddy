const router = require('express').Router();
const {createWorkout, getWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')


//Get all workouts
router.get("/", getWorkouts)

//Get a single workout
router.get("/:id", getWorkout)

router.post('/', createWorkout)
  
router.delete('/:id', deleteWorkout)


router.patch("/:id", updateWorkout)

module.exports = router;