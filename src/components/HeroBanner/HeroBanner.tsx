import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import heroBannerImage from "../../assets/images/banner.png"
import { Padding } from "@mui/icons-material";

const HeroBanner: React.FC = () => {
  // mt = margin top
  // ml = margin left
  // p = padding
  return (
    <Box
      sx={{
        mt: { lg: "212px", sx: "70px" }, 
        ml: { sm: "50px" } ,
      }} position="relative" p="1.25rem"
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="1.625rem">
        Fitness Club
      </Typography>
      <Typography fontWeight="700" sx={{
        fontSize: { lg: "45px", xs: "40px"}
      }}
        mb="23px" mt="30px"
      >
        Sweat, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effectice exercises
      </Typography>

      <Button href="#exercises" variant="contained" color="error"
        sx={{
          backgroundColor: "#ff2625",
          padding: "0.67rem"
        }}
      > Explore Exercises </Button>
      <Typography fontWeight="600" color="#ff2625"  fontSize="200px"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none"}
        }}
      
      >
        Exercise
      </Typography>
      <img src={heroBannerImage} alt="banner" className="hero-banner-img"/>

    </Box>
  );
};

export default HeroBanner;
