import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
} from "react-leaflet";

export default function SpotMap({ spots }) {
    return (
        <MapContainer
            center={[40.4168, -3.7038]}
            zoom={11}
            style={{
                height: "500px",
                width: "100%",
            }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {spots.map((spot) => (
                <Marker
                    key={spot.id}
                    position={[spot.lat, spot.lng]}
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