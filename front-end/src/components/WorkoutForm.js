import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)

const HandleSubmit = async (e) => {

    e.preventDefault();

    const workout = {title, load, reps}
    //fetches post request
    const response = await fetch('/api/workout/', {
        method : "POST",
        body: JSON.stringify(workout),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const json = await response.json();

    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setError(null)
        setTitle('')
        setReps('')
        setLoad('')
        console.log('new workout added:', json)

    }
}
 
    return( 
    <form onSubmit={HandleSubmit}>
    <label>Exercise Title</label>
    <input 
    type="text" 
    value={title}
    onChange={(e) => setTitle(e.target.value)} 
    />

    <label>Load</label>
    <input 
    type="number" 
    value={load}
    onChange = {(e) => setLoad(e.target.value)}
    />
    <label>Reps</label>
    <input 
    type="number" 
    value={reps}
    onChange = {(e) => setReps(e.target.value)}
    
    />

        <button>Add Workout</button>
    </form> );
}
 
export default WorkoutForm;