import { useEffect, useState } from "react";


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


    return ( <div className="home">
        <div className="workouts">
            {
                workOuts && workOuts.map((workout) => (
                    <p key={workout._id}>{workout.title}</p>
                ))
            }
        </div>
    </div> );
}
 
export default Home;