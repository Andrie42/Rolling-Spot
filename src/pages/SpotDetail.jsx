import { useParams } from "react-router-dom";
import { getLevelIcon } from "../utils/levelIcons";
import { LEVELS } from "../constants/levels";

export default function SpotDetail({ spots }) {
    const { id } = useParams();

    const spot = spots.find(
        (s) => s.id === Number(id)
    );

    if (!spot) {
        return <h2>Spot no encontrado</h2>;
    }

    return (
        <div>
            <h1>{spot.name}</h1>
            <p>Ubicación: {spot.city}</p>
            <p>Tipo: {spot.type}</p>
            <p>Nivel: {LEVELS[spot.level.toUpperCase()].icon} {spot.level}</p>
            <p>Superficie: {spot.surface}</p>
            <p>Iluminación: {spot.lighting ? "Sí" : "No"}</p>
            <p>Cubierta: {spot.covered ? "Sí" : "No"}</p>
            <p>Descripción: {spot.description}</p>
        </div>
    );
}