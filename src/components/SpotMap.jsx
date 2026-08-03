import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap
} from "react-leaflet";
import { useEffect } from "react";

// Controlador del mapa
function MapController({ selectedSpot }) {
    const map = useMap();

    useEffect(() => {
        if (selectedSpot) {
            map.flyTo(
                [selectedSpot.lat, selectedSpot.lng],
                15
            );
        }
    }, [selectedSpot]);

    return null;
}

export default function SpotMap({ spots, selectedSpot, setSelectedSpot, style }) {
    const defaultStyle = {
        height: "500px",
        width: "100%",
    };

    return (
        <MapContainer
            center={[40.4168, -3.7038]}
            zoom={11}
            style={style || defaultStyle}
            zoomControl={false}
        >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <MapController selectedSpot={selectedSpot} />

            {spots.map((spot) => (
                <Marker
                    key={spot.id}
                    position={[spot.lat, spot.lng]}
                    eventHandlers={{
                        click: () => setSelectedSpot && setSelectedSpot(spot)
                    }}
                >
                    <Popup>
                        <strong>{spot.name}</strong>
                        <br />
                        {spot.city}
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
}