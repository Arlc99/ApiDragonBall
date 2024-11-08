import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import axios from "axios";

import CharCard from "../../components/CharCard/CharCard";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://dragonball-api.com/api/characters?limit=50").then((char) =>
      setData(char.data.items)
    );
  }, []);

  return (
    <main id="home-page">
      <div>
        <h1>Inicio</h1>
      </div>
      <div id="characters">
        {data.map((element) => (
          <div key={element.id}>
            <Link to={"/details/" + element.id}>
              <CharCard
                img={element.image}
                nombre={element.name}
                race={element.race}
                genero = {element.gender}
                ki = {element.ki}
                kimax ={element.maxKi}
                grupo = {element.affiliation}
              />
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
