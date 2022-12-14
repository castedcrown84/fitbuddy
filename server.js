require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()
const path = require("path")

const PORT = process.env.PORT || 3001


// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})

// routes
app.use('/api/workouts', workoutRoutes)

app.use(express.static(path.resolve(__dirname, "./client/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});

if (process.env.NODE_ENV === 'production') {
  //*Set static folder up in production
  app.use(express.static('front-end/build'));

  app.get('*', (req,res) => res.sendFile(path.resolve(__dirname, 'front-end', 'build','index.html')));
}

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database')
    // listen to port
    app.listen(PORT, () => {
      console.log(`Listening to port on ${PORT}`)
    })
  })
  .catch((err) => {
    console.log(err)
  }) 
