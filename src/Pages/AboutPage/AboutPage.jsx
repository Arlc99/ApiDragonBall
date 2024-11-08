import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import CharCard from "../../components/CharCard/CharCard";
import "./AboutPage.css";

const AboutPage = () => {
  const [data, setData] = useState(null);
  const { id } = useParams(); // Obtener el ID del personaje desde la URL

  useEffect(() => {
    // Obtener datos del personaje por ID
    axios.get(`https://dragonball-api.com/api/characters/${id}`)
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error al obtener los datos del personaje:", error));
  }, [id]);

  // Verificar si los datos están cargados
  if (!data) {
    return <p>Cargando datos del personaje...</p>;
  }

  return (
    <main id='character-page'>
      <h1 id="title-character">Detalles del Personaje</h1>
      <CharCard 
        img={data.image} 
        nombre={data.name} 
        race={data.race} 
        genero={data.gender} 
        ki={data.ki} 
        kimax={data.maxKi} 
        grupo={data.affiliation} 
      />
      <p>{data.description}</p> {/* Agregar descripción del personaje */}
    </main>
  );
}

export default AboutPage;