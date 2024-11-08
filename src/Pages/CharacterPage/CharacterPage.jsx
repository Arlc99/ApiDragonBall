import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

import CharCard from "../../components/CharCard/CharCard";
import "./CharacterPage.css";

const CharacterPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { race } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dragonball-api.com/api/characters?limit=50");
        setData(response.data.items);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [race]);

  const filteredData = race === "NonHuman" 
    ? data.filter((elem) => elem.race !== "Human")
    : data.filter((elem) => elem.race === race);

  return (
    <main id="character-page">
      <h1 id="title-character">Características</h1>
      <div id="characters-race">
        {loading ? (
          <p>Cargando personajes...</p>
        ) : filteredData.length > 0 ? (
          filteredData.map((element) => (
            <div key={element.id}>
              <Link to={`/about/${element.id}`}>
                <CharCard 
                  img={element.image} 
                  nombre={element.name} 
                  race={element.race} 
                  genero={element.gender} 
                  ki={element.ki} 
                  kimax={element.maxKi} 
                  grupo={element.affiliation} 
                />
              </Link>
            </div>
          ))
        ) : (
          <p>No hay personajes disponibles para la raza seleccionada.</p>
        )}
      </div>
    </main>
  );
}

export default CharacterPage;
