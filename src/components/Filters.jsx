export default function Filters({
    city,
    setCity,
    type,
    setType,
    level,
    setLevel
}) {
    return (
        <div className="filters">
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="">Todas</option>
                <option value="Madrid">Madrid</option>
                <option value="Alcobendas">Alcobendas</option>
            </select>
            <select value={type} onChange={(e) => setType(e.target.value)}>
                <option value="">Todos</option>
                <option value="Urbano">Urbano</option>
                <option value="Parque">Parque</option>
                <option value="Plano">Plano</option>
                <option value="Bowl">Bowl</option>
            </select>
            <select value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="">Todos</option>
                <option value="Principiante">Principiante</option>
                <option value="Intermedio">Intermedio</option>
                <option value="Avanzado">Avanzado</option>
            </select>
        </div>
    )
}