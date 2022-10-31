import { useState } from "react"
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'


const WorkoutForm = () => {
    const { dispatch } = useWorkoutsContext()
    
    
    const [title, setTitle] = useState("")
    const [load, setLoad] = useState("")
    const [reps, setReps] = useState("")
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

const HandleSubmit = async (e) => {

    e.preventDefault();

    const workout = {title, load, reps}
    //fetches post request
    const response = await fetch('/api/workouts/', {
        method : "POST",
        body: JSON.stringify(workout),
        headers : {
            "Content-Type" : "application/json"
        }
    })
    const json = await response.json();

    if(!response.ok){
        setError(json.error)
        setEmptyFields(json.emptyFields)
    }
    if(response.ok){
        setEmptyFields([])
        setError(null)
        setTitle('')
        setReps('')
        setLoad('')
    
        dispatch({type: 'CREATE_WORKOUT', payload: json})

    }
}
 
    return( 
    <form onSubmit={HandleSubmit}>
    <label>Exercise Title</label>
    <input 
    type="text" 
    value={title}
    
    className={emptyFields.includes('title') ? 'error' : ''}
    onChange={(e) => setTitle(e.target.value)} 
    />

    <label>Load (in kg)</label>
    <input 
    type="number" 
    value={load}
    onChange = {(e) => setLoad(e.target.value)}
    className={emptyFields.includes('load') ? 'error' : ''}
    />
    <label>Reps</label>
    <input 
    type="number" 
    value={reps}
    onChange = {(e) => setReps(e.target.value)}
    
    className={emptyFields.includes('reps') ? 'error' : ''}
    
    />

        <button>Add Workout</button>
        {error && <div className="error">{error}</div>}
    </form> );
}
 
export default WorkoutForm;