import { useParams } from "react-router-dom";

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

            <p>ubicación: {spot.city}</p>

            <p>tipo: {spot.type}</p>

            <p>nivel: {spot.level}</p>

            <p>descripción: {spot.description}</p>
        </div>
    );
}