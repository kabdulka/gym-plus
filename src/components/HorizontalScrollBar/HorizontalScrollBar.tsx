import { Box, Typography } from "@mui/material";
import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import BodyPartCard from "../BodyPartCard/BodyPartCard";
import { useContext } from "react";
import RightArrowIcon from "../../assets/icons/right-arrow.png"
import LeftArrowIcon from "../../assets/icons/left-arrow.png"

import "../../App.css";

type HorizontalScrollBarProp = {
  data: string[];
  bodyPart: string
  setBodyPart: (bodyPart: string) => void,
};

const RightArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()} className="right-arrow"
    >
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography
      onClick={() => scrollPrev()} className="left-arrow"
    >
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};


const HorizontalScrollBar: React.FC<HorizontalScrollBarProp> = ({ data, bodyPart, setBodyPart }) => {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item}
          itemID={item}
          title={item}
          m="0 40px"
          sx={{ display: 'flex' }} // Ensure items are displayed inline
        >
          <BodyPartCard item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
