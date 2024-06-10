import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import { Height } from "@mui/icons-material";
import axios from "axios";
import HorizontalScrollBar from "../HorizontalScrollBar/HorizontalScrollBar";
import { ExerciseType } from "../../types";

type SearchExercisesProp = {
  bodyPart: string;
  setBodyPart: (bodyPart: string) => void;
  setExercises: (exercises: ExerciseType[]) => void;
};

const SearchExercises: React.FC<SearchExercisesProp> = ({
  bodyPart,
  setBodyPart,
  setExercises,
}) => {
  const [search, setSearch] = useState<string>("");
  const [bodyParts, setBodyParts] = useState<string[]>([]);

  useEffect(() => {
    const fetchBodyPartData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      console.log("BP List", bodyPartsData);

      setBodyParts(["all", ...bodyPartsData]);
    };
    setBodyParts(["All", "Back", "Cardio", "Chest", "Lower Arms", "Lower Legs", "Neck", "Shoulders", "Upper Arms", "Upper Legs", "Waist"]);

    // fetchBodyPartData();
  }, []);

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
    } else {
      alert("Please enter a seartch category or exercise");
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

      <Box position="relative" mb="72px">
        <TextField
          
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}>
        <HorizontalScrollBar
          data={bodyParts}
          bodyPart={bodyPart}
          setBodyPart={setBodyPart}
        />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
