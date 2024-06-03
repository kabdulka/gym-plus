import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import logo from "../../assets/images/Logo.png";

const Navbar: React.FC = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        gap: {
          sm: "122px",
          xs: "40px",
        },
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none ",
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={logo}
          style={{
            width: "48px",
            height: "48px",
            margin: "0 1.25rem ",
          }}
        />
      </Link>
      <Stack
        direction="row"
        gap="2.5rem"
        fontSize="1.5rem"
        alignItems="flex-end"
      >
        <Link
          to="/home"
          style={{
            textDecoration: "none",
            color: "#3A1212",
            borderBottom: "3px solid #FF2625",
          }}
        >
          Home
        </Link>
        <a
          href="#exercises"
          style={{
            textDecoration: "none",
            color: "#3A1212",
          }}
        >
          Exercises
        </a>

        <Link to="/home"></Link>
      </Stack>
    </Stack>
  );
};

export default Navbar;
