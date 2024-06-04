import { useState } from "react"
import { Box } from "@mui/material"
import HeroBanner from "../../components/HeroBanner/HeroBanner"
import SearchExercises from "../../components/SearchExercises/SearchExercises"
import Exercises from "../../components/Exercises/Exercises"

const Home: React.FC = () => {

  
  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  )
}

export default Home
