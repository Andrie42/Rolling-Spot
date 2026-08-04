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
    const [surface, setSurface] = useState("");
    const [image, setImage] = useState(null);

    // Booleanos bien inicializados
    const [lighting, setLighting] = useState(false);
    const [covered, setCovered] = useState(false);

    const [description, setDescription] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        const newSpot = {
            id: spots.length + 1,
            name,
            city,
            type,
            level,
            surface,
            lighting,
            covered,
            description,
            image
        };

        setSpots([...spots, newSpot]);

        navigate("/");
    }

    function handleImageChange(e) {
        const file = e.target.files[0];

        if (file) {
            setImage(URL.createObjectURL(file));
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Nuevo Spot</h1>

            <input
                placeholder="Nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br />

            <input
                type="file"
                accept="image/*"
                value={image}
                onChange={handleImageChange}
            />

            <br />

            <input
                placeholder="Ciudad"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />

            <br />

            <input
                placeholder="Tipo"
                value={type}
                onChange={(e) => setType(e.target.value)}
            />

            <br />

            <input
                placeholder="Nivel"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
            />

            <br />

            <input
                placeholder="Superficie (ej: Liso, Rugoso, Adoquinado, etc.)"
                value={surface}
                onChange={(e) => setSurface(e.target.value)}
            />

            <br />

            {/* CHECKBOX: iluminación */}
            <label>
                <input
                    type="checkbox"
                    checked={lighting}
                    onChange={(e) =>
                        setLighting(e.target.checked)
                    }
                />
                Tiene iluminación
            </label>

            <br />

            {/* CHECKBOX: cubierto */}
            <label>
                <input
                    type="checkbox"
                    checked={covered}
                    onChange={(e) =>
                        setCovered(e.target.checked)
                    }
                />
                Es cubierto
            </label>

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