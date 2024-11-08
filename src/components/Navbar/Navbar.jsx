import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { yellow } from "@mui/material/colors";

const NavBar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <Button
          sx={{
            marginLeft: 2,
            width: 100,
            backgroundColor: yellow[700], 
            color: "white", 
            "&:hover": {
              backgroundColor: yellow[800], 
            },
          }}
          variant="contained"
        >
          Inicio
        </Button>
      </Link>
      <Link to={"/characters/race/Human"}>
        <Button
          sx={{
            marginLeft: 2,
            width: 100,
            backgroundColor: yellow[700],
            color: "white",
            "&:hover": {
              backgroundColor: yellow[800],
            },
          }}
          variant="contained"
        >
          Humanos
        </Button>
      </Link>
      <Link to={"/characters/race/NonHuman"}>
        <Button
          sx={{
            marginLeft: 2,
            width: 150,
            backgroundColor: yellow[700],
            color: "white",
            "&:hover": {
              backgroundColor: yellow[800],
            },
          }}
          variant="contained"
        >
          No Humanos
        </Button>
      </Link>
      <Link to={"/details"}>
        <Button
          sx={{
            marginLeft: 2,
            width: 100,
            backgroundColor: yellow[700],
            color: "white",
            "&:hover": {
              backgroundColor: yellow[800],
            },
          }}
          variant="contained"
        >
          Acerca
        </Button>
      </Link>
    </nav>
  );
};

export default NavBar;
