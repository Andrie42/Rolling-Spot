import SpotCard from "../components/SpotCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import Filters from "../components/Filters";
import SpotMap from "../components/SpotMap";

export default function Home({ spots }) {

    // Estado de los filtros seleccionados por el usuario
    const [city, setCity] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");

    // Obtiene valores únicos para rellenar automáticamente
    // los desplegables de filtros
    const cities = [...new Set(
        spots.map((spot) => spot.city)
    )];

    const types = [...new Set(
        spots.map((spot) => spot.type)
    )];

    const levels = [...new Set(
        spots.map((spot) => spot.level)
    )];

    // Filtra los spots según los criterios seleccionados
    const filteredSpots = spots.filter((spot) => {

        const cityMatch =
            city === "" || spot.city === city;

        const typeMatch =
            type === "" || spot.type === type;

        const levelMatch =
            level === "" || spot.level === level;

        return (
            cityMatch &&
            typeMatch &&
            levelMatch
        );
    });

    const [selectedSpot, setSelectedSpot] = useState(null);
    
    return (
        <div>

            <h1>🛹 Rolling Spot</h1>

            {/* Componente encargado de mostrar los filtros */}
            <Filters
                city={city}
                setCity={setCity}
                type={type}
                setType={setType}
                level={level}
                setLevel={setLevel}
                cities={cities}
                types={types}
                levels={levels}
            />

            <SpotMap
                spots={filteredSpots}
                selectedSpot={selectedSpot}
                setSelectedSpot={setSelectedSpot}
            />

            {/* Navega al formulario para crear un nuevo spot */}
            <Link to="/new-spot">
                <button>Añadir Spot</button>
            </Link>

            {/* Número de resultados encontrados */}
            <p>
                🛹 {filteredSpots.length} spots encontrados
            </p>

            {/* Lista de spots filtrados */}
            {filteredSpots.map((spot) => (
                <SpotCard
                    key={spot.id}
                    spot={spot}
                    onSelect={setSelectedSpot}
                />
            ))}

        </div>
    );
}