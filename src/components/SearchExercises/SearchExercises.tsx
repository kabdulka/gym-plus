import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { Height } from "@mui/icons-material";
import axios from "axios";

type ExerciseType = {
  bodyPart: string;
  equipment: string;
  gifUrl: string;
  id: string;
  name: string;
  target: string;
  instructions: string[];
  secondaryMuscles: string[];
};

const SearchExercises: React.FC = () => {
  const [search, setSearch] = useState<string>("");
  const [exercises, setExercises] = useState<ExerciseType[]>([]);
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchBodyPartData = async () => {
      const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", exerciseOptions);
      setBodyParts(bodyPartsData);
      setBodyParts(["all", ...bodyPartsData])
    }

    fetchBodyPartData();
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearch(e.target.value.toLocaleLowerCase());
    console.log(search);
  };

  const handleSearch = async () => {
    console.log(search);

    if (search) {
      const exercisesData: ExerciseType[] = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises?limit=2000&offset=0",
        exerciseOptions
      );
      const searchedExercises: ExerciseType[] = exercisesData.filter(
        (exercise: ExerciseType) =>
          exercise.name.toLocaleLowerCase().includes(search) ||
          exercise.equipment.toLocaleLowerCase().includes(search) ||
          exercise.target.toLocaleLowerCase().includes(search) ||
          exercise.bodyPart.toLocaleLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);

      // console.log(exercisesData);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="1.25rem">
      <Typography
        fontWeight="700"
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="3.125rem"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="4.5rem">
        <TextField
          sx={{
            input: {
              fontWeight: "700",
              border: "none",
              borderRadius: "0.25rem",
              // height: "4rem"
            },
            width: { lg: "800px", md: "500px", sm: "400px", xs: "280px" },
            backgroundColor: "#fff",
          }}
          value={search}
          // onChange={(e) => setSearch(e.target.value)}
          onChange={handleInputChange}
          placeholder="Search Exercises"
          type="text"
        />

        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "1.25rem", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box>
        
      </Box>
    </Stack>
  );
};

export default SearchExercises;
