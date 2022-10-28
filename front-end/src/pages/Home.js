import { useEffect, useState } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";


const Home = () => {

    const [workOuts, setWorkOuts] = useState(null)

    useEffect(() => {

        const fetchWorkouts = async () => {

            const response = await fetch("/api/workouts")
            const data = await response.json()

            if(response.ok){
                setWorkOuts(data)
            }

        }

        fetchWorkouts();

    }, [])


    return ( 
    <div className="home">
        <div className="workouts">
            {
                workOuts && workOuts.map((workout) => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))
            }
        </div>

        <WorkoutForm/>
        
    </div> 
    );
    
}
 
export default Home;