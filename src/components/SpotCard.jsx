import { Link } from "react-router-dom";

export default function SpotCard({spot}){
    return(
        <Link 
        to={`/spot/${spot.id}`}
        style={{textDecoration: "none", color: "inherit"}}
        >
            <div className="spot-card">
                <h3>{spot.name}</h3>
                <p>Ubicación: {spot.city}</p>
                <p>Tipo: {spot.type}</p>
                <p>Nivel: {spot.level}</p>
            </div>
        </Link>
    );
}