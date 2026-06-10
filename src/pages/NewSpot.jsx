import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewSpot({
    spots,
    setSpots,
}) {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [city, setCity] = useState("");
    const [type, setType] = useState("");
    const [level, setLevel] = useState("");
    const [description, setDescription] =
        useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newSpot = {
            id: spots.length + 1,
            name,
            city,
            type,
            level,
            description,
        };

        setSpots([...spots, newSpot]);

        navigate("/");
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Nuevo Spot</h1>

            <input
                placeholder="Nombre"
                value={name}
                onChange={(e) =>
                    setName(e.target.value)
                }
            />

            <br />

            <input
                placeholder="Ubicación"
                value={city}
                onChange={(e) =>
                    setCity(e.target.value)
                }
            />

            <br />

            <input
                placeholder="Tipo"
                value={type}
                onChange={(e) =>
                    setType(e.target.value)
                }
            />

            <br />

            <input
                placeholder="Nivel"
                value={level}
                onChange={(e) =>
                    setLevel(e.target.value)
                }
            />

            <br />

            <textarea
                placeholder="Descripción"
                value={description}
                onChange={(e) =>
                    setDescription(e.target.value)
                }
            />

            <br />

            <button type="submit">
                Guardar
            </button>
        </form>
    );
}