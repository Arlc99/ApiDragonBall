import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const CharCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(8px)", 
       
        border: "1px solid rgba(255, 255, 255, 0.3)", 

        color: "#B0B0D0", 
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.6)",
        borderRadius: 2,
        transition: "0.3s",
        "&:hover": {
          boxShadow: "0 8px 16px rgba(0, 0, 0, 0.8)",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            height: 300,
            objectFit: "scale-down",
            objectPosition: "center top",
            borderTopLeftRadius: "8px",
            borderTopRightRadius: "8px",
            border: " 1px solid #3E497A",
            overflow: "visible",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)",
            transition: "0.3s",
            "&:hover": {
              boxShadow: "0 4px 15px rgba(255, 215, 0, 0.5)",
            },
          }}
          image={props.img}
          alt="Character image"
        />
        <CardContent
          sx={{
            textAlign: "center",
            padding: 2,
            "& .MuiTypography-root": {
              color: "#FFD700", 
              marginBottom: "4px",
            },
          }}
        >
          <Typography gutterBottom variant="h5" component="div" >
            {props.nombre}
          </Typography>
          <Typography variant="body2">Raza: {props.race}</Typography>
          <Typography variant="body2">Género: {props.genero}</Typography>
          <Typography variant="body2">Ki: {props.ki}</Typography>
          <Typography variant="body2">Ki Máximo: {props.kimax}</Typography>
          <Typography variant="body2">Grupo: {props.grupo}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

CharCard.defaultProps = {
  img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8GAcNf2A8wsr7rHBPhxfvi36V6Aq2kswNUg&s",
  nombre: "_____",
  race: "____",
  genero: "",
  ki: "",
  kimax: "",
  grupo: "",
};

export default CharCard;
