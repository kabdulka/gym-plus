import { useState } from "react"
import { Box } from "@mui/material"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import SearchExercises from "../../components/SearchExercises/SearchExercises"
import Exercises from "../../components/Exercises/Exercises"
import { ExerciseType } from "../../types"

const Home: React.FC = () => {

  const [exercises, setExercises] = useState<ExerciseType[]>([]);
  const [bodyPart, setBodyPart] = useState<string>("All");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
        />
      <Exercises 
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setExercises={setExercises}
      />
    </Box>
  )
}

export default Home
