import SpotCard from "../components/SpotCard";
import { Link } from "react-router-dom";
import { useState } from "react";
import Filters from "../components/Filters";


export default function Home({ spots }) {
    const [city, setCity] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");

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
    })


    return (
        <div>
            <h1>Rolling Spot</h1>

            <Filters
                city={city}
                setCity={setCity}
                type={type}
                setType={setType}
                level={level}
                setLevel={setLevel}
            />

            <Link to="/new-spot">
                <button>Añadir Spot</button>
            </Link>

            {filteredSpots.map((spot) => (
                <SpotCard
                    key={spot.id}
                    spot={spot}
                />
            ))}

            <p>
                🛹 {filteredSpots.length} spots encontrados
            </p>
        </div>
    );
}