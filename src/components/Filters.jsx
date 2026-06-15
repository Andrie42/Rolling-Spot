export default function Filters({
    city,
    setCity,
    type,
    setType,
    level,
    setLevel,
    cities,
    types,
    levels,
}) {
    return (
        <div className="filters">
            <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
            >
                <option value="">Todas las ciudades</option>

                {cities.map((city) => (
                    <option
                        key={city}
                        value={city}
                    >
                        {city}
                    </option>
                ))}
            </select>
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
            >
                <option value="">Todos los tipos</option>

                {types.map((type) => (
                    <option
                        key={type}
                        value={type}
                    >
                        {type}
                    </option>
                ))}
            </select>
            <select
                value={level}
                onChange={(e) => setLevel(e.target.value)}
            >
                <option value="">Todos los niveles</option>

                {levels.map((level) => (
                    <option
                        key={level}
                        value={level}
                    >
                        {level}
                    </option>
                ))}
            </select>
        </div>
    )
}