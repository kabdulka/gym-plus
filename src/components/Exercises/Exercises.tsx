import React from 'react'
import { ExerciseType } from '../../types'

type ExercisesProp = {
  bodyPart: string,
  setBodyPart: (bodyPart: string) => void,
  setExercises: (exercises: ExerciseType[]) => void
}


const Exercises: React.FC<ExercisesProp> = () => {
  return (
    <div>
      Exercises
    </div>
  )
}

export default Exercises
