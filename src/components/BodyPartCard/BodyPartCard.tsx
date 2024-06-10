import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from "../../assets/icons/gym.png";
import { width } from '@mui/system';

type BodyPartCardProp = {
  item: string;
  bodyPart: string
  setBodyPart: (bodyPart: string) => void,
  // HERE working on types
};

const BodyPartCard: React.FC<BodyPartCardProp> = ({ item, bodyPart, setBodyPart }) => {
  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      // type="button"
      sx={{
        borderTop: bodyPart === item ? "0.25rem solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "1.25rem",
        width: "270px", 
        height: "280px",
        cursor: "pointer",
        gap: "47px"
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" })
      }}
    >
      <img src={Icon} alt="dumbbell" style={{ width: "40px", height: "40px" }}/>
      <Typography
        fontSize="1.25rem" fontWeight="bold" color="#3A1212" textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPartCard;