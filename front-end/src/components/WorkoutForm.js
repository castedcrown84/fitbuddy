import { useState } from "react"

const WorkoutForm = () => {
    const [title, setTile] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)

const HandleSubmit = async (e) => {

    e.preventDefaul();

    const workout = {title, load, reps}

    const response = await fetch('/api/workout/', {
        method : "POST",
        body: JSON.stringify(workout),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const data = await response.json();

    if(!response.ok){
        setError(data.error)
    }
    if(response.ok){
        setError(null)
        console.log("WorkOut Added")
    }
}
 
    return ( <form onSubmit={HandleSubmit}>
    <label>Title</label>
    <input 
    type="text" 
    value={title}
    onChange={(e) => setTile(e.target.value)} 
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


    </form> );
}
 
export default WorkoutForm;