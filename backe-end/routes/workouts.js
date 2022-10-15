const router = require('express').Router();
const Workouts = require('../models/Workouts');
const {createWorkout, getWorkouts, getWorkout} = require('../controllers/workoutController')


//Get all workouts
router.get("/", getWorkouts)

//Get a single workout
router.get("/:id", getWorkout)

router.post('/', createWorkout)
  
router.delete('/:', (req, res) => {
    res.json({message: 'deleted'})
})


router.patch("/:", (req, res) => {
    res.json({message: 'updated'})
})

module.exports = router;