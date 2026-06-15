import { Link } from "react-router-dom";
import { LEVELS } from "../constants/levels";
import { getLevelIcon } from "../utils/levelIcons";
import { getLevelClass } from "../utils/levelBadge";

export default function SpotCard({spot, onSelect}){
    return(
        <div
            className="spot-card"
            onClick={() => onSelect?.(spot)}
        >
            <div className="spot-card">
                <h3>{spot.name}</h3>
                <p>Ubicación: {spot.city}</p>
                <p>Tipo: {spot.type}</p>
                <p className={`badge ${getLevelClass(spot.level)}`}>
                    Nivel: {LEVELS[spot.level.toUpperCase()].icon} {spot.level}
                </p>
                <p>Superficie: {spot.surface}</p>
                <p>Iluminación: {spot.lighting ? "Sí" : "No"}</p>
                <p>Cubierta: {spot.covered ? "Sí" : "No"}</p>
            </div>
            <button>Ver detalle</button>
        </div>
        
    );
}